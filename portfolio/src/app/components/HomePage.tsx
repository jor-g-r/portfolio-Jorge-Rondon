import type { Content } from "@/content/types";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SkillSlider from "./SkillsSlider";
import About from "./About";
import HowIWork from "./HowIWork";
import Projects from "./Projects";
import Experience from "./Experience";
import Path from "./Path";
import Footer from "./Footer";

// One page, two languages: the route passes the copy in.
export default function HomePage({ content }: { content: Content }) {
  return (
    <main>
      <Navbar content={content.nav} lang={content.lang} />
      <Hero content={content.hero} />
      <SkillSlider />
      <About content={content.about} />
      <HowIWork content={content.howIWork} />
      <Projects content={content.projects} />
      <Experience content={content.experience} />
      <Path content={content.path} />
      <Footer content={content.contact} />
    </main>
  );
}
