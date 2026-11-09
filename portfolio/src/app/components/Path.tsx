"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import IconCircle from "../icons/IconCircle";
import type { Content, PathItem } from "@/content/types";
import { logos } from "@/content/shared";

// The self-taught timeline. Certificates live here as steps, not as credentials.
function Step({ item }: { item: PathItem }) {
  const ref = useRef(null);
  const badge = item.logo ? (
    <Image
      className="rounded-md shadow-lg hover:border border-solid border-white-500 border-opacity-30"
      src={logos[item.logo]}
      alt={item.logo}
    />
  ) : (
    <div className="aspect-square rounded-md border border-dark-600 flex items-center justify-center condensed text-sm lg:text-lg text-primary">
      {item.year}
    </div>
  );

  return (
    <li className="w-full max-w-[642px]">
      <IconCircle reference={ref} />
      <motion.div
        ref={ref}
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, type: "spring" }}
        className="border-solid border gap-x-4 grid grid-cols-6 border-white-100 hover:border-primary-700 hover:border-opacity-70 py-3 lg:py-4 px-3 lg:px-5"
      >
        <div className="col-span-1 pt-1">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {badge}
            </a>
          ) : (
            badge
          )}
        </div>

        <div className="flex flex-col pb-3 items-start col-span-5">
          <p className="text-xs md:text-md text-white-500 condensed tracking-widest">{item.year}</p>
          <h3 className="font-bold text-base md:text-lg py-1">{item.title}</h3>
          <p className="leading-5 lg:leading-6 text-xs md:text-md lg:text-base">{item.text}</p>
        </div>
      </motion.div>
    </li>
  );
}

export default function Path({ content }: { content: Content["path"] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="border-solid pb-28 relative z-10" id="path">
      <div className="absolute w-full h-full bg-gradient-linear-dark z-20"></div>

      <div className="container mx-auto pt-16 px-8 lg:px-[68px] z-30 relative">
        <div className="pb-6">
          <h2 className="condensed text-center text-4xl lg:text-5xl uppercase -tracking-wide pt-4">
            {content.title}
          </h2>
          <p className="text-center text-white-100 pt-4">{content.intro}</p>
        </div>

        <div ref={ref} className="relative mx-auto w-full xl:max-w-[824px]">
          <div className="absolute animate-pulse left-0 top-0 w-[1px] h-full bg-white-400 opacity-80 origin-top" />

          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 top-0 w-[1px] h-full bg-primary-700 origin-top"
          />

          <ul className="flex flex-col gap-6 lg:gap-12 items-center pt-12 pl-[12%] lg:pl-[5%]">
            {content.items.map((item) => (
              <Step key={`${item.year}-${item.title}`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
