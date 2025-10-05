export async function sendEmail(formData) {

  try {
    const response = await fetch("http://localhost:3001/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    return { ok: response.ok, result };
  } catch (error) {
    return { ok: false, result: { error: "Erro de conexão com o servidor" } };
  }
}
