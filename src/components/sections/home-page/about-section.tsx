import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo"
import { Ripple } from "@/components/magicui/ripple"

export const AboutSection = () => {

    return (
        <section id="about" className="flex flex-row gap-4 w-full items-center justify-between mx-auto px-4 relative">
            <div className="mx-auto prose">
                <figcaption className="relative overflow-visible not-prose mt-6 inline-flex flex-col items-center md:mt-12 gap-0">
                    <AvatarProfilePhoto size="sm" alt="Jedd Soh" src="/images/avatar.png" />

                    <p className="mt-4 text-2xl font-black tracking-tight">Jedd Soh</p>
                    <cite className="mt-0.5 not-italic text-md">Software Engineer</cite>
                </figcaption>
                <div className="not-prose my-8 rounded-2xl bg-card/50 glass-card px-5 py-6 text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5 ">
                    <p>
                        I'm a passionate Design Engineer with a deep love for building digital products that just feel right.
                        My journey started with a curiosity specific to how things work on the web, which quickly evolved into a career
                        focused on the intersection of design and engineering.
                    </p>
                    <p>
                        I believe the best products are built when design and code are treated as a single medium.
                        I specialize in React, Next.js, and TypeScript, and I obsess over details like interaction design,
                        performance, and accessibility.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new coffee shops in OKC or tinkering with
                        IoT projects at home.
                    </p>
                </div>
            </div>
        </section>
    )
}
