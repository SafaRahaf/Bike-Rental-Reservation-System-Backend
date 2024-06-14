"use strict";
// /api/bikes (POST)
// /api/bikes (GET)
// /api/bikes/:id (PUT)
// /api/bikes/:id (DELETE)
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
exports.bikeControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const bike_service_1 = require("./bike.service");
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_service_1.BikeServices.createBike(req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Bike added successfully",
        data: bike,
    });
}));
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_service_1.BikeServices.getAllBikes();
    if (bikes.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Data Found",
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Bikes retrieved successfully",
        data: bikes,
    });
}));
const updateBikeById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_service_1.BikeServices.updateBike(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Bike updated successfully",
        data: bike,
    });
}));
const deleteBikeById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield bike_service_1.BikeServices.deleteBike(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Bike deleted successfully",
        data: bike,
    });
}));
exports.bikeControllers = {
    createBike,
    getAllBikes,
    updateBikeById,
    deleteBikeById,
};
