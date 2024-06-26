"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const bike_model_1 = require("./bike.model");
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBike = yield bike_model_1.Bike.create(payload);
    return newBike;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_model_1.Bike.find({});
    if (!bikes) {
        throw new Error("No data found");
    }
    return bikes;
});
const updateBike = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateBike = yield bike_model_1.Bike.findByIdAndUpdate(id, payload, { new: true });
    return updateBike;
});
const deleteBike = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteBike = yield bike_model_1.Bike.findByIdAndDelete(id);
    return deleteBike;
});
exports.BikeServices = {
    createBike,
    getAllBikes,
    updateBike,
    deleteBike,
};
