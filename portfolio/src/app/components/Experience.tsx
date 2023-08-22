"use client"; 
import Image from 'next/image'
import DOMPurify from "dompurify";

import cwdlogo from '../img/cwd-logo.jpg'
import imageidlogo from '../img/imageID-logo.jpg'
import fpslogo from '../img/fps-logo.jpg'
import wynlogo from '../img/wyn-logo.jpg'



interface WorkDetailsProps {
    company: string;
    logo: string | any;
    siteUrl: string;
    position: string;
    time: string;
    description: string;
}



const WorkDetails:React.FC<WorkDetailsProps> = ({company, logo, siteUrl, position, time, description}) => {
    
    const sanitizedDescription = DOMPurify.sanitize(description)
    return (
        <>
            <li className="w-full max-w-[642px] border-solid border border-white-100 py-6 px-7">
                               <div className="flex gap-4 pb-3">
                                  <a className="" href={siteUrl} target='_blank'>
                                    <Image className='rounded-md'
                                           height={54} 
                                           src={logo}  
                                           alt="company logo"/>
                                  </a>

                                  <div className="text-2xl">
                                    <h3 className="font-bold">{company}</h3>
                                    <div className="flex gap-2 text-sm text-white-500">
                                        <h5>{position}</h5> <span>|</span> <p>{time}</p>
                                    </div>    
                                  </div>
                               </div>

                               <div className='leading-7'>
                                    <div dangerouslySetInnerHTML={{ __html: sanitizedDescription}}></div>
                               </div>
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
    
    return(
        <>
        <section className="border-solid border-b border-dark-500 pb-20 lg:pb-16" id="experience">
            <div className="container mx-auto pt-20 px-8 lg:px-[68px]">
               
                <div className="pb-6">
                    <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">Experience</h2>
                </div>
              

                <div className="relative mx-auto">
                    <ul className="">

                        <WorkDetails 
                        company='WYN Solutions'
                        logo={logo.wyn}
                        siteUrl='https://www.wynwithus.com/'
                        position='Webmaster'
                        time='december 2022 - may 2023'
                        description={`As a Webmaster at a specialized marketing agency for car dealerships, 
                                     I played a crucial role in managing and creating landing pages across 
                                     multiple websites for various stores throughout the USA. <br /><br />
                                     My responsibilities included overseeing the performance of these landing 
                                     pages and ensuring smooth process executions.`}  
                        />
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Experience