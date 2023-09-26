import Image from 'next/image'
import NavBar from '@/components/navbar'
import HeroArea from '@/components/hero-area'
import AboutUs from '@/components/about-us'
import OurPrograms from '@/components/programs'

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroArea />
      <AboutUs />
      <OurPrograms />
    </main>
  )
}
