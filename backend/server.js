import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";

dotenv.config();
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


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: "Muitas requisições. Tente mais tarde." },
});

app.use("/sendEmail", limiter);

const resend = new Resend(process.env.RESEND_API_KEY);


function sanitize(str) {
  return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/sendEmail", async (req, res) => {
  const { nome, email, message } = req.body;


  if (!nome || !email || !message) {
    return res.status(400).json({ success: false, error: "Campos obrigatórios ausentes." });
  }

  if (
    typeof nome !== "string" || nome.length > 100 ||
    typeof email !== "string" || email.length > 254 ||
    typeof message !== "string" || message.length > 2000
  ) {
    return res.status(400).json({ success: false, error: "Dados inválidos." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: "E-mail inválido." });
  }

  const safeName = sanitize(nome);
  const safeEmail = sanitize(email);
  const safeMessage = sanitize(message);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["caiquepetris@gmail.com"],
      subject: `Novo contato pelo portfólio`,
      html: `

      <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessage}</p>
    `,
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro ao enviar e-mail: `, err);
    res.status(500).json({ success: false, error: "Erro interno. Tente novamente." });
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
