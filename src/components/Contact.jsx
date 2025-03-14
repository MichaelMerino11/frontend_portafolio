import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://portafolio-michaelmerino.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json(); // 🔹 Convertimos la respuesta en JSON

      if (response.ok) {
        setStatusMessage("✅ Se ha enviado exitosamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // 🔹 Muestra los mensajes de error específicos
        setStatusMessage(`❌ ${data.errors.map((err) => err.msg).join(". ")}`);
      }
    } catch (error) {
      setStatusMessage("❌ Error al conectar con el servidor: " + error);
    }

    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          {/* Sección del formulario */}
          <div className={styles.formContainer}>
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
              {statusMessage && (
                <p className={styles.statusMessage}>{statusMessage}</p>
              )}
            </form>
          </div>

          {/* Sección de información de contacto */}
          <div className={styles.infoContainer}>
            <h3>También puedes contactarme en:</h3>
            <div className={styles.infoItem}>
              <FaEnvelope size={24} className={styles.icon} />
              <p>maikijunior9@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <FaLinkedin size={24} className={styles.icon} />
              <a
                href="https://www.linkedin.com/in/michael-merino-0b7871207/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className={styles.infoItem}>
              <FaGithub size={24} className={styles.icon} />
              <a
                href="https://github.com/MichaelMerino11"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Contact;
