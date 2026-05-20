import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type EventType = {
    id: number;
    name: string;
    date: string;
    location: string;
    categoryId: number;
    category: string;
    speakerId: number;
    speaker: string;
    description: string;
};

export default function EventList() {
    const { id } = useParams();
    const [events, setEvents] = useState<EventType[]>([]);
    
    // States for Edit Modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [editName, setEditName] = useState("");
    const [editLocation, setEditLocation] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editCategoryId, setEditCategoryId] = useState<number>(0);
    const [editSpeakerId, setEditSpeakerId] = useState<number>(0);
    const [editDescription, setEditDescription] = useState("");

    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [speakers, setSpeakers] = useState<{ id: number; name: string }[]>([]);

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:3000/events");
            const data = await response.json();
            if (Array.isArray(data)) {
                setEvents(data);
            } else {
                console.error("Data event bukan array:", data);
                setEvents([]);
            }
        } catch (error) {
            console.error("Gagal mengambil data event:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    // Load categories & speakers when modal opens
    const loadCategoriesAndSpeakers = async () => {
        try {
            const [catRes, speakRes] = await Promise.all([
                fetch("http://localhost:3000/categories"),
                fetch("http://localhost:3000/speakers")
            ]);
            const catData = await catRes.json();
            const speakData = await speakRes.json();
            if (Array.isArray(catData)) setCategories(catData);
            if (Array.isArray(speakData)) setSpeakers(speakData);
        } catch (error) {
            console.error("Failed to load options:", error);
        }
    };

    const handleEditClick = async (event: EventType) => {
        setSelectedEvent(event);
        setEditName(event.name);
        setEditLocation(event.location);
        setEditDate(event.date);
        setEditCategoryId(event.categoryId);
        setEditSpeakerId(event.speakerId);
        setEditDescription(event.description || "");
        setIsEditModalOpen(true);
        await loadCategoriesAndSpeakers();
    };

    const handleDelete = async (eventId: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus event ini?")) {
            try {
                const response = await fetch(`http://localhost:3000/events/${eventId}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    setEvents(events.filter((e) => e.id !== eventId));
                } else {
                    alert("Gagal menghapus event");
                }
            } catch (error) {
                console.error("Error deleting event:", error);
                alert("Terjadi kesalahan sistem");
            }
        }
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedEvent) return;

        try {
            const response = await fetch(`http://localhost:3000/events/${selectedEvent.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: editName,
                    categoryId: editCategoryId,
                    speakerId: editSpeakerId,
                    location: editLocation,
                    dateEvent: editDate,
                    description: editDescription,
                }),
            });

            if (response.ok) {
                await fetchEvents(); // Refresh data to get correct labels
                setIsEditModalOpen(false);
                setSelectedEvent(null);
            } else {
                const errData = await response.json();
                alert(`Gagal mengupdate event: ${errData.message || ""}`);
            }
        } catch (error) {
            console.error("Error updating event:", error);
            alert("Terjadi kesalahan sistem");
        }
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Events Management</h1>
                    <p className="text-gray-500 text-sm">Showing events for Category ID: {id || 'All'}</p>
                </div>
                <Link 
                    to="/dashboard/category/event/create" 
                    className="px-4 py-2 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1731] transition-colors"
                >
                    + Add New Event
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600 border-b">No</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Event Name</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Date</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Location</th>
                            <th className="p-4 font-semibold text-gray-600 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 border-b text-gray-700">{index + 1}</td>
                                <td className="p-4 border-b text-gray-700 font-medium">{event.name}</td>
                                <td className="p-4 border-b text-gray-700">{event.date}</td>
                                <td className="p-4 border-b text-gray-700">{event.location}</td>
                                <td className="p-4 border-b text-gray-700">
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={() => handleEditClick(event)}
                                            className="text-blue-600 hover:underline text-sm font-semibold cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(event.id)}
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

            {/* Edit Modal Overlay */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Edit Event</h2>
                            <button 
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSaveEdit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Event</label>
                                <input 
                                    type="text" 
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                                    <select 
                                        value={editCategoryId}
                                        onChange={(e) => setEditCategoryId(parseInt(e.target.value))}
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pembicara</label>
                                    <select 
                                        value={editSpeakerId}
                                        onChange={(e) => setEditSpeakerId(parseInt(e.target.value))}
                                        className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                    >
                                        {speakers.map((sp) => (
                                            <option key={sp.id} value={sp.id}>{sp.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                                <input 
                                    type="text" 
                                    value={editLocation}
                                    onChange={(e) => setEditLocation(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                                <input 
                                    type="date" 
                                    value={editDate}
                                    onChange={(e) => setEditDate(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                                <textarea 
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    rows={4}
                                    required
                                    className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F]"
                                ></textarea>
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