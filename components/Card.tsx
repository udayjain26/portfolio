import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
  experience: Experience
}

export default function Card({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929]  hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-auto
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f76eb3]/80">
        {/* <motion.img

        initial={{opacity:0, y:-100}}
        transition={{duration: 1.2}}
        viewport={{once:true}}
        whileInView={{opacity: 1, y:0}}


        className="w-32 h-32 rounded-full object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
        /> */}
        {
          <motion.img
          height={1100}
          width={1100}
          initial={{opacity:0, y:-100}}
          transition={{duration: 1.2}}
          viewport={{once:true}}
          whileInView={{opacity: 1, y:0}}
          src={urlFor(experience?.companyImage).url()}
          className="object-center rounded-full object-scale-down w-32 h-32"
          />
        }

        <div className="px:0 md:px-10">
            <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold mt-1 text-2xl">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
                {experience.technologies.map(technology => (
                  <Image 
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                    alt=''
                    width={500}
                    height={500}
                  />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
              {
              new Date(experience?.dateStarted).toDateString()} -{" "}{experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
            </ul>

        </div>
    </article>
  )
}