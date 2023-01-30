import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contactme from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const inter = Inter({ subsets: ['latin'] })

const Home = ({pageInfo, experiences, projects, skills, socials} : Props) => {
  return (
    <div className='text-white bg-[#242424] h-screen snap-y snap-mandatory overflow-y-scroll z-0 scroll-smooth overflow-x-hidden
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f76eb3]/80 scrollbar-rounded-[48px]'>
      <Head>
        <title>Uday Jain</title>
      </Head>

      <Header socials={socials} /> 

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      {/* experience */}

      <section className="snap-center" id="experience">
        <WorkExperience experiences={experiences} />
      </section>
      {/* skills */}
      <section className="snap-start" id="skills">
        <Skills skills={skills} />
      </section>
      {/* projects */}
      <section className="snap-start" id="projects">
        <Projects projects = {projects} />
      </section>
      <section className="snap-start" id="contact">
        <Contactme/>
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
        <Link href="#hero">
          <HomeIcon className="h-6 w-6 rounded-full filter grayscale hover:grayscale-0"></HomeIcon>
        </Link>
        </div>
        

      </footer>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  
  return {
    props : {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 30,
  }
}