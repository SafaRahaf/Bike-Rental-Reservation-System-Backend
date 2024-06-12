import express from "express";
import { bikeControllers } from "./bike.controller";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.constant";

const router = express.Router();

router.post("/", auth(ROLE.admin), bikeControllers.createBike);

router.get("/", bikeControllers.getAllBikes);

router.put("/:id", auth(ROLE.admin), bikeControllers.updateBikeById);
router.delete("/:id", auth(ROLE.admin), bikeControllers.deleteBikeById);

export const BikeRoutes = router;
