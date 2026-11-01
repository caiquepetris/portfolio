import resend from "../config/resend.js";
import { sanitize, isValidEmail } from "../utils/validators.js";

export async function getLogs(req, res) {
  try {
    const rawKey = process.env.RESEND_API_KEY || "";
    const keyDiagnostic = {
      length: rawKey.length,
      startsWithRe: rawKey.startsWith("re_"),
      preview: rawKey ? `${rawKey.slice(0, 5)}...${rawKey.slice(-4)}` : "VAZIA",
    };

    const response = await resend.emails.list ? await resend.emails.list() : { data: "list method not available" };
    res.status(200).json({ success: true, keyDiagnostic, response });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro ao buscar logs: `, err);
    res.status(500).json({ success: false, error: err?.message || String(err) });
  }
}

export async function sendEmail(req, res) {
  const { nome, email, message } = req.body;
  console.log(`\n[1] ✅ Requisição recebida no servidor:`, { nome, email, message: message?.slice(0, 30) + "..." });

  // Campos obrigatórios
  if (!nome || !email || !message) {
    console.log(`[2] ❌ Campos obrigatórios ausentes`);
    return res.status(400).json({ success: false, error: "Campos obrigatórios ausentes." });
  }

  // Validação de tipos e tamanhos
  if (
    typeof nome !== "string" || nome.length > 100 ||
    typeof email !== "string" || email.length > 254 ||
    typeof message !== "string" || message.length > 2000
  ) {
    console.log(`[2] ❌ Dados inválidos (tipos ou tamanhos)`);
    return res.status(400).json({ success: false, error: "Dados inválidos." });
  }

  // Validação de e-mail
  if (!isValidEmail(email)) {
    console.log(`[2] ❌ E-mail inválido: ${email}`);
    return res.status(400).json({ success: false, error: "E-mail inválido." });
  }

  console.log(`[2] ✅ Validação passou`);

  const safeName = sanitize(nome);
  const safeEmail = sanitize(email);
  const safeMessage = sanitize(message);

  console.log(`[3] 📤 Enviando para o Resend... Chave configurada?`, !!process.env.RESEND_API_KEY);

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
      console.error(`[4] ❌ Resend retornou erro:`, error);
      return res.status(500).json({
        success: false,
        error: error.message || error.name || JSON.stringify(error)
      });
    }

    console.log(`[4] ✅ Resend aceitou o e-mail! ID: ${data?.id}`);
    console.log(`[5] 📧 E-mail enviado para caiquepetris@gmail.com`);
    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro ao enviar e-mail (catch): `, err);
    return res.status(500).json({
      success: false,
      error: err?.message || String(err)
    });
  }
}

