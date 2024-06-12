import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBike = async (payload: TBike) => {
  const newBike = await Bike.create(payload);
  return newBike;
};

const getAllBikes = async () => {
  const bikes = await Bike.find({});
  return bikes;
};

const updateBike = async (id: string, payload: Partial<TBike>) => {
  const updateBike = await Bike.findByIdAndUpdate(id, payload, { new: true });
  return updateBike;
};

const deleteBike = async (id: string) => {
  const deleteBike = await Bike.findByIdAndDelete(id);
  return deleteBike;
};

export const BikeServices = {
  createBike,
  getAllBikes,
  updateBike,
  deleteBike,
};
