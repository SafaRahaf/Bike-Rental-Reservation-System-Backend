import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { User } from "../user/user.model";
import { authServices } from "./auth.service";

// /api/auth/login (POST)
// /api/auth/signup (POST)

const signUp = catchAsync(async (req, res) => {
  const result = await authServices.signUp(req.body);

  res.status(200).json({
    success: true,
    message: "Sign Up successfully!",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { token, user } = await authServices.login(req.body);

  // res.cookie("refreshToken", {
  //   httpOnly: true,
  //   secure: config.node_env === "production",
  // });

  res.status(200).json({
    success: true,
    message: "User logged in successfully!",
    token,
    data: user,
  });
});

export const authControllers = {
  signUp,
  login,
};
