import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    foto: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    role: z.string().min(1, "Role harus diisi"),
    foto: z.string().url("Masukkan URL yang valid").min(1, "URL foto harus diisi"),
});

type CategoryType = { id: number; name: string };

export default function CreateSpeaker() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://backend-invofest.vercel.app/categories");
                const data = await response.json();
                if (Array.isArray(data)) setCategories(data);
            } catch (error) {
                console.error("Gagal mengambil kategori:", error);
            }
        };
        fetchCategories();
    }, []);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            // 1. Simpan speaker
            const response = await fetch("https://backend-invofest.vercel.app/speakers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.nama,
                    role: data.role,
                    image: data.foto,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                const newSpeakerId = result.data?.id;

                // 2. Assign kategori jika ada yang dipilih
                if (newSpeakerId && selectedCategoryIds.length > 0) {
                    await fetch(`https://backend-invofest.vercel.app/speakers/${newSpeakerId}/categories`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ categoryIds: selectedCategoryIds }),
                    });
                }

                navigate("/dashboard/category/speaker");
            } else {
                alert("Gagal menyimpan speaker");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan sistem");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Create New Speaker</h1>
                <p className="text-gray-500 mb-8 text-sm">Silahkan isi semua data dengan benar</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormInput label="Nama" type="text" name="nama" register={register} error={errors.nama?.message} placeholder="Masukkan nama speaker" />
                    
                    <FormInput label="Role" type="text" name="role" register={register} error={errors.role?.message} placeholder="Masukkan role (contoh: Senior Designer)" />
                    
                    <FormInput label="Foto (URL)" type="url" name="foto" register={register} error={errors.foto?.message} placeholder="https://example.com/foto-speaker.png" />

                    {/* Category Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                        <select
                            value={selectedCategoryIds[0] || ""}
                            onChange={(e) => {
                                const val = e.target.value;
                                setSelectedCategoryIds(val ? [parseInt(val)] : []);
                            }}
                            className="w-full border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#8B1E3F] bg-white"
                        >
                            <option value="">Pilih Kategori</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="pt-4">
                        <Button label={isLoading ? "Menyimpan..." : "Simpan"} variant="primary" type="submit" className="px-10" />
                    </div>
                </form>
            </div>
        </div>
    );
}