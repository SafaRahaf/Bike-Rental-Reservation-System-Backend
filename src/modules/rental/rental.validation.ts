import { z } from "zod";

const timeStringSchema = z
  .string({ required_error: "Start Time is Required" })
  .refine(
    (time) => {
      const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      return regex.test(time);
    },
    {
      message: 'Invalid time format , expected "HH:MM" in 24 hours format',
    }
  );

const createRentalValidation = z.object({
  body: z.object({
    startTime: timeStringSchema,
    bikeId: z.string({ required_error: "Bike Id is Required" }),
  }),
});

const updateRentalValidation = z.object({
  body: z.object({
    startTime: timeStringSchema.optional(),
    bikeId: z.string().optional(),
  }),
});

export const RentalValidation = {
  createRentalValidation,
  updateRentalValidation,
};
