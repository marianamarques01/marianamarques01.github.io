/**
 * Editorial content model.
 *
 * The page is intentionally written as one argument:
 * position → practice → evidence → stacks → invitation.
 */

export const site = {
  name: "Mariana Marques",
  role: "Product Engineer · Full-stack",
  location: "Belo Horizonte, MG",
  coordinates: "19.9167° S / 43.9345° W",
  phone: "(31) 98494-6938",
  email: "mariana.msamp@gmail.com",
  linkedin: "https://www.linkedin.com/in/mariana-marques-dev",
  github: "https://github.com/marianamarques01",
  instagram: "https://www.instagram.com/mrqsp",
  availability: "Open to remote roles",
  cv: {
    href: "/work/CV_Mariana_Marques_2026.docx",
    label: "Download CV",
  },
};

export type NavLink = {
  label: string;
  href: string;
  /** collapsed below this breakpoint to keep the bar from crowding on small screens */
  hideOn?: "sm" | "md";
};

export const nav = {
  wordmark: "mariana marques",
  links: [
    { label: "Projects", href: "/work" },
    { label: "Experience", href: "/about#trajectory" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ] as NavLink[],
  cta: "Contact",
};

export const hero = {
  eyebrow: "Product Engineer · Full-stack — Belo Horizonte, MG",
  thesisLines: [
    "Design and engineering,",
    "treated as one",
    "continuous system.",
  ],
  subline:
    "Product engineer with full-stack execution and a frontend focus. I build intelligent products at the intersection of design and code — from the first Figma frame to production features powered by LLMs — with hands-on experience shipping and maintaining web applications integrated with REST APIs and relational databases.",
  inquiry: "For business inquiries, email me at",
  meta: {
    section: "001 / HERO",
    stack: "React · TypeScript · Next.js · Node.js · LLM / RAG",
  },
};

export const lab = {
  eyebrow: "Mariana Marques — Product Engineer, Belo Horizonte MG",
  tagLeft: "Product Engineer",
  tagRight: "Design · Code · AI",
  cue: "Explore",
};

export const manifesto = {
  eyebrow: "The seam is the product",
  lines: ["Software becomes real", "where systems", "meet people."],
  statement:
    "That point is not a handoff. It is a discipline: understanding the system deeply enough to make complexity feel inevitable, legible, and human.",
  marginalia: [
    "Intent survives implementation.",
    "Interface decisions reach the architecture.",
    "Intelligence earns trust through evidence.",
  ],
};

export const practice = {
  eyebrow: "One practice, three movements",
  title: "I do not pass intent downstream. I carry it into production.",
  intro:
    "The tools change with the problem. The operating model does not: frame the right thing, build the whole experience, then prove it holds up in the real world.",
  principles: [
    {
      index: "01",
      verb: "Frame",
      title: "Make the problem legible.",
      body:
        "Map actors, states, constraints, and failure modes before interface polish turns assumptions into expensive decisions.",
      evidence: "Flows · prototypes · product states · system boundaries",
    },
    {
      index: "02",
      verb: "Build",
      title: "Own the seam.",
      body:
        "Connect interaction design to frontend architecture, APIs, data, and AI behavior so the product reads as one coherent system.",
      evidence: "React · TypeScript · Next.js · Python · PostgreSQL",
    },
    {
      index: "03",
      verb: "Prove",
      title: "Evidence over theatre.",
      body:
        "Use tests, observability, accessibility, and evaluation loops to make ambitious experiences dependable after the demo.",
      evidence: "Playwright · Vitest · Sentry · RAG · LLM evaluation",
    },
  ],
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** hero fills the case; detail sits in the supporting strip */
  kind: "hero" | "detail";
};

export type Project = {
  id:
    | "avaliza"
    | "reppub"
    | "broto"
    | "spacesense"
    | "collectycard"
    | "superenge"
    | "fumec"
    | "liderban"
    | "link"
    | "cineclube"
    | "desenvolve"
    | "vinilvivo"
    | "sacha"
    | "sws";
  title: string;
  domain: string;
  year: string;
  role: string;
  thesis: string;
  description: string;
  stack: string[];
  evidence: string[];
  metric: ProjectMetric;
  /** real product screenshots — proof of execution */
  shots?: ProjectShot[];
  url?: string;
  repo?: string;
  featured?: boolean;
  hidden?: boolean;
};

export const projects: { intro: string; items: Project[] } = {
  intro:
    "Selected projects across SaaS, EdTech, PropTech, and institutional sites — with stack, scope, and what shipped.",
  items: [
    {
      id: "avaliza",
      featured: true,
      metric: { value: "14", label: "integrated operational modules" },
      title: "Avaliza 2.0",
      domain: "PropTech · Fintech · Multi-tenant SaaS",
      year: "2026",
      role: "Lead Frontend Engineer · UI/UX Design · Backend support as needed",
      thesis:
        "Multi-tenant platform for the full rental-guarantee lifecycle — proposal through renewal.",
      description:
        "B2B fintech/regtech SaaS for real-estate agencies: credit, contracts, delinquency, legal, finance, renewals, and tenant portals in one operation. I led frontend (Next.js BFF, RBAC across 28 roles), shipping accounts payable, delinquency, legal exoneration, interactive training, and credit UX.",
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Django REST",
        "PostgreSQL",
        "AWS Bedrock",
      ],
      evidence: [
        "66 routes · 244 BFF handlers · Django backend, no exposed CORS",
        "Liza: auditable operational AI with human handoff",
        "Hybrid credit engine, SLA workflows, public tenant portals",
        "589+ components · Vitest · sandbox demos and typed fallbacks",
      ],
      shots: [
        {
          src: "/work/capa_avaliza.png",
          alt: "Avaliza on a laptop: portfolio dashboard with Liza AI prioritization, contract stats, and a prioritized work queue.",
          width: 1555,
          height: 1037,
          kind: "hero",
        },
        {
          src: "/work/avaliza-carteira.png",
          alt: "Avaliza portfolio dashboard: Liza ranks the next contract to act on above active-contract stats and a prioritized work queue.",
          width: 1024,
          height: 629,
          kind: "detail",
        },
        {
          src: "/work/avaliza-contrato.png",
          alt: "Avaliza contract detail: tenant dossier, lease values, and an approved credit score in one operational view.",
          width: 1024,
          height: 629,
          kind: "detail",
        },
      ],
    },
    {
      id: "broto",
      featured: true,
      metric: { value: "~20", label: "Deno Edge Functions" },
      title: "Broto",
      domain: "EdTech · B2B2C",
      year: "2024",
      role: "Solo Product Engineer",
      thesis: "ENEM prep platform for students, teachers, and schools with adaptive practice and AI feedback.",
      description:
        "An ENEM preparation platform for students, teachers, and schools. Practice, study routines, essay feedback, and learning analytics live in a multi-tenant product with intelligence grounded in official material.",
      stack: [
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Deno",
        "OpenAI",
      ],
      evidence: [
        "Student app and school console in one monorepo",
        "RAG essay feedback grounded in INEP guidelines",
        "BKT mastery, FSRS review, and contextual AI chat",
        "Row-level tenant isolation across 26 migrations",
      ],
      shots: [
        {
          src: "/work/capa_broto.png",
          alt: "Broto on a laptop: student dashboard with growth level, AI-suggested review, and performance-by-area stats.",
          width: 1446,
          height: 962,
          kind: "hero",
        },
        {
          src: "/work/broto-dashboard.png",
          alt: "Broto's student dashboard: a growth-themed level widget, an AI-suggested priority review, and a performance-by-area table beside the day's streak and missions.",
          width: 2804,
          height: 1674,
          kind: "detail",
        },
        {
          src: "/work/broto-area-estudo.webp",
          alt: "Broto's study-area picker: four ENEM knowledge areas with per-topic accuracy, plus dedicated essay practice and a customizable exam-style session.",
          width: 2000,
          height: 1139,
          kind: "detail",
        },
      ],
      url: "https://www.brotoenem.com.br",
    },
    {
      id: "spacesense",
      metric: { value: "10+", label: "developer ecosystems detected" },
      title: "SpaceSense",
      domain: "macOS · Desktop utility",
      year: "2025",
      role: "Solo Product Engineer",
      thesis: "macOS disk scanner for projects, Docker, caches, and APFS-aware storage analysis.",
      description:
        "A native-feeling desktop utility that understands projects, caches, Docker artifacts, APFS, hardlinks, and symlinks — while keeping the interface responsive through long-running scans.",
      stack: [
        "Electron",
        "React",
        "TypeScript",
        "Worker Threads",
        "Zustand",
        "Node.js",
      ],
      evidence: [
        "Asynchronous scanner with real-time cancellation",
        "APFS-aware physical-size calculation",
        "Docker volumes, images, and stopped containers",
        "Local cache for near-instant repeat scans",
      ],
      shots: [
        {
          src: "/work/spacesense-overview.webp",
          alt: "SpaceSense's overview: real-time disk usage, a Quick Clean suggestion, and a ranked list of the machine's largest space consumers.",
          width: 2000,
          height: 1259,
          kind: "hero",
        },
      ],
    },
    {
      id: "superenge",
      metric: { value: "1-click", label: "copy-ready HTML export" },
      title: "Superenge",
      domain: "Turnkey construction · Internal tool",
      year: "2024",
      role: "Solo Frontend Developer",
      thesis: "Internal tool to generate on-brand email signatures with live preview and HTML export.",
      description:
        "Superenge is a turnkey industrial and corporate construction company active since 2009. An internal email-signature generator: employees fill a short form, preview the institutional layout live, and copy HTML that renders reliably in Gmail and Outlook.",
      stack: ["HTML", "CSS", "JavaScript"],
      evidence: [
        "Live preview synced to form inputs",
        "Table-based HTML with inline styles for email clients",
        "PBQP-H and ISO certification seals baked into the template",
        "Locked corporate palette and typography",
      ],
      shots: [
        {
          src: "/work/assinatura_superenge.jpeg",
          alt: "Superenge email signature preview: institutional layout with live form fields and copy-ready HTML export.",
          width: 1170,
          height: 619,
          kind: "hero",
        },
      ],
      repo: "https://github.com/marianamarques01/superenge",
    },
    {
      id: "fumec",
      hidden: true,
      metric: { value: "5", label: "MEC course rating surfaced" },
      title: "Computação Gráfica · FUMEC",
      domain: "Higher education · Institutional site",
      year: "2024",
      role: "Solo Frontend Developer",
      thesis: "Landing page for FUMEC's Computação Gráfica degree and enrollment flow.",
      description:
        "An institutional landing experience for FUMEC's Bacharelado em Computação Gráfica — the only undergraduate program of its kind in Brazil — built to translate labs, career paths, and MEC recognition into a clear enrollment story.",
      stack: ["HTML", "CSS", "JavaScript"],
      evidence: [
        "Curriculum, labs, and career outcomes in one scroll narrative",
        "Enrollment path tied to the official selective-process flow",
        "Responsive layout for mobile-first discovery",
        "Brand-aligned visual system for a creative-tech program",
      ],
      url: "https://processoseletivo.fumec.br/cursos/computacao-grafica/",
    },
    {
      id: "liderban",
      metric: { value: "5→1", label: "static pages into one CMS" },
      title: "Liderban",
      domain: "Mobile sanitation · Web",
      year: "2024",
      role: "Solo Full-stack Developer",
      thesis: "Custom WordPress theme and CMS for a mobile sanitation company.",
      description:
        "Liderban is a Brazilian mobile sanitation company tackling basic sanitation access. A custom WordPress theme and editorial system for their institutional site.",
      stack: ["WordPress", "PHP", "MariaDB", "Docker"],
      evidence: ["Custom theme", "Instagram integration", "Structured SEO"],
      shots: [
        {
          src: "/work/liderban-hero.webp",
          alt: "Liderban's homepage: a full-bleed hero photograph curves into the 'Quem Somos' section below.",
          width: 2000,
          height: 1094,
          kind: "hero",
        },
      ],
      url: "https://liderban.com.br",
    },
    {
      id: "link",
      metric: { value: "0", label: "backend dependencies" },
      title: "LINK comunicação",
      domain: "Strategic comms · Web",
      year: "2024",
      role: "Solo Frontend Developer",
      thesis: "Static React site for a strategic communications agency with data-driven pages and CI deploy.",
      description:
        "LINK is a strategic communications agency — press, digital marketing, crisis management — with offices across Brazil. A static React site with dynamic service routes, cases, and automated delivery.",
      stack: ["React", "TypeScript", "Vite", "GitHub Actions"],
      evidence: ["Data-driven content", "Custom responsive CSS", "Automated deploy"],
      shots: [
        {
          src: "/work/link-hero.webp",
          alt: "LINK Comunicação's homepage: a dotted trace motif frames the agency's positioning statement beside its origin story.",
          width: 2000,
          height: 1144,
          kind: "hero",
        },
        {
          src: "/work/link-areas.webp",
          alt: "LINK Comunicação's areas of practice: press relations, internal communication, and influencer marketing, each with its own case imagery.",
          width: 2000,
          height: 1144,
          kind: "detail",
        },
      ],
      url: "https://linkcomunicacao.com.br",
      repo: "https://github.com/marianamarques01/link",
    },
    {
      id: "cineclube",
      metric: { value: "100%", label: "membership card generated client-side" },
      title: "Cineclube Méliès",
      domain: "Culture · Experimental web",
      year: "2023",
      role: "Design + Frontend",
      thesis: "Film club website with procedural SVG artwork and a client-side membership card.",
      description:
        "An identity-led site with procedural SVG artwork and a browser-generated membership card.",
      stack: ["Next.js", "TypeScript", "Canvas API", "SVG"],
      evidence: ["Procedural artwork", "Canvas + QR card", "Motion accessibility"],
      shots: [
        {
          src: "/work/cineclube-hero.webp",
          alt: "Cineclube Méliès's homepage: a hand-illustrated moon mascot in a top hat over a dotted film-strip motif, with the club's title in a marquee typeface.",
          width: 2000,
          height: 1144,
          kind: "hero",
        },
        {
          src: "/work/cineclube-onde.webp",
          alt: "Cineclube Méliès's location section: an interactive map styled as a taped-in photograph beside a handwritten note with the venue address.",
          width: 2000,
          height: 1144,
          kind: "detail",
        },
      ],
    },
    {
      id: "desenvolve",
      featured: true,
      metric: { value: "1200+", label: "hours of recorded coursework" },
      title: "Projeto Desenvolve",
      domain: "GovTech · EdTech LMS",
      year: "2024",
      role: "Lead Frontend Engineer · UI/UX Design · Backend support as needed",
      thesis: "Municipal bootcamp LMS with courses, tracks, assessments, AI tutor, and job matching.",
      description:
        "A public-private program built with municipalities: residents learn full-stack development through project-based learning — an app and a site shipped in the first semester alone — inside a student platform with courses, tracks, projects, and assessments, backed by a 24/7 AI tutor and a job-matching network into partner companies.",
      stack: ["Angular", "TypeScript", "RxJS", "NgRx", "Node.js", "PostgreSQL"],
      evidence: [
        "Student LMS: courses, learning tracks, projects, and assessments in one dashboard",
        "24/7 in-platform AI tutor answering student questions",
        "Internal job-matching network connecting graduates to partner companies",
        "Multi-city rollout onboarding entire municipalities cohort by cohort",
      ],
      shots: [
        {
          src: "/work/capa_desenvolve.png",
          alt: "Projeto Desenvolve on a laptop: student LMS dashboard with courses, tracks, and learning progress.",
          width: 1531,
          height: 1072,
          kind: "hero",
        },
        {
          src: "/work/desenvolve1.jpeg",
          alt: "Projeto Desenvolve student dashboard: courses, learning tracks, projects, and progress in a dark LMS interface.",
          width: 1170,
          height: 661,
          kind: "detail",
        },
        {
          src: "/work/desenvolve-2.jpeg",
          alt: "Projeto Desenvolve login screen: split layout with CPF authentication and program branding.",
          width: 1170,
          height: 647,
          kind: "detail",
        },
      ],
      url: "https://projetodesenvolve.com.br",
    },
    {
      id: "reppub",
      featured: true,
      metric: { value: "8", label: "compatibility dimensions in matching" },
      title: "Reppub",
      domain: "PropTech · B2B2C",
      year: "2024",
      role: "Product Design + Full-stack Engineering",
      thesis: "Shared-housing platform that matches roommates and connects them to rental listings.",
      description:
        "A B2B2C platform that connects shared-housing candidates, forms compatibility-scored groups, and routes them into the real-estate rental flow — without fragmenting the journey across social networks, spreadsheets, and manual negotiation.",
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Vercel",
      ],
      evidence: [
        "Multi-dimensional matching across location, budget, routine, and lifestyle",
        "B2C candidate onboarding and B2B agency dashboards in one product",
        "Candidate, agency, and admin surfaces with white-label support",
        "Matching algorithm decoupled from credit, contracts, and rental infrastructure",
      ],
      shots: [
        {
          src: "/work/capa_reppub.png",
          alt: "Reppub on a laptop: shared-housing matching dashboard with compatibility-scored groups and candidate profiles.",
          width: 1920,
          height: 1080,
          kind: "hero",
        },
      ],
    },
    {
      id: "collectycard",
      featured: true,
      metric: { value: "3", label: "platforms shipped from one Expo codebase" },
      title: "CollectyCard",
      domain: "Social commerce · K-pop marketplace",
      year: "2025",
      role: "Solo Product Engineer",
      thesis: "K-pop photocard marketplace with group buys, P2P trading, chat, and reputation.",
      description:
        "A mobile-first marketplace for the K-pop photocard collecting community, unifying group buys (CEGs), peer-to-peer trading, personal collections, chat, and collector reputation. Rebuilt from an Ionic/Angular prototype into a universal Expo app for iOS, Android, and Web, backed by Supabase for auth, data, storage, and realtime.",
      stack: [
        "Expo",
        "React Native",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Zustand",
      ],
      evidence: [
        "Group-buy (CEG) creation and management with per-participant status",
        "P2P marketplace with listing reservation and sale states",
        "Realtime chat and notifications on Supabase Realtime",
        "Multi-step onboarding with ViaCEP lookup and LGPD data export",
      ],
      shots: [
        {
          src: "/work/capa_collecty.png",
          alt: "CollectyCard on a laptop: K-pop photocard marketplace with group buys, trading, and collector profiles.",
          width: 3957,
          height: 2657,
          kind: "hero",
        },
      ],
    },
    {
      id: "vinilvivo",
      metric: { value: "~90s", label: "dry time from spray to shelf" },
      title: "Vinil Vivo",
      domain: "E-commerce · Product landing page",
      year: "2026",
      role: "Solo Frontend Developer",
      thesis: "Product landing page for a vinyl-cleaning spray with specs, video, and checkout.",
      description:
        "A landing page for a vinyl-cleaning spray, built to make an invisible problem — groove dust, not sleeve dust — visible enough to act on. Product chemistry, usage yield, and a how-it-works video sit above the fold, next to a store-ready checkout path.",
      stack: ["React", "TypeScript", "Vite"],
      evidence: [
        "Static React storefront with a client-side cart",
        "Product-education stats (pH, yield, dry time) surfaced in the hero",
        "Custom dark visual identity built around vinyl and turntable motifs",
        "Embedded explainer video alongside the primary CTA",
      ],
      shots: [
        {
          src: "/work/vinil_vivo.jpeg",
          alt: "Vinil Vivo product landing page: dark vinyl-themed hero with product stats and checkout path above the fold.",
          width: 1600,
          height: 938,
          kind: "hero",
        },
      ],
      url: "https://vinilvivo.com.br",
    },
    {
      id: "sacha",
      metric: { value: "3", label: "learning paths in one journey" },
      title: "SACHA",
      domain: "EdTech · AI literacy",
      year: "2025",
      role: "Design + Frontend",
      thesis: "Educational prototype for AI literacy with guided dialogue and in-app activities.",
      description:
        "An educational prototype — Safe AI-Chatbot Highly Anthropomorphized — that helps learners meet Artificial Intelligence with calm, curiosity, and critical thinking. Dialogue, curated concepts, and in-app activities share one narrative voice, led by a literary mascot.",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      evidence: [
        "Interactive dialogue with SACHA as a guided conversational entry point",
        "Curated concept exploration on statistical and probabilistic models",
        "In-app activities that move beyond passive reading",
        "Research partnership with IFES Campus Vitória and UCLouvain",
      ],
      shots: [
        {
          src: "/work/sacha.png",
          alt: "SACHA educational prototype: guided AI literacy journey led by a literary mascot and conversational entry points.",
          width: 2840,
          height: 1668,
          kind: "hero",
        },
      ],
      url: "https://marianamarques01.github.io/sacha/",
      repo: "https://github.com/marianamarques01/sacha",
    },
    {
      id: "sws",
      metric: { value: "4", label: "service lines in one lead funnel" },
      title: "SWS Segurança",
      domain: "Security · Institutional site",
      year: "2024",
      role: "Solo Frontend Developer",
      thesis: "Institutional website for security and facilities services with lead capture and scheduling.",
      description:
        "An institutional website for a São Paulo security and facilities company active since 2004 — portaria, reception, cleaning, and remote monitoring for commercial buildings, worksites, and condominiums.",
      stack: ["React", "TypeScript", "Vite"],
      evidence: [
        "Service catalog spanning access control, cleaning, and remote surveillance",
        "Lead funnel with visit scheduling across condominiums and commercial sites",
        "Responsive marketing pages delivered as a static React SPA",
        "Positioning for integrated security and facilities outsourcing",
      ],
      shots: [
        {
          src: "/work/sws_seguranca.png",
          alt: "SWS Segurança institutional site: integrated security and facilities services with a trust-led marketing homepage.",
          width: 2804,
          height: 1658,
          kind: "hero",
        },
      ],
      url: "https://swsseguranca.com.br/",
    },
  ],
};

