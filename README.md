# INVOFEST 2025 - Re-engineering Project (Full-Stack)

![INVOFEST Banner](https://www.invofest-harkatnegeri.com/assets/nav-logo.png)

**INVOFEST (Informatics Vocational Festival)** adalah sebuah sistem terpadu (*Full-Stack*) untuk festival vokasi informatika tahunan. Aplikasi ini terdiri dari front-end React yang interaktif dengan dasbor manajemen, serta back-end REST API yang terintegrasi dengan database PostgreSQL menggunakan Prisma ORM.

---

## 🚀 Fitur Utama

### 🎨 Frontend & UI/UX
- **Desain Premium & Modern**: Menggunakan palet warna brand INVOFEST (Maroon #8B1E3F) dengan tata letak bersih dan responsif.
- **Efek Hover Interaktif**:
  - Animasi hover (*scale up* & penambahan bayangan halus) pada `SpeakerCard` di halaman Seminar, Workshop, dan Talkshow.
  - Animasi hover pada card detail pelaksanaan (jadwal & lokasi) di halaman Seminar dan Workshop.
- **Navigasi Terintegrasi**: 
  - Tombol **"INFO SELENGKAPNYA"** pada halaman utama langsung mengarahkan pengunjung ke halaman detail event yang bersangkutan (Seminar, Talkshow, Kompetisi, Workshop).
  - Tombol aksi register/daftar terhubung langsung ke pintu masuk otentikasi.
- **Dashboard Admin Dinamis**: Panel admin interaktif dengan counter statistik riil (Total Event, Total Speaker, dan Total Kategori) yang dimuat langsung dari REST API.
- **Validasi Form Ketat**: Otentikasi berbasis Zod & React Hook Form dengan masukan angka bulat (Integer) untuk field **Username**.

### ⚙️ Backend & Database
- **REST API Clean Architecture**: Endpoint terstruktur untuk pengelolaan Kategori, Event, dan Speaker secara dinamis.
- **Prisma ORM**: Pemetaan skema relasional database PostgreSQL secara konsisten.
- **CORS & Environment Management**: Pengaturan keamanan koneksi lintas origin terintegrasi.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4 & Vanilla CSS
- **State Management**: Zustand (Auth Store)
- **Routing**: React Router Dom 7
- **Validation**: Zod & React Hook Form
- **Icons**: Lucide React

### Backend
- **Framework**: Express.js (TypeScript)
- **Runtime Compiler**: TSX (TS Node Execute)
- **ORM**: Prisma ORM
- **Database**: PostgreSQL

---

## 📂 Struktur Repositori

```text
INVOFEST/
├── BACKEND/                    # Back-end API Service
│   ├── prisma/
│   │   ├── schema.prisma       # Skema Relasional database
│   │   └── migrations/         # Riwayat migrasi database
│   ├── src/
│   │   ├── controllers/        # Logika handler request API
│   │   ├── middlewares/        # Penengah request (CORS, parser, dll)
│   │   ├── routes/             # Defini rute API (/categories, /speakers, /events)
│   │   ├── lib/                # Inisialisasi Prisma client
│   │   └── index.ts            # Entry point server backend
│   ├── tsconfig.json
│   └── package.json
│
└── FRONTEND/                   # Front-end SPA Application
    ├── src/
    │   ├── components/         # Komponen UI global (atomik)
    │   │   ├── ui/             # Button, Card, Input, SpeakerCard, Collaps
    │   │   └── FormInput.tsx   # Integrasi input form & error validation
    │   ├── layout/             # Layout wrappers (Main, Auth, Dashboard)
    │   ├── pages/              # Halaman Utama & Dasbor Admin
    │   │   ├── Dashboard/      # Dasbor Utama (Index, Categories, Events, Speakers)
    │   │   ├── Beranda.tsx     # Landing Page utama
    │   │   ├── Login.tsx       # Form masuk dengan username integer
    │   │   └── register.tsx    # Form daftar akun
    │   ├── store/              # Zustand Auth state store
    │   ├── routes/             # Proteksi rute (ProtectedRoute)
    │   ├── App.tsx             # Konfigurasi perutean utama
    │   └── main.tsx            # Entry point front-end
    ├── package.json
    └── vite.config.ts
```

---

## 🗄️ Model Database (Prisma Schema)

```prisma
model Category {
    id        Int      @id @default(autoincrement())
    name      String
    events    Event[]
    createdAt DateTime @default(now()) @map("created_at")

    @@map("categories")
}

model Speaker {
    id        Int      @id @default(autoincrement())
    name      String
    role      String
    image     String   @map("image_url")
    events    Event[]
    createdAt DateTime @default(now()) @map("created_at")

    @@map("speakers")
}

model Event {
    id          Int      @id @default(autoincrement())
    name        String
    categoryId  Int      @map("category_id")
    category    Category @relation(fields: [categoryId], references: [id])
    speakerId   Int      @map("speaker_id")
    speaker     Speaker  @relation(fields: [speakerId], references: [id])
    location    String
    dateEvent   DateTime @map("date_event")
    description String
    createdAt   DateTime @default(now()) @map("created_at")

    @@map("events")
}
```

---

## 🏁 Panduan Pemasangan & Menjalankan Projek

### 1. Prasyarat
- Node.js versi 18 ke atas.
- Database PostgreSQL yang sudah berjalan.

### 2. Setup Backend
1. Masuk ke direktori backend:
   ```bash
   cd BACKEND
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Konfigurasi file `.env` di dalam folder `BACKEND`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/invofest_db?schema=public"
   PORT=3000
   ```
4. Lakukan sinkronisasi migrasi prisma ke database:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Jalankan server backend:
   ```bash
   npm run dev
   ```
   Server backend akan aktif di `http://localhost:3000`

### 3. Setup Frontend
1. Masuk ke direktori frontend:
   ```bash
   cd ../FRONTEND
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan Vite:
   ```bash
   npm run dev
   ```
   Aplikasi client akan dapat diakses di `http://localhost:5173/`

---

## 🔑 Kredensial Akses Dasbor Admin

Gunakan informasi akun berikut pada form Login untuk masuk ke Dashboard:
* **Username**: `24090130` *(Harus bertipe angka/integer)*
* **Password**: `admin123456`

---

## ✒️ Profil Mahasiswa Pembuat

- **Nama Lengkap**: Lisza Indana Zulfa
- **NIM**: 24090130
- **Program Studi**: Sarjana Terapan Teknik Informatika
- **Kelas**: 4D

---
*© 2025 Informatics Vocational Festival. All Rights Reserved.*

