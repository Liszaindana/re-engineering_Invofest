import HeroSection from "../components/ui/HeroSection";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Collaps from "../components/ui/Collaps";

export default function Beranda() {
  const cardItems = [
    {
      title: "IT Seminar",
      description:
        'Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.',
    },
    {
      title: "IT Talkshow",
      description:
        'Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.',
    },
    {
      title: "IT Competition",
      description:
        'Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.',
    },
    {
      title: "IT Workshop",
      description:
        "'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  const faqItems = [
    {
      title: "Apa itu INVOFEST?",
      description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
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
        title="INVOFEST"
        description={
          <p style={{ margin: 0 }}>
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <strong>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”</strong>.
          </p>
        }
        buttons={[
          { label: "INFO SELENGKAPNYA", variant: "primary" },
          { label: "HUBUNGI PANITIA", variant: "outline" },
        ]}
        mascotImage="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
        mascotAlt="Maskot Hero"
        showWave={false}
      />

      {/* Tentang INVOFEST Section (Wave Background) */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>Tentang INVOFEST</h2>
            <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8, maxWidth: 1000 }}>
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <strong>“Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”</strong>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {cardItems.map((item, index) => (
              <Card key={index}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#8B1E3F", marginBottom: 16 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#4B5563", lineHeight: 1.6, marginBottom: 24, flexGrow: 1 }}>{item.description}</p>
                <div style={{ marginTop: "auto" }}>
                  <Button label="INFO SELENGKAPNYA" variant="primary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IT Seminar Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>IT Seminar</h2>
            <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8, marginBottom: 32 }}>
              Seminar Nasional Teknologi Informasi ini mengangkat tema <strong>“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”</strong> Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
            </p>
            <Button label="DAFTAR IT SEMINAR" variant="primary" />
          </div>
          <div style={{ flex: "0 0 400px" }}>
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png" alt="Mascot Seminar" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* IT Talkshow Section (Wave Background) */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64 }}>
            <div style={{ flex: "0 0 400px" }}>
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" alt="Mascot Talkshow" style={{ width: "100%", height: "auto" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>IT Talkshow</h2>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8, marginBottom: 32 }}>
                Talkshow berskala nasional: <strong>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.”</strong> Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
              </p>
              <Button label="DAFTAR IT TALKSHOW" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* IT Workshop Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>IT Workshop</h2>
            <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8, marginBottom: 32 }}>
              Workshop <strong>“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</strong> ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
            </p>
            <Button label="DAFTAR IT WORKSHOP" variant="primary" />
          </div>
          <div style={{ flex: "0 0 400px" }}>
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png" alt="Mascot Workshop" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      {/* IT Competition Section (Wave Background) */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64 }}>
            <div style={{ flex: "0 0 400px" }}>
              <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Competition.png" alt="Mascot Competition" style={{ width: "100%", height: "auto" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 24 }}>IT Competition</h2>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8, marginBottom: 32 }}>
                <strong>“From Creation to Innovation”</strong> adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.
              </p>
              <Button label="DAFTAR IT COMPETITION" variant="primary" />
            </div>
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