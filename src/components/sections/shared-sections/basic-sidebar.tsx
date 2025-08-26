import { Logo } from "@/components/foundations/logo/logo";
import { FooterSection } from "./footer-section";

export const BasicSidebar = () => {
    return (
        <div className="relative flex h-full max-w-2xs flex-col gap-4 max-h-screen justify-between overflow-hidden py-4 pl-4">
            <div className="flex flex-col gap-4 w-full">
                <Logo />
                <div className="not-prose rounded-2xl text-sm text-muted-foreground [&>p+p]:mt-4.5">
                    <p>
                        I'm a multidisciplinary designer and developer with expertise in product design, web development, and design systems. I specialize in creating digital experiences that blend thoughtful design with robust engineering, from startups to enterprise organizations.            </p>
                    <p>
                        Currently, I'm a Software Engineer at bloombox, leading strategic initiatives for creative technology. I've worked across various roles including Design Ops at Wipro, Web Developer at frank., and Product Designer at Affirm, always focusing on user-centered solutions and performance optimization.
                    </p>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}