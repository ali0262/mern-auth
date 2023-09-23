import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

export const signup = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ApiError("please provide all values", 400));
  }
  const newUser = await User.create({ name, email, password });
  res
    .status(201)
    .json({
      message: `user created successfully`,
      newUser: { name: newUser.name, email: newUser.email, id: newUser._id },
    });
});
