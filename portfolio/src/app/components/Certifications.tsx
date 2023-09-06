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
    index: number;
}



const Certification:React.FC<CertificationProps> = ({CourseName, logo, siteUrl, time, description, index}) => {
    
    
    const ref = useRef(null);
    return (
        <>
            
            
            <li key={index} className="w-full max-w-[642px]">                               
            <IconCircle reference={ref} />   
                    <motion.div 
                        ref={ref}
                         initial ={{y:70}}
                         whileInView={{y:0}}
                         transition={{duration: 0.75, type: 'spring'}}       
                         className="border-solid border gap-x-4 grid grid-cols-6 border-white-100 hover:border-primary-700 hover:border-opacity-70 py-3 lg:py-4 px-3 lg:px-5"> 

                                <motion.div className="col-span-1 pt-1" 

                                    whileHover={{scale:1.05}}
                                    whileTap={{scale: 0.95}}
                                    transition={{duration: .5}}
                                >
                                    <a className="" href={siteUrl} target='_blank'>
                                        <Image className='rounded-md shadow-lg'
                                           src={logo}  
                                           alt="Course logo"/>
                                    </a>
                                </motion.div>

                               <div className="flex flex-col pb-3 items-start col-span-5">
                                  

                                  <div className="text-2xl">
                                    <h3 className="font-bold text-base md:text-lg">{CourseName}</h3>
                                    <p className="text-xs md:text-md text-white-500 capitalize py-1">{time}</p>
                                    
                                  </div>

                                  <div className='leading-4 lg:leading-6 text-xs md:text-md lg:text-base'>
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
        <section className="border-solid border-b border-dark-500 pb-28 lg:p b-16 relative z-10 " id="certification">
            
        <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>
            
            <div className="container mx-auto pt-16 px-8 lg:px-[68px] z-30 relative">
               
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Certifications</h2>
                </div>
              

                <div ref={ref}  className="relative mx-auto w-full xl:max-w-[824px]">


                    <div className="absolute animate-pulse left-0 top-0 w-[1px] h-full bg-white-400 opacity-80 origin-top"/>

                    <motion.div 
                    
                    style={{scaleY: scrollYProgress}}
                    
                    className="absolute left-0 top-0 w-[1px] h-full bg-primary-700 origin-top"/>

                    <ul className=" flex flex-col gap-6 lg:gap-12 items-center pt-12 pl-[12%] lg:pl-[5%]">

                  

                        <Certification 
                        index={0}
                        CourseName='Javascript Algorithms & Data structures'
                        logo={logo.FCC}
                        siteUrl='https://www.freecodecamp.org/certification/georgejfrj/javascript-algorithms-and-data-structures'
                     
                        time='19th July 2023'
                        description={`Once I understood the basics, I applied my knowledge by creating algorithms for string manipulation, 
                                      factorializing numbers, and calculating the International Space Station's orbit. During this process, 
                                      I also grasped two key programming styles: Object-Oriented Programming (OOP) and Functional Programming (FP).`}  
                        />


                        <Certification 
                        index={1}
                        CourseName='Javascript Fundamentals'
                        logo={logo.solo}
                        siteUrl='https://www.sololearn.com/Certificate/CT-ANS4JHDJ/pdf'
                     
                        time='21th February 2020'
                        description={`Mastering JavaScript fundamentals through SoloLearn was transformative. Crafting algorithms, predicting orbits, 
                                      and continuous challenges sharpened my skills. Basic exposure to OOP and minimal FP. Community-driven, empowering, 
                                      and immersive platform.`}  
                        />



                        <Certification 
                        index={2}
                        CourseName='Programming basis'
                        logo={logo.platzi}
                        siteUrl='https://platzi.com/p/jorgerondon/curso/1050-course/diploma/detalle/'
                     
                        time='27th November 2019'
                        description={`Platzi took me from scratch to coding adeptness. I conquered JavaScript, grasped HTML intricacies, and honed algorithmic 
                                      prowess. It guided me through expert logic, coding fluency, and crafting a complete web game. A highly effective platform 
                                      for mastering complex concepts. Mastering HTML, CSS, and JavaScript Proficiency in algorithmic design
                                      Software development using functions, objects, and events Expertise in web game programming`}  
                        />


                        <Certification 
                        index={3}
                        CourseName='Responsive Web Design'
                        logo={logo.FCC}
                        siteUrl='https://www.freecodecamp.org/certification/georgejfrj/responsive-web-design'
                     
                        time='12th September 2019'
                        description={`This Responsive Web Design Certification by freeCodeCamp introduces essential web development languages: HTML for content 
                                      and CSS for design. You'll create a cat photo app for HTML/CSS basics, build a penguin using modern CSS variables, and ensure 
                                      accessibility with a quiz site. Discover responsive design with Flexbox for screen adaptation and CSS Grid for magazine layouts.`}  
                        />      

                        <Certification 
                        index={4}
                        CourseName='Full CSS Course'
                        logo={logo.solo}
                        siteUrl='https://www.sololearn.com/Certificate/CT-OMSJVAQ8/pdf'
                     
                        time='26th June 2018'
                        description={`Explored CSS on SoloLearn, mastering styling techniques. Learned about selectors, properties, and layout tools. Implemented responsive 
                                      designs with media queries. Built a personal project, honing skills in CSS animations, transitions, and Flexbox layouts. Gained practical 
                                      CSS expertise through interactive challenges.`}  
                        />  

                        <Certification 
                        index={5}
                        CourseName='HTML Fundamentals'
                        logo={logo.solo}
                        siteUrl='https://www.sololearn.com/Certificate/CT-OMSJVAQ8/pdf'
                     
                        time='10th June 2018'
                        description={`Completed a comprehensive web layout course on SoloLearn, focusing on HTML mastery. Covered essential concepts like semantic tags, forms, 
                                      and multimedia integration. Built diverse webpage structures, from simple layouts to complex grid systems. Applied learned skills to design 
                                      and code interactive websites, fostering solid HTML proficiency`}  
                        />              
                       
                        
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Certifications