# Design system

Bright, rounded, and friendly: a violet brand colour, a sunny yellow highlight, a bright colour owned by each material, big soft shapes and plenty of whitespace.

## Tokens (`src/styles/global.css`)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--bg` | `#f5f2ff` | `#130f26` | Page background |
| `--surface` | `#ffffff` | `#1e1838` | Cards, panels |
| `--ink` | `#1b1340` | `#f3f0ff` | Text |
| `--muted` | `#4b4470` | `#b8afdc` | Secondary text (>= 4.5:1) |
| `--field` | `#6f68a0` | `#8f87bf` | Borders of interactive controls (>= 3:1) |
| `--brand` | `#5b3df5` | `#a99bff` | Selected state, active nav, links |
| `--sun` | `#ffd23f` | `#ffd23f` | Highlights and the focus halo. Text on it is always dark ink |
| `--tint-*` | pastel | deep tone | Panel backgrounds: mint (good), pink (cons), sun (settings), lilac (ratings) |

Each material's colour comes from its `color` frontmatter. Text on its tile is picked automatically (`src/lib/color.ts`) as dark or white, whichever has more contrast.

## Shape and motion

Radius 28 px for cards and tiles, 18 px for inner media, pills (999 px) for chips, buttons and badges. Soft layered shadows; hover lifts a card with a small bounce. All motion is off under `prefers-reduced-motion`.

## Type (self-hosted via Fontsource, no third-party requests)

- **Display:** Fredoka variable, 600/700, for headings and material names.
- **Body:** Nunito variable at 17 px / 1.7.

## Components

| Component | Notes |
|-----------|-------|
| Material tile (`.mat-card`) | Top-level category: big colour block with decorative circles, name, variant count pill, then summary and spool swatches |
| Filament card (`.card`) | Spool swatch, material label, name, summary, up to two tags, three ratings. Grid or list layout |
| Swatch (`Swatch.astro`) | Top view of a spool in the filament's colour. Decorative, always paired with a text name |
| Toggle chip (`.chip`) | Pill with an emoji. Selected state is a brand fill plus a check mark |
| Rating dots | Five round dots plus `n/5` text and a screen-reader sentence |
| Panels | Tinted rounded blocks for good-for, ratings, settings, pros, cons |
| View toggle | Cards / List pill switch, `aria-pressed` buttons |
| Sources | Cited references at the bottom of an entry |

## Accessibility rules

- Contrast: text >= 4.5:1, UI boundaries >= 3:1 in both themes (checked with axe-core and Lighthouse).
- Targets: interactive controls are at least 44 px tall.
- Focus: a visible 3 px outline with a 7 px yellow halo on every focusable element. Skip link first.
- State is never conveyed by colour alone: check marks, ✓/✕ glyphs, text labels. Emoji are decorative and hidden from screen readers.
- Honours `prefers-color-scheme`, `prefers-reduced-motion`, and `forced-colors`.
- Headings do not skip levels. Filter groups are `fieldset` + `legend`. Live regions announce result counts.
- Reflows to 320 px without horizontal scroll (finder tiles go single-column below 400 px).

## Checking it

With the site built and served (`npm run build && npm run preview`), run axe-core against each page type in light and dark, including the finder results state and list view, plus a 320 px overflow check. The project has no test runner, so this is done ad hoc.
