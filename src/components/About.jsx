import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
      animate={{ opacity: 1, y: 0 }} // Se hace visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza la transición
    >
      <div className={styles.container}>
        <h2>Sobre Mí</h2>
        <p className={styles.description}>
          Soy un <strong>desarrollador Full Stack</strong>, apasionado por la
          creación de
          <strong> aplicaciones web modernas e intuitivas</strong>. Disfruto
          trabajar tanto en el
          <strong> frontend</strong> como en el <strong>backend</strong>,
          desarrollando
          <strong> soluciones eficientes y escalables</strong> que optimizan
          procesos tecnológicos.
        </p>

        {/* Habilidades Técnicas */}
        <h3>🚀 Habilidades Técnicas</h3>
        <div className={styles.skills}>
          <div className={styles.skillCard}>
            <FaCode className={styles.icon} />
            <p>
              <strong>Frontend:</strong> React, Angular, HTML, CSS, JavaScript
            </p>
          </div>
          <div className={styles.skillCard}>
            <FaDatabase className={styles.icon} />
            <p>
              <strong>Backend:</strong> Java (Spring Boot), Node.js, Python
            </p>
          </div>
          <div className={styles.skillCard}>
            <FaDatabase className={styles.icon} />
            <p>
              <strong>Bases de Datos:</strong> PostgreSQL, MySQL, MongoDB
            </p>
          </div>
          <div className={styles.skillCard}>
            <FaCloud className={styles.icon} />
            <p>
              <strong>Cloud & DevOps:</strong> AWS, CI/CD
            </p>
          </div>
          <div className={styles.skillCard}>
            <FaMobileAlt className={styles.icon} />
            <p>
              <strong>Desarrollo Móvil:</strong> React Native, Ionic, Flutter
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
