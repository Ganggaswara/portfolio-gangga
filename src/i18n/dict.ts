export type Lang = 'id' | 'en';

const id = {
  nav: {
    Home: 'Beranda',
    Experience: 'Pengalaman',
    Projects: 'Proyek',
    Services: 'Layanan',
    Blog: 'Blog',
  },
  layout: {
    viewCv: 'Lihat CV',
    language: 'Bahasa',
    credit: 'Dibangun dengan presisi.',
  },
  loader: {
    loading: 'Memuat',
    done: 'Selesai dalam',
    progress: 'sedang berjalan',
  },
  about: {
    label: 'Tentang Saya',
    hi: 'Hai semuanya! Saya',
    name3d: 'Gangga.',
    basedIn: 'Berlokasi di',
    educationLabel: 'Pendidikan',
    dragTip: 'Tarik untuk mengayun / Klik untuk membalik',
    loadingCard: 'Memuat kartu nama',
    bio1:
      'Saya mahasiswa Informatika di Universitas Pendidikan Ganesha yang bersemangat pada web development dan machine learning.',
    bio2:
      'Saya senang coding dan gym, serta terus mengasah kemampuan dengan membangun website yang fungsional, user-friendly, dan enak dilihat sambil mendalami machine learning.',
    eduValue: 'Undiksha, Informatika',
  },
  projects: {
    label: 'Proyek',
    heading1: 'KARYA &',
    heading2: 'EKSPERIMEN KREATIF.',
    openCase: 'Buka studi kasus',
    ctaAll: 'Lihat Semua Karya',
  },
  servicesSection: {
    label: 'Layanan',
    heading1: 'LAYANAN YANG',
    heading2: 'SAYA TAWARKAN.',
  },
  process: {
    label: 'Proses',
    heading1: 'CARA',
    heading2: 'KERJA.',
    stepWord: 'Langkah',
  },
  experienceTimeline: {
    label: 'Pengalaman',
    heading1: 'HAL YANG',
    heading2: 'MEMBENTUK SAYA.',
    viewAll: 'Lihat semua pengalaman',
  },
  cta: {
    label: 'Respons di bawah 24 jam',
    heading: 'PUNYA IDE? WUJUDKAN SEKARANG.',
    desc: 'Ceritakan kebutuhan Anda lewat WhatsApp kami',
    button: 'Chat WhatsApp',
    waMessage:
      'Halo, Gangga! 👋\n\nSaya mengunjungi website portfolio Anda dan tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama. Apakah Anda sedang tersedia untuk berdiskusi?',
  },
  hero: {
    openToWork: 'Terbuka untuk kerja',
    contact: 'Kontak',
    viewProjects: 'Lihat Proyek',
    letsTalk: 'Mari Diskusi',
    tiltHint: 'Arahkan kursor untuk memiringkan',
  },
  home: {
    title: 'Gangga, Arsitek Digital dan AI Creator',
    desc: 'Portofolio Gangga Swara, web developer dan AI/machine learning enthusiast.',
  },
  projectsPage: {
    title: 'Karya, Gangga Swara',
    desc: 'Katalog proyek web dan AI oleh Gangga Swara.',
    label: 'Proyek',
    heading1: 'KARYA &',
    heading2: 'EKSPERIMEN KREATIF.',
    intro: 'Filter berdasarkan kategori atau cari kata kunci. Setiap kartu membuka studi kasus lengkap.',
    catAll: 'Semua',
    search: 'Cari proyek, min 3 huruf',
    emptyTitle: 'Tidak ada hasil',
    emptyDesc: 'Coba kata kunci lain atau reset filter kategori.',
  },
  projectDetail: {
    missing: 'PROYEK HILANG',
    backCatalog: 'Kembali ke katalog',
    catalog: 'Katalog',
    techStack: 'Teknologi',
    liveDemo: 'Demo Langsung',
    repoTxt: 'Repositori',
    gallerySuffix: 'galeri',
    waCta: 'Diskusi proyek ini via WA',
    waMessage: (title: string) => `Halo, saya tertarik dengan proyek "${title}". Bisa diskusi lebih lanjut?`,
  },
  experiencePage: {
    title: 'Jejak Karier, Gangga Swara',
    label: 'Pengalaman',
    educationLabel: 'Pendidikan',
  },
  servicesPage: {
    title: 'Layanan, Gangga Swara',
    desc: 'Layanan web development, AI & machine learning, dan SEO optimization oleh Gangga Swara.',
    label: 'Layanan',
    h1: 'LAYANAN',
    intro: 'Layanan yang saya tawarkan untuk membangun dan mengoptimalkan produk digital Anda.',
    processLabel: 'Alur kerja',
    processIntro: 'Empat langkah kerja yang rapi dan transparan, dari obrolan awal sampai rilis.',
    process: [
      { step: '01', title: 'Diskusi', desc: 'Memahami kebutuhan, target, dan batasan proyek Anda.' },
      { step: '02', title: 'Rancang', desc: 'Menyusun struktur, alur, dan tampilan sebelum masuk koding.' },
      { step: '03', title: 'Bangun', desc: 'Implementasi bertahap dengan progres yang bisa dipantau.' },
      { step: '04', title: 'Rilis', desc: 'Deploy, pengujian akhir, dan serah terima hasil.' },
    ],
    ctaHeading: 'SIAP MULAI?',
    ctaDesc: 'Ceritakan kebutuhan Anda, saya bantu petakan solusi dan langkah berikutnya.',
    ctaWa: 'Diskusi via WhatsApp',
    ctaWorks: 'Lihat karya',
    waMessage: 'Halo Gangga, saya ingin berdiskusi tentang layanan Anda.',
  },
  blog: {
    title: 'Blog, Gangga Swara',
    desc: 'Catatan segera hadir.',
    back: 'Kembali ke Home',
  },
  notFound: {
    tag: 'Error 404 / sinyal hilang',
    hud: 'HUD TERPUTUS',
    desc: 'Koordinat yang Anda tuju tidak ada di peta. Kembali ke markas untuk lanjut eksplorasi.',
    back: 'Kembali ke Beranda',
  },
  thanks: {
    heading: 'SIAP TERHUBUNG.',
    desc: 'Anda akan diarahkan ke WhatsApp. Pesan sudah terisi otomatis, tinggal tekan kirim.',
    openWa: 'Buka WhatsApp',
    back: 'Kembali',
    waMessage: 'Halo Gangga, saya dari portofolio Anda dan ingin berdiskusi.',
  },
};

