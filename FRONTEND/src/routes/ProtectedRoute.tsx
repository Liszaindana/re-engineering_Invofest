import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const {isAuthenticate} = useAuthStore((state) => state);

    // jika isAuthenticate false maka akan redirect ke halaman login
    if (!isAuthenticate) {
        return <Navigate to="/login" replace />;
    }

    // jika true, maka boleh mengkases halaman
    return <Outlet />;
}