import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { USE_CASE_IDS } from './data/useCases';

const rating = z.number().int().min(1).max(5);

const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(),
    fullName: z.string(),
    summary: z.string().max(200),
    order: z.number().default(100),
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
    // Must match the file name (without .md) of an entry in src/content/materials
    material: z.string(),
    summary: z.string().max(200),
    // Hex colour used for the fallback spool illustration
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    // Optional photo, relative to /public (e.g. /images/filaments/silk-pla.jpg)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
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
  }),
});

export const collections = { materials, filaments };
