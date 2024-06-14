"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalValidation = void 0;
const zod_1 = require("zod");
const createRentalValidation = zod_1.z.object({
    body: zod_1.z.object({
        startTime: zod_1.z.string({ required_error: "Start time is required" }),
        bikeId: zod_1.z.string({ required_error: "Bike Id is Required" }),
    }),
});
const updateRentalValidation = zod_1.z.object({
    body: zod_1.z.object({
        startTime: zod_1.z.string().optional(),
        bikeId: zod_1.z.string().optional(),
    }),
});
exports.RentalValidation = {
    createRentalValidation,
    updateRentalValidation,
};
