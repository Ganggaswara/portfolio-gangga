import pacemakerImg from '../assets/projects/pacemaker.webp';
import woodcraftImg from '../assets/projects/woodcraft.webp';
import csrLensImg from '../assets/projects/csr-lens.webp';
import sintekImg from '../assets/projects/sintek.webp';
import solanaImg from '../assets/projects/solana-agent.webp';

export const profile = {
  name: 'Gangga Swara',
  shortName: 'Gangga',
  monogram: 'GS',
  headline: 'AI-DRIVEN CREATIVE DEVELOPER',
  tagline: 'Saya merancang sistem yang terasa hidup.',
  bio: "I'm an Informatics student at Universitas Pendidikan Ganesha passionate about web development and machine learning. I enjoy coding, going to the gym, and continuously improving my skills by building functional, user-friendly, and visually appealing websites while exploring machine learning.",
  whatsapp: '6287859988832',
  email: 'ganggaswara11@gmail.com',
  location: 'Bali, Indonesia',
  availability: 'Open for collaboration',
  heroImage: '/portofolio.webp',
  aboutImage: 'https://picsum.photos/seed/raka-studio/880/640',
  socials: [
    { platform: 'GitHub', url: 'https://github.com/Ganggaswara' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ganggaswara11' },
    { platform: 'Instagram', url: 'https://www.instagram.com/ganggaswaraa/' },
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
    title: 'CSR Lens',
    slug: 'csr-lens',
    shortDescription: 'RAG tanya-jawab dokumen CSR 5 emiten kesehatan Indonesia dengan sitasi sumber.',
    longDescription:
      'CSR Lens adalah aplikasi RAG untuk tanya-jawab laporan keberlanjutan emiten farmasi/rumah sakit. Mengambil dokumen CSR dari 5 emiten kesehatan Indonesia, dengan filter emiten dan tahun laporan, jawaban berbasis konteks plus daftar sumber referensi AR/SR dan halaman. Contoh: program TJSL KAEF 2022 dan sertifikasi PROPER Emas SIDO.',
    category: 'AI',
    thumbnail: csrLensImg,
    gallery: [csrLensImg],
    techStack: ['Python', 'RAG', 'Vector Database', 'LLM'],
    period: '2026',
    role: 'AI Developer',
    demoUrl: '#',
    repoUrl: 'https://github.com/Ganggaswara/CSR-Lens',
    isFeatured: true,
  },
  {
    title: 'Trading Agent Solana',
    slug: 'trading-agent-solana',
    shortDescription: 'Dashboard trading agent SOL/IDR dengan indikator RSI, MACD, dan rekomendasi otomatis.',
    longDescription:
      'Trading Agent Solana adalah dashboard monitoring dan rekomendasi trading untuk pair SOL/IDR. Menampilkan candlestick chart 1 jam dengan SMA, indikator RSI dan MACD histogram, skor rekomendasi agent (beli/jual), riwayat transaksi, serta data OHLCV mentah dari Indodax.',
    category: 'AI',
    thumbnail: solanaImg,
    gallery: [solanaImg],
    techStack: ['Python', 'Streamlit', 'Indodax API', 'Pandas'],
    period: '2026',
    role: 'Developer',
    demoUrl: '#',
    repoUrl: 'https://github.com/Ganggaswara/Trading-Bot-Crypto',
    isFeatured: true,
  },
  {
    title: 'SINTEKINDO',
    slug: 'sintekindo-landing-page',
    shortDescription: 'Landing page perusahaan teknologi dengan layanan, paket, dan portofolio live.',
    longDescription:
      'Landing page untuk CV Sintekindo dengan hero Building the Future Through Technology, profil perusahaan, 3 layanan utama, estimasi paket Rp2jt/Rp5jt/Rp10jt, karya live, segmen klien, testimoni Google 5.0, dan form kontak WhatsApp.',
    category: 'Web',
    thumbnail: sintekImg,
    gallery: [sintekImg],
    techStack: ['React', 'Tailwind', 'Landing Page'],
    period: '2026',
    role: 'Web Developer',
    demoUrl: 'https://web-sintek.vercel.app/',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Pacemaker',
    slug: 'pacemaker',
    shortDescription: 'Website company profile untuk produk lokal dengan katalog yang rapi.',
    longDescription:
      'Pacemaker adalah website company profile yang saya bangun untuk menampilkan produk secara jelas dan meyakinkan. Fokus pada struktur halaman yang rapi, loading cepat, dan pengalaman eksplorasi produk yang nyaman.',
    category: 'Web',
    thumbnail: pacemakerImg,
    gallery: [pacemakerImg],
    techStack: ['Web Development', 'UI Design', 'Responsive'],
    period: '2026',
    role: 'Web Developer',
    demoUrl: 'https://pace-maker-rho.vercel.app/',
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Woodcraft',
    slug: 'woodcraft',
    shortDescription: 'Website showcase kerajinan kayu dengan galeri visual yang kuat.',
    longDescription:
      'Woodcraft adalah website showcase untuk produk kerajinan kayu. Saya membangun galeri visual yang menonjolkan detail produk dengan navigasi sederhana dan tampilan yang hangat.',
    category: 'Web',
    thumbnail: woodcraftImg,
    gallery: [woodcraftImg],
    techStack: ['Web Development', 'UI Design', 'Gallery'],
    period: '2026',
    role: 'Web Developer',
    demoUrl: 'https://woodcraft-three.vercel.app/',
    repoUrl: '#',
    isFeatured: true,
  },
];

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Pembuatan website fungsional dan user-friendly, dari company profile dan landing page sampai aplikasi web dengan data dinamis.',
    deliverables: ['Company Profile', 'Landing Page', 'Web App', 'Responsive'],
  },
  {
    icon: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Eksplorasi dan implementasi machine learning, dari pencarian dokumen berbasis RAG sampai integrasi model ke produk.',
    deliverables: ['RAG Pipeline', 'LLM Integration', 'Python'],
  },
  {
    icon: 'seo',
    title: 'SEO Optimization',
    description:
      'Optimasi teknis dan konten agar website mudah ditemukan mesin pencari: struktur, performa, dan meta yang rapi.',
    deliverables: ['Technical SEO', 'On-Page SEO', 'Page Speed'],
  },
] as const;

