import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function Forms() {
  const { t } = useLanguage();

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

  const API_URL =
    import.meta.env.VITE_API_URL || "https://portfolio-4183.onrender.com";
  const cleanURL = API_URL.replace(/\/$/, ""); 


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // 🧩 Validação simples
  const validate = () => {
    let newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = t("forms.errors.name_empty");

    if (!formData.email.trim()) {
      newErrors.email = t("forms.errors.email_empty");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("forms.errors.email_invalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("forms.errors.message_empty");
    } else if (formData.message.length < 10) {
      newErrors.message = t("forms.errors.message_min_len");
    }

    return newErrors;
  };

  // 📤 Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
   

      const response = await fetch(`${cleanURL}/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      

      const result = await response.json().catch((err) => {
        return { error: t("forms.status.invalid_response") };
      });


      if (response.ok) {
        setStatus({
          loading: false,
          success: t("forms.status.success"),
          error: null,
        });
        setFormData({ nome: "", email: "", message: "" });

        setTimeout(() => {
          setStatus({ loading: false, success: null, error: null });
        }, 5000);

      } else {
        setStatus({
          loading: false,
          success: null,
          error: result.error || t("forms.status.error_sending"),
        });
      }
    } catch (err) {
      console.error("Erro de conexão com o servidor:", err);
      setStatus({
        loading: false,
        success: null,
        error: t("forms.status.server_conn_error"),
      });
    }
  };

  return (
    <section className="py-16 bg-black text-white text-center" id="forms">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {t("forms.title")}
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        {t("forms.subtitle")}
      </p>

      <motion.form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-3xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Nome + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1">
              {t("forms.label_name")}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder={t("forms.placeholder_name")}
              className={`w-full bg-neutral-900 border ${
                errors.nome ? "border-red-500" : "border-gray-700"
              } rounded-md p-3 text-white`}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {t("forms.label_email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("forms.placeholder_email")}
              className={`w-full bg-neutral-900 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-md p-3 text-white`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            {t("forms.label_message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("forms.placeholder_message")}
            className={`w-full bg-neutral-900 border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } rounded-md p-3 text-white resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Botão */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status.loading}
            className="px-6 py-3 rounded-md font-medium bg-blue-600 hover:bg-blue-700 transition text-white disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
          >
            {status.loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12" cy="12" r="10"
                    stroke="currentColor" strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                {t("forms.btn_sending")}
              </>
            ) : (
              t("forms.btn_send")
            )}
          </button>

          {status.loading && (
            <p className="text-gray-400 text-sm mt-3 animate-pulse">
              {t("forms.server_warning")}
            </p>
          )}
        </div>

        {/* Mensagens de status */}
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
