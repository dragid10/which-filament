import { USE_CASES, RATING_LABELS, type RatingKey } from '../data/useCases';

export interface Candidate {
  ratings: Record<RatingKey, number>;
  goodFor: string[];
  avoidFor: string[];
}

export interface Match {
  score: number; // 0-100
  verdict: 'great' | 'good' | 'okay' | 'poor';
  reasons: string[];
  warnings: string[];
}

const GOOD_BONUS = 12;
const AVOID_PENALTY = 35;

export function scoreFilament(f: Candidate, selected: string[]): Match {
  const reasons: string[] = [];
  const warnings: string[] = [];
  if (selected.length === 0) return { score: 0, verdict: 'okay', reasons, warnings };

  let total = 0;
  for (const id of selected) {
    const uc = USE_CASES.find((u) => u.id === id);
    if (!uc) continue;
    const weights = Object.entries(uc.weights) as [RatingKey, number][];
    const wSum = weights.reduce((s, [, w]) => s + w, 0);
    const base = weights.reduce((s, [k, w]) => s + f.ratings[k] * w, 0) / wSum; // 1-5
    let s = ((base - 1) / 4) * 100; // 0-100
    if (f.goodFor.includes(id)) {
      s += GOOD_BONUS;
      reasons.push(`Good for ${uc.label.toLowerCase()}`);
    } else {
      const top = weights.sort((a, b) => b[1] - a[1])[0][0];
      if (f.ratings[top] >= 4) reasons.push(`${RATING_LABELS[top]} ${f.ratings[top]}/5`);
    }
    if (f.avoidFor.includes(id)) {
      s -= AVOID_PENALTY;
      warnings.push(`Not ideal for ${uc.label.toLowerCase()}`);
    }
    total += s;
  }

  const score = Math.max(0, Math.min(100, Math.round(total / selected.length)));
  const verdict = warnings.length ? 'poor' : score >= 75 ? 'great' : score >= 55 ? 'good' : 'okay';
  return { score, verdict, reasons: [...new Set(reasons)], warnings };
}

export const VERDICT_LABEL: Record<Match['verdict'], string> = {
  great: 'Great match',
  good: 'Good match',
  okay: 'Works',
  poor: 'Not ideal',
};
