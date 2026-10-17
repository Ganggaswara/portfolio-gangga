import pacemakerImg from '../assets/projects/pacemaker.jpg';
import woodcraftImg from '../assets/projects/woodcraft.jpg';
import csrLensImg from '../assets/projects/CsrLens.jpeg';
import sintekImg from '../assets/projects/sintek.jpg';

export const profile = {
  name: 'Gangga Swara',
  shortName: 'Gangga',
  monogram: 'GS',
  headline: 'AI-DRIVEN CREATIVE DEVELOPER',
  tagline: 'Saya merancang sistem yang terasa hidup.',
  bio: "I'm a Student at Universitas Pendidikan Ganesha, majoring in Informatics. I have a strong passion for web development and machine learning. I enjoy learning new things and always want to improve my programming skills.\n\nMy hobby is GYM and Coding. My focus now is learn new thing on creating functional website and user-friendly, and i want to learn deeper on machine learning. I believe that programming is not just a job, but an art form that combines functionality with aesthetic value.",
  whatsapp: '6281234567890',
  email: 'hello@ganggaswara.dev',
  location: 'Bali, Indonesia',
  availability: 'Open for collaboration',
  heroImage: '/portofolio.png',
  aboutImage: 'https://picsum.photos/seed/raka-studio/880/640',
  socials: [
    { platform: 'GitHub', url: 'https://github.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'Instagram', url: 'https://instagram.com' },
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
    demoUrl: '#',
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
    demoUrl: '#',
    repoUrl: '#',
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
    demoUrl: '#',
    repoUrl: '#',
    isFeatured: true,
  },
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
    repoUrl: '#',
    isFeatured: true,
  },
  {
    title: 'Trading Agent Solana',
    slug: 'trading-agent-solana',
    shortDescription: 'Dashboard trading agent SOL/IDR dengan indikator RSI, MACD, dan rekomendasi otomatis.',
    longDescription:
      'Trading Agent Solana adalah dashboard monitoring dan rekomendasi trading untuk pair SOL/IDR. Menampilkan candlestick chart 1 jam dengan SMA, indikator RSI dan MACD histogram, skor rekomendasi agent (beli/jual), riwayat transaksi, serta data OHLCV mentah dari Indodax.',
    category: 'AI',
    thumbnail: 'https://picsum.photos/seed/trading-agent-solana/800/560',
    gallery: ['https://picsum.photos/seed/trading-agent-solana/1200/700'],
    techStack: ['Python', 'Streamlit', 'Indodax API', 'Pandas'],
    period: '2026',
    role: 'Developer',
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
    company: 'CV Sinar Teknologi Indonesia',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Aug 2026 - Des 2026',
    location: 'Indonesia',
    description:
      'Mengembangkan dan menyempurnakan aplikasi berbasis web dengan fokus pada UI improvement, testing, debugging, serta penerapan praktik software development bersama tim.',
    achievements: ['Peningkatan tampilan antarmuka aplikasi', 'Pengujian fitur dan debugging', 'Kolaborasi tim dengan version control'],
    techStack: ['Web Development', 'UI Improvement', 'Debugging', 'Version Control'],
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
