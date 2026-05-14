import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";



// schema validation
const loginSchema = z.object({
  email: z.string().min(1, "Email harus diisi").email("Format email tidak valid"),
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
    if (data.email === "admin@gmail.com" && data.password === "admin123456") {
      login(data.email);
      alert("Login Berhasil");
      navigate("/dashboard"); // Redirect to dashboard
    } else {

      alert("Login Gagal! Email atau Password salah.");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#1F2937", marginBottom: "8px" }}>Login</h1>
        <p style={{ color: "#6B7280", fontSize: "16px" }}>Masukkan Email dan Password Anda untuk masuk.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        <FormInput
          label="Email Address"
          type="text"
          name="email"
          register={register}
          error={errors.email?.message}
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
