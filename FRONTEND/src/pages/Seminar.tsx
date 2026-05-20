import { useEffect, useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import SpeakerCard from "../components/ui/SpeakerCard";
import Collaps from "../components/ui/Collaps";
import { Calendar, Clock, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Seminar() {
  const navigate = useNavigate();
  // State for speakers fetched from backend
  const [speakers, setSpeakers] = useState<Array<{ id: number; name: string; role: string; imageUrl: string; categories: { id: number; name: string }[] }>>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Fetch speakers on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const speakersRes = await fetch("http://localhost:3000/speakers");
        const speakersData = await speakersRes.json();
        if (Array.isArray(speakersData)) setSpeakers(speakersData);
      } catch (error) {
        console.error("Error fetching seminar data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter speakers belonging to the "Seminar" category
  const seminarSpeakers = speakers.filter(speaker =>
    speaker.categories?.some(cat => cat.name.toLowerCase() === "seminar")
  );

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayarakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description: "Pemenang kompetisi akan diumumkan melalui website resmi INVOFEST dan akun Instagram kami.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description: "INVOFEST akan dilaksanakan secara online dan offline di Kampus Politeknik Harapan Bersama Tegal.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description: "Pemenang akan mendapatkan uang pembinaan, sertifikat, dan trophy.",
    },
    {
      title: "Apakah ada biaya pendaftaran di INVOFEST?",
      description: "Ya, terdapat biaya pendaftaran yang berbeda-beda untuk setiap kategori lomba.",
    },
    {
      title: "Bagaimana cara mendaftar event?",
      description: "Pendaftaran dapat dilakukan melalui tombol 'Daftar Sekarang' yang tersedia di setiap halaman kategori lomba.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}
      <HeroSection
        title="IT Seminar"
        subtitle={'"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"'}
        description={
          <p style={{ margin: 0 }}>
            Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis. Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>
        }
        buttons={[
          {
            label: "Daftar Sekarang",
            variant: "primary",
            onClick: () => navigate("/login")
          },
        ]}
        mascotImage="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
        mascotAlt="Maskot Seminar"
        showWave={false}
      />

      {/* Tentang IT SEMINAR Section (Wave Background) */}
      <section style={{ position: "relative", padding: "120px 0", marginTop: -60, overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: "flex",
          flexDirection: "column"
        }}>
          <svg viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginBottom: -1 }}>
            <path fill="#FDF2F8" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div style={{ backgroundColor: "#FDF2F8", flex: 1 }}></div>
          <svg viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginTop: -1, transform: "rotate(180deg)" }}>
            <path fill="#FDF2F8" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>Tentang IT SEMINAR</h2>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, textAlign: "center" }}>
            Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema <strong>“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”</strong> Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
          </p>
        </div>
      </section>

      {/* Pembicara Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 12 }}>Temui Pembicara Khusus Kami</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, maxWidth: 900, margin: "0 auto" }}>
          {seminarSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Pelaksanaan Section (Wave Background) */}
      <section style={{ position: "relative", padding: "140px 0", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: "flex",
          flexDirection: "column"
        }}>
          <svg viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginBottom: -1 }}>
            <path fill="#FDF2F8" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div style={{ backgroundColor: "#FDF2F8", flex: 1 }}></div>
          <svg viewBox="0 0 1440 320" style={{ width: "100%", height: "auto", marginTop: -1, transform: "rotate(180deg)" }}>
            <path fill="#FDF2F8" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", textAlign: "center", marginBottom: 56 }}>Pelaksanaan IT Seminar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 24 }}>
            {[
              { icon: <Calendar size={24} color="#fff" />, text: "Kamis, 27 November 2025" },
              { icon: <Clock size={24} color="#fff" />, text: "08.00 WIB - 12.00 WIB" },
              { icon: <MapPin size={24} color="#fff" />, text: "Aula Gedung C" },
              { icon: <Building size={24} color="#fff" />, text: "Kampus 1 (Mataram) Universitas Harkat Negeri" },
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  boxShadow: hoveredIdx === idx
                    ? "0 20px 45px rgba(139, 30, 63, 0.15)"
                    : "0 10px 25px rgba(139, 30, 63, 0.08)",
                  borderRight: "6px solid #8B1E3F",
                  transform: hoveredIdx === idx ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{
                  backgroundColor: "#8B1E3F",
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#4B5563" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto", paddingBottom: 140 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#6B7280", letterSpacing: "0.15em" }}>FAQ</span>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#1F2937", marginTop: 8, marginBottom: 16 }}>
            Punya Pertanyaan? Lihat <span style={{ color: "#8B1E3F" }}>Disini</span>
          </h2>
          <p style={{ color: "#6B7280", maxWidth: 700, margin: "0 auto", fontSize: 18, lineHeight: 1.6 }}>
            Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "24px"
        }}>
          {faqItems.map((item, index) => (
            <Collaps
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}