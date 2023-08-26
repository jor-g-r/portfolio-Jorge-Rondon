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
}



const WorkDetails:React.FC<WorkDetailsProps> = ({company, logo, siteUrl, position, time, description}) => {
    
    
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
                        className="border-solid border border-white-100 py-5 lg:py-6 px-4 lg:px-7"> 

                               <div className="flex gap-4 pb-3 items-center">
                                  <a className="" href={siteUrl} target='_blank'>
                                    <Image className='rounded-md w-full max-h-[67px] lg:max-h-[52px]'
                                           height={72}
                                           src={logo}  
                                           alt="company logo"/>
                                  </a>

                                  <div className="text-2xl">
                                    <h3 className="font-bold text-base md:text-lg">{company}</h3>
                                    <div className="flex flex-col lg:flex-row gap-x-2 text-xs md:text-md text-white-500 capitalize">
                                        <h5 className='uppercase condensed text-white-300'>{position}</h5> 
                                        <span className='hidden lg:block'>|</span> <p>{time}</p>
                                    </div>    
                                  </div>
                               </div>

                               <div className='leading-5 lg:leading-7 text-xs md:text-md lg:text-base text-justify'>
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
        <section className="border-solid border-b border-dark-500 pb-96 lg:p b-16 " id="experience">
            <div className="container mx-auto pt-20 px-8 lg:px-[68px]">
               
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
                        company='FrontPorch Solutions'
                        logo={logo.fps}
                        siteUrl='https://www.frontporchsolutions.com/'
                        position='QA Developer'
                        time='august 2021 - october 2022'
                        description={`With my background in UI/UX design, I bring a unique perspective to my role as 
                                      a functionality tester. I ensure high standards of visual accuracy from Figma 
                                      projects and also serve as a backup front-end developer utilizing, css, PHP and or Next.js.`}  
                        />

                        <WorkDetails 
                        company='ImageID'
                        logo={logo.imageID}
                        siteUrl='https://imageid.com.co/'
                        position='Webmaster'
                        time='april 2021 - august 2021'
                        description={`As a webmaster at ImageID, one of the largest marketing agencies in Colombia, I was responsible 
                                      for managing multiple websites using WordPress as the CMS, primarily through builders such as Elementor, 
                                      WPBakery, and Beaver Builder. I also had experience in managing e-commerce databases.`}  
                        />

                        <WorkDetails 
                        company='Chattanooga Web Design'
                        logo={logo.cwd}
                        siteUrl='https://imageid.com.co/'
                        position='Webmaster'
                        time='january 2021 - april 2021'
                        description={`As the webmaster at a marketing agency in Chattanooga, TN, I specialize in web development using the Elementor builder, 
                                      with a focus on achieving high visual standards.`}  
                        />
                        
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Experience