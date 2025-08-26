'use client'

import type { SVGProps } from 'react'
import { useId } from 'react'
import { cx } from '@/utils/cx'
import { BorderBeam } from '@/components/magicui/border-beam'

export const LogoMinimal = (props: SVGProps<SVGSVGElement>) => {
  const id = useId()

  return (
    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_ddiii_2_3067)">
        <g clipPath="url(#clip0_2_3067)">
          <rect x="3" width="38" height="38" rx="9.5" fill="#22262F" />
          <rect width="38" height="38" transform="translate(3)" fill="url(#paint0_linear_2_3067)" />
          <path opacity="0.6" d="M26.3549 29.5326C25.9587 30.3534 25.1276 30.875 24.2161 30.875H19.2226C17.4657 30.875 16.3169 29.0335 17.0896 27.4556L26.0057 9.24721C26.4044 8.4329 27.232 7.91667 28.1387 7.91667L33.0064 7.91667C34.7575 7.91667 35.9065 9.7472 35.1452 11.3242L26.3549 29.5326Z" fill="white" />
          <path opacity="0.9" d="M11.2407 26.717C11.8319 28.012 13.6623 28.038 14.29 26.7603L17.8804 19.4521C18.4312 18.331 17.6152 17.0208 16.366 17.0208L9.43924 17.0208C8.21091 17.0208 7.39423 18.2914 7.90434 19.4088L11.2407 26.717Z" fill="white" />
          
        </g>
        <rect x="3.79167" y="0.791667" width="36.4167" height="36.4167" rx="8.70833" stroke="url(#paint1_linear_2_3067)" strokeWidth="1.58333" />
      </g>
      <defs>
        <filter id="filter0_ddiii_2_3067" x="0.625" y="-2.375" width="42.75" height="45.125" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="0.791667" />
          <feGaussianBlur stdDeviation="0.395833" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_3067" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="0.791667" operator="erode" in="SourceAlpha" result="effect2_dropShadow_2_3067" />
          <feOffset dy="2.375" />
          <feGaussianBlur stdDeviation="1.58333" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_2_3067" result="effect2_dropShadow_2_3067" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_3067" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="-2.375" />
          <feGaussianBlur stdDeviation="1.1875" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2_3067" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.375" />
          <feGaussianBlur stdDeviation="1.1875" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_2_3067" result="effect4_innerShadow_2_3067" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="0.791667" operator="erode" in="SourceAlpha" result="effect5_innerShadow_2_3067" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_2_3067" result="effect5_innerShadow_2_3067" />
        </filter>
        <linearGradient id="paint0_linear_2_3067" x1="19" y1="4.7187e-07" x2="20.5833" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="paint1_linear_2_3067" x1="22" y1="0" x2="22" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_2_3067">
          <rect x="3" width="38" height="38" rx="9.5" fill="white" />
        </clipPath>
      </defs>
     
    </svg>


  )
}
