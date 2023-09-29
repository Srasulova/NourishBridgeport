import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Heebo } from 'next/font/google'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

const heebo = Inter({
  subsets: ['latin'],
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: 'nOURish Bridgeport - Nourish Bridgeport Inc - NourishBPT.ORG',
  description: 'Website for Nourish Bridgeport Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} font-sans`}>
        <NavBar />
        {children}</body>
      <Footer />
    </html>
  )
}
