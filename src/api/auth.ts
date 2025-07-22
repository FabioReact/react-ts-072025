import { FetchClient } from "./fetcher";

type AuthResponse = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

export const registerUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = FetchClient.post<AuthResponse>(
    "http://localhost:4000/register",
    {
      email,
      password,
    },
  );
  return response;
};
