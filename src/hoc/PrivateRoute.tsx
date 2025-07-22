import { useAuthContext } from "@/context/auth-context"
import { Navigate, Outlet, useLocation } from "react-router";

const PrivateRoute = () => {
    const { accessToken } = useAuthContext();
    const location = useLocation();

    if (accessToken === null) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />
    }
    return <Outlet />;
}

export default PrivateRoute;