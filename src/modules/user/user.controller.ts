import catchAsync from "../../utils/catchAsync";

const createAdmin = catchAsync(async (req, res) => {});
const getProfile = catchAsync(async (req, res) => {});
const updateProfile = catchAsync(async (req, res) => {});

export const userControllers = {
  createAdmin,
  getProfile,
  updateProfile,
};
