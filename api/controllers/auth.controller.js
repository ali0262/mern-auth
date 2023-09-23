import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import { attachCookieToResponse } from "../utils/jwt.js";

export const signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ApiError("please provide all values", 400));
  }
  const newUser = await User.create({ name, email, password });

  res.status(201).json({
    message: `user created successfully`,
    status: "success",
    newUser: { name: newUser.name, email: newUser.email, id: newUser._id },
  });
});

export const signIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ApiError("please provide all values", 400));
  }
  const user = await User.findOne({ email });
  const isCorrectPassword = await user.comparePassword(password);
  console.log(isCorrectPassword);
  if (!user || !isCorrectPassword) {
    return next(new ApiError("Your Email or Password is not correct", 400));
  }

  await attachCookieToResponse(res, user._id);

  const { password: userPassword, ...test } = user;
  res.status(201).json({
    message: `user successfully logged in`,
    status: "success",
    user: test._doc,
  });
});
