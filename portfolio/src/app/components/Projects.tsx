"use client"; 
import { useState } from 'react'
import Image from 'next/image'
import imgProject from '../img/prev-project1.jpg'


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
        row: 2,
        col: 1,
    },
    {
        name: ' name1',
        thumbnail: imgProject,
        alt : 'project image description',
        url: 'url',
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit est molestias temporibus',
        tags: ['Javascript', 'Tailwind.css', 'React.js'],
        row: 2,
        col: 1,
    }

]


export default function Projects (){
    const [projectItems] = useState(projectsInitialData)

    return(
        <>
        <section className="border-b min-h-screen border-solid border-dark-500 " id='projects'>
            <div className="container mx-auto px-8 lg:px-[68px] pt-12">
                <div className="mx-auto">
                    <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center pt-4">Projects</h2>
                </div>
            
                <div className="w-full px-14 pt-20">
                    <div className="grid grid-cols-3 gap-8">
                        {projectItems.map((item) =>{
                            return (
                                <>
                                <div className="w-full p-5 flex flex-col bg-gray-300 bg-opacity-20 rounded-md">
                                    <Image 
                                        src={item.thumbnail}
                                        alt={item.alt}
                                        className='w-full rounded-sm border'
                                        />
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="text-white-100 mt-6">
                                            <h3 className='text-xl condensed capitalize pb-3 lg:text-[32px] font-bold'>{item.name}</h3>
                                            <p className=''>{item.description}</p>
                                        </div>

                                        <div className="flex gap-2 mt-3">
                                            {item.tags.map((tag, index) => {
                                                return (
                                                    <>
                                                    <span key={index} className='text-dark-950 bg-white-100 px-3 py-1 rounded-full text-sm cursor-default hover:scale-105 ease-out duration-500'>
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