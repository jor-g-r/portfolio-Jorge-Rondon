"use client"; 

import {motion} from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'

interface SkillProps {
    name: string;
    x: number;
    y: number;
}

const Skill:React.FC<SkillProps> = ({name, x, y}) => {

    
    return(
        <>
          <motion.div className="flex-items-center justify-center rounded-full absolute font-bold text-[10px] md:text-sm lg:text-base lg:font-normal
                                         bg-white-400 text-dark-900 px-2 py-1 cursor-pointer"
                                whileHover={{scale:1.05}}
                                initial ={{x:0, y:0}}
                                whileInView ={{x: `${x}vw`, y:`${y}vw`}}
                                viewport={{once:true}}
                                transition={{duration: .7}}>
                        {name}
           </motion.div>
        </>
    )
}



export default function Skills (){

    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <>
        <section className="border-solid border-b border-dark-500 pb-8 lg:pb-16" id="skills">

            <div className="container mx-auto pt-20 px-8 lg:px-[68px]">
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Skills</h2>
                </div>

                <div className="w-full h-screen-2/3 lg:h-[84vh] relative flex items-center justify-center rounded-full circular-bg- bg-circular-orange lg:bg-circular-orange-lg ">

                    <motion.div className="flex-items-center justify-center rounded-full text-lg
                                         bg-white-400 text-dark-900 px-4 py-5 cursor-pointer"
                                whileHover={{scale:1.15}} >
                        WEB
                    </motion.div>


                    <Skill name="CMS-CMR" x={isMobile ? -14 : -5} y={isMobile ? -12 : -4} />
                    <Skill name="CSS" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="HTML" x={isMobile ? 0 : 0} y={isMobile ? -15 : -6} />
                    <Skill name="GitHub" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Js" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="React" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Gsap" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Framer" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Node" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Tailwind" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Bootstrap" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Wordpress" x={isMobile ? 0 : 0} y={isMobile ? 15 : 6} />
                    <Skill name="Hubspot" x={isMobile ? -20 : -19} y={isMobile ? -22 : 6} />

                </div>
            </div>

        </section>
        
        </>
    )
}