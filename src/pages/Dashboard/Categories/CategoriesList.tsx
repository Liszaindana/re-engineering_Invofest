import { Link } from "react-router-dom";

const categories = [
    { id: 1, name: "Seminar" },
    { id: 2, name: "Workshop" },
    { id: 3, name: "Talkshow" },
    { id: 4, name: "Competition" },
];

export default function CategoriesList() {
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
                                        <button className="text-blue-600 hover:underline text-sm font-semibold">Edit</button>
                                        <button className="text-red-600 hover:underline text-sm font-semibold">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
