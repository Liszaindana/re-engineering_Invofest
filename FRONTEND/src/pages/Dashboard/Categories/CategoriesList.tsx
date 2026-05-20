import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CategoryType = {
    id: number;
    name: string;
};

export default function CategoriesList() {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    // States for Edit Modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
    const [editName, setEditName] = useState("");

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://backend-invofest.vercel.app/categories");
            const data = await response.json();
            if (Array.isArray(data)) {
                setCategories(data);
            } else {
                console.error("Data category bukan array:", data);
                setCategories([]);
            }
        } catch (error) {
            console.error("Gagal mengambil data category:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
            try {
                const response = await fetch(`https://backend-invofest.vercel.app/categories/${id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    setCategories(categories.filter(cat => cat.id !== id));
                } else {
                    alert("Gagal menghapus kategori");
                }
            } catch (error) {
                console.error("Error deleting category:", error);
                alert("Terjadi kesalahan sistem");
            }
        }
    };

    const handleEditClick = (category: CategoryType) => {
        setSelectedCategory(category);
        setEditName(category.name);
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory) return;
        if (editName.trim() === "") {
            alert("Nama kategori tidak boleh kosong!");
            return;
        }

        try {
            const response = await fetch(`https://backend-invofest.vercel.app/categories/${selectedCategory.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: editName })
            });
            if (response.ok) {
                setCategories(categories.map(cat => cat.id === selectedCategory.id ? { ...cat, name: editName } : cat));
                setIsEditModalOpen(false);
                setSelectedCategory(null);
            } else {
                alert("Gagal mengupdate kategori");
            }
        } catch (error) {
            console.error("Error updating category:", error);
            alert("Terjadi kesalahan sistem");
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Categories Management</h1>
                    <p className="text-gray-500 text-sm">Manage your event categories here</p>
                </div>
                <Link 
                    to="/dashboard/category/create" 
                    className="px-4 py-2 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1731] transition-colors"
                >
                    + Add New Category
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600 border-b">No</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Category Name</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b text-gray-700">{index + 1}</td>
                                <td className="p-4 border-b text-gray-700 font-medium">{category.name}</td>
                                <td className="p-4 border-b text-gray-700">
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => handleEditClick(category)}
                                            className="text-blue-600 hover:underline text-sm font-semibold cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(category.id)}
                                            className="text-red-600 hover:underline text-sm font-semibold cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Category Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Edit Category</h2>
                            <button 
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Category</label>
                                <input 
                                    type="text" 
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                    placeholder="Masukkan nama kategori"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button 
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-4 py-2 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="px-4 py-2 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1731] transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
