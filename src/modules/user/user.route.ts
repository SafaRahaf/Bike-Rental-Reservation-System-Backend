import express from "express";
import { userControllers } from "./user.controller";
import auth from "../../middlewares/auth";
import { ROLE } from "./user.constant";
const router = express.Router();

router.get("/me", auth(ROLE.admin), userControllers.getProfileInfo);
router.put("/me", auth(ROLE.admin), userControllers.updateProfileInfo);
router.put(
  "/role/:userId",
  auth(ROLE.admin),
  userControllers.updateProfileInfo
);

//get all users
router.get(
  "/",
  // auth(ROLE.admin),
  userControllers.getAllUsers
);

router.put(
  "/role/:userId",
  // auth(ROLE.admin),
  userControllers.updateUserRole
);

export const UserRoutes = router;
