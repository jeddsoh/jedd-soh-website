import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { RouteProvider } from '@/providers/router-provider'
import { Theme } from '@/providers/theme'
import '@/styles/globals.css'
import { cx } from '@/utils/cx'
import { ProjectsPanelProvider } from '@/providers/projects-panel-provider'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'cyberPotions | Software Development',
  description: 'cyberPotions is a software development project making apps, websites, and digital resources',
}

export const viewport: Viewport = {
  themeColor: '#7f56d9', // moss
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(geist.variable, 'antialiased')}>
        <RouteProvider>
          <ProjectsPanelProvider>
            <Theme>{children}</Theme>
          </ProjectsPanelProvider>
        </RouteProvider>
      </body>
    </html >
  )
}
