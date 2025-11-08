import React from "react";
import styles from "../styles/TermsOfService.module.scss";
import { motion } from "framer-motion";
import {
  FaGavel,
  FaUserCheck,
  FaExclamationTriangle,
  FaCode,
  FaHandshake,
} from "react-icons/fa";

const TermsOfService = () => {
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
      icon: FaUserCheck,
      title: "Aceptación de los Términos",
      content: `Al acceder y utilizar este portafolio personal, aceptas cumplir con estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, te recomendamos que no utilices este sitio.

      Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento sin previo aviso. El uso continuado del sitio después de cualquier cambio constituye tu aceptación de los nuevos términos.`,
    },
    {
      icon: FaCode,
      title: "Uso del Sitio",
      content: `Se te concede permiso para:
      • Ver y navegar por el contenido del portafolio
      • Utilizar el formulario de contacto para propósitos legítimos
      • Compartir enlaces al sitio con atribución adecuada
      
      Se te prohíbe:
      • Copiar, modificar o distribuir el contenido sin permiso
      • Utilizar el sitio para actividades ilegales o no autorizadas
      • Intentar acceder a áreas restringidas del sitio
      • Realizar scraping o minería de datos sin consentimiento
      • Interferir con la seguridad o funcionalidad del sitio`,
    },
    {
      icon: FaExclamationTriangle,
      title: "Propiedad Intelectual",
      content: `Todo el contenido de este portafolio, incluyendo pero no limitado a:
      • Texto, gráficos y logotipos
      • Código fuente y diseños
      • Imágenes y fotografías
      • Proyectos y trabajos mostrados
      
      Está protegido por derechos de autor y otras leyes de propiedad intelectual. El contenido es propiedad de Michael Merino o se utiliza con permiso de sus respectivos propietarios.

      Los proyectos mostrados pueden incluir código y diseños protegidos por licencias específicas. Consulta los repositorios individuales en GitHub para más detalles.`,
    },
    {
      icon: FaHandshake,
      title: "Limitación de Responsabilidad",
      content: `Este sitio se proporciona "tal cual" y "según disponibilidad". No ofrecemos garantías de ningún tipo, expresas o implícitas, sobre:
      • La exactitud o integridad del contenido
      • La disponibilidad ininterrumpida del sitio
      • La ausencia de errores o virus
      • Los resultados del uso del sitio
      
      En ningún caso seremos responsables por daños directos, indirectos, incidentales o consecuentes que surjan del uso o la imposibilidad de uso de este sitio.`,
    },
    {
      icon: FaGavel,
      title: "Enlaces a Terceros",
      content: `Este portafolio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan para tu conveniencia y no constituyen un endoso de:
      • El contenido de esos sitios
      • Los productos o servicios ofrecidos
      • Las prácticas de privacidad de terceros
      
      No tenemos control sobre y no asumimos responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros. Te recomendamos revisar los términos y políticas de cualquier sitio de terceros que visites.`,
    },
  ];

  return (
    <motion.section
      className={styles.termsOfService}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div className={styles.header} variants={itemVariants}>
          <FaGavel className={styles.headerIcon} />
          <h1>Términos de Servicio</h1>
          <p className={styles.lastUpdated}>Última actualización: Enero 2025</p>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Introduction */}
        <motion.div className={styles.intro} variants={itemVariants}>
          <p>
            Bienvenido al portafolio personal de <strong>Michael Merino</strong>
            . Estos términos rigen tu uso de este sitio web. Al acceder y
            utilizar este portafolio, aceptas estar sujeto a estos términos y
            condiciones.
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

        {/* Governing Law Section */}
        <motion.div className={styles.lawSection} variants={itemVariants}>
          <h3>Ley Aplicable</h3>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes
            de Ecuador, sin tener en cuenta sus disposiciones sobre conflicto de
            leyes. Cualquier disputa relacionada con estos términos estará
            sujeta a la jurisdicción exclusiva de los tribunales de Ecuador.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div className={styles.contactSection} variants={itemVariants}>
          <h3>Contacto Legal</h3>
          <p>
            Si tienes alguna pregunta sobre estos Términos de Servicio, por
            favor contáctame a través del formulario de contacto disponible en
            el portafolio o enviando un email directo a:
          </p>
          <a
            href="mailto:maikijunior9@gmail.com"
            className={styles.contactLink}
          >
            maikijunior9@gmail.com
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TermsOfService;
