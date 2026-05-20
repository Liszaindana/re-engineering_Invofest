import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon, LayoutGrid, Mic2, Calendar, LogOut, UserIcon } from "lucide-react";

export default function DashboardLayout() {
    const { isAuthenticate, logout } = useAuthStore();

    if (!isAuthenticate) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen w-full">
            {/* kiri */}
            <div className="bg-pink-900 w-64 min-h-screen flex flex-col p-4 sticky top-0">
                <div className="flex-1">
                    {/* satu */}
                    <div className="border-b border-pink-800/50 pb-6 mb-6">
                        <h1 className="text-white text-2xl font-bold tracking-tight">Invofest Dashboard</h1>
                    </div>

                    {/* dua */}
                    <nav className="flex flex-col gap-1">
                        <Link to="/dashboard" className="p-3 text-white/90 text-sm font-medium hover:bg-pink-800 hover:text-white transition-all duration-200 rounded-xl flex items-center gap-3">
                            <HomeIcon size={18} />
                            Dashboard
                        </Link>
                        <Link to="/dashboard/category" className="p-3 text-white/90 text-sm font-medium hover:bg-pink-800 hover:text-white transition-all duration-200 rounded-xl flex items-center gap-3">
                            <LayoutGrid size={18} />
                            Categories
                        </Link>
                        <Link to="/dashboard/category/speaker" className="p-3 text-white/90 text-sm font-medium hover:bg-pink-800 hover:text-white transition-all duration-200 rounded-xl flex items-center gap-3">
                            <Mic2 size={18} />
                            Speakers
                        </Link>
                        <Link to="/dashboard/category/event/1" className="p-3 text-white/90 text-sm font-medium hover:bg-pink-800 hover:text-white transition-all duration-200 rounded-xl flex items-center gap-3">
                            <Calendar size={18} />
                            Event
                        </Link>
                        <Link to="/dashboard/biodata" className="p-3 text-white/90 text-sm font-medium hover:bg-pink-800 hover:text-white transition-all duration-200 rounded-xl flex items-center gap-3">
                            <UserIcon size={18} />
                            Biodata
                        </Link>
                    </nav>
                </div>

                {/* tiga */}
                <div className="mt-auto pt-6 border-t border-pink-800/50">
                    <button 
                        onClick={() => logout()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-all duration-200 cursor-pointer w-full group">
                        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
                        Logout
                    </button>
                </div>
            </div>

            {/* kanan */}
            <div className="flex-1 bg-gray-50 p-8">
                <Outlet />
            </div>
        </div>
    );
}