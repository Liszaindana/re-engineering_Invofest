import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";

// schema validation
const registerSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  confirm_password: z.string().min(8, "Konfirmasi Password minimal 8 karakter"),
}).refine((data) => data.password === data.confirm_password, {
  message: "Password dan konfirmasi password tidak cocok",
  path: ["confirm_password"],
});

export default function Register() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
 } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      nama: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  return (
    <div>
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
            <FormInput 
            text="Nama" 
            tipe="text" 
            name="nama" 
            register={register} 
            error={errors.nama?.message} />

            <FormInput 
            text="Email" 
            tipe="text" 
            name="email" 
            register={register} 
            error={errors.email?.message} />

            <FormInput 
            text="Password" 
            tipe="password" 
            name="password" 
            register={register} 
            error={errors.password?.message} />

            <FormInput 
            text="Konfirmasi Password" 
            tipe="password" 
            name="confirm_password" 
            register={register} 
            error={errors.confirm_password?.message} />

            <div>
                <Button label="Register" variant="primary" />
            </div>
        </form>
    </div>
  );
}