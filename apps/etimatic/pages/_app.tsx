import { BreakpointProvider, lightTheme } from 'design-system';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import MainLayout from '../components/MainLayout';
import { ConstantsProvider } from '../config/constants';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
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

export default CustomApp;
