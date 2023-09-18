//src/pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Modal from "react-modal";

Modal.setAppElement('#__next'); // This is the line to add

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
