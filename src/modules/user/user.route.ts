import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

// /api/users/me (GET)
// /api/users/me (PUT)

router.post("/create-admin", userControllers.createAdmin);
router.get("/me", userControllers.getProfile);
router.put("/me", userControllers.updateProfile);

export const UserRoutes = router;
