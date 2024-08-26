import httpStatus from "http-status";
import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { User } from "../user/user.model";
import { authServices } from "./auth.service";

const signUp = catchAsync(async (req, res) => {
  const result = await authServices.signUp(req.body);

  res.status(200).json({
    success: true,
    statusCode: 201,
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { token, user } = await authServices.login(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token,
    data: user,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Refresh token is required!",
    });
  }

  const result = await authServices.refreshToken(refreshToken);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Access token is retrieved successfully!",
    data: result,
  });
});

export const authControllers = {
  signUp,
  login,
  refreshToken,
};
