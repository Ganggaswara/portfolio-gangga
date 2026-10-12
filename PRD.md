# Portfolio

------------------------------------------------------------------------

## 1. Ringkasan & Tujuan Aplikasi

*Bagian ini menjelaskan gambaran umum proyek agar dipahami bersama oleh
pemilik ide/klien dan tim pengembang.* - **Nama Aplikasi**: Portfolio -
**Penjelasan Singkat**: Portfolio adalah website personal branding
premium bergaya Futuristic AI Creator yang menampilkan profil
profesional, riwayat pendidikan, pengalaman kerja, showcase karya, dan
tombol Download CV --- dirancang untuk membangun kesan eksklusif,
modern, dan berorientasi teknologi masa depan di mata klien dan
rekruter. - **Masalah yang Diselesaikan**: - Freelancer & profesional
sulit membangun personal branding yang terlihat premium dan berbeda dari
portofolio biasa. - CV statis (PDF/Word) tidak mampu menampilkan
personality, karya visual, dan storytelling karier secara utuh. - Tidak
ada satu kanal terpusat untuk mengarahkan prospek ke WhatsApp secara
langsung tanpa gesekan. - Update konten portofolio biasanya butuh
developer; pemilik tidak punya kendali penuh atas datanya sendiri. -
**Pengguna Aplikasi**: - **Pengunjung Publik (Klien/Rekruter)**: Ingin
menilai kualitas, kredibilitas, dan karya profesional dalam waktu \< 60
detik, lalu menghubungi via WhatsApp atau mengunduh CV. - **Admin
(Pemilik Profil)**: Ingin mengelola seluruh konten (profil, pendidikan,
pengalaman, proyek, skill, CV, pesan WhatsApp log) melalui panel admin
tanpa menyentuh kode. - **Target Keberhasilan**: - Rata-rata waktu
kunjungan \> 1.5 menit per sesi dari halaman hero hingga CTA. - Tingkat
klik tombol **Download CV** \> 25% dari total pengunjung. - Tingkat klik
tombol **WhatsApp** \> 15% dari total pengunjung. - Admin dapat
memperbarui seluruh profil dan karya dalam \< 3 menit tanpa bantuan
developer. - Skor Lighthouse Performance & Accessibility minimum 90
untuk halaman publik.

------------------------------------------------------------------------

## 2. Batasan Pembuatan Sistem (Versi Awal MVP)

*Menegaskan fitur apa yang dikerjakan di versi awal dan apa yang sengaja
ditunda agar aplikasi cepat selesai dan tidak membengkak (mencegah scope
creep).*

### ✅ Yang Dikerjakan:

-   Landing page publik satu halaman dengan konsep long vertical
    storytelling (Hero → Profile → Achievement → Philosophy → Projects →
    Experience → CTA).
-   Halaman detail proyek (`/projects/:slug`) dengan galeri gambar, tech
    stack, dan link demo/repo.
-   Halaman katalog proyek (`/projects`) dengan filter kategori dan
    pencarian.
-   Tombol **Download CV** yang melayani file PDF statis dari server
    (uploadable lewat admin).
-   Tombol **WhatsApp Langsung** dengan pesan pre-filled dinamis
    (mengarah ke nomor admin).
-   Panel Admin (login) untuk CRUD: Profile, Education, Experience,
    Project, Skill, Testimonial, Site Settings, CV File.
-   API backend Express untuk seluruh entitas di atas.
-   Sistem autentikasi Admin (JWT) sederhana dan aman.
-   SEO dasar (meta tags dinamis, Open Graph, sitemap, robots).

### ⛔ Yang Tidak Dikerjakan di Versi Awal:

-   Fitur Blog / Artikel panjang.
-   Multi-admin / role-based permissions tingkat lanjut.
-   Forum komentar atau sistem rating dari pengunjung.
-   Newsletter subscription dan email marketing automation.
-   Integrasi payment gateway (tidak relevan --- tidak ada transaksi).
-   Multi-bahasa (i18n). Fokus Bahasa Indonesia di MVP, teks Inggris
    pada istilah teknis.
-   Aplikasi mobile native.

------------------------------------------------------------------------

## 3. Daftar Halaman & Struktur Menu (Pages & Routing)

*Daftar lengkap halaman yang harus dibuat, dikelompokkan berdasarkan
area atau peran pengguna (Role).*

### A. Public Area (Tanpa Login)

-   `/` (Beranda / Long-Scrolling Landing): Hero dengan large
    typography + cinematic portrait, section Profile, Achievement
    (statistik angka), Philosophy, Featured Projects (grid 3-4 kartu),
    Experience Timeline, CTA Download CV + WhatsApp, dan Footer.
-   `/projects` (Katalog Proyek): Grid seluruh proyek dengan filter
    kategori (Web, Mobile, AI, Design), search bar, dan pagination.
-   `/projects/:slug` (Detail Proyek): Hero proyek, deskripsi panjang,
    galeri gambar, daftar tech stack, periode, peran, link demo & repo,
    dan CTA WhatsApp.
-   `/experience` (Pengalaman & Pendidikan): Timeline lengkap pengalaman
    kerja dan riwayat edukasi.
-   `/thanks` (Halaman Sukses / Redirect WhatsApp): Konfirmasi visual
    setelah klik WhatsApp sebelum redirect.
-   `/404` (Not Found): Halaman error futuristik bergaya HUD.

### B. Admin Area (Setelah Login)

-   `/admin/login` (Login Admin): Form login dengan efek neon glow.
-   `/admin` (Dashboard Admin): Statistik total pengunjung unik
    (opsional counter), jumlah proyek, klik CV, klik WhatsApp, dan
    aktivitas terbaru.
-   `/admin/profile` (Kelola Profil): CRUD data profil (nama, headline,
    bio, foto hero, foto about, WhatsApp, email, sosial media).
-   `/admin/education` (Kelola Pendidikan): CRUD riwayat pendidikan.
-   `/admin/experience` (Kelola Pengalaman): CRUD riwayat pekerjaan.
-   `/admin/projects` (Kelola Proyek): Tabel CRUD proyek dengan filter
    status (Draft/Published), unggah thumbnail, dan multi-gambar.
