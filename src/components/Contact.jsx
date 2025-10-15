import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaMessage,
} from "react-icons/fa";

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

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✅ Mensaje enviado exitosamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMessage =
          data.errors?.map((err) => err.msg).join(". ") ||
          "Error al enviar el mensaje";
        setStatusMessage(`❌ ${errorMessage}`);
      }
    } catch {
      // Eliminamos la variable 'error' que no se usaba
      setStatusMessage("❌ Error al conectar con el servidor");
    }

    setLoading(false);
  };

  // Animaciones simplificadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
    <motion.section
      id="contact"
      className={styles.contact}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Header Section */}
        <motion.div className={styles.header} variants={itemVariants}>
          <h2>Contacto</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Form Section */}
          <motion.div className={styles.formSection} variants={itemVariants}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <FaPaperPlane className={styles.formIcon} />
                <h3>Envíame un Mensaje</h3>
                <p>Responderé lo antes posible</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <FaUser className={styles.inputIcon} />
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Nombre</label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <FaEnvelope className={styles.inputIcon} />
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <FaMessage className={styles.inputIcon} />
                    <textarea
                      id="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Mensaje</label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={styles.submitButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? (
                    <div className={styles.loadingSpinner}></div>
                  ) : (
                    <>
                      <FaPaperPlane className={styles.buttonIcon} />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>

                {statusMessage && (
                  <motion.p
                    className={`${styles.statusMessage} ${
                      statusMessage.includes("✅")
                        ? styles.success
                        : styles.error
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {statusMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className={styles.infoSection} variants={itemVariants}>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <h3>Información de Contacto</h3>
                <p>Conectemos a través de estas plataformas</p>
              </div>

              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
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
                  </motion.a>
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
