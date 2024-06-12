import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

const getProfileInfo = catchAsync(async (req, res) => {
  // @ts-ignore
  const userId = req.user._id;

  const userProfile = await UserServices.getProfile(userId);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User profile retrieved successfully",
    data: userProfile,
  });
});

const updateProfileInfo = catchAsync(async (req, res) => {
  // @ts-ignore
  const userId = req.user._id;

  const { name, email, phone, address } = req.body;

  const updatedProfile = await UserServices.updateProfile(userId, {
    name,
    email,
    phone,
    address,
  });

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User profile updated successfully",
    data: updatedProfile,
  });
});

export const userControllers = {
  getProfileInfo,
  updateProfileInfo,
};
