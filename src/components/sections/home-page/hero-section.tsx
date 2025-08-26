"use client";


import { MacbookScroll } from "@/components/aceternityui/macbook-scroll";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useProjectsPanel } from "@/providers/projects-panel-provider";

export function HeroSection() {
    const { openProjectsPanel } = useProjectsPanel();

    return (
        <div className="relative mx-auto flex flex-col items-center justify-center w-full">
            <div className="px-4 py-10 md:py-20">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-black text-foreground md:text-4xl lg:text-7xl">
                    {`Apps and websites. Designed well. Built fast.`
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-muted-foreground"
                >
                    I'm Jedd, a design engineer based in Oklahoma City. I like making useful, usable, and beautiful things for the web.
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <RainbowButton onClick={openProjectsPanel}>
                        View my work
                    </RainbowButton>
                    <RainbowButton variant="outline">
                        Hire me im broke
                    </RainbowButton>
                </motion.div>


            </div >
        </div >
    );
}

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
            </div>
            <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Login
            </button>
        </nav>
    );
};
