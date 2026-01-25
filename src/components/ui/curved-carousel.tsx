'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate, PanInfo } from 'motion/react';
import { cn } from '@/lib/utils';

interface CurvedCarouselProps {
    children: React.ReactNode[];
    className?: string;
    itemWidth?: number;
    gap?: number;
    curveStrength?: number; // Higher = more bend
    perspective?: number;
}

export const CurvedCarousel = ({
    children,
    className,
    itemWidth = 380,
    gap = 40,
    curveStrength = 15, // degrees
    perspective = 1200,
}: CurvedCarouselProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // Track continuous scroll position
    const x = useMotionValue(0);
    const xSpring = useSpring(x, { damping: 30, stiffness: 200 });

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const totalContentWidth = children.length * (itemWidth + gap) - gap;

    // Calculate drag constraints
    const dragConstraints = {
        left: -(totalContentWidth - containerWidth / 2 - itemWidth / 2),
        right: containerWidth / 2 - itemWidth / 2,
    };

    const handleDragEnd = (event: any, info: PanInfo) => {
        // Basic snapping logic could go here, but let's start with smooth drag
        const velocity = info.velocity.x;
        const currentX = x.get();

        // Smooth deceleration
        animate(x, currentX + velocity * 0.1, {
            type: "spring",
            damping: 30,
            stiffness: 100,
            onUpdate: (latest) => {
                // Clamp to constraints
                if (latest > dragConstraints.right) x.set(dragConstraints.right);
                if (latest < dragConstraints.left) x.set(dragConstraints.left);
            }
        });
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full max-w-full overflow-x-hidden select-none touch-none", className)}
            style={{ perspective: `${perspective}px` }}
        >
            <motion.div
                drag="x"
                dragConstraints={dragConstraints}
                onDrag={(e, info) => x.set(x.get() + info.delta.x)}
                onDragEnd={handleDragEnd}
                className="flex cursor-grab active:cursor-grabbing py-20"
                style={{ x: xSpring, transformStyle: "preserve-3d" }}
            >
                {children.map((child, index) => {
                    const itemOffset = index * (itemWidth + gap);

                    return (
                        <CarouselItem
                            key={index}
                            offset={itemOffset}
                            scrollX={xSpring}
                            containerWidth={containerWidth}
                            itemWidth={itemWidth}
                            curveStrength={curveStrength}
                        >
                            {child}
                        </CarouselItem>
                    );
                })}
            </motion.div>
        </div>
    );
};

interface CarouselItemProps {
    children: React.ReactNode;
    offset: number;
    scrollX: any;
    containerWidth: number;
    itemWidth: number;
    curveStrength: number;
}

const CarouselItem = ({
    children,
    offset,
    scrollX,
    containerWidth,
    itemWidth,
    curveStrength
}: CarouselItemProps) => {
    // Horizontal position relative to current scroll
    const x = useTransform(scrollX, (latest: number) => latest + offset);

    // Distance from center of container (normalized -1 to 1)
    const distanceFromCenter = useTransform(x, (latest: number) => {
        const center = containerWidth / 2 - itemWidth / 2;
        const distance = latest - center;
        return distance / (containerWidth / 1.5); // Sensitivity
    });

    // Calculate 3D transforms based on distance
    const rotateY = useTransform(distanceFromCenter, [-1, 0, 1], [`${curveStrength}deg`, "0deg", `-${curveStrength}deg`]);
    const translateZ = useTransform(distanceFromCenter, [-1, 0, 1], [-150, 0, -150]);
    const opacity = useTransform(distanceFromCenter, [-2, -1.2, 0, 1.2, 2], [0, 1, 1, 1, 0]);
    const scale = useTransform(distanceFromCenter, [-1.2, 0, 1.2], [0.85, 1, 0.85]);

    return (
        <motion.div
            style={{
                width: itemWidth,
                flexShrink: 0,
                rotateY,
                z: translateZ,
                opacity,
                scale,
                transformStyle: "preserve-3d",
            }}
            className="relative will-change-transform"
        >
            {children}
        </motion.div>
    );
};
