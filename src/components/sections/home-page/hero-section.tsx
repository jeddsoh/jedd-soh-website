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
        <div className="relative mx-auto flex flex-col items-center justify-center w-full min-h-[60vh] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/20 blur-[120px] rounded-full sm:w-[500px] sm:h-[300px]" />

            <div className="px-4 py-10 md:py-20 flex flex-col items-center relative z-10">
                <BadgeGroup addonText="Availability" color="brand" theme="modern">
                    Open for opportunities
                </BadgeGroup>
                <h1 className="mt-6 relative z-10 mx-auto max-w-4xl text-center text-3xl font-black text-foreground md:text-5xl lg:text-7xl tracking-tight">
                    {`Apps and websites. Designed well. Built fast.`
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                                }}
                                className="mr-3 inline-block bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative z-10 mx-auto max-w-xl py-6 text-center text-lg md:text-xl font-medium text-muted-foreground leading-relaxed"
                >
                    I'm Jedd, a design engineer based in Oklahoma City. I craft useful, usable, and beautiful digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4"
                >
                    <RainbowButton onClick={openProjectsPanel} className="h-12 px-8 text-base">
                        View my work
                    </RainbowButton>
                    <button className="h-12 px-8 rounded-xl font-semibold border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </div>
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
