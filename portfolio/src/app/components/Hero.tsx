"use client";
import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import IconArrowDown from "../icons/IconArrowDownn";
import IconDownload from "../icons/IconDownload";
import type { Content } from "@/content/types";
import { social } from "@/content/shared";

export default function Hero({ content }: { content: Content["hero"] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        className="h-[89vh] border-b border-solid border-dark-500 overflow-x-hidden z-10 relative"
        id="hero"
      >
        <div className="absolute w-full h-full hero-bg"></div>
        <div className="container mx-auto lg:px-16 h-full z-30">
          <div className="relative flex flex-col justify-center  h-full">
            <div className="text-center condensed  pb-56">
              <motion.h1
                className="lg:text-8xl text-7xl font-bold drop-shadow-lg"
                initial={{ y: 0 }}
                animate={{ y: [3.5, 4, 0], rotate: [0, -0.1, 0.15] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {content.name}
              </motion.h1>
              <p className="text-3xl text-primary pt-2 pb-4">{content.role}</p>

              <a
                target="_blank"
                href={social.resume}
                rel="noopener noreferrer"
                className="ui-btn mx-auto rounded-sm w-fit"
                id="resumedownload"
              >
                <span className="flex items-center gap-1 condensed font-light uppercase ">
                  {content.resume}
                  <IconDownload />
                </span>
              </a>
            </div>

            <div
              className="flex align ml-2 px-2 w-full lg:w-2/3 absolute bottom-14 gap-4 lg:gap-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="self-end pb-3">
                <IconArrowDown isHovered={isHovered} />
              </div>
              <div className="lg:text-xl tracking-tight leading-8 lg:leading-10 cursor-default pr-4 md:pr-2">
                {content.lines.map((line) => (
                  <p key={line} className="drop-shadow-lg">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full min-h-[44px] border-b border-solid border-dark-500 overflow-y-hidden flex items-center">
        <motion.p
          ref={ref}
          className="m-auto flex flex-col sm:flex-row justify-center text-center leading-6 py-2
                     text-neutral-400 font-light lg:text-xl tracking-[10px] lg:tracking-[14px] uppercase"
          style={{
            opacity: scrollYProgress,
            transition: "opacity 0.35s ease-in-out",
          }}
        >
          <span>{content.strip[0]}</span> &nbsp;{content.strip[1]}
        </motion.p>
      </div>
    </>
  );
}
