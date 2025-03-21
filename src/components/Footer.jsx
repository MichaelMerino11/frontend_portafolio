import styles from "../styles/Footer.module.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección de Tecnologías Utilizadas */}
        <div className={styles.technologies}>
          <h3>Tecnologías Utilizadas</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React, Vite
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express
            </li>
            <li>
              <strong>Correo Electrónico:</strong> Nodemailer
            </li>
            <li>
              <strong>Estilos:</strong> CSS
            </li>
          </ul>
        </div>

        {/* Sección de Enlaces */}
        <div className={styles.links}>
          <h4>Enlaces</h4>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Sobre mí</a>
            </li>
            <li>
              <a href="/projects">Proyectos</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className={styles.social}>
          <h4>Sígueme</h4>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/michael-merino-0b7871207/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MichaelMerino11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/maikijr11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos Reservados */}
      <div className={styles.bottom}>
        <p>&copy; 2024 Michael Merino. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
