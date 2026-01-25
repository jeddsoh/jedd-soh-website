"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "motion/react";



export const ProjectsSection = ({
    projects,
}: {
    projects: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = projects.slice(0, 5);
    const secondRow = projects.slice(5, 10);
    const thirdRow = projects.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden w-full max-w-[100vw] overflow-x-hidden mx-auto antialiased relative flex flex-col self-auto [perspective:1000px]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((project) => (
                        <ProductCard
                            project={project}
                            translate={translateX}
                            key={project.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((project) => (
                        <ProductCard
                            project={project}
                            translate={translateXReverse}
                            key={project.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((project) => (
                        <ProductCard
                            project={project}
                            translate={translateX}
                            key={project.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <h1 className="text-4xl md:text-8xl font-bold dark:text-white bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
                Selected <br /> Works
            </h1>
            <p className="max-w-2xl text-lg md:text-2xl mt-8 text-muted-foreground leading-relaxed">
                A collection of products built with precision, speed, and focus on user experience.
            </p>
        </div>
    );
};

export const ProductCard = ({
    project,
    translate
}: {
    project: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            key={project.title}
            className="group/product h-96 w-[90vw] md:w-[35rem] relative shrink-0 rounded-2xl overflow-hidden glass-card p-1"
        >
            <a
                href={project.link}
                className="block w-full h-full relative rounded-xl overflow-hidden"
            >
                <img
                    src={project.thumbnail}
                    className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-110"
                    alt={project.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm pointer-events-none flex items-end p-6">
                <h2 className="text-2xl font-bold text-white translate-y-4 group-hover/product:translate-y-0 transition-transform duration-300">
                    {project.title}
                </h2>
            </div>
        </motion.div>
    );
};
