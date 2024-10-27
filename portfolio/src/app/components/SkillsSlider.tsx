"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../globals.css";

interface LogoProps {
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={logo} alt="Logo" style={{ width: 100 }} />
  </motion.div>
);

const SkillSlider = () => {
  return (
    <>
      <div className="min-h-[20vh] skillslider bg-stone-950"></div>
    </>
  );
};
export default SkillSlider;
