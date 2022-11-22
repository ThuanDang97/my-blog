import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'

// Layout
import MainLayout from '@layouts/PageLayout'

// Types
import theme from '@self-types/Themes.types'

import '../../styles/globals.css'
import '../../styles/reset.css'
import '../../styles/404.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
