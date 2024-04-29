'use client';

import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; // i add this and now it is working

// components
import ProjectCard from './ProjectCard';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const projectData = [
  {
    image: '/work/3.png',
    category: 'Next.js',
    name: 'TestNix',
    description:
      'TestNix is a split testing SaaS tool for Next.js developers that also helps in monitoring impressions, clicks, and conversions.',
    link: 'https://testnix.vercel.app/',
    github: 'https://github.com/abhirupkumar/testnix-npm',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description:
      'Solstice is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description:
      'Lumina is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
      'Evolve is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description:
      'Ignite is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description:
      'Envision is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description:
      'Serenity is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description:
      'Nova is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description:
      'Zenith is a leading provider of web development services. I worked on the frontend part of the website.',
    link: '/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 lg:mb-48 overflow-x-hidden">
      <div className="container mx-auto flex lg:flex-row flex-col">
        {/* text */}
        <div className="max-w-[400px] mx-auto lg:mr-8 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Transforming Ideas into Interactive Experiences.
          </p>
          <Link href="/projects">
            <Button className="text-center">All Projects <FaArrowRightLong className='text-primary-foreground text-center ml-1 text-xl' /> </Button>
          </Link>
        </div>

        {/* slider */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:max-w-[1000px]">
          <>
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only the first 4 projects for the slides */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
