"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ProjectCards } from './project-cards';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BorderBeam } from '@/components/magicui/border-beam';
import { BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
import { Folder } from '@untitledui/icons';

interface ProjectsSidePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectsSidePanel({ isOpen, onClose }: ProjectsSidePanelProps) {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    initial={{
                        x: '-100%',
                        opacity: 0,
                        scale: 0.95,
                        filter: 'blur(4px)'
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)'
                    }}
                    exit={{
                        x: '-100%',
                        opacity: 0,
                        scale: 0.95,
                        filter: 'blur(4px)'
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                        mass: 0.8
                    }}
                    className="w-sm border rounded-lg h-full overflow-y-hidden overflow-x-visible"
                >
                    {/* Header */}
                    <motion.div
                        className="flex items-center justify-between py-2 px-2 bg-muted border-b bg-gradient-to-r from-background to-muted/20 "
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                        <motion.h1
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                        >
                            <BadgeWithIcon type="modern" size='lg' iconLeading={Folder} color='gray'>
                                Projects
                            </BadgeWithIcon>
                        </motion.h1>
                        <motion.button
                            onClick={onClose}
                            className="hover:bg-muted rounded-sm transition-all duration-200 hover:scale-110 active:scale-95 p-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <X className="h-4 w-4 text-foreground" />
                        </motion.button>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className='h-full'
                    >
                        <ScrollArea className="h-full w-full overflow-x-visible">
                            <ProjectCards />
                        </ScrollArea>
                    </motion.div>
                </motion.div>
            )}

        </AnimatePresence>
    );
}
