import React from "react";

interface SpeakerCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
        position: "relative",
        paddingTop: 60, // Space for the overlapping image
      }}
    >
      {/* Speaker Image */}
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "4px solid #8B1E3F",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          zIndex: 10,
          backgroundColor: "#fff",
          boxShadow: "0 8px 24px rgba(139, 30, 63, 0.2)",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Info Card */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          border: "2px solid #8B1E3F",
          borderRadius: 16,
          padding: "90px 24px 32px", // Extra top padding for the image overlap
          textAlign: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          zIndex: 5,
        }}
      >
        <h3
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#8B1E3F",
            marginBottom: 8,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "#6B7280",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;