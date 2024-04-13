import {z} from 'zod';

export const signupInput = z.object({
    username :z.string(),
    password: z.string(),
    name: z.string().optional()
});

export type SignupInput = z.infer<typeof signupInput>;