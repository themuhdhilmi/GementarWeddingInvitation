import type { Metadata } from 'next'
import { Inter, Great_Vibes, Roboto_Condensed } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const great_Vibes = Roboto_Condensed({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shahida & Hilmi Wedding Invitation',
  description: 'Shahida & Hilmi Wedding Invitation',
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${great_Vibes.className}  body-custom`}>{children}</body>
    </html>
  )
}
