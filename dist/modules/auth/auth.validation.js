"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const passwordSchema = zod_1.z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((val) => /[a-zA-Z]/.test(val), {
    message: "Password must contain at least one alphabet",
})
    .refine((val) => /\d/.test(val), {
    message: "Password must contain at least one number",
});
const createRegisterAuthValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email format" }),
        password: passwordSchema,
        phone: zod_1.z.string({ required_error: "Phone is required" }),
        address: zod_1.z.string({ required_error: "Address is required" }),
    }),
});
const createLoginAuthValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email format" }),
        password: passwordSchema,
    }),
});
// const refreshTokenValidationSchema = z.object({
//   cookies: z.object({
//     refreshToken: z.string({
//       required_error: "Refresh token is required!",
//     }),
//   }),
// });
exports.AuthValidation = {
    createRegisterAuthValidation,
    createLoginAuthValidation,
    // refreshTokenValidationSchema,
};
