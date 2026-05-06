import HeroSection from "../components/ui/HeroSection";
import SpeakerCard from "../components/ui/SpeakerCard";
import Collaps from "../components/ui/Collaps";
import { Calendar, Clock, MapPin, Code, Smartphone, Shield } from "lucide-react";

export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  const workshopDetails = [
    {
      title: "Mobile Development",
      icon: <Code size={24} color="#fff" />,
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
    {
      title: "Artificial Intelegence",
      icon: <Smartphone size={24} color="#fff" />,
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
    },
    {
      title: "Cyber Security",
      icon: <Shield size={24} color="#fff" />,
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
  ];

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi and memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
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
        title="IT Workshop"
        subtitle={'"AI for a Sustainable Future: The Role of Z Generation in the Digital Era"'}
        description={
          <p style={{ margin: 0 }}>
            Workshop <strong>“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</strong> ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
          </p>
        }
        buttons={[
          { label: "Daftar Sekarang", variant: "primary" },
        ]}
        mascotImage="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
        mascotAlt="Maskot Workshop"
        showWave={false}
      />

      {/* Tentang IT WORKSHOP Section (Wave Background) */}
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
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>Tentang IT WORKSHOP</h2>
          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.8, textAlign: "center" }}>
            Workshop bertajuk <strong>“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</strong> dirancang untuk memberikan pemahaman mendalam tentang bagaimana teknologi kecerdasan buatan dapat dimanfaatkan untuk menciptakan masa depan yang lebih hijau dan berkelanjutan. Generasi Z sebagai motor penggerak perubahan di era digital memiliki peran krusial dalam mengintegrasikan solusi teknologi dengan tantangan lingkungan hidup saat ini. Melalui workshop ini, peserta akan mendapatkan keterampilan praktis dan wawasan strategis untuk menjadi agen perubahan yang cerdas secara teknologi dan peduli secara ekologis.
          </p>
        </div>
      </section>

      {/* Pembicara Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", marginBottom: 12 }}>Temui Pembicara Khusus Kami</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, maxWidth: 1100, margin: "0 auto" }}>
          {speakers.map((speaker, index) => (
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#8B1E3F", textAlign: "center", marginBottom: 56 }}>Pelaksanaan IT Workshop</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 900, margin: "0 auto" }}>
            {workshopDetails.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                boxShadow: "0 10px 25px rgba(139, 30, 63, 0.08)",
                borderRight: "6px solid #8B1E3F",
                gridColumn: idx === 2 ? "span 2" : "auto",
                justifySelf: idx === 2 ? "center" : "stretch",
                width: idx === 2 ? "438px" : "100%"
              }}>
                <div style={{
                  backgroundColor: "#8B1E3F",
                  width: 64,
                  height: 64,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h4 style={{ fontSize: 20, fontWeight: 800, color: "#1F2937", margin: 0 }}>{item.title}</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6B7280", fontSize: 13 }}>
                      <Calendar size={14} color="#8B1E3F" /> {item.date}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6B7280", fontSize: 13 }}>
                      <Clock size={14} color="#8B1E3F" /> {item.time}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6B7280", fontSize: 13 }}>
                      <MapPin size={14} color="#8B1E3F" /> {item.location}
                    </div>
                  </div>
                </div>
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