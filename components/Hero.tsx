import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
};

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hey, I'm ${pageInfo.name}`, 
            "I turn Caffeine into Code!",
            "Strive to Inquire -> Ideate -> Implement"
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden scroll-smooth'>
        <BackgroundCircles />
        <Image
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo?.heroImage).url()}
            alt=''
            width={500}
            height={500}
        />

        <div className='z-20'>
            <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[15px]'>{pageInfo?.role}</h2>
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