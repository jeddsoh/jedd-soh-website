import { GitHub, LinkedIn } from "@/components/foundations/social-icons"
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Mail01 } from "@untitledui/icons"
import Link from "next/link"

export const FooterSection = () => {

    return (
        <footer id="footer" className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between gap-4 w-full">
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
                <RainbowButton variant="default" size="icon" asChild>
                    <AnimatedThemeToggler />
                </RainbowButton>
            </div>
            {/* <div className="flex flex-row gap-2 items-center w-full justify-start items-center">
                <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Jedd Soh. All rights reserved.
                </p>
            </div> */}
        </footer>
    )
}
