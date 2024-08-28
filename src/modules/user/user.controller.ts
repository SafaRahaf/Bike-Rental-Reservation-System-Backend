import catchAsync from "../../utils/catchAsync";
import { ROLE } from "./user.constant";
import { UserServices } from "./user.service";

const getProfileInfo = catchAsync(async (req, res) => {
  // @ts-ignore
  const userId = req.user._id;

  const userProfile = await UserServices.getProfile(userId);

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
});

const createAdmin = catchAsync(async (req, res) => {
  const result = await UserServices.createAdminIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Admin is created successfully!",
    data: result,
  });
});

const updateProfileInfo = catchAsync(async (req, res) => {
  // @ts-ignore
  const userId = req.user._id;

  const { role, ...updateData } = req.body;

  // @ts-ignore
  if (role && req.user.role !== ROLE.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to update the role",
    });
  }

  // @ts-ignore
  if (role && req.user.role === ROLE.admin) {
    const updatedUser = await UserServices.updateRole(userId, role);
    return res.status(200).json({
      success: true,
      message: "User role updated successfully",
      data: updatedUser,
    });
  }

  const updatedProfile = await UserServices.updateProfile(userId, updateData);

  res.status(200).json({
    success: true,
    message: "User profile updated successfully",
    data: updatedProfile,
  });
});

const updateUserRole = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  //@ts-ignore
  if (req?.user.role !== ROLE.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to update the role",
    });
  }

  const updatedUser = await UserServices.updateRole(userId, role);

  res.status(200).json({
    success: true,
    message: "User role updated successfully",
    data: updatedUser,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsertIntoDB();

  res.status(200).json({
    success: true,
    message: "Users retrieved successfully!",
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  // @ts-ignore
  if (req.user.role !== ROLE.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to delete users",
    });
  }

  const deletedUser = await UserServices.deleteUserFromDB(userId);

  if (!deletedUser) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser,
  });
});

export const userControllers = {
  getProfileInfo,
  updateProfileInfo,
  createAdmin,
  getAllUsers,
  updateUserRole,
  deleteUser,
};