-   `/admin/skills` (Kelola Skill): CRUD skill dengan kategori
    (Frontend, Backend, Design, Tools) dan level.
-   `/admin/testimonials` (Kelola Testimoni): CRUD testimoni klien
    (opsional ditampilkan).
-   `/admin/cv` (Kelola File CV): Unggah/ganti file CV PDF, atur versi.
-   `/admin/settings` (Pengaturan Situs): Meta SEO (title, description,
    OG image), warna aksen opsional, dan toggle section.

------------------------------------------------------------------------

## 4. Pedoman UI/UX & Design System

*Panduan visual konkret agar AI coding assistant tidak membuat UI yang
kaku atau default.*

-   **Skema Warna (Futuristic AI Creator)**:

    -   Primary Background: `#05060A` (Deep Black)
    -   Secondary Background: `#0A0F1E` (Midnight Navy)
    -   Surface / Card: `rgba(15, 23, 42, 0.55)` (Glassmorphism base)
    -   Primary Accent: `#00E5FF` (Electric Blue)
    -   Secondary Accent: `#FF2E63` (Neon Red)
    -   Gradient Purple:
        `linear-gradient(135deg, #8B5CF6 0%, #C026D3 100%)`
    -   Gradient Cyber Mix:
        `linear-gradient(135deg, #00E5FF 0%, #8B5CF6 50%, #FF2E63 100%)`
    -   Text Primary: `#F1F5F9`
    -   Text Muted: `#94A3B8`
    -   Border Glow: `rgba(0, 229, 255, 0.35)`
    -   Success: `#22C55E` \| Warning: `#FACC15` \| Error: `#EF4444`

-   **Tipografi**:

    -   Headline / Display: **Bebas Neue** atau **Anton** (uppercase,
        letter-spacing lebar, ukuran besar 56--120px).
    -   Sub-headline / UI: **Space Grotesk** (700/600 weight).
    -   Body Text: **Inter** atau **Plus Jakarta Sans** (400/500 weight,
        line-height 1.7).
    -   Mono / HUD data: **JetBrains Mono** (untuk angka statistik &
        label teknis).

-   **Aturan Komponen**:

    -   Kartu utama gunakan **glassmorphism**: `backdrop-blur-xl`,
        `bg-white/5`, `border border-white/10`, `rounded-2xl`,
        `shadow-[0_0_30px_rgba(0,229,255,0.15)]`.
    -   Button gaya **capsule**: `rounded-full`, `px-8 py-3`, neon
        border, inner glow saat hover, animated gradient border.
    -   Elemen AI/HUD: circular ring dengan `animate-spin-slow`, radar
        pulse, loading ring, dan digital core visualization di hero.
    -   Section divider: horizontal glow line dengan gradasi (electric
        blue → transparent → neon red).
    -   Navigation bar: floating pill glassmorphism di atas dengan blur.
    -   Skill bar: neon progress bar dengan glow dan angka persentase
        bergaya HUD.
    -   Timeline: garis vertikal glowing dengan node circular berbentuk
        diamond/dot neon.

-   **Nuansa & Vibe**: Futuristic, premium, misterius, eksklusif,
    high-end AI technology. Atmosphere gelap dengan ambient light,
    glowing particles bergerak lambat di background, subtle noise
    texture, dan micro-interaction pada hover tiap kartu (elevation +
    glow amplification).

-   **Motion & Animasi**:

    -   Smooth scroll (Lenis atau CSS `scroll-behavior: smooth`).
    -   Fade-up on scroll (Framer Motion `whileInView`).
    -   Floating particles & gradient movement di hero dan section CTA.
    -   Hover elevation dengan `scale-[1.02]` + glow amplification.
    -   Page transition fade 300ms.
    -   Cursor spotlight radial gradient mengikuti pointer di hero.

------------------------------------------------------------------------

## 5. Pembagian Hak Akses Pengguna

*Aplikasi ini memiliki sistem login, namun hanya untuk peran Admin
(owner). Seluruh pengunjung publik memiliki akses penuh ke semua halaman
publik tanpa login.*

  ---------------------------------------------------------------------------
  Menu / Halaman            Publik (Tanpa Login)          Admin (Login)
  ----------------------- ------------------------- -------------------------
  Beranda `/`                        ✅                        ✅

  Katalog Proyek                     ✅                        ✅
  `/projects`                                       

  Detail Proyek                      ✅                        ✅
  `/projects/:slug`                                 

  Pengalaman & Pendidikan            ✅                        ✅
  `/experience`                                     

  Download CV (PDF)                  ✅                        ✅

  Klik WhatsApp Kontak               ✅                        ✅

  Halaman Login Admin                ✅             ✅ (redirect ke dashboard
  `/admin/login`                                        jika sudah login)

  Dashboard Admin                    ❌                        ✅
  `/admin`                                          

  Kelola Profil                      ❌                        ✅
  `/admin/profile`                                  

  Kelola Pendidikan                  ❌                        ✅
  `/admin/education`                                

  Kelola Pengalaman                  ❌                        ✅
  `/admin/experience`                               

  Kelola Proyek                      ❌                        ✅
  `/admin/projects`                                 

  Kelola Skill                       ❌                        ✅
  `/admin/skills`                                   

  Kelola Testimoni                   ❌                        ✅
  `/admin/testimonials`                             

  Kelola File CV                     ❌                        ✅
  `/admin/cv`                                       

  Pengaturan Situs                   ❌                        ✅
  `/admin/settings`                                 
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## 6. Alur Kerja dan Fitur Utama

*Menjelaskan cara kerja setiap fitur utama dalam bahasa yang mudah
dipahami serta aturan logikanya.*

### A. Modul Hero & Long-Storytelling Landing Page

1.  **Cara Kerja**: Pengunjung membuka `/`. Hero muncul dengan large
    typography nama dan headline, cinematic portrait dengan rim light
    biru-merah, dan animated AI ring di belakang. Pengunjung scroll ke
    bawah melewati section Profile → Achievement (angka statistik
    bertambah dengan animasi count-up) → Philosophy → Featured Projects
    → Experience Timeline → CTA akhir.
