import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    foto: any;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    role: z.string().min(1, "Role harus diisi"),
    foto: z.any().refine((files) => files?.length > 0, "Foto harus diunggah"),
});

export default function CreateSpeaker() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create New Speaker</h1>
            <p className="text-gray-500 mb-8 text-sm">Silahkan isi semua data dengan benar</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormInput label="Nama" tipe="text" name="nama" register={register} error={errors.nama?.message} placeholder="Masukkan nama speaker" />
                
                <FormInput label="Role" tipe="text" name="role" register={register} error={errors.role?.message} placeholder="Masukkan role (contoh: Senior Designer)" />
                
                <FormInput label="Foto" tipe="file" name="foto" register={register} error={errors.foto?.message} />

                <div className="pt-4">
                    <Button label="Simpan" variant="primary" type="submit" className="w-full md:w-auto px-10" />
                </div>
            </form>
        </div>
    );
}