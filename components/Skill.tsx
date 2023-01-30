import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill
    directionLeft?: boolean;
};

function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
                opacity:0,
            }}
            transition = {{duration: 1}}
            whileInView = {{opacity: 1, x: 0}}
            src = {urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 w-20 h-20
                        filter group-hover:grayscale transition duration-300 ease-in-out object-scale-down'
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out group-hover:bg-white h-20 w-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="opacity-100 text-3xl font-bold text-black ">
                    {skill?.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill