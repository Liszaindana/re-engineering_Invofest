import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", className = "" }) => {
  const [isHover, setIsHover] = React.useState(false);
  const primary = "#8B1E3F";
  const primaryHover = "#6F1631";

  const baseClass =
    variant === "primary"
      ? "bg-red-700 text-white"
      : "border border-red-700 text-red-700";

  return (
    <button
      className={`${baseClass} p-2 px-4 rounded ${className}`}
      style={{
        backgroundColor: variant === "primary" ? (isHover ? primaryHover : primary) : (isHover ? primary : "transparent"),
        color: variant === "primary" ? "#FFFFFF" : (isHover ? "#FFFFFF" : primary),
        border: variant === "outline" ? `1px solid ${primary}` : "1px solid transparent",
        borderRadius: 8,
        padding: "10px 16px",
        fontWeight: 600,
        transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label}
    </button>
  );
};

export default Button;