import { authControllers } from "./auth.controllere";
// /api/auth/login (POST)
// /api/auth/signup (POST)

import express from "express";

const router = express.Router();

router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login);

export const AuthRoutes = router;