export const about = {
  meta: "002 / ABOUT",
  heading: "About",
  eyebrow: "Mariana Marques — Product Engineer",
  title: "I design the screen. I build what makes it true.",
  paragraphs: [
    "Product engineer with full-stack execution and a frontend focus. I specialize in accessible, user-centered interfaces integrated with REST APIs and relational databases — and in carrying product intent from discovery to production without losing it at the handoff.",
    "Growing experience in applied AI engineering — LLM API integration, RAG pipelines, and agent-oriented architectures — developed while building Broto, an adaptive learning platform powered by AI. I work in agile environments with designers and backend engineers across educational, industrial, and corporate products.",
  ],
  cta: "Selected work ↓",
};

export const stacks = {
  label: "Stacks",
  groups: [
    {
      name: "Front-end",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Angular",
        "Vue.js",
        "Quasar",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "SASS",
        "Tailwind CSS",
        "Redux",
        "NgRx",
        "RxJS",
        "Zustand",
        "Vite",
        "Electron",
        "Expo",
        "Micro-Frontends (MFEs)",
        "Canvas API",
        "SVG",
        "Figma",
        "UX/UI",
      ],
    },
    {
      name: "Back-end",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "Django",
        "Python",
        "Java (Spring Boot)",
        "Deno",
        "PHP",
        "RESTful APIs",
        "JWT Authentication",
        "Worker Threads",
      ],
    },
    {
      name: "Data & infra",
      items: [
        "PostgreSQL",
        "MySQL",
        "MariaDB",
        "MongoDB",
        "Prisma",
        "Supabase",
        "Docker",
        "Git & GitHub",
        "GitHub Actions",
        "CI/CD",
        "Vercel",
        "WordPress",
      ],
    },
    {
      name: "AI / LLM Engineering",
      items: [
        "OpenAI",
        "AWS Bedrock",
        "LLM API integration (OpenAI / Anthropic)",
        "RAG pipelines",
        "Embeddings",
        "Prompt engineering",
        "Agent-oriented architectures",
      ],
    },
    {
      name: "Testing & quality",
      items: ["Jest", "React Testing Library", "Playwright", "Vitest", "Sentry"],
    },
    {
      name: "Tools & practices",
      items: [
        "Clean Code",
        "SOLID",
        "Design Patterns",
        "Layered Architecture",
        "Microservices",
        "Agile (Scrum, Kanban)",
        "Technical documentation",
        "JSDoc",
      ],
    },
  ],
};

