import z from 'zod';
export const signUpSchema = z.object({ //setting up schema with zod validation
    name : z.string().min(3).max(30),
    email : z.email(),
    paasword: z.string().min(8).max(30),
});
