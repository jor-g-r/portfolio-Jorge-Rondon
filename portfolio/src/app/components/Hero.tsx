"use client"; 
import { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { motion } from 'framer-motion';


import IconArrowDown from '../icons/IconArrowDownn';
import IconDownload from '../icons/IconDownload';



export default function Hero () {
    const [isHovered, setIsHovered] = useState(false);  
  
    return(
        <>
         <section className="h-[86vh] hero-bg border-b border-solid border-dark-500" id='hero' onMouseEnter={() => animateScroll.scrollToBottom()}>

            <div className="container mx-auto lg:px-16 h-full">
                
                
                <div className="relative flex flex-col justify-center  h-full">

                    <div className="text-center condensed  pb-56">
                        <motion.h1 className="text-8xl font-bold"
                            initial={{ y: 0,  }} 
                            animate={{ y: [0, 5, 0], rotate: [0, -1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }} >
                            Frontend Developer
                        </motion.h1>
                        <h3 className='text-3xl text-primary pt-2 pb-4'>
                            Jorge Rondón
                        </h3>
                        <button className="ui-btn mx-auto">
                            <span className='flex items-center gap-1 condensed font-light uppercase'>
                                Resume
                                <IconDownload />
                            </span>
                        </button>
                       
                    </div>

                    <div className="flex align w-2/3 absolute bottom-14 gap-8"
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="self-end pb-3">
                            <IconArrowDown isHovered={isHovered}/>
                        </div>
                        <div className="text-xl tracking-tight leading-10 cursor-default">
                            <p>Experienced Web Developer with strong UI/UX skills.</p>
                            <p>Skilled in CMS and WordPress environments.</p>
                            <p>Passionate about new technologies and a fan of hands-on learning.</p>
                        </div>
                    </div>   
                        


                </div>
               
            </div>
    
        </section>
        <div className="w-full min-h-[44px] border-b border-solid border-dark-500">

        </div>
        </>
    );
};
