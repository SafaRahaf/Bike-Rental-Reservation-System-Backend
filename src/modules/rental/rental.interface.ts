import { Types } from "mongoose";

export type TRental = {
  bikeId: Types.ObjectId;
  userId: Types.ObjectId;
  startTime: Date;
  returnTime: Date | null;
  totalCost: number;
  isReturned: boolean;
};
