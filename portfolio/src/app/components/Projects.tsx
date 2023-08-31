"use client"; 
import { useState } from 'react'
import Image from 'next/image'
import imgProject from '../img/prev-project1.jpg'
import ParticlesComponent from './ParticlesComponent';
import IconExternalLink from '../icons/IconExternalLink';


const projectsInitialData = [
    {
        name: 'Unsplash Vehicles Gallery',
        thumbnail: imgProject,
        alt : 'project image description',
        url: 'url',
        description: ' Lorem ipsum dolor, provident ducimus cupiditate similique excepturi architecto voluptate perferendis. Culpa ab nemo reprehenderit, expedita quae dignissimos aliquid fugit dolorum. ',
        tags: ['Javascript', 'Tailwind.css', 'React.js'],
        row: 2,
        col: 1,
    },
    {
        name: ' name2',
        thumbnail: imgProject,
        alt : 'project image description',
        url: 'url',
        description: ' Lorem ipsum dolor, provident ducimus cupiditate similique excepturi architecto voluptate perferendis. Culpa ab nemo reprehenderit, expedita quae dignissimos aliquid fugit dolorum. ',
        tags: ['Javascript', 'Tailwind.css', 'React.js'],
        row: 1,
        col: 1,
    },
    {
        name: ' name1',
        thumbnail: imgProject,
        alt : 'project image description',
        url: 'url',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est molestias temporibus',
        tags: ['Javascript', 'Tailwind.css', 'React.js'],
        row: 1,
        col: 1,
    },
    {
        name: ' name1',
        thumbnail: imgProject,
        alt : 'project image description',
        url: 'url',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est molestias temporibus',
        tags: ['Javascript', 'Tailwind.css', 'React.js'],
        row: 1,
        col: 2,
    }

]


export default function Projects (){
    const [projectItems] = useState(projectsInitialData)

    return(
        <>
           
        <section className="border-b min-h-screen border-solid border-dark-500 pb-32 relative" id='projects'>
            <div className="absolute w-full h-full top-0 left-0">
                <ParticlesComponent  /> 
            </div>
           
            <div className="container mx-auto px-8 xl:px-[68px] pt-16">
                <div className="mx-auto">
                    <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center">Projects</h2>
                </div>
            
                <div className="w-full pt-14">
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectItems.map((item) =>{
                            return (
                                <>
                                
                                <div className={`group w-full p-5 flex bg-card-gradient shadow-lg border-dark-600 hover:border-dark-400 border backdrop-blur-sm bg-blend bg-opacity-10 rounded-md 
                                                            ${item.row === 2 ? 'lg:row-span-2 md:col-span-2 lg:col-span-1' : ''} 
                                                            ${item.col === 2 ? 'md:col-span-2 md:flex-row md:gap-x-6 flex-col' : 'flex-col'}`}>
                                    <a className='relative' href={item.url}>
                                        <Image 
                                        src={item.thumbnail}
                                        alt={item.alt}
                                        className={`w-full lg:max-w-[404px] rounded-sm border hover:border-2 duration-300 ease-in ${item.col === 2 ? 'md:max-w-[296px]': ''}`}
                                     
                                        />
                                        <div className="absolute bottom-[1%] right-[1%]">
                                            <IconExternalLink />
                                        </div>
                                    </a>
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="text-white-100 mt-6 w-full">
                                            <a className='' href={item.url}>
                                                <h3 className='text-xl condensed capitalize pb-3 lg:text-[32px] font-bold'>{item.name}</h3>
                                            </a>
                                            <p className=''>{item.description}</p>
                                        </div>

                                        <div className="flex gap-2 mt-3 flex-wrap">
                                            {item.tags.map((tag, index) => {
                                                return (
                                                    <>
                                                    <span key={index} 
                                                    className='text-dark-950 bg-white-200 group-hover:bg-white-100 px-3 py-1 rounded-full text-xs xl:text-sm cursor-default hover:scale-105 ease-out duration-500'>
                                                        {tag}
                                                    </span>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
                     
        </section>
        </>
    )
}