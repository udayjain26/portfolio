import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey, I'm Uday Jain", 
            "Guy-who-loves-coding.tsx",
            "<ButLovesCoffeeMore/>"
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden scroll-smooth'>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://i.ibb.co/1vLm6gf/Screenshot-2022-12-29-at-3-29-01-PM.png'
            alt=''
        />

        <div className='z-20'>
            <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mg-3'>{text}</span>
                <Cursor cursorColor='#ffbf00'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}