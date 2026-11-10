import type { Lang } from '../i18n/dict';
import blog1Image from '../assets/blog/blog1.webp';
import blog2Image from '../assets/blog/blog2.webp';
import routerCover from '../assets/blog/9router-hero.webp';

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
    slug: 'kunjungan-pembimbing-magang-kampus',
    date: '2026-11-10',
    tags: ['Magang', 'Kampus'],
    readMinutes: 6,
    cover: 'aurora',
    image: blog2Image,
    title: {
      id: 'Kunjungan Pembimbing Magang Kampus ke CV Sinar Teknologi',
      en: 'Campus Internship Supervisor Visits CV Sinar Teknologi',
    },
    excerpt: {
      id: 'Momen pembimbing magang dari kampus datang langsung ke tempat magang untuk melihat bagaimana kami bekerja.',
      en: 'The moment our campus internship supervisor came to the workplace to see how we were working.',
    },
    body: {
      id: [
        'Beberapa waktu setelah kami mulai magang, pembimbing magang dari kampus datang berkunjung ke CV Sinar Teknologi. Kunjungan ini bukan sekadar formalitas, melainkan bagian dari tanggung jawab kampus untuk memastikan mahasiswa benar-benar mendapatkan pengalaman kerja yang sesuai dengan bidang studi.',
        'Pada foto di atas, terlihat momen saat pembimbing magang berbincang dengan kami di tempat kerja. Suasananya santai, tetapi isinya cukup padat. Kami diminta menceritakan apa saja yang sudah dikerjakan, kendala apa yang dihadapi, dan bagaimana kami beradaptasi dengan ritme kerja perusahaan.',
        'Selain berbincang dengan kami, pembimbing juga berdiskusi dengan mentor di tempat magang. Keduanya bertukar pandangan mengenai progres kami, hal-hal yang sudah berkembang, serta aspek yang masih perlu dilatih. Bagi saya, momen ini menunjukkan bahwa kampus dan perusahaan memang berusaha berjalan searah dalam proses pembelajaran.',
        'Setelah kunjungan, kami mencatat poin-poin pentingnya dan menjadikannya acuan untuk minggu-minggu berikutnya. Kami mulai lebih memperhatikan detail kecil yang sebelumnya terlewat, dan mencoba menerapkan saran yang diberikan secara perlahan tetapi konsisten.',
        'Kesimpulannya, kunjungan pembimbing magang ini memberi dua hal sekaligus: pengawasan yang memastikan kami berada di jalur yang benar, dan motivasi karena pekerjaan kami diperhatikan secara langsung. Bagi saya pribadi, ini menjadi pengingat bahwa magang bukan hanya soal menyelesaikan tugas, tetapi juga soal membangun cara kerja yang lebih tertib dari waktu ke waktu.',
      ],
      en: [
        'Some time after we started the internship, our campus internship supervisor came to visit CV Sinar Teknologi. The visit was not just a formality; it is part of the campus responsibility to make sure students genuinely gain work experience that matches their field of study.',
        'The photo above captures the moment our supervisor chatted with us at the workplace. The atmosphere was relaxed, but what was covered had real weight. We were asked to describe what we had worked on, what obstacles we faced, and how we were adapting to the company\u2019s working rhythm.',
        'Besides talking with us, the supervisor also spoke with the on-site mentor. The two exchanged views on our progress, the things we had developed, and the aspects that still needed training. For me, this moment showed that the campus and the company are genuinely trying to move in the same direction in the learning process.',
        'After the visit, we noted the key points and used them as a reference for the following weeks. We started paying closer attention to the small details we had previously missed, and tried to apply the suggestions slowly but consistently.',
        'In short, this visit gave us two things at once: oversight that made sure we were on the right track, and motivation from knowing our work was being watched closely. For me personally, it was a reminder that an internship is not only about finishing tasks, but also about building a more disciplined way of working over time.',
      ],
    },
  },
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
        'Memasuki minggu pertama magang, kami langsung mendapat tugas untuk membuat konten promosi bagi CV Sinar Teknologi. Setelah sesi perkenalan singkat, mentor mulai menjelaskan pekerjaan yang akan kami lakukan. Tidak butuh waktu lama untuk mulai terlibat langsung dalam kegiatan perusahaan.',
        'Pada foto di atas, terlihat suasana ketika kami sedang berdiskusi membahas tugas yang diberikan mentor. Ini menjadi salah satu momen pertama kami bekerja bersama, saling menyampaikan ide, dan mencari cara terbaik untuk membuat konten promosi yang sesuai dengan kebutuhan perusahaan.',
        'Diskusinya cukup seru. Kami mulai membicarakan siapa target yang ingin dijangkau, layanan apa yang ingin diperkenalkan, serta bagaimana cara menyampaikan informasi tersebut agar mudah dipahami calon pelanggan. Beberapa ide muncul selama diskusi, ada yang langsung cocok, ada juga yang masih perlu dipertimbangkan. Setelah menemukan konsep yang dirasa sesuai, kami mulai membagi tugas agar pekerjaan bisa diselesaikan bersama.',
        'Dari kegiatan sederhana ini, saya mulai mendapat gambaran tentang bagaimana pekerjaan di lingkungan perusahaan berjalan. Ternyata, membuat konten bukan hanya soal mencari ide lalu langsung mengerjakannya. Ada banyak hal yang perlu dibicarakan terlebih dahulu agar hasilnya sesuai dengan tujuan yang diinginkan.',
        'Menjelang akhir minggu, konten pertama kami akhirnya selesai dan mendapat kesempatan untuk direview oleh mentor. Tentu masih ada beberapa bagian yang perlu diperbaiki. Namun, dari proses tersebut saya belajar bahwa revisi adalah hal yang wajar dalam sebuah pekerjaan. Justru dari masukan yang diberikan, kami bisa mengetahui apa yang masih kurang dan bagaimana membuat hasil berikutnya menjadi lebih baik.',
      ],
      en: [
        'In the first week of the internship, we were immediately given the task of creating promotional content for CV Sinar Teknologi. After a short introduction session, the mentor began explaining the work we would be doing. It did not take long before we were directly involved in the company\u2019s activities.',
        'The photo above shows us discussing the task given by the mentor. It was one of our first moments working together, sharing ideas, and finding the best way to produce promotional content that fit the company\u2019s needs.',
        'The discussion was lively. We started talking about who the target audience was, which services we wanted to introduce, and how to deliver that information so prospective customers could easily understand it. Several ideas came up during the discussion; some fit right away, others still needed consideration. Once we found a concept that felt right, we began dividing the work so it could be finished together.',
        'From this simple activity, I started to get a picture of how work in a company environment actually runs. It turns out that creating content is not just about finding an idea and executing it right away. There are many things that need to be discussed first so the result matches the intended goal.',
        'Towards the end of the week, our first piece of content was finally finished and had the chance to be reviewed by the mentor. Some parts still needed improvement, of course. But from that process I learned that revision is a normal part of any work. It is precisely from the feedback given that we can see what is still lacking and how to make the next result better.',
      ],
    },
  },
  {
    slug: 'mengenal-9router-satu-endpoint-banyak-model',
    date: '2026-11-06',
    tags: ['AI', 'Tooling'],
    readMinutes: 6,
    cover: 'grid',
    image: routerCover,
    title: {
      id: 'Mengenal 9Router: Satu Endpoint untuk Banyak Model AI',
      en: 'Getting to Know 9Router: One Endpoint for Many AI Models',
    },
    excerpt: {
      id: 'Penjelasan singkat soal 9Router, lapisan yang menyatukan banyak model AI di balik satu API yang kompatibel dengan OpenAI.',
      en: 'A short explainer on 9Router, the layer that unifies many AI models behind a single OpenAI-compatible API.',
    },
    body: {
      id: [
        'Waktu mulai memakai lebih dari satu model AI, masalahnya bukan lagi soal kualitas jawaban. Masalahnya pindah ke hal yang jauh lebih membosankan: setiap penyedia punya base URL, format API, kunci, kuota, dan kebiasaan error yang berbeda. Setiap kali ingin mencoba model lain, saya harus mengubah konfigurasi aplikasi dan menyesuaikan kode yang memanggilnya.',
        '9Router hadir untuk memotong pekerjaan itu. Ia adalah lapisan perantara yang menerima permintaan dalam format API yang kompatibel dengan OpenAI, lalu meneruskannya ke model mana pun yang sudah didaftarkan di dalamnya. Aplikasi tetap berbicara ke satu alamat, sementara di belakangnya bisa ada beberapa penyedia sekaligus.',
        'Cara kerjanya sederhana kalau dibayangkan. Sisi klien mengirim permintaan ke satu base URL. 9Router membaca nama model yang diminta, memilih rute yang cocok, lalu mengembalikan jawaban dengan bentuk yang sama seperti yang dikirim penyedia aslinya. Karena formatnya kompatibel dengan OpenAI, hampir semua library dan editor yang sudah ada bisa langsung dipakai tanpa perubahan berarti.',
        'Yang membuatnya berguna sehari-hari adalah kemungkinan mengatur beberapa penyedia di satu tempat. Model yang berbeda bisa diarahkan ke server lokal, ke penyedia berlangganan, atau ke endpoint bersama di jaringan kantor. Ketika satu penyedia sedang lambat atau kena limit, rute bisa dipindah tanpa menyentuh kode aplikasi.',
        'Diagram di atas menunjukkan alurnya: klien di sisi kiri, 9Router di tengah, dan beberapa model di sisi kanan. Semua kabel yang tadinya harus dipasang satu per satu di dalam aplikasi kini berkumpul di satu titik. Dari sudut pandang kode, hanya ada satu endpoint yang perlu diingat.',
        'Catatan pentingnya, 9Router bukan model dan bukan penyedia. Ia tidak menambah kecerdasan apa pun, tidak menyimpan riwayat panjang, dan tidak menggantikan kualitas model di belakangnya. Ia hanya merapikan jalan menuju model tersebut. Kalau butuh hasil yang lebih baik, yang harus diganti tetap modelnya, bukan routernya.',
        'Bagi saya nilainya ada di sisi operasional. Konfigurasi jadi satu file, percobaan model baru tidak lagi berisiko merusak aplikasi, dan tim bisa memakai endpoint yang sama dengan kunci yang sama. Untuk proyek kecil pun, penghematan waktu dari hal-hal seperti ini terasa lebih nyata daripada menambah satu model lagi ke daftar.',
      ],
      en: [
        'Once you start using more than one AI model, the problem stops being answer quality. It moves to something far more boring: every provider has its own base URL, API shape, key, quota, and error habits. Every time I wanted to try another model, I had to change the app configuration and adjust the calling code.',
        '9Router exists to cut that work out. It is an intermediary layer that accepts requests in the OpenAI-compatible API format, then forwards them to whichever model is registered inside it. The app keeps talking to a single address, while several providers can sit behind it.',
        'The mechanics are easy to picture. The client sends a request to one base URL. 9Router reads the requested model name, picks the matching route, and returns the answer in the same shape the original provider sent. Because the format is OpenAI-compatible, almost every existing library and editor works without meaningful changes.',
        'What makes it useful day to day is the ability to configure several providers in one place. Different models can point at a local server, a subscription provider, or a shared endpoint on the office network. When one provider gets slow or rate limited, the route can be moved without touching application code.',
        'The diagram above shows the flow: clients on the left, 9Router in the middle, and several models on the right. All the cables that used to be wired one by one inside the app now gather at a single point. From the code perspective, there is only one endpoint to remember.',
        'The important caveat: 9Router is not a model and not a provider. It adds no intelligence, keeps no long history, and does not replace the quality of the model behind it. It only tidies the road to that model. If you need better results, the thing to swap is still the model, not the router.',
        'For me the value sits on the operational side. Configuration becomes one file, trying a new model no longer risks breaking the app, and a team can share the same endpoint with the same key. Even on a small project, the time saved by things like this feels more real than adding one more model to the list.',
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
        'Portfolio yang baik bukan sekadar daftar proyek. Ia adalah produk pertama yang orang coba sebelum mereka memutuskan untuk menghubungi. Artinya, setiap detail ikut berbicara tentang cara saya bekerja: kecepatan muat, ritme animasi, cara halaman merespons sentuhan.',
        'Karena itu saya memperlakukan motion sebagai bagian dari informasi, bukan hiasan. Transisi yang halus menunjukkan hierarki; jeda yang tepat memberi waktu membaca; gerakan kecil menandakan sesuatu bisa diklik. Semua itu harus punya alasan, kalau tidak, ia hanya menambah beban kognitif.',
        'Performa adalah batasan yang menyertainya. Animasi yang indah tidak ada artinya kalau halaman butuh lima detik untuk muncul di ponsel kelas menengah. Saya mulai dari yang paling murah: animasi CSS, transform dan opacity, lalu JS hanya ketika memang dibutuhkan. Efek berat seperti 3D saya muat setelah konten utama siap.',
        'Keputusan yang paling sering saya ulang adalah memotong. Setiap section harus menjawab satu pertanyaan pengunjung: siapa kamu, apa yang kamu kerjakan, dan bagaimana cara menghubungimu. Kalau sebuah blok tidak menjawab salah satunya, blok itu keluar.',
        'Hasilnya bukan portfolio yang paling ramai, tapi yang paling tenang dipakai. Dan itu justru yang saya inginkan: pengunjung datang untuk melihat karya, bukan untuk mengagumi efeknya.',
      ],
      en: [
        'A good portfolio is not just a list of projects. It is the first product people try before they decide to reach out. That means every detail speaks about how I work: load speed, animation rhythm, how a page responds to touch.',
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
        'Sebagian besar developer web yang ingin masuk machine learning terjebak di awal yang salah: menghafal arsitektur model sebelum memahami datanya. Padahal pekerjaan ML yang sebenarnya hampir selalu dimulai dari pertanyaan sederhana: data apa yang saya punya, dan keputusan apa yang ingin saya bantu?',
        'Cara termurah untuk mulai adalah mengambil satu masalah yang benar-benar Anda hadapi. Misalnya mengklasifikasi pesan masuk, merangkum feedback pengguna, atau memprediksi apakah sebuah proyek akan terlambat. Tugas kecil seperti ini memberi siklus lengkap: kumpulkan data, bersihkan, latih, evaluasi, lalu deploy.',
        'Untuk tahap awal, model yang sederhana hampir selalu menang. Logistic regression dan decision tree mudah dijelaskan, cepat dilatih, dan jarang mengejutkan. Neural network baru masuk akal ketika datanya besar dan polanya tidak lagi bisa ditangkap fitur manual.',
        'Sisi web justru keunggulan Anda. Kemampuan membungkus model menjadi API, menangani validasi input, menulis error yang bisa dibaca, dan memantau performa di produksi adalah bagian yang paling sering diabaikan tim data. Di situlah developer web paling dibutuhkan.',
        'Yang terakhir, jangan mengejar sertifikat sebelum punya satu proyek utuh dari data mentah sampai endpoint yang bisa dipanggil. Satu proyek kecil yang selesai mengajarkan lebih banyak daripada sepuluh kursus yang berhenti di notebook.',
      ],
      en: [
        'Most web developers who want to get into machine learning get stuck at the wrong starting point: memorizing model architectures before understanding the data. Real ML work almost always starts from a simple question: what data do I have, and what decision am I trying to support?',
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
        'Sistem desain sering dimulai dari hal yang salah: membuat library komponen. Padahal komponen tanpa keputusan bersama hanya memindahkan inkonsistensi ke dalam kode. Yang dibutuhkan lebih dulu adalah token, yaitu nilai-nilai dasar yang dipakai semua orang.',
        'Token yang cukup untuk proyek kecil bisa dihitung dengan satu tangan: beberapa warna permukaan, satu warna aksen, dua warna teks, satu skala jarak, dan satu pasang font. Semuanya disimpan di satu tempat, biasanya CSS variable, lalu dipakai lewat utility class.',
        'Setelah token stabil, komponen tumbuh dengan sendirinya. Button, card, dan chip tidak lagi mendefinisikan warna sendiri; mereka merangkai token. Ketika tema berubah, satu file berubah dan seluruh halaman ikut.',
        'Kesalahan berikutnya adalah membuat abstraksi terlalu dini. Komponen dengan lima props untuk kasus yang belum ada adalah utang, bukan investasi. Saya lebih memilih menduplikasi dua baris class daripada membuat varian yang tidak terpakai.',
        'Sistem desain yang sehat terasa membosankan: semua orang tahu harus memakai apa. Kebosanan itu justru tujuannya, karena energi tim bisa dipakai untuk hal yang lebih menarik daripada mendebat abu-abu tombol.',
      ],
      en: [
        'Design systems often start with the wrong thing: building a component library. Components without shared decisions only move inconsistency into code. What you need first are tokens, the base values everyone uses.',
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
