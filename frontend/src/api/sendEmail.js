const BASE_URL = (import.meta.env.VITE_API_URL || "https://portfolio-4183.onrender.com").replace(/\/$/, "");

export async function sendEmail(formData) {
  try {
    const response = await fetch(`${BASE_URL}/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json().catch(() => ({ error: "Resposta inválida do servidor" }));

    return { ok: response.ok, result };
  } catch {
    return { ok: false, result: { error: "Erro de conexão com o servidor" } };
  }
}