"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Content } from "@/content/types";

interface NavbarBtnProps {
  href: string;
  title: string;
}

const NavbarBtn: React.FC<NavbarBtnProps> = ({ href, title }) => {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId !== null) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link href={href} onClick={scrollToSection} className="group relative tracking-widest">
      {title}
      <span
        className="h-[1px] w-0 bg-white-100 absolute left-0 -bottom-0.5
        group-hover:w-full transition-all ease-in-out duration-500"
      >
        &nbsp;
      </span>
    </Link>
  );
};

const navVariants = {
  hidden: { height: 0 },
  visible: { height: "auto" },
};

function NavItems({ content }: { content: Content["nav"] }) {
  const sections = [
    { href: "#about", title: content.about },
    { href: "#how-i-work", title: content.howIWork },
    { href: "#projects", title: content.projects },
    { href: "#experience", title: content.experience },
    { href: "#path", title: content.path },
  ];
  return (
    <>
      {sections.map((s) => (
        <li key={s.href}>
          <NavbarBtn title={s.title} href={s.href} />
        </li>
      ))}
      <li className="mt-2 lg:mt-0">
        <Link
          className="bg-white-100 text-dark-600 px-4 py-1 rounded-sm hover:bg-primary duration-300 ease-in"
          href="#footer"
        >
          {content.contact}
        </Link>
      </li>
      <li className="mt-2 lg:mt-0">
        {/* Plain <a>: each language is its own root layout, so this is a full page load. */}
        <a
          href={content.switchHref}
          hrefLang={content.switchText.toLowerCase()}
          aria-label={content.switchLabel}
          title={content.switchLabel}
          className="border border-dark-400 px-2 py-1 rounded-sm tracking-widest hover:border-white-100 duration-300 ease-in"
        >
          {content.switchText}
        </a>
      </li>
    </>
  );
}

const Navbar = ({ content }: { content: Content["nav"] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full md:px-7 z-40 bg-dark-900 bg-opacity-95 backdrop-blur-sm shadow-nav-shadow sticky top-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center px-7 lg:px-16 py-3">
          <div className="flex justify-between">
            <a
              href="#hero"
              aria-label="Jorge Rondón"
              className="group lg:text-sm text-lg font-bold ease-in duration-500 text-dark-900 bg-white-100
                         hover:bg-yellow-400 h-12 w-12 lg:h-10 lg:w-10 pr-[6px] p-1 flex items-end justify-end rounded tracking-tighter"
            >
              JR
            </a>

            <div className="lg:hidden">
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label="Menu"
                className={`group flex h-12 w-12 cursor-pointer float-right items-center justify-center rounded border
                            border-dark-600 bg-white p-2 hover:bg-dark-900 ${menuOpen ? "border-dark-400" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="space-y-2">
                  <span
                    className={`block h-0.5 w-8 origin-center bg-white-300 transition-transform duration-500 ease-in-out
                                ${menuOpen ? "translate-y-[5px] rotate-45" : " "}`}
                  ></span>
                  <span
                    className={`block h-0.5 origin-center bg-orange-500 transition-transform duration-500 ease-in-out
                                ${menuOpen ? "w-8 -translate-y-[5.1px] -rotate-45" : "w-6"}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:w-3/4 w-4/5 max-w-3xl">
            <div className="hidden lg:flex justify-end">
              <ul className="flex flex-row items-center justify-between lg:gap-4 xl:gap-6">
                <NavItems content={content} />
              </ul>
            </div>

            <motion.div
              className="overflow-hidden lg:hidden"
              variants={navVariants}
              initial="hidden"
              animate={menuOpen ? "visible" : "hidden"}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <ul className="flex flex-col pb-3 gap-y-1 pt-6 uppercase">
                <NavItems content={content} />
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
