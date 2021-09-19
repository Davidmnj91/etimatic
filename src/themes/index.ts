export type Palette = {
  main: string;
  contrastText: string;
};

export type CustomTheme = {
  background: string;
  accent: string;
  foreground: string;
  warnPalette?: Palette;
};

export const buildTheme = (
  background: string,
  accent: string,
  foreground: string,
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
  };

  return theme;
};

export const lightTheme = buildTheme('#fff', '#00FFA3', '#393939');
