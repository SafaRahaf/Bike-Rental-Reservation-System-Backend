// /api/rentals (POST)
// /api/rentals/:id/return (PUT)
// /api/rentals (GET)

import express from "express";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.constant";
import { rentalControllers } from "./rental.controller";

const router = express.Router();

// /api/rentals (POST)
router.post("/", auth(ROLE.admin), rentalControllers.createRental);
router.get("/", auth(ROLE.admin), rentalControllers.getAllRentals);
// router.put(
//   "/:id/return",
//   auth(ROLE.admin),
//   rentalControllers.createRentalController
// );

export const RentalRoutes = router;
