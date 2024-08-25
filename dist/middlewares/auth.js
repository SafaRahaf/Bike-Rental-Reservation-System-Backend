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
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../modules/user/user.model");
const config_1 = __importDefault(require("../config"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../errors/AppError"));
// export const auth = (...requiredRoles: (keyof typeof ROLE)[]) => {
//   return catchAsync(async (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token) {
//       throw new AppError(401, "You are not authorized to access this route");
//     }
//     try {
//       const verifiedToken = jwt.verify(
//         token,
//         config.jwt_access_secret as string
//       );
//       const { role, email } = verifiedToken as JwtPayload;
//       const user = await User.findOne({ email });
//       if (!user) {
//         throw new AppError(401, "User not found");
//       }
//       if (!requiredRoles.includes(role)) {
//         throw new AppError(401, "You are not authorized to access this route");
//       }
//       // @ts-ignore
//       req.user = user;
//       next();
//     } catch (error) {
//       throw new AppError(401, "Invalid token");
//     }
//   });
// };
// export default auth;
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.default(401, "You are not authorized to access this route");
        }
        try {
            const verifiedToken = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            const { role, email } = verifiedToken;
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new AppError_1.default(401, "User not found");
            }
            if (!requiredRoles.includes(role)) {
                throw new AppError_1.default(401, "You are not authorized to access this route");
            }
            // @ts-ignore
            req.user = user;
            next();
        }
        catch (error) {
            throw new AppError_1.default(401, "Invalid token");
        }
    }));
};
exports.auth = auth;
exports.default = exports.auth;
