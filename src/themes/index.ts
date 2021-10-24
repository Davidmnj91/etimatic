import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
  ThemeProps,
} from 'styled-components';

export type BreakPoint = 'Full' | 'Slim';

export type Palette = {
  main: string;
  contrastText: string;
};

export type CustomTheme = {
  background: string;
  accent: string;
  foreground: string;
  warnPalette?: Palette;
  breakPoints: Record<BreakPoint, number>;
  mixins: {
    mediaquery: <T extends Record<any, any>>(
      breakPoint: BreakPoint,
      cssProps: FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>
    ) => FlattenInterpolation<ThemedStyledProps<any, T>>;
  };
};

export const buildTheme = (
  background: string,
  accent: string,
  foreground: string,
  breakPoints: Record<BreakPoint, number>,
  warnPalette?: Palette
): CustomTheme => {
  const defaultWarnPalette: Palette = {
    main: '#d32f2f',
    contrastText: '#fff',
  };

  const theme: CustomTheme = {
    background,
    accent,
    foreground,
    warnPalette: warnPalette || defaultWarnPalette,
    breakPoints,
    mixins: {
      mediaquery: (breakPoint: BreakPoint, cssProps: FlattenSimpleInterpolation) => css`
        @media screen and (max-width: ${breakPoints[breakPoint]}px) {
          ${cssProps};
        }
      `,
    },
  };

  return theme;
};

const breakPoints: Record<BreakPoint, number> = {
  Full: 376,
  Slim: 375,
};

export const lightTheme = buildTheme('#fff', '#00FFA3', '#393939', breakPoints);
