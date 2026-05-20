import { Home, Mic, Trophy, SquareUser, Laptop, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <SquareUser size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
    { label: "", href: "/login", icon: <UserCircle size={18} /> },
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
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#8B1E3F] border-b-2 border-[#8B1E3F]"
                    : "text-gray-500 hover:text-gray-900"
                }`
              }
            >
              {item.icon && <span className="w-5 h-5">{item.icon}</span>}
              <span>{item.label}</span>
            </NavLink>
          ))}
          {/* <a
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
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
