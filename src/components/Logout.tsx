import { onLogout } from "@/redux/features/auth";
import { useAppDispatch } from "@/redux/hooks";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router"

const Logout = () => {
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(onLogout());
    }, []);

    return <Navigate to="/" />
}

export default Logout;