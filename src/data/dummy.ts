export const profile = {
  name: 'Gangga Swara',
  shortName: 'Gangga',
  monogram: 'GS',
  headline: 'AI-DRIVEN CREATIVE DEVELOPER',
  tagline: 'Saya merancang sistem yang terasa hidup.',
  bio: 'Saya membangun produk digital yang menggabungkan presisi engineering dengan estetika futuristik. 7 tahun berpengalaman merancang sistem web berskala, antarmuka interaktif, dan pengalaman produk yang berkesan bagi klien di Jakarta dan remote global.',
  whatsapp: '6281234567890',
  email: 'hello@ganggaswara.dev',
  location: 'Bali, Indonesia',
  availability: 'Open for collaboration',
  heroImage: '/portofolio.png',
  aboutImage: 'https://picsum.photos/seed/raka-studio/880/640',
  socials: [
    { platform: 'GitHub', url: 'https://github.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'Dribbble', url: 'https://dribbble.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
  ],
  stats: [
    { label: 'Tahun pengalaman', value: 7, suffix: '+' },
    { label: 'Proyek terkirim', value: 48, suffix: '' },
    { label: 'Klien puas', value: 31, suffix: '' },
    { label: 'Penghargaan', value: 9, suffix: '' },
  ],
  philosophy: {
    title: 'Mesin harus presisi. Antarmuka harus bernyawa.',
    content:
      'Saya percaya software terbaik lahir dari dua disiplin yang jarang akur: engineering yang ketat dan taste visual yang berani. Setiap piksel punya alasan. Setiap animasi menjawab narasi. Tidak ada dekorasi tanpa fungsi, tidak ada fungsi tanpa rasa.',
  },
};

export type ProjectCategory = 'Web' | 'Mobile' | 'AI' | 'Design';

export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory;
  thumbnail: string;
  gallery: string[];
  techStack: string[];
  period: string;
  role: string;
  demoUrl: string;
  repoUrl: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Nebula Analytics Dashboard',
    slug: 'nebula-analytics-dashboard',
    shortDescription: 'Dashboard analitik real-time dengan visualisasi D3 dan insight AI untuk tim produk.',
    longDescription:
      'Nebula adalah command center untuk tim produk yang tenggelam dalam data. Saya merancang pipeline ingest real-time, 14 visualisasi D3 yang bisa di-drilldown, dan ringkasan AI yang mengubah anomali menjadi kalimat yang bisa dieksekusi. Hasilnya: waktu analisis mingguan turun dari 6 jam menjadi 40 menit.',
    category: 'AI',
    thumbnail: 'https://picsum.photos/seed/nebula-dash/800/560',
    gallery: [
      'https://picsum.photos/seed/nebula-1/1200/700',
      'https://picsum.photos/seed/nebula-2/1200/700',
      'https://picsum.photos/seed/nebula-3/1200/700',
    ],
    techStack: ['React', 'TypeScript', 'D3.js', 'OpenAI API', 'Node.js'],
    period: '2024',
    role: 'Lead Frontend Engineer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Kirana Mobile Banking',
    slug: 'kirana-mobile-banking',
    shortDescription: 'Aplikasi banking dengan onboarding 90 detik dan transfer biometric yang mulus.',
    longDescription:
      'Kirana menantang asumsi bahwa aplikasi bank harus kaku. Saya memimpin tim mobile membangun onboarding eKYC 90 detik, transfer biometric, dan mode hemat data untuk jaringan lambat. Rating Play Store naik dari 3.1 ke 4.7 dalam 5 bulan.',
    category: 'Mobile',
    thumbnail: 'https://picsum.photos/seed/kirana-bank/800/560',
    gallery: [
      'https://picsum.photos/seed/kirana-1/1200/700',
      'https://picsum.photos/seed/kirana-2/1200/700',
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
    period: '2023',
    role: 'Senior Fullstack Developer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Atmos Studio Landing',
    slug: 'atmos-studio-landing',
    shortDescription: 'Landing sinematik untuk studio arsitektur dengan motion yang memenangkan Awwwards SOTD.',
    longDescription:
      'Atmos butuh situs yang terasa seperti berjalan di dalam portofolio mereka. Saya membangun hero WebGL ringan, transisi halaman cair, dan sistem tipografi editorial yang membuat bounce rate turun 38 persen dan inquiry naik 2.4x lipat.',
    category: 'Design',
    thumbnail: 'https://picsum.photos/seed/atmos-studio/800/560',
    gallery: [
      'https://picsum.photos/seed/atmos-1/1200/700',
      'https://picsum.photos/seed/atmos-2/1200/700',
    ],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind', 'Sanity'],
    period: '2023',
    role: 'Creative Developer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'VisionSort AI',
    slug: 'visionsort-ai',
    shortDescription: 'Klasifikasi visual gudang dengan akurasi 97 persen langsung di edge device.',
    longDescription:
      'VisionSort mengotomatiskan sortir paket di gudang dengan kamera murah dan model TensorFlow yang berjalan di edge. Saya membangun API FastAPI, dashboard monitoring, dan loop feedback yang membuat akurasi naik dari 89 ke 97 persen dalam 8 minggu.',
    category: 'AI',
    thumbnail: 'https://picsum.photos/seed/visionsort/800/560',
    gallery: ['https://picsum.photos/seed/vision-1/1200/700'],
    techStack: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    period: '2022',
    role: 'AI Product Engineer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Arunika Design System',
    slug: 'arunika-design-system',
    shortDescription: 'Design system 120 komponen yang menyatukan 4 tim produk dalam satu bahasa visual.',
    longDescription:
      'Arunika lahir karena setiap tim menggambar tombol sendiri. Saya mengaudit 4 codebase, merancang token, dan membangun 120 komponen terdokumentasi dengan playground interaktif. Waktu onboarding desainer baru turun separuh.',
    category: 'Design',
    thumbnail: 'https://picsum.photos/seed/arunika-ds/800/560',
    gallery: ['https://picsum.photos/seed/arunika-1/1200/700'],
    techStack: ['React', 'Tailwind', 'Storybook', 'Figma API'],
    period: '2022',
    role: 'Design Engineer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: false,
  },
  {
    title: 'Lokatani Marketplace',
    slug: 'lokatani-marketplace',
    shortDescription: 'Marketplace hasil tani dengan logistik dingin dan checkout 2 langkah.',
    longDescription:
      'Lokatani menghubungkan 2.000 petani dengan pembeli kota. Saya membangun katalog offline-first, checkout 2 langkah, dan tracker logistik dingin. GMV naik 3x dalam satu musim panen.',
    category: 'Web',
    thumbnail: 'https://picsum.photos/seed/lokatani/800/560',
    gallery: ['https://picsum.photos/seed/lokatani-1/1200/700'],
    techStack: ['Next.js', 'PostgreSQL', 'Midtrans', 'PWA'],
    period: '2021',
    role: 'Fullstack Developer',
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: false,
  },
];

