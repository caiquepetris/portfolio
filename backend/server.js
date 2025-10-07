import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// 🔐 CORS — libera para seu frontend no Vercel e localhost
app.use(
  cors({
    origin: [
      "https://portfolio-eta-black-11.vercel.app", // seu frontend na Vercel
      "http://localhost:5173", // ambiente local (Vite)
    ],
  })
);

app.use(express.json());

// 🚀 Endpoint raiz pra checar se o servidor está de pé
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando 🚀");
});

// 📬 Configuração do Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ✉️ Rota para envio de email
app.post("/sendEmail", async (req, res) => {
  const { nome, email, message } = req.body;

  console.log("📨 Requisição recebida em /sendEmail");
  console.log("👤 Nome:", nome);
  console.log("📧 Email:", email);
  console.log("💬 Mensagem:", message);

  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["caiquepetris@gmail.com"],
      subject: `Contato de ${nome}`,
      html: `
        <h2>Novo contato de ${nome}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email enviado com sucesso:", result);
    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error("❌ Erro ao enviar email:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 🌍 Porta dinâmica (Render usa variável própria)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
