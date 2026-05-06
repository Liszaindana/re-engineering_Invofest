# INVOFEST 2025 - Re-engineering Project

![INVOFEST Banner](https://www.invofest-harkatnegeri.com/assets/nav-logo.png)

**INVOFEST (Informatics Vocational Festival)** adalah proyek re-engineering landing page festival vokasi informatika tahunan. Proyek ini bertujuan untuk menciptakan antarmuka yang modern, premium, dan responsif dengan fokus pada pengalaman pengguna yang luar biasa (*User Experience*) dan keselarasan visual yang tinggi (*High Fidelity*).

## 🚀 Fitur Utama

- **Desain Premium & Modern**: Menggunakan palet warna brand INVOFEST (Maroon #8B1E3F) dengan aksen *glassmorphism* dan transisi *wave* yang dinamis.
- **Halaman Event Lengkap**: Dokumentasi visual dan informasi detail untuk Seminar, Workshop, Talkshow, dan Kompetisi.
- **Komponen Reusable**: Arsitektur berbasis komponen seperti `SpeakerCard`, `HeroSection`, `Collaps` (FAQ), dan `FormInput`.
- **Sistem Otentikasi Terpadu**: Halaman Login dan Register yang simetris dan divalidasi menggunakan Zod & React Hook Form.
- **Responsif Penuh**: Layout yang dioptimalkan untuk berbagai ukuran perangkat (Desktop, Tablet, Mobile).
- **SEO Optimized**: Struktur HTML semantik untuk visibilitas mesin pencari yang lebih baik.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS
- **Routing**: [React Router Dom 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## 📂 Struktur Proyek

```text
src/
├── components/         # Komponen UI yang dapat digunakan kembali
│   ├── ui/             # Komponen atomik (Button, Input, Card, dll)
│   ├── Header.tsx      # Navigasi utama
│   └── Footer.tsx      # Footer global
├── layout/             # Wrapper layout (MainLayout, AuthLayout)
├── pages/              # Halaman utama aplikasi
│   ├── Beranda.tsx
│   ├── Competition.tsx
│   ├── Seminar.tsx
│   ├── Workshop.tsx
│   ├── Talkshow.tsx
│   ├── Login.tsx
│   └── register.tsx
├── App.tsx             # Konfigurasi routing
└── main.tsx            # Entry point aplikasi
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

4. **Build untuk produksi**
   ```bash
   npm run build
   ```

## ✒️ Penulis

Dikembangkan dengan dedikasi untuk **INVOFEST 2025**.

---
*© 2025 Informatics Vocational Festival. All Rights Reserved.*
