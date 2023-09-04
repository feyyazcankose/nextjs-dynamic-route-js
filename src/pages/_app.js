import '@/styles/globals.css'
import NavMenu from '../app/components/NavMenu'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavMenu></NavMenu>
      <Component {...pageProps} />
    </>
  )
}
