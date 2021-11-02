import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
  ThemeProps,
} from 'styled-components';

export type Palette = string;

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
export type DefaultPalettes = 'MAIN' | 'ACCENT' | 'WHITE';

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
  colour: <R extends Record<any, any>>(
    background?: DefaultPalettes,
    color?: DefaultPalettes
  ) => FlattenInterpolation<ThemedStyledProps<any, R>>;
  text: <R extends Record<any, any>>(font: DefaultFonts) => FlattenInterpolation<ThemedStyledProps<any, R>>;
};

export const fontBuilder = (size: number, lineHeight: number, weight: number): Font => ({ size, lineHeight, weight });
export const paletteBuilder = (colorString: string): Palette => colorString;
export const breakPointBuilder = (maxWidth: number, fonts: Fonts): BreakPoint => ({ maxWidth, fonts });

const buildMixins = (theme: CustomTheme): DesignSystemMixins => {
  return {
    mediaquery: (breakPoint: DefaultBreakPoints, cssProps: FlattenSimpleInterpolation) => css`
      @media screen and (max-width: ${theme.breakPoints[breakPoint]}px) {
        ${cssProps};
      }
    `,
    colour: (background?: DefaultPalettes, color?: DefaultPalettes) => css`
      ${background && `background-color: ${theme.palettes[background]};`}
      ${color && `color: ${theme.palettes[color]};`}
    `,
    text: (font: DefaultFonts) => css`
      ${Object.keys(theme.breakPoints).map(
        b => css`
          @media screen and (max-width: ${theme.breakPoints[b].maxWidth}px) {
            font-size: ${theme.breakPoints[b].fonts[font].size}px;
            line-height: ${theme.breakPoints[b].fonts[font].lineHeight}px;
            font-weight: ${theme.breakPoints[b].fonts[font].weight};
          }
        `
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
  MAIN: paletteBuilder('#393939'),
  ACCENT: paletteBuilder('#00FFA3'),
  WHITE: paletteBuilder('#fff'),
};

const breakPoints: Record<string, BreakPoint> = {
  FULL: breakPointBuilder(99999, {
    HEADING1: fontBuilder(64, 67, 800),
    HEADING2: fontBuilder(48, 50, 600),
    TITLE: fontBuilder(20, 28, 500),
    BODY: fontBuilder(16, 16, 500),
    HIGHLIGHT: fontBuilder(16, 16, 600),
    SMALL: fontBuilder(14, 14, 500),
  }),
  SLIM: breakPointBuilder(375, {
    HEADING1: fontBuilder(33, 35, 800),
    HEADING2: fontBuilder(20, 22, 600),
    TITLE: fontBuilder(16, 18, 500),
    BODY: fontBuilder(14, 17, 500),
    HIGHLIGHT: fontBuilder(14, 17, 600),
    SMALL: fontBuilder(12, 15, 500),
  }),
};

export const lightTheme = buildTheme(palettes, breakPoints, 8);
