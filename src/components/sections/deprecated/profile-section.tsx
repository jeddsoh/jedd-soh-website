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
import { BorderBeam } from '@/components/magicui/border-beam'

export const ProfileSection = () => {
  const clipboard = useClipboard()

  return (
    <section id="hero" className="relative flex min-h-0 flex-1 flex-col items-center justify-center py-16 px-4 overflow-visible">
      <Ripple className="absolute -mt-28" />

      <div className="relative flex items-center justify-center flex-col gap-8 overflow-visible">
        <figcaption className="not-prose mt-6 inline-flex flex-col items-center md:mt-12 gap-0">
          <AvatarProfilePhoto size="lg" alt="Jedd Soh" src="/images/avatar.png">
          </AvatarProfilePhoto>


          <p className="mt-4 text-2xl font-black tracking-tight">Jedd Soh</p>
          <cite className="mt-0.5 not-italic text-md">Software Engineer</cite>
        </figcaption>

      </div>

      <div className="relative mt-6 flex h-10 items-center rounded-lg border border-secondary bg-secondary">

        <code className="px-3 font-mono text-secondary">
          jedd@cyberpotions.com
        </code>

        <hr className="h-10 w-px bg-border-secondary" />

        <ButtonUtility
          color="tertiary"
          size="sm"
          tooltip="Copy"
          className="mx-1"
          icon={clipboard.copied ? Check : Copy01}
          onClick={() => clipboard.copy('jedd@cyberpotions.com')}
        />
      </div>

      <div className="mt-6 flex items-center gap-3">

      </div>

    </section>
  )
}
