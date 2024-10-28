"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../globals.css";

import skillFigma from "../img/skills/Figma.jpg";
import skillSass from "../img/skills/Sass.jpg";
import skillBootrap from "../img/skills/Bootstrap.jpg";
import skillTailwind from "../img/skills/tailwindCSS.jpg";
import skillGithub from "../img/skills/Github.jpg";
import skillJs from "../img/skills/JS.jpg";
import skillTs from "../img/skills/TS.jpg";
import skillReact from "../img/skills/React.jpg";
import skillNext from "../img/skills/Next.jpg";
import skillNode from "../img/skills/Node.jpg";
import skillPostman from "../img/skills/Postman.jpg";
import skillGsap from "../img/skills/Gsap.jpg";
import skillFramer from "../img/skills/Framer Motion.jpg";
import skillWebflow from "../img/skills/Webflow.jpg";
import skillWordpress from "../img/skills/Wordpress.jpg";
import skillElementor from "../img/skills/Elementor.jpg";
import skillJet from "../img/skills/Jet.jpg";
import skillHubspot from "../img/skills/Hubspot.jpg";

interface Logo {
  src: any;
  alt: string;
}

const LogoSingle: React.FC<Logo> = ({ src, alt }) => (
  <div className="">
    <Image
      className="rounded opacity-90"
      src={src}
      alt={alt}
      height={58}
      width={58}
    />
  </div>
);

const SkillSlider = () => {
  const logos: Logo[] = [
    { src: skillFigma, alt: "Figma" },
    { src: skillSass, alt: "Sass" },
    { src: skillBootrap, alt: "Bootrsap" },
    { src: skillTailwind, alt: "TailwindCSS" },
    { src: skillGithub, alt: "Github" },
    { src: skillJs, alt: "Javascript" },
    { src: skillTs, alt: "Typescript" },
    { src: skillReact, alt: "React.js" },
    { src: skillNext, alt: "Next.js" },
    { src: skillNode, alt: "Node.js" },
    { src: skillPostman, alt: "Postman" },
    { src: skillGsap, alt: "GreenSock" },
    { src: skillFramer, alt: "Framer Motion" },
    { src: skillWebflow, alt: "Webflow" },
    { src: skillWordpress, alt: "Wordpress" },
    { src: skillElementor, alt: "Elementor" },
    { src: skillJet, alt: "Jet Elements" },
    { src: skillHubspot, alt: "Hubspot" },
  ];
  return (
    <>
      <div className="border-b border-solid border-dark-500 overflow-x-hidden">
        <div className="">
          <div className="skillslider flex flex-row-reverse gap-8 w-full py-8">
            {logos.map((logo, index) => (
              <LogoSingle key={index} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SkillSlider;
