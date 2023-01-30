import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo,
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration: 2
        }}
        className='flex flex-col relative text-center md:text-left md:flex-row h-screen px-10 justify-evenly mx-auto items-center max-w-7xl scroll-smooth'>
        <h3 className='absolute top-16 mb-7 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        {/* <div>
            <Image>
                
            </Image>
        </div> */}
        <motion.img 
            initial = {{
                x: -200,
                opacity: 0,
            }}
            transition = {{
                duration: 1.2,
            }}
            whileInView = {{
                x: 0,
                opacity: 1,
            }}
            viewport={{once:true}}
            src={urlFor(pageInfo?.profilePic).url()}

            className='-mb-20 md:mb-20 flex-shrink-0 w-40 h-40 rounded-full
            object-cover md:rounded-lg md:w-72 md:h-80 xl:w-[300px] xl:h-[400px]'
        />

        <div className='md:px-5 xl:px-10 space-y-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className="underline decoration-[#f76eb3]">little</span> background</h4>
            <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </div>

    </motion.div>
  )
}