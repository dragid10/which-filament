// Where a filament can realistically be printed. Shown as a badge on every row and a callout on detail pages.
export const HOME_USE = {
  easy: {
    label: 'Home-friendly',
    icon: '✓',
    description: 'Prints on a typical hobby FDM printer with no special setup.',
  },
  care: {
    label: 'Home, with precautions',
    icon: '!',
    description: 'Fine at home, but needs extra gear or safety steps (see the note).',
  },
  industrial: {
    label: 'Industrial only',
    icon: '✕',
    description: 'Needs equipment beyond a home printer.',
  },
} as const;

export type HomeUseLevel = keyof typeof HOME_USE;
export const HOME_USE_LEVELS = Object.keys(HOME_USE) as [HomeUseLevel, ...HomeUseLevel[]];

export const FDM_EXPLAINER =
  'FDM (fused deposition modeling) is the common home 3D printer: it melts plastic filament and builds the part one thin layer at a time. Resin printers work differently and do not use these filaments.';
