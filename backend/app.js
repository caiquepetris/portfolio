import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

// Necessário para ambientes com proxy reverso (Render, Heroku, etc.)
// Permite que o express-rate-limit identifique o IP real do cliente via X-Forwarded-For
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "https://caiquepetris-portfolio.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "10kb" }));

app.use("/", emailRoutes);

export default app;

