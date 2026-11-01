import resend from "../config/resend.js";
import { sanitize, isValidEmail } from "../utils/validators.js";

export async function getLogs(req, res) {
  try {
    const { data, error } = await resend.logs.list();

    if (error) {
      console.error(`[${new Date().toISOString()}] Erro ao buscar logs do Resend: `, error);
      return res.status(500).json({ success: false, error });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro inesperado ao buscar logs: `, err);
    res.status(500).json({ success: false, error: "Erro interno." });
  }
}

export async function sendEmail(req, res) {
  const { nome, email, message } = req.body;

  // Campos obrigatórios
  if (!nome || !email || !message) {
    return res.status(400).json({ success: false, error: "Campos obrigatórios ausentes." });
  }

  // Validação de tipos e tamanhos
  if (
    typeof nome !== "string" || nome.length > 100 ||
    typeof email !== "string" || email.length > 254 ||
    typeof message !== "string" || message.length > 2000
  ) {
    return res.status(400).json({ success: false, error: "Dados inválidos." });
  }

  // Validação de e-mail
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: "E-mail inválido." });
  }

  const safeName    = sanitize(nome);
  const safeEmail   = sanitize(email);
  const safeMessage = sanitize(message);

  try {
    const { data, error } = await resend.emails.send({
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

    if (error) {
      console.error(`[${new Date().toISOString()}] Resend retornou erro: `, error);
      return res.status(500).json({ success: false, error: "Erro interno. Tente novamente." });
    }

    console.log(`[${new Date().toISOString()}] E-mail enviado com sucesso. ID: ${data?.id}`);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro ao enviar e-mail: `, err);
    res.status(500).json({ success: false, error: "Erro interno. Tente novamente." });
  }
}

