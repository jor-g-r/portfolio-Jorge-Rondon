
import Image from 'next/image'
import jorgeImage from '../img/JorgeRondonFrontend.png'

export default function About () {

    const aboutImage = jorgeImage

    return (
        <>
        <section className="border-b border-solid border-dark-500 " id='about'>
            <div className="container mx-auto px-8 lg:px-[68px] pt-20">

                <div className="flex flex-col items-center lg:items-start md:flex-row ">

                        <div className="w-full lg:max-w-[762px]">
                            <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide pt-4">About</h2>

                            <div className="description max-h-72 mt-7 mb-14 flex flex-col gap-6 p-6 overflow-y-scroll 
                                          bg-dark-900 shadow-inner bg-opacity-60 text-white-100 text-justify leading-[26.7px]">
                                <p>
                                With over 6 years of experience in the tech industry, 
                                I am a self-taught Front-End Developer 2 two years  of experience with a strong background in UI design. 
                                This expertise has become one of my key strengths and allowed me to expand my skills into the role of QA developer. I have extensive 
                                experience working with WordPress page builders such as Elementor and Visual Composer and am confident in navigating WordPress 
                                environments, file managers, and design tools. 
                                I am committed to staying up-to-date with the latest technologies and continuously improving my skills.
                                </p>

                                <p>
                                As a Front-End Developer, my daily focus is to master JavaScript, specifically Next.js. I am an avid learner and am constantly striving 
                                to improve my skills in this area. Additionally, I am highly proficient in using version control systems like Git and GitHub. 
                                I understand the importance of being adaptable and having an open mind to new technology tools.
                                </p>

                                <p>
                                Furthermore, I am deeply passionate about learning and maintaining healthy habits, which have enabled me to succeed thus far. 
                                I am always eager to seize any growth opportunities that come my way and continue to advance my skills and knowledge.
                                </p>
                            </div>
                        </div>
                        <div className="pl-12 lg:px-16 self-baseline">
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