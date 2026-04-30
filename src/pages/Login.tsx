import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import Button from "../components/ui/Button";

// schema validation
const loginSchema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    })
  return (
    <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <FormInput 
            text="email" 
            tipe="text" 
            name="email" 
            register={register} 
            error={errors.email?.message} />

            <FormInput 
            text="password" 
            tipe="password" 
            name="password" 
            register={register} 
            error={errors.password?.message} />

            <div>
                <Button label="Login" variant="primary"/>
            </div>
        </form>
    </div>
  );
}
