import { useAppSelector } from "@/redux/hooks";
import { Navigate, Outlet, useLocation } from "react-router";

const PrivateRoute = () => {
    const accessToken = useAppSelector(state => state.auth.accessToken);
    const location = useLocation();

    if (accessToken === null) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />
    }
    return <Outlet />;
}

export default PrivateRoute;