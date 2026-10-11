---
title: Rapid PLA
material: pla
summary: PLA tuned to melt and flow quickly so high-speed printers can run fast without under-extruding.
aliases: [high speed pla, hs pla, speed pla, hyper pla]
ratings: { strength: 3, heat: 1, flex: 1, ease: 4, speed: 5, finish: 3, durability: 2 }
goodFor: [fast, prototype, large, display]
avoidFor: [hot-environment, outdoor, mechanical]
settings:
  nozzle: 210-230 °C
  bed: 55-65 °C
  speed: 200-500+ mm/s (printer permitting)
  cooling: 100% part fan
needs:
  - A printer that can actually print fast (strong cooling, good acceleration, high-flow hotend)
priceTier: "$$"
featured: true
sources:
  - title: "Prusa: Prusament PLA High Speed"
    url: "https://blog.prusa3d.com/prusament-pla-high-speed-a-perfect-choice-for-rapid-prototyping_137192/"
  - title: "3D Printing Canada: PLA vs high-speed PLA"
    url: "https://3dprintingcanada.com/blogs/news/pla-vs-high-speed-pla-whats-the-real-difference"
---

## When to pick it

You have a fast printer (Bambu, Prusa MK4/Core One, Voron, tuned Ender, and similar) and you want to use that speed. Plates of small parts, big low-detail prints, and quick prototypes are the sweet spot.

## What makes it different

High-speed PLA is reformulated, not just relabelled: it has lower melt viscosity and nucleating agents so the bead sets quickly. That raises the flow you can push before under-extrusion. Prusa lists 28 mm³/s for its high-speed PLA against 24 mm³/s for regular PLA on the same printer, and Polymaker testing cited by Bambu forum users puts regular PLA at roughly 13-15 mm³/s versus 18-22 mm³/s for high-speed. Your own hotend sets the real limit.

## Watch out for

- On a slow printer there is almost no benefit over plain PLA; you pay a little more for nothing.
- Mechanical properties are about the same as standard PLA: fast, not tougher.

## Tips

Use it with a profile for your printer and tune max volumetric flow for this specific spool. Faster printing needs more cooling, so open the door and keep the fan at full.

Want speed and toughness? See [Rapid PLA+](/filaments/rapid-pla-plus).
