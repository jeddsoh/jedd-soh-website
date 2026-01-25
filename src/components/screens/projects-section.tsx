'use client'

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ProjectFolder } from "./project-folder";

export interface project {
    title: string
    description: string
    href: any
    imageSrc: string
    tags: string[]
}

const featuredProjects: project[] = [
    {
        title: "Tatsumaki Ramen",
        description: "A premium Japanese ramen lounge experience.",
        href: "https://tatsumakiramen.com/",
        imageSrc: '/tatsumaki-hero-section.png',
        tags: ["Web3", "NFT", "DeFi"]
    },
    {
        title: "Cyber Potions",
        description: "Futuristic digital alchemy and potion brewing.",
        href: "https://cyberpotions.com/",
        imageSrc: '/tatsumaki-hero-section.png',
        tags: ["Web3", "NFT", "DeFi"]
    },
    {
        title: "Neon Nexus",
        description: "A connected hub for the neon-soaked underground.",
        href: "https://neonnexus.io/",
        imageSrc: '/tatsumaki-hero-section.png',
        tags: ["Web3", "NFT", "DeFi"]
    },
    {
        title: "Onyx Oracle",
        description: "Decrypting the future with dark-mode analytics.",
        href: "https://onyxoracle.xyz/",
        imageSrc: '/tatsumaki-hero-section.png',
        tags: ["Web3", "NFT", "DeFi"]
    },
    {
        title: "Vivid Void",
        description: "Where color meets the abyss in high-contrast design.",
        href: "https://vividvoid.com/",
        imageSrc: '/tatsumaki-hero-section.png',
        tags: ["Web3", "NFT", "DeFi"]
    }
]

export function ExpandableProjectCards() {
    const [active, setActive] = useState<project | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    const getActiveProject = () => active as project;

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${getActiveProject().title}-${id}`}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex absolute top-4 right-4 items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full h-10 w-10 z-50 transition-colors"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon className="text-primary" />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${getActiveProject().title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-[85vh] md:h-fit md:max-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl relative"
                        >
                            <div className="relative h-64 w-full shrink-0 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center p-8">
                                <motion.div layoutId={`image-container-${getActiveProject().title}-${id}`} className="relative z-10 hidden sm:block">
                                    <ProjectFolder
                                        project={getActiveProject()}
                                        imageLayoutId={`image-${getActiveProject().title}-${id}`}
                                        size={2}
                                    />
                                </motion.div>
                                <motion.div layoutId={`image-container-${getActiveProject().title}-${id}`} className="relative z-10 sm:hidden">
                                    <ProjectFolder
                                        project={getActiveProject()}
                                        imageLayoutId={`image-${getActiveProject().title}-${id}`}
                                        size={1.5}
                                    />
                                </motion.div>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent" />
                            </div>

                            <div className="flex-1 overflow-y-auto px-6 pb-6 md:px-8 md:pb-8 flex flex-col gap-4">
                                <div>
                                    <motion.h3
                                        layoutId={`title-${getActiveProject().title}-${id}`}
                                        className="font-bold text-3xl text-primary mb-2"
                                    >
                                        {getActiveProject().title}
                                    </motion.h3>
                                    <div className="flex flex-wrap gap-2">
                                        {getActiveProject().tags.map((tag) => (
                                            <span key={tag} className="bg-neutral-100 dark:bg-neutral-800 text-secondary px-2 py-0.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <motion.p
                                    layoutId={`description-${getActiveProject().description}-${id}`}
                                    className="text-tertiary text-base leading-relaxed"
                                >
                                    {getActiveProject().description}
                                </motion.p>

                                <div className="mt-auto pt-4">
                                    <motion.a
                                        layoutId={`button-${getActiveProject().title}-${id}`}
                                        href={getActiveProject().href}
                                        target="_blank"
                                        className="block w-full text-center px-6 py-4 text-base rounded-xl font-semibold bg-tertiary text-primary hover:opacity-90 transition-opacity shadow-lg"
                                    >
                                        Visit Project
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-3 flex flex-col">
                {featuredProjects.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="group folder-group p-3 flex flex-row items-center gap-4 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                    >
                        <div className="relative">
                            <motion.div layoutId={`image-container-${card.title}-${id}`}>
                                <ProjectFolder
                                    project={card}
                                    imageLayoutId={`image-${card.title}-${id}`}
                                    canToggle={false}
                                />
                            </motion.div>
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-semibold text-base text-primary truncate"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-secondary text-xs truncate"
                            >
                                {card.description}
                            </motion.p>
                        </div>

                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-xs rounded-full font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-primary dark:text-primary group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all shadow-sm"
                        >
                            Open
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = ({ className }: { className?: string }) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className || "h-4 w-4 text-black"}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};


