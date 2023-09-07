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
          <motion.div className="flex-items-center justify-center rounded-full absolute font-bold text-[8px] md:text-sm lg:text-base lg:font-normal
                                         bg-white-100 text-dark-900 px-2 py-1 lg:px-3 lg:py-2 cursor-pointer"
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
        <section className="border-solid border-b border-dark-500 pb-20 lg:pb-16" id="skills">

            <div className="container mx-auto mt-1 pt-16 px-8 lg:px-[68px]">
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Skills</h2>
                </div>

                <div className="w-full h-screen-2/3 lg:h-[68vh] relative flex items-center justify-center rounded-full circular-bg- bg-circular-orange lg:bg-circular-orange-lg z-30">

                    <motion.div className="flex-items-center justify-center rounded-full lg:text-lg z-30
                                         bg-white-100 text-dark-900 px-4 py-5 cursor-pointer"
                                whileHover={{scale:1.15}} >
                        WEB
                    </motion.div>

                                                    {/*Mobile - Desktop */ }
                    <Skill name="CMS-CMR" x={isMobile ? -16 : -8} y={isMobile ? -11 : -4} key={1}/>
                    <Skill name="CSS" x={isMobile ? 0 : 0} y={isMobile ? 13 : 6} key={2}/>
                    <Skill name="HTML" x={isMobile ? 0 : 0} y={isMobile ? -13 : -6} key={3}/>

                    <Skill name="GitHub" x={isMobile ? 15 : 12} y={isMobile ? -17 : -10} key={4}/>
                    <Skill name="Javascript" x={isMobile ? 18 : 10} y={isMobile ? 0 : .5} key={5}/>

                    <Skill name="React.js" x={isMobile ? 14 : 13} y={isMobile ? 10 : 5.5} key={6}/>
                    <Skill name="Next.js" x={isMobile ? 25 : 18} y={isMobile ? 16 : 10} key={7}/>
                    <Skill name="Gsap" x={isMobile ? 32 : 27} y={isMobile ? 5 : 2} key={8}/>

                    <Skill name="Framer Motion" x={isMobile ? 30 : 26} y={isMobile ? -9 : -6} key={9}/>
                    <Skill name="Node.js" x={isMobile ? 24 : 19} y={isMobile ? -24 : -15} key={10}/>

                    <Skill name="Tailwind" x={isMobile ? 8 : 7} y={isMobile ? 21 : 11} key={11}/>
                    <Skill name="Bootstrap" x={isMobile ? -8.5 : -7} y={isMobile ? 21 : 11} key={12}/>

                    <Skill name="Wordpress" x={isMobile ? -25 : -18} y={isMobile ? 2 : .5} key={13}/>
                    <Skill name="Hubspot" x={isMobile ? -19 : -16} y={isMobile ? -22 : -14} key={14}/>

                    <Skill name="E-Mail dev" x={isMobile ? 0 : 0} y={isMobile ? -27 : -12} key={15}/>
                    <Skill name="Web Design" x={isMobile ? -16 : -18} y={isMobile ? 30 : 12} key={16}/>

                    <Skill name="Figma" x={isMobile ? -15 : -14} y={isMobile ? 10 : 6} key={17}/>
                    <Skill name="Elementor" x={isMobile ? -30 : -26} y={isMobile ? 14 : 6} key={18}/>
                    <Skill name="WP Bakery" x={isMobile ? -33 : -25} y={isMobile ? -7 : -6} key={19}/>

                </div>
            </div>

        </section>
        
        </>
    )
}