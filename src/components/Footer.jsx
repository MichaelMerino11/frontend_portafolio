import styles from "../styles/Footer.module.scss";
import github from "../assets/images/iconos/github.png";
import linkedin from "../assets/images/iconos/linkedin.png";
import instagram from "../assets/images/iconos/instagram.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Mi Sitio Web</h3>
          <p>Desarrollado con pasión y dedicación.</p>
        </div>

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

        <div className={styles.social}>
          <h4>Sígueme</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/michael-merino-0b7871207/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/MichaelMerino11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/maikijr11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 Michael Merino. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
