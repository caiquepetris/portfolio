import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const apiKey = (process.env.RESEND_API_KEY || "").trim();

const resend = new Resend(apiKey);

export default resend;

