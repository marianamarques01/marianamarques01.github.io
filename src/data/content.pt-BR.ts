/**
 * PT-BR mirror of content.ts.
 *
 * Keeps proper nouns, tech stack terms, and image/link data identical to the
 * English source (via the `projects` merge below) — only prose is
 * retranslated, so the two languages can never drift on the load-bearing
 * fields (shots, stack, urls, metric values).
 */
import { projects as baseProjects, type Project } from "./content";

export const site = {
  name: "Mariana Marques",
  role: "Engenheira de Produto · Full-stack",
  location: "Belo Horizonte, MG",
  coordinates: "19.9167° S / 43.9345° W",
  phone: "(31) 98494-6938",
  email: "mariana.msamp@gmail.com",
  linkedin: "https://www.linkedin.com/in/mariana-marques-dev",
  github: "https://github.com/marianamarques01",
  instagram: "https://www.instagram.com/mrqsp",
  availability: "Disponível para vagas remotas",
  cv: {
    href: "/work/CV_Mariana_Marques_2026.docx",
    label: "Baixar CV",
  },
};

export const nav = {
  wordmark: "mariana marques",
  links: [
    { label: "Projetos", href: "/work" },
    { label: "Experiência", href: "/about#trajectory" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/#contact" },
  ] as { label: string; href: string; hideOn?: "sm" | "md" }[],
  cta: "Contato",
};

export const hero = {
  eyebrow: "Engenheira de Produto · Full-stack — Belo Horizonte, MG",
  thesisLines: ["Design e engenharia,", "tratados como um", "único sistema contínuo."],
  subline:
    "Engenheira de produto com execução full stack e forte foco em frontend. Construo produtos inteligentes na interseção entre design e código — do primeiro frame no Figma até funcionalidades em produção potencializadas por LLMs — com experiência prática em aplicações web integradas a APIs REST e bancos de dados relacionais.",
  inquiry: "Para propostas e contato, envie um e-mail para",
  meta: {
    section: "001 / HERO",
    stack: "React · TypeScript · Next.js · Node.js · LLM / RAG",
  },
};

export const lab = {
  eyebrow: "Mariana Marques — Engenheira de Produto, Belo Horizonte MG",
  tagLeft: "Engenheira de Produto",
  tagRight: "Design · Código · IA",
  cue: "Explorar",
};

export const manifesto = {
  eyebrow: "A costura é o produto",
  lines: ["O software se torna real", "onde os sistemas", "encontram pessoas."],
  statement:
    "Esse ponto não é um handoff. É uma disciplina: entender o sistema fundo o bastante para que a complexidade pareça inevitável, legível e humana.",
  marginalia: [
    "A intenção sobrevive à implementação.",
    "Decisões de interface chegam à arquitetura.",
    "Inteligência ganha confiança pela evidência.",
  ],
};

export const practice = {
  eyebrow: "Uma prática, três movimentos",
  title: "Eu não repasso intenção adiante. Eu a levo até a produção.",
  intro:
    "As ferramentas mudam com o problema. O modelo de trabalho, não: enquadrar a coisa certa, construir a experiência inteira e depois provar que ela resiste ao mundo real.",
  principles: [
    {
      index: "01",
      verb: "Enquadrar",
      title: "Tornar o problema legível.",
      body:
        "Mapear atores, estados, restrições e modos de falha antes que o polimento da interface transforme suposições em decisões caras.",
      evidence: "Fluxos · protótipos · estados do produto · limites do sistema",
    },
    {
      index: "02",
      verb: "Construir",
      title: "Dominar a costura.",
      body:
        "Conectar o design de interação à arquitetura de frontend, APIs, dados e comportamento de IA, para que o produto se leia como um sistema coerente.",
      evidence: "React · TypeScript · Next.js · Python · PostgreSQL",
    },
    {
      index: "03",
      verb: "Provar",
      title: "Evidência, não teatro.",
      body:
        "Usar testes, observabilidade, acessibilidade e ciclos de avaliação para tornar experiências ambiciosas confiáveis depois da demonstração.",
      evidence: "Playwright · Vitest · Sentry · RAG · Avaliação de LLM",
    },
  ],
};

type ProjectTranslation = {
  role: string;
  thesis: string;
  description: string;
  evidence: string[];
  metricLabel: string;
};

const projectTranslations: Record<Project["id"], ProjectTranslation> = {
  avaliza: {
    role: "Engenheira Frontend Líder · UI/UX Design · Apoio em backend quando necessário",
    thesis:
      "Plataforma multi-tenant para o ciclo completo da garantia locatícia — da proposta à renovação.",
    description:
      "SaaS fintech/regtech B2B para imobiliárias: crédito, contratos, inadimplência, jurídico, financeiro, renovações e portais do inquilino em uma operação só. Liderança de frontend (BFF Next.js, RBAC com 28 perfis), entregando contas a pagar, inadimplência, exoneração jurídica, jornadas de treinamento e UX de crédito.",
    evidence: [
      "66 rotas · 244 handlers BFF · backend Django sem CORS exposto",
      "Liza: IA operacional auditável com escalação humana",
      "Motor de crédito híbrido, SLAs no fluxo, portais públicos do inquilino",
      "589+ componentes · Vitest · sandbox e fallbacks tipados",
    ],
    metricLabel: "módulos operacionais integrados",
  },
  reppub: {
    role: "Product Design + Engenharia Full-stack",
    thesis: "Plataforma de moradia compartilhada que forma grupos compatíveis e conecta à locação.",
    description:
      "Uma plataforma B2B2C que conecta candidatos a moradia compartilhada, forma grupos com score de compatibilidade e os encaminha para o fluxo imobiliário de locação — sem fragmentar a jornada entre redes sociais, planilhas e negociação manual.",
    evidence: [
      "Matching multidimensional por localização, orçamento, rotina e estilo de convivência",
      "Onboarding B2C para candidatos e dashboards B2B para imobiliárias em um único produto",
      "Superfícies de candidato, imobiliária e admin com suporte white-label",
      "Algoritmo de matching desacoplado de crédito, contratos e infraestrutura de locação",
    ],
    metricLabel: "dimensões de compatibilidade no matching",
  },
  broto: {
    role: "Engenheira de Produto (solo)",
    thesis: "Plataforma de preparação para o ENEM com prática adaptativa e feedback por IA.",
    description:
      "Uma plataforma de preparação para o ENEM voltada a alunos, professores e escolas. Exercícios, rotinas de estudo, feedback de redação e analytics de aprendizagem convivem em um produto multi-tenant com inteligência fundamentada em material oficial.",
    evidence: [
      "App do aluno e console da escola em um único monorepo",
      "Feedback de redação via RAG fundamentado nas diretrizes do INEP",
      "Domínio via BKT, revisão via FSRS e chat de IA contextual",
      "Isolamento de tenant em nível de linha em 26 migrations",
    ],
    metricLabel: "Deno Edge Functions",
  },
  spacesense: {
    role: "Engenheira de Produto (solo)",
    thesis: "Scanner de disco para macOS com suporte a projetos, Docker, caches e APFS.",
    description:
      "Um utilitário desktop com sensação nativa que entende projetos, caches, artefatos do Docker, APFS, hardlinks e symlinks — mantendo a interface responsiva durante varreduras longas.",
    evidence: [
      "Scanner assíncrono com cancelamento em tempo real",
      "Cálculo de tamanho físico com reconhecimento de APFS",
      "Volumes, imagens e containers parados do Docker",
      "Cache local para varreduras repetidas quase instantâneas",
    ],
    metricLabel: "ecossistemas de desenvolvedor detectados",
  },
  superenge: {
    role: "Desenvolvedora Frontend (solo)",
    thesis: "Ferramenta interna para gerar assinaturas de e-mail com preview ao vivo e exportação HTML.",
    description:
      "A Superenge é construtora de obras civis industriais e corporativas turnkey, ativa desde 2009. Gerador interno de assinatura de e-mail: colaboradores preenchem um formulário curto, veem o layout institucional ao vivo e copiam HTML que renderiza de forma confiável no Gmail e no Outlook.",
    evidence: [
      "Pré-visualização ao vivo sincronizada com o formulário",
      "HTML em tabelas com estilos inline para clientes de e-mail",
      "Selos PBQP-H e ISO integrados ao template",
      "Paleta e tipografia corporativas travadas",
    ],
    metricLabel: "exportação HTML pronta para colar",
  },
  fumec: {
    role: "Desenvolvedora Frontend (solo)",
    thesis: "Landing page do curso de Computação Gráfica da FUMEC e fluxo de inscrição.",
    description:
      "Uma experiência institucional para o Bacharelado em Computação Gráfica da FUMEC — o único curso superior dessa natureza no Brasil — construída para traduzir laboratórios, trilhas de carreira e reconhecimento do MEC em uma narrativa clara de matrícula.",
    evidence: [
      "Grade, laboratórios e possibilidades de carreira em uma narrativa contínua",
      "Caminho de inscrição ligado ao fluxo oficial do processo seletivo",
      "Layout responsivo pensado para descoberta mobile-first",
      "Sistema visual alinhado à marca de um curso criativo-tecnológico",
    ],
    metricLabel: "nota do curso no MEC em destaque",
  },
  liderban: {
    role: "Desenvolvedora Full-stack (solo)",
    thesis: "Tema WordPress sob medida e CMS para empresa de saneamento móvel.",
    description:
      "A Liderban é uma empresa brasileira de saneamento móvel que leva infraestrutura sanitária onde o acesso ao saneamento básico ainda é um desafio. Tema WordPress sob medida e sistema editorial para o site institucional.",
    evidence: ["Tema sob medida", "Integração com Instagram", "SEO estruturado"],
    metricLabel: "páginas estáticas unificadas em um CMS",
  },
  link: {
    role: "Desenvolvedora Frontend (solo)",
    thesis: "Site estático em React para agência de comunicação estratégica, com páginas orientadas a dados e deploy automatizado.",
    description:
      "A LINK é agência de comunicação estratégica — assessoria de imprensa, marketing digital, gestão de crise — com escritórios em BH, SP, Rio e Brasília. Site estático em React com rotas de serviço dinâmicas, cases e deploy automatizado.",
    evidence: ["Conteúdo orientado a dados", "CSS responsivo sob medida", "Deploy automatizado"],
    metricLabel: "dependências de backend",
  },
  cineclube: {
    role: "Design + Frontend",
    thesis: "Site de cineclube com arte SVG procedural e carteirinha gerada no navegador.",
    description:
      "Um site guiado pela identidade visual, com arte procedural em SVG e uma carteirinha de sócio gerada no navegador.",
    evidence: ["Arte procedural", "Carteirinha via Canvas + QR", "Acessibilidade de movimento"],
    metricLabel: "carteirinha gerada no client-side",
  },
  desenvolve: {
    role: "Engenheira Frontend Líder · UI/UX Design · Apoio em backend quando necessário",
    thesis: "LMS de bootcamp municipal com cursos, trilhas, avaliações, tutor IA e match de vagas.",
    description:
      "Um programa público-privado construído com prefeituras: moradores aprendem desenvolvimento full-stack por meio de aprendizagem baseada em projetos — um app e um site já no primeiro semestre — dentro de uma plataforma do aluno com cursos, trilhas, projetos e avaliações, com apoio de um tutor de IA 24h e uma rede de conexão a vagas em empresas parceiras.",
    evidence: [
      "LMS do aluno: cursos, trilhas, projetos e avaliações em um único dashboard",
      "Tutor de IA 24h dentro da plataforma para tirar dúvidas dos alunos",
      "Rede interna de conexão a vagas em empresas parceiras",
      "Expansão multi-cidade, com onboarding de prefeituras turma a turma",
    ],
    metricLabel: "horas de aulas gravadas",
  },
  collectycard: {
    role: "Engenheira de Produto (solo)",
    thesis: "Marketplace de photocards de K-pop com CEGs, trocas P2P, chat e reputação.",
    description:
      "Um marketplace mobile-first para a comunidade de colecionadores de photocards de K-pop, unificando compras coletivas (CEGs), trocas P2P, coleção pessoal, chat e reputação entre colecionadores. Reescrito de um protótipo em Ionic/Angular para um app universal em Expo — iOS, Android e Web — com Supabase cuidando de autenticação, dados, storage e realtime.",
    evidence: [
      "Criação e gestão de CEGs com status por participante",
      "Mercado P2P com reserva de anúncio e estados de venda",
      "Chat e notificações em tempo real via Supabase Realtime",
      "Cadastro em etapas com busca de CEP via ViaCEP e exportação de dados (LGPD)",
    ],
    metricLabel: "plataformas a partir de uma única base Expo",
  },
  vinilvivo: {
    role: "Desenvolvedora Frontend (solo)",
    thesis: "Landing page de spray para limpeza de vinil com specs, vídeo e checkout.",
    description:
      "Uma landing page para um spray de limpeza de vinil, feita para tornar visível um problema invisível — a poeira do sulco, não a da capa. Química do produto, rendimento de uso e um vídeo explicativo ficam acima da dobra, ao lado de um caminho de compra pronto para loja.",
    evidence: [
      "Vitrine estática em React com carrinho no client-side",
      "Estatísticas educativas do produto (pH, rendimento, tempo de secagem) na hero",
      "Identidade visual escura sob medida, com motivos de vinil e toca-discos",
      "Vídeo explicativo embutido ao lado do CTA principal",
    ],
    metricLabel: "tempo de secagem, do spray à estante",
  },
  sacha: {
    role: "Design + Frontend",
    thesis: "Protótipo educacional de alfabetização em IA com diálogo guiado e atividades no app.",
    description:
      "Um protótipo educacional — Safe AI-Chatbot Highly Anthropomorphized — que ajuda aprendizes a encontrar a Inteligência Artificial com calma, curiosidade e pensamento crítico. Diálogo, conceitos curados e atividades no app compartilham uma mesma voz narrativa, conduzida por um mascote literário.",
    evidence: [
      "Diálogo interativo com SACHA como ponto de entrada conversacional guiado",
      "Exploração curada de conceitos sobre modelos estatísticos e probabilísticos",
      "Atividades no app que vão além da leitura passiva",
      "Parceria de pesquisa com IFES Campus Vitória e UCLouvain",
    ],
    metricLabel: "trilhas de aprendizagem em uma jornada",
  },
  sws: {
    role: "Desenvolvedora Frontend (solo)",
    thesis: "Site institucional de segurança e facilities com catálogo de serviços e captura de leads.",
    description:
      "Site institucional para uma empresa paulista de segurança e facilities ativa desde 2004 — portaria, recepção, limpeza e vigilância remota para edifícios comerciais, obras e condomínios.",
    evidence: [
      "Catálogo de serviços cobrindo controle de acesso, limpeza e vigilância remota",
      "Funil de leads com agendamento de visitas para condomínios e prédios comerciais",
      "Páginas de marketing responsivas entregues como SPA estática em React",
      "Posicionamento para terceirização integrada de segurança e facilities",
    ],
    metricLabel: "linhas de serviço em um funil de leads",
  },
};

export const projects: { intro: string; items: Project[] } = {
  intro:
    "Projetos selecionados em SaaS, EdTech, PropTech e sites institucionais — com stack, escopo e o que foi entregue.",
  items: baseProjects.items.map((project) => {
    const t = projectTranslations[project.id];
    return {
      ...project,
      role: t.role,
      thesis: t.thesis,
      description: t.description,
      evidence: t.evidence,
      metric: { ...project.metric, label: t.metricLabel },
    };
  }),
};

export const about = {
  meta: "002 / SOBRE MIM",
  heading: "Sobre mim",
  eyebrow: "Mariana Marques — Engenheira de Produto",
  title: "Eu desenho a tela. Eu construo o que a torna verdadeira.",
  paragraphs: [
    "Engenheira de produto com execução full stack e forte foco em frontend. Especializada em interfaces acessíveis, centradas no usuário, e integradas a APIs REST e bancos de dados relacionais — levando a intenção do produto da descoberta à produção sem perdê-la no handoff.",
    "Experiência crescente em engenharia de IA aplicada — integração de LLMs via API, pipelines de RAG e arquiteturas orientadas a agentes — desenvolvida na construção da Broto, plataforma de aprendizagem adaptativa com IA. Atuação em ambientes ágeis, colaboração com designers e engenheiros backend, e experiência em produtos educacionais, industriais e corporativos.",
  ],
  cta: "Projetos selecionados ↓",
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
      name: "Dados & infra",
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
      name: "IA / LLM Engineering",
      items: [
        "OpenAI",
        "AWS Bedrock",
        "Integração com APIs de LLM (OpenAI/Anthropic)",
        "Pipelines de RAG",
        "Embeddings",
        "Prompt engineering",
        "Arquiteturas orientadas a agentes",
      ],
    },
    {
      name: "Testes & qualidade",
      items: ["Jest", "React Testing Library", "Playwright", "Vitest", "Sentry"],
    },
    {
      name: "Ferramentas & práticas",
      items: [
        "Clean Code",
        "SOLID",
        "Design Patterns",
        "Layered Architecture",
        "Microservices",
        "Metodologias Ágeis (Scrum, Kanban)",
        "Documentação Técnica",
        "JSDoc",
      ],
    },
  ],
};

export const trajectory = {
  eyebrow: "Experiência profissional",
  title: "Experiência",
  lead: "Engenharia de produto em times ágeis — educação, indústria e corporativo.",
  stat: "4+ anos de experiência",
  intro:
    "Equipes multidisciplinares e produtos que vão de dashboards e IoT a SaaS multi-tenant e plataformas com IA.",
  steps: [
    {
      org: "Avaliza",
      role: "Engenheira Frontend Líder",
      period: "2026 – Atual",
      shift:
        "PEC TEC → Avaliza. Frontend líder em SaaS multi-tenant de garantia locatícia — 14 módulos operacionais, IA Liza, BFF para Django e entregas de contas a pagar a exoneração jurídica.",
    },
    {
      org: "Afilio",
      role: "Desenvolvedora Front-end",
      period: "Mar 2026 – Atual",
      shift:
        "Interfaces em Vue.js, Quasar e TypeScript a partir de protótipos no Figma; integração com APIs REST; autenticação, segurança e controle de acesso por perfis.",
    },
    {
      org: "PEC TEC",
      role: "Desenvolvedora Full-stack & UI/UX Designer",
      period: "Abr 2025 – Fev 2026",
      shift:
        "Sistemas digitais para ambientes virtuais de aprendizagem e plataformas de gestão; aplicações web para startups com foco em usabilidade, acessibilidade e consistência visual.",
    },
    {
      org: "Vale",
      role: "Estagiária de BI e Desenvolvimento",
      period: "Dez 2023 – Dez 2024",
      shift:
        "Dashboards, aplicações internas e rotinas automatizadas; gerenciamento de bancos de dados e relatórios para a área de Suprimentos.",
    },
    {
      org: "green4T",
      role: "Estagiária de Soluções de Desenvolvimento",
      period: "Jan 2023 – Dez 2023",
      shift:
        "Programação de placas de IoT integradas a interfaces web; design UI/UX de aplicações para monitoramento de dispositivos.",
    },
    {
      org: "Teknisa",
      role: "Estagiária de Desenvolvimento Full-Stack",
      period: "Abr 2022 – Jan 2023",
      shift:
        "Funcionalidades frontend e backend para sistemas corporativos do setor alimentício; integração com APIs REST e manutenção em produção.",
    },
  ],
};

