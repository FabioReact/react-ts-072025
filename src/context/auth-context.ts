import { createContext, useContext } from "react";

export type AuthContextType = {
  accessToken: string | null;
  email: string | null;
  id: number | null;
  onLogin: (token: string, email: string, id: number) => void;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
