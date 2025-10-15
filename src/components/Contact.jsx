import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✅ Mensaje enviado exitosamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMsg =
          data.errors?.map((err) => err.msg).join(". ") || "Error al enviar";
        setStatusMessage(`❌ ${errorMsg}`);
      }
    } catch {
      setStatusMessage("❌ Error al conectar con el servidor");
    }

    setLoading(false);
  };

  const socialLinks = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "maikijunior9@gmail.com",
      href: "mailto:maikijunior9@gmail.com",
      color: "#EA4335",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Michael Merino",
      href: "https://www.linkedin.com/in/michael-merino-0b7871207/",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "MichaelMerino11",
      href: "https://github.com/MichaelMerino11",
      color: "#333",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contacto</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>
        </div>

        <div className={styles.content}>
          {/* Form Section */}
          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <FaPaperPlane className={styles.formIcon} />
                <h3>Envíame un Mensaje</h3>
                <p>Responderé lo antes posible</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={styles.submitButton}
                >
                  {loading ? (
                    <div className={styles.loadingSpinner}></div>
                  ) : (
                    <>
                      <FaPaperPlane className={styles.buttonIcon} />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                {statusMessage && (
                  <p
                    className={`${styles.statusMessage} ${
                      statusMessage.includes("✅")
                        ? styles.success
                        : styles.error
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.infoSection}>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <h3>Información de Contacto</h3>
                <p>Conectemos a través de estas plataformas</p>
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <div
                      className={styles.socialIcon}
                      style={{ backgroundColor: social.color }}
                    >
                      <social.icon />
                    </div>
                    <div className={styles.socialInfo}>
                      <span className={styles.socialLabel}>{social.label}</span>
                      <span className={styles.socialValue}>{social.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.contactNote}>
                <p>
                  Siempre estoy abierto a discutir nuevas oportunidades,
                  proyectos interesantes o simplemente conversar sobre
                  tecnología.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
