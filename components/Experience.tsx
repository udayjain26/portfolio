import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
 
type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
        initial={{opacity:0}}
        transition={{duration:1.5}}
        whileInView={{opacity:1}}
        className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full
        px-10 justify-evenly mx-auto items-center scroll-smooth"
        >
        <h3 className="absolute top-16 mb-7 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory relative h-4/5
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f76eb3]/80'>
          <Card />
          <Card /> 
          <Card />
          <Card />
        </div>

    </motion.div>
  )
}