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

  return result;
};

export const rentalServices = {
  createRental,
  getAllRentals,
};
