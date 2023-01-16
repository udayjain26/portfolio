import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contactme from '../components/ContactMe'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-white bg-[#242424] h-screen snap-y snap-mandatory overflow-y-scroll z-0 scroll-smooth overflow-x-hidden
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f76eb3]/80'>
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
      {/* experience */}

      <section className="snap-center" id="experience">
        <Experience />
      </section>
      {/* skills */}
      <section className="snap-start" id="skills">
        <Skills />
      </section>
      {/* projects */}
      <section className="snap-start" id="projects">
        <Projects />
      </section>
        <Contactme/>
      <section className="snap-start" id="contact">


      </section>
    </div>
  )
}
