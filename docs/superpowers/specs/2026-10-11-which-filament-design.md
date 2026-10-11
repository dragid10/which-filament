# which-filament.com — design

## Intent
A static site that answers: **"I want to print this object — which filament should I use?"**
Beginner-friendly, opinionated, easy for anyone to extend by adding one Markdown file.

Success criteria
- A visitor can pick what they're printing (needs/use cases) and get a ranked shortlist of filament variants with reasons.
- Each material (PLA, PETG first) has its own page; each variant (Rapid PLA, PLA+, Matte, Silk, Rapid PETG, ...) has its own page.
- Browse page has search + filters.
- Adding or fixing a filament = editing/adding one `.md` file; the schema is validated in CI so bad PRs fail early.
- Hosted free (GitHub Pages) on `which-filament.com`; repo private until the owner says otherwise.

Assumptions (made by me, correctable)
- No real photos exist yet; entries support an optional `image`, and fall back to a tinted spool illustration using the entry's `color`.
- Ratings are relative 1-5 scores for typical filament of that type, not brand-specific measurements.
- Brand-specific products are out of scope for v1; variants are *types* (e.g. "Rapid PETG").

## Stack
Astro (static output) + content collections with Zod schema validation. Vanilla JS for search/filter/finder (no framework runtime). Plain CSS with design tokens, light + dark mode.

## Content model
- `src/content/materials/*.md` — PLA, PETG. Overview, pros/cons, general settings, body in Markdown.
- `src/content/filaments/*.md` — one per variant. Frontmatter: `title`, `material`, `summary`, `color`, `image?`, `aliases[]`, `ratings{strength,heat,flex,ease,speed,finish,durability}` (1-5), `goodFor[]`, `avoidFor[]` (from a fixed tag vocabulary), `settings{nozzle,bed,speed,...}`, `needs[]` (e.g. dry box, hardened nozzle), `priceTier`. Body: free Markdown ("when to pick it", tips).
- Tag vocabulary lives in `src/data/useCases.ts` (id, label, description, and which ratings it weighs) so the finder and the filters share one source.

## Pages
- `/` — hero + "What are you printing?" finder: choose use-case chips, see ranked results live.
- `/materials` — top-level categories (PLA, PETG, ...); the home page also leads with these until a use case is picked.
- `/materials/[slug]` — one material: overview plus its variants with search, use-case filters, sort, and card/list views.
- `/filaments` — secondary "search all variants" page across materials.
- `/filaments/[slug]` — variant detail: ratings, settings, good/avoid for, body, "compare with" siblings.
- `/contribute` — how to add an entry (also CONTRIBUTING.md).
- `/404`.

## Finder scoring
Each use case maps to rating weights plus hard tags. Score = weighted sum of ratings, +bonus for `goodFor` match, large penalty for `avoidFor` match. Runs client-side over JSON embedded at build time. Each result shows the matching reasons.

## Repo / infra
- GitHub Actions: CI (install, `astro check`, build) on PRs and main; Pages deploy workflow (manual trigger while private, since Pages needs a public repo or paid plan; switch to push-on-main when public). `public/CNAME` = which-filament.com.
- pre-commit: gitleaks (secrets), whitespace/EOF/YAML checks, large-file check, and content schema validation via `astro check`.
- Issue forms: "Add a filament", "Correct information"; PR template; CONTRIBUTING.md; CODE_OF_CONDUCT optional later.
- Private repo `dragid10/which-filament`, frequent small commits, no session links in commit messages.

## Out of scope for v1
Brand/product listings, price tracking, user accounts, comments, 3D-model upload/analysis.
