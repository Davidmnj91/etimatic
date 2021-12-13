import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  ThemedStyledProps,
  ThemeProps,
} from 'styled-components';

export type Optional<T> = T | undefined;

export type Palette = string;

export type Font = {
  size: number;
  lineHeight: number;
  weight: number;
};

export type BreakPoint<FontNames extends string> = {
  minWidth: number;
  maxWidth: number;
  fonts: Fonts<FontNames>;
};

export type BreakPoints<BreakpointNames extends string, FontNames extends string> = Record<
  BreakpointNames,
  BreakPoint<FontNames>
>;
export type Fonts<FontNames extends string> = Record<FontNames, Font>;
export type Palettes<PaletteNames extends string> = Record<PaletteNames, Palette>;

export type CustomTheme<BreakpointNames extends string, FontNames extends string, PaletteNames extends string> = {
  palettes: Palettes<PaletteNames>;
  breakPoints: BreakPoints<BreakpointNames, FontNames>;
  baseGrid: number;
};

export type DesignSystemMixins<
  BreakpointNames extends string,
  FontNames extends string,
  PaletteNames extends string
> = {
  mediaquery: <R extends Record<any, any>>(
    breakPoint: BreakpointNames,
    cssProps: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => FlattenInterpolation<ThemedStyledProps<any, R>>;
  spacing: (multiplier: number) => string;
  colour: <R extends Record<any, any>>(
    background?: PaletteNames,
    color?: PaletteNames
  ) => FlattenInterpolation<ThemedStyledProps<any, R>>;
  text: <R extends Record<any, any>>(font: FontNames) => FlattenInterpolation<ThemedStyledProps<any, R>>;
};

export type DesignSystemTheme<
  BreakpointNames extends string,
  FontNames extends string,
  PaletteNames extends string
> = CustomTheme<BreakpointNames, FontNames, PaletteNames> &
  DesignSystemMixins<BreakpointNames, FontNames, PaletteNames>;

// BUILDERS
export const fontBuilder = (size: number, lineHeight: number, weight: number): Font => ({ size, lineHeight, weight });
export const paletteBuilder = (colorString: string): Palette => colorString;
export const breakPointBuilder = <FontNames extends string>(
  minWidth: number,
  maxWidth: number,
  fonts: Fonts<FontNames>
): BreakPoint<FontNames> => ({
  minWidth,
  maxWidth,
  fonts,
});

const buildMixins = <BreakpointNames extends string, FontNames extends string, PaletteNames extends string>(
  theme: CustomTheme<BreakpointNames, FontNames, PaletteNames>
): DesignSystemMixins<BreakpointNames, FontNames, PaletteNames> => {
  return {
    mediaquery: (
      breakPoint: BreakpointNames,
      cssProps: SimpleInterpolation | FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>
    ) => css`
      @media screen and (min-width: ${theme.breakPoints[breakPoint].minWidth}px) and (max-width: ${theme.breakPoints[
          breakPoint
        ].maxWidth}px) {
        ${cssProps};
      }
    `,
    colour: (background?: PaletteNames, color?: PaletteNames) => css`
      ${background && `background-color: ${theme.palettes[background]};`}
      ${color && `color: ${theme.palettes[color]};`}
    `,
    text: (font: FontNames) => css`
      ${Object.keys(theme.breakPoints).map(b => {
        const breakpoint = b as keyof BreakPoints<BreakpointNames, FontNames>;
        return css`
          @media screen and (min-width: ${theme.breakPoints[breakpoint].minWidth}px) and (max-width: ${theme
              .breakPoints[breakpoint].maxWidth}px) {
            font-size: ${theme.breakPoints[breakpoint].fonts[font].size}px;
            line-height: ${theme.breakPoints[breakpoint].fonts[font].lineHeight}px;
            font-weight: ${theme.breakPoints[breakpoint].fonts[font].weight};
          }
        `;
      })}
    `,
    spacing: (multiplier: number) => `${theme.baseGrid * multiplier}px`,
  };
};

export const buildTheme = <BreakpointNames extends string, FontNames extends string, PaletteNames extends string>(
  palettes: Record<PaletteNames, Palette>,
  breakPoints: Record<BreakpointNames, BreakPoint<FontNames>>,
  baseGrid: number
): DesignSystemTheme<BreakpointNames, FontNames, PaletteNames> => {
  const theme: CustomTheme<BreakpointNames, FontNames, PaletteNames> = {
    palettes,
    breakPoints,
    baseGrid,
  };

  const mixins = buildMixins(theme);

  return { ...theme, ...mixins };
};
