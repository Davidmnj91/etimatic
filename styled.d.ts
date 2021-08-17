import { CSSProp } from 'styled-components';
import { CustomTheme } from './src/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {} // extends the global DefaultTheme with our ThemeType.
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
