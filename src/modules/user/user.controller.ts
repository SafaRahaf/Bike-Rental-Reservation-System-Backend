import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

const getProfile = catchAsync(async (req, res) => {});

const updateProfile = catchAsync(async (req, res) => {});

export const userControllers = {
  getProfile,
  updateProfile,
};
