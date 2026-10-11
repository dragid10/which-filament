# Contributing

Thanks for helping people pick the right filament! Contributions of all sizes are welcome: typo fixes, corrected numbers, new filament types, better photos.

## Quick ways to help

- **Something wrong?** Open a ["Correct information"](../../issues/new/choose) issue.
- **Missing a filament?** Open an ["Add a filament"](../../issues/new/choose) issue.
- **Want to do it yourself?** Edit or add a Markdown file and open a pull request (below). You can do the whole thing from the GitHub web editor.

## Add a filament

1. Copy an existing file in `src/content/filaments/` (e.g. `pla-plus.md`) to a new file. The file name becomes the URL, so use lowercase words with dashes: `src/content/filaments/rapid-petg.md` → `/filaments/rapid-petg`.
2. Fill in the frontmatter (between the `---` lines):

| Field | Notes |
|-------|-------|
| `title` | Display name, e.g. `Rapid PETG` |
| `material` | File name of a material in `src/content/materials/` (`pla`, `petg`) |
| `summary` | One sentence, max 200 characters |
| `color` | Hex colour for the fallback spool image, e.g. `"#8b5cf6"` |
| `aliases` | Other names people search for |
| `ratings` | Seven scores from 1 to 5: strength, heat, flex, ease, speed, finish, durability |
| `goodFor` / `avoidFor` | Use-case ids from `src/data/useCases.ts` |
| `settings` | Typical `nozzle` and `bed` temps, optional `speed` and `cooling` |
| `needs` | Things required to print it well (dry box, fast printer, ...) |
| `priceTier` | `"$"`, `"$$"` or `"$$$"` relative to plain PLA |
| `image` (optional) | Path under `public/`, plus `imageAlt` and `imageCredit` |

3. Write the body in Markdown. Follow the existing structure: **When to pick it**, **Watch out for**, **Tips**.
4. Run `npm install` then `npm run check` to validate. The error messages say exactly which field is wrong.
5. Open a pull request. CI runs the same check and a build.

### Adding a new material

Add `src/content/materials/<name>.md` (see `pla.md`). Then filaments can use `material: <name>`.

### Adding a new use case

Edit `src/data/useCases.ts`: add an id, label, hint, and which ratings it weighs. Then reference the id in `goodFor` / `avoidFor`.

## Guidelines for content

- **Be accurate and general.** Ratings describe a *typical* filament of that type, not one brand. Mention when brands differ.
- **Cite when you can.** For numbers like temperatures or heat resistance, link a manufacturer datasheet or reputable test in the PR description.
- **Be practical.** Answer "what should I print this in?", not "what is the chemistry".
- **Photos:** only submit images you took, or ones with a license that allows reuse. Fill in `imageCredit`. Keep files under ~300 KB (resize and compress).
- **No affiliate links** and no brand promotion. Brand names are fine as examples of what you tested.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
```

Optional but recommended: install the pre-commit hooks (secret scanning, whitespace, content validation):

```bash
pip install pre-commit   # or: brew install pre-commit
pre-commit install
```

## Commit and PR style

Short, imperative commit messages (`Add matte PETG`, `Fix PLA+ nozzle range`). One topic per PR makes review quick.

## Conduct

Be kind. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
