
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
                                Hey there, thanks for dropping by! In the past six years, my journey in tech has been quite a ride. 
                                I started as a self-taught designer and freelance creative back in October 2016. As time went on, my passion for 
                                UI design grew stronger, propelling me to become a self-taught front-end developer.
                                </p>

                                <p>
                                Things really kicked into gear around January 2021 when I fully embraced my role as a web developer. 
                                This marked a turning point in my career journey. I&apos;ve been on a mission to master JavaScript and Next.js, 
                                always staying on top of the latest tech tools and trends.
                                </p>

                                <p>
                                 My career path is a testament to my love for learning and self-improvement, taking me from a freelance designer to a skilled 
                                 front-end developer. I&apos;m excited to connect with you and chat about my experiences and future goals.
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