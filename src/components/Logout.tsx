import { useAuthContext } from "@/context/auth-context";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router"

const Logout = () => {
    const { onLogout } = useAuthContext();

    useLayoutEffect(() => {
        onLogout();
    }, []);

    return <Navigate to="/" />
}

export default Logout;