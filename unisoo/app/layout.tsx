import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UNiSO',
  description: 'From Class Chats to Career Hacks',
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
