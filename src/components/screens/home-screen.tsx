import { ProfileSection } from '../sections/home-page/profile-section'
import { FAQSection } from '../sections/home-page/faq-section'
import { HeroSection } from '../sections/home-page/hero-section'
import { ProjectsSection } from '../sections/home-page/projects-section'
import { projects } from '@/constants/projects'
import { AboutSection } from '../sections/home-page/about-section'
import { Ripple } from '../magicui/ripple'
import { AvatarProfilePhoto } from '../base/avatar/avatar-profile-photo'

export const HomeScreen = () => {

  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="relative flex flex-col items-center justify-center min-h-96 -mb-16 md:-mb-32">

        <div className="flex items-center justify-center flex-col gap-8 w-full h-full">
          <AvatarProfilePhoto size="lg" alt="Jedd Soh" src="/images/avatar.png" />
        </div>
        <Ripple />
      </section>
      <HeroSection />
    </div>
  )
}
