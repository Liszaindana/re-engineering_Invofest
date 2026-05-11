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
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
});

const onSubmit = (data: FormData) => {
    console.log(data);
}
    return (
        <div>
            <h1>Create new Category</h1>
            <p>Silahkan isi semua data dengan benar</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput text="nama" tipe="text" name="nama" register={register} error={errors.nama?.message as string} />

            <Button label="Simpan" variant="primary" type="submit" />
            </form>
        </div>
    );
}