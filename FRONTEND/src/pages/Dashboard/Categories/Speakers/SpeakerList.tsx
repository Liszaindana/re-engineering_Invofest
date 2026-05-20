import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type SpeakerType = {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    categories: { id: number; name: string }[];
};

export default function SpeakerList() {
    const [speakers, setSpeakers] = useState<SpeakerType[]>([]);
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    
    // States for Edit Modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerType | null>(null);
    const [editName, setEditName] = useState("");
    const [editRole, setEditRole] = useState("");
    const [editImageUrl, setEditImageUrl] = useState("");
    const [editCategoryIds, setEditCategoryIds] = useState<number[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    const fetchSpeakers = async () => {
        try {
            const response = await fetch("https://backend-invofest.vercel.app/speakers");
            const data = await response.json();
            if (Array.isArray(data)) {
                setSpeakers(data);
            } else {
                console.error("Data speaker bukan array:", data);
                setSpeakers([]);
            }
        } catch (error) {
            console.error("Gagal mengambil data speaker:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://backend-invofest.vercel.app/categories");
            const data = await response.json();
            if (Array.isArray(data)) {
                setCategories(data);
            }
        } catch (error) {
            console.error("Gagal mengambil data kategori:", error);
        }
    };

    useEffect(() => {
        fetchSpeakers();
        fetchCategories();
    }, []);

    // Filter speakers berdasarkan category yang dipilih
    const filteredSpeakers = speakers.filter((speaker) => {
        if (selectedCategory === "all") return true;
        if (selectedCategory === "uncategorized") {
            return !speaker.categories || speaker.categories.length === 0;
        }
        return speaker.categories?.some((cat) => cat.name === selectedCategory);
    });

    const handleDelete = async (id: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus pembicara ini?")) {
            try {
                const response = await fetch(`https://backend-invofest.vercel.app/speakers/${id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    setSpeakers(speakers.filter(s => s.id !== id));
                } else {
                    alert("Gagal menghapus speaker");
                }
            } catch (error) {
                console.error("Error deleting speaker:", error);
                alert("Terjadi kesalahan sistem");
            }
        }
    };

    const handleEditClick = (speaker: SpeakerType) => {
        setSelectedSpeaker(speaker);
        setEditName(speaker.name);
        setEditRole(speaker.role);
        setEditImageUrl(speaker.imageUrl || "");
        setEditCategoryIds(speaker.categories?.map(c => c.id) || []);
        setIsEditModalOpen(true);
    };



    const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSpeaker) return;

    // Optimistic UI update
    setSpeakers(prev =>
        prev.map(s =>
            s.id === selectedSpeaker.id
                ? {
                    ...s,
                    name: editName,
                    role: editRole,
                    imageUrl: editImageUrl,
                    categories: categories.filter(cat => editCategoryIds.includes(cat.id)),
                }
                : s
        )
    );
    // Close modal instantly
    setIsEditModalOpen(false);
    setSelectedSpeaker(null);

    // Fire API calls without awaiting to avoid UI blocking
    fetch(`https://backend-invofest.vercel.app/speakers/${selectedSpeaker.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName, role: editRole, image: editImageUrl })
    }).catch(err => console.error('Error updating speaker:', err));

    fetch(`https://backend-invofest.vercel.app/speakers/${selectedSpeaker.id}/categories`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryIds: editCategoryIds })
    }).catch(err => console.error('Error updating categories:', err));

    // Reset saving state immediately
    setIsSaving(false);
};

    const colorMap: Record<string, string> = {
        'Seminar': 'bg-blue-100 text-blue-700',
        'Workshop': 'bg-green-100 text-green-700',
        'Talkshow': 'bg-purple-100 text-purple-700',
        'Competition': 'bg-orange-100 text-orange-700',
    };

    const tabColorMap: Record<string, { active: string; inactive: string }> = {
        'all': { active: 'bg-[#8B1E3F] text-white', inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200' },
        'Seminar': { active: 'bg-blue-600 text-white', inactive: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
        'Workshop': { active: 'bg-green-600 text-white', inactive: 'bg-green-50 text-green-700 hover:bg-green-100' },
        'Talkshow': { active: 'bg-purple-600 text-white', inactive: 'bg-purple-50 text-purple-700 hover:bg-purple-100' },
        'Competition': { active: 'bg-orange-500 text-white', inactive: 'bg-orange-50 text-orange-700 hover:bg-orange-100' },
        'uncategorized': { active: 'bg-gray-600 text-white', inactive: 'bg-gray-100 text-gray-500 hover:bg-gray-200' },
    };

    const getTabStyle = (tabName: string) => {
        const colors = tabColorMap[tabName] || tabColorMap['all'];
        return selectedCategory === tabName ? colors.active : colors.inactive;
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Speakers Management</h1>
                    <p className="text-gray-500 text-sm">Manage your event speakers here</p>
                </div>
                <Link 
                    to="/dashboard/category/speaker/create" 
                    className="px-4 py-2 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1731] transition-colors"
                >
                    + Add New Speaker
                </Link>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${getTabStyle("all")}`}
                >
                    Semua ({speakers.length})
                </button>
                {categories.map((cat) => {
                    const count = speakers.filter(s => s.categories?.some(c => c.name === cat.name)).length;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${getTabStyle(cat.name)}`}
                        >
                            {cat.name} ({count})
                        </button>
                    );
                })}
                <button
                    onClick={() => setSelectedCategory("uncategorized")}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${getTabStyle("uncategorized")}`}
                >
                    Belum ada ({speakers.filter(s => !s.categories || s.categories.length === 0).length})
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600 border-b">No</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Name</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Role</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Categories</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSpeakers.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-400 italic">
                                    Tidak ada speaker untuk kategori ini
                                </td>
                            </tr>
                        ) : (
                            filteredSpeakers.map((speaker, index) => (
                                <tr key={speaker.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b text-gray-700">{index + 1}</td>
                                    <td className="p-4 border-b text-gray-700 font-medium">{speaker.name}</td>
                                    <td className="p-4 border-b text-gray-700">{speaker.role}</td>
                                    <td className="p-4 border-b text-gray-700">
                                        <div className="flex flex-wrap gap-1.5">
                                            {speaker.categories && speaker.categories.length > 0 ? (
                                                speaker.categories.map((cat) => {
                                                    const colors = colorMap[cat.name] || 'bg-gray-100 text-gray-700';
                                                    return (
                                                        <span key={cat.id} className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colors}`}>
                                                            {cat.name}
                                                        </span>
                                                    );
                                                })
                                            ) : (
                                                <span className="text-gray-400 text-xs italic">Belum ada</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 border-b text-gray-700">
                                        <div className="flex gap-3">
                                            <button 
                                                onClick={() => handleEditClick(speaker)}
                                                className="text-blue-600 hover:underline text-sm font-semibold cursor-pointer"
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(speaker.id)}
                                                className="text-red-600 hover:underline text-sm font-semibold cursor-pointer"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Speaker Modal Overlay */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Edit Speaker</h2>
                            <button 
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Speaker</label>
                                <input 
                                    type="text" 
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role / Jabatan</label>
                                <input 
                                    type="text" 
                                    value={editRole}
                                    onChange={(e) => setEditRole(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input 
                                    type="text" 
                                    value={editImageUrl}
                                    onChange={(e) => setEditImageUrl(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                                <select
                                    value={editCategoryIds[0] || ""}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setEditCategoryIds(val ? [parseInt(val)] : []);
                                    }}
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F] bg-white"
                                >
                                    <option value="">Pilih Kategori</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button 
                                    type="button"
                                    disabled={isSaving}
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-4 py-2 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    disabled={isSaving}
                                    className={`px-4 py-2 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1731] transition-colors ${isSaving ? 'opacity-50 cursor-wait' : ''}`}
                                >
                                    {isSaving ? 'Menyimpan...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}