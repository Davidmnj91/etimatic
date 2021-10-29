import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
  ThemeProps,
} from 'styled-components';

export type Palette = {
  main: string;
  contrastText: string;
};

export type Font = {
  size: number;
  lineHeight: number;
  weight: number;
};

export type BreakPoint = {
  maxWidth: number;
  fonts: Fonts;
};

export type DefaultBreakPoints = 'SLIM' | 'FULL';
export type DefaultFonts = 'HEADING1' | 'HEADING2' | 'TITLE' | 'BODY' | 'HIGHLIGHT' | 'SMALL';
export type DefaultPalettes = 'BASE' | 'ACCENT' | 'FOREGROUND';

export type BreakPoints = Record<DefaultBreakPoints, BreakPoint>;
export type Fonts = Record<DefaultFonts, Font>;
export type Palettes = Record<DefaultPalettes, Palette>;

export type CustomTheme = {
  palettes: Palettes;
  breakPoints: BreakPoints;
  baseGrid: number;
};

export type DesignSystemTheme = CustomTheme & DesignSystemMixins;

export type DesignSystemMixins = {
  mediaquery: <R extends Record<any, any>>(
    breakPoint: DefaultBreakPoints,
    cssProps: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => FlattenInterpolation<ThemedStyledProps<any, R>>;
  spacing: (multiplier: number) => string;
  colour: <R extends Record<any, any>>(palette: DefaultPalettes) => FlattenInterpolation<ThemedStyledProps<any, R>>;
  text: <R extends Record<any, any>>(font: DefaultFonts) => FlattenInterpolation<ThemedStyledProps<any, R>>;
};

export const fontBuilder = (size: number, lineHeight: number, weight: number): Font => ({ size, lineHeight, weight });
export const paletteBuilder = (main: string, contrastText: string): Palette => ({ main, contrastText });
export const breakPointBuilder = (maxWidth: number, fonts: Fonts): BreakPoint => ({ maxWidth, fonts });

const buildMixins = (theme: CustomTheme): DesignSystemMixins => {
  return {
    mediaquery: (breakPoint: DefaultBreakPoints, cssProps: FlattenSimpleInterpolation) => css`
      @media screen and (max-width: ${theme.breakPoints[breakPoint]}px) {
        ${cssProps};
      }
    `,
    colour: (palette: DefaultPalettes) => css`
      background-color: ${theme.palettes[palette].main};
      color: ${theme.palettes[palette].contrastText};
    `,
    text: (font: DefaultFonts) => css`
      ${Object.keys(theme.breakPoints).map(
        b => `@media screen and (max-width: ${theme.breakPoints[b].maxWidth}px) {
                font: ${theme.breakPoints[b].fonts[font].weight} ${theme.breakPoints[b].fonts[font].size}px / ${theme.breakPoints[b].fonts[font].lineHeight}px;
              }`
      )}
    `,
    spacing: (multiplier: number) => `${theme.baseGrid * multiplier}px`,
  };
};

export const buildTheme = (
  palettes: Record<DefaultPalettes, Palette>,
  breakPoints: Record<DefaultBreakPoints, BreakPoint>,
  baseGrid: number
): DesignSystemTheme => {
  const theme: CustomTheme = {
    palettes,
    breakPoints,
    baseGrid,
  };

  const mixins = buildMixins(theme);

  return { ...theme, ...mixins };
};

const palettes: Palettes = {
  BASE: paletteBuilder('#00FFA3', '#393939'),
  ACCENT: paletteBuilder('#fff', '#393939'),
  FOREGROUND: paletteBuilder('#393939', '#fff'),
};

const breakPoints: Record<string, BreakPoint> = {
  Full: breakPointBuilder(376, {
    HEADING1: fontBuilder(64, 67, 800),
    HEADING2: fontBuilder(48, 50, 600),
    TITLE: fontBuilder(20, 28, 500),
    BODY: fontBuilder(16, 16, 600),
    HIGHLIGHT: fontBuilder(16, 16, 600),
    SMALL: fontBuilder(14, 14, 500),
  }),
  Slim: breakPointBuilder(375, {
    HEADING1: fontBuilder(33, 35, 800),
    HEADING2: fontBuilder(20, 22, 600),
    TITLE: fontBuilder(16, 18, 500),
    BODY: fontBuilder(14, 17, 600),
    HIGHLIGHT: fontBuilder(14, 17, 600),
    SMALL: fontBuilder(12, 15, 500),
  }),
};

export const lightTheme = buildTheme(palettes, breakPoints, 8);
