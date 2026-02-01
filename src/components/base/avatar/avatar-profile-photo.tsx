'use client'

import { useState } from 'react'
import Image from 'next/image'
import { User01 } from '@untitledui/icons'
import { cx } from '@/utils/cx'
import { type AvatarProps } from './avatar'
import { AvatarOnlineIndicator, VerifiedTick } from './base-components'
import { BorderBeam } from '@/components/magicui/border-beam'

const styles = {
  sm: {
    root: 'size-18 p-0.75',
    rootWithPlaceholder: 'p-1',
    content: '',
    icon: 'size-9',
    initials: 'text-display-sm font-semibold',
    badge: 'bottom-0.5 right-0.5',
  },
  md: {
    root: 'size-24 p-1',
    rootWithPlaceholder: 'p-1.25',
    content: 'shadow-xl',
    icon: 'size-12',
    initials: 'text-display-md font-semibold',
    badge: 'bottom-1 right-1',
  },
  lg: {
    root: 'size-40 p-1.5',
    rootWithPlaceholder: 'p-1.75',
    content: 'shadow-2xl',
    icon: 'size-20',
    initials: 'text-display-xl font-semibold',
    badge: 'bottom-2 right-2',
  },
}

const tickSizeMap = {
  sm: '2xl',
  md: '3xl',
  lg: '4xl',
} as const

interface AvatarProfilePhotoProps extends AvatarProps {
  size: 'sm' | 'md' | 'lg'
}

export const AvatarProfilePhoto = ({
  contrastBorder = true,
  size = 'md',
  src,
  alt,
  initials,
  placeholder,
  placeholderIcon: PlaceholderIcon,
  verified,
  badge,
  status,
  className,
}: AvatarProfilePhotoProps) => {
  const [isFailed, setIsFailed] = useState(false)

  const renderMainContent = () => {
    if (src && !isFailed) {
      return (
        <Image
          src={src}
          alt={alt || "Avatar"}
          fill
          onError={() => setIsFailed(true)}
          className={cx(
            'rounded-full object-cover',
            contrastBorder &&
            'outline-1 -outline-offset-1 outline-avatar-contrast-border',
            styles[size].content,
          )}
        />
      )
    }

    if (initials) {
      return (
        <div
          className={cx(
            'flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt',
            styles[size].content,
          )}
        >
          <span className={cx('text-quaternary', styles[size].initials)}>
            {initials}
          </span>

          <BorderBeam className="absolute from-transparent via-muted-foreground to-transparent" />
        </div>
      )
    }

    if (PlaceholderIcon) {
      return (
        <div
          className={cx(
            'flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt',
            styles[size].content,
          )}
        >
          <PlaceholderIcon
            className={cx('text-fg-quaternary', styles[size].icon)}
          />

          <BorderBeam className="absolute from-transparent via-muted-foreground to-transparent" />
        </div>
      )
    }

    return (
      <div
        className={cx(
          'flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt',
          styles[size].content,
        )}
      >
        {placeholder || (
          <User01 className={cx('text-fg-quaternary', styles[size].icon)} />
        )}
        <BorderBeam className="absolute from-transparent via-muted-foreground to-transparent" />
      </div>
    )
  }

  const renderBadgeContent = () => {
    if (status) {
      return (
        <AvatarOnlineIndicator
          status={status}
          size={tickSizeMap[size]}
          className={styles[size].badge}
        />
      )
    }

    if (verified) {
      return (
        <VerifiedTick
          size={tickSizeMap[size]}
          className={cx('absolute', styles[size].badge)}
        />
      )
    }

    return badge
  }

  return (
    <div
      className={cx(
        'relative flex shrink-0 items-center justify-center rounded-full bg-transparent ',
        styles[size].root,
        (!src || isFailed) && styles[size].rootWithPlaceholder,
        className,
      )}
    >
      {renderMainContent()}
      {renderBadgeContent()}
      <BorderBeam
        duration={8}
        delay={4}
        size={160}
        borderWidth={1}
        className="absolute from-foreground via-transparent to-transparent"
      />
      <BorderBeam
        duration={8}
        delay={0}
        size={160}
        borderWidth={1}
        className="absolute from-foreground via-transparent to-transparent"
      />
    </div>
  )
}
