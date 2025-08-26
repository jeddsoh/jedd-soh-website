"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProjectsPanelContextType {
  isOpen: boolean;
  openProjectsPanel: () => void;
  closeProjectsPanel: () => void;
}

const ProjectsPanelContext = createContext<ProjectsPanelContextType | undefined>(undefined);

export function ProjectsPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openProjectsPanel = () => {
    setIsOpen(true);
  };

  const closeProjectsPanel = () => {
    setIsOpen(false);
  };

  return (
    <ProjectsPanelContext.Provider value={{
      isOpen,
      openProjectsPanel,
      closeProjectsPanel,
    }}>
      {children}
    </ProjectsPanelContext.Provider>
  );
}

export function useProjectsPanel() {
  const context = useContext(ProjectsPanelContext);
  if (context === undefined) {
    throw new Error('useProjectsPanel must be used within a ProjectsPanelProvider');
  }
  return context;
}
