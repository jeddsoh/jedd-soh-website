'use client'

import { motion, AnimatePresence } from 'motion/react'
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Logo } from "@/components/foundations/logo/logo"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ProjectsSidePanelWrapper } from "@/components/sections/home-page/projects-side-panel-wrapper"
import { ProjectsPanelProvider, useProjectsPanel } from "@/providers/projects-panel-provider"
import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons/theme-toggler'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme();
  const { isOpen, openProjectsPanel, closeProjectsPanel } = useProjectsPanel();

  return (
    <div className="flex flex-col bg-background text-foreground h-dvh w-dvw max-w-[100dvw] overflow-hidden overflow-x-hidden">
      <motion.section
        className="w-full px-4 py-2 flex flex-row items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Logo className="flex mt-2" />
        </motion.div>
        <div className="flex flex-row gap-2 items-center absolute left-1/2 -translate-x-1/2">

        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <ThemeTogglerButton
            variant="outline"
            size="default"
            direction="ltr"
            modes={['light', 'dark']}
          />
        </motion.div>
      </motion.section>

      <div
        className="flex flex-row p-4 pt-0 h-full min-h-0 flex-1 relative"
      >
        {/* Main Content */}
        <div
          className="flex-1 h-full min-w-0"
        >

          <ScrollArea
            className={`border rounded-lg bg-gradient-to-b from-muted/50 to-background h-full transition-all duration-300 ease-out`}
          >
            {children}
          </ScrollArea>
        </div>

        {/* Animated Gap */}
        <motion.div
          className="overflow-hidden"
          animate={{
            width: isOpen ? 16 : 0
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
        />

        {/* Projects Side Panel */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className='overflow-hidden hidden md:block'
            >
              <div className="max-w-md w-full h-full border rounded-lg overflow-y-hidden overflow-x-visible">
                <ProjectsSidePanelWrapper />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
