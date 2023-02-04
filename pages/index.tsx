import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Intro } from '../components/Intro'
import { Services, ServicesProps } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { data } from '../data'

const Home: NextPage<ServicesProps> = (props:ServicesProps) => {

  return (
    <div >
      <Head>
        {/* <title>ΛΞKTRO AI</title> */}
        <title>XΞDΞUM</title>
        <meta name="description" content="Descentralized world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Intro/> 
      <Services {...props}></Services>
      {/* <Testimonials/> */}
    </div>
  )
}
export const getStaticProps = async ()=>{
  const services = data;
  return {
    props:{services}
  }
}
export default Home
function value(value: any): import("react").ReactNode {
  throw new Error('Function not implemented.')
}

