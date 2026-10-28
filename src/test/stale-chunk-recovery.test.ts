import { describe, expect, it } from "vitest";

import {
  claimStaleChunkReload,
  isStaleChunkError,
  recoverStaleChunk,
} from "@/lib/stale-chunk-recovery";

// The failure this guards: an open tab asking for a route chunk from the previous
// build, e.g. "Failed to fetch dynamically imported module:
// https://<host>/assets/routes-DN18i4jn.js", which blanks the screen.
const STALE = new TypeError(
  "Failed to fetch dynamically imported module: https://preview.lovable.app/assets/routes-DN18i4jn.js",
);

function workingStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => void values.set(key, value),
  };
}

function blockedStorage() {
  return {
    getItem: () => {
      throw new Error("SecurityError: storage is blocked");
    },
    setItem: () => {
      throw new Error("SecurityError: storage is blocked");
    },
  };
}

describe("stale chunk recovery", () => {
  it("recognizes the chunk fetch failure from the preview", () => {
    expect(isStaleChunkError(STALE)).toBe(true);
  });

  it("recognizes it wrapped in another error's cause", () => {
    expect(isStaleChunkError(new Error("router load failed", { cause: STALE }))).toBe(true);
  });

  it("ignores unrelated errors so real bugs are not hidden by a reload loop", () => {
    expect(isStaleChunkError(new Error("Cannot read properties of undefined"))).toBe(false);
    expect(isStaleChunkError(undefined)).toBe(false);
    expect(isStaleChunkError("boom")).toBe(false);
    expect(recoverStaleChunk(new Error("Cannot read properties of undefined"))).toBe(false);
  });

  it("allows one reload, then blocks a second inside the cooldown", () => {
    const storage = workingStorage();

    expect(claimStaleChunkReload(storage, 200_000)).toBe(true);
    expect(claimStaleChunkReload(storage, 201_000)).toBe(false);
    expect(claimStaleChunkReload(storage, 216_000)).toBe(true);
  });

  it("still limits reloads when storage is blocked", () => {
    const storage = blockedStorage();

    expect(claimStaleChunkReload(storage, 400_000)).toBe(true);
    expect(claimStaleChunkReload(storage, 401_000)).toBe(false);
  });
});
