import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schema, type Inputs } from "./schema";
import { registerUser } from "@/api/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const response = await registerUser({ email: data.email, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>Register</div>
      <input
        className="border"
        type="text"
        id="email"
        {...register("email", { required: true, minLength: 20 })}
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        className="border"
        type="text"
        id="password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <input
        className="border"
        type="text"
        id="passwordConfirmation"
        {...register("passwordConfirmation", { required: true })}
      />
      {errors.passwordConfirmation && (
        <div className="text-red-500">
          {errors.passwordConfirmation.message}
        </div>
      )}
      <button>Submit</button>
    </form>
  );
};

export default Register;
