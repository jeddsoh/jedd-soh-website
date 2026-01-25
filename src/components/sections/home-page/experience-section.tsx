"use client";

import React from "react";
import { motion } from "motion/react";

const experiences = [
    {
        company: "Stealth Startup",
        role: "Senior Design Engineer",
        period: "2024 - Present",
        description: "Leading the design system and frontend architecture for a next-gen AI platform. Bridging the gap between design and engineering.",
    },
    {
        company: "Tech Solutions Inc.",
        role: "Frontend Developer",
        period: "2022 - 2024",
        description: "Built scalable web applications using React, Next.js, and TypeScript. Improved site performance by 40%.",
    },
    {
        company: "Creative Agency",
        role: "UI/UX Designer & Dev",
        period: "2020 - 2022",
        description: "Designed and developed award-winning marketing sites and e-commerce platforms for global brands.",
    },
];

export const ExperienceSection = () => {
    return (
        <section className="w-full relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                Experience
            </h2>

            <div className="relative max-w-2xl mx-auto pl-8 md:pl-0 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.1)]" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-lg font-medium text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
