"use client";

import { ProjectsSidePanel } from './projects-side-panel';
import { useProjectsPanel } from '@/providers/projects-panel-provider';

export function ProjectsSidePanelWrapper() {
  const { isOpen, closeProjectsPanel } = useProjectsPanel();

  return (
    <ProjectsSidePanel
      isOpen={isOpen}
      onClose={closeProjectsPanel}

    />
  );
}
