const API_URL =
  import.meta.env.VITE_API_URL || "https://portfolio-4183.onrender.com";

export async function sendEmail(formData) {
  try {
    const cleanURL = API_URL.replace(/\/$/, "");

    const response = await fetch(`${cleanURL}/sendEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json().catch(() => ({
      error: "Resposta inválida do servidor",
    }));

    return { ok: response.ok, result };
  } catch (error) {
    return {
      ok: false,
      result: { error: "Erro de conexão com o servidor" },
    };
  }
}