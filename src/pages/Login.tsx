import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

// schema validation
const loginSchema = z.object({
  email: z.string().min(1, "Email harus diisi").email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#1F2937", marginBottom: "8px" }}>Login</h1>
        <p style={{ color: "#6B7280", fontSize: "16px" }}>Masukkan Email dan Password Anda untuk masuk.</p>
      </div>

      <form onSubmit={handleSubmit((data) => console.log(data))} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <FormInput
          text="Email Address"
          tipe="text"
          name="email"
          register={register}
          error={errors.email?.message as string}
        />

        <FormInput
          text="Password"
          tipe="password"
          name="password"
          register={register}
          error={errors.password?.message as string}
        /> 

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-12px" }}>
          <Link to="#" style={{ color: "#8B1E3F", fontSize: "14px", textDecoration: "none", fontWeight: 600 }}>Lupa Password?</Link>
        </div>

        <div style={{ marginTop: "10px" }}>
          <Button label="MASUK SEKARANG" variant="primary" />
        </div>

        <p style={{ textAlign: "center", marginTop: "24px", color: "#6B7280", fontSize: "15px" }}>
          Belum punya akun?{" "}
          <Link to="/register" style={{ color: "#8B1E3F", fontWeight: 700, textDecoration: "none" }}>Daftar Sekarang</Link>
        </p>
      </form>
    </div>
  );
}
