"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import type { Content } from "@/content/types";
import { jobs } from "@/content/shared";
import IconCircle from "../icons/IconCircle";

interface WorkDetailsProps {
  company: string;
  logo: string | any;
  logoAlt: string;
  siteUrl: string;
  position: string;
  time: string;
  description: string;
  index: number;
}

const WorkDetails: React.FC<WorkDetailsProps> = ({
  company,
  logo,
  logoAlt,
  siteUrl,
  position,
  time,
  description,
  index,
}) => {
  const ref = useRef(null);
  return (
    <>
      <li className="w-full max-w-[642px]">
        <IconCircle reference={ref} />
        <motion.div
          ref={ref}
          initial={{ y: 70 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, type: "spring" }}
          className="border-solid border border-white-100 hover:border-primary-600 hover:border-opacity-70 py-5 lg:py-6 px-4 lg:px-7"
        >
          <div className="flex gap-4 pb-3 items-center">
            <motion.a
              className=""
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                className="rounded-md w-auto max-h-[67px] lg:max-h-[52px] hover:border-[.5px] border-solid border-white-300 border-opacity-60"
                height={72}
                src={logo}
                alt={logoAlt}
              />
            </motion.a>

            <div className="text-2xl">
              <h3 className="font-bold text-base md:text-lg">{company}</h3>
              <div className="flex flex-col lg:flex-row gap-x-2 text-xs md:text-md text-white-500">
                <h5 className="uppercase condensed text-white-300">
                  {position}
                </h5>
                <span className="hidden lg:block">|</span> <p>{time}</p>
              </div>
            </div>
          </div>

          <div className="leading-5 lg:leading-7 text-xs md:text-md lg:text-base">
            <div>{description}</div>
          </div>
        </motion.div>
      </li>
    </>
  );
};

const Experience = ({ content }: { content: Content["experience"] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <section
        className="border-solid border-b border-dark-500 pb-28 lg:pb-36 z-10 relative"
        id="experience"
      >
        <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>

        <div className="container mx-auto pt-16 px-8 lg:px-[68px] z-30 relative">
          <div className="pb-6">
            <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">
              {content.title}
            </h2>
          </div>

          <div ref={ref} className="relative mx-auto w-full xl:max-w-[824px]">
            <div className="absolute animate-pulse left-0 top-0 w-[1px] h-full bg-white-400 opacity-80 origin-top" />

            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-0 w-[1px] h-full bg-primary-700 origin-top"
            />

            <ul className=" flex flex-col gap-8 lg:gap-14 items-center pt-12 pl-[12%] lg:pl-[5%]">
              {jobs.map((job, index) => (
                <WorkDetails
                  key={job.id}
                  index={index}
                  company={job.company}
                  logo={job.logo}
                  logoAlt={`${job.company} ${content.logoAlt}`}
                  siteUrl={job.siteUrl}
                  {...content.items[job.id]}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
