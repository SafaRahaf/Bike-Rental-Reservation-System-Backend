import catchAsync from "../../utils/catchAsync";
import { Bike } from "../bike/bike.model";
import Rental from "./rental.model";
import { rentalServices } from "./rental.service";

const createRental = catchAsync(async (req, res) => {
  const { bikeId, startTime } = req.body;
  // @ts-ignore
  const userId = req.user._id;

  const rental = await rentalServices.createRental(userId, bikeId, startTime);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Rental created successfully",
    data: rental,
  });
});

const getAllRentals = catchAsync(async (req, res) => {
  const rental = await rentalServices.getAllRentals();

  if (rental.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Data Found",
      data: [],
    });
  }

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Rentals retrieved successfully",
    data: rental,
  });
});

const returnRentals = catchAsync(async (req, res) => {
  const rentalId = req.params.id;

  const rental = await Rental.findById(rentalId);

  if (!rental) {
    return res.status(404).send({ message: "Rental not found" });
  }

  if (rental.isReturned) {
    return res.status(400).send({ message: "Bike already returned" });
  }

  const returnTime = new Date();
  const startTime = new Date(rental.startTime);
  const rentalDurationHours = Math.ceil(
    // @ts-ignore
    (returnTime - startTime) / (1000 * 60 * 60)
  );
  const pricePerHour = 15;
  const totalCost = rentalDurationHours * pricePerHour;

  rental.returnTime = returnTime;
  rental.totalCost = totalCost;
  rental.isReturned = true;
  await rental.save();

  const bike = await Bike.findById(rental.bikeId);
  // @ts-ignore
  bike?.isAvailable = true;
  await bike?.save();

  res.send({
    success: true,
    statusCode: 200,
    message: "Bike returned successfully",
    data: {
      _id: rental._id,
      userId: rental.userId,
      bikeId: rental.bikeId,
      startTime: rental.startTime,
      returnTime: rental.returnTime,
      totalCost: rental.totalCost,
      isReturned: rental.isReturned,
    },
  });
});

export const rentalControllers = {
  createRental,
  getAllRentals,
  returnRentals,
};
