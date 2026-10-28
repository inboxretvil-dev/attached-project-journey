// After a new deploy, an already-open tab may still ask for a route chunk whose
// hashed file no longer exists on the server, and the page goes blank. Recover by
// reloading once (guarded) so the browser picks up the current build.

const RELOAD_KEY = "lovable:stale-chunk-reload-at";
const RELOAD_COOLDOWN_MS = 15_000;

const STALE_CHUNK_PATTERNS = [
  /Failed to fetch dynamically imported module/i,
  /error loading dynamically imported module/i,
  /Importing a module script failed/i,
  /ChunkLoadError/i,
  /Loading chunk \S+ failed/i,
];

const CAUSE_DEPTH_LIMIT = 5;

function describeError(error: unknown): string {
  const parts: string[] = [];
  let current: unknown = error;

  for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
    if (current instanceof Error) {
      parts.push(current.message, current.name);
      current = current.cause;
    } else {
      parts.push(String(current));
      break;
    }
  }

  return parts.join("\n");
}

export function isStaleChunkError(error: unknown): boolean {
  const text = describeError(error);
  return STALE_CHUNK_PATTERNS.some((pattern) => pattern.test(text));
}

// sessionStorage can be unavailable (private mode) or throw, so keep an in-page
// fallback; without it a build that genuinely cannot load would reload forever.
let memoryLast: number | null = null;

// Claim the single reload allowed per cooldown window. Returns false when one
// already happened inside the cooldown.
export function claimStaleChunkReload(
  storage: Pick<Storage, "getItem" | "setItem"> | null =
    typeof window === "undefined" ? null : window.sessionStorage,
  now: number = Date.now(),
): boolean {
  let last = memoryLast;

  if (storage) {
    try {
      const stored = storage.getItem(RELOAD_KEY);
      last = stored == null ? null : Number(stored);
    } catch {
      // Fall back to the in-page record below.
    }
  }

  if (last != null && Number.isFinite(last) && now - last < RELOAD_COOLDOWN_MS) return false;

  memoryLast = now;

  if (storage) {
    try {
      storage.setItem(RELOAD_KEY, String(now));
    } catch {
      // Record kept in memory only.
    }
  }

  return true;
}

export function recoverStaleChunk(error: unknown): boolean {
  if (typeof window === "undefined") return false;
  if (!isStaleChunkError(error)) return false;
  if (!claimStaleChunkReload()) return false;

  window.location.reload();
  return true;
}

export function installStaleChunkRecovery(): () => void {
  if (typeof window === "undefined") return () => {};

  const onRejection = (event: PromiseRejectionEvent) => {
    if (recoverStaleChunk(event.reason)) event.preventDefault();
  };

  const onError = (event: ErrorEvent) => {
    if (recoverStaleChunk(event.error ?? event.message)) event.preventDefault();
  };

  window.addEventListener("unhandledrejection", onRejection);
  window.addEventListener("error", onError, true);

  return () => {
    window.removeEventListener("unhandledrejection", onRejection);
    window.removeEventListener("error", onError, true);
  };
}
