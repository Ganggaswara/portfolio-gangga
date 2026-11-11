import type { Lang } from '../i18n/dict';
import blog1Image from '../assets/blog/blog1.webp';
import blog2Image from '../assets/blog/blog2.webp';
import routerUsage from '../assets/blog/9router-usage.webp';
import routerCover from '../assets/blog/9router-hero.webp';
import openclawCover from '../assets/blog/openclaw-cover.svg';

export type Cover = 'aurora' | 'grid' | 'beam';

interface RawPost {
  slug: string;
  date: string;
  tags: string[];
  readMinutes: number;
  cover: Cover;
  image?: string;
  figure?: { image: string; caption: Record<Lang, string> };
  figureAfter?: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  body: Record<Lang, string[]>;
}

const posts: RawPost[] = [
  {
    slug: 'openclaw-gateway-untuk-agen-ai',
    date: '2026-11-11',
    tags: ['AI', 'Tooling'],
    readMinutes: 7,
    cover: 'beam',
    image: openclawCover,
    title: {
      id: 'OpenClaw: Gateway Mandiri untuk Agen AI di Aplikasi Chat',
      en: 'OpenClaw: A Self-Hosted Gateway for AI Agents in Chat Apps',
    },
    excerpt: {
      id: 'OpenClaw menyatukan WhatsApp, Telegram, Discord, dan kanal lain ke satu gateway yang menjalankan agen AI di perangkat sendiri.',
      en: 'OpenClaw unifies WhatsApp, Telegram, Discord, and other channels into one gateway that runs AI agents on your own device.',
    },
    body: {
      id: [
        'Kalau 9Router merapikan jalan menuju banyak model, OpenClaw merapikan jalan dari banyak aplikasi chat menuju agen AI. Keduanya sama-sama lapisan perantara, hanya saja titik beratnya berbeda: 9Router berbicara soal model, sementara OpenClaw berbicara soal kanal percakapan.',
        'OpenClaw adalah gateway yang dijalankan sendiri. Satu proses berjalan di komputer atau server milik Anda, lalu proses itu menjadi jembatan antara aplikasi chat dan asisten AI yang selalu siap. Yang dibutuhkan bukan langganan layanan pihak ketiga, melainkan satu proses yang Anda kendalikan sendiri.',
        'Kanal masuknya banyak. WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, Microsoft Teams, hingga Matrix bisa disambungkan lewat plugin kanal. Semuanya bermuara di satu tempat, sehingga agen tidak perlu ditulis ulang untuk setiap aplikasi chat yang berbeda.',
        'Di dalam gateway, sesi dan perutean disimpan sebagai satu sumber kebenaran. Pesan dari kanal berbeda diarahkan ke agen yang sesuai, lengkap dengan konteks percakapannya. Karena semuanya melewati satu titik, riwayat, identitas, dan aturan akses dapat dijaga secara konsisten.',
        'Selain aplikasi chat, gateway juga melayani beberapa klien lain: CLI, web control UI, aplikasi macOS, serta node iOS dan Android. Semua klien itu berbicara lewat protokol WebSocket yang sama. Artinya, mengelola agen dari terminal dan dari ponsel pada dasarnya menyentuh sistem yang sama.',
        'Agen di dalamnya bukan sekadar pembalas pesan. Ia bisa memanggil tools, membaca workspace, dan menjalankan tugas bertahap. Karena berjalan di mesin sendiri, batas kemampuan dan izin aksesnya bisa diatur sesuai kebutuhan, tanpa bergantung pada kebijakan penyedia luar.',
        'Menariknya, lapisan ini bisa bertumpuk dengan router model. OpenClaw menangani kanal dan sesi, sementara 9Router menangani pemilihan model di belakangnya. Hasilnya satu jalur yang rapi dari pesan WhatsApp sampai jawaban model, masing-masing lapisan punya tugas yang jelas.',
        'Untuk siapa ini berguna? Terutama bagi yang ingin asisten AI-nya hadir di aplikasi chat yang sudah dipakai sehari-hari, tetapi tetap ingin kendali penuh atas data dan prosesnya. Yang perlu disiapkan cukup satu mesin yang menyala, konfigurasi kanal, dan model yang siap dipanggil.',
        'Catatan pentingnya, menjalankan gateway sendiri berarti tanggung jawabnya juga ikut sendiri: pembaruan, keamanan token, dan pemantauan proses ada di tangan Anda. Ini bukan kekurangan, melainkan konsekuensi wajar dari memilih kendali penuh dibanding kemudahan layanan siap pakai.',
      ],
      en: [
        'If 9Router tidies the road to many models, OpenClaw tidies the road from many chat apps to an AI agent. Both are intermediary layers, only with different focus: 9Router is about models, while OpenClaw is about conversation channels.',
        'OpenClaw is a gateway you host yourself. A single process runs on your own computer or server, and that process becomes the bridge between your chat apps and an always-available AI assistant. What you need is not a third-party subscription, but one process you control.',
        'The inbound channels are many. WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, Microsoft Teams, and Matrix can be connected through channel plugins. They all converge in one place, so the agent does not need to be rewritten for every different chat app.',
        'Inside the gateway, sessions and routing live as a single source of truth. Messages from different channels are directed to the right agent, complete with conversational context. Because everything passes through one point, history, identity, and access rules can be kept consistent.',
        'Beyond chat apps, the gateway also serves several other clients: the CLI, the web control UI, the macOS app, and iOS and Android nodes. All of them speak over the same WebSocket protocol. That means managing agents from a terminal and from a phone touch the same system.',
        'The agent inside is not just a message replier. It can call tools, read the workspace, and run multi-step tasks. Because it runs on your own machine, its capability limits and permissions can be configured to your needs without depending on an outside provider\u2019s policy.',
        'Interestingly, this layer can stack with a model router. OpenClaw handles channels and sessions, while 9Router handles model selection behind it. The result is one tidy path from a WhatsApp message to a model answer, each layer with a clear job.',
        'Who is this useful for? Mainly for those who want their AI assistant present in the chat apps they already use daily, while keeping full control over the data and the process. All you need is one machine that stays on, channel configuration, and a model ready to be called.',
        'The important caveat: running your own gateway means the responsibility is yours too. Updates, token security, and process monitoring sit in your hands. That is not a flaw, but the natural consequence of choosing full control over the convenience of a ready-made service.',
      ],
    },
  },
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
    figure: {
      image: routerUsage,
      caption: {
        id: 'Tampilan 9Router saat dipakai: daftar model dan rutenya terlihat di satu halaman, jadi tidak perlu membuka konfigurasi penyedia satu per satu untuk tahu model apa yang sedang aktif.',
        en: '9Router in use: the model list and its routes sit on a single page, so there is no need to open each provider configuration just to see which model is active.',
      },
    },
    figureAfter: 3,
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
        '',
        'Yang membuatnya berguna sehari-hari adalah kemungkinan mengatur beberapa penyedia di satu tempat. Model yang berbeda bisa diarahkan ke server lokal, ke penyedia berlangganan, atau ke endpoint bersama di jaringan kantor. Ketika satu penyedia sedang lambat atau kena limit, rute bisa dipindah tanpa menyentuh kode aplikasi.',
        'Di tangkapan layar di atas, semua model yang terdaftar terlihat di satu halaman yang sama, lengkap dengan rute dan statusnya. Tidak ada lagi bolak-balik membuka konfigurasi tiap penyedia hanya untuk memastikan model mana yang sedang aktif. Kalau mau mencoba model lain, cukup daftarkan rutenya di sini, dan aplikasi tetap memanggil alamat yang sama.',
        'Alur lengkapnya: klien mengirim permintaan, 9Router memilih rute berdasarkan nama model, lalu jawabannya kembali dengan format yang seragam. Semua kabel yang tadinya harus dipasang satu per satu di dalam aplikasi kini berkumpul di satu titik. Dari sudut pandang kode, hanya ada satu endpoint yang perlu diingat.',
        'Catatan pentingnya, 9Router bukan model dan bukan penyedia. Ia tidak menambah kecerdasan apa pun, tidak menyimpan riwayat panjang, dan tidak menggantikan kualitas model di belakangnya. Ia hanya merapikan jalan menuju model tersebut. Kalau butuh hasil yang lebih baik, yang harus diganti tetap modelnya, bukan routernya.',
        'Bagi saya nilainya ada di sisi operasional. Konfigurasi jadi satu file, percobaan model baru tidak lagi berisiko merusak aplikasi, dan tim bisa memakai endpoint yang sama dengan kunci yang sama. Untuk proyek kecil pun, penghematan waktu dari hal-hal seperti ini terasa lebih nyata daripada menambah satu model lagi ke daftar.',
      ],
      en: [
        'Once you start using more than one AI model, the problem stops being answer quality. It moves to something far more boring: every provider has its own base URL, API shape, key, quota, and error habits. Every time I wanted to try another model, I had to change the app configuration and adjust the calling code.',
        '9Router exists to cut that work out. It is an intermediary layer that accepts requests in the OpenAI-compatible API format, then forwards them to whichever model is registered inside it. The app keeps talking to a single address, while several providers can sit behind it.',
        'The mechanics are easy to picture. The client sends a request to one base URL. 9Router reads the requested model name, picks the matching route, and returns the answer in the same shape the original provider sent. Because the format is OpenAI-compatible, almost every existing library and editor works without meaningful changes.',
        '',
        'What makes it useful day to day is the ability to configure several providers in one place. Different models can point at a local server, a subscription provider, or a shared endpoint on the office network. When one provider gets slow or rate limited, the route can be moved without touching application code.',
        'In the screenshot above, every registered model appears on one page, complete with its route and status. No more switching between provider configurations just to check which model is active. To try another model, you register its route here, and the app keeps calling the same address.',
        'The full flow: the client sends a request, 9Router picks a route based on the model name, and the answer comes back in a uniform format. All the cables that used to be wired one by one inside the app now gather at a single point. From the code perspective, there is only one endpoint to remember.',
        'The important caveat: 9Router is not a model and not a provider. It adds no intelligence, keeps no long history, and does not replace the quality of the model behind it. It only tidies the road to that model. If you need better results, the thing to swap is still the model, not the router.',
        'For me the value sits on the operational side. Configuration becomes one file, trying a new model no longer risks breaking the app, and a team can share the same endpoint with the same key. Even on a small project, the time saved by things like this feels more real than adding one more model to the list.',
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
  figure?: { image: string; caption: string };
  figureAfter?: number;
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
      figure: p.figure ? { image: p.figure.image, caption: p.figure.caption[lang] } : undefined,
      figureAfter: p.figureAfter,
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
