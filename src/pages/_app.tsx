import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../context/AppProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider >
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
