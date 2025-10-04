import { useState } from "react";
import { motion } from "framer-motion";

function Forms() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Por favor, digite seu nome.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um email válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A mensagem não pode estar vazia.";
    } else if (formData.message.length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("http://localhost:3001/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: "Mensagem enviada com sucesso!",
          error: null,
        });
        setFormData({ nome: "", email: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: null,
          error: result.error || "Erro ao enviar.",
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Erro de conexão com o servidor.",
      });
    }
  };

  return (
    <section className="py-16 bg-black text-white text-center" id="forms">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Entre em contato comigo
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Tem um projeto em mente, uma oportunidade profissional ou só quer trocar
        uma ideia? Fique à vontade para me mandar uma mensagem — responderei o
        mais rápido possível.
      </p>

      {/* Form com fade-in/out */}
      <motion.form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-3xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }} // amount define quanta parte do form precisa aparecer pra ativar
      >
        {/* Nome + Email lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1">
              Digite seu nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className={`w-full bg-neutral-900 border ${
                errors.nome ? "border-red-500" : "border-gray-700"
              } rounded-md p-3 text-white`}
              required
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Digite seu email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              className={`w-full bg-neutral-900 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-md p-3 text-white`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Digite sua mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem..."
            className={`w-full bg-neutral-900 border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } rounded-md p-3 text-white resize-none`}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Botão */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status.loading}
            className="px-6 py-3 rounded-md font-medium bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            {status.loading ? "Enviando..." : "Enviar"}
          </button>
        </div>

        {/* Status */}
        {status.success && (
          <p className="mt-4 text-green-500 text-center">{status.success}</p>
        )}
        {status.error && (
          <p className="mt-4 text-red-500 text-center">{status.error}</p>
        )}
      </motion.form>
    </section>
  );
}

export default Forms;
