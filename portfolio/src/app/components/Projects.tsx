"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";
import ParticlesComponent from "./ParticlesComponent";
import IconExternalLink from "../icons/IconExternalLink";

import picAwsomeGallery from "../img/projects/project-AwsomeRides.jpg";
import picBGS from "../img/projects/project-BGS.jpg";
import picZelda from "../img/projects/project-ZeldaMemory.jpg";
import picSimon from "../img/projects/project-simonsays.jpg";
import picVanargand from "../img/projects/project-Vanargand.jpg";
import picCartagenaFest from "../img/projects/project-Cartagena.jpg";
import picAppleVisionPro from "../img/projects/project-Apple Vision Pro Demo.jpg";

const projectsInitialData = [
  {
    id: uuidv4(),
    name: "Awsome Rides Gallery",
    thumbnail: picAwsomeGallery,
    alt: "project image description",
    url: "https://galleryunsplash-7e644a86-rho.vercel.app/",
    description: `As a dedicated web developer and classic car enthusiast, I tackled the creation of a dynamic car 
                       gallery project. Building on its visually simple design, I confidently crafted it without relying 
                       on tools like Figma. While I had previously created a static version using HTML and Bootstrap, 
                       this upgraded iteration utilizes advanced technologies like Next.js, Tailwind CSS, and Swiper. 
                       The result is a sleek interface showcasing diverse categories such as muscle cars, bikes, trucks, 
                       and electric vehicles. To enhance user experience, I incorporated a customizable dark mode feature.`,

    tags: [
      { id: uuidv4(), text: "Iterative Development" },
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Tailwind.css" },
      { id: uuidv4(), text: "React.js" },
      { id: uuidv4(), text: "Next.js" },
      { id: uuidv4(), text: "Swiper.js" },
      { id: uuidv4(), text: "Yarn" },
    ],
    row: 2,
    col: 1,
  },
  {
    id: uuidv4(),
    name: "VanargandLodge",
    thumbnail: picVanargand,
    alt: "project image description",
    url: "https://www.vanargandlodge.com/",
    description: `Crafted a serene web presence for Vanargand Lodge in Dagget, MI, during my tenure at FrontPorch Solutions. 
                      Using Next.js, TypeScript, and Tailwind CSS. Simplistic and impactful, it embodies my web development prowess.`,
    tags: [
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Tailwind.css" },
      { id: uuidv4(), text: "Next.js" },
      { id: uuidv4(), text: "Swiper.js" },
      { id: uuidv4(), text: "Yarn" },
    ],
    row: 1,
    col: 1,
  },
  {
    id: uuidv4(),
    name: "Cartagena MusicFest 2021",
    thumbnail: picCartagenaFest,
    alt: "project image description",
    url: "https://www.cartagenamusicfestival.com/",
    description: `While collaborating with ImageID in 2021, I revitalized the online presence of the prestigious 
                      Cartagena Music Festival. I designed and developed the website's schedule, performer information, 
                      and essential elements for this renowned musical event, celebrating global culture and classical music.`,
    tags: [
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Wordpress" },
      { id: uuidv4(), text: "WPBakery" },
      { id: uuidv4(), text: "CSS" },
    ],
    row: 1,
    col: 1,
  },

  {
    id: uuidv4(),
    name: "Best General Services",
    thumbnail: picBGS,
    alt: "project image description",
    url: "https://bestgeneralservicessrl.com/",
    description: `Revamped a Lima-based pest control company's online presence using WordPress and Elementor. 
                      Seamlessly integrated SEO strategies to enhance the site's visibility and user engagement. 
                      Designed a user-friendly platform highlighting their specialized industrial pest control and 
                      disinfection services. Resulted in an impressive website that effectively communicates their 
                      expertise and establishes credibility in the field.`,
    tags: [
      { id: uuidv4(), text: "Web Design" },
      { id: uuidv4(), text: "Wordpress" },
      { id: uuidv4(), text: "Elementor" },
      { id: uuidv4(), text: "SEO" },
    ],
    row: 1,
    col: 2,
  },
  {
    id: uuidv4(),
    name: "Zelda Memory",
    thumbnail: picZelda,
    alt: "project image description",
    url: "https://jor-g-r.github.io/MemoryZelda/",
    description: `Strengthened skills through a JavaScript memory game, bridging the gap between fundamental understanding 
                      and advanced frameworks. Inspired by 'The Legend of Zelda,' I revamped a tutorial project, ironing out bugs 
                      and adding personalized touches.`,
    tags: [
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Bootstrap" },
      { id: uuidv4(), text: "Vanilla.js" },
    ],
    row: 1,
    col: 1,
  },
  {
    id: uuidv4(),
    name: "Simon Says",
    thumbnail: picSimon,
    alt: "project image description",
    url: "https://jor-g-r.github.io/SimonSays/",
    description: `Utilizing my enhanced JavaScript skills from an intensive course, I recreated the classic 'Simon Says' game. Beyond the course's scope, I refined the project, introducing additional interactions and personal touches for an engaging user experience.`,
    tags: [
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Bootstrap" },
      { id: uuidv4(), text: "Vanilla.js" },
    ],
    row: 1,
    col: 1,
  },

  {
    id: uuidv4(),
    name: "3D AppleVision Pro Demo",
    thumbnail: picAppleVisionPro,
    alt: "Apple Vision Pro Project Showcase",
    url: "https://applevision-pro-3d-animation.vercel.app/",
    description: `In my journey to enhance my frontend developer skills, I embarked on exploring 3D animations for web development. Embracing the Apple Vision Pro trend, I showcased its capabilities in this project.

    Following a freecodecamp guide, I constructed the environment in vite with react.js. To manipulate 3D objects and create animations, I utilized WebGi (powered by Three.js) and GSAP.
    
    The outcome features Apple Vision Pro glasses moving in three dimensions as you scroll, and allows interactive manipulation of the 3D object in the final section with the 'try me' button.`,

    tags: [
      { id: uuidv4(), text: "Javascript" },
      { id: uuidv4(), text: "Tailwind.css" },
      { id: uuidv4(), text: "React.js" },
      { id: uuidv4(), text: "Webgi - Three.js" },
      { id: uuidv4(), text: "GSAP" },
      { id: uuidv4(), text: "Vite" },
    ],
    row: 2,
    col: 1,
  },
];

