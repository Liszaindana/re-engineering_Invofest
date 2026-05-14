import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/ui/Button";

type FormData = {
    nama: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Create new Category</h1>
                <p className="text-gray-500 mb-8 text-sm">Silahkan isi semua data dengan benar</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormInput label="Nama" tipe="text" name="nama" register={register} error={errors.nama?.message} />

                    <div className="pt-4">
                        <Button label="Simpan" variant="primary" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}