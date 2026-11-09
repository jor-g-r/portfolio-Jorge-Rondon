"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import jorgeImage from "../img/JorgeBuildingPic.webp";
import { useRef } from "react";
import type { Content } from "@/content/types";

export default function About({ content }: { content: Content["about"] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <section
      className="border-b border-solid border-dark-500 z-10 relative"
      id="about"
    >
      <div className="absolute w-full h-full bg-gradient-linear-dark bg-opacity-10 z-20"></div>

      <div className="max-w-[1312px] mx-auto px-8 lg:px-12 py-20 z-40 relative">
        <div className="flex flex-col-reverse items-center lg:items-start md:flex-row">
          <motion.div
            style={{
              opacity: scrollYProgress,
              transition: "opacity 0.3s ease-in-out",
            }}
            className="mt-6 lg:mt-0 lg:px-10 lg:mb-14 lg:max-w-md"
          >
            <Image
              ref={ref}
              src={jorgeImage}
              width={462}
              height={500}
              alt={content.imageAlt}
              className="rounded-xs shadow-lg border-1 border-dark-600"
            />
          </motion.div>
          <div className="w-full pb-8">
            <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide pt-4">
              {content.title}
            </h2>

            <div className="description mt-7 mb-4 flex flex-col gap-6 text-white-100 leading-[34px]">
              {content.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
