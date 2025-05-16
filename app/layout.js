import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Defend as One - Adani Threat Intelligence',
  description: 'Empowering you with real-time, contextual, and AI-processed Cyber and OT threat intelligence through the Adani Collaborate Portal.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
