import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../features/auth/store/authStore";

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};