export const experience = [
  {
    company: 'PT Nusantara Digital Lab',
    role: 'Lead Frontend Engineer',
    type: 'Full-time',
    period: '2022 - Sekarang',
    location: 'Jakarta',
    description:
      'Memimpin 6 engineer membangun platform analitik yang dipakai 40 ribu pengguna aktif. Menurunkan bundle 46 persen, menaikkan Lighthouse ke 96.',
    achievements: ['Design system dipakai 5 tim', 'Lighthouse 96 di semua halaman inti', 'Mentoring 4 junior ke mid'],
    techStack: ['React', 'TypeScript', 'Vite', 'D3.js'],
  },
  {
    company: 'Warung Pintar',
    role: 'Senior Fullstack Developer',
    type: 'Full-time',
    period: '2020 - 2022',
    location: 'Jakarta',
    description:
      'Membangun dashboard operasional untuk 10 ribu warung. Fokus pada offline-first dan sinkronisasi yang tahan jaringan buruk.',
    achievements: ['Offline-first sync engine', 'Uptime 99.9 persen selama 18 bulan'],
    techStack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Kolektif Creative Agency',
    role: 'Frontend Developer',
    type: 'Contract',
    period: '2018 - 2020',
    location: 'Bandung',
    description:
      'Mengerjakan 24 situs kampanye dan company profile. Belajar bahwa deadline ketat justru melatih taste.',
    achievements: ['24 situs live tanpa delay mayor', '2 Awwwards Honorable Mention'],
    techStack: ['JavaScript', 'GSAP', 'WordPress'],
  },
];

export const education = [
  {
    institution: 'Institut Teknologi Bandung',
    degree: 'S1',
    field: 'Teknik Informatika',
    period: '2014 - 2018',
    detail: 'IPK 3.72. Fokus pada grafika komputer dan interaksi manusia komputer. Asisten lab pemrograman visual.',
  },
  {
    institution: 'SMAN 8 Jakarta',
    degree: 'SMA',
    field: 'Jurusan IPA',
    period: '2011 - 2014',
    detail: 'Aktif di klub robotik dan desain grafis. Juara 2 kompetisi web tingkat provinsi.',
  },
];

export const skills = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Next.js', category: 'Frontend', level: 88 },
  { name: 'Tailwind', category: 'Frontend', level: 92 },
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Express', category: 'Backend', level: 85 },
  { name: 'PostgreSQL', category: 'Backend', level: 80 },
  { name: 'MongoDB', category: 'Backend', level: 82 },
  { name: 'Figma', category: 'Design', level: 88 },
  { name: 'Motion Design', category: 'Design', level: 75 },
];

export const testimonials = [
  {
    quote: 'Raka bukan sekadar developer. Dia memahami bahasa bisnis kami dan menerjemahkannya menjadi produk yang berjalan.',
    name: 'Sari Wulandari',
    role: 'CEO, PT Nusantara Digital Lab',
  },
  {
    quote: 'Landing baru kami terasa mahal. Inquiry masuk bahkan sebelum iklan jalan.',
    name: 'Daniel Ho',
    role: 'Founder, Atmos Studio',
  },
];
