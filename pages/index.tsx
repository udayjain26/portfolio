import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-white bg-[#242424] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>UdayJain</title>
      </Head>

      <Header /> 

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* about */}
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact me */}
    </div>
  )
}
