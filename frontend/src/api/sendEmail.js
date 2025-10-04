export async function sendEmail(formData) {
  console.info("📨 [sendEmail] Dados recebidos no front:", formData);

  try {
    console.info("🌐 [sendEmail] Fazendo requisição para http://localhost:3001/sendEmail...");

    const response = await fetch("http://localhost:3001/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.info("✅ [sendEmail] Resposta recebida do backend:", response);

    const result = await response.json();
    console.log("📩 [sendEmail] Corpo da resposta JSON:", result);

    return { ok: response.ok, result };
  } catch (error) {
    console.error("❌ [sendEmail] Erro na requisição:", error);
    return { ok: false, result: { error: "Erro de conexão com o servidor" } };
  }
}
