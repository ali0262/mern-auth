import express from "express";
import { signup, signIn } from "../controllers/auth.controller.js";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signIn);

export default router;
