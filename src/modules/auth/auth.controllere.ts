import config from "../../config";
import catchAsync from "../../utils/catchAsync";
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
  const { accessToken, refreshToken } = await authServices.login(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
  });

  res.status(200).json({
    success: true,
    message: "Logged in successfully!",
    data: { accessToken, refreshToken },
  });
});

export const authControllers = {
  signUp,
  login,
};
