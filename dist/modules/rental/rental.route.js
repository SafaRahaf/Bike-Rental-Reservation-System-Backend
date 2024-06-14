"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalRoutes = void 0;
const rental_validation_1 = require("./rental.validation");
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const rental_controller_1 = require("./rental.controller");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_constant_1.ROLE.admin), (0, validationRequest_1.default)(rental_validation_1.RentalValidation.createRentalValidation), rental_controller_1.rentalControllers.createRental);
router.get("/", (0, auth_1.default)(user_constant_1.ROLE.admin), rental_controller_1.rentalControllers.getAllRentals);
router.put("/:id/return", (0, auth_1.default)(user_constant_1.ROLE.admin), (0, validationRequest_1.default)(rental_validation_1.RentalValidation.updateRentalValidation), rental_controller_1.rentalControllers.returnRentals);
exports.RentalRoutes = router;
