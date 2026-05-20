import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function DashboardIndex() {
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        events: 0,
        speakers: 0,
        categories: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [eventsRes, speakersRes, categoriesRes] = await Promise.all([
                    fetch("https://backend-invofest.vercel.app/events").catch(() => null),
                    fetch("https://backend-invofest.vercel.app/speakers").catch(() => null),
                    fetch("https://backend-invofest.vercel.app/categories").catch(() => null)
                ]);

                const eventsData = eventsRes ? await eventsRes.json() : [];
                const speakersData = speakersRes ? await speakersRes.json() : [];
                const categoriesData = categoriesRes ? await categoriesRes.json() : [];

                setStats({
                    events: Array.isArray(eventsData) ? eventsData.length : 0,
                    speakers: Array.isArray(speakersData) ? speakersData.length : 0,
                    categories: Array.isArray(categoriesData) ? categoriesData.length : 0
                });
            } catch (error) {
                console.error("Error fetching dashboard statistics:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Selamat Datang, <span className="text-[#8B1E3F]">{user || "Admin"}</span>! 👋
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Ini adalah dashboard administrator Invofest. Anda dapat mengelola event, kategori, dan speaker dari sini.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div 
                        onClick={() => navigate("/dashboard/category")}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 cursor-pointer"
                    >
                        <h3 className="font-bold text-gray-800 mb-1">Total Event</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">{stats.events}</p>
                    </div>
                    <div 
                        onClick={() => navigate("/dashboard/category/speaker")}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 cursor-pointer"
                    >
                        <h3 className="font-bold text-gray-800 mb-1">Total Speaker</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">{stats.speakers}</p>
                    </div>
                    <div 
                        onClick={() => navigate("/dashboard/category")}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 cursor-pointer"
                    >
                        <h3 className="font-bold text-gray-800 mb-1">Total Kategori</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">{stats.categories}</p>
                    </div>
                </div>

                <div className="flex gap-4">
     
                </div>
            </div>
        </div>
    );
}
