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
exports.rentalControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const rental_service_1 = require("./rental.service");
const createRental = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId, startTime } = req.body;
    // @ts-ignore
    const userId = req.user._id;
    const rental = yield rental_service_1.rentalServices.createRental(userId, bikeId, startTime);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Rental created successfully",
        data: rental,
    });
}));
const getAllRentals = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rental = yield rental_service_1.rentalServices.getAllRentals();
    if (rental.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Data Found",
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Rentals retrieved successfully",
        data: rental,
    });
}));
const updateRentalStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    const rental = yield rental_service_1.rentalServices.updateRentalStatus(id, status);
    if (!rental) {
        return res.status(404).send({ message: "Rental not found" });
    }
    res.send({
        success: true,
        statusCode: 200,
        message: "Rental status updated successfully",
        data: rental,
    });
}));
const returnRentals = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalId = req.params.id;
    const rental = yield rental_service_1.rentalServices.returnRentalsBike(rentalId);
    if (!rental) {
        return res.status(404).send({ message: "Rental not found" });
    }
    res.send({
        success: true,
        statusCode: 200,
        message: "Bike returned successfully",
        data: rental,
    });
}));
exports.rentalControllers = {
    createRental,
    getAllRentals,
    returnRentals,
    updateRentalStatus,
};
