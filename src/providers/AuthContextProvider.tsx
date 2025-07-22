import AuthContext, { type AuthContextType } from "@/context/auth-context";
import { useState } from "react";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState<string|null>(null);
  const [email, setEmail] = useState<string|null>(null);
  const myAuthContextValue: AuthContextType = {
    accessToken,
    email,
    onLogin: (token: string, email: string) => {
      setAccessToken(token);
      setEmail(email);
    },
    onLogout: () => {
        setAccessToken(null);
        setEmail(null);
    }
  };
  return <AuthContext.Provider value={myAuthContextValue}>{children}</AuthContext.Provider>;
};