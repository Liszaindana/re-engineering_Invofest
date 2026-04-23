import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapsProps {
  title: string;
  description: string;
}

const Collaps: React.FC<CollapsProps> = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  const primary = "#8B1E3F";

  return (
    <div 
      style={{ 
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRight: `6px solid ${primary}`,
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(139, 30, 63, 0.15)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <button
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          fontWeight: 600,
          color: open ? primary : "#374151",
          fontSize: 16
        }}
        onClick={() => setOpen(!open)}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: "#F3F4F6",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease"
        }}>
          <ChevronDown size={20} color={open ? primary : "#6B7280"} />
        </div>
        <span>{title}</span>
      </button>
      <div style={{
        maxHeight: open ? 500 : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: open ? "0 24px 24px 72px" : "0 24px 0 72px",
        color: "#4B5563",
        fontSize: 15,
        lineHeight: 1.6
      }}>
        {description}
      </div>
    </div>
  );
};

export default Collaps;