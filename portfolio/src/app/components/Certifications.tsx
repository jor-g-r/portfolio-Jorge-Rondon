"use client"; 
import Image from 'next/image'
import {motion, useScroll} from 'framer-motion'
import {useRef} from 'react'

import platzi from '../img/logo-Platzi.jpg'
import freeCodeCamp from '../img/logo-FreeCodeCamp.jpg'
import soloLearn from '../img/logo-SoloLearn.jpg'
import IconCircle from '../icons/IconCircle';



interface CertificationProps {
    CourseName: string;
    logo: string | any;
    siteUrl: string;
    time: string;
    description: string;
}



const Certification:React.FC<CertificationProps> = ({CourseName, logo, siteUrl, time, description}) => {
    
    
    const ref = useRef(null);
    return (
        <>
            
            
            <li  className="w-full max-w-[642px]">                               
            <IconCircle reference={ref} />   
                    <motion.div 
                        ref={ref}
                         initial ={{y:70}}
                         whileInView={{y:0}}
                         transition={{duration: 0.75, type: 'spring'}}       
                         className="border-solid border flex gap-x-4 border-white-100 py-3 lg:py-4 px-3 lg:px-5"> 

                                <motion.div className="w-72 pt-1" 

                                    whileHover={{scale:1.025}}
                                    whileTap={{scale: 0.95}}
                                    transition={{duration: .5}}
                                >
                                    <a className="" href={siteUrl} target='_blank'>
                                        <Image className='rounded-md w-full shadow-lg'
                                           src={logo}  
                                           alt="Course logo"/>
                                    </a>
                                </motion.div>

                               <div className="flex flex-col pb-3 items-start">
                                  

                                  <div className="text-2xl">
                                    <h3 className="font-bold text-base md:text-lg">{CourseName}</h3>
                                    <p className="text-xs md:text-md text-white-500 capitalize">{time}</p>
                                    
                                  </div>

                                  <div className='leading-4 lg:leading-5 text-xs md:text-md  text-justify'>
                                    <div>{description}</div>
                                  </div>
                               </div>

                               
                    </motion.div>     
            </li>
        </>
    )
}


const Certifications = () => {
    const logo = {
        solo: soloLearn,
         FCC: freeCodeCamp,
      platzi: platzi
    }
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return(
        <>
        <section className="border-solid border-b border-dark-500 pb-96 lg:p b-16 " id="certification">
            <div className="container mx-auto pt-20 px-8 lg:px-[68px]">
               
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Certifications</h2>
                </div>
              

                <div ref={ref}  className="relative mx-auto w-full xl:max-w-[824px]">


                    <div className="absolute animate-pulse left-0 top-0 w-[1px] h-full bg-white-400 opacity-80 origin-top"/>

                    <motion.div 
                    
                    style={{scaleY: scrollYProgress}}
                    
                    className="absolute left-0 top-0 w-[1px] h-full bg-primary-700 origin-top"/>

                    <ul className=" flex flex-col gap-8 lg:gap-14 items-center pt-12 pl-[12%] lg:pl-[5%]">

                  

                        <Certification 
                        CourseName='Javascript Algorithms & Data structures'
                        logo={logo.FCC}
                        siteUrl='https://www.wynwithus.com/'
                     
                        time='19th July 2023'
                        description={`Once I understood the basics, I applied my knowledge by creating algorithms for string manipulation, 
                                      factorializing numbers, and calculating the International Space Station's orbit. During this process, 
                                      I also grasped two key programming styles: Object-Oriented Programming (OOP) and Functional Programming (FP).`}  
                        />


                        <Certification 
                        CourseName='Javascript Algorithms & Data structures'
                        logo={logo.FCC}
                        siteUrl='https://www.wynwithus.com/'
                     
                        time='19th July 2023'
                        description={`Once I understood the basics, I applied my knowledge by creating algorithms for string manipulation, 
                                      factorializing numbers, and calculating the International Space Station's orbit. During this process, 
                                      I also grasped two key programming styles: Object-Oriented Programming (OOP) and Functional Programming (FP).`}  
                        />



                        <Certification 
                        CourseName='Javascript Algorithms & Data structures'
                        logo={logo.FCC}
                        siteUrl='https://www.wynwithus.com/'
                     
                        time='19th July 2023'
                        description={`Once I understood the basics, I applied my knowledge by creating algorithms for string manipulation, 
                                      factorializing numbers, and calculating the International Space Station's orbit. During this process, 
                                      I also grasped two key programming styles: Object-Oriented Programming (OOP) and Functional Programming (FP).`}  
                        />

                       
                        
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Certifications