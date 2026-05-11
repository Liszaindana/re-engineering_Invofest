import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    category: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama event harus diisi"),
    category: z.string().min(1, "Kategori harus diisi"),
    lokasi: z.string().min(1, "Lokasi harus diisi"),
    tanggal: z.string().min(1, "Tanggal harus diisi"),
    deskripsi: z.string().min(10, "Deskripsi minimal 10 karakter"),
});

export default function CreateNewEvent() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create New Event</h1>
            <p className="text-gray-500 mb-8 text-sm">Silahkan isi semua data event dengan benar</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormInput 
                    label="Nama" 
                    tipe="text" 
                    name="nama" 
                    register={register} 
                    error={errors.nama?.message} 
                    placeholder="Masukkan nama event" 
                />
                
                <FormInput 
                    label="Category" 
                    tipe="text" 
                    name="category" 
                    register={register} 
                    error={errors.category?.message} 
                    placeholder="Contoh: Seminar, Workshop" 
                />

                <FormInput 
                    label="Lokasi" 
                    tipe="text" 
                    name="lokasi" 
                    register={register} 
                    error={errors.lokasi?.message} 
                    placeholder="Masukkan lokasi event" 
                />

                <FormInput 
                    label="Tanggal" 
                    tipe="date" 
                    name="tanggal" 
                    register={register} 
                    error={errors.tanggal?.message} 
                />

                <FormInput 
                    label="Deskripsi" 
                    tipe="textarea" 
                    name="deskripsi" 
                    register={register} 
                    error={errors.deskripsi?.message} 
                    placeholder="Tuliskan deskripsi lengkap event..." 
                    rows={5}
                />

                <div className="pt-4">
                    <Button label="Simpan" variant="primary" type="submit" className="w-full md:w-auto px-10" />
                </div>
            </form>
        </div>
    );
}
