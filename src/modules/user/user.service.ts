import { TUser } from "./user.interface";
import { User } from "./user.model";

const getProfile = async (userId: string) => {
  const userProfile = await User.findById(userId);

  if (userProfile) {
    return userProfile;
  } else {
    throw new Error("User profile not found");
  }
};

const updateProfile = async (userId: string, updateData: any) => {
  const updateProfile = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });

  if (updateProfile) {
    return updateProfile;
  } else {
    throw new Error("User profile not found");
  }
};

export const UserServices = {
  getProfile,
  updateProfile,
};
