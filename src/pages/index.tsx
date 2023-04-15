import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/modules/home/components/hero-section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex justify-center">
      <HeroSection />
    </main>
  )
}
