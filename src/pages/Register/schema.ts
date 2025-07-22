import z from "zod";

export type Inputs = z.infer<typeof schema>;

export const schema = z
  .object({
    email: z.email(),
    password: z
      .string()
      .min(6)
      .max(80)
      .regex(/^(?=.*[A-Z]).*$/)
      .regex(/^(?=.*[a-z]).*$/)
      .regex(/^(?=.*[!@#$%^&*]).*$/, {
        message:
          "Password must contain at least one special character like !@#$%^&*",
      })
      .regex(/^(?=.*[0-9]).*$/),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords must match",
    path: ["passwordConfirmation"],
  });
