import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'

const DynamicComponent = dynamic(import('../styles/index.css'))

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
