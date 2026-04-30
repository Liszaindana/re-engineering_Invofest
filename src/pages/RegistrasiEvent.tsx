import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";

// schema validation
const registereventSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  alamat: z.string().min(1, "Alamat harus diisi"),
  email: z.string().email("Email tidak valid"),
  bio: z.string().min(1, "Bio harus diisi"),
});

export default function RegistrasiEvent() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
 } = useForm({
    resolver: zodResolver(registereventSchema),
    mode: 'onChange',
    defaultValues: {
      nama: '',
      alamat: '',
      email: '',
      bio: '',
    },
  });

    return (
        <div>
            <form action="" onSubmit={handleSubmit((data) => alert("Pendaftaran event berhasil!"))}>
                <FormInput 
                text="Nama" 
                tipe="text" 
                name="nama" 
                register={register} 
                error={errors.nama?.message} />

                <FormInput 
                text="Alamat" 
                tipe="text" 
                name="alamat" 
                register={register} 
                error={errors.alamat?.message} />

                <FormInput 
                text="Email" 
                tipe="text" 
                name="email" 
                register={register} 
                error={errors.email?.message} />

                <FormInput 
                text="Bio" 
                tipe="text" 
                name="bio" 
                register={register} 
                error={errors.bio?.message} />

                <div>
                    <Button label="Daftar" variant="primary" />
                </div>
            </form>
        </div>
    );
}
