import React from "react";
import styles from "../styles/About.module.scss";
import { FaCode, FaDatabase, FaCloud, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>Sobre Mí</h2>
        <p className={styles.description}>
          Soy un desarrollador Full Stack apasionado por la creación de
          aplicaciones web modernas e intuitivas. Disfruto trabajar tanto en el
          frontend como en el backend, desarrollando soluciones eficientes y
          escalables.
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
        </div>

        {/* Habilidades Blandas */}
        <h3>🎯 Habilidades Blandas</h3>
        <div className={styles.softSkills}>
          <div className={styles.softSkill}>Trabajo en equipo</div>
          <div className={styles.softSkill}>Resolución de problemas</div>
          <div className={styles.softSkill}>Creatividad e innovación</div>
          <div className={styles.softSkill}>Comunicación efectiva</div>
        </div>
      </div>
    </section>
  );
};

export default About;
