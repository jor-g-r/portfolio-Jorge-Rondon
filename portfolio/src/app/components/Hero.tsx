"use client"; 
import { useState, useEffect} from 'react';
import { motion, MotionValue, useScroll } from 'framer-motion';



import IconArrowDown from '../icons/IconArrowDownn';
import IconDownload from '../icons/IconDownload';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", listener);
      } else {
        media.addListener(listener);
      }
      return () => {
        if (typeof media.removeEventListener === "function") {
          media.removeEventListener("change", listener);
        } else {
          media.removeListener(listener);
        }
      };
    }, [matches, query]);
  
    return matches;
  }

interface HeroProps {
   MotionValue : number | any;
}


const Hero:React.FC<HeroProps> = () => {
    function useMediaQuery(query: string): boolean {
        const [matches, setMatches] = useState<boolean>(false);
      
        useEffect(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }
          const listener = () => {
            setMatches(media.matches);
          };
          if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
          } else {
            media.addListener(listener);
          }
          return () => {
            if (typeof media.removeEventListener === "function") {
              media.removeEventListener("change", listener);
            } else {
              media.removeListener(listener);
            }
          };
        }, [matches, query]);
      
        return matches;
      }

    
   
    const isMobile: boolean = useMediaQuery('(max-width: 600px)');
    const transitionDuration: string = isMobile ? '0.025s' : '0.125s';
      
    const [isHovered, setIsHovered] = useState(false); 
    
    const { scrollYProgress } = useScroll();
    return(
        <>
         <section className="h-[89vh] border-b border-solid border-dark-500 overflow-x-hidden z-10 relative" id='hero'>
            <div className="absolute w-full h-full hero-bg"></div>
            <div className="container mx-auto lg:px-16 h-full z-30">
                
                
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


                        <button className="ui-btn mx-auto rounded-sm">
                            <span className='flex items-center gap-1 condensed font-light uppercase '>
                                PDF Resume
                                <IconDownload/>
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
                     text-white-400 font-light lg:text-xl tracking-[10px] lg:tracking-[14px] uppercase'
                     style={{
                        opacity: scrollYProgress as unknown as MotionValue<number>,
                        transition: `opacity ${transitionDuration} ease-in-out`,
                    }}
                    >
                 <span>Web Design &</span> &nbsp;Web Development
            </motion.h4>
         
        </div>
        </>
    );
};
export default Hero