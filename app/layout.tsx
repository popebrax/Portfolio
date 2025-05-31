import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Braxton Otieno',
  description: 'Portfolio',
  generator: '@popebrax',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
