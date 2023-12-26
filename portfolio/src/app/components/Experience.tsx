"use client"; 
import Image from 'next/image'
import {motion, useScroll} from 'framer-motion'
import {useRef} from 'react'

import cwdlogo from '../img/cwd-logo.jpg'
import imageidlogo from '../img/imageID-logo.jpg'
import fpslogo from '../img/fps-logo.jpg'
import wynlogo from '../img/wyn-logo.jpg'
import IconCircle from '../icons/IconCircle';



interface WorkDetailsProps {
    company: string;
    logo: string | any;
    siteUrl: string;
    position: string;
    time: string;
    description: string;
    index : number;
}



const WorkDetails:React.FC<WorkDetailsProps> = ({company, logo, siteUrl, position, time, description, index}) => {
    
    
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
                        className="border-solid border border-white-100 hover:border-primary-700 hover:border-opacity-70 py-5 lg:py-6 px-4 lg:px-7"> 

                               <div className="flex gap-4 pb-3 items-center">
                                  <motion.a className="" href={siteUrl} target='_blank'
                                  whileHover={{scale:1.1}}
                                  >
                                    <Image className='rounded-md w-auto max-h-[67px] lg:max-h-[52px]'
                                           height={72}
                                           src={logo}  
                                           alt="company logo"/>
                                  </motion.a>

                                  <div className="text-2xl">
                                    <h3 className="font-bold text-base md:text-lg">{company}</h3>
                                    <div className="flex flex-col lg:flex-row gap-x-2 text-xs md:text-md text-white-500 capitalize">
                                        <h5 className='uppercase condensed text-white-300'>{position}</h5> 
                                        <span className='hidden lg:block'>|</span> <p>{time}</p>
                                    </div>    
                                  </div>
                               </div>

                               <div className='leading-5 lg:leading-7 text-xs md:text-md lg:text-base'>
                                    <div>{description}</div>
                               </div>
                    </motion.div>     
            </li>
        </>
    )
}


const Experience = () => {
    const logo = {
        cwd: cwdlogo,
    imageID: imageidlogo,
        fps: fpslogo,
        wyn: wynlogo
    }
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return(
        <>
        <section className="border-solid border-b border-dark-500 pb-28 lg:pb-36 z-10 relative" id="experience">

            <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>

            <div className="container mx-auto pt-16 px-8 lg:px-[68px] z-30 relative">
               
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Experience</h2>
                </div>
              

                <div ref={ref}  className="relative mx-auto w-full xl:max-w-[824px]">


                    <div className="absolute animate-pulse left-0 top-0 w-[1px] h-full bg-white-400 opacity-80 origin-top"/>

                    <motion.div 
                    
                    style={{scaleY: scrollYProgress}}
                    
                    className="absolute left-0 top-0 w-[1px] h-full bg-primary-700 origin-top"/>

                    <ul className=" flex flex-col gap-8 lg:gap-14 items-center pt-12 pl-[12%] lg:pl-[5%]">

                  

                        <WorkDetails 
                        index={0}
                        company='WYN Solutions'
                        logo={logo.wyn}
                        siteUrl='https://www.wynwithus.com/'
                        position='Webmaster'
                        time='december 2022 - may 2023'
                        description={`As a Webmaster at a specialized marketing agency for car dealerships, 
                                     I played a crucial role in managing and creating landing pages across 
                                     multiple websites for various stores throughout the USA.
                                     My responsibilities included overseeing the performance of these landing 
                                     pages and ensuring smooth process executions.`}  
                        />

                        <WorkDetails 
                        index={1}
                        company='FrontPorch Solutions'
                        logo={logo.fps}
                        siteUrl='https://www.frontporchsolutions.com/'
                        position='QA Developer'
                        time='august 2021 - october 2022'
                        description={`Drawing from my experience in UI/UX design, I bring a unique perspective to my role as a 
                                      functionality tester. With a keen eye for detail, I ensure high standards of visual accuracy 
                                      in Figma projects. My background as a designer has played a pivotal role in honing this skill. 
                                      In cases where older projects lacked visual references, my designer's sensibility allowed me 
                                      to make consistent and meaningful suggestions for improvement. Additionally, I serve as a 
                                      proficient backup front-end developer, well-versed in CSS, PHP, and Next.js.`}  
                        />

                        <WorkDetails 
                        index={2}
                        company='ImageID'
                        logo={logo.imageID}
                        siteUrl='https://imageid.com.co/'
                        position='Webmaster'
                        time='april 2021 - august 2021'
                        description={`As a webmaster at ImageID, one of the largest marketing agencies in Colombia, I was responsible 
                                      for managing multiple websites using WordPress as the CMS, primarily through page builders such as Elementor, 
                                      WPBakery, and Beaver Builder. I also had experience in managing e-commerce databases.`}  
                        />

                        <WorkDetails 
                        index={3}
                        company='Chattanooga Web Design'
                        logo={logo.cwd}
                        siteUrl='https://www.chattanoogawebdesign.com/'
                        position='Web Developer'
                        time='january 2021 - april 2021'
                        description={`As part of the development team, I worked as a Front-End developer at a marketing agency in Chattanooga, TN. 
                                      I specialize in web development using the Elementor builder, with a focus on achieving high visual standards.`}  
                        />
                        
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Experience