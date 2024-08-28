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
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const getProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userProfile = yield user_model_1.User.findById(userId);
    if (userProfile) {
        return userProfile;
    }
    else {
        throw new Error("User profile not found");
    }
});
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield user_model_1.User.create(payload);
    return admin;
});
const updateProfile = (userId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProfile = yield user_model_1.User.findByIdAndUpdate(userId, updateData, {
        new: true,
    });
    if (updateProfile) {
        return updateProfile;
    }
    else {
        throw new Error("User profile not found");
    }
});
const updateRole = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.User.findByIdAndUpdate(userId, { role }, { new: true });
    if (updatedUser) {
        return updatedUser;
    }
    else {
        throw new Error("User not found");
    }
});
const getAllUsertIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.find();
    return users;
});
const deleteUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.User.findByIdAndDelete(userId);
    if (deletedUser) {
        return deletedUser;
    }
    else {
        throw new Error("User not found");
    }
});
exports.UserServices = {
    getProfile,
    updateProfile,
    createAdminIntoDB,
    updateRole,
    getAllUsertIntoDB,
    deleteUserFromDB,
};
