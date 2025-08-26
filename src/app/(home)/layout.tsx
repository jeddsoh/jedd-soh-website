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
import { BorderBeam } from "@/components/magicui/border-beam"
import { LogoMinimal } from "@/components/foundations/logo/logo-minimal"
import { LineShadowText } from "@/components/magicui/line-shadow-text"
import { FooterSection } from "@/components/sections/shared-sections/footer-section"
import { FloatingDock } from "@/components/aceternityui/floating-dock"
import { Home, User, Mail } from "lucide-react"
import { ProfileSection } from "@/components/sections/home-page/profile-section"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { Ripple } from "@/components/magicui/ripple"
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Trigger animation after a brief delay
    setTimeout(() => {
      setIsExpanded(true);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col fg-foreground text-foreground h-dvh overflow-y-auto overflow-x-hidden max-w-full">
      <section className="w-full px-4 py-2 flex flex-row items-center justify-between">
        <Logo className="flex mt-2" />
        <div className="flex flex-row gap-2 items-center absolute left-1/2 -translate-x-1/2">

        </div>
        <RainbowButton variant="default" size="icon" asChild>
          <AnimatedThemeToggler />
        </RainbowButton>
      </section>


      <div className="flex-1 flex flex-col md:flex-row gap-4 p-4 pt-0 min-h-0">
        <ScrollArea
          className={`border rounded-lg bg-background max-h-screen transition-all duration-3000 ease-in-out flex-2 opacity-100  `}
        >
          {children}
        </ScrollArea>
        {/* <ScrollArea
          className={`border rounded-lg bg-background max-h-screen transition-all duration-3000 ease-in-out w-lg`}
        >
          {children}
        </ScrollArea> */}
      </div>
    </div>
  )
}
