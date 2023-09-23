import jwt from "jsonwebtoken";

const signToken = (payload) => {
  return jwt.sign({ id: payload }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export const attachCookieToResponse = async (res, payload) => {
  const token = signToken(payload);

  const cookieTime = Number(process.env.COOKIE_TIME) * 1000 * 60 * 60 * 24;
  res.cookie("access-token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + cookieTime),
  });
};
