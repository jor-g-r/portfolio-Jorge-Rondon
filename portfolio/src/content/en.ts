import type { Content } from "./types";

const en: Content = {
  lang: "en",
  meta: {
    title: "Jorge Rondón · Head of Development, building my own products with AI agents",
    description:
      "Self-taught designer and developer. I build web products with AI agents, one task at a time, and ship my own: PairCraft, Void Runner and StateCraft.",
  },
  nav: {
    about: "About",
    howIWork: "How I work",
    projects: "Projects",
    experience: "Experience",
    path: "My path",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    name: "Jorge Rondón",
    role: "Head of Development · Building my own products",
    resume: "Resume",
    lines: [
      "I build web products with AI agents.",
      "One task at a time, nothing closed without evidence.",
      "Self-taught: from web design in 2016 to leading development at Mileage Design.",
    ],
    strip: ["Design & Development", "with AI agents"],
  },
  about: {
    title: "About",
    imageAlt: "Jorge Rondón at work",
    paragraphs: [
      "I'm Jorge Rondón, a self-taught designer and developer from Venezuela, based in Medellín. No CS degree: I started in web design in 2016, have been writing code since 2021, and learned everything by building. Today I'm Head of Development at Mileage Design.",
      "My own way of working: several Claude Code sessions at once, one coordinating and the others each in their own lane, one task at a time. Nothing closes on an agent's word, only on evidence. When a mistake repeats, I don't write another rule; I turn it into a check that runs on its own.",
      "On my own time I ship products: PairCraft, a bilingual pocket guide to wine and food pairings; Void Runner, a synthwave rail shooter with a live leaderboard; and StateCraft, a vision board you can install and use offline.",
    ],
  },
  howIWork: {
    title: "How I work",
    intro:
      "My day runs through several Claude Code sessions at once: one coordinates, the others work, each in its own lane. Most of these rules exist because something went wrong once and I didn't want it to happen twice. Now I'm measuring my own setup against a baseline before I change it.",
    principles: [
      {
        title: "One by one",
        text: "One task per lane, one lane per job. Fewer lanes beat a longer queue.",
      },
      {
        title: "Brief before GO",
        text: "No session writes anything until I've read its brief and said GO. A GO for one task doesn't carry over to the next.",
      },
      {
        title: "Evidence, not words",
        text: "Nothing closes on an agent's say-so. A status needs proof: the pull request, the live page, the read-back.",
      },
      {
        title: "A rule that doesn't fire becomes a hook",
        text: "If a mistake comes back with a written rule in place, the rule isn't there when it matters. So it becomes a check that runs on its own.",
      },
      {
        title: "The agent prepares, I run production",
        text: "Anything that touches production is a command I run myself, and each one checks the current state before it changes anything.",
      },
      {
        title: "Every task teaches me something",
        text: "Each brief says what I'll learn, not only what will change.",
      },
    ],
    quote: {
      text: "Every new problem is an opportunity. The last thing I want is for the work to move forward without leaving me something learned.",
      source: "My work journal, August 2026",
    },
  },
  projects: {
    title: "Projects",
    ownTitle: "My own products",
    clientTitle: "Earlier client work",
    live: "Live",
    code: "Code",
    items: {
      paircraft: {
        alt: "PairCraft home page with the wine search",
        description:
          "A bilingual pocket guide to wine and food pairings, with short, opinionated notes. Search a wine, a grape, a dish or a region and see what goes with it, filtered by where you can actually buy the bottle. A mobile-first PWA in English and Spanish.",
      },
      voidrunner: {
        alt: "Void Runner title screen with the Top Runners leaderboard",
        description:
          "A synthwave on-rails shooter that runs in the browser. Dodge and fire through escalating waves to a boss fight, then post your time on a live leaderboard. Built with React Three Fiber and Three.js, with Supabase behind the scores.",
      },
      statecraft: {
        alt: "StateCraft sign-in screen",
        description:
          "A vision board to realign your mood. Sign in with Google or GitHub, collect the images that get you going, and open them anywhere: it installs like an app and works offline. My first full-stack project, now on Next.js 16 and React 19.",
      },
      indentura: {
        alt: "Indentura dashboard",
        description:
          "Financial UI built from Figma: 20+ screens in Next.js and Shadcn UI inside a monorepo, with a shared design system, Recharts dashboards and validated forms.",
      },
      charta: {
        alt: "Get Charta interface",
        description:
          "UI refresh for a smart-contract negotiation platform. I rebuilt the negotiation panels and complex forms from Figma on a new Chakra UI design system, keeping the existing app logic.",
      },
      vanargand: {
        alt: "Vanargand Lodge website",
        description:
          "Website for a lodge in Daggett, Michigan, built at FrontPorch Solutions with Next.js, TypeScript and Tailwind CSS.",
      },
      cartagena: {
        alt: "Cartagena Music Festival 2021 website",
        description:
          "With ImageID in 2021, I designed and built the schedule, the performer pages and key sections of the Cartagena Music Festival website.",
      },
      kamaredine: {
        alt: "Kamaredine Properties website",
        description:
          "Website for a hotel in Burgas, Bulgaria, in English, Bulgarian and Russian. There was no Figma: the designer handed over a stylescape and I turned it into a responsive WordPress and Elementor build, iterating on the layout.",
      },
    },
  },
  experience: {
    title: "Experience",
    logoAlt: "logo",
    items: {
      mileage: {
        position: "Head of Development",
        time: "November 2025 – Present",
        description:
          "Leading the development function at Mileage Design, defining technical processes, standards and delivery workflows. I specialize in fully custom WordPress themes with PHP and Advanced Custom Fields (ACF), focused on clean architecture, scalability, performance and long-term maintainability rather than page-builder-driven solutions.",
      },
      contender: {
        position: "Web Developer",
        time: "March 2024 – July 2025",
        description:
          "As the agency's only developer, I built and optimized its websites and owned every technical decision. Along the way I took on event tracking with GTM and GA, and SEO.",
      },
      wyn: {
        position: "Webmaster",
        time: "December 2022 – May 2023",
        description:
          "At a marketing agency for car dealerships, I built and managed landing pages across many dealer websites in the US and kept track of how they performed.",
      },
      fps: {
        position: "QA Developer",
        time: "August 2021 – October 2022",
        description:
          "I tested functionality and visual accuracy against Figma, using my design background to suggest fixes where older projects had no reference. I was also the backup front-end developer, working with CSS, PHP and Next.js.",
      },
      imageid: {
        position: "Webmaster",
        time: "April 2021 – August 2021",
        description:
          "At one of the largest marketing agencies in Colombia, I managed several WordPress sites built with Elementor, WPBakery and Beaver Builder, and their e-commerce databases.",
      },
      cwd: {
        position: "Web Developer",
        time: "January 2021 – April 2021",
        description:
          "Front-end developer at a marketing agency in Chattanooga, Tennessee, building Elementor sites to a high visual standard.",
      },
    },
  },
  path: {
    title: "My path",
    intro: "No university, no bootcamp. Courses, side projects and real work, one step at a time.",
    items: [
      {
        year: "2016",
        title: "Freelance web design",
        text: "I started designing websites for clients on Fiverr and learned UI by doing it.",
      },
      {
        year: "2018",
        title: "HTML and CSS",
        text: "Taught myself the basics of the web on SoloLearn.",
        url: "https://www.sololearn.com/Certificate/CT-OMSJVAQ8/pdf",
        logo: "soloLearn",
      },
      {
        year: "2019",
        title: "Programming basics",
        text: "Platzi took me from zero to writing JavaScript and building a small web game.",
        url: "https://platzi.com/p/jorgerondon/curso/1050-course/diploma/detalle/",
        logo: "platzi",
      },
      {
        year: "2019",
        title: "Responsive Web Design",
        text: "freeCodeCamp certification: Flexbox, Grid and accessible forms.",
        url: "https://www.freecodecamp.org/certification/georgejfrj/responsive-web-design",
        logo: "freeCodeCamp",
      },
      {
        year: "2020",
        title: "JavaScript fundamentals",
        text: "Back to SoloLearn to get solid in JavaScript.",
        url: "https://www.sololearn.com/Certificate/CT-ANS4JHDJ/pdf",
        logo: "soloLearn",
      },
      {
        year: "2021",
        title: "First job as a developer",
        text: "From design to code: front-end work for a US agency, then webmaster roles in Colombia.",
      },
      {
        year: "2023",
        title: "JavaScript Algorithms & Data Structures",
        text: "freeCodeCamp certification, with object-oriented and functional programming.",
        url: "https://www.freecodecamp.org/certification/georgejfrj/javascript-algorithms-and-data-structures",
        logo: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "My first full-stack app",
        text: "StateCraft: sign-in, a database and offline support, built and shipped on my own.",
      },
      {
        year: "2025",
        title: "Head of Development",
        text: "In November I went full-time at Mileage Design, leading development.",
      },
      {
        year: "2026",
        title: "Building with agents, one task at a time",
        text: "Several Claude Code sessions with clear rules became my way of working, and I shipped PairCraft and Void Runner.",
      },
    ],
  },
  contact: {
    title: "Let's talk",
    pitch:
      "Have a project in mind? I take on a few freelance builds alongside my own products. Write to me or find me on LinkedIn.",
    thanks: "Thanks for stopping by",
    backToTop: ["Back", "to", "top"],
  },
};

export default en;
