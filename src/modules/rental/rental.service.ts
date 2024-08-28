import { Bike } from "../bike/bike.model";
import { TRental } from "./rental.interface";
import Rental from "./rental.model";

const createRental = async (
  userId: string,
  bikeId: string,
  startTime: Date
): Promise<TRental> => {
  try {
    await Bike.findByIdAndUpdate(bikeId, { isAvailable: false });

    const rental = await Rental.create({
      userId,
      bikeId,
      startTime,
      returnTime: null,
    });

    return rental;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getAllRentals = async () => {
  const result = await Rental.find();

  if (!result) {
    throw new Error("No Data Found");
  }

  return result;
};

const updateRentalStatus = async (
  rentalId: string,
  status: boolean
): Promise<TRental | null> => {
  const rental = await Rental.findById(rentalId);

  if (!rental) {
    throw new Error("Rental not found");
  }

  rental.isReturned = status;
  await rental.save();

  return rental;
};

const returnRentalsBike = async (rentalId: string): Promise<TRental | null> => {
  const rental = await Rental.findById(rentalId);

  if (!rental) {
    throw new Error("Rental not found");
  }

  if (rental.isReturned) {
    throw new Error("Bike already returned");
  }

  const returnTime = new Date();
  const startTime = new Date(rental.startTime);
  const rentalDurationHours = Math.ceil(
    (returnTime.getTime() - startTime.getTime()) / (1000 * 60 * 60)
  );

  const bike = await Bike.findById(rental.bikeId);
  if (!bike) {
    throw new Error("Bike not found");
  }
  const pricePerHour = bike.pricePerHour;

  const totalCost = rentalDurationHours * pricePerHour;

  rental.returnTime = returnTime;
  rental.totalCost = totalCost;
  rental.isReturned = true;
  await rental.save();

  bike.isAvailable = true;
  await bike.save();

  return rental;
};

export const rentalServices = {
  createRental,
  getAllRentals,
  returnRentalsBike,
  updateRentalStatus,
};
