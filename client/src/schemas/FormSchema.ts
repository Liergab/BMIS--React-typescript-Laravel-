import {z} from 'zod'

export const ResidentSigninSchema = z.object({
    first_name   : z.string().min(1,{message:'First Name required!'}),
    last_name    : z.string().min(1,{message:'Last Name required!'}),
        email    : z.string().email(),
        password : z.string().min(8,{ message: 'Invalid Password'}).max(12),
    password_confirmation :z.string()
  }).refine((data) => data.password === data. password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

export const AdminLoginSchema = z.object({
    email: z.string().email(),
    password: z
    .string()
    .min(8,{ message: 'Invalid Password' })
    .max(12)
  })

export const ResidentLoginSchema = z.object({
    email: z.string().email(),
    password: z
    .string()
    .min(8,{ message: 'Invalid Password' })
    .max(12)
    })
    

