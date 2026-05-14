# INVOFEST 2025 - Re-engineering Project

![INVOFEST Banner](https://www.invofest-harkatnegeri.com/assets/nav-logo.png)

**INVOFEST (Informatics Vocational Festival)** adalah proyek re-engineering festival vokasi informatika tahunan. Proyek ini bertujuan untuk menciptakan antarmuka yang modern, premium, dan responsif dengan fokus pada pengalaman pengguna yang luar biasa (*User Experience*) dan sistem manajemen konten yang efisien.

## 🚀 Fitur Utama

- **Desain Premium & Modern**: Menggunakan palet warna brand INVOFEST (Maroon #8B1E3F) dengan transisi yang dinamis dan layout full-screen.
- **Administrative Dashboard**: Panel admin lengkap untuk mengelola konten festival secara real-time.
- **Content Management (CRUD)**:
    - **Categories**: Kelola kategori event (Seminar, Workshop, dll).
    - **Events**: Manajemen daftar event, lokasi, dan jadwal.
    - **Speakers**: Kelola data pembicara/narasumber beserta foto dan role mereka.
- **Sistem Otentikasi & Authorization**:
    - Proteksi rute menggunakan `ProtectedRoute`.
    - Manajemen state login menggunakan **Zustand**.
- **Validasi Form Canggih**: Validasi real-time menggunakan **Zod** dan **React Hook Form** dengan feedback visual (error states).
- **Komponen Reusable**: Arsitektur berbasis komponen UI atomik yang konsisten di seluruh aplikasi.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (Auth Store)
- **Routing**: [React Router Dom 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## 📂 Struktur Proyek

```text
src/
├── components/         # Komponen UI global
│   ├── ui/             # Komponen atomik (Button, Input, Card, dll)
│   ├── FormInput.tsx   # Komponen form terintegrasi validasi
│   ├── Header.tsx      # Navigasi landing page
│   └── Footer.tsx      # Footer landing page
├── layout/             # Wrapper layout
│   ├── MainLayout.tsx  # Layout halaman publik
│   ├── AuthLayout.tsx  # Layout halaman login/register
│   └── DashboardLayout.tsx # Layout panel admin (Sidebar & Content)
├── pages/              # Halaman utama aplikasi
│   ├── Dashboard/      # Halaman-halaman Panel Admin
│   │   ├── Categories/ # Manajemen Kategori, Event, & Speaker
│   │   └── DashboardIndex.tsx
│   ├── Beranda.tsx     # Landing Page
│   ├── Login.tsx
│   └── register.tsx
├── store/              # State management (Zustand)
├── routes/             # Proteksi rute (ProtectedRoute)
├── App.tsx             # Konfigurasi routing utama
└── main.tsx            # Entry point
```

## 🏁 Memulai (Local Setup)

1. **Clone repositori**
   ```bash
   git clone <repository-url>
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173/`

4. **Akses Dashboard**
   Gunakan kredensial admin (default):
   - **Email**: `admin@gmail.com`
   - **Password**: `admin123456`

## ✒️ Penulis

Dikembangkan dengan dedikasi untuk **INVOFEST 2025**.

---
*© 2025 Informatics Vocational Festival. All Rights Reserved.*
