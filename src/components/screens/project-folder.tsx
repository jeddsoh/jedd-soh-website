import React from 'react';
import Folder from '../Folder';
import { project } from './projects-section';

import { motion } from 'motion/react';

interface ProjectFolderProps {
    project: project;
    color?: string;
    imageLayoutId?: string;
    size?: number;
    canToggle?: boolean;
}

export const ProjectFolder: React.FC<ProjectFolderProps> = ({ project, color, imageLayoutId, size = 0.6, canToggle = true }) => {
    // Generate a consistent color if not provided or just use a default
    // We can just use the passed color or default blue

    return (
        <div className="relative z-0">
            <Folder
                canToggle={canToggle}
                color={color}
                size={size}
                items={[
                    <div key="image" className="w-full h-full bg-black/5 flex items-center justify-center overflow-hidden rounded-[inherit]">
                        <motion.img
                            layoutId={imageLayoutId}
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>,
                    <div key="desc" className="w-full h-full bg-white p-2 flex flex-col gap-1 overflow-hidden rounded-[inherit]">
                        <h4 className="text-[6px] font-bold text-black">{project.title}</h4>
                        <p className="text-[4px] text-gray-500 leading-tight">{project.description}</p>
                    </div>
                ]}
            />
        </div>
    );
};
