import React from "react";
import Button from "./Button";

interface HeroButton {
  label: string;
  variant: "primary" | "outline";
  onClick?: () => void;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  buttons?: HeroButton[];
  mascotImage: string;
  mascotAlt?: string;
  /** Background color for the section */
  backgroundColor?: string;
  /** Show bottom wave decoration */
  showWave?: boolean;
  /** Wave color */
  waveColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  buttons = [],
  mascotImage,
  mascotAlt = "Mascot",
  backgroundColor = "#fff",
  showWave = true,
  waveColor = "#f9e0e6",
}) => {
  return (
    <div style={{ backgroundColor, position: "relative", overflow: "hidden" }}>
      {/* Hero Content */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 56,
          paddingTop: 56,
          paddingBottom: 80,
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            justifyContent: "center",
            flex: "1 1 60%",
            minWidth: 0,
          }}
        >
          {/* Title */}
          <h1
            style={{
              color: "#8B1E3F",
              fontSize: 42,
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2
              style={{
                color: "#222",
                fontSize: 22,
                fontWeight: 700,
                margin: 0,
                fontStyle: "italic",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </h2>
          )}

          {/* Description */}
          <div
            style={{
              color: "#444",
              fontSize: 15,
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 560,
            }}
          >
            {description}
          </div>

          {/* Buttons */}
          {buttons.length > 0 && (
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  label={btn.label}
                  variant={btn.variant}
                  onClick={btn.onClick}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right - Mascot Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "0 0 35%",
          }}
        >
          <img
            src={mascotImage}
            alt={mascotAlt}
            style={{
              width: "100%",
              maxWidth: 360,
              height: "auto",
              filter: "drop-shadow(0 10px 30px rgba(139, 30, 63, 0.15))",
            }}
          />
        </div>
      </section>

      {/* Bottom Wave Decoration */}
      {showWave && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto", display: "block" }}
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
              fill={waveColor}
              fillOpacity="0.5"
            />
            <path
              d="M0,90 C300,50 600,110 900,70 C1100,50 1300,100 1440,90 L1440,120 L0,120 Z"
              fill={waveColor}
              fillOpacity="0.7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
