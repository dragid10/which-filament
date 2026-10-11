// Single source of truth for "what are you printing?" use cases.
// `goodFor` / `avoidFor` tags in filament frontmatter must use these ids.
// `weights` say which 1-5 ratings matter for the use case.

export const RATING_KEYS = ['strength', 'heat', 'flex', 'ease', 'speed', 'finish', 'durability'] as const;
export type RatingKey = (typeof RATING_KEYS)[number];

export const RATING_LABELS: Record<RatingKey, string> = {
  strength: 'Strength',
  heat: 'Heat resistance',
  flex: 'Flexibility',
  ease: 'Ease of printing',
  speed: 'Print speed',
  finish: 'Looks / finish',
  durability: 'Durability',
};

export interface UseCase {
  id: string;
  label: string;
  /** Decorative emoji shown next to the label (hidden from screen readers) */
  emoji: string;
  hint: string;
  weights: Partial<Record<RatingKey, number>>;
}

export const USE_CASES = [
  { id: 'display', label: 'Display / decorative', emoji: '🎨', hint: 'Figurines, vases, desk art', weights: { finish: 3, ease: 1 } },
  { id: 'cosplay', label: 'Cosplay & props', emoji: '🎭', hint: 'Helmets, armor, painted pieces', weights: { finish: 2, ease: 1, strength: 1 } },
  { id: 'prototype', label: 'Quick prototypes', emoji: '⚡', hint: 'Fit checks, draft versions', weights: { speed: 3, ease: 2 } },
  { id: 'functional', label: 'Functional parts', emoji: '🔧', hint: 'Brackets, clips, holders', weights: { strength: 3, durability: 2 } },
  { id: 'mechanical', label: 'Load-bearing / mechanical', emoji: '⚙️', hint: 'Gears, hinges, snap fits', weights: { strength: 3, durability: 3, flex: 1 } },
  { id: 'outdoor', label: 'Outdoor / sunlight', emoji: '☀️', hint: 'Garden, planters, UV exposure', weights: { durability: 3, heat: 2 } },
  { id: 'hot-environment', label: 'Hot environments', emoji: '🔥', hint: 'Cars, near heaters, dishwashers', weights: { heat: 4, durability: 1 } },
  { id: 'waterproof', label: 'Wet / waterproof', emoji: '💧', hint: 'Bathroom, water contact', weights: { durability: 2, heat: 1, strength: 1 } },
  { id: 'flexible', label: 'Flexible / rubbery', emoji: '🧸', hint: 'Gaskets, phone cases, grips, bumpers', weights: { flex: 4, durability: 2 } },
  { id: 'large', label: 'Large prints', emoji: '📦', hint: 'Big parts that risk warping', weights: { ease: 3, speed: 1 } },
  { id: 'fast', label: 'Fast / bulk printing', emoji: '🚀', hint: 'Lots of parts, short deadlines', weights: { speed: 4, ease: 1 } },
  { id: 'beginner', label: 'First-time friendly', emoji: '🌱', hint: 'Forgiving and low-fuss', weights: { ease: 4 } },
] as const satisfies readonly UseCase[];

export type UseCaseId = (typeof USE_CASES)[number]['id'];
export const USE_CASE_IDS = USE_CASES.map((u) => u.id) as [UseCaseId, ...UseCaseId[]];
