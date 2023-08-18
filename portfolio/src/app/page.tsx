import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className=''>
        <Navbar title="Testing" theme="light" />
        <Hero />
        
    </main>
  )
}
