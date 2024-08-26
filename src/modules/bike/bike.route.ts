import express from "express";
import { bikeControllers } from "./bike.controller";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.constant";
import { BikeValidation } from "./bike.validation";
import validateRequest from "../../middlewares/validationRequest";

const router = express.Router();

router.post(
  "/",
  // auth(ROLE.admin),
  validateRequest(BikeValidation.createBikeValidation),
  bikeControllers.createBike
);

router.get("/", bikeControllers.getAllBikes);

router.put(
  "/:id",
  // auth(ROLE.admin),
  validateRequest(BikeValidation.updateBikeValidation),
  bikeControllers.updateBikeById
);
router.delete(
  "/:id",
  // auth(ROLE.admin),
  bikeControllers.deleteBikeById
);

export const BikeRoutes = router;
