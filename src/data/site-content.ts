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
      "Portfólio de Paulo Mateus, engenheiro de software sênior com 5+ anos de experiência em produtos web, mobile e soluções full stack.",
  },
  header: {
    availability: {
      pt: "Disponível para oportunidades sênior",
      en: "Open to senior opportunities",
      es: "Disponible para oportunidades senior",
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
      pt: "Paulo Mateus · Senior Software Engineer",
      en: "Paulo Mateus · Senior Software Engineer",
      es: "Paulo Mateus · Senior Software Engineer",
    },
    title: {
      pt: "Engenheiro de Software Sênior criando produtos web e mobile com foco em escala, UX e performance.",
      en: "Senior Software Engineer building web and mobile products focused on scale, UX and performance.",
      es: "Ingeniero de Software Senior construyendo productos web y mobile con foco en escala, UX y rendimiento.",
    },
    description: {
      pt: "Tenho 5+ anos de experiência entregando interfaces robustas, PWAs, integrações e soluções full stack com React, Next.js, Node.js e Kotlin. Gosto de construir software bonito, acessível e confiável para ambientes reais de produção.",
      en: "I have 5+ years of experience delivering robust interfaces, PWAs, integrations and full stack solutions with React, Next.js, Node.js and Kotlin. I like building software that is polished, accessible and reliable in production.",
      es: "Tengo 5+ años de experiencia entregando interfaces robustas, PWAs, integraciones y soluciones full stack con React, Next.js, Node.js y Kotlin. Me gusta construir software pulido, accesible y confiable para producción.",
    },
    primaryCta: { pt: "Ver projetos", en: "See projects", es: "Ver proyectos" },
    secondaryCta: { pt: "Entrar em contato", en: "Get in touch", es: "Entrar en contacto" },
    resumeCta: { pt: "Baixar currículo", en: "Download resume", es: "Descargar CV" },
    profileCardTitle: {
      pt: "React, Next.js, Node.js e Kotlin",
      en: "React, Next.js, Node.js and Kotlin",
      es: "React, Next.js, Node.js y Kotlin",
    },
    profileCardDescription: {
      pt: "Experiência com arquitetura de front-end, integrações, produto digital e entregas de ponta a ponta com atenção a performance, acessibilidade e manutenção.",
      en: "Experience in frontend architecture, integrations, digital product work and end-to-end delivery with attention to performance, accessibility and maintainability.",
      es: "Experiencia en arquitectura frontend, integraciones, producto digital y entregas end-to-end con atención a rendimiento, accesibilidad y mantenibilidad.",
    },
    stats: [
      {
        value: "5+",
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
      pt: "Atuo como engenheiro de software sênior com olhar para produto, qualidade de código e experiência do usuário. Gosto de transformar requisitos complexos em software claro e utilizável.",
      en: "I work as a senior software engineer with a strong eye for product, code quality and user experience. I like turning complex requirements into clear and usable software.",
      es: "Actúo como ingeniero de software senior con mirada para producto, calidad de código y experiencia de usuario. Me gusta convertir requisitos complejos en software claro y usable.",
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
        label: { pt: "Trabalho melhor em", en: "Best work mode", es: "Trabajo mejor en" },
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
      pt: "Combino visão de produto, engenharia forte e execução prática para entregar software com cara de produto final.",
      en: "I combine product thinking, strong engineering and practical execution to deliver software that feels production-ready.",
      es: "Combino visión de producto, ingeniería sólida y ejecución práctica para entregar software con cara de producto final.",
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
      pt: "Estas são as frentes em que costumo gerar mais impacto, seja construindo do zero ou evoluindo uma base já em produção.",
      en: "These are the areas where I usually create the most impact, whether building from scratch or evolving a live codebase.",
      es: "Estas son las áreas donde suelo generar más impacto, tanto construyendo desde cero como evolucionando una base en producción.",
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
      pt: "Formações e certificações que reforçam a base técnica por trás da atuação em produto, engenharia web e desenvolvimento mobile.",
      en: "Education and certifications that reinforce the technical foundation behind my work in product, web engineering and mobile development.",
      es: "Formaciones y certificaciones que refuerzan la base técnica detrás de mi trabajo en producto, ingeniería web y desarrollo mobile.",
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
      pt: "Portfólio pessoal V2 construído com Next.js, TypeScript e Tailwind.",
      en: "Personal portfolio V2 built with Next.js, TypeScript and Tailwind.",
      es: "Portafolio personal V2 construido con Next.js, TypeScript y Tailwind.",
    },
    footerLinkLabel: {
      pt: "Quer ver a evolução ao longo dos anos? Acesse a primeira versão em HTML, CSS e JavaScript.",
      en: "Want to see the evolution over the years? Visit the first version built with HTML, CSS and JavaScript.",
      es: "¿Quieres ver la evolución a lo largo de los años? Mira la primera versión construida con HTML, CSS y JavaScript.",
    },
  },
};
