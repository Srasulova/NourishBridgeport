import Image from 'next/image'
import NavBar from '@/components/navbar'
import HeroArea from '@/components/hero-area'
import AboutUs from '@/components/about-us'
import OurPrograms from '@/components/programs'
import Events from '@/components/events'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="">

      <HeroArea />
      <AboutUs />
      <OurPrograms />
      <div className='py-12 w-4/5 border-b-2 border-red-500 mx-auto mb-10'>
        <p className='text-center text-3xl font-semibold text-gray-800'>Ready to jump in? <span className='text-red-600'> Visit our Volunteer Page.</span> </p>
      </div>
      <Events />

    </main>
  )
}
