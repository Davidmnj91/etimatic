import { createGlobalStyle, ThemeProvider } from 'styled-components';
import MainLayout from '../components/MainLayout';
import { BreakpointProvider } from '../providers/breakpoint';
import { ConstantsProvider } from '../providers/constants';
import { lightTheme } from '../themes';
import '../themes/global-style.css';

const GlobalStyle = createGlobalStyle`
  // For Google Chrome
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    border: 2px solid #fff;
    background-color: #5E5E5E; 
  }
`;

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <BreakpointProvider breakpoints={lightTheme.breakPoints}>
          <ConstantsProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ConstantsProvider>
        </BreakpointProvider>
      </ThemeProvider>
    </>
  );
}
