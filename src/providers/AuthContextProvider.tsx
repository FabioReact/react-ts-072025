import AuthContext, { type AuthContextType } from "@/context/auth-context";
import { useState } from "react";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState<string|null>(null);
  const [id, setId] = useState<number|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const myAuthContextValue: AuthContextType = {
    accessToken,
    id,
    email,
    onLogin: (token: string, email: string, id: number) => {
      setAccessToken(token);
      setId(id);
      setEmail(email);
    },
    onLogout: () => {
        setAccessToken(null);
        setEmail(null);
        setId(null);
    }
  };
  return <AuthContext.Provider value={myAuthContextValue}>{children}</AuthContext.Provider>;
};