import { onLogout } from "@/redux/features/auth";
import { useAppDispatch } from "@/redux/hooks";
import { useLayoutEffect } from "react";
import { Navigate } from "react-router"
import { useLocalStorage } from "usehooks-ts";

const Logout = () => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_accessToken, setAccessToken, removeAccessToken] = useLocalStorage<string | null>('accessToken', null);

    useLayoutEffect(() => {
        removeAccessToken();
        dispatch(onLogout());
    }, []);

    return <Navigate to="/" />
}

export default Logout;