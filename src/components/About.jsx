import React from "react";
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
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>Sobre Mí</h2>
        <p className={styles.description}>
          Soy un <strong>desarrollador Full Stack</strong>, apasionado por la
          creación de
          <strong> aplicaciones web modernas e intuitivas</strong>. Disfruto
          trabajar tanto en el <strong>frontend</strong> como en el{" "}
          <strong>backend</strong>, desarrollando{" "}
          <strong>soluciones eficientes y escalables</strong> que mejoran la
          experiencia del usuario y optimizan los procesos tecnológicos. También
          estoy familiarizado con conceptos de la{" "}
          <strong>nube y arquitectura de microservicios</strong>.
          <br />
          Me motiva la <strong>innovación y el aprendizaje constante</strong>,
          por lo que, siempre busco mejorar mis habilidades y mantenerme
          actualizado con las últimas tendencias en desarrollo. Me considero una
          persona
          <strong> proactiva, perseverante y autodidacta</strong>, con gran
          capacidad para adaptarme a entornos dinámicos y colaborar en equipo.
          <br />
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

        {/* Habilidades Blandas */}
        <h3>🎯 Habilidades Blandas</h3>
        <div className={styles.softSkills}>
          <div className={styles.softSkill}>Trabajo en equipo</div>
          <div className={styles.softSkill}>Resolución de problemas</div>
          <div className={styles.softSkill}>Creatividad e innovación</div>
          <div className={styles.softSkill}>Comunicación efectiva</div>
          <div className={styles.softSkill}>Autodidacta</div>
          <div className={styles.softSkill}>Dominio de inglés B2</div>
        </div>
      </div>
    </section>
  );
};

export default About;
