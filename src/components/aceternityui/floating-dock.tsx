/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { Link, Menu } from "lucide-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import { useRef, useState } from "react";
import { RainbowButton } from "../magicui/rainbow-button";
import { Menu01 } from "@untitledui/icons";
import { Logo } from "@/components/foundations/logo/logo";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { BorderBeam } from "../magicui/border-beam";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 top-full mt-2 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <a
                                    href={item.href}
                                    key={item.title}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <RainbowButton
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
            >
                <Menu01 size={24} />

            </RainbowButton>
        </div>
    );
};

// <Logo />
//         <div className="flex flex-row gap-2 items-center">
//           <RainbowButton variant='outline' size="icon" asChild>
//             <Link href="mailto:jeddsoh@gmail.com" target="_blank" rel="noopener noreferrer">
//               <Mail01 />
//             </Link>
//           </RainbowButton>
//           <RainbowButton variant="outline" size="icon" asChild>
//             <Link href="https://github.com/jeddsoh" target="_blank" rel="noopener noreferrer">
//               <GitHub />
//             </Link>
//           </RainbowButton>
//           <RainbowButton variant="outline" size="icon" asChild>
//             <Link href="https://www.linkedin.com/in/jeddsoh/" target="_blank" rel="noopener noreferrer">
//               <LinkedIn />
//             </Link>
//           </RainbowButton>
//           <Separator orientation="vertical" />
//           <RainbowButton variant="default" size="icon" asChild>
//             <AnimatedThemeToggler />
//           </RainbowButton>

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden h-16 items-start gap-4 rounded-lg md:flex  w-full justify-between relative items-center",
                className,
            )}
        >
            <Logo className="hidden md:flex mt-2" />
            <div className="flex flex-row gap-2 items-center absolute left-1/2 -translate-x-1/2">

                {items.map((item) => (
                    <IconContainer mouseX={mouseX} key={item.title} {...item} />
                ))}
            </div>
            <RainbowButton variant="default" size="icon" className="mr-4" asChild>
                <AnimatedThemeToggler />
            </RainbowButton>

        </motion.div >
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20],
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-lg bg-background fg-foreground"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -bottom-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center rounded-lg"
                >
                    {icon}
                </motion.div>
                {hovered &&
                    <BorderBeam
                        duration={2}
                        size={200}
                        className="from-neutral-500 via-transparent to-transparent"
                    />
                }
            </motion.div>
        </a>
    );
}
