// /api/bikes (POST)
// /api/bikes (GET)
// /api/bikes/:id (PUT)
// /api/bikes/:id (DELETE)

import catchAsync from "../../utils/catchAsync";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const bike = await BikeServices.createBike(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bike added successfully",
    data: bike,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const bikes = await BikeServices.getAllBikes();

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bikes retrieved successfully",
    data: bikes,
  });
});

const updateBikeById = catchAsync(async (req, res) => {
  const bike = await BikeServices.updateBike(req.params.id, req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bike updated successfully",
    data: bike,
  });
});

const deleteBikeById = catchAsync(async (req, res) => {
  const bike = await BikeServices.deleteBike(req.params.id);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bike deleted successfully",
    data: bike,
  });
});

export const bikeControllers = {
  createBike,
  getAllBikes,
  updateBikeById,
  deleteBikeById,
};
