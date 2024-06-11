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
  // const result = await

  res.status(200).json({
    success: true,
    message: "Login successful",
    // data: result
  });
});

export const authControllers = {
  signUp,
  login,
};
