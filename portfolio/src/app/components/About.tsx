
import Image from 'next/image'
import jorgeImage from '../img/JorgeRondonFrontend.png'

export default function About () {

    const aboutImage = jorgeImage

    return (
        <>
        <section className="border-b border-solid border-dark-500 z-10 relative" id='about'>
            <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>

            <div className="container mx-auto px-8 lg:px-[68px] pt-20 z-40 relative">

                <div className="flex flex-col items-center lg:items-start md:flex-row ">

                        <div className="w-full lg:max-w-[762px] pb-8">
                            <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide pt-4">About</h2>

                            <div className="description max-h-72 mt-7 mb-4 flex flex-col gap-6 p-6 overflow-y-scroll 
                                          bg-dark-950 shadow-inner bg-opacity-80 text-white-100 leading-[34px]">
                                <p>
                                With 6+ years in the tech industry, including 2 years as a self-taught Front-End Developer, 
                                I&apos;m equipped with a strong UI design background. This strength led me to expand into QA development. 
                                I&apos;m skilled in WordPress page builders, including Elementor and Visual Composer, and adept at navigating 
                                WordPress environments and design tools. I&apos;m committed to staying current with technology trends.
                                </p>

                                <p>
                                My focus is on mastering JavaScript, especially Next.js, as a Front-End Developer. Proficient in Git and GitHub, 
                                I value adaptability and openness to new tech tools. Passionate about learning and maintaining healthy habits, 
                                I&apos;m eager for growth opportunities to advance my skills and knowledge.
                                </p>
                            </div>
                        </div>
                        <div className="pl-12 lg:px-16 self-end">
                            <Image 
                            
                            src={aboutImage}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            />
                        </div>
                        
                </div>

            </div>
        </section>
        </>
    );
};