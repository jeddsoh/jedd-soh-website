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
                <div className="not-prose my-8 rounded-2xl bg-card px-5 py-6 text-tertiary md:my-12 md:p-8 [&>p+p]:mt-4.5 ">
                    <p>
                        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
                        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                    </p>
                    <p>
                        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis
                        metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                    </p>
                    <p>
                        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
                        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
                    </p>
                </div>
            </div>
        </section>
    )
}
