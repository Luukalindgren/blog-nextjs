import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Luuka's blog",
  description: 'Blog site hosted by Luuka Lindgren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
