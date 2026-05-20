

import profileImage from "../../assets/gw.jpeg";

export default function Biodata() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Biodata Mahasiswa</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-2xl">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shrink-0">
                        {/* Placeholder for photo */}
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Nama Lengkap</p>
                            <p className="font-semibold text-gray-800 border-b pb-2">Lisza Indana Zulfa</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">NIM</p>
                            <p className="font-semibold text-gray-800 border-b pb-2">24090130</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Program Studi</p>
                            <p className="font-semibold text-gray-800 border-b pb-2">Sarjana Terapan Teknik Informatika</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Kelas</p>
                            <p className="font-semibold text-gray-800 border-b pb-2">4D</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
