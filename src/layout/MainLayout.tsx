import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import React from "react";

export default function MainLayout() {
    const [showScroll, setShowScroll] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Header />

            <main style={{ maxWidth: 1280, margin: "0 auto", width: "100%", paddingLeft: 12, paddingRight: 12 }}>
                <Outlet />
            </main>

            <Footer />

            {/* Scroll to Top */}
            {showScroll && (
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: "#8B1E3F",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(139, 30, 63, 0.3)",
                        textDecoration: "none",
                        transition: "background-color 0.25s ease",
                        zIndex: 50,
                    }}
                >
                    <ArrowUp size={20} />
                </a>
            )}
        </div>
    );
}