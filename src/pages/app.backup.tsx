// import Header from "./components/Header";
// import Button from "./components/ui/Button";
// import Collaps from "./components/ui/Collaps";
// import SpeakerCard from "./components/ui/SpeakerCard";
// import { Card } from "./components/ui/Card";
// import { Home, Mic, Swords, Wrench, MessageSquare, ArrowUp } from "lucide-react";

// function App() {
//   const speakers = [
//     {
//       name: "Dery Agung Triyadi",
//       role: "Aws Indonesia",
//       imageUrl:
//         "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
//     },
//     {
//       name: "Sowam Habibi",
//       role: "Google Indonesia",
//       imageUrl:
//         "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
//     },
//     {
//       name: "Lhuqita Fazry",
//       role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
//       imageUrl:
//         "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
//     },
//   ];

//   const collapseItems = [
//     {
//       title: "Apa itu Invofest?",
//       description:
//         "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
//     },
//     {
//       title: "Kapan dan di mana Invofest akan diselenggarakan?",
//       description:
//         "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
//     },
//     {
//       title: "Siapa saja yang dapat mengikuti Invofest?",
//       description:
//         "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
//     },
//   ];

//   const cardItems = [
//     {
//       title: "IT Seminar",
//       description:
//         "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
//     },
//     {
//       title: "IT Talkshow",
//       description:
//         "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
//     },
//     {
//       title: "IT Competition",
//       description:
//         "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
//     },
//     {
//       title: "IT Workshop",
//       description:
//         "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
//     },
//   ];

//   return (
//     <>
//       <Header />

//       <div
//         className="max-w-7xl mx-auto"
//         style={{
//           background: "#FFFFFF",
//           color: "#333",
//           paddingLeft: 12,
//           paddingRight: 12,
//         }}
//       >
//         <section
//           id="hero"
//           className="py-10 flex gap-10 justify-between items-center "
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 56,
//             paddingTop: 56,
//             paddingBottom: 56,
//           }}
//         >
//           <div
//             className="w-2/3 flex flex-col gap-6"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 18,
//               justifyContent: "center",
//             }}
//           >
//             <img
//               src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
//               alt=""
//               className="w-96"
//               style={{ width: 460, maxWidth: "100%" }}
//             />
//             <p style={{ color: "#333", fontSize: 16, lineHeight: 1.7, margin: 0 }}>
//               Invofest (Informatics Vocational Festival) adalah festival tahunan
//               yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
//               Indonesia dalam menghadapi era digital. Dengan mengusung tema
//               “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
//               Tomorrow ”.
//             </p>

//             <div className="flex gap-3" style={{ display: "flex", gap: 12 }}>
//               <Button label="Daftar Sekarang" variant="primary" />
//               <Button label="Hubungi Panitia" variant="outline" />
//             </div>
//           </div>
//           <div className="w-1/3" style={{ display: "flex", justifyContent: "center" }}>
//             <img
//               src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
//               alt=""
//               style={{ width: "100%", maxWidth: 360, height: "auto" }}
//             />
//           </div>
//         </section>

//         <section id="speaker" className="py-24">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
//             {speakers.map((speaker, index) => (
//               <SpeakerCard
//                 key={index}
//                 name={speaker.name}
//                 role={speaker.role}
//                 imageUrl={speaker.imageUrl}
//               />
//             ))}
//           </div>
//         </section>

//         <section
//           id="cards"
//           className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
//           style={{
//             background: "linear-gradient(180deg, #FFFFFF 0%, #FDF2F8 100%)",
//             padding: "80px 24px",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "24px",
//             textAlign: "center"
//           }}
//         >
//           <div style={{ gridColumn: "1 / -1", marginBottom: 40, textAlign: "left", maxWidth: 800 }}>
//             <h2 style={{ color: "#8B1E3F", fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Tentang INVOFEST</h2>
//             <p style={{ color: "#4B5563", fontSize: 16, lineHeight: 1.8 }}>
//               Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri,
//               adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia
//               dalam menghadapi era digital. Dengan mengusung tema <strong style={{ color: "#333" }}>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”</strong>.
//               Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
//             </p>
//           </div>
//           {cardItems.map((item, index) => (
//             <Card key={index} className="w-full">
//               <h3
//                 className="text-2xl text-red-900 mb-4"
//                 style={{ color: "#8B1E3F", fontSize: 20, fontWeight: 800, marginBottom: 12, textAlign: "left" }}
//               >
//                 {item.title}
//               </h3>
//               <p style={{ color: "#333", margin: 0, lineHeight: 1.6, fontSize: 14, textAlign: "left", flexGrow: 1 }}>{item.description}</p>
//               <div style={{ textAlign: "left", marginTop: 20 }}>
//                 <Button
//                   label="INFO SELENGKAPNYA"
//                   variant="primary"
//                   className="text-xs"
//                 />
//               </div>
//             </Card>
//           ))}
//         </section>

