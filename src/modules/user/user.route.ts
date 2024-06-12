import express from "express";
import { userControllers } from "./user.controller";
import auth from "../../middlewares/auth";
const router = express.Router();

// /api/users/me (GET)
// /api/users/me (PUT)

router.get("/me", auth(), userControllers.getProfile);
router.put("/me", auth(), userControllers.updateProfile);

export const UserRoutes = router;
