"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import jorgeImage from "../img/JorgeBuildingPic.webp";
import { useRef } from "react";

export default function About() {
  const aboutImage = jorgeImage;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <>
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
                src={aboutImage}
                width={462}
                height={500}
                alt="Jorge Rondon Developer"
                className="rounded-xs shadow-lg border-1 border-dark-600"
              />
            </motion.div>
            <div className="w-full pb-8">
              <h2 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide pt-4">
                About
              </h2>

              <div
                className="description mt-7 mb-4 flex flex-col gap-6
                                           text-white-100 leading-[34px]"
              >
                <p>
                  I started in the industry in 2016 as a freelance designer,
                  exploring the fundamentals of design and user interfaces
                  during the rise of Web 2.0. Over time, my interest in
                  technology led me to specialize in front-end development,
                  learning on my own and from more experienced professionals.
                </p>

                <p>
                  Since 2021, I have been working as a web developer with
                  experience in WordPress and a strong focus on JavaScript and
                  TypeScript, particularly with Next.js. Throughout my career, I
                  have honed my ability to manage time efficiently, allowing me
                  to balance continuous learning with collaborating on diverse
                  projects.
                </p>

                <p>
                  Additionally, I have integrated AI tools into my workflow to
                  optimize processes and enhance productivity. I understand how
                  to ask the right questions and leverage AI as a strategic
                  resource to stay on track and make informed decisions.
                </p>

                <p>
                  I am always looking for new opportunities that allow me to
                  grow and contribute to innovative projects. If you have an
                  idea in mind, I&apos;d be happy to be a part of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
