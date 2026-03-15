import { Locale } from "@/lib/locales";
import { SiteContent } from "@/data/types";

export const resumeByLocale: Record<Locale, string> = {
  pt: "/resume/paulo-mateus-pt.pdf",
  en: "/resume/paulo-mateus-en.pdf",
  es: "/resume/paulo-mateus-es.pdf",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/PauloMats", icon: "github" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paulomatsdev/",
    icon: "linkedin" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/paulomatss",
    icon: "instagram" as const,
  },
];

export const siteContent: SiteContent = {
  seo: {
    title: "Paulo Mateus | Senior Software Engineer",
    description:
      "Portfólio de Paulo Mateus com experiência em produtos web, Android, front-end escalável, back-end e entrega full-cycle.",
  },
  header: {
    availability: {
      pt: "Disponível para novos desafios",
      en: "Open to new opportunities",
      es: "Disponible para nuevos desafíos",
    },
    nav: [
      { href: "#highlights", label: { pt: "Diferenciais", en: "Highlights", es: "Diferenciales" } },
      { href: "#about", label: { pt: "Sobre", en: "About", es: "Sobre mí" } },
      { href: "#experience", label: { pt: "Experiência", en: "Experience", es: "Experiencia" } },
      { href: "#projects", label: { pt: "Projetos", en: "Projects", es: "Proyectos" } },
      { href: "#certificates", label: { pt: "Certificados", en: "Certificates", es: "Certificados" } },
      { href: "#contact", label: { pt: "Contato", en: "Contact", es: "Contacto" } },
    ],
    themeToggle: {
      pt: "Alternar tema",
      en: "Toggle theme",
      es: "Cambiar tema",
    },
    languageLabel: { pt: "Idioma", en: "Language", es: "Idioma" },
  },
  hero: {
    eyebrow: {
      pt: "Senior Software Engineer · React · Next.js · Node.js · Kotlin",
      en: "Senior Software Engineer · React · Next.js · Node.js · Kotlin",
      es: "Senior Software Engineer · React · Next.js · Node.js · Kotlin",
    },
    title: {
      pt: "Portfólio reconstruído para destacar produto, código e entrega de ponta a ponta.",
      en: "A rebuilt portfolio designed to highlight product thinking, code quality and end-to-end delivery.",
      es: "Un portafolio reconstruido para destacar producto, código y entrega de punta a punta.",
    },
    description: {
      pt: "Sou Paulo Mateus, engenheiro de software full stack com foco em interfaces robustas, acessibilidade, arquitetura e evolução contínua. Atuo entre produto, front-end, back-end e mobile para transformar ideia em software utilizável.",
      en: "I am Paulo Mateus, a full stack software engineer focused on robust interfaces, accessibility, architecture and continuous evolution. I work across product, frontend, backend and mobile to turn ideas into usable software.",
      es: "Soy Paulo Mateus, ingeniero de software full stack enfocado en interfaces robustas, accesibilidad, arquitectura y evolución continua. Trabajo entre producto, frontend, backend y mobile para convertir ideas en software usable.",
    },
    primaryCta: { pt: "Ver projetos", en: "See projects", es: "Ver proyectos" },
    secondaryCta: { pt: "Entrar em contato", en: "Get in touch", es: "Entrar en contacto" },
    resumeCta: { pt: "Baixar currículo", en: "Download resume", es: "Descargar CV" },
    profileCardTitle: {
      pt: "Engenharia com visão de produto",
      en: "Engineering with product awareness",
      es: "Ingeniería con visión de producto",
    },
    profileCardDescription: {
      pt: "Da arquitetura ao deploy, com foco em performance, acessibilidade, UX limpa e base preparada para crescer.",
      en: "From architecture to deployment, focused on performance, accessibility, clean UX and a base that can evolve safely.",
      es: "De la arquitectura al deploy, con foco en rendimiento, accesibilidad, UX limpia y una base preparada para crecer.",
    },
    stats: [
      {
        value: "4+",
        label: {
          pt: "anos de experiência prática",
          en: "years of hands-on experience",
          es: "años de experiencia práctica",
        },
      },
      {
        value: "1M+",
        label: {
          pt: "usuários em produto internacional",
          en: "users in an international product",
          es: "usuarios en un producto internacional",
        },
      },
      {
        value: "90+",
        label: {
          pt: "Lighthouse em entregas PWA",
          en: "Lighthouse on PWA deliveries",
          es: "Lighthouse en entregas PWA",
        },
      },
    ],
    badges: [
      {
        pt: "Frontend sênior com foco em acessibilidade",
        en: "Senior frontend with accessibility focus",
        es: "Frontend senior con foco en accesibilidad",
      },
      {
        pt: "Back-end e dados para produto real",
        en: "Backend and data for real products",
        es: "Backend y datos para productos reales",
      },
      {
        pt: "Android nativo com Kotlin",
        en: "Native Android with Kotlin",
        es: "Android nativo con Kotlin",
      },
    ],
  },
  about: {
    title: { pt: "Além do código", en: "Beyond the code", es: "Más allá del código" },
    intro: {
      pt: "Uma base moderna serve para mais do que aparência: ela deixa o portfólio fácil de manter, expandir e adaptar ao próximo passo da carreira.",
      en: "A modern foundation does more than improve visuals: it keeps the portfolio easy to maintain, expand and adapt to the next career move.",
      es: "Una base moderna hace más que mejorar la estética: mantiene el portafolio fácil de mantener, ampliar y adaptar al siguiente paso de la carrera.",
    },
    paragraphs: [
      {
        pt: "Tenho experiência com Clean Code, design de componentes, DevSecOps e fluxos de entrega contínua. Gosto de trabalhar em times colaborativos, revisar PRs, melhorar padrões e manter software legível mesmo quando o escopo cresce.",
        en: "I have experience with Clean Code, component design, DevSecOps and continuous delivery workflows. I like collaborating in teams, reviewing PRs, improving standards and keeping software readable as scope grows.",
        es: "Tengo experiencia con Clean Code, diseño de componentes, DevSecOps y flujos de entrega continua. Me gusta colaborar en equipos, revisar PRs, mejorar estándares y mantener el software legible cuando el alcance crece.",
      },
      {
        pt: "No mobile, exploro Kotlin e arquitetura Android. No web, transito entre React/Next.js, Node.js, APIs, bancos relacionais e integrações que exigem confiabilidade.",
        en: "On mobile, I work with Kotlin and Android architecture. On the web, I move between React/Next.js, Node.js, APIs, relational databases and integrations that need reliability.",
        es: "En mobile trabajo con Kotlin y arquitectura Android. En web me muevo entre React/Next.js, Node.js, APIs, bases de datos relacionales e integraciones que exigen confiabilidad.",
      },
    ],
    facts: [
      {
        label: { pt: "Foco atual", en: "Current focus", es: "Foco actual" },
        value: {
          pt: "Produtos web escaláveis com UX clara e engenharia sólida.",
          en: "Scalable web products with clear UX and solid engineering.",
          es: "Productos web escalables con UX clara e ingeniería sólida.",
        },
      },
      {
        label: { pt: "Trabalho melhor em", en: "Best work mode", es: "Rindo mejor en" },
        value: {
          pt: "Ambientes colaborativos, com autonomia e critério técnico.",
          en: "Collaborative environments with autonomy and technical rigor.",
          es: "Entornos colaborativos con autonomía y criterio técnico.",
        },
      },
      {
        label: {
          pt: "Interesses paralelos",
          en: "Parallel interests",
          es: "Intereses paralelos",
        },
        value: {
          pt: "Cibersegurança, Android nativo e produtos com IA aplicada.",
          en: "Cybersecurity, native Android and products with applied AI.",
          es: "Ciberseguridad, Android nativo y productos con IA aplicada.",
        },
      },
    ],
  },
  highlights: {
    title: { pt: "Diferenciais na prática", en: "Practical differentiators", es: "Diferenciales en la práctica" },
    description: {
      pt: "O novo layout organiza a narrativa profissional em blocos claros: visão de produto, stack, experiência, provas de execução e contato.",
      en: "The new layout organizes the professional narrative into clear blocks: product thinking, stack, experience, proof of execution and contact.",
      es: "El nuevo layout organiza la narrativa profesional en bloques claros: visión de producto, stack, experiencia, evidencia de ejecución y contacto.",
    },
    items: [
      {
        title: { pt: "Entrega full-cycle", en: "Full-cycle delivery", es: "Entrega full-cycle" },
        description: {
          pt: "Da ideia ao deploy com arquitetura, observabilidade, DX e manutenção pensadas desde o início.",
          en: "From idea to deployment with architecture, observability, DX and maintenance considered from day one.",
          es: "De la idea al deploy con arquitectura, observabilidad, DX y mantenimiento pensados desde el inicio.",
        },
      },
      {
        title: { pt: "Front-end com critério", en: "Frontend with rigor", es: "Frontend con criterio" },
        description: {
          pt: "Componentes reutilizáveis, acessibilidade real, responsividade e performance como requisitos de produto.",
          en: "Reusable components, real accessibility, responsiveness and performance treated as product requirements.",
          es: "Componentes reutilizables, accesibilidad real, responsividad y rendimiento tratados como requisitos de producto.",
        },
      },
      {
        title: { pt: "Back-end que sustenta", en: "Backend that holds up", es: "Backend que sostiene" },
        description: {
          pt: "APIs, banco de dados, filas, integrações e desenho técnico voltados para escala e confiabilidade.",
          en: "APIs, databases, queues, integrations and technical design aimed at scale and reliability.",
          es: "APIs, base de datos, colas, integraciones y diseño técnico orientado a escala y confiabilidad.",
        },
      },
      {
        title: { pt: "Aprendizado contínuo", en: "Continuous learning", es: "Aprendizaje continuo" },
        description: {
          pt: "Evolução constante entre web, mobile, segurança e IA aplicada sem sacrificar fundamentos.",
          en: "Constant growth across web, mobile, security and applied AI without sacrificing fundamentals.",
          es: "Evolución constante entre web, mobile, seguridad e IA aplicada sin sacrificar fundamentos.",
        },
      },
    ],
  },
  skills: {
    title: { pt: "Caixinha de ferramentas", en: "Toolbox", es: "Caja de herramientas" },
    description: {
      pt: "As áreas abaixo resumem onde costumo agregar mais valor em produto, implementação e evolução da base.",
      en: "The areas below summarize where I tend to add the most value in product work, implementation and platform evolution.",
      es: "Las áreas a continuación resumen dónde suelo aportar más valor en producto, implementación y evolución de la base.",
    },
    items: [
      {
        title: { pt: "Web engineering", en: "Web engineering", es: "Web engineering" },
        description: {
          pt: "React, Next.js, TypeScript e componentes escaláveis com foco em clareza, manutenção e UX.",
          en: "React, Next.js, TypeScript and scalable components with a focus on clarity, maintenance and UX.",
          es: "React, Next.js, TypeScript y componentes escalables con foco en claridad, mantenimiento y UX.",
        },
      },
      {
        title: { pt: "Design e interface", en: "Design and interface", es: "Diseño e interfaz" },
        description: {
          pt: "Layouts modernos, hierarquia visual consistente, dark/light mode e experiência pensada para desktop e mobile.",
          en: "Modern layouts, consistent visual hierarchy, dark/light mode and an experience designed for desktop and mobile.",
          es: "Layouts modernos, jerarquía visual consistente, dark/light mode y una experiencia pensada para desktop y mobile.",
        },
      },
      {
        title: { pt: "Segurança e confiabilidade", en: "Security and reliability", es: "Seguridad y confiabilidad" },
        description: {
          pt: "Práticas secure-by-design, atenção a LGPD/GDPR, observabilidade e cuidado com fluxos críticos.",
          en: "Secure-by-design practices, attention to LGPD/GDPR, observability and care for critical flows.",
          es: "Prácticas secure-by-design, atención a LGPD/GDPR, observabilidad y cuidado con flujos críticos.",
        },
      },
      {
        title: { pt: "Android nativo", en: "Native Android", es: "Android nativo" },
        description: {
          pt: "Kotlin, arquitetura mobile e interfaces performáticas para produtos que exigem experiência fluida.",
          en: "Kotlin, mobile architecture and performant interfaces for products that demand smooth experiences.",
          es: "Kotlin, arquitectura mobile e interfaces performantes para productos que exigen una experiencia fluida.",
        },
      },
    ],
  },
  experience: {
    title: { pt: "Experiência profissional", en: "Professional experience", es: "Experiencia profesional" },
    description: {
      pt: "Casos corporativos onde produto, tecnologia e consistência de entrega se encontraram em ambiente real.",
      en: "Corporate cases where product, technology and delivery consistency came together in real-world environments.",
      es: "Casos corporativos donde producto, tecnología y consistencia de entrega se encontraron en entornos reales.",
    },
    visitLabel: { pt: "Abrir projeto", en: "Open project", es: "Abrir proyecto" },
  },
  projects: {
    title: { pt: "Projetos selecionados", en: "Selected projects", es: "Proyectos seleccionados" },
    description: {
      pt: "Uma coleção de projetos pessoais, desafios técnicos e produtos em evolução, agora organizados em cards mais fáceis de manter e expandir.",
      en: "A collection of personal projects, technical challenges and evolving products, now organized into cards that are easier to maintain and expand.",
      es: "Una colección de proyectos personales, retos técnicos y productos en evolución, ahora organizados en cards más fáciles de mantener y ampliar.",
    },
    activeLabel: { pt: "Publicado", en: "Live", es: "Publicado" },
    buildingLabel: { pt: "Em evolução", en: "In progress", es: "En evolución" },
    actionLabels: {
      live: { pt: "Ver projeto", en: "View project", es: "Ver proyecto" },
      github: { pt: "GitHub", en: "GitHub", es: "GitHub" },
      video: { pt: "Ver demo", en: "Watch demo", es: "Ver demo" },
    },
    disabledLabel: { pt: "Em breve", en: "Coming soon", es: "Próximamente" },
  },
  certificates: {
    title: { pt: "Certificados e formação", en: "Certificates and education", es: "Certificados y formación" },
    description: {
      pt: "Em vez de um carrossel improvisado, a seção foi redesenhada como vitrine navegável com leitura confortável em desktop e mobile.",
      en: "Instead of an improvised carousel, the section was redesigned as a browsable showcase with comfortable reading on desktop and mobile.",
      es: "En lugar de un carrusel improvisado, la sección fue rediseñada como una vitrina navegable con lectura cómoda en desktop y mobile.",
    },
  },
  contact: {
    title: { pt: "Vamos construir algo bom", en: "Let's build something solid", es: "Construyamos algo sólido" },
    description: {
      pt: "Se você procura alguém para organizar interface, melhorar experiência, estruturar um front-end moderno ou tocar uma entrega full-cycle, podemos conversar.",
      en: "If you need someone to organize the interface, improve UX, structure a modern frontend or drive a full-cycle delivery, we can talk.",
      es: "Si buscas a alguien para organizar la interfaz, mejorar la UX, estructurar un frontend moderno o llevar una entrega full-cycle, podemos hablar.",
    },
    primaryCta: { pt: "Enviar e-mail", en: "Send email", es: "Enviar email" },
    secondaryCta: { pt: "Abrir LinkedIn", en: "Open LinkedIn", es: "Abrir LinkedIn" },
    footerNote: {
      pt: "Portfólio redesenhado em Next.js, TypeScript e Tailwind para uma base realmente reutilizável.",
      en: "Portfolio redesigned with Next.js, TypeScript and Tailwind for a truly reusable foundation.",
      es: "Portafolio rediseñado con Next.js, TypeScript y Tailwind para una base realmente reutilizable.",
    },
  },
};
