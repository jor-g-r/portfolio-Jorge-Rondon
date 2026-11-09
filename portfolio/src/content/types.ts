// Shape of every piece of copy on the site. en.ts and es.ts must both satisfy it,
// so a missing translation is a type error, not a blank section.

export type Lang = "en" | "es";

export type ProjectId =
  | "paircraft"
  | "voidrunner"
  | "statecraft"
  | "indentura"
  | "charta"
  | "vanargand"
  | "cartagena"
  | "kamaredine";

export type JobId =
  | "mileage"
  | "contender"
  | "wyn"
  | "fps"
  | "imageid"
  | "cwd";

export type LogoId = "freeCodeCamp" | "soloLearn" | "platzi";

export interface PathItem {
  year: string;
  title: string;
  text: string;
  url?: string;
  logo?: LogoId;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: {
    about: string;
    howIWork: string;
    projects: string;
    experience: string;
    path: string;
    contact: string;
    /** Link to the other language version. */
    switchHref: string;
    switchText: string;
    switchLabel: string;
  };
  hero: {
    name: string;
    role: string;
    resume: string;
    lines: string[];
    strip: [string, string];
  };
  about: { title: string; imageAlt: string; paragraphs: string[] };
  howIWork: {
    title: string;
    intro: string;
    principles: { title: string; text: string }[];
    quote: { text: string; source: string };
  };
  projects: {
    title: string;
    ownTitle: string;
    clientTitle: string;
    live: string;
    code: string;
    items: Record<ProjectId, { description: string; alt: string }>;
  };
  experience: {
    title: string;
    logoAlt: string;
    items: Record<JobId, { position: string; time: string; description: string }>;
  };
  path: { title: string; intro: string; items: PathItem[] };
  contact: { title: string; pitch: string; thanks: string; backToTop: string[] };
}
