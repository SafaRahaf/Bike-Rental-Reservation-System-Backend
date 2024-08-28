import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
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

export const authControllers = {
  signUp,
  login,
};