2.  **Aturan Sistem**:
    -   Konten seluruh section ditarik dinamis dari database melalui API
        `GET /api/public/profile`, `GET /api/public/experience?limit=3`,
        `GET /api/public/projects?featured=true&limit=4`.
    -   Section dapat di-toggle tampil/sembunyi dari `/admin/settings`
        (misal: sembunyikan Testimoni jika belum ada).
    -   Animasi fade-up wajib ter-trigger sekali saja per section.

### B. Modul Katalog & Detail Proyek

1.  **Cara Kerja**: Pengunjung membuka `/projects`, melihat grid kartu
    proyek dengan thumbnail, judul, kategori, dan tech stack chips. Bisa
    memfilter kategori dan mencari kata kunci. Klik kartu membuka
    `/projects/:slug` yang menampilkan galeri lengkap, deskripsi,
    periode, peran, dan tombol eksternal (Demo / Repo) serta CTA
    WhatsApp dengan pesan kontekstual.
2.  **Aturan Sistem**:
    -   Filter kategori: `All`, `Web`, `Mobile`, `AI`, `Design`.
    -   Search minimal 3 karakter, debounce 300ms.
    -   Pagination 9 proyek per halaman.
    -   Slug unik dan di-generate otomatis dari judul; admin bisa edit
        manual.
    -   Proyek dengan `status = draft` tidak muncul di publik.
    -   CTA WhatsApp dari halaman detail menyertakan pesan:
        `Halo, saya tertarik dengan proyek "{nama proyek}". Bisa diskusi lebih lanjut?`

### C. Modul Download CV

1.  **Cara Kerja**: Pengunjung mengklik tombol **Download CV** (capsule
    neon) di hero atau section CTA. Browser langsung mengunduh file PDF
    dari `GET /api/public/cv/download` yang me-return file terbaru
    dengan `Content-Disposition: attachment`. Event klik tercatat
    sebagai statistik.
2.  **Aturan Sistem**:
    -   Hanya ada satu file CV aktif (`isActive = true`). Saat admin
        mengunggah CV baru, versi lama otomatis dinonaktifkan
        (soft-deleted) agar histori tetap tersimpan.
    -   Format file wajib PDF, maksimal 10 MB.
    -   Nama file output: `CV-{nama}-{YYYYMM}.pdf` (contoh:
        `CV-Fulan-202501.pdf`).
    -   Endpoint publik dapat di-rate-limit 30 request/menit per IP.

### D. Modul WhatsApp Langsung

1.  **Cara Kerja**: Tombol **Hubungi via WhatsApp** (icon + label)
    membuka URL `https://wa.me/{nomor}?text={pesanEncoded}` di tab baru.
    Pesan pre-filled berbeda per konteks halaman (hero, detail proyek,
    CTA akhir, footer).
2.  **Aturan Sistem**:
    -   Nomor WhatsApp admin tersimpan di database (format internasional
        tanpa `+`, contoh: `6281234567890`).
    -   Admin dapat mengedit template pesan default dari
        `/admin/settings` menggunakan placeholder `{nama}`,
        `{projectName}`.
    -   Setiap klik dicatat ke tabel `contact_logs` (tanpa PII
        pengunjung, hanya tanggal, halaman asal, dan device).

### E. Modul Panel Admin & Autentikasi

1.  **Cara Kerja**: Admin membuka `/admin/login`, memasukkan email +
    password. Backend memvalidasi, mengeluarkan JWT (httpOnly cookie, 7
    hari), dan mengarahkan ke `/admin`. Setiap rute `/admin/*`
    dilindungi middleware. Semua operasi CRUD melalui form dengan
    validasi realtime dan toast notification.
2.  **Aturan Sistem**:
    -   Password di-hash dengan bcrypt (12 rounds).
    -   Sesi JWT menggunakan httpOnly + secure cookie, SameSite=Lax.
    -   Rate-limit login: 5 percobaan / 15 menit per IP.
    -   Hanya satu akun admin utama yang dibuat via seeding; fitur
        multi-admin ditunda.
    -   Semua form admin wajib validasi skema (Zod) di frontend dan
        backend.
    -   Upload gambar menggunakan `multer` + storage lokal (folder
        `/uploads`) atau Cloudinary (opsional ditunda).

### F. Modul Statistik & Activity Log

1.  **Cara Kerja**: Dashboard `/admin` menampilkan kartu statistik:
    Total Views (counter sederhana), Total Klik Download CV, Total Klik
    WhatsApp, Jumlah Proyek Published. Grafik mini (line chart 7 hari
    terakhir) gaya HUD holographic menampilkan tren harian.
2.  **Aturan Sistem**:
    -   Counter pengunjung unik dihitung dari hash IP + User-Agent per
        hari (bukan PII).
    -   Endpoint `POST /api/public/track` untuk mencatat event
        (`page_view`, `cv_download`, `wa_click`).
    -   Data agregat per hari disimpan di collection `analytics_daily`.
    -   Retensi data: 365 hari.

------------------------------------------------------------------------

## 7. Alur Navigasi & Arsitektur Layout

*Peta navigasi alur halaman dan struktur tata letak (layout).*

### Arsitektur Layout (Persisten)

-   **Public Layout**: Header navbar floating glassmorphism dengan logo
    (monogram minimalis) + navigasi anchor + tombol "Download CV"
    capsule neon. Footer lengkap dengan sosial media, quick links, dan
    copyright.
-   **Admin Layout**: Sidebar kiri fixed (dark panel + neon accent bar
    pada item aktif), topbar kecil dengan breadcrumb dan tombol logout,
    konten utama di kanan dengan kartu-kartu HUD.

### Bagan Alur (Flowchart)

``` mermaid
flowchart TD
    A[Pengunjung Buka '/'] --> B[Hero Section + Animasi AI Ring]
    B --> C{Scroll atau Aksi?}
    C -- Scroll --> D[Profile & About]
    D --> E[Achievement Statistik]
    E --> F[Philosophy]
    F --> G[Featured Projects]
    G --> H[Experience Timeline]
    H --> I[CTA Akhir]
    I --> J{Pilih Aksi}
    J -- Download CV --> K[GET /api/public/cv/download]
    K --> L[File PDF Terunduh + Track Event]
    J -- WhatsApp --> M[wa.me Link dengan Pesan Pre-filled]
    M --> N[Track Event + Buka Tab WhatsApp]
    G --> O[Klik Proyek]
    O --> P[/projects/:slug Detail Proyek]
    P --> Q{CTA WhatsApp Kontekstual}
    Q --> M

    R[Admin Buka /admin/login] --> S[Masukkan Email & Password]
    S --> T{Validasi Backend OK?}
    T -- Tidak --> U[Toast Error + Rate-Limit]
    T -- Ya --> V[Set JWT httpOnly Cookie]
    V --> W[/admin Dashboard]
    W --> X[Kelola Profil / Pendidikan / Pengalaman]
    W --> Y[Kelola Proyek + Upload Gambar]
    W --> Z[Kelola Skill / Testimoni / CV / Settings]
```

