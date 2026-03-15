import {
  CertificateItem,
  ExperienceItem,
  ProjectItem,
  TechItem,
} from "@/data/types";

export const techStack: TechItem[] = [
  { name: "React", icon: "/images/tech/react.png" },
  { name: "Next.js", icon: "/images/tech/next.png" },
  { name: "Node.js", icon: "/images/tech/node.png" },
  { name: "NestJS", icon: "/images/tech/nest.png" },
  { name: "TypeScript", icon: "/images/tech/typescript.png" },
  { name: "JavaScript", icon: "/images/tech/javascript.png" },
  { name: "Prisma", icon: "/images/tech/prisma.png" },
  { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
  { name: "Docker", icon: "/images/tech/docker.png" },
  { name: "Azure DevOps", icon: "/images/tech/azure-devops.png" },
  { name: "Kotlin", icon: "/images/tech/kotlin.png" },
  { name: "Android", icon: "/images/tech/android.png" },
  { name: "Python", icon: "/images/tech/python.png" },
  { name: "C#", icon: "/images/tech/csharp.png" },
  { name: "Linux", icon: "/images/tech/linux.png" },
];

export const certificates: CertificateItem[] = [
  {
    title: {
      pt: "Formação em Desenvolvimento Full Stack",
      en: "Full Stack Development Program",
      es: "Formación en Desarrollo Full Stack",
    },
    issuer: { pt: "Trybe", en: "Trybe", es: "Trybe" },
    image: "/images/certificates/full-stack.jpeg",
  },
  {
    title: {
      pt: "Certificação Eletiva em Android",
      en: "Android Elective Certification",
      es: "Certificación Electiva en Android",
    },
    issuer: { pt: "Trybe", en: "Trybe", es: "Trybe" },
    image: "/images/certificates/android.jpeg",
  },
  {
    title: {
      pt: "Ciência da Computação",
      en: "Computer Science",
      es: "Ciencias de la Computación",
    },
    issuer: {
      pt: "Graduação em andamento",
      en: "Ongoing degree",
      es: "Grado en curso",
    },
    image: "/images/certificates/computer-science.jpeg",
  },
  {
    title: {
      pt: "Desenvolvimento Back-end",
      en: "Backend Development",
      es: "Desarrollo Backend",
    },
    issuer: { pt: "Trybe", en: "Trybe", es: "Trybe" },
    image: "/images/certificates/backend-developer.jpeg",
  },
  {
    title: {
      pt: "Desenvolvimento Front-end",
      en: "Frontend Development",
      es: "Desarrollo Frontend",
    },
    issuer: { pt: "Trybe", en: "Trybe", es: "Trybe" },
    image: "/images/certificates/frontend-developer.jpeg",
  },
  {
    title: {
      pt: "Fundamentos do Desenvolvimento Web",
      en: "Web Development Fundamentals",
      es: "Fundamentos del Desarrollo Web",
    },
    issuer: { pt: "Trybe", en: "Trybe", es: "Trybe" },
    image: "/images/certificates/web-development.jpeg",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "CP - Comboios de Portugal",
    role: {
      pt: "Senior Frontend Engineer via Inetum",
      en: "Senior Frontend Engineer via Inetum",
      es: "Senior Frontend Engineer vía Inetum",
    },
    image: "/images/projects/cp-site.png",
    href: "https://www.cp.pt/pt",
    tags: ["React", "TypeScript", "PWA", "WCAG", "CI/CD"],
    summaries: [
      {
        pt: "Atuação em produto com mais de 1 milhão de usuários ativos, entregando componentes escaláveis e experiência resiliente em cenários de alto tráfego.",
        en: "Worked on a product with more than 1 million active users, delivering scalable components and resilient UX for high-traffic scenarios.",
        es: "Actuación en un producto con más de 1 millón de usuarios activos, entregando componentes escalables y UX resiliente para alto tráfico.",
      },
      {
        pt: "Construção de PWA com cache offline, Lighthouse 90+ e foco em acessibilidade, testes automatizados e pipelines de entrega contínua.",
        en: "Built a PWA with offline cache, Lighthouse 90+ and a strong focus on accessibility, automated tests and continuous delivery pipelines.",
        es: "Construcción de una PWA con caché offline, Lighthouse 90+ y foco en accesibilidad, pruebas automatizadas y entrega continua.",
      },
    ],
  },
  {
    company: "BDMBank",
    role: {
      pt: "Frontend Developer",
      en: "Frontend Developer",
      es: "Frontend Developer",
    },
    image: "/images/projects/bdmbank-site.png",
    href: "https://bdmbank.com/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    summaries: [
      {
        pt: "Implementação de funcionalidades front-end para o site institucional, com foco em experiência moderna, navegação clara e consistência visual.",
        en: "Built frontend features for the institutional website, focusing on modern UX, clear navigation and visual consistency.",
        es: "Implementación de funcionalidades frontend para el sitio institucional, con foco en UX moderna, navegación clara y consistencia visual.",
      },
    ],
  },
  {
    company: "Dourado Cash",
    role: {
      pt: "Frontend Developer",
      en: "Frontend Developer",
      es: "Frontend Developer",
    },
    image: "/images/projects/dourado-site.png",
    href: "https://dourado.cash/",
    tags: ["React", "TypeScript", "Responsive UI"],
    summaries: [
      {
        pt: "Entrega de páginas institucionais com performance e responsividade, alinhando identidade visual, clareza de conteúdo e manutenção simples.",
        en: "Delivered institutional pages with performance and responsiveness, balancing visual identity, clear content and easy maintenance.",
        es: "Entrega de páginas institucionales con rendimiento y responsividad, equilibrando identidad visual, claridad de contenido y mantenimiento simple.",
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "pixeltruth",
    title: "PixelTruth",
    image: "/images/projects/pixeltruth.png",
    status: "active",
    description: {
      pt: "Plataforma full-cycle para detecção de mídia sintética, unindo UX/UI, back-end, infra e um motor probabilístico em Python para score confiável.",
      en: "Full-cycle synthetic media detection platform combining UX/UI, backend, infra and a probabilistic Python engine for reliable scoring.",
      es: "Plataforma full-cycle para detección de medios sintéticos, uniendo UX/UI, backend, infra y un motor probabilístico en Python para un score confiable.",
    },
    tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Redis", "Python", "Docker"],
    actions: [{ type: "live", href: "https://pixeltruth.com.br" }],
  },
  {
    slug: "wemovie",
    title: "WeMovie",
    image: "/images/projects/wemovie.png",
    status: "active",
    description: {
      pt: "Aplicativo Android em arquitetura MVVM para o desafio da WeFit, com catálogo de filmes, carrinho e fluxo de compra simplificado.",
      en: "Android app built with MVVM for the WeFit challenge, featuring a movie catalog, cart and simplified checkout flow.",
      es: "Aplicación Android construida con MVVM para el reto de WeFit, con catálogo de películas, carrito y flujo de compra simplificado.",
    },
    tags: ["Kotlin", "Android", "MVVM", "XML"],
    actions: [
      { type: "github", href: "https://github.com/PauloMats/WeFit-Challenge-WeMovie" },
      { type: "video", href: "https://github.com/PauloMats/WeFit-Challenge-WeMovie#demonstra%C3%A7%C3%A3o" },
    ],
  },
  {
    slug: "medihelp",
    title: "MediHelp",
    image: "/images/projects/medihelp.png",
    status: "building",
    description: {
      pt: "Ferramenta para apoiar equipes médicas em cálculos pediátricos, com proposta de produto focada em precisão, agilidade e interface simples.",
      en: "Tool to support medical teams with pediatric dosage calculations, designed around precision, speed and a clean interface.",
      es: "Herramienta para apoyar equipos médicos en cálculos pediátricos, pensada para precisión, agilidad e interfaz simple.",
    },
    tags: ["Next.js", "React", "NestJS", "Prisma", "PostgreSQL"],
    actions: [
      { type: "github", href: "https://github.com/PauloMats/MediSafe" },
      { type: "live", href: "https://medihelp-app.vercel.app/" },
    ],
  },
  {
    slug: "virtual-menu",
    title: "Virtual Menu",
    image: "/images/projects/virtual-menu.png",
    status: "building",
    description: {
      pt: "App Android com fluxo de listagem e detalhe de itens, explorando navegação, RecyclerView e estrutura de telas com dados locais.",
      en: "Android app with menu listing and detail flow, exploring navigation, RecyclerView and local-data screen architecture.",
      es: "App Android con flujo de listado y detalle de ítems, explorando navegación, RecyclerView y arquitectura de pantallas con datos locales.",
    },
    tags: ["Kotlin", "Android", "RecyclerView", "XML"],
    actions: [{ type: "github", href: "https://github.com/PauloMats/app-android-menu-virtual" }],
  },
  {
    slug: "login-screen",
    title: "Tela de Login",
    image: "/images/projects/login-screen.png",
    status: "building",
    description: {
      pt: "Projeto Android focado em layout, validações de interface e organização visual de uma experiência de autenticação mobile.",
      en: "Android project focused on layout, UI validation and visual organization for a mobile authentication experience.",
      es: "Proyecto Android enfocado en layout, validaciones de interfaz y organización visual de una experiencia de autenticación móvil.",
    },
    tags: ["Kotlin", "Android", "UI Validation", "XML"],
    actions: [{ type: "github", href: "https://github.com/PauloMats/android-tela-de-login" }],
  },
  {
    slug: "hub-lar",
    title: "Hub Lar",
    image: "/images/projects/hub-lar.png",
    status: "active",
    description: {
      pt: "Site institucional para negócio de impacto social, com foco em apresentação clara, contexto humano e navegação direta.",
      en: "Institutional website for a social impact business, focused on clear storytelling, human context and straightforward navigation.",
      es: "Sitio institucional para un negocio de impacto social, enfocado en storytelling claro, contexto humano y navegación directa.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    actions: [
      { type: "github", href: "https://github.com/PauloMats/Site-Hub-Lar" },
      { type: "live", href: "http://www.hublar.net" },
    ],
  },
  {
    slug: "pibtv",
    title: "PIBTV Website",
    image: "/images/projects/pibtv.png",
    status: "building",
    description: {
      pt: "Portal informativo e interativo em Next.js com visão de áreas públicas, conteúdo exclusivo e futuro painel administrativo.",
      en: "Informational and interactive portal in Next.js with public areas, exclusive content and a future admin panel.",
      es: "Portal informativo e interactivo en Next.js con áreas públicas, contenido exclusivo y un futuro panel administrativo.",
    },
    tags: ["Next.js", "TypeScript", "React", "Prisma", "NestJS"],
    actions: [
      { type: "live", href: "https://pibtv-website-next-frontend.vercel.app/" },
      { type: "github", href: "https://github.com/PauloMats/PIBTV-Website-Next" },
    ],
  },
  {
    slug: "be-mobile",
    title: "Be-Mobile Challenge",
    image: "/images/projects/be-mobile.png",
    status: "active",
    description: {
      pt: "Teste técnico em React + TypeScript com tabela responsiva, busca e consumo de API simulada para visualização de dados de colaboradores.",
      en: "React + TypeScript technical challenge with a responsive table, search and simulated API consumption for employee data visualization.",
      es: "Prueba técnica en React + TypeScript con tabla responsiva, búsqueda y consumo de API simulada para visualizar datos de colaboradores.",
    },
    tags: ["React", "TypeScript", "CSS", "JSON Server"],
    actions: [
      { type: "github", href: "https://github.com/PauloMats/Be-Desafio-Front-End" },
      { type: "video", href: "https://youtu.be/yhPcyT2_73Y?si=IVVuza51muIt-HMp" },
    ],
  },
  {
    slug: "recipes-app",
    title: "Recipes App",
    image: "/images/projects/recipes-app.png",
    status: "active",
    description: {
      pt: "Aplicação de receitas construída durante a formação Full Stack, com favoritos, timer e fluxo pensado para cozinhar com menos atrito.",
      en: "Recipe application built during full stack training, with favorites, timer and a flow designed to reduce friction while cooking.",
      es: "Aplicación de recetas construida durante la formación Full Stack, con favoritos, temporizador y flujo pensado para cocinar con menos fricción.",
    },
    tags: ["React", "Redux", "Context API", "TypeScript"],
    actions: [{ type: "github", href: "https://github.com/PauloMats/Recipes-App-Project" }],
  },
  {
    slug: "password-manager",
    title: "Password Manager",
    image: "/images/projects/password-manager.png",
    status: "active",
    description: {
      pt: "Gerenciador de senhas com foco em organização visual, estrutura de formulários e experiência prática para gestão segura de credenciais.",
      en: "Password manager focused on visual organization, form structure and a practical UX for safe credential management.",
      es: "Gestor de contraseñas centrado en organización visual, estructura de formularios y una UX práctica para gestionar credenciales de forma segura.",
    },
    tags: ["React", "JavaScript", "HTML", "CSS"],
    actions: [{ type: "github", href: "https://github.com/PauloMats/Password-Manager-App" }],
  },
  {
    slug: "pixels-art",
    title: "Pixels Art",
    image: "/images/projects/pixels-art.png",
    status: "active",
    description: {
      pt: "Quadro de pixel art em HTML, CSS e JavaScript que marcou o início da jornada prática em interfaces e manipulação de DOM.",
      en: "Pixel art board built with HTML, CSS and JavaScript that marked the beginning of hands-on work with interfaces and DOM manipulation.",
      es: "Tablero de pixel art en HTML, CSS y JavaScript que marcó el inicio del trabajo práctico con interfaces y manipulación del DOM.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    actions: [
      { type: "live", href: "https://paulomats.github.io/Pixels-Arte/" },
      { type: "github", href: "https://github.com/PauloMats/Pixels-Arte" },
    ],
  },
];
