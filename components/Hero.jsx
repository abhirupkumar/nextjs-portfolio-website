"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiArrowDownSLine
} from 'react-icons/ri';

import { FaCode, FaDev } from "react-icons/fa";
import { SiBoardgamegeek } from "react-icons/si";

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import { motion } from 'framer-motion';

const Hero = () => {


  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="py-12 bg-none bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse lg:justify-between justify-center gap-x-8 w-full">
          {/* text */}
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex max-w-[450px] flex-col justify-center mx-auto my-3 lg:mx-0 text-center lg:text-left"
          >
            <>
              <h1 className="h1 mb-4">Hello, my name is Abhirup Kumar Bhowmick</h1>
              <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
                I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
              </p>

              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Link href="/Abhirup_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="gap-x-2">
                    Download Resume <Download size={18} />
                  </Button>
                </Link>
              </div>

              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto lg:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </>
          </motion.div>

          {/* image */}
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="flex relative lg:my-auto my-3"
          >
            <>
              {/* badge 1 */}
              <Badge
                containerStyles="absolute top-[8%] lg:-left-[6rem] -left-[7rem] text-black"
                icon={<FaCode className="text-black" />}
                badgeText="C++ Programmer"
              />

              {/* badge 2 */}
              <Badge
                containerStyles="absolute lg:top-[70%] top-[88%] -left-[4rem]"
                icon={<FaDev className="text-black" />}
                badgeText="Full Stack Developer"
              />

              {/* badge 3 */}
              <Badge
                containerStyles="absolute top-[36%] -right-[9rem]"
                icon={<SiBoardgamegeek className="text-black" />}
                badgeText="Software Geek"
              />

              <div className='home__img md:!w-[400px] md:!h-[400px] !w-[300px] !h-[300px]'></div>
            </>
          </motion.div>
        </div>

        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-52 lg:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
