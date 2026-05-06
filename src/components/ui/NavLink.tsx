import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  active = false,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const primary = "#8B1E3F";


  return (
    <a
      href={href}
      className="p-2 flex items-center"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 12px",
        color: active ? primary : isHover ? primary : "#333",
        fontWeight: active ? 700 : isHover ? 700 : 500,
        borderRadius: 10,
        transition: "all 0.25s ease",
        backgroundColor: active
          ? "rgba(139, 30, 63, 0.15)"
          : isHover
          ? "rgba(139, 30, 63, 0.08)"
          : "transparent",
        textDecoration: "none",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon && (
        <span style={{ display: "inline-flex" }}>
          {icon}
        </span>
      )}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;