export const education = {
  label: "Formação acadêmica",
  items: [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade FUMEC",
      location: "Belo Horizonte, Brasil",
      period: "Previsão de conclusão: Dez 2026",
    },
    {
      degree: "Curso Técnico em Informática",
      institution: "IFMG",
      location: "Belo Horizonte, Brasil",
      period: "Concluído em 2021",
    },
  ],
};

export const certifications = {
  label: "Cursos e certificações",
  items: [
    "Lógica de Programação — Meninas Programadoras (USP)",
    "TypeScript Avançado, Vue e SQL — Udemy",
    "Certificado Profissional em UX Design — Google",
    "Desenvolvimento Java Web com Spring Boot — Alura",
    "Certificado de Proficiência em Inglês (C2) — EF SET",
  ],
};

export const work = {
  kicker: "Produtos selecionados / 2023—2025",
  roleLabel: "Função",
  yearLabel: "Ano",
  domainLabel: "Domínio",
  stackLabel: "Stack",
  scaleLabel: "Escala",
  provenLabel: "Construído no produto",
  surfaceNote: "Superfície do produto / sistema em produção",
  summaryNote: "Produto entregue / registro do projeto",
  systemNote: "Modelo do sistema / lógica de funcionamento",
  landingKicker: "Sites institucionais, ferramentas internas e projetos pessoais",
  landingTitle: "Trabalho ágil fora do stack principal de produto.",
  prevLabel: "Anterior",
  nextLabel: "Próximo",
};

export const contact = {
  eyebrow: "O próximo sistema começa com uma conversa",
  title: "Me traga o problema que não cabe direitinho em uma única disciplina.",
  note:
    "Disponível para vagas remotas de engenharia de produto, full-stack e frontend — e colaborações selecionadas em produto, frontend e IA aplicada.",
  headline: "Não sabe o que seu produto precisa?",
  subline: "Vamos descobrir juntas.",
  cta: "Falar comigo",
  footer: {
    email: "Email",
    phone: "Telefone",
    status: "Status",
    social: "Redes",
  },
};

export const proof = {
  items: [
    "Engenheira de Produto · Full-stack · foco em frontend",
    "Design + Código + IA",
    "React · TypeScript · Next.js · Node.js",
    "SaaS multi-tenant · funcionalidades com LLM",
    "Disponível para vagas remotas",
  ],
};

export const home = {
  workLabel: "Projetos",
  archiveLabel: "Meus trabalhos",
  practiceLabel: "Como trabalho",
  viewAllWork: "Ver todos os trabalhos",
  aboutLink: "Ler história completa",
};
