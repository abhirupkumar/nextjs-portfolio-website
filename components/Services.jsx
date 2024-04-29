"use client";

import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: "/services/web.gif",
    title: 'Web Development',
    description: "I am a web developer with a passion for creating beautiful and functional web applications."
  },
  {
    icon: "/services/react-native.gif",
    title: 'App Development',
    description: "I am a React Native developer with a passion for building beautiful and functional mobile applications.",
  },
  {
    icon: "/services/blog.gif",
    title: 'Tech Blogging',
    description: "I write technical blogs based on my projects and various other experiences I have.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 lg:mb-36">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="container mx-auto"
      >
        <>
          <h2 className="section-title mb-24 text-center mx-auto">
            My Services
          </h2>

          {/* grid items */}
          <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
            {servicesData.map((item, index) => {
              return (
                <Card
                  className="w-full max-w-[424px] h-[350px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                  key={index}
                >
                  <CardHeader className="text-primary -mt-32">
                    <img src={item.icon} alt={`icon-${index}`} className='h-[200px] w-[200px] rounded-[20px] object-cover object-center' />
                  </CardHeader>

                  <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      </motion.div>
    </section>
  );
};

export default Services;
