"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const auth_controllere_1 = require("./auth.controllere");
// /api/auth/login (POST)
// /api/auth/signup (POST)
const express_1 = __importDefault(require("express"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post("/signup", (0, validationRequest_1.default)(auth_validation_1.AuthValidation.createRegisterAuthValidation), auth_controllere_1.authControllers.signUp);
router.post("/login", (0, validationRequest_1.default)(auth_validation_1.AuthValidation.createLoginAuthValidation), auth_controllere_1.authControllers.login);
exports.AuthRoutes = router;