export const trajectory = {
  eyebrow: "Professional experience",
  title: "Experience",
  lead: "Product engineering in agile teams — education, industry, and corporate.",
  stat: "4+ years of experience",
  intro:
    "Multidisciplinary teams and products from dashboards and IoT to multi-tenant SaaS and AI-powered platforms.",
  steps: [
    {
      org: "Avaliza",
      role: "Lead Frontend Engineer · UI/UX Design · Backend support as needed",
      period: "2026 – Present",
      shift:
        "PEC TEC → Avaliza. Lead frontend on a multi-tenant rental-guarantee SaaS — 14 operational modules, Liza AI, BFF to Django, and modules from AP to legal exoneration.",
    },
    {
      org: "Afilio",
      role: "Front-end Developer",
      period: "Mar 2026 – Present",
      shift:
        "Vue.js, Quasar, and TypeScript interfaces from Figma prototypes; REST API integration; authentication, security, and role-based access control.",
    },
    {
      org: "PEC TEC",
      role: "Full-stack Developer & UI/UX Designer",
      period: "Apr 2025 – Feb 2026",
      shift:
        "Digital systems for virtual learning environments and management platforms; web apps for startups with a focus on usability, accessibility, and visual consistency.",
    },
    {
      org: "Vale",
      role: "BI & Development Intern",
      period: "Dec 2023 – Dec 2024",
      shift:
        "Dashboards, internal applications, and automated routines; database management and reporting for the Supplies area.",
    },
    {
      org: "green4T",
      role: "Development Solutions Intern",
      period: "Jan 2023 – Dec 2023",
      shift:
        "IoT board programming integrated with web interfaces; UI/UX design for device monitoring applications.",
    },
    {
      org: "Teknisa",
      role: "Full-Stack Development Intern",
      period: "Apr 2022 – Jan 2023",
      shift:
        "Frontend and backend features for corporate food-industry systems; REST API integration and production maintenance.",
    },
  ],
};

