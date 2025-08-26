"use client";

import { projects } from '@/constants/projects';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CardSpotlight } from '@/components/aceternityui/card-spotlight';
import { CardBody, CardContainer, CardItem } from "@/components/aceternityui/3d-card";
import Link from 'next/link';
import { Safari } from '@/components/magicui/safari';
import { BorderBeam } from '@/components/magicui/border-beam';

interface ProjectCardProps {
    title: string;
    link: string;
    thumbnail: string;
    index: number;
}

const ProjectCard = ({ title, link, thumbnail, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            className="group relative overflow-x-visible"
        >
            <Link href={link} target="_blank">
                <CardContainer className="z-10 transition-all duration-300 p-2">
                    <CardBody className="relative group/card w-auto h-auto rounded-lg ">
                        <CardItem
                            translateZ="50"
                            className="font-semibold"
                        >
                            {title}
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4 relative"
                        >
                            <Safari imageSrc={thumbnail} className="size-full group-hover/card:scale-105 transition-all duration-300 group-hover/card:shadow-2xl" />
                        </CardItem>

                    </CardBody>
                </CardContainer>
            </Link>
        </motion.div >
    );
};

export function ProjectCards() {
    return (
        <div className="p-4 overflow-x-visible">
            <div className="flex flex-col gap-4 items-center justify-start w-full overflow-x-visible">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        link={project.link}
                        thumbnail={project.thumbnail}
                        index={index}
                    />
                ))}
            </div>

        </div>
    );
}