//         <section id="collapse" className="py-24 px-3">
//           <div style={{ textAlign: "center", marginBottom: 56 }}>
//             <span style={{ fontSize: 14, fontWeight: 700, color: "#6B7280", letterSpacing: "0.1em" }}>FAQ</span>
//             <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1F2937", marginTop: 8, marginBottom: 16 }}>
//               Punya Pertanyaan? Lihat <span style={{ color: "#8B1E3F" }}>Disini</span>
//             </h2>
//             <p style={{ color: "#6B7280", maxWidth: 600, margin: "0 auto", fontSize: 16 }}>
//               Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
//             </p>
//           </div>
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
//             gap: "0 24px"
//           }}>
//             {collapseItems.map((item, index) => (
//               <Collaps
//                 key={index}
//                 title={item.title}
//                 description={item.description}
//               />
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer style={{
//         backgroundColor: "#FDF2F8",
//         padding: "48px 24px 0",
//         marginTop: 0,
//       }}>
//         <div style={{
//           maxWidth: 1280,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "1.2fr 1fr 1fr 1.5fr",
//           gap: 40,
//           paddingBottom: 40,
//         }}>
//           {/* Logo */}
//           <div style={{ display: "flex", alignItems: "flex-start" }}>
//             <img
//               src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
//               alt="INVOFEST Logo"
//               style={{ height: 56, objectFit: "contain" }}
//             />
//           </div>

//           {/* Menu Navigasi */}
//           <div>
//             <h4 style={{ color: "#8B1E3F", fontWeight: 700, fontSize: 16, marginBottom: 16 }}>MENU NAVIGASI</h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               {[
//                 { label: "Beranda", icon: <Home size={14} /> },
//                 { label: "Seminar", icon: <Mic size={14} /> },
//                 { label: "Competition", icon: <Swords size={14} /> },
//                 { label: "Workshop", icon: <Wrench size={14} /> },
//                 { label: "Talkshow", icon: <MessageSquare size={14} /> },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href="#"
//                     style={{
//                       color: "#4B5563",
//                       textDecoration: "none",
//                       fontSize: 14,
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: 8,
//                     }}
//                   >
//                     {item.icon}
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Ikuti Kami */}
//           <div>
//             <h4 style={{ color: "#8B1E3F", fontWeight: 700, fontSize: 16, marginBottom: 16 }}>IKUTI KAMI</h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//               <li>
//                 <a href="#" style={{ color: "#4B5563", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> Instagram
//                 </a>
//               </li>
//               <li>
//                 <a href="#" style={{ color: "#4B5563", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8 }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14" fill="currentColor"><path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" /></svg> Youtube
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Alamat + Maps */}
//           <div>
//             <h4 style={{ color: "#8B1E3F", fontWeight: 700, fontSize: 16, marginBottom: 16 }}>ALAMAT</h4>
//             <div style={{
//               borderRadius: 8,
//               overflow: "hidden",
//               border: "1px solid #E5E7EB",
//               height: 160,
//             }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456!2d109.14!3d-6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2d6bfe885%3A0x2a47b615e8850f62!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sid!2sid!4v1700000000000"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Lokasi INVOFEST"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div style={{
//           borderTop: "1px solid rgba(139, 30, 63, 0.15)",
//           maxWidth: 1280,
//           margin: "0 auto",
//           padding: "20px 0",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}>
//           <span style={{ color: "#6B7280", fontSize: 13 }}>
//             © 2025 INVOFEST. All Rights Reserved.
//           </span>
//           <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//             <a href="#" style={{ color: "#6B7280" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18" fill="currentColor"><path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" /></svg></a>
//             <a href="#" style={{ color: "#6B7280" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18" fill="currentColor"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top */}
//       <a
//         href="#"
//         style={{
//           position: "fixed",
//           bottom: 24,
//           right: 24,
//           width: 44,
//           height: 44,
//           borderRadius: "50%",
//           backgroundColor: "#8B1E3F",
//           color: "#FFFFFF",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: "0 4px 12px rgba(139, 30, 63, 0.3)",
//           textDecoration: "none",
//           transition: "background-color 0.25s ease",
//         }}
//       >
//         <ArrowUp size={20} />
//       </a>
//     </>
//   );
// }

// export default App;