------------------------------------------------------------------------

## 8. Kebutuhan Non-Fungsional (SEO, Keamanan, & Performa)

*Syarat wajib agar website siap rilis ke publik (production-ready).*

-   **SEO**:
    -   Tag `<title>`, `<meta name="description">`, dan Open Graph
        (`og:title`, `og:description`, `og:image`) dinamis di setiap
        halaman publik, disuntik via React Helmet / react-helmet-async.
    -   `sitemap.xml` dan `robots.txt` di-generate dari backend Express
        dan disajikan di root domain.
    -   Structured Data JSON-LD (`Person` schema) di Beranda untuk
        memperkuat personal branding di Google.
    -   URL human-readable dengan slug (bukan ID).
-   **Keamanan**:
    -   Helmet.js untuk security headers (CSP, HSTS, X-Frame-Options).
    -   Validasi dan sanitasi input di backend menggunakan Zod +
        `express-mongo-sanitize` (mencegah NoSQL injection).
    -   CORS dengan whitelist origin frontend production.
    -   Proteksi XSS di frontend melalui escape otomatis React dan
        DOMPurify untuk konten HTML admin (deskripsi proyek dengan rich
        text).
    -   CSRF mitigasi via SameSite cookies dan double-submit token pada
        form admin.
    -   Rate limiting pada endpoint publik (`express-rate-limit`) dan
        login admin.
    -   Upload file: whitelist mime-type (`image/jpeg`, `image/png`,
        `image/webp`, `application/pdf`), batas 10 MB, scan nama file.
    -   Password hash bcrypt 12 rounds.
-   **Performa**:
    -   Code splitting React (Vite `React.lazy`) per halaman.
    -   Optimasi gambar: format WebP otomatis, `loading="lazy"`, `<img>`
        dengan `srcset` responsif.
    -   Caching respons API publik menggunakan HTTP
        `Cache-Control: public, max-age=300, stale-while-revalidate=86400`.
    -   Kompresi respons dengan `compression` middleware (gzip/brotli).
    -   Lazy loading animasi berat (particles) hanya saat section masuk
        viewport.
    -   Preload font kritis (`Bebas Neue`, `Inter`) dan
        `font-display: swap`.

------------------------------------------------------------------------

## 9. Panduan Bahasa, Copywriting, & Data Dummy

*Panduan nada bicara (Tone of Voice) dan contoh data agar prototipe
terasa nyata.*

-   **Gaya Bahasa**: Visioner, berkelas, dan profesional namun tetap
    hangat. Menggunakan kata **"Saya"** untuk narasi personal branding
    (first-person portofolio) dan **"Anda"** saat menyapa
    pengunjung/klien. Headline bahasa Inggris singkat (impactful),
    deskripsi panjang bahasa Indonesia (mudah dipahami).

-   **Instruksi Data Dummy**: JANGAN PERNAH MENGGUNAKAN "Lorem Ipsum".
    Selalu gunakan data dummy berbahasa Indonesia yang relevan dengan
    konteks personal branding kreatif-teknologi.

-   **Contoh Data Dummy**:

    -   **Profile**:
        -   Nama: **Raka Aditya Pratama**
        -   Headline: `DIGITAL ARCHITECT & AI-DRIVEN CREATIVE DEVELOPER`
        -   Bio: *"Saya membangun produk digital yang menggabungkan
            presisi engineering dengan estetika futuristik. 7 tahun
            berpengalaman merancang sistem web berskala, antarmuka
            interaktif, dan pengalaman produk yang berkesan."*
        -   WhatsApp: `6281234567890`
        -   Email: `hello@rakaadit.dev`
        -   Lokasi: Jakarta, Indonesia
    -   **Education**:
        -   S1 Teknik Informatika --- Institut Teknologi Bandung
            (2014--2018), IPK 3.72
        -   SMA Negeri 8 Jakarta --- Jurusan IPA (2011--2014)
    -   **Experience**:
        -   Lead Frontend Engineer --- PT Nusantara Digital Lab
            (2022--Sekarang)
        -   Senior Fullstack Developer --- Startup Warung Pintar
            (2020--2022)
        -   Frontend Developer --- Agensi Kreatif Kolektif (2018--2020)
    -   **Projects**:
        -   **Nebula Analytics Dashboard** --- Web / AI --- React,
            TypeScript, D3.js, OpenAI API
        -   **Kirana Mobile Banking** --- Mobile --- React Native,
            Node.js, PostgreSQL
        -   **Atmos Studio Landing** --- Design / Web --- Next.js,
            Framer Motion, Tailwind
        -   **VisionSort AI** --- AI --- Python, FastAPI, TensorFlow
    -   **Skills**:
        -   Frontend: React (95), TypeScript (90), Next.js (88),
            Tailwind (92)
        -   Backend: Node.js (85), Express (85), PostgreSQL (80),
            MongoDB (82)
        -   Design: Figma (88), Motion Design (75)
    -   **Testimoni**:
        -   *"Raka bukan sekadar developer --- dia memahami bahasa
            bisnis kami dan menerjemahkannya menjadi produk yang
            berjalan."* --- **Bu Sari Wulandari**, CEO PT Nusantara
            Digital Lab.

------------------------------------------------------------------------

## 10. Fondasi Teknis (Untuk Tim Pengembang / Programmer & AI)

-   **Bahasa & Framework**:
    -   **Frontend**: React 18 + Vite + TypeScript + React Router v6 +
        TanStack Query (React Query) untuk data fetching + Framer Motion
        untuk animasi + react-helmet-async untuk SEO.
    -   **Backend**: Node.js 20 + Express 4 + TypeScript + Zod
        (validasi) + Mongoose (ODM).
