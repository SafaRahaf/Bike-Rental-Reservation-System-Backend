"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const bike_validation_1 = require("./bike.validation");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_constant_1.ROLE.admin), (0, validationRequest_1.default)(bike_validation_1.BikeValidation.createBikeValidation), bike_controller_1.bikeControllers.createBike);
router.get("/", bike_controller_1.bikeControllers.getAllBikes);
router.put("/:id", (0, auth_1.default)(user_constant_1.ROLE.admin), (0, validationRequest_1.default)(bike_validation_1.BikeValidation.updateBikeValidation), bike_controller_1.bikeControllers.updateBikeById);
router.delete("/:id", (0, auth_1.default)(user_constant_1.ROLE.admin), bike_controller_1.bikeControllers.deleteBikeById);
exports.BikeRoutes = router;
