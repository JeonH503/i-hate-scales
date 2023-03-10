import type { AppProps } from 'next/app'
import {Body,Header} from '@/components'
import { ThemeProvider } from 'styled-components';
import theme from '@/components/styles/theme'
import GlobalStyle from '@/components/styles/global';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Header/>
        <Body>
          <Component {...pageProps} />
        </Body>
      </ThemeProvider>
    </>
  )
}
