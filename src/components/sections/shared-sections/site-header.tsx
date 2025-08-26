import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { Mail01 } from "@untitledui/icons"
import { GitHub, LinkedIn } from "@/components/foundations/social-icons"
import Link from "next/link"

export function SiteHeader() {
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) ">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-4">

                <SidebarTrigger className="-ml-1" />


                <div className="ml-auto flex items-center gap-2">
                    <div className="flex flex-row items-center justify-between gap-4 w-full">
                        <div className="flex flex-row gap-2 items-center w-full justify-start items-center">
                            <RainbowButton variant='outline' size="icon" className="w-8 h-8" asChild>
                                <Link href="mailto:jeddsoh@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Mail01 />
                                </Link>
                            </RainbowButton>
                            <RainbowButton variant="outline" size="icon" className="w-8 h-8" asChild>
                                <Link href="https://github.com/jeddsoh" target="_blank" rel="noopener noreferrer">
                                    <GitHub />
                                </Link>
                            </RainbowButton>
                            <RainbowButton variant="outline" size="icon" className="w-8 h-8" asChild>
                                <Link href="https://www.linkedin.com/in/jeddsoh/" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn />
                                </Link>
                            </RainbowButton>
                        </div>
                        <Separator
                            orientation="vertical"
                            className="mx-2 data-[orientation=vertical]:h-4"
                        />
                        <RainbowButton variant="default" size="icon" className="w-8 h-8" asChild>
                            <AnimatedThemeToggler />
                        </RainbowButton>
                    </div>
                </div>
            </div>
        </header>
    )
}