export const education = {
  label: "Education",
  items: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Universidade FUMEC",
      location: "Belo Horizonte, Brazil",
      period: "Expected Dec 2026",
    },
    {
      degree: "Technical Course in Informatics",
      institution: "IFMG",
      location: "Belo Horizonte, Brazil",
      period: "Completed 2021",
    },
  ],
};

export const certifications = {
  label: "Courses & certifications",
  items: [
    "Programming Logic — Meninas Programadoras (USP)",
    "Advanced TypeScript, Vue & SQL — Udemy",
    "Professional Certificate in UX Design — Google",
    "Java Web Development with Spring Boot — Alura",
    "English Proficiency Certificate (C2) — EF SET",
  ],
};

export const work = {
  kicker: "Selected products / 2023—2025",
  roleLabel: "My role",
  yearLabel: "Year",
  domainLabel: "Domain",
  stackLabel: "Stack",
  scaleLabel: "Scale",
  provenLabel: "Built into the product",
  surfaceNote: "Product surface / live system",
  summaryNote: "Shipped product / project record",
  systemNote: "System model / working logic",
  landingKicker: "Institutional sites, internal tools, and personal projects",
  landingTitle: "Fast-moving work outside the product stack.",
  prevLabel: "Previous",
  nextLabel: "Next",
};

export const contact = {
  eyebrow: "The next system starts with a conversation",
  title: "Bring me the problem that does not fit neatly in one discipline.",
  note:
    "Available for remote product engineering, full-stack, and frontend roles — and selected collaborations across product, frontend, and applied AI.",
  headline: "Not sure what your product needs?",
  subline: "Let's figure it out together.",
  cta: "Get in touch",
  footer: {
    email: "Email",
    phone: "Phone",
    status: "Status",
    social: "Connect",
  },
};

export const proof = {
  items: [
    "Product Engineer · Full-stack · Frontend focus",
    "Design + Code + AI",
    "React · TypeScript · Next.js · Node.js",
    "Multi-tenant SaaS · LLM-powered features",
    "Open to remote roles",
  ],
};

export const home = {
  workLabel: "Projects",
  archiveLabel: "My work",
  practiceLabel: "How I work",
  viewAllWork: "View all work",
  aboutLink: "Read full story",
};
