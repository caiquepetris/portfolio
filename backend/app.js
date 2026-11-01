import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

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