-   **Tampilan Antarmuka (UI)**: Tailwind CSS + shadcn/ui (Button, Card,
    Dialog, Input, Table, Badge, Tabs, Dropdown, Toast) + Lucide React
    Icons.
-   **Autentikasi**: JWT (jsonwebtoken) dengan httpOnly cookie + bcrypt
    untuk hashing password + middleware `requireAuth` pada rute
    `/api/admin/*`.
-   **Basis Data (Database)**: **MongoDB Atlas** + Mongoose ODM. Dipilih
    karena skema portofolio bersifat fleksibel (galeri proyek, tech
    stack array, dst).
-   **Penyimpanan File**: `multer` + folder lokal `/uploads` pada
    server, atau integrasi Cloudinary (opsional ditunda).

### Struktur Skema Database Nyata (Mongoose / TypeScript)

``` typescript
// server/src/models/User.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  role: "admin";
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, enum: ["admin"], default: "admin" },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", UserSchema);
```

``` typescript
// server/src/models/Profile.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  name: string;
  headline: string;
  tagline: string;
  bio: string;
  heroImageUrl: string;
  aboutImageUrl: string;
  whatsapp: string;          // format 62xxxxxxxxxx
  whatsappMessageTemplate: string; // "Halo, saya ingin berdiskusi dengan {nama}"
  email: string;
  location: string;
  socials: { platform: string; url: string }[];
  stats: { label: string; value: number; suffix?: string }[];
  philosophy: { title: string; content: string };
  updatedAt: Date;
}

const ProfileSchema = new Schema<IProfile>(
  {
    name: { type: String, required: true, trim: true },
    headline: { type: String, required: true },
    tagline: { type: String, default: "" },
    bio: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    aboutImageUrl: { type: String, default: "" },
    whatsapp: { type: String, required: true },
    whatsappMessageTemplate: { type: String, default: "Halo {nama}, saya menemukan portofolio Anda dan ingin berdiskusi." },
    email: { type: String, required: true },
    location: { type: String, default: "" },
    socials: [{ platform: String, url: String }],
    stats: [{ label: String, value: Number, suffix: String }],
    philosophy: { title: String, content: String },
  },
  { timestamps: true }
);

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);
```

``` typescript
// server/src/models/Education.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IEducation extends Document {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  gpa?: string;
  description?: string;
  order: number;
  timestamps: true;
}

const EducationSchema = new Schema<IEducation>(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    field: { type: String, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number },
    gpa: { type: String },
    description: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Education = mongoose.model<IEducation>("Education", EducationSchema);
```

``` typescript
// server/src/models/Experience.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  company: string;
  role: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract" | "Internship";
  location?: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
  order: number;
}

const ExperienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    type: { type: String, enum: ["Full-time", "Part-time", "Freelance", "Contract", "Internship"], required: true },
    location: { type: String, default: "" },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isCurrent: { type: Boolean, default: false },
    description: { type: String, required: true },
    achievements: [{ type: String }],
    techStack: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Experience = mongoose.model<IExperience>("Experience", ExperienceSchema);
```

``` typescript
// server/src/models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: "Web" | "Mobile" | "AI" | "Design" | "Other";
  thumbnailUrl: string;
  galleryUrls: string[];
  techStack: string[];
  period: string;
  role: string;
  demoUrl?: string;
  repoUrl?: string;
  isFeatured: boolean;
  status: "draft" | "published";
  order: number;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    shortDescription: { type: String, required: true, maxlength: 220 },
    longDescription: { type: String, required: true },
    category: {
      type: String,
      enum: ["Web", "Mobile", "AI", "Design", "Other"],
      required: true,
    },
    thumbnailUrl: { type: String, required: true },
    galleryUrls: [{ type: String }],
    techStack: [{ type: String }],
    period: { type: String, required: true },
    role: { type: String, required: true },
    demoUrl: { type: String },
    repoUrl: { type: String },
    isFeatured: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ProjectSchema.index({ status: 1, isFeatured: 1, order: 1 });

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
```

``` typescript
// server/src/models/Skill.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
  name: string;
  category: "Frontend" | "Backend" | "Design" | "Tools" | "Other";
  level: number; // 0-100
  iconUrl?: string;
  order: number;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Design", "Tools", "Other"],
      required: true,
    },
    level: { type: Number, min: 0, max: 100, required: true },
    iconUrl: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Skill = mongoose.model<ISkill>("Skill", SkillSchema);
```

``` typescript
// server/src/models/Testimonial.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  quote: string;
  isPublished: boolean;
  order: number;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, default: "" },
    avatarUrl: { type: String },
    quote: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
```

``` typescript
// server/src/models/CvFile.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ICvFile extends Document {
  fileName: string;
  fileUrl: string;
  fileSizeBytes: number;
  version: string;    // contoh: "2025-01"
  isActive: boolean;  // hanya satu yang true
  uploadedAt: Date;
}

const CvFileSchema = new Schema<ICvFile>(
  {
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    fileSizeBytes: { type: Number, required: true },
    version: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const CvFile = mongoose.model<ICvFile>("CvFile", CvFileSchema);
```

``` typescript
// server/src/models/ContactLog.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IContactLog extends Document {
  type: "wa_click" | "cv_download";
  sourcePage: string;    // "/", "/projects/nebula-analytics"
  deviceType: string;    // "desktop" | "mobile" | "tablet"
  referrer?: string;
  createdAt: Date;
}

const ContactLogSchema = new Schema<IContactLog>(
  {
    type: { type: String, enum: ["wa_click", "cv_download"], required: true },
    sourcePage: { type: String, required: true },
    deviceType: { type: String, default: "unknown" },
    referrer: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

ContactLogSchema.index({ type: 1, createdAt: -1 });

export const ContactLog = mongoose.model<IContactLog>("ContactLog", ContactLogSchema);
```

