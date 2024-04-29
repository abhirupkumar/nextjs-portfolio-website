"use client";

import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import TagCloud from 'TagCloud';
import { useEffect, useRef } from 'react';

const Skills = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const texts = [
            'C++', 'HTML5', 'CSS3',
            'Javascript', 'Typescript', 'React.js',
            'Next.js', 'React Redux', 'Node.js', 'Tailwind CSS', 'Material UI', 'Shadcn UI',
            'MongoDB', 'Firebase', 'Prisma', 'REST API', 'Open AI API', 'Langchain', 'Sanity.io',
            'Git', 'Github', 'Rollup',
        ];
        const options = {
            radius: 300,
            direction: 138,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
            loop: true,
            lockX: true,
            lockY: true,
        };

        return () => {
            TagCloud(container, texts, options);
        };
    }, []);

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