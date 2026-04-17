import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import rateLimit from "express-rate-limit"; // npm i express-rate-limit

dotenv.config();

const app = express();

// ✅ CORS restrito apenas às origens necessárias
app.use(
  cors({
    origin: [
      "https://caiquepetris-portfolio.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["POST"], // GET removido se não for necessário
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "10kb" })); // ✅ Limita tamanho do payload

// ✅ Rate limiting: máximo 5 requisições por IP a cada 15 minutos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: "Muitas requisições. Tente mais tarde." },
});

app.use("/sendEmail", limiter);

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Função de sanitização simples (remove tags HTML)
function sanitize(str) {
  return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

// ✅ Validação de e-mail simples
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/sendEmail", async (req, res) => {
  const { nome, email, message } = req.body;

  // ✅ Validação de campos obrigatórios
  if (!nome || !email || !message) {
    return res.status(400).json({ success: false, error: "Campos obrigatórios ausentes." });
  }

  // ✅ Validação de tipos e tamanhos
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

  // ✅ Sanitização antes de usar no HTML do e-mail
  const safeName = sanitize(nome);
  const safeEmail = sanitize(email);
  const safeMessage = sanitize(message);

  // ✅ Logs sem dados pessoais (apenas auditoria técnica)


  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["caiquepetris@gmail.com"],
      subject: `Novo contato pelo portfólio`,
      html: `
        <h2>Novo contato</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

   

    // ✅ Retorna apenas o necessário — sem expor o objeto interno do Resend
    res.status(200).json({ success: true });

  } catch (err) {
    // ✅ Log interno detalhado, mas resposta genérica para o cliente
    console.error(`[${new Date().toISOString()}] Erro ao enviar e-mail:`, err);
    res.status(500).json({ success: false, error: "Erro interno. Tente novamente." });
  }
});

const PORT = process.env.PORT || 3001;
