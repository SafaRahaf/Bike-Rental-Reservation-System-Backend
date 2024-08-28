import { RentalValidation } from "./rental.validation";

import express from "express";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.constant";
import { rentalControllers } from "./rental.controller";
import validateRequest from "../../middlewares/validationRequest";

const router = express.Router();

router.post(
  "/",
  auth(ROLE.admin, ROLE.user),
  validateRequest(RentalValidation.createRentalValidation),
  rentalControllers.createRental
);

router.get("/", rentalControllers.getAllRentals);

router.patch(
  "/:id/return",
  auth(ROLE.admin, ROLE.user),
  // validateRequest(RentalValidation.updateRentalValidation),
  rentalControllers.returnRentals
);
router.patch(
  "/:id",
  auth(ROLE.admin, ROLE.user),
  // validateRequest(RentalValidation.updateRentalValidation),
  rentalControllers.updateRentalStatus
);

export const RentalRoutes = router;
