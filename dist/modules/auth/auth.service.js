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
exports.authServices = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("../user/user.model");
const auth_utils_1 = require("./auth.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (user) {
        throw new Error("User already exists");
    }
    const newUser = yield user_model_1.User.create(payload);
    return newUser;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new Error("User not found");
    }
    const passwordMatch = yield (0, auth_utils_1.isPasswordMatched)(payload.password, user.password);
    if (!passwordMatch) {
        throw new Error("password didn't matched, please try again");
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: "1y",
    });
    // const refreshToken = jwt.sign(
    //   jwtPayload,
    //   config.jwt_refresh_secret as string,
    //   {
    //     expiresIn: "1y",
    //   }
    // );
    return {
        token,
        // refreshToken,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
        },
    };
});
exports.authServices = {
    signUp,
    login,
};
