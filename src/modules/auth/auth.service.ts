import config from "../../config";
import { ROLE } from "../user/user.constant";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";
import jwt from "jsonwebtoken";

const signUp = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("User already exists");
  }

  payload.role = ROLE.admin;

  const newUser = await User.create(payload);

  return newUser;
};

const login = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("password didn't matched, please try again");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
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
};

export const authServices = {
  signUp,
  login,
};
