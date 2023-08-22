import Image from 'next/image'

import cwdlogo from '../img/cwd-logo.jpg'
import imageidlogo from '../img/imageID-logo.jpg'
import fpslogo from '../img/fps-logo.jpg'
import wynlogo from '../img/wyn-logo.jpg'
import { Url } from 'url'



interface WorkDetailsProps {
    company: string;
    logo: string;
    siteUrl: string;
    position: string;
    time: string;
    description: string;
}


const WorkDetails:React.FC<WorkDetailsProps> = ({company, logo, siteUrl, position, time, description}) => {
    
    
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
                                    <p>{description}</p>
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
                        
                    </ul>
                </div>


            </div>
        </section>
        </>
    )
}

export default Experience