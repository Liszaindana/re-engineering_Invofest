import { Home, Mic, Trophy, SquareUser, Laptop } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FDF2F8",
        padding: "48px 24px 0",
        marginTop: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr 1.5fr",
          gap: 40,
          paddingBottom: 40,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="INVOFEST Logo"
            style={{ height: 56, objectFit: "contain" }}
          />
        </div>

        {/* Menu Navigasi */}
        <div>
          <h4
            style={{
              color: "#8B1E3F",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 16,
            }}
          >
            MENU NAVIGASI
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              { label: "Beranda", icon: <Home size={14} />, href: "/" },
              { label: "Competition", icon: <Trophy size={14} />, href: "/competition" },
              { label: "Seminar", icon: <SquareUser size={14} />, href: "/seminar" },
              { label: "Workshop", icon: <Laptop size={14} />, href: "/workshop" },
              { label: "Talkshow", icon: <Mic size={14} />, href: "/talkshow" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: "#4B5563",
                    textDecoration: "none",
                    fontSize: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h4
            style={{
              color: "#8B1E3F",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 16,
            }}
          >
            IKUTI KAMI
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              <a
                href="#"
                style={{
                  color: "#4B5563",
                  textDecoration: "none",
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#4B5563",
                  textDecoration: "none",
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
                </svg>
                Youtube
              </a>
            </li>
          </ul>
        </div>

        {/* Alamat + Maps */}
        <div>
          <h4
            style={{
              color: "#8B1E3F",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 16,
            }}
          >
            ALAMAT
          </h4>
          <div
            style={{
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              height: 160,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456!2d109.14!3d-6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2d6bfe885%3A0x2a47b615e8850f62!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sid!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi INVOFEST"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(139, 30, 63, 0.15)",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#6B7280", fontSize: 13 }}>
          &copy; 2025 INVOFEST. All Rights Reserved.
        </span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#" style={{ color: "#6B7280" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
            </svg>
          </a>
          <a href="#" style={{ color: "#6B7280" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
