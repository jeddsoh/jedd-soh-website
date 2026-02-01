'use client'

import { cx } from '@/utils/cx'
import Image from 'next/image'

const sizes = {
  xs: 'size-2',
  sm: 'size-3',
  md: 'size-3.5',
  lg: 'size-4',
  xl: 'size-4.5',
  '2xl': 'size-5 ring-[1.67px]',
}

interface AvatarCompanyIconProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  src: string
  alt?: string
}

export const AvatarCompanyIcon = ({
  size,
  src,
  alt,
}: AvatarCompanyIconProps) => (
  <div className={cx(
    'absolute -right-0.5 -bottom-0.5 rounded-full ring-[1.5px] ring-bg-primary',
    sizes[size],
  )}>
    <Image
      src={src}
      alt={alt || "Company Icon"}
      fill
      className="bg-primary-25 rounded-full object-cover"
    />
  </div>
)