``` typescript
// server/src/models/AnalyticsDaily.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IAnalyticsDaily extends Document {
  date: string;              // "YYYY-MM-DD"
  pageViews: number;
  uniqueVisitors: number;
  cvDownloads: number;
  waClicks: number;
  visitorHashes: string[];   // hash IP+UA harian untuk uniqueness
}

const AnalyticsDailySchema = new Schema<IAnalyticsDaily>(
  {
    date: { type: String, required: true, unique: true },
    pageViews: { type: Number, default: 0 },
    uniqueVisitors: { type: Number, default: 0 },
    cvDownloads: { type: Number, default: 0 },
    waClicks: { type: Number, default: 0 },
    visitorHashes: [{ type: String }],
  },
  { timestamps: true }
);

export const AnalyticsDaily = mongoose.model<IAnalyticsDaily>("AnalyticsDaily", AnalyticsDailySchema);
```

``` typescript
// server/src/models/SiteSettings.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ISiteSettings extends Document {
  siteTitle: string;
  siteDescription: string;
  ogImageUrl: string;
  faviconUrl: string;
  showTestimonialSection: boolean;
  showAchievementSection: boolean;
  showPhilosophySection: boolean;
  whatsappDefaultMessage: string;
  analyticsEnabled: boolean;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    siteTitle: { type: String, default: "Raka Aditya — Digital Architect & AI Creator" },
    siteDescription: { type: String, default: "Portofolio personal Raka Aditya, digital architect & AI-driven creative developer." },
    ogImageUrl: { type: String, default: "" },
    faviconUrl: { type: String, default: "" },
    showTestimonialSection: { type: Boolean, default: true },
    showAchievementSection: { type: Boolean, default: true },
    showPhilosophySection: { type: Boolean, default: true },
    whatsappDefaultMessage: {
      type: String,
      default: "Halo, saya menemukan portofolio Anda dan tertarik untuk berdiskusi.",
    },
    analyticsEnabled: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const SiteSettings = mongoose.model<ISiteSettings>("SiteSettings", SiteSettingsSchema);
```

### Struktur Endpoint API (Ringkas)

``` text
# Public
GET    /api/public/profile
GET    /api/public/education
GET    /api/public/experience
GET    /api/public/projects?category=&q=&featured=&page=
GET    /api/public/projects/:slug
GET    /api/public/skills
GET    /api/public/testimonials
GET    /api/public/settings
GET    /api/public/cv/download
POST   /api/public/track

# Auth
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

# Admin (dilindungi JWT)
GET    /api/admin/stats
CRUD   /api/admin/profile
CRUD   /api/admin/education
CRUD   /api/admin/experience
CRUD   /api/admin/projects
CRUD   /api/admin/skills
CRUD   /api/admin/testimonials
POST   /api/admin/cv/upload
CRUD   /api/admin/settings
```

### Variabel Lingkungan (`.env.example`)

``` env
# Frontend (Vite)
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_URL=http://localhost:5173

# Backend (Express)
NODE_ENV=development
PORT=5000
APP_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/portfolio

# Auth
JWT_SECRET=super-secret-key-change-me
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
ADMIN_EMAIL=admin@portfolio.dev
ADMIN_PASSWORD=ChangeMe123!

# Upload
UPLOAD_DIR=./uploads
MAX_UPLOAD_SIZE_MB=10

# CORS
CORS_ORIGIN=http://localhost:5173

# WhatsApp (opsional disimpan juga di DB)
DEFAULT_WHATSAPP=6281234567890
```

------------------------------------------------------------------------

## 11. Tahapan Pengerjaan & Task Breakdown (Actionable Work Breakdown Structure)

*Daftar tugas terstruktur dan terurut (Atomic Tasks) dengan format
checklist markdown `- [ ] **Task X.Y**`. Dirancang khusus agar pengguna
dapat menginstruksikan AI Coding Assistant untuk mengeksekusi proyek
langkah demi langkah secara terukur, modular, dan bebas dari kehabisan
context window.*

### Tahap 1: Fondasi Proyek, UI/UX, & Semua Halaman Frontend (Dummy Data)

*Tujuan: Membangun seluruh antarmuka visual React (Vite) secara 100%
lengkap dan responsif menggunakan data dummy sebelum menyentuh backend &
database.*

-   [ ] **Task 1.1 (Setup Vite + Design System)**: Inisialisasi proyek
    Vite React TypeScript, konfigurasi Tailwind CSS, tanam CSS variable
    token warna (Deep Black `#05060A`, Electric Blue `#00E5FF`, Neon Red
    `#FF2E63`, Purple Gradient), impor font Bebas Neue + Space Grotesk +
    Inter + JetBrains Mono, pasang Lucide Icons + Framer Motion +
    Lenis + react-helmet-async, dan install base komponen shadcn/ui
    (Button, Card, Input, Dialog, Table, Badge, Dropdown, Tabs, Toast).

-   [ ] **Task 1.2 (Layouts & Persistent Navigation)**: Buat
    `PublicLayout` dengan Header navbar floating glassmorphism (logo
    monogram + anchor links + tombol Download CV capsule neon) + Footer
    lengkap (sosial media, quick links, copyright). Buat `AdminLayout`
    dengan Sidebar kiri fixed (item aktif dengan neon accent bar),
    topbar breadcrumb + tombol logout, dan area konten HUD cards.

-   [ ] **Task 1.3 (Halaman Publik --- Beranda `/`)**: Bangun
    long-scroll storytelling dengan urutan section: **HeroSection**
    (large typography Bebas Neue, cinematic portrait dengan rim light
    biru-merah, animated AI ring), **ProfileSection**,
    **AchievementSection** (count-up statistik), **PhilosophySection**,
    **FeaturedProjectsSection** (grid 4 kartu glassmorphism),
    **ExperienceTimelineSection**, **CTASection** (Download CV +
    WhatsApp). Seluruh data dummy diambil dari `src/data/dummy/*.ts`.

-   [ ] **Task 1.4 (Halaman Publik --- Proyek `/projects` &
    `/projects/:slug`)**: Buat halaman katalog dengan filter kategori
    (`All / Web / Mobile / AI / Design`), search bar debounce 300ms,
    pagination 9 item, dan kartu proyek HUD-style. Buat halaman detail
    `/projects/:slug` dengan hero proyek, galeri gambar, tech stack
    chips, periode, peran, tombol Demo/Repo, dan CTA WhatsApp dengan
    pesan kontekstual.

