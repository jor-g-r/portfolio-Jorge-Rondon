import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {





  return (
    <main className='h-[3200px]'>
        <Navbar title="Testing" theme="light" />
        <Hero />
        
    </main>
  )
}
