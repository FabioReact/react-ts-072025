import { loginUser } from "@/api/auth";
import { onLogin } from "@/redux/features/auth";
import { useAppDispatch } from "@/redux/hooks";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = inputRef.current!.value;
    const password = passwordRef.current!.value;
    const response = await loginUser({
      email,
      password,
    }); // Appel API
    dispatch(
      onLogin({
        accessToken: response.accessToken,
        email: response.user.email,
        id: response.user.id,
      }),
    );
    const nextRoute = location.state?.from || "/profile"; // Redirection par défaut
    navigate(nextRoute, { replace: true }); // Redirige vers la page d'origine ou vers /profile
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={inputRef} required />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />
      </fieldset>
      <button>Login</button>
    </form>
  );
};

export default Login;
