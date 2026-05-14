import { Link } from "react-router-dom";

const speakers = [
    { id: 1, name: "Budi Santoso", category: "Seminar" },
    { id: 2, name: "Siti Aminah", category: "Workshop" },
];

export default function SpeakerList() {

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

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600 border-b">No</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Name</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Category</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {speakers.map((speaker, index) => (
                            <tr key={speaker.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b text-gray-700">{index + 1}</td>
                                <td className="p-4 border-b text-gray-700 font-medium">{speaker.name}</td>
                                <td className="p-4 border-b text-gray-700">{speaker.category}</td>
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