import HeroSection from "../components/ui/HeroSection";
import Collaps from "../components/ui/Collaps";
import Button from "../components/ui/Button";

export default function Competition() {
  const categories = [
    {
      title: "Poster Design Competition",
      image: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
      description:
        "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
    },
    {
      title: "UI/UX Design Competition",
      image: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
      description:
        "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
    },
    {
      title: "Web Design Competition",
      image: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
      description:
        "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
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
        title="IT Competition"
        subtitle={'"From Creation to Innovation"'}
        description={
          <p style={{ margin: 0 }}>
            Kompetisi dalam INVOFEST ini mengusung tema <strong>“From Creation to Innovation”</strong>,
            Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
            guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan.
          </p>
        }
        buttons={[
          { label: "INFO SELENGKAPNYA", variant: "primary" },
          { label: "HUBUNGI PANITIA", variant: "outline" },
        ]}
        mascotImage="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
        mascotAlt="Maskot Competition"
        showWave={false}
      />

      {/* Deskripsi Kompetisi Section */}
      <section style={{ position: "relative", padding: "120px 0", marginTop: -60, overflow: "hidden" }}>
        {/* Wave Backgrounds */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 32 }}>DESKRIPSI KOMPETISI</h2>
          <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.9, textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            Kompetisi atau perlombaan yang ada dalam kegiatan <strong>INVOFEST (Infomatics Vocational Festival) 2025</strong> adalah diantaranya
            National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam
            INVOFEST ini mengusung tema <strong>“From Creation to Innovation”</strong> Tema ini bertujuan mengajak generasi muda untuk
            mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam
            menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan,
            maupun tanggung jawab sosial.
          </p>
        </div>
      </section>

      {/* Daftar Kompetisi Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#8B1E3F", marginBottom: 12 }}>DAFTAR KOMPETISI</h2>
          <p style={{ color: "#6B7280", fontSize: 18 }}>Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32 }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #F3F4F6",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(139, 30, 63, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
              }}
            >
              <img src={cat.image} alt={cat.title} style={{ width: "100%", height: "auto", display: "block" }} />
              <div style={{ padding: 28, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1F2937", marginBottom: 16 }}>{cat.title}</h3>
                <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.7, marginBottom: 24, flexGrow: 1 }}>{cat.description}</p>
                <div style={{ marginTop: "auto" }}>
                  <Button label="INFO SELENGKAPNYA" variant="primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto", paddingBottom: 120 }}>
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