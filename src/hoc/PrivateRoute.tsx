import { Navigate, Outlet, useLocation } from "react-router";
import { useLocalStorage } from "usehooks-ts";

const PrivateRoute = () => {
    const [accessToken] = useLocalStorage<string | null>('accessToken', null);
    const location = useLocation();

    if (accessToken === null) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />
    }
    return <Outlet />;
}

export default PrivateRoute;