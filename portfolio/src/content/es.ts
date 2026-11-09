import type { Content } from "./types";

const es: Content = {
  lang: "es",
  meta: {
    title: "Jorge Rondón · Diseñador y desarrollador autodidacta que construye con agentes de IA",
    description:
      "Diseñador y desarrollador autodidacta. Construyo productos web con agentes de IA, una tarea a la vez, y lanzo los míos: PairCraft, Void Runner y StateCraft.",
  },
  nav: {
    about: "Sobre mí",
    howIWork: "Cómo trabajo",
    projects: "Proyectos",
    experience: "Experiencia",
    path: "Mi camino",
    contact: "Contacto",
    language: "Idioma",
  },
  hero: {
    name: "Jorge Rondón",
    role: "Diseñador y desarrollador autodidacta",
    resume: "Currículum",
    lines: [
      "Construyo productos web con agentes de IA.",
      "Una tarea a la vez, y nada se cierra sin evidencia.",
      "Head of Development en Mileage Design. En paralelo, lanzo mis propios productos.",
    ],
    strip: ["Diseño y desarrollo", "con agentes de IA"],
  },
  about: {
    title: "Sobre mí",
    imageAlt: "Jorge Rondón trabajando",
    paragraphs: [
      "Soy Jorge Rondón, diseñador y desarrollador autodidacta venezolano, con base en Medellín. Sin título universitario: empecé en diseño web en 2016, escribo código desde 2021 y todo lo he aprendido construyendo. Hoy soy Head of Development en Mileage Design.",
      "Mi forma de trabajar: varias sesiones de Claude Code a la vez, una coordina y las demás trabajan cada una en su carril, una tarea a la vez. Nada se cierra porque un agente diga que está listo, solo con evidencia. Cuando un error se repite, no escribo otra regla: la convierto en un chequeo que corre solo.",
      "En mi tiempo propio lanzo productos: PairCraft, una guía de bolsillo bilingüe para maridar vino y comida; Void Runner, un shooter synthwave sobre rieles con leaderboard en vivo; y StateCraft, un vision board que puedes instalar y usar sin conexión.",
    ],
  },
  howIWork: {
    title: "Cómo trabajo",
    intro:
      "Mi día pasa por varias sesiones de Claude Code a la vez: una coordina y las demás trabajan, cada una en su carril. Casi todas estas reglas existen porque algo salió mal una vez y no quise que pasara dos. Ahora estoy midiendo mi propia configuración contra una línea base antes de cambiarla.",
    principles: [
      {
        title: "One by one",
        text: "Una tarea por carril, un carril por trabajo. Menos carriles ganan a una cola más larga.",
      },
      {
        title: "Brief antes del GO",
        text: "Ninguna sesión escribe nada hasta que leo su brief y digo GO. Un GO para una tarea no vale para la siguiente.",
      },
      {
        title: "Evidencia, no palabras",
        text: "Nada se cierra porque un agente lo diga. Un estado necesita prueba: el pull request, la página en vivo, la relectura.",
      },
      {
        title: "Una regla que no salta se vuelve hook",
        text: "Si un error vuelve con una regla escrita, la regla no está ahí cuando hace falta. Así que se convierte en un chequeo que corre solo.",
      },
      {
        title: "El agente prepara, yo ejecuto producción",
        text: "Todo lo que toca producción es un comando que ejecuto yo, y cada uno comprueba el estado actual antes de cambiar nada.",
      },
      {
        title: "Cada tarea me enseña algo",
        text: "Cada brief dice qué voy a aprender, no solo qué va a cambiar.",
      },
    ],
    quote: {
      text: "Cada nuevo problema es una oportunidad… lo último que quiero es sentir que el trabajo avance sin que me deje un aprendizaje.",
      source: "Mi diario de trabajo, agosto de 2026",
    },
  },
  projects: {
    title: "Proyectos",
    ownTitle: "Mis productos",
    clientTitle: "Trabajo anterior con clientes",
    live: "En vivo",
    code: "Código",
    items: {
      paircraft: {
        alt: "Portada de PairCraft con el buscador de vinos",
        description:
          "Una guía de bolsillo bilingüe para maridar vino y comida, con notas cortas y con opinión. Busca un vino, una uva, un plato o una región y mira qué combina, filtrado por dónde puedes comprar la botella. Una PWA mobile-first en inglés y español.",
      },
      voidrunner: {
        alt: "Pantalla de inicio de Void Runner con el leaderboard Top Runners",
        description:
          "Un shooter synthwave sobre rieles que corre en el navegador. Esquiva y dispara entre oleadas cada vez más duras hasta el jefe final, y deja tu tiempo en un leaderboard en vivo. Hecho con React Three Fiber y Three.js, con Supabase detrás de las puntuaciones.",
      },
      statecraft: {
        alt: "Pantalla de inicio de sesión de StateCraft",
        description:
          "Un vision board para realinear tu ánimo. Entra con Google o GitHub, reúne las imágenes que te mueven y ábrelas donde sea: se instala como una app y funciona sin conexión. Mi primer proyecto full-stack, hoy en Next.js 16 y React 19.",
      },
      indentura: {
        alt: "Dashboard de Indentura",
        description:
          "Interfaz financiera construida desde Figma: más de 20 pantallas en Next.js y Shadcn UI dentro de un monorepo, con un sistema de diseño compartido, dashboards con Recharts y formularios validados.",
      },
      charta: {
        alt: "Interfaz de Get Charta",
        description:
          "Renovación de la interfaz de una plataforma de negociación de smart contracts. Reconstruí desde Figma los paneles de negociación y los formularios complejos sobre un nuevo sistema de diseño en Chakra UI, conservando la lógica existente.",
      },
      vanargand: {
        alt: "Sitio web de Vanargand Lodge",
        description:
          "Sitio web para un lodge en Daggett, Michigan, hecho en FrontPorch Solutions con Next.js, TypeScript y Tailwind CSS.",
      },
      cartagena: {
        alt: "Sitio web del Cartagena Music Festival 2021",
        description:
          "Con ImageID en 2021 diseñé y construí la programación, las páginas de artistas y secciones clave del sitio del Cartagena Music Festival.",
      },
      kamaredine: {
        alt: "Sitio web de Kamaredine Properties",
        description:
          "Sitio web para un hotel en Burgas, Bulgaria, en inglés, búlgaro y ruso. No había Figma: me entregaron un stylescape y lo convertí en un sitio responsive con WordPress y Elementor, iterando el layout.",
      },
    },
  },
  experience: {
    title: "Experiencia",
    logoAlt: "logo",
    items: {
      mileage: {
        position: "Head of Development",
        time: "Noviembre de 2025 – actualidad",
        description:
          "Dirijo el área de desarrollo en Mileage Design: defino procesos técnicos, estándares y flujos de entrega. Me especializo en temas de WordPress totalmente a medida con PHP y Advanced Custom Fields (ACF), con foco en arquitectura limpia, escalabilidad, rendimiento y mantenimiento a largo plazo, en lugar de soluciones basadas en page builders.",
      },
      contender: {
        position: "Desarrollador web",
        time: "Marzo de 2024 – julio de 2025",
        description:
          "Como único desarrollador de la agencia, construí y optimicé sus sitios web y tomé todas las decisiones técnicas. Por el camino asumí la medición de eventos con GTM y GA, y el SEO.",
      },
      wyn: {
        position: "Webmaster",
        time: "Diciembre de 2022 – mayo de 2023",
        description:
          "En una agencia de marketing para concesionarios de autos, construí y gestioné landing pages en muchos sitios de concesionarios en EE. UU. y seguí su rendimiento.",
      },
      fps: {
        position: "QA Developer",
        time: "Agosto de 2021 – octubre de 2022",
        description:
          "Probé funcionalidad y fidelidad visual contra Figma, y usé mi formación en diseño para proponer mejoras donde los proyectos antiguos no tenían referencia. También fui el desarrollador front-end de respaldo, con CSS, PHP y Next.js.",
      },
      imageid: {
        position: "Webmaster",
        time: "Abril de 2021 – agosto de 2021",
        description:
          "En una de las agencias de marketing más grandes de Colombia, gestioné varios sitios de WordPress hechos con Elementor, WPBakery y Beaver Builder, y sus bases de datos de e-commerce.",
      },
      cwd: {
        position: "Desarrollador web",
        time: "Enero de 2021 – abril de 2021",
        description:
          "Desarrollador front-end en una agencia de marketing de Chattanooga, Tennessee, construyendo sitios con Elementor con un alto estándar visual.",
      },
    },
  },
  path: {
    title: "Mi camino",
    intro: "Sin universidad ni bootcamp. Cursos, proyectos propios y trabajo real, un paso a la vez.",
    items: [
      {
        year: "2016",
        title: "Diseño web freelance",
        text: "Empecé diseñando sitios web para clientes en Fiverr y aprendí UI haciéndolo.",
      },
      {
        year: "2018",
        title: "HTML y CSS",
        text: "Aprendí por mi cuenta las bases de la web en SoloLearn.",
        url: "https://www.sololearn.com/Certificate/CT-OMSJVAQ8/pdf",
        logo: "soloLearn",
      },
      {
        year: "2019",
        title: "Fundamentos de programación",
        text: "Platzi me llevó de cero a escribir JavaScript y construir un pequeño juego web.",
        url: "https://platzi.com/p/jorgerondon/curso/1050-course/diploma/detalle/",
        logo: "platzi",
      },
      {
        year: "2019",
        title: "Responsive Web Design",
        text: "Certificación de freeCodeCamp: Flexbox, Grid y formularios accesibles.",
        url: "https://www.freecodecamp.org/certification/georgejfrj/responsive-web-design",
        logo: "freeCodeCamp",
      },
      {
        year: "2020",
        title: "Fundamentos de JavaScript",
        text: "De vuelta a SoloLearn para afianzar JavaScript.",
        url: "https://www.sololearn.com/Certificate/CT-ANS4JHDJ/pdf",
        logo: "soloLearn",
      },
      {
        year: "2021",
        title: "Primer trabajo como desarrollador",
        text: "Del diseño al código: front-end para una agencia de EE. UU. y luego webmaster en Colombia.",
      },
      {
        year: "2023",
        title: "JavaScript Algorithms & Data Structures",
        text: "Certificación de freeCodeCamp, con programación orientada a objetos y funcional.",
        url: "https://www.freecodecamp.org/certification/georgejfrj/javascript-algorithms-and-data-structures",
        logo: "freeCodeCamp",
      },
      {
        year: "2025",
        title: "Mi primera app full-stack",
        text: "StateCraft: inicio de sesión, base de datos y modo sin conexión, hecha y lanzada por mi cuenta.",
      },
      {
        year: "2025",
        title: "Head of Development",
        text: "En noviembre pasé a tiempo completo en Mileage Design, dirigiendo desarrollo.",
      },
      {
        year: "2026",
        title: "Construir con agentes, una tarea a la vez",
        text: "Varias sesiones de Claude Code con reglas claras se volvieron mi forma de trabajar, y lancé PairCraft y Void Runner.",
      },
    ],
  },
  contact: {
    title: "Hablemos",
    pitch:
      "¿Tienes un proyecto en mente? Tomo algunos proyectos freelance junto a mis propios productos. Escríbeme o búscame en LinkedIn.",
    thanks: "Gracias por pasar",
    backToTop: ["Volver", "arriba"],
  },
};

export default es;
