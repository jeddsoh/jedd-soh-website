"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ProjectCards } from './project-cards';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BorderBeam } from '@/components/magicui/border-beam';
import { BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
import { Folder } from '@untitledui/icons';
import { ExpandableProjectCards } from '@/components/screens/projects-section';

interface ProjectsSidePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectsSidePanel({ isOpen, onClose }: ProjectsSidePanelProps) {
    if (!isOpen) return null;

    return (
        <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between py-2 px-2 bg-muted border-b bg-gradient-to-r from-background to-muted/20 ">
                <h1 className="flex items-center">
                    My Work
                </h1>
                <button
                    onClick={onClose}
                    className="hover:bg-muted rounded-sm transition-all duration-200 hover:scale-110 active:scale-95 p-1"
                >
                    <X className="h-4 w-4 text-foreground" />
                </button>
            </div>

            {/* Content */}
            <div className='h-full min-h-0 flex-1 relative'>
                <ScrollArea className="h-full w-full overflow-x-hidden p-2">
                    <ExpandableProjectCards />

                </ScrollArea>
            </div>
        </div>
    );
}
