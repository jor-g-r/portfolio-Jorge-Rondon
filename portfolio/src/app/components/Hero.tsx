"use client"; 
import { useState} from 'react';
import { motion, useScroll } from 'framer-motion';



import IconArrowDown from '../icons/IconArrowDownn';
import IconDownload from '../icons/IconDownload';



export default function Hero () {
    const [isHovered, setIsHovered] = useState(false); 
    
    const { scrollYProgress } = useScroll();
    return(
        <>
         <section className="h-[89vh] hero-bg border-b border-solid border-dark-500 overflow-x-hidden" id='hero'>

            <div className="container mx-auto lg:px-16 h-full">
                
                
                <div className="relative flex flex-col justify-center  h-full">

                    <div className="text-center condensed  pb-56">
                        <motion.h1 className="lg:text-8xl text-7xl font-bold"
                            initial={{ y: 0 }} 
                            animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }} >
                            Frontend Developer
                        </motion.h1>
                        <h3 className='text-3xl text-primary pt-2 pb-4'>
                            Jorge Francisco
                        </h3>


                        <button className="ui-btn mx-auto">
                            <span className='flex items-center gap-1 condensed font-light uppercase'>
                                Resume
                                <IconDownload />
                            </span>
                        </button>
                       
                    </div>

                    <div className="flex align ml-2 px-2 w-full lg:w-2/3 absolute bottom-14 gap-4 lg:gap-8"
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="self-end pb-3">
                            <IconArrowDown isHovered={isHovered}/>
                        </div>
                        <div className="lg:text-xl tracking-tight leading-8 lg:leading-10 cursor-default">
                            <p className='drop-shadow-lg'>Experienced Web Developer with strong UI/UX skills.</p>
                            <p className='drop-shadow-lg'>Skilled in CMS and WordPress environments.</p>
                            <p className='drop-shadow-lg'>Passionate about new technologies and a fan of hands-on learning.</p>
                        </div>
                    </div>   
                        


                </div>
               
            </div>
    
        </section>
        <div  className="w-full min-h-[44px] border-b border-solid border-dark-500 overflow-y-hidden flex items-center">  

          
                
            <motion.h4 
            className='m-auto flex flex-col sm:flex-row justify-center text-center leading-6 py-2
                     text-white-500 font-light lg:text-xl tracking-[10px] lg:tracking-[14px] uppercase'
            style={{
                opacity: scrollYProgress,
                transition: 'opacity 0.125s ease-in-out',
              }}>
                 <span>Web Design &</span> &nbsp;Web Development
            </motion.h4>
         
        </div>
        </>
    );
};
