# Design system

Warm neutral and calm: an eggshell page, tan secondary surfaces, near-black ink, and nothing else. There is no accent colour and no decorative colour (a filament type comes in every colour, so showing one would mislead). A light/dark toggle follows the system by default and remembers the visitor's choice.

## Tokens (`src/styles/global.css`, `light-dark()` pairs)

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--bg` | `#f4efe4` | `#17140f` | Page background (eggshell) |
| `--surface` | `#fdfbf6` | `#211d16` | Cards, panels |
| `--surface-2` | `#e9e0cf` | `#2d271d` | Tan: tiles, media wells, toggles |
| `--ink` | `#1f1a14` | `#f3ede2` | Text and the "accent" (selected states, active nav) |
| `--muted` | `#5a5043` | `#b5aa97` | Secondary text (>= 4.5:1) |
| `--field` | `#7d705d` | `#948871` | Borders of interactive controls (>= 3:1) |
| `--good` / `--warn` | `#1c6b3c` / `#a8321f` | `#86efac` / `#ffab91` | Check and cross marks only |

The theme follows `prefers-color-scheme` until the visitor uses the toggle, which sets `data-theme` on `<html>` and saves it in `localStorage` (applied before first paint to avoid a flash).

## Shape and motion

Radius 14 px for cards and tiles, 10 px for inner media, pills (999 px) for chips, buttons and badges. Soft layered shadows; hover lifts a card with a small bounce. All motion is off under `prefers-reduced-motion`.

## Type (self-hosted via Fontsource, no third-party requests)

- **One family:** Inter variable (clean and neutral, not rounded) for everything: 800 for the page title, 700 for headings, 400 for body at 16 px / 1.6.

## Components

| Component | Notes |
|-----------|-------|
| Material tile (`.mat-card`) | Top-level category: tan header with the name and a variant count, then summary and the list of variant names |
| Filament card (`.card`) | Material label, name, summary, up to two tags, three ratings. Grid or list layout. A photo appears on top only when the entry has an `image` |
| Toggle chip (`.chip`) | Pill with an emoji. Selected state is an ink fill plus a check mark |
| Rating dots | Five round dots plus `n/5` text and a screen-reader sentence |
| Panels | Tan blocks for good-for, ratings, settings, pros, cons |
| Theme toggle | Header button, `aria-pressed` reflects dark mode |
| View toggle | Cards / List pill switch, `aria-pressed` buttons |
| Sources | Cited references at the bottom of an entry |

## Accessibility rules

- Contrast: text >= 4.5:1, UI boundaries >= 3:1 in both themes (checked with axe-core and Lighthouse).
- Targets: interactive controls are at least 44 px tall.
- Focus: a visible 3 px ink outline with a tan halo on every focusable element. Skip link first.
- State is never conveyed by colour alone: check marks, ✓/✕ glyphs, text labels. Emoji are decorative and hidden from screen readers.
- Honours `prefers-color-scheme`, `prefers-reduced-motion`, and `forced-colors`.
- Headings do not skip levels. Filter groups are `fieldset` + `legend`. Live regions announce result counts.
- Reflows to 320 px without horizontal scroll (finder tiles go single-column below 400 px).

## Checking it

With the site built and served (`npm run build && npm run preview`), run axe-core against each page type in light and dark, including the finder results state and list view, plus a 320 px overflow check. The project has no test runner, so this is done ad hoc.

## Layout

- **Home:** a sticky left sidebar holds the "What are you printing?" options; the main column shows the material tiles, then ranked results as soon as an option is picked. No hero, so the useful content is visible without scrolling. Below 900 px the sidebar becomes a collapsible section above the results with a "Show results" button.
- **Detail pages:** text on the left, key facts (good for, ratings, settings) in a sticky right column, which splits into two columns on very wide screens.
- **Container:** up to 1760 px wide so large monitors are used rather than left empty.
