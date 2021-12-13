import { BreakPoint, breakPointBuilder, buildTheme, fontBuilder, paletteBuilder, Palettes } from '../design-system';

export type BreakPointNames = 'SLIM' | 'FULL';
export type FontNames = 'HEADING1' | 'HEADING2' | 'TITLE' | 'BODY' | 'HIGHLIGHT' | 'SMALL';
export type PaletteNames = 'MAIN' | 'ACCENT' | 'WHITE';

const palettes: Palettes<PaletteNames> = {
  MAIN: paletteBuilder('#393939'),
  ACCENT: paletteBuilder('#00FFA3'),
  WHITE: paletteBuilder('#fff'),
};

const breakPoints: Record<BreakPointNames, BreakPoint<FontNames>> = {
  SLIM: breakPointBuilder(0, 1199, {
    HEADING1: fontBuilder(33, 35, 800),
    HEADING2: fontBuilder(20, 22, 600),
    TITLE: fontBuilder(16, 18, 500),
    BODY: fontBuilder(14, 17, 500),
    HIGHLIGHT: fontBuilder(14, 17, 600),
    SMALL: fontBuilder(12, 15, 500),
  }),
  FULL: breakPointBuilder(1200, 9999, {
    HEADING1: fontBuilder(64, 67, 800),
    HEADING2: fontBuilder(48, 50, 600),
    TITLE: fontBuilder(20, 28, 500),
    BODY: fontBuilder(16, 16, 500),
    HIGHLIGHT: fontBuilder(16, 16, 600),
    SMALL: fontBuilder(14, 14, 500),
  }),
};

export const lightTheme = buildTheme(palettes, breakPoints, 8);
