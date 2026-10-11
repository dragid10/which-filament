# which-filament

> "I want to print this object. Which filament should I use?"

Source for [which-filament.com](https://which-filament.com): a static guide to 3D printing filaments. Pick what you're printing and get a ranked shortlist of filament types (PLA, PETG, and variants like Rapid PLA, PLA+, Matte, Silk, and Rapid PETG) with reasons.

## Features

- **Finder**: choose your use cases and get filaments ranked with explanations.
- **Browse**: search, filter by material or use, sort by property, and switch between card and list views. Filtered views are shareable via the URL.
- **Examples**: common objects (phone stand, planter, car mount, ...) each with a best pick, runners-up, and what to avoid.
- **Pages** for every material and every filament type.
- **Content is Markdown**: one file per filament, validated by a schema in CI.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type + content schema validation
npm run build    # static output in dist/
```

Requires Node 20+ (CI uses 22).

## Project layout

```
src/content/materials/   one .md per material (PLA, PETG, ...)
src/content/filaments/   one .md per filament type
src/content/objects/     one .md per example object (references filaments)
src/content.config.ts    frontmatter schema (Zod)
src/data/useCases.ts     "what are you printing?" use cases and their weights
src/scripts/finder.ts    ranking logic
src/pages, components, layouts, styles
```

## Contributing

Adding or fixing a filament is editing one Markdown file. See [CONTRIBUTING.md](CONTRIBUTING.md). Please also read the [Code of Conduct](CODE_OF_CONDUCT.md).

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`, with the custom domain set in `public/CNAME`.

## License

Code: [MIT](LICENSE). Content (the Markdown in `src/content/`) is contributed under [CC BY 4.0](LICENSE-CONTENT.md).
