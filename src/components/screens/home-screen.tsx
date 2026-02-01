'use client'

import { ProfileSection } from '../sections/home-page/profile-section'
import { HeroSection } from '../sections/home-page/hero-section'
import { useProjectsPanel } from '@/providers/projects-panel-provider'
import { RainbowButton, RainbowButtonProps } from '../magicui/rainbow-button'
import { ExpandableProjectCards } from './projects-section'

export const HomeScreen = () => {
  const { openProjectsPanel } = useProjectsPanel()

  // setTimeout(() => {
  //   openProjectsPanel()
  // }, 1000)

  return (
    <div className="w-full h-full flex flex-col gap-24 relative">
      <ProfileSection />
      {/* <ExpandableProjectCards /> */}
    </div>
  )
}
