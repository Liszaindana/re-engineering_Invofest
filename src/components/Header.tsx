import { Home, Swords, Mic, Wrench, MessageSquare, User } from "lucide-react";
import NavLink from "./ui/NavLink";

export const Header: React.FC = () => {

  const menuItems = [
    { label: "Beranda", href: "#", icon: <Home size={18} /> },
    { label: "Competition", href: "#competition", icon: <Swords size={18} /> },
    { label: "Seminar", href: "#hero", icon: <Mic size={18} /> },
    { label: "Workshop", href: "#workshop", icon: <Wrench size={18} /> },
    { label: "Talkshow", href: "#talkshow", icon: <MessageSquare size={18} /> },
  ];

  return (
    <header
      className=" bg-white shadow-sm px-6 py-2"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center gap-4"
        style={{ height: 72 }}
      >
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>
        <div
          className="nav flex gap-2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={item.label === "Seminar"}
            />
          ))}
          <a
            href="#login"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "rgba(139, 30, 63, 0.1)",
              color: "#8B1E3F",
              marginLeft: 8,
              transition: "background-color 0.25s ease",
              textDecoration: "none",
            }}
          >
            <User size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
