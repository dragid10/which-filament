# Design system

A material spec-sheet / swatch-library look: cool paper, near-black ink, one electric-lime highlight, sharp corners, hairline structure, hard-offset shadows.

## Tokens (`src/styles/global.css`)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--bg` | `#eef1f3` | `#0c1014` | Page background |
| `--surface` | `#ffffff` | `#141a21` | Cards, panels |
| `--ink` | `#0b0f14` | `#eef2f6` | Text, borders, shadows |
| `--muted` | `#46515c` | `#a3afbb` | Secondary text (>= 4.5:1 on bg and surface) |
| `--field` | `#56626d` | `#7f8b97` | Borders of interactive controls (>= 3:1) |
| `--accent` | `#c8f542` | `#d2ff45` | Highlight: selected state, active nav, hover |
| `--on-accent` | `#0b0f14` | `#0b0f14` | Text on accent. Always dark, in both themes |
| `--good` / `--warn` | `#0a6b2f` / `#a8201a` | `#6ee7a0` / `#ff9a93` | Good-for / avoid text (never used alone, a +/− glyph accompanies it) |

Material tiles take their colour from the material's `color` frontmatter. Text on a tile is picked automatically (`src/lib/color.ts`) as black or white, whichever has more contrast.

## Type (self-hosted via Fontsource, no third-party requests)

- **Display:** Archivo variable, condensed (`font-stretch: 72%`), 800, uppercase. For `h1` and the material names.
- **Body:** IBM Plex Sans 400/600.
- **Labels and data:** IBM Plex Mono 400/500, uppercase and letter-spaced.

## Components

| Component | Notes |
|-----------|-------|
| Material tile (`.mat-card`) | Top-level category: big colour block with name, then summary and variant swatches |
| Filament card (`.card`) | Swatch, material label, name, summary, tags, ratings. Grid or list layout (`.list-view`) |
| Swatch (`Swatch.astro`) | Decorative colour chip with printed layer lines. Always paired with a text name |
| Toggle chip (`.chip`) | Square checkbox tile. Selected state is shown by a check mark and fill, not colour alone |
| Rating bars | Five segments plus `n/5` text, with a screen-reader sentence |
| View toggle | Cards / List, `aria-pressed` buttons |
| Sources | Cited references at the bottom of an entry |

## Accessibility rules

- Contrast: text >= 4.5:1, UI boundaries >= 3:1 in both themes (checked with axe-core).
- Targets: interactive controls are at least 44 px tall.
- Focus: a visible 3 px ink outline with a 6 px lime halo on every focusable element. Skip link first.
- State is never conveyed by colour alone (check marks, +/− glyphs, text labels).
- Honours `prefers-color-scheme`, `prefers-reduced-motion`, and `forced-colors`.
- Headings do not skip levels. Filter groups are `fieldset` + `legend`. Live regions announce result counts.
- Layout reflows to 320 px without horizontal scroll.

## Checking it

With the site built and served (`npm run build && npm run preview`), run axe-core against each page type in light and dark, including the finder results state and list view. The project has no test runner, so this is done ad hoc. Add a CI job if it starts to regress.
