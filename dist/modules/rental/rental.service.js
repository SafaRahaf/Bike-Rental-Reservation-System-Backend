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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalServices = void 0;
const bike_model_1 = require("../bike/bike.model");
const rental_model_1 = __importDefault(require("./rental.model"));
const createRental = (userId, bikeId, startTime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield bike_model_1.Bike.findByIdAndUpdate(bikeId, { isAvailable: false });
        const rental = yield rental_model_1.default.create({
            userId,
            bikeId,
            startTime,
            returnTime: null,
        });
        return rental;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const getAllRentals = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rental_model_1.default.find();
    if (!result) {
        throw new Error("No Data Found");
    }
    return result;
});
const returnRentalsBike = (rentalId) => __awaiter(void 0, void 0, void 0, function* () {
    const rental = yield rental_model_1.default.findById(rentalId);
    if (!rental) {
        throw new Error("Rental not found");
    }
    if (rental.isReturned) {
        throw new Error("Bike already returned");
    }
    const returnTime = new Date();
    const startTime = new Date(rental.startTime);
    const rentalDurationHours = Math.ceil((returnTime.getTime() - startTime.getTime()) / (1000 * 60 * 60));
    const pricePerHour = 15;
    const totalCost = rentalDurationHours * pricePerHour;
    rental.returnTime = returnTime;
    rental.totalCost = totalCost;
    rental.isReturned = true;
    yield rental.save();
    const bike = yield bike_model_1.Bike.findById(rental.bikeId);
    if (bike) {
        bike.isAvailable = true;
        yield bike.save();
    }
    return rental;
});
exports.rentalServices = {
    createRental,
    getAllRentals,
    returnRentalsBike,
};
