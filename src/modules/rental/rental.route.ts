import { RentalValidation } from "./rental.validation";

import express from "express";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.constant";
import { rentalControllers } from "./rental.controller";
import validateRequest from "../../middlewares/validationRequest";

const router = express.Router();

router.post(
  "/",
  auth(ROLE.admin),
  validateRequest(RentalValidation.createRentalValidation),
  rentalControllers.createRental
);

router.get("/", auth(ROLE.admin), rentalControllers.getAllRentals);

router.put(
  "/:id/return",
  auth(ROLE.admin),
  validateRequest(RentalValidation.updateRentalValidation),
  rentalControllers.returnRentals
);

export const RentalRoutes = router;
