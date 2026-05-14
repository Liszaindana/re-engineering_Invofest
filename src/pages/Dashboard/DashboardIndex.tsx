export default function DashboardIndex() {


    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Selamat Datang, <span className="text-[#8B1E3F]"></span>! 👋
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Ini adalah dashboard administrator Invofest. Anda dapat mengelola event, kategori, dan speaker dari sini.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-colors cursor-pointer">
                        <h3 className="font-bold text-gray-800 mb-1">Total Event</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">12</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-colors cursor-pointer">
                        <h3 className="font-bold text-gray-800 mb-1">Total Speaker</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">8</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8B1E3F] transition-colors cursor-pointer">
                        <h3 className="font-bold text-gray-800 mb-1">Pendaftar</h3>
                        <p className="text-2xl font-black text-[#8B1E3F]">156</p>
                    </div>
                </div>

                <div className="flex gap-4">
     
                </div>
            </div>
        </div>
    );
}
