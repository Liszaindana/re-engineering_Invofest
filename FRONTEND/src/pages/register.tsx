import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

// schema validation
const registerSchema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  username: z.string()
    .min(1, "Username harus diisi")
    .refine((val) => /^\d+$/.test(val), { message: "Username harus berupa angka" }),
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
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      nama: '',
      username: '',
      password: '',
      confirm_password: '',
    },
  });

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#1F2937", marginBottom: "8px" }}>Daftar Akun</h1>
        <p style={{ color: "#6B7280", fontSize: "16px" }}>Lengkapi data di bawah untuk membuat akun baru.</p>
      </div>

      <form onSubmit={handleSubmit((data) => console.log(data))} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FormInput
          label="Nama Lengkap"
          type="text"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />

        <FormInput
          label="Username"
          type="text"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <FormInput
            label="Password"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
          />

          <FormInput
            label="Konfirmasi Password"
            type="password"
            name="confirm_password"
            register={register}
            error={errors.confirm_password?.message}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <Button label="DAFTAR SEKARANG" variant="primary" />
        </div>

        <p style={{ textAlign: "center", marginTop: "24px", color: "#6B7280", fontSize: "15px" }}>
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "#8B1E3F", fontWeight: 700, textDecoration: "none" }}>Login Di Sini</Link>
        </p>
      </form>
    </div>
  );
}