import { ROLE } from "../user/user.constant";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const signUp = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw new Error("User already exists");
  }

  payload.role = ROLE.USER;

  const newUser = await User.create(payload);

  return newUser;
};

const login = async (payload: TLoginUser) => {};

export const authServices = {
  signUp,
  login,
};
