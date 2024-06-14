"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidation = void 0;
const zod_1 = require("zod");
const createBikeValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        description: zod_1.z.string({ required_error: "Description is required" }),
        pricePerHour: zod_1.z.number({ required_error: "Price Per Hour is required" }),
        cc: zod_1.z.number({ required_error: "cc is required" }),
        year: zod_1.z.number({ required_error: "Year is required" }),
        model: zod_1.z.string({ required_error: "Model is required" }),
        brand: zod_1.z.string({ required_error: "Brand is required" }),
    }),
});
const updateBikeValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        pricePerHour: zod_1.z.number().optional(),
        cc: zod_1.z.number().optional(),
        year: zod_1.z.number().optional(),
        model: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
    }),
});
exports.BikeValidation = {
    createBikeValidation,
    updateBikeValidation,
};