const en: typeof id = {
  nav: {
    Home: 'Home',
    Experience: 'Experience',
    Projects: 'Projects',
    Services: 'Services',
    Blog: 'Blog',
  },
  layout: {
    viewCv: 'View CV',
    language: 'Language',
    credit: 'Built with precision.',
  },
  loader: {
    loading: 'Loading',
    done: 'Loaded in',
    progress: 'in progress',
  },
  about: {
    label: 'About Me',
    hi: 'Hi everyone! I\u2019m',
    name3d: 'Gangga.',
    basedIn: 'Based In',
    educationLabel: 'Education',
    dragTip: 'Drag to swing / Click to flip',
    loadingCard: 'Loading ID card',
    bio1:
      "I'm an Informatics student at Universitas Pendidikan Ganesha passionate about web development and machine learning.",
    bio2:
      'I enjoy coding, going to the gym, and continuously improving my skills by building functional, user-friendly, and visually appealing websites while exploring machine learning.',
    eduValue: 'Undiksha, Informatics',
  },
  projects: {
    label: 'Projects',
    heading1: 'WORKS &',
    heading2: 'CREATIVE EXPERIMENTS.',
    openCase: 'Open case',
    ctaAll: 'View All Works',
  },
  servicesSection: {
    label: 'Services',
    heading1: 'WHAT I CAN',
    heading2: 'DO FOR YOU.',
  },
  process: {
    label: 'Process',
    heading1: 'HOW WE',
    heading2: 'WORK.',
    stepWord: 'Step',
  },
  experienceTimeline: {
    label: 'Experience',
    heading1: 'THINGS THAT',
    heading2: 'SHAPED ME.',
    viewAll: 'View all experience',
  },
  cta: {
    label: 'Replies within 24 hours',
    heading: 'GOT AN IDEA? MAKE IT REAL.',
    desc: 'Tell us what you need via our WhatsApp',
    button: 'Chat on WhatsApp',
    waMessage:
      "Hi, Gangga! 👋\n\nI visited your portfolio website and I'm interested in discussing further collaboration opportunities. Are you available to talk?",
  },
  hero: {
    openToWork: 'Open for work',
    contact: 'Contact',
    viewProjects: 'View Projects',
    letsTalk: "Let's Talk",
    tiltHint: 'Hover to tilt',
  },
  home: {
    title: 'Gangga, Digital Architect and AI Creator',
    desc: 'Gangga Swara\u2019s portfolio, a web developer and AI/machine learning enthusiast.',
  },
  projectsPage: {
    title: 'Works, Gangga Swara',
    desc: 'Catalog of web and AI projects by Gangga Swara.',
    label: 'Projects',
    heading1: 'WORKS &',
    heading2: 'CREATIVE EXPERIMENTS.',
    intro: 'Filter by category or search by keyword. Every card opens a full case study.',
    catAll: 'All',
    search: 'Search projects, min 3 letters',
    emptyTitle: 'No results',
    emptyDesc: 'Try another keyword or reset the category filter.',
  },
  projectDetail: {
    missing: 'PROJECT NOT FOUND',
    backCatalog: 'Back to catalog',
    catalog: 'Catalog',
    techStack: 'Tech Stack',
    liveDemo: 'Live Demo',
    repoTxt: 'Repo',
    gallerySuffix: 'gallery',
    waCta: 'Discuss this project on WhatsApp',
    waMessage: (title: string) => `Hi, I'm interested in the "${title}" project. Can we discuss further?`,
  },
  experiencePage: {
    title: 'Career Journey, Gangga Swara',
    label: 'Experience',
    educationLabel: 'Education',
  },
  servicesPage: {
    title: 'Services, Gangga Swara',
    desc: 'Web development, AI & machine learning, and SEO optimization services by Gangga Swara.',
    label: 'Services',
    h1: 'SERVICES',
    intro: 'Services I offer to build and optimize your digital products.',
    processLabel: 'How it works',
    processIntro: 'Four tidy and transparent work steps, from the first chat to release.',
    process: [
      { step: '01', title: 'Discuss', desc: 'Understanding your needs, goals, and project constraints.' },
      { step: '02', title: 'Plan', desc: 'Structuring the flow and visuals before writing code.' },
      { step: '03', title: 'Build', desc: 'Incremental implementation with visible progress.' },
      { step: '04', title: 'Ship', desc: 'Deploy, final testing, and handover.' },
    ],
    ctaHeading: 'READY TO START?',
    ctaDesc: 'Tell me what you need and I\u2019ll help map the solution and next steps.',
    ctaWa: 'Chat on WhatsApp',
    ctaWorks: 'View works',
    waMessage: 'Hi Gangga, I\u2019d like to discuss your services.',
  },
  blog: {
    title: 'Blog, Gangga Swara',
    desc: 'Notes coming soon.',
    back: 'Back to Home',
  },
  notFound: {
    tag: 'Error 404 / signal lost',
    hud: 'HUD OFFLINE',
    desc: 'The coordinates you\u2019re looking for aren\u2019t on the map. Head back to base and keep exploring.',
    back: 'Back to Home',
  },
  thanks: {
    heading: 'READY TO CONNECT.',
    desc: 'You\u2019ll be redirected to WhatsApp. The message is pre-filled, just hit send.',
    openWa: 'Open WhatsApp',
    back: 'Back',
    waMessage: 'Hi Gangga, I came from your portfolio and would like to chat.',
  },
};

