import { Router } from "express";
import limiter from "../middlewares/rateLimiter.js";
import { sendEmail } from "../controllers/emailController.js";

const router = Router();

router.post("/sendEmail", limiter, sendEmail);

export default router;

