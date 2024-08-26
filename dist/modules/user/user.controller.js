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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_constant_1 = require("./user.constant");
const user_service_1 = require("./user.service");
const getProfileInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.user._id;
    const userProfile = yield user_service_1.UserServices.getProfile(userId);
    if (!userProfile) {
        return res.status(404).json({
            success: false,
            message: "No Data Found",
            data: [],
        });
    }
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "User profile retrieved successfully",
        data: userProfile,
    });
}));
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.createAdminIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Admin is created successfully!",
        data: result,
    });
}));
const updateProfileInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.user._id;
    const _a = req.body, { role } = _a, updateData = __rest(_a, ["role"]);
    // @ts-ignore
    if (role && req.user.role !== user_constant_1.ROLE.admin) {
        return res.status(403).json({
            success: false,
            message: "You are not authorized to update the role",
        });
    }
    // @ts-ignore
    if (role && req.user.role === user_constant_1.ROLE.admin) {
        const updatedUser = yield user_service_1.UserServices.updateRole(userId, role);
        return res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: updatedUser,
        });
    }
    const updatedProfile = yield user_service_1.UserServices.updateProfile(userId, updateData);
    res.status(200).json({
        success: true,
        message: "User profile updated successfully",
        data: updatedProfile,
    });
}));
const updateUserRole = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { role } = req.body;
    //@ts-ignore
    if ((req === null || req === void 0 ? void 0 : req.user.role) !== user_constant_1.ROLE.admin) {
        return res.status(403).json({
            success: false,
            message: "You are not authorized to update the role",
        });
    }
    const updatedUser = yield user_service_1.UserServices.updateRole(userId, role);
    res.status(200).json({
        success: true,
        message: "User role updated successfully",
        data: updatedUser,
    });
}));
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.getAllUsertIntoDB();
    res.status(200).json({
        success: true,
        message: "Users retrieved successfully!",
        data: result,
    });
}));
exports.userControllers = {
    getProfileInfo,
    updateProfileInfo,
    createAdmin,
    getAllUsers,
    updateUserRole,
};
