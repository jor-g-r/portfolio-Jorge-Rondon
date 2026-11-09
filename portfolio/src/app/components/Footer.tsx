"use client";
import { motion, useScroll } from "framer-motion";

import IconGitHub from "../icons/social/IconGitHub";
import IconGmail from "../icons/social/IconGmail";
import IconLinkedIn from "../icons/social/IconLinkedIn";
import IconWhatsApp from "../icons/social/IconWhatsApp";
import IconX from "../icons/social/IconX";
import BtnBackTop from "./BtnBackTop";
import type { Content } from "@/content/types";
import { social } from "@/content/shared";

export default function Footer({ content }: { content: Content["contact"] }) {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <section
        className="border-y border-solid border-dark-500 z-10 relative"
        id="footer"
      >
        <div className="absolute w-full h-full bg-neutral-950 bg-opacity-40 z-20"></div>

        <div className="container mx-auto px-8 lg:px-[68px] py-20 z-40 relative">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-y-3 max-w-md lg:m-0 m-auto">
              <div className="">
                <h3 className="condensed text-4xl lg:text-5xl uppercase -tracking-wide text-center lg:text-left">
                  {content.title}
                </h3>
                <p className="text-white-100 leading-7 pt-3 text-center lg:text-left">{content.pitch}</p>
              </div>
              <div className="flex justify-between gap-3 lg:gap-2">
                <a
                  target="_blank"
                  className="hover:scale-125 ease-in duration-300"
                  href={social.github}
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconGitHub />
                </a>

                <a
                  target="_blank"
                  className="hover:scale-125 ease-in duration-300"
                  href={social.linkedin}
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn />
                </a>
                <a
                  target="_blank"
                  className="hover:scale-125 ease-in duration-300"
                  href={social.email}
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <IconGmail />
                </a>
                <a
                  target="_blank"
                  className="hover:scale-125 ease-in duration-300"
                  href={social.x}
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <IconX />
                </a>
              </div>
            </div>

            <div className="flex flex-col lg:items-end">
              <div className="text-center my-4">
                <motion.span
                  style={{
                    opacity: scrollYProgress,
                    transition: "opacity 0.125s ease-in-out",
                  }}
                  className="text-dark-400 text-lg font-thin text-center lg:text-right my-3 uppercase"
                >
                  {content.thanks}
                </motion.span>
              </div>

              <div className="m-auto lg:m-0">
                <BtnBackTop words={content.backToTop} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
