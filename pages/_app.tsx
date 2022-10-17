import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { CabecalhoContainer, Logo, Paragrafo } from '../src/components/Cabecalho/Cabecalho.style'
import tema from '../src/themes/themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <CabecalhoContainer>
        <div>
          <Logo src='/imagens/myteacher.png' />
        </div>
        <Paragrafo>Encontre o professor perfeito</Paragrafo>
      </CabecalhoContainer>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