-   [ ] **Task 1.5 (Halaman Publik --- Experience `/experience`,
    `/thanks`, `/404`)**: Bangun halaman timeline lengkap pendidikan +
    pengalaman kerja dengan node neon. Buat `/thanks` sebagai halaman
    konfirmasi sebelum redirect WhatsApp. Buat `/404` bergaya HUD
    futuristik dengan CTA "Kembali ke Beranda".

-   [ ] **Task 1.6 (Halaman Admin --- Autentikasi & Dashboard)**: Buat
    `/admin/login` (form neon glow, validasi dummy) dan `/admin` (kartu
    statistik Total Views, CV Download, WA Clicks, Projects Published +
    line chart 7 hari gaya holographic). Gunakan mock data.

-   [ ] **Task 1.7 (Halaman Admin --- Kelola Profil, Pendidikan,
    Pengalaman)**: Buat `/admin/profile` (form multi-field: nama,
    headline, bio, foto hero, WhatsApp, sosial media, statistik),
    `/admin/education` (tabel CRUD + modal form), `/admin/experience`
    (tabel CRUD + tech stack tag input + achievement array input).

-   [ ] **Task 1.8 (Halaman Admin --- Kelola Proyek, Skill,
    Testimoni)**: Buat `/admin/projects` (tabel CRUD + filter status
    Draft/Published + multi-image upload UI dummy + preview thumbnail),
    `/admin/skills` (tabel CRUD + kategori + slider level 0--100),
    `/admin/testimonials` (tabel CRUD + toggle publish).

-   [ ] **Task 1.9 (Halaman Admin --- Kelola CV & Pengaturan Situs)**:
    Buat `/admin/cv` (drag-drop zone upload PDF dummy, tampilkan file
    aktif + histori versi) dan `/admin/settings` (edit meta SEO, OG
    image, toggle section Beranda, WhatsApp default message).

-   [ ] **Task 1.10 (Polish UI/UX & Animasi)**: Optimasi
    micro-animations (hover elevation, glow amplification), particles
    floating animation di hero, cursor spotlight, page transition fade
    300ms, dan audit responsif (mobile drawer untuk sidebar admin & menu
    navbar publik).

------------------------------------------------------------------------

### Tahap 2: Database, Autentikasi, & Integrasi Data Dinamis

*Tujuan: Menghidupkan aplikasi dengan MongoDB Atlas, sistem autentikasi
JWT, dan API/Server nyata.*

-   [ ] **Task 2.1 (Setup Backend Express + MongoDB)**: Inisialisasi
    proyek `server/` Node.js TypeScript + Express 4, pasang Mongoose,
    koneksi `MONGODB_URI` ke MongoDB Atlas, konfigurasi Helmet, CORS
    whitelist, compression, express-rate-limit, dan struktur folder
    (`models/`, `routes/`, `controllers/`, `middlewares/`,
    `validators/`).

-   [ ] **Task 2.2 (Skema Model Mongoose & Seeder)**: Implementasikan
    seluruh file model: `User.ts`, `Profile.ts`, `Education.ts`,
    `Experience.ts`, `Project.ts`, `Skill.ts`, `Testimonial.ts`,
    `CvFile.ts`, `ContactLog.ts`, `AnalyticsDaily.ts`, `SiteSettings.ts`
    sesuai skema Bab 10. Buat script `seed.ts` yang mengisi data dummy
    realistis (Raka Aditya, 4 proyek, 3 pengalaman, 2 pendidikan, 8
    skill, 2 testimoni) + akun admin dari env.

-   [ ] **Task 2.3 (Autentikasi JWT & Middleware Proteksi)**: Buat
    endpoint `POST /api/auth/login` (validasi Zod + bcrypt compare +
    rate-limit 5/15 menit), `POST /api/auth/logout`, `GET /api/auth/me`.
    Buat middleware `requireAuth` untuk rute `/api/admin/*` dan
    `attachUser` untuk membaca JWT dari httpOnly cookie.

-   [ ] **Task 2.4 (API Endpoint Publik)**: Implementasikan seluruh
    endpoint publik: `GET /api/public/profile`, `education`,
    `experience`, `projects` (filter + search + pagination),
    `projects/:slug`, `skills`, `testimonials`, `settings`,
    `cv/download` (stream PDF teraktif + track event),
    `POST /api/public/track` (page_view, cv_download, wa_click → update
    AnalyticsDaily + ContactLog). Terapkan
    `Cache-Control: public, max-age=300, stale-while-revalidate=86400`
    pada endpoint GET publik.

-   [ ] **Task 2.5 (API Endpoint Admin --- CRUD Lengkap)**:
    Implementasikan seluruh CRUD admin untuk `profile`, `education`,
    `experience`, `projects`, `skills`, `testimonials`, `settings`,
    `cv/upload` (multer + validasi mime PDF max 10MB + nonaktifkan CV
    lama saat upload baru). Semua endpoint disertai validasi Zod dan
    sanitasi input (`express-mongo-sanitize` + `DOMPurify` untuk konten
    HTML deskripsi proyek). Tambahkan `GET /api/admin/stats` untuk
    dashboard.

-   [ ] **Task 2.6 (Frontend Data Binding --- Public)**: Ganti seluruh
    `src/data/dummy/*.ts` dengan pemanggilan TanStack Query ke API
    publik. Implementasikan loading state (skeleton HUD-style), error
    state, dan retry. Sinkronkan tombol Download CV
    (`GET /api/public/cv/download`) dan tombol WhatsApp (generate
    `wa.me` link dari data profile + template pesan).

-   [ ] **Task 2.7 (Frontend Data Binding --- Admin Panel)**: Hubungkan
    seluruh form admin ke endpoint CRUD. Implementasikan TanStack Query
    mutation dengan optimistic update, TanStack Table untuk daftar,
    React Hook Form + Zod untuk validasi, upload file (thumbnail &
    galeri) via multipart/form-data, dan toast notification
    sukses/gagal. Tambahkan logic redirect ke `/admin/login` saat 401.

-   [ ] **Task 2.8 (Analytics Tracking & Log)**: Pasang
    `POST /api/public/track` yang otomatis dipanggil pada page_view (via
    hook `usePageTracking`), klik tombol Download CV, dan klik tombol
    WhatsApp. Sinkronkan data agregat ke `/admin` (line chart 7 hari +
    kartu total).

