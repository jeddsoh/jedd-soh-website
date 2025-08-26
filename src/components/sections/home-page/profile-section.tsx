'use client'

import {
  BookOpen01,
  Check,
  Copy01,
  Cube01,
  HelpCircle,
  Passport,
  Mail01,
} from '@untitledui/icons'
import { ButtonUtility } from '@/components/base/buttons/button-utility'
import { useClipboard } from '@/hooks/use-clipboard'
import { AvatarProfilePhoto } from '../../base/avatar/avatar-profile-photo'
import { RainbowButton } from '../../magicui/rainbow-button'
import { Ripple } from '@/components/magicui/ripple'

export const ProfileSection = () => {
  const clipboard = useClipboard()

  return (
    <section id="hero" className="relative flex min-h-0 flex-1 flex-col items-center justify-center">

      <div className="relative flex items-center justify-center flex-col gap-8 overflow-visible mt-2">
        <figcaption className="not-prose mt-6 inline-flex flex-col items-center md:mt-16 gap-0">
          <AvatarProfilePhoto size="lg" alt="Jedd Soh" src="/images/avatar.png" />

          <p className="mt-4 text-2xl font-black tracking-tight">Jedd Soh</p>
          <cite className="mt-0.5 not-italic text-md">Software Engineer</cite>
        </figcaption>

      </div>
      <Ripple />

    </section>
  )
}
