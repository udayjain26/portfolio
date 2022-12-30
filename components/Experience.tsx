import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function({}: Props) {
  return (
    <motion.div
        className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full
        px-10 justify-evenly mx-auto items-center scroll-smooth"
        initial={{opacity:0}}
        transition={{duration:1.5}}
        whileInView={{opacity:1}}
        >
        <h3 className="absolute top-16 mb-7 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>

        { /* Card Card Card*/  }
    </motion.div>
  )
}