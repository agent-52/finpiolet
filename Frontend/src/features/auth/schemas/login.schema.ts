import { z } from "zod";

export const signinSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "name field is required"),
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
    
    
})

export type SignupFomData = z.infer<typeof signupSchema>;
export type SigninFormData = z.infer<typeof signinSchema>;