export default function Projects() {
  const [projectItems] = useState(projectsInitialData);

  return (
    <>
      <section className="min-h-screen pb-28 relative" id="projects">
        {/* 
            <div className="sticky w-full bg-dark-950 h-7 top-[63px] z-50 flex items-center justify-center border-solid border-dark-500 border-y bg-opacity-95">
                <p className='text-[10px] uppercase tracking-widest text-white-600 opacity-50'>Ask for private projects</p>
            </div>
            
            */}
        <div className="absolute w-full h-full top-0 left-0 ">
          <ParticlesComponent />
        </div>

        <div className="container mx-auto px-8 xl:px-[68px] pt-20">
          <div className="mx-auto">
            <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center">
              Projects
            </h2>
          </div>

          <div className="w-full pt-16">
            <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`group w-full p-5 flex bg-card-gradient shadow-lg border-stone-800 hover:border-neutral-700  border backdrop-blur-[2.15px] bg-blend bg-opacity-10 rounded-md 
                                                            ${
                                                              item.row === 2
                                                                ? "lg:row-span-2 md:col-span-2 lg:col-span-1"
                                                                : " "
                                                            } 
                                                            ${
                                                              item.col === 2
                                                                ? "lg:col-span-2 xl:flex-row md:gap-x-6 flex-col"
                                                                : "flex-col"
                                                            }`}
                  >
                    <a target="_blank" className="relative" href={item.url}>
                      <Image
                        src={item.thumbnail}
                        alt={item.alt}
                        className={`w-full xl:min-w-[312px] rounded-sm hover:border border-dark-400 duration-100 ease-in ${
                          item.col === 2 ? "" : ""
                        }`}
                      />

                      <div
                        className={`absolute  right-[2%] ${
                          item.col === 2
                            ? "2xl:bottom-[2%] xl:bottom-[8%] md:bottom-[4%] bottom-[2%]"
                            : "bottom-[2%]"
                        }`}
                      >
                        <IconExternalLink />
                      </div>
                    </a>
                    <div className="flex flex-col justify-between h-full">
                      <div className="text-white-100 mt-6 w-full">
                        <h3 className="text-xl condensed capitalize pb-3 lg:text-[32px] font-bold">
                          {item.name}
                        </h3>

                        <p className="leading-6">{item.description}</p>
                      </div>

                      <ul className="flex gap-2 mt-3 flex-wrap">
                        {item.tags.map((tag) => {
                          return (
                            <li
                              key={tag.id}
                              className="text-dark-950 bg-white-200 group-hover:bg-white-100 px-3 py-1 rounded-full text-xs xl:text-sm cursor-default hover:scale-105 ease-out duration-500"
                            >
                              {tag.text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