------------------------------------------------------------------------

### Tahap 3: Integrasi Final, Keamanan, SEO, Testing, & Deployment

*Tujuan: Menyempurnakan keamanan, performa, SEO, dan rilis ke
production.*

-   [ ] **Task 3.1 (SEO Dinamis & Structured Data)**: Pasang
    react-helmet-async di seluruh halaman publik dengan `<title>`, meta
    description, dan Open Graph. Generate `sitemap.xml` + `robots.txt`
    via route Express. Tanam JSON-LD `Person` schema di Beranda, dan
    `CreativeWork` schema di halaman detail proyek.

-   [ ] **Task 3.2 (Hardening Keamanan)**: Aktifkan CSP ketat di Helmet,
    verifikasi httpOnly + Secure + SameSite=Lax cookie, aktifkan
    double-submit CSRF token pada form admin, whitelist CORS production,
    rate-limit menyeluruh, verifikasi sanitasi XSS di rich text editor
    deskripsi proyek, dan audit endpoint upload file (mime validation +
    renaming anti path-traversal).

-   [ ] **Task 3.3 (Performa & Optimasi)**: Lazy load halaman dengan
    `React.lazy` per route, optimasi gambar output WebP +
    `<img srcset>`, aktifkan Brotli/gzip compression, preload font
    kritis `Bebas Neue` + `Inter`, defer particles/animasi berat hanya
    pada viewport, ukur Lighthouse target ≥ 90 untuk Performance,
    Accessibility, Best Practices, SEO.

-   [ ] **Task 3.4 (End-to-End Testing & Bugfix)**: Uji alur lengkap:
    pengunjung buka `/` → klik Download CV → file terunduh + tercatat di
    AnalyticsDaily → klik WhatsApp → wa.me terbuka + tercatat. Login
    admin → CRUD proyek baru → publikasi → muncul di `/projects`. Update
    CV baru → CV lama nonaktif → tombol Download CV melayani file baru.
    Fix error, responsive glitch, dan optimasi query MongoDB (index pada
    `Project.slug`, `Project.status+isFeatured`, `AnalyticsDaily.date`).

-   [ ] **Task 3.5 (Production Build & Deployment)**: Konfigurasi
    `.env.production` (frontend + backend), build frontend
    (`npm run build` Vite) dan compile backend (`tsc`), verifikasi
    kelulusan build. Deploy frontend ke Vercel/Netlify, backend ke
    Railway/Render/VPS (Docker), database ke MongoDB Atlas production
    cluster, aktifkan monitoring uptime dan backup harian database.

------------------------------------------------------------------------

## 12. Master Starter Prompt (Siap Coding untuk AI Agent)

*Salin prompt di bawah ini ke AI Coding Assistant (Google Antigravity /
Cursor / Claude Code / GitHub Copilot / Roo Code / dll.) untuk memulai
pengerjaan:*

``` markdown
Halo! Kamu berperan sebagai Senior Fullstack Architect dan Lead Developer.
Saya ingin membangun aplikasi berdasarkan dokumen PRD ini.

Silakan baca file @PRD.md

KONTEKS PROYEK:
- Nama produk: "Portfolio" — website personal branding / freelancer premium.
- Tech Stack: React (Vite) Frontend + Node.js (Express) Backend + MongoDB (Mongoose ODM) + TypeScript.
- Tema Desain: Futuristic AI Creator / Cyberpunk Premium — dark gradient, glassmorphism, neon glow electric blue + neon red + purple gradient.
- Aksi utama pengunjung: Download CV + WhatsApp Langsung.
- Panel Admin: Ya, kelola seluruh konten.

ATURAN EKSEKUSI (WAJIB DIPATUHI — MODE PHASE):
1. Eksekusi proyek ini PER FASE sesuai Bab 11. JANGAN melompati fase.
2. Dalam SATU PUTARAN KERJA, selesaikan SATU FASE secara UTUH (misalnya Fase 1: seluruh UI Frontend dengan dummy data — Task 1.1 s/d 1.10 selesai semua).
3. Setelah Fase 1 selesai 100%, HENTIKAN pekerjaan. Laporkan hasil: daftar file yang dibuat, halaman yang bisa diakses, screenshot/screenshot-text jika relevan, dan catatan apa pun yang perlu saya ketahui.
4. TUNGGU instruksi saya untuk mengkonfirmasi sebelum lanjut ke Fase 2. JANGAN melanjutkan fase berikutnya tanpa izin eksplisit.
5. JANGAN PERNAH membuat semua kode di semua fase sekaligus — ini akan kehabisan context window dan menyebabkan error.
6. Selalu patuhi Tech Stack (React Vite + Express + MongoDB), skema Mongoose di Bab 10, endpoint API di Bab 10, dan Pedoman UI/UX Design System di Bab 4.
7. DILARANG KERAS membuat halaman "Placeholder" atau "Sedang dalam pengembangan". Setiap halaman di Bab 3 wajib dibuat 100% lengkap dengan data dummy realistis (Raka Aditya, 4 proyek, dsb.) pada Fase 1.

SKEMA DATA DUMMY YANG WAJIB DIPAKAI (FASE 1):
- Profile: Raka Aditya Pratama — "DIGITAL ARCHITECT & AI-DRIVEN CREATIVE DEVELOPER" — WhatsApp: 6281234567890 — Email: hello@rakaadit.dev
- Projects: Nebula Analytics Dashboard, Kirana Mobile Banking, Atmos Studio Landing, VisionSort AI
- Experience: Lead Frontend Engineer @ PT Nusantara Digital Lab, Senior Fullstack Developer @ Warung Pintar, Frontend Developer @ Agensi Kreatif Kolektif
- Education: S1 Teknik Informatika ITB (2014–2018), SMA Negeri 8 Jakarta (2011–2014)
- Skills: React 95, TypeScript 90, Next.js 88, Node.js 85, Figma 88, MongoDB 82

Jika kamu sudah membaca dan memahami PRD beserta aturan mode PHASE ini, silakan:
1. Berikan ringkasan singkat pemahamanmu (maksimal 10 baris).
2. Tanyakan kesiapan saya untuk memulai Fase 1 — Task 1.1 (Setup Vite + Design System).
```
