import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";
import profilePhoto from "../assets/images/maiki.jpg";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Sección Izquierda - Texto, Botones y Redes Sociales */}
        <motion.div className={styles.textSection} variants={itemVariants}>
          <motion.div className={styles.content} variants={containerVariants}>
            <motion.h1 variants={itemVariants}>
              Michael Andrés{" "}
              <span className={styles.highlight}>Merino Romero</span>
            </motion.h1>

            <motion.p className={styles.subtitle} variants={itemVariants}>
              <span className={styles.typing}>Full Stack Developer</span>
            </motion.p>

            <motion.p className={styles.description} variants={itemVariants}>
              Apasionado por crear soluciones digitales innovadoras que combinan
              <strong> diseño elegante</strong> con{" "}
              <strong>tecnología robusta</strong>. Especializado en desarrollo
              web full stack con enfoque en experiencia de usuario.
            </motion.p>

            <motion.div className={styles.buttons} variants={itemVariants}>
              <motion.a
                href="#projects"
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye className={styles.btnIcon} />
                Ver Proyectos
                <FaArrowRight className={styles.arrowIcon} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1YMoAbLX3u4AhKJIoAUEWWeVzVs9aZzWq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className={styles.btnIcon} />
                Descargar CV
              </motion.a>
            </motion.div>

            <motion.div className={styles.social} variants={itemVariants}>
              <p className={styles.socialText}>Sígueme en:</p>
              <div className={styles.socialIcons}>
                <motion.a
                  href="https://github.com/MichaelMerino11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/michael-merino-0b7871207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sección Derecha - Foto de Perfil */}
        <motion.div className={styles.imageSection} variants={imageVariants}>
          <motion.div
            className={styles.imageContainer}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={profilePhoto} alt="Michael Merino" />
            <div className={styles.imageOverlay}></div>
            <div className={styles.floatingElements}>
              <div className={styles.floatingElement1}></div>
              <div className={styles.floatingElement2}></div>
              <div className={styles.floatingElement3}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className={styles.scrollArrow}></div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
