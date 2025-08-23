'use client'

import {
  BookOpen01,
  Check,
  Copy01,
  Cube01,
  HelpCircle,
  Passport,
} from '@untitledui/icons'
import { Button } from '@/components/base/buttons/button'
import { ButtonUtility } from '@/components/base/buttons/button-utility'
import { useClipboard } from '@/hooks/use-clipboard'
import { AvatarProfilePhoto } from '../base/avatar/avatar-profile-photo'

export const HomeScreen = () => {
  const clipboard = useClipboard()

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 md:px-8">
        <div className="relative flex items-center justify-center">
          <figcaption className="not-prose mt-6 inline-flex flex-col items-center md:mt-8 gap-0">
            <AvatarProfilePhoto size="lg" alt="Jedd Soh" src="/images/avatar.png" />

            <p className="mt-4 text-primary text-2xl font-black tracking-tight">Jedd Soh</p>
            <cite className="mt-0.5 not-italic text-tertiary text-md">Software Engineer</cite>
          </figcaption>
        </div>
        <div className="relative mt-6 flex h-10 items-center rounded-lg border border-secondary bg-secondary">
          <code className="px-3 font-mono text-secondary">
            npx untitledui@latest add
          </code>

          <hr className="h-10 w-px bg-border-secondary" />

          <ButtonUtility
            color="tertiary"
            size="sm"
            tooltip="Copy"
            className="mx-1"
            icon={clipboard.copied ? Check : Copy01}
            onClick={() => clipboard.copy('npx untitledui@latest add')}
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button
            href="https://www.untitledui.com/react/docs/introduction"
            target="_blank"
            rel="noopener noreferrer"
            color="link-color"
            size="lg"
            iconLeading={Cube01}
          >
            Projects
          </Button>
          <div className="h-px w-4 bg-brand-solid" />
          <Button
            href="https://www.untitledui.com/react/resources/icons"
            target="_blank"
            rel="noopener noreferrer"
            color="link-color"
            size="lg"
            iconLeading={Passport}
          >
            Resumé
          </Button>
          <div className="h-px w-4 bg-brand-solid" />
          <Button
            href="https://github.com/untitleduico/react/issues"
            target="_blank"
            rel="noopener noreferrer"
            color="link-color"
            size="lg"
            iconLeading={HelpCircle}
          >
            Help
          </Button>
        </div>
      </div>
    </div>
  )
}
