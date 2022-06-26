import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyles';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  if (session) {
    const { pathname } = router.push(`/${pathname}`);
  }
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
