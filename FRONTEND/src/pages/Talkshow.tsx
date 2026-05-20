import { useEffect, useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import SpeakerCard from "../components/ui/SpeakerCard";
import Collaps from "../components/ui/Collaps";
import { Calendar, Clock, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SpeakerType = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  categories?: { id: number; name: string }[];
};

export default function Talkshow() {
  const navigate = useNavigate();
  const [speakers, setSpeakers] = useState<SpeakerType[]>([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch("https://backend-invofest.vercel.app/speakers");
        const data = await res.json();
        setSpeakers(data);
      } catch (error) {
        console.error("Gagal mengambil data speaker:", error);
      }
    };
    fetchSpeakers();
  }, []);

  const talkshowSpeakers = speakers.filter(speaker =>
    speaker.categories?.some(cat => cat.name.toLowerCase() === "talkshow")
  );

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi and memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Bagaimana saya mengetahui pemenang kompetisi?",
      description: "Pemenang kompetisi akan diumumkan melalui website resmi INVOFEST and akun Instagram kami.",
    },
    {
      title: "Kapan dan dimana INVOFEST dilaksanakan?",
      description: "INVOFEST akan dilaksanakan secara online and offline di Kampus Politeknik Harapan Bersama Tegal.",
    },
    {
      title: "Apa yang didapat pemenang dalam kompetisi?",
      description: "Pemenang akan mendapatkan uang pembinaan, sertifikat, and trophy.",
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
        title="IT Talkshow"
        subtitle={'"Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"'}
        description={
          <p style={{ margin: 0 }}>
            Talkshow <strong>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</strong> membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan and peningkatan teknologi. Diskusi interaktif ini menghadirkan para pakar yang akan membahas bagaimana teknologi AI dapat dimanfaatkan secara etis and bertanggung jawab untuk masa depan yang lebih baik.
          </p>
        }
        buttons={[
          {
            label: "Daftar Sekarang",
            variant: "primary",
            onClick: () => navigate("/login")
          },
        ]}
        mascotImage="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
        mascotAlt="Maskot Talkshow"
        showWave={false}
      />

      {/* Tentang IT TALKSHOW Section (Wave Background) */}
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
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>Tentang IT TALKSHOW</h2>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, textAlign: "center" }}>
            Talkshow berskala nasional ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin and terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, and kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Acara ini bertujuan untuk menginspirasi generasi muda and para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi.
          </p>
        </div>
      </section>

      {/* Pembicara Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 12 }}>Temui Pembicara Khusus Kami</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {talkshowSpeakers.map((speaker, index) => (
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
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", textAlign: "center", marginBottom: 56 }}>Pelaksanaan IT Talkshow</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 24 }}>
            {[
              { icon: <Calendar size={24} color="#fff" />, text: "Senin, 24 November 2025" },
              { icon: <Clock size={24} color="#fff" />, text: "08.00 WIB - 12.00 WIB" },
              { icon: <MapPin size={24} color="#fff" />, text: "Aula Gedung C" },
              { icon: <Building size={24} color="#fff" />, text: "Kampus 1 (Mataram) Universitas Harkat Negeri" },
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxShadow: "0 10px 25px rgba(139, 30, 63, 0.08)",
                borderRight: "6px solid #8B1E3F"
              }}>
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