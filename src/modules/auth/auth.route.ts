import validateRequest from "../../middlewares/validationRequest";
import { authControllers } from "./auth.controllere";
// /api/auth/login (POST)
// /api/auth/signup (POST)

import express from "express";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(AuthValidation.createRegisterAuthValidation),
  authControllers.signUp
);
router.post(
  "/login",
  validateRequest(AuthValidation.createLoginAuthValidation),
  authControllers.login
);
// router.post(
//   "/referesh-token",
//   // validateRequest(AuthValidation.refreshTokenValidationSchema),
//   authControllers.refreshToken
// );

export const AuthRoutes = router;
