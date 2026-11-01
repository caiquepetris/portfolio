import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: "Muitas requisições. Tente mais tarde." },
  validate: { xForwardedForHeader: false },
});

export default limiter;

