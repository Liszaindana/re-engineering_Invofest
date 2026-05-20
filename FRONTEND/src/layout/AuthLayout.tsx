import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "stretch",
      }}
    >
      {/* Sisi Kiri - Branding */}
      <div
        style={{
          backgroundColor: "#8B1E3F",
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          alt="Mascot"
          style={{ width: "240px", height: "auto", marginBottom: "30px" }}
        />
        <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>
          Selamat Datang di INVOFEST!
        </h2>
        <p
          style={{
            fontSize: "16px",
            opacity: 0.8,
            lineHeight: 1.6,
            maxWidth: "300px",
          }}
        >
          Ayo bergabung dan mulai perjalanan inovasi Anda bersama kami di festival vokasi informatika terbesar tahun ini.
        </p>
      </div>

      {/* Sisi Kanan - Form (Dynamic Content) */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "60px 50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle Watermark */}
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "100px",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}