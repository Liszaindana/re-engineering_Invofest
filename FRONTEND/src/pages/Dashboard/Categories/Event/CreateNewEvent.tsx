import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    categoryId: string;
    speakerId: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama event harus diisi"),
    categoryId: z.string().min(1, "Kategori harus dipilih"),
    speakerId: z.string().min(1, "Pembicara harus dipilih"),
    lokasi: z.string().min(1, "Lokasi harus diisi"),
    tanggal: z.string().min(1, "Tanggal harus diisi"),
    deskripsi: z.string().min(10, "Deskripsi minimal 10 karakter"),
});

export default function CreateNewEvent() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<{value: string, label: string}[]>([]);
    const [speakers, setSpeakers] = useState<{value: string, label: string}[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, speakRes] = await Promise.all([
                    fetch("https://backend-invofest.vercel.app/categories"),
                    fetch("https://backend-invofest.vercel.app/speakers")
                ]);
                const catData = await catRes.json();
                const speakData = await speakRes.json();
                
                setCategories(catData.map((c: any) => ({ value: c.id.toString(), label: c.name })));
                setSpeakers(speakData.map((s: any) => ({ value: s.id.toString(), label: s.name })));
            } catch (error) {
                console.error("Failed to fetch categories/speakers", error);
            }
        };
        fetchData();
    }, []);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            const response = await fetch("https://backend-invofest.vercel.app/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.nama,
                    categoryId: data.categoryId,
                    speakerId: data.speakerId,
                    location: data.lokasi,
                    dateEvent: data.tanggal,
                    description: data.deskripsi
                })
            });

            if (response.ok) {
                navigate("/dashboard/category/event");
            } else {
                alert("Gagal menyimpan event");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan sistem");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Create New Event</h1>
                <p className="text-gray-500 mb-8 text-sm">Silahkan isi semua data event dengan benar</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormInput 
                        label="Nama Event" 
                        type="text" 
                        name="nama" 
                        register={register} 
                        error={errors.nama} 
                        placeholder="Masukkan nama event" 
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput 
                            label="Kategori" 
                            type="select" 
                            name="categoryId" 
                            register={register} 
                            error={errors.categoryId} 
                            placeholder="Pilih Kategori"
                            options={categories}
                        />

                        <FormInput 
                            label="Pembicara" 
                            type="select" 
                            name="speakerId" 
                            register={register} 
                            error={errors.speakerId} 
                            placeholder="Pilih Pembicara"
                            options={speakers}
                        />
                    </div>

                    <FormInput 
                        label="Lokasi" 
                        type="text" 
                        name="lokasi" 
                        register={register} 
                        error={errors.lokasi} 
                        placeholder="Masukkan lokasi event" 
                    />

                    <FormInput 
                        label="Tanggal & Waktu" 
                        type="datetime-local" 
                        name="tanggal" 
                        register={register} 
                        error={errors.tanggal} 
                    />

                    <FormInput 
                        label="Deskripsi" 
                        type="textarea" 
                        name="deskripsi" 
                        register={register} 
                        error={errors.deskripsi} 
                        placeholder="Tuliskan deskripsi lengkap event..." 
                        rows={5}
                    />

                    <div className="pt-4">
                        <Button label={isLoading ? "Menyimpan..." : "Simpan"} variant="primary" type="submit" className="px-10" />
                    </div>
                </form>
            </div>
        </div>
    );
}
