import React from "react";
import styles from "../styles/PrivacyPolicy.module.scss";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaEnvelope,
  FaCookie,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const sections = [
    {
      icon: FaUserLock,
      title: "Información que Recopilamos",
      content: `Recopilamos información que nos proporcionas directamente cuando:
      • Utilizas el formulario de contacto (nombre, email, mensaje)
      • Te suscribes a nuestro newsletter
      • Interactúas con nuestro portafolio
      
      Información recopilada automáticamente:
      • Dirección IP y tipo de dispositivo
      • Navegador y sistema operativo
      • Páginas visitadas y tiempo de permanencia
      • Datos de analytics anonimizados`,
    },
    {
      icon: FaDatabase,
      title: "Uso de la Información",
      content: `Utilizamos tu información para:
      • Responder a tus consultas y mensajes
      • Mejorar la experiencia del usuario
      • Analizar el rendimiento del portafolio
      • Prevenir fraudes y abusos
      • Cumplir con obligaciones legales
      
      No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing.`,
    },
    {
      icon: FaCookie,
      title: "Cookies y Tecnologías Similares",
      content: `Utilizamos cookies y tecnologías similares para:
      • Recordar tus preferencias
      • Analizar el tráfico del sitio
      • Mejorar el rendimiento
      • Personalizar contenido
      
      Puedes controlar el uso de cookies a través de la configuración de tu navegador. Al continuar usando este sitio, aceptas nuestro uso de cookies.`,
    },
    {
      icon: FaShieldAlt,
      title: "Seguridad de los Datos",
      content: `Implementamos medidas de seguridad apropiadas para proteger tu información:
      • Encriptación SSL/TLS para transmisión de datos
      • Almacenamiento seguro en servidores protegidos
      • Acceso restringido a información personal
      • Revisiones periódicas de seguridad
      
      Aunque nos esforzamos por proteger tu información, ninguna transmisión por internet es 100% segura.`,
    },
    {
      icon: FaEnvelope,
      title: "Tus Derechos",
      content: `Tienes derecho a:
      • Acceder a tu información personal
      • Corregir datos inexactos
      • Solicitar la eliminación de tus datos
      • Oponerte al procesamiento de datos
      • Portabilidad de datos
      • Retirar tu consentimiento en cualquier momento
      
      Para ejercer estos derechos, contáctanos a través del formulario de contacto.`,
    },
  ];

  return (
    <motion.section
      className={styles.privacyPolicy}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div className={styles.header} variants={itemVariants}>
          <FaShieldAlt className={styles.headerIcon} />
          <h1>Política de Privacidad</h1>
          <p className={styles.lastUpdated}>Última actualización: Enero 2025</p>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Introduction */}
        <motion.div className={styles.intro} variants={itemVariants}>
          <p>
            En <strong>Michael Merino</strong>, valoramos y respetamos tu
            privacidad. Esta política describe cómo recopilamos, usamos y
            protegemos tu información cuando visitas mi portafolio personal.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className={styles.content}>
          {sections.map((section) => (
            <motion.section
              key={section.title}
              className={styles.section}
              variants={itemVariants}
            >
              <div className={styles.sectionHeader}>
                <section.icon className={styles.sectionIcon} />
                <h2>{section.title}</h2>
              </div>
              <div className={styles.sectionContent}>
                {section.content.split("\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      paragraph.trim() ? styles.paragraph : styles.emptyLine
                    }
                  >
                    {paragraph.trim() || ""}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div className={styles.contactSection} variants={itemVariants}>
          <h3>Contacto sobre Privacidad</h3>
          <p>
            Si tienes preguntas sobre esta política de privacidad o cómo
            manejamos tu información, no dudes en contactarme a través del
            formulario de contacto o enviando un email a:
          </p>
          <a
            href="mailto:maikijunior9@gmail.com"
            className={styles.contactLink}
          >
            maikijunior9@gmail.com
          </a>
        </motion.div>

        {/* Changes Section */}
        <motion.div className={styles.changesSection} variants={itemVariants}>
          <h3>Cambios en esta Política</h3>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te
            notificaremos sobre cambios significativos publicando la nueva
            política en este sitio y actualizando la fecha de "Última
            actualización".
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PrivacyPolicy;
