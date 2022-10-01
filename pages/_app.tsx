import type { AppProps } from 'next/app';

// style
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';

// library
import { queryClient } from '@react-query/queryClient';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
