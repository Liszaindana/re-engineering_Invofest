// components/atoms/Card.tsx
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // ReactNode memungkinkan isi berupa teks, HTML, atau komponen lain
  className?: string; // Untuk kustomisasi tambahan lewat Tailwind
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`cursor-pointer bg-white shadow-md overflow-hidden p-6 ${className}`}
      style={{
        borderLeft: "6px solid #8B1E3F",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        backgroundColor: "#FFFFFF",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(139, 30, 63, 0.15)";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </div>
  );
};
