export async function sendEmail(formData) {
  try {
  
    const API_URL =
      import.meta.env.VITE_API_URL || "https://portfolio-4183.onrender.com";
    const cleanURL = API_URL.replace(/\/$/, ""); // remove / final

    // 🧭 Logs de debug
    console.log("🚀 Enviando requisição para backend:");
    console.log("🌐 URL base:", cleanURL);
    console.log("📨 Endpoint:", `${cleanURL}/sendEmail`);
    console.log("🧾 Dados do formulário:", formData);

    // 💥 Envia a requisição
    const response = await fetch(`${cleanURL}/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // 📦 Loga status e tipo de resposta
    console.log("📬 Status HTTP:", response.status);
    console.log("📬 OK?", response.ok);

    // 🧠 Tenta converter a resposta
    const result = await response
      .json()
      .catch((err) => {
        console.error("❌ Erro ao converter JSON:", err);
        return { error: "Resposta inválida do servidor" };
      });

    console.log("📦 Resposta do servidor:", result);

    // ✅ Retorna o resultado final
    return { ok: response.ok, result };
  } catch (error) {
    console.error("💥 Erro de conexão com o servidor:", error);
    return {
      ok: false,
      result: { error: "Erro de conexão com o servidor" },
    };
  }
}
