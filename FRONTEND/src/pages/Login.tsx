import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";



// schema validation
const loginSchema = z.object({
  username: z.string()
    .min(1, "Username harus diisi")
    .refine((val) => /^\d+$/.test(val), { message: "Username harus berupa angka" }),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginData) => {
    const usernameInt = parseInt(data.username, 10);
    if (usernameInt === 24090130 && data.password === "admin123456") {
      login(data.username);
      alert("Login Berhasil");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Login Gagal! Username atau Password salah.");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#1F2937", marginBottom: "8px" }}>Login</h1>
        <p style={{ color: "#6B7280", fontSize: "16px" }}>Masukkan Username dan Password Anda untuk masuk.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        <FormInput
          label="Username"
          type="text"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
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
