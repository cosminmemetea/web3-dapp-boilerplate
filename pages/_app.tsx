import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ContextProvider } from '../context'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { Layout } from '../components/Layout'
import Particles from "react-tsparticles";
import { particles,lectroparticles, particlesInit, particlesLoaded } from './_particles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <>
             
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={lectroparticles}
    ></Particles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
       
        <ToastContainer
          hideProgressBar
          position="bottom-right"
          autoClose={2000}
        />
      </>
    </Web3ContextProvider>
  )
}

export default MyApp
