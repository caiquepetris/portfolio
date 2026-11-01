import { Router } from "express";
import limiter from "../middlewares/rateLimiter.js";
import { sendEmail, getLogs } from "../controllers/emailController.js";

const router = Router();

router.post("/sendEmail", limiter, sendEmail);
router.get("/logs", getLogs);

export default router;

