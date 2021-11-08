import { CSSProp } from 'styled-components';
import { BreakPointNames, FontNames, PaletteNames } from './src/themes';
import { DesignSystemTheme } from './src/themes/DesignSystem';

declare module 'styled-components' {
  export interface DefaultTheme extends DesignSystemTheme<BreakPointNames, FontNames, PaletteNames> {} // extends the global DefaultTheme with our ThemeType.
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
