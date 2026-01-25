"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is your tech stack?",
        answer: "I primarily work with Next.js, React, TypeScript, and Tailwind CSS. For backend, I'm comfortable with Node.js, Supabase, and PostgreSQL.",
    },
    {
        question: "Are you available for freelance work?",
        answer: "Yes, I am currently accepting new projects. Whether you need a landing page, a full web app, or a design system, feel free to reach out!",
    },
    {
        question: "Do you do design as well as development?",
        answer: "Absolutely. I consider myself a Design Engineer. I can handle the entire process from Figma prototypes to production-ready code.",
    },
    {
        question: "Where are you based?",
        answer: "I am based in Oklahoma City, OK, but I work with clients globally.",
    },
];

export const FAQSection = () => {
    return (
        <section id="faq" className="w-full flex flex-col items-center pb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                Frequently Asked Questions
            </h2>
            <div className="w-full max-w-2xl">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 glass-card data-[state=open]:bg-white/60 dark:data-[state=open]:bg-white/5 transition-colors">
                            <AccordionTrigger className="text-lg font-medium hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
