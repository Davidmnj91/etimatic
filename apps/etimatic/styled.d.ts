import { BreakPointNames, DesignSystemTheme, FontNames, PaletteNames } from 'design-system';
import { CSSProp } from 'styled-components';

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
