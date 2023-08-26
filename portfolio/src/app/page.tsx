
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'

export default function Home() {





  return (
    <main className='h- [3200px]'>
        <Navbar title="Testing" theme="light" />
        {/* }
        

      viewport={{once:true}}
        
      {*/}


      <Hero />

      <About />

 
       

       <Experience />

       <Skills />

       <Certifications />
        
    </main>
  )
}
