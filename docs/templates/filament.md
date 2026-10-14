---
# Copy this file to src/content/filaments/<lowercase-name-with-dashes>.md and fill it in.
# The file name becomes the URL. Run `npm run check` to validate.
title: Rapid PETG
material: petg            # pla | petg | abs | asa | tpu (file name in src/content/materials/)
order: 3                  # position within its material: base type = 1, then each step up
summary: One sentence, max 200 characters.
# homeUse: care           # optional: easy | care | industrial (only if it differs from the material)
# homeNote: What extra gear or safety steps it needs.
aliases: [other name people search for]
ratings: { strength: 3, heat: 2, flex: 2, ease: 3, speed: 5, finish: 3, durability: 3 }   # 1-5 each, for a typical filament of this type
goodFor: [prototype, fast]    # ids from src/data/useCases.ts
avoidFor: [hot-environment]
settings:
  nozzle: 230-250 °C
  bed: 70-80 °C
  speed: 100-300 mm/s
  cooling: 50-100% part fan
needs: []                 # e.g. ["Dry box", "Hardened nozzle"]
priceTier: "$$"           # "$", "$$" or "$$$" relative to plain PLA
# image: /images/filaments/rapid-petg.jpg   # only photos you own or that are openly licensed
# imageAlt: Spool of rapid PETG filament
# imageCredit: Photo by Name, CC BY 4.0
# imageLink: https://example.com/source-page
sources:
  - title: Manufacturer datasheet
    url: https://example.com/datasheet
---

## Use it for

-

## Watch out for

-

## Tips

-