export const dict: Record<Lang, typeof id> = { id, en };

export type Dict = typeof id;

export const enData = {
  projects: {
    'csr-lens': {
      shortDescription: 'RAG Q&A over CSR reports of 5 Indonesian healthcare issuers with source citations.',
      longDescription:
        'CSR Lens is a RAG app for question-answering sustainability reports of pharmaceutical/hospital issuers. It ingests CSR documents from 5 Indonesian healthcare issuers, with issuer and report-year filters, context-based answers plus references to AR/SR pages. Example: KAEF 2022 TJSL programs and SIDO PROPER Gold certification.',
    },
    'trading-agent-solana': {
      shortDescription: 'SOL/IDR trading agent dashboard with RSI, MACD indicators and automated recommendations.',
      longDescription:
        'Trading Agent Solana is a monitoring and recommendation dashboard for the SOL/IDR pair. It shows a 1-hour candlestick chart with SMA, RSI and MACD histogram indicators, an agent recommendation score (buy/sell), transaction history, and raw OHLCV data from Indodax.',
    },
    'sintekindo-landing-page': {
      shortDescription: 'Corporate landing page with services, packages, and a live portfolio.',
      longDescription:
        'Landing page for CV Sintekindo with a "Building the Future Through Technology" hero, company profile, 3 core services, package estimates at Rp2M/Rp5M/Rp10M, live work, client segments, 5.0 Google testimonials, and a WhatsApp contact form.',
    },
    pacemaker: {
      shortDescription: 'Company profile website for a local product with a tidy catalog.',
      longDescription:
        'Pacemaker is a company profile website I built to present products clearly and convincingly. Focused on tidy page structure, fast loading, and a comfortable product exploration experience.',
    },
    woodcraft: {
      shortDescription: 'Woodcraft showcase website with a strong visual gallery.',
      longDescription:
        'Woodcraft is a showcase website for wooden crafts. I built a visual gallery that highlights product details with simple navigation and a warm look.',
    },
  } as Record<string, { shortDescription?: string; longDescription?: string }>,
  services: {
    'Web Development': {
      description:
        'Building functional, user-friendly websites, from company profiles and landing pages to data-driven web apps.',
    },
    'AI & Machine Learning': {
      description:
        'Exploring and implementing machine learning, from RAG-based document search to integrating models into products.',
    },
    'SEO Optimization': {
      description:
        'Technical and content optimization so websites are easy to find in search engines: structure, performance, and clean meta.',
    },
  } as Record<string, { description?: string }>,
  experience: {
    'CV Sinar Teknologi Indonesia': {
      period: 'Aug 2026 - Dec 2026',
      description:
        'Developed and refined web-based applications with a focus on UI improvements, testing, debugging, and applying software development practices with the team.',
      achievements: [
        'Improved application interface',
        'Feature testing and debugging',
        'Team collaboration with version control',
      ],
    },
  } as Record<string, { description?: string; achievements?: string[]; period?: string }>,
  education: {
    'Universitas Pendidikan Ganesha': {
      degree: 'Bachelor',
      field: 'Informatics',
      detail: 'GPA 3.75. Focused on web development, AI, and machine learning.',
    },
    'SMAN 7 Denpasar': {
      degree: 'Senior High School',
      field: 'Science Major',
      detail: '',
    },
  } as Record<string, { degree?: string; field?: string; detail?: string }>,
};
