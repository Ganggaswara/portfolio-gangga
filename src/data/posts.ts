import type { Lang } from '../i18n/dict';
import blog1Image from '../assets/blog/blog1.webp';

export type Cover = 'aurora' | 'grid' | 'beam';

interface RawPost {
  slug: string;
  date: string;
  tags: string[];
  readMinutes: number;
  cover: Cover;
  image?: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  body: Record<Lang, string[]>;
}

const posts: RawPost[] = [
  {
    slug: 'bulan-pertama-magang-sinar-teknologi',
    date: '2026-11-09',
    tags: ['Magang', 'Konten'],
    readMinutes: 7,
    cover: 'beam',
    image: blog1Image,
    title: {
      id: 'Bulan Pertama Magang di CV Sinar Teknologi: Dari Onboarding Sampai Eksekusi Konten Pertama',
      en: 'First Month Interning at CV Sinar Teknologi: From Onboarding to Our First Content Execution',
    },
    excerpt: {
      id: 'Minggu pertama magang langsung dihadapkan pada brief nyata: menyusun konten promosi untuk CV Sinar Teknologi.',
      en: 'The first week of the internship put us straight in front of a real brief: building promotional content for CV Sinar Teknologi.',
    },
    body: {
      id: [
        'Memasuki minggu pertama magang, tim kami sudah diberikan tugas untuk membuat konten promosi guna memasarkan jasa dari perusahaan tempat kami magang, CV Sinar Teknologi. Tidak ada masa pemanasan yang panjang: setelah sesi onboarding singkat, mentor menyerahkan brief dan kami diminta langsung masuk ke alur kerja yang sebenarnya.',
        'Dokumentasi di atas merekam momen ketika tim kami sedang membedah brief tugas yang diberikan mentor. Foto ini mengabadikan sesi brainstorming perdana kami, di mana kami saling bertukar ide dan menyelaraskan strategi dalam menyusun konsep konten yang relevan dengan target audiens perusahaan.',
        'Diskusinya berjalan dari hal yang paling mendasar: siapa audiensnya, masalah apa yang ingin diselesaikan layanan perusahaan, dan pesan apa yang harus lebih dulu dipahami calon klien. Dari situ kami menyusun beberapa alternatif angle, memilih format yang paling masuk akal untuk tiap kanal, lalu menyepakati pembagian kerja agar eksekusi tidak menumpuk di satu orang.',
        'Suasana kolaboratif dan fokus yang terbangun di meja kerja ini menjadi langkah awal kami dalam memahami standar eksekusi profesional sekaligus adaptasi nyata di lingkungan industri. Brief tidak kami perlakukan sebagai instruksi kaku, melainkan sebagai titik awal diskusi — karena keputusan konten yang baik selalu lahir dari pemahaman, bukan dari menebak.',
        'Di akhir minggu, konten pertama berhasil dieksekusi dan direview mentor. Banyak revisi, tentu saja, tapi proses itulah yang paling berharga: saya belajar bahwa standar industri bukan soal hasil yang langsung sempurna, melainkan soal seberapa cepat dan tertib kita memperbaiki diri di setiap putaran umpan balik.',
      ],
      en: [
        'Entering the first week of the internship, our team was already handed a task: producing promotional content to market the services of the company we interned at, CV Sinar Teknologi. There was no long warm-up: after a short onboarding session, the mentor handed over the brief and asked us to step straight into the real workflow.',
        'The documentation above captures the moment our team dissected the task brief given by the mentor. This photo preserves our very first brainstorming session, where we exchanged ideas and aligned our strategy in shaping a content concept that was relevant to the company\u2019s target audience.',
        'The discussion started from the most basic questions: who the audience is, what problem the company\u2019s services solve, and which message a prospective client needs to understand first. From there we drafted several alternative angles, picked the format that made the most sense for each channel, and agreed on a division of work so execution would not pile onto one person.',
        'The collaborative and focused atmosphere built around that desk became our first step in understanding professional execution standards as well as a real adaptation to an industry environment. We did not treat the brief as rigid instructions, but as the starting point of a discussion — because good content decisions always come from understanding, not from guessing.',
        'By the end of the week, the first piece of content was executed and reviewed by the mentor. There were plenty of revisions, of course, but that process was the most valuable part: I learned that industry standards are not about getting it perfect on the first try, but about how quickly and methodically we improve on every round of feedback.',
      ],
    },
  },
  {
    slug: 'portfolio-yang-terasa-hidup',
    date: '2026-11-02',
    tags: ['Frontend', 'Motion'],
    readMinutes: 6,
    cover: 'aurora',
    title: {
      id: 'Membangun Portfolio yang Terasa Hidup',
      en: 'Building a Portfolio That Feels Alive',
    },
    excerpt: {
      id: 'Catatan soal motion, performa, dan kenapa portfolio seharusnya terasa seperti produk, bukan CV digital.',
      en: 'Notes on motion, performance, and why a portfolio should feel like a product, not a digital CV.',
    },
    body: {
      id: [
        'Portfolio yang baik bukan sekadar daftar proyek. Ia adalah produk pertama yang orang coba sebelum mereka memutuskan untuk menghubungi. Artinya, setiap detail — kecepatan muat, ritme animasi, cara halaman merespons sentuhan — ikut berbicara tentang cara saya bekerja.',
        'Karena itu saya memperlakukan motion sebagai bagian dari informasi, bukan hiasan. Transisi yang halus menunjukkan hierarki; jeda yang tepat memberi waktu membaca; gerakan kecil menandakan sesuatu bisa diklik. Semua itu harus punya alasan, kalau tidak, ia hanya menambah beban kognitif.',
        'Performa adalah batasan yang menyertainya. Animasi yang indah tidak ada artinya kalau halaman butuh lima detik untuk muncul di ponsel kelas menengah. Saya mulai dari yang paling murah: animasi CSS, transform dan opacity, lalu JS hanya ketika memang dibutuhkan. Efek berat seperti 3D saya muat setelah konten utama siap.',
        'Keputusan yang paling sering saya ulang adalah memotong. Setiap section harus menjawab satu pertanyaan pengunjung: siapa kamu, apa yang kamu kerjakan, dan bagaimana cara menghubungimu. Kalau sebuah blok tidak menjawab salah satunya, blok itu keluar.',
        'Hasilnya bukan portfolio yang paling ramai, tapi yang paling tenang dipakai. Dan itu justru yang saya inginkan: pengunjung datang untuk melihat karya, bukan untuk mengagumi efeknya.',
      ],
      en: [
        'A good portfolio is not just a list of projects. It is the first product people try before they decide to reach out. That means every detail — load speed, animation rhythm, how a page responds to touch — speaks about how I work.',
        'So I treat motion as information, not decoration. Smooth transitions reveal hierarchy; a well-timed pause gives room to read; small movements signal that something is clickable. Each of those needs a reason, otherwise it only adds cognitive load.',
        'Performance is the constraint that comes with it. Beautiful animation means nothing if the page takes five seconds to appear on a mid-range phone. I start with the cheapest option: CSS animation, transform and opacity, and only reach for JS when it is truly needed. Heavy effects like 3D load after the main content is ready.',
        'The decision I repeat most is cutting things. Every section has to answer one visitor question: who are you, what do you build, and how do I reach you. If a block does not answer one of those, it goes.',
        'The result is not the busiest portfolio, but the calmest one to use. And that is exactly what I want: visitors come to see the work, not to admire the effects.',
      ],
    },
  },
  {
    slug: 'ml-untuk-web-developer',
    date: '2026-10-14',
    tags: ['AI', 'Backend'],
    readMinutes: 8,
    cover: 'beam',
    title: {
      id: 'Machine Learning untuk Web Developer',
      en: 'Machine Learning for Web Developers',
    },
    excerpt: {
      id: 'Jalur praktis masuk ke ML tanpa meninggalkan dunia web: mulai dari data, bukan dari model.',
      en: 'A practical path into ML without leaving the web world: start from data, not from the model.',
    },
    body: {
      id: [
        'Sebagian besar developer web yang ingin masuk machine learning terjebak di awal yang salah: menghafal arsitektur model sebelum memahami datanya. Padahal pekerjaan ML yang sebenarnya hampir selalu dimulai dari pertanyaan sederhana — data apa yang saya punya, dan keputusan apa yang ingin saya bantu?',
        'Cara termurah untuk mulai adalah mengambil satu masalah yang benar-benar Anda hadapi. Misalnya mengklasifikasi pesan masuk, merangkum feedback pengguna, atau memprediksi apakah sebuah proyek akan terlambat. Tugas kecil seperti ini memberi siklus lengkap: kumpulkan data, bersihkan, latih, evaluasi, lalu deploy.',
        'Untuk tahap awal, model yang sederhana hampir selalu menang. Logistic regression dan decision tree mudah dijelaskan, cepat dilatih, dan jarang mengejutkan. Neural network baru masuk akal ketika datanya besar dan polanya tidak lagi bisa ditangkap fitur manual.',
        'Sisi web justru keunggulan Anda. Kemampuan membungkus model menjadi API, menangani validasi input, menulis error yang bisa dibaca, dan memantau performa di produksi adalah bagian yang paling sering diabaikan tim data. Di situlah developer web paling dibutuhkan.',
        'Yang terakhir, jangan mengejar sertifikat sebelum punya satu proyek utuh dari data mentah sampai endpoint yang bisa dipanggil. Satu proyek kecil yang selesai mengajarkan lebih banyak daripada sepuluh kursus yang berhenti di notebook.',
      ],
      en: [
        'Most web developers who want to get into machine learning get stuck at the wrong starting point: memorizing model architectures before understanding the data. Real ML work almost always starts from a simple question — what data do I have, and what decision am I trying to support?',
        'The cheapest way to start is to take a problem you actually face. Classifying incoming messages, summarizing user feedback, or predicting whether a project will slip. A small task like that gives you the full cycle: collect data, clean it, train, evaluate, then deploy.',
        'For the early stage, simple models almost always win. Logistic regression and decision trees are easy to explain, fast to train, and rarely surprising. Neural networks only make sense once the data is large and the patterns can no longer be captured by hand-written features.',
        'The web side is your advantage. Wrapping a model into an API, handling input validation, writing readable errors, and monitoring production performance are the parts data teams most often neglect. That is where web developers are most needed.',
        'Finally, do not chase certificates before you have one complete project from raw data to a callable endpoint. One finished small project teaches more than ten courses that stop at the notebook.',
      ],
    },
  },
  {
    slug: 'design-token-bukan-komponen',
    date: '2026-09-21',
    tags: ['Design', 'Frontend'],
    readMinutes: 5,
    cover: 'grid',
    title: {
      id: 'Sistem Desain Mini: Token Dulu, Komponen Kemudian',
      en: 'Mini Design System: Tokens First, Components Later',
    },
    excerpt: {
      id: 'Kenapa warna, jarak, dan tipografi sebaiknya disepakati sebelum satu komponen pun ditulis.',
      en: 'Why colors, spacing, and typography should be agreed on before a single component is written.',
    },
    body: {
      id: [
        'Sistem desain sering dimulai dari hal yang salah: membuat library komponen. Padahal komponen tanpa keputusan bersama hanya memindahkan inkonsistensi ke dalam kode. Yang dibutuhkan lebih dulu adalah token — nilai-nilai dasar yang dipakai semua orang.',
        'Token yang cukup untuk proyek kecil bisa dihitung dengan satu tangan: beberapa warna permukaan, satu warna aksen, dua warna teks, satu skala jarak, dan satu pasang font. Semuanya disimpan di satu tempat, biasanya CSS variable, lalu dipakai lewat utility class.',
        'Setelah token stabil, komponen tumbuh dengan sendirinya. Button, card, dan chip tidak lagi mendefinisikan warna sendiri; mereka merangkai token. Ketika tema berubah, satu file berubah dan seluruh halaman ikut.',
        'Kesalahan berikutnya adalah membuat abstraksi terlalu dini. Komponen dengan lima props untuk kasus yang belum ada adalah utang, bukan investasi. Saya lebih memilih menduplikasi dua baris class daripada membuat varian yang tidak terpakai.',
        'Sistem desain yang sehat terasa membosankan: semua orang tahu harus memakai apa. Kebosanan itu justru tujuannya, karena energi tim bisa dipakai untuk hal yang lebih menarik daripada mendebat abu-abu tombol.',
      ],
      en: [
        'Design systems often start with the wrong thing: building a component library. Components without shared decisions only move inconsistency into code. What you need first are tokens — the base values everyone uses.',
        'Tokens for a small project fit on one hand: a few surface colors, one accent, two text colors, one spacing scale, and one font pair. They live in one place, usually CSS variables, and get consumed through utility classes.',
        'Once the tokens are stable, components grow on their own. Buttons, cards, and chips no longer define their own colors; they compose tokens. When the theme changes, one file changes and every page follows.',
        'The next mistake is abstracting too early. A component with five props for a case that does not exist yet is debt, not investment. I would rather duplicate two lines of classes than ship an unused variant.',
        'A healthy design system feels boring: everyone knows what to use. That boredom is the point, because the team\u2019s energy can go to something more interesting than arguing about the gray of a button.',
      ],
    },
  },
];

export interface Post {
  slug: string;
  date: string;
  tags: string[];
  readMinutes: number;
  cover: Cover;
  image?: string;
  title: string;
  excerpt: string;
  body: string[];
}

export function localizedPosts(lang: Lang): Post[] {
  return posts
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => ({
      slug: p.slug,
      date: p.date,
      tags: p.tags,
      readMinutes: p.readMinutes,
      cover: p.cover,
      image: p.image,
      title: p.title[lang],
      excerpt: p.excerpt[lang],
      body: p.body[lang],
    }));
}

export function coverClass(cover: Cover) {
  return `post-art post-art-${cover}`;
}

export function fmtDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(iso));
}