export const experience = [
  {
    company: 'CV Sinar Teknologi Indonesia',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Agu 2026 - Des 2026',
    location: 'Indonesia',
    description:
      'Mengembangkan dan menyempurnakan aplikasi berbasis web dengan fokus pada UI improvement, testing, debugging, serta penerapan praktik software development bersama tim.',
    achievements: ['Peningkatan tampilan antarmuka aplikasi', 'Pengujian fitur dan debugging', 'Kolaborasi tim dengan version control'],
    techStack: ['Web Development', 'UI Improvement', 'Debugging', 'Version Control'],
  },
];

export const education = [
  {
    institution: 'Universitas Pendidikan Ganesha',
    degree: 'S1',
    field: 'Teknik Informatika',
    period: '2023 - 2027',
    detail: 'IPK 3.75. Fokus pada pengembangan website, AI, dan machine learning.',
  },
  {
    institution: 'SMAN 7 Denpasar',
    degree: 'SMA',
    field: 'Jurusan IPA',
    period: '2020 - 2023',
    detail: '',
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
    quote: 'Gangga bukan sekadar developer. Dia memahami bahasa bisnis kami dan menerjemahkannya menjadi produk yang berjalan.',
    name: 'Sari Wulandari',
    role: 'CEO, PT Nusantara Digital Lab',
  },
  {
    quote: 'Landing baru kami terasa mahal. Inquiry masuk bahkan sebelum iklan jalan.',
    name: 'Daniel Ho',
    role: 'Founder, Atmos Studio',
  },
];
