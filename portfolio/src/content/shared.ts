// Everything that is the same in every language: images, links, tags, order.
// Copy lives in en.ts / es.ts.
import type { StaticImageData } from "next/image";
import type { JobId, LogoId, ProjectId } from "./types";

import picPairCraft from "@/app/img/projects/project-PairCraft.jpg";
import picVoidRunner from "@/app/img/projects/project-VoidRunner.jpg";
import picStateCraft from "@/app/img/projects/project-StateCraft.jpg";
import picIndentura from "@/app/img/projects/project-Indentura.jpg";
import picCharta from "@/app/img/projects/project-Charta.jpg";
import picVanargand from "@/app/img/projects/project-Vanargand.jpg";
import picCartagena from "@/app/img/projects/project-Cartagena.jpg";
import picKamaredine from "@/app/img/projects/project-kamaredinex2.jpg";

import logoMileage from "@/app/img/mileage-logo.jpeg";
import logoContender from "@/app/img/contender-logo.jpg";
import logoWyn from "@/app/img/wyn-logo.jpg";
import logoFps from "@/app/img/fps-logo.jpg";
import logoImageId from "@/app/img/imageID-logo.jpg";
import logoCwd from "@/app/img/cwd-logo.jpg";

import logoFreeCodeCamp from "@/app/img/logo-FreeCodeCamp.jpg";
import logoSoloLearn from "@/app/img/logo-SoloLearn.jpg";
import logoPlatzi from "@/app/img/logo-Platzi.jpg";

export const SITE_URL = "https://portfolio-jorge-rondon.vercel.app";

export interface ProjectMedia {
  id: ProjectId;
  name: string;
  thumbnail: StaticImageData;
  url: string;
  /** Public repo, if there is one. */
  repo?: string;
  tags: string[];
  /** true: my own product. false: client work. */
  own: boolean;
  /** Grid layout hints kept from the original design. */
  row: 1 | 2;
  col: 1 | 2;
}

export const projects: ProjectMedia[] = [
  {
    id: "paircraft",
    name: "PairCraft",
    thumbnail: picPairCraft,
    url: "https://pair-craft.vercel.app/",
    repo: "https://github.com/jor-g-r/PairCraft",
    tags: ["Astro", "Tailwind CSS 4", "Bun", "PWA", "EN / ES"],
    own: true,
    row: 1,
    col: 2,
  },
  {
    id: "voidrunner",
    name: "Void Runner",
    thumbnail: picVoidRunner,
    url: "https://void-runner-brown.vercel.app/",
    repo: "https://github.com/jor-g-r/void-runner",
    tags: ["React Three Fiber", "Three.js", "TypeScript", "Zustand", "Supabase"],
    own: true,
    row: 2,
    col: 1,
  },
  {
    id: "statecraft",
    name: "StateCraft",
    thumbnail: picStateCraft,
    url: "https://state-craft-gallery.vercel.app/",
    tags: ["Next.js 16", "React 19", "Supabase", "PWA", "Offline-first"],
    own: true,
    row: 2,
    col: 1,
  },
  {
    id: "indentura",
    name: "Indentura",
    thumbnail: picIndentura,
    url: "https://www.indentura.com/",
    tags: ["TypeScript", "Next.js", "Shadcn UI", "Bun", "Monorepo"],
    own: false,
    row: 1,
    col: 2,
  },
  {
    id: "charta",
    name: "Get Charta",
    thumbnail: picCharta,
    url: "https://www.getcharta.com/",
    tags: ["TypeScript", "Next.js", "React", "Chakra UI"],
    own: false,
    row: 2,
    col: 1,
  },
  {
    id: "vanargand",
    name: "Vanargand Lodge",
    thumbnail: picVanargand,
    url: "https://www.vanargandlodge.com/",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Swiper.js"],
    own: false,
    row: 1,
    col: 1,
  },
  {
    id: "cartagena",
    name: "Cartagena MusicFest 2021",
    thumbnail: picCartagena,
    url: "https://www.cartagenamusicfestival.com/",
    tags: ["JavaScript", "WordPress", "WPBakery", "CSS"],
    own: false,
    row: 1,
    col: 1,
  },
  {
    id: "kamaredine",
    name: "Kamaredine Properties",
    thumbnail: picKamaredine,
    url: "https://kamaredine.com/",
    tags: ["WordPress", "Elementor", "CSS", "SEO"],
    own: false,
    row: 1,
    col: 2,
  },
];

export interface JobMedia {
  id: JobId;
  company: string;
  logo: StaticImageData;
  siteUrl: string;
}

export const jobs: JobMedia[] = [
  { id: "mileage", company: "Mileage Design", logo: logoMileage, siteUrl: "https://www.mileagedesign.com/" },
  { id: "contender", company: "Contender Studio", logo: logoContender, siteUrl: "https://www.contenderstudio.com/" },
  { id: "wyn", company: "WYN Solutions", logo: logoWyn, siteUrl: "https://www.wynwithus.com/" },
  { id: "fps", company: "FrontPorch Solutions", logo: logoFps, siteUrl: "https://www.frontporchsolutions.com/" },
  { id: "imageid", company: "ImageID", logo: logoImageId, siteUrl: "https://imageid.com.co/" },
  { id: "cwd", company: "Chattanooga Web Design", logo: logoCwd, siteUrl: "https://www.chattanoogawebdesign.com/" },
];

export const logos: Record<LogoId, StaticImageData> = {
  freeCodeCamp: logoFreeCodeCamp,
  soloLearn: logoSoloLearn,
  platzi: logoPlatzi,
};

export const social = {
  github: "https://github.com/jor-g-r",
  linkedin: "https://www.linkedin.com/in/jor-g-r/",
  email: "mailto:jorg.pot.07@gmail.com",
  x: "https://twitter.com/jfrrj19",
  resume: "https://jumpshare.com/v/QZ7YqUtwDPE6QKLk67i6",
};
