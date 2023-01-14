import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Card({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-auto">
        <motion.img

        initial={{opacity:0, y:-100}}
        transition={{duration: 1.2}}
        viewport={{once:true}}
        whileInView={{opacity: 1, y:0}}


        className="w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
        src="https://i.ibb.co/XbbGVCy/Screenshot-2023-01-02-at-2-16-41-PM.png"
        alt="Screenshot-2023-01-02-at-2-16-41-M"
        />

        <div className="px:0 md:px-10">
            <h4 className="text-4xl font-light">Position</h4>
            <p className="font-bold mt-1 text-2xl">Company Name</p>
            <div className="flex space-x-2 my-2">
                <img  className="h-10 w-10 rounded-full" src='https://i.ibb.co/XbbGVCy/Screenshot-2023-01-02-at-2-16-41-PM.png'/>
                <img  className="h-10 w-10 rounded-full" src='https://i.ibb.co/XbbGVCy/Screenshot-2023-01-02-at-2-16-41-PM.png'/>
                <img  className="h-10 w-10 rounded-full" src='https://i.ibb.co/XbbGVCy/Screenshot-2023-01-02-at-2-16-41-PM.png'/>
                <img  className="h-10 w-10 rounded-full" src='https://i.ibb.co/XbbGVCy/Screenshot-2023-01-02-at-2-16-41-PM.png'/>
            </div>
            <p className='uppercase py-5 text-gray-300'>Dates - Ended...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li> 
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>

            </ul>

        </div>
    </article>
  )
}