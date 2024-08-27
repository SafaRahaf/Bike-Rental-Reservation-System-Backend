import catchAsync from "../../utils/catchAsync";
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

const updateRentalStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const rental = await rentalServices.updateRentalStatus(id, status);

  if (!rental) {
    return res.status(404).send({ message: "Rental not found" });
  }

  res.send({
    success: true,
    statusCode: 200,
    message: "Rental status updated successfully",
    data: rental,
  });
});

const returnRentals = catchAsync(async (req, res) => {
  const rentalId = req.params.id;

  const rental = await rentalServices.returnRentalsBike(rentalId);

  if (!rental) {
    return res.status(404).send({ message: "Rental not found" });
  }

  res.send({
    success: true,
    statusCode: 200,
    message: "Bike returned successfully",
    data: rental,
  });
});

export const rentalControllers = {
  createRental,
  getAllRentals,
  returnRentals,
  updateRentalStatus,
};
