import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { USE_CASE_IDS } from './data/useCases';
import { HOME_USE_LEVELS } from './data/homeUse';

const rating = z.number().int().min(1).max(5);

// Optional references backing the claims on a page (datasheets, tests, reputable guides)
const sources = z.array(z.object({ title: z.string(), url: z.url() })).default([]);

const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(),
    fullName: z.string(),
    summary: z.string().max(200),
    order: z.number().default(100),
    aliases: z.array(z.string()).default([]),
    // Where it can be printed: easy (typical home FDM printer), care (home, with extra gear or safety steps), industrial
    homeUse: z.enum(HOME_USE_LEVELS).default('easy'),
    homeNote: z.string().optional(),
    // Optional photo, relative to /public (e.g. /images/materials/pla.jpg)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    sources,
    pros: z.array(z.string()).min(1),
    cons: z.array(z.string()).min(1),
    settings: z.object({
      nozzle: z.string(),
      bed: z.string(),
      enclosure: z.string().optional(),
      drying: z.string().optional(),
    }),
  }),
});

const filaments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/filaments' }),
  schema: z.object({
    title: z.string(),
    // File name (without .md) of an entry in src/content/materials. Typos fail the build.
    material: reference('materials'),
    // Position within its material: base type first, then each step up in complexity (lower is first)
    order: z.number().default(100),
    summary: z.string().max(200),
    // Overrides the material's level when this variant needs more (or less) than the base material
    homeUse: z.enum(HOME_USE_LEVELS).optional(),
    homeNote: z.string().optional(),
    // Optional photo, relative to /public (e.g. /images/filaments/silk-pla.jpg)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    // Where clicking the photo goes, e.g. the product page the photo came from
    imageLink: z.url().optional(),
    aliases: z.array(z.string()).default([]),
    ratings: z.object({
      strength: rating,
      heat: rating,
      flex: rating,
      ease: rating,
      speed: rating,
      finish: rating,
      durability: rating,
    }),
    goodFor: z.array(z.enum(USE_CASE_IDS)).default([]),
    avoidFor: z.array(z.enum(USE_CASE_IDS)).default([]),
    settings: z.object({
      nozzle: z.string(),
      bed: z.string(),
      speed: z.string().optional(),
      cooling: z.string().optional(),
    }),
    needs: z.array(z.string()).default([]),
    priceTier: z.enum(['$', '$$', '$$$']).default('$'),
    featured: z.boolean().default(false),
    sources,
  }),
});

const objects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/objects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    // Use-case ids from src/data/useCases.ts that describe this object
    useCases: z.array(z.enum(USE_CASE_IDS)).default([]),
    // File names (without .md) of entries in src/content/filaments. Typos fail the build.
    best: reference('filaments'),
    runnersUp: z.array(reference('filaments')).default([]),
    avoid: z.array(reference('filaments')).default([]),
    sources,
  }),
});

export const collections = { materials, filaments, objects };
