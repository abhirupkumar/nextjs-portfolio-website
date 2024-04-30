"use client";
import useScreenSize from '@/hooks/useScreenSize';
import TagCloud from 'TagCloud';
import { useEffect, useRef } from 'react';

const Skills = () => {

    const containerRef = useRef(null);
    const screenSize = useScreenSize();

    useEffect(() => {
        const container = containerRef.current;
        const texts = [
            'C++', 'HTML5', 'CSS3',
            'Javascript', 'Typescript', 'React.js',
            'Next.js', 'React Redux', 'Node.js', 'Tailwind CSS', 'Material UI', 'Shadcn UI',
            'MongoDB', 'Firebase', 'Prisma', 'REST API', 'Open AI API', 'Langchain', 'Sanity.io',
            'Git', 'Github', 'Rollup',
        ];
        let radius = 300;
        if (screenSize.width < 300) radius = 120;
        else if (screenSize.width < 440) radius = 150;
        else if (screenSize.width < 640) radius = 180;
        else if (screenSize.width < 768) radius = 250;
        else radius = 300;

        const options = {
            radius: radius,
            direction: 138,
            maxSpeed: 'fast',
            initSpeed: 'normal',
            keep: true,
            loop: true,
            lockX: true,
            lockY: true,
        };

        TagCloud(container, texts, options);
    }, [containerRef, screenSize]);

    return (
        <section className="mb-12">
            <div className="container mx-auto">
                <h2 className="section-title text-center mx-auto">
                    Skills
                </h2>

                <div className="relative top-0 w-full h-full flex justify-center items-center">
                    <span className='tagcloud' ref={containerRef}></span>
                </div>
            </div>
        </section>
    );
};

export default Skills;