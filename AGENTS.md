<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Header destinations use dedicated TanStack routes and Link active states, so navigation works from every page.
- Standalone section pages reuse the original site sections through ContentPage to keep content and styling consistent with the homepage.
- The booking page embeds the existing Cal.com hosted scheduler and retains a direct external fallback, so booking stays managed by Cal.com without duplicating scheduling logic.
