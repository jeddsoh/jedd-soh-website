'use client'

import { FileTreeNavigation } from "@/components/file-tree-navigation"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Mail01 } from "@untitledui/icons"
import { GitHub } from "@/components/foundations/social-icons"
import { LinkedIn } from "@/components/foundations/social-icons"
import Link from "next/link"
import { Logo } from "@/components/foundations/logo/logo"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { useTheme } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <div className="relative flex flex-row h-screen w-screen bg-background fg-foreground">

      <div className="relative flex h-full min-w-3xs max-w-sm p-4 flex-col gap-5 max-h-screen justify-center overflow-hidden">
        <Logo />
        <FileTreeNavigation />
        <div className="flex flex-row gap-2 items-center w-full justify-start items-center">
          <RainbowButton variant='outline' size="icon" asChild>
            <Link href="mailto:jeddsoh@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail01 />
            </Link>
          </RainbowButton>
          <RainbowButton variant="outline" size="icon" asChild>
            <Link href="https://github.com/jeddsoh" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </Link>
          </RainbowButton>
          <RainbowButton variant="outline" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/jeddsoh/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </Link>
          </RainbowButton>
        </div>
      </div>

      <div className="relative flex flex-col grow-1 h-full w-full p-4 ">
        <div className="right-6 left-6 rounded-md shadow-lg border p-2  bg-background flex flex-row gap-2 z-10 items-center justify-between absolute top-6 mx-auto">
          <Logo className="" />
          <RainbowButton variant="default" size="icon" asChild>
            <AnimatedThemeToggler />
          </RainbowButton>

        </div>
        <ScrollArea className="flex flex-col w-full h-full gap-4 border rounded-lg scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {children}
        </ScrollArea>
      </div>
    </div>

  )
}
