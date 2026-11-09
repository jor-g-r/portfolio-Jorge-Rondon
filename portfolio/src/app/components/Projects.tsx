"use client";
import Image from "next/image";
import ParticlesComponent from "./ParticlesComponent";
import IconExternalLink from "../icons/IconExternalLink";
import type { Content } from "@/content/types";
import { projects, type ProjectMedia } from "@/content/shared";

function ProjectCard({ item, copy, live, code }: {
  item: ProjectMedia;
  copy: { description: string; alt: string };
  live: string;
  code: string;
}) {
  return (
    <li
      className={`group w-full p-5 flex gap-6 bg-card-gradient shadow-lg border-stone-800 hover:border-neutral-700 border backdrop-blur-[2.15px] bg-blend bg-opacity-10 rounded-md
        ${item.row === 2 ? "lg:row-span-2 md:col-span-2 lg:col-span-1" : ""}
        ${item.col === 2 ? "lg:col-span-2 xl:flex-row md:gap-x-6 flex-col" : "flex-col"}`}
    >
      <a target="_blank" rel="noopener noreferrer" className="relative" href={item.url}>
        <Image
          src={item.thumbnail}
          alt={copy.alt}
          className="w-full xl:min-w-[312px] rounded-sm hover:border border-dark-400 duration-100 ease-in"
        />
        <div
          className={`absolute right-[2%] ${item.col === 2 ? "2xl:bottom-[2%] xl:bottom-[8%] md:bottom-[4%] bottom-[2%]" : "bottom-[2%]"}`}
        >
          <IconExternalLink />
        </div>
      </a>
      <div className="flex flex-col justify-between h-full">
        <div className="text-white-100 w-full">
          <h4 className="text-xl condensed capitalize pb-3 lg:text-[32px] font-bold">{item.name}</h4>
          <p className="leading-6 font-normal">{copy.description}</p>
        </div>
        <div>
          <ul className="flex gap-2 mt-3 flex-wrap">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="text-dark-950 bg-white-200 group-hover:bg-white-100 px-3 py-1 rounded-full text-xs xl:text-sm cursor-default hover:scale-105 ease-out duration-500"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 pt-4 condensed uppercase tracking-widest text-sm">
            <a className="text-primary hover:underline" href={item.url} target="_blank" rel="noopener noreferrer">
              {live} ↗
            </a>
            {item.repo && (
              <a className="text-white-100 hover:underline" href={item.repo} target="_blank" rel="noopener noreferrer">
                {code} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects({ content }: { content: Content["projects"] }) {
  const groups = [
    { title: content.ownTitle, items: projects.filter((p) => p.own) },
    { title: content.clientTitle, items: projects.filter((p) => !p.own) },
  ];

  return (
    <section className="min-h-screen pb-28 relative border-b border-dark-500" id="projects">
      <div className="absolute w-full h-full top-0 left-0 ">
        <ParticlesComponent />
      </div>

      <div className="container mx-auto px-8 xl:px-[68px] pt-20 relative">
        <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center">
          {content.title}
        </h2>

        {groups.map((group) => (
          <div key={group.title} className="w-full pt-16">
            <h3 className="condensed text-2xl lg:text-3xl uppercase tracking-wide text-neutral-300 pb-8">
              {group.title}
            </h3>
            <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item) => (
                <ProjectCard
                  key={item.id}
                  item={item}
                  copy={content.items[item.id]}
                  live={content.live}
                  code={content.code}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
