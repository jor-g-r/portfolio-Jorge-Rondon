"use client"; 
import { motion, useScroll } from 'framer-motion';

import IconGitHub from "../icons/social/IconGitHub";
import IconGmail from "../icons/social/IconGmail";
import IconLinkedIn from "../icons/social/IconLinkedIn";
import IconWhatsApp from "../icons/social/IconWhatsApp";
import IconX from "../icons/social/IconX";
import BtnBackTop from './BtnBackTop';


export default function Footer () {


    const { scrollYProgress } = useScroll();
    return (
        <>
        <section className="border-b border-solid border-dark-500 z-10 relative" id='footer'>
            <div className="absolute w-full h-full bg-neutral-950 bg-opacity-80 z-20"></div>

            <div className="container mx-auto px-8 lg:px-[68px] py-20 z-40 relative">

               <div className="w-full flex flex-col lg:flex-row lg:justify-between">

                    <div className="flex flex-col gap-y-3 max-w-md lg:m-0 m-auto">
                        <div className="">
                            <h3 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center lg:text-left">Contact</h3>
                        </div>
                        <div className="flex justify-between gap-3 lg:gap-2">
                            <a target="_blank" className="hover:scale-125 ease-in duration-300" href="https://github.com/jor-g-r">
                                <IconGitHub />
                            </a>
                            <a target="_blank" className="hover:scale-125 ease-in duration-300" href="https://api.whatsapp.com/send?phone=+573001334185&text=Hi+Jorge+%F0%9F%92%A1%0AI+would+like+to+know+more+about+your+Frontend+Dev+services">
                                <IconWhatsApp />
                            </a>
                            <a target="_blank" className="hover:scale-125 ease-in duration-300" href="https://www.linkedin.com/in/jfrrj19gmail/">
                                <IconLinkedIn/>
                            </a>
                            <a target="_blank" className="hover:scale-125 ease-in duration-300" href="mailto:jfrrj19@gmail.com">
                                <IconGmail />
                            </a>
                            <a target="_blank" className="hover:scale-125 ease-in duration-300" href="https://twitter.com/jfrrj19">
                                <IconX />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-end">
                        <div className="text-center my-4">
                            <motion.span style={{
                                            opacity: scrollYProgress,
                                            transition: 'opacity 0.125s ease-in-out',
                                            }}
                                        className="text-dark-400 text-lg font-thin text-center lg:text-right my-3">THANKS FOR WATCHING
                            </motion.span>
                        </div>
                        
                        <div className="">
                            <BtnBackTop />
                        </div>
                    </div>

               </div>
            </div>
        </section>
        </>
    );
};