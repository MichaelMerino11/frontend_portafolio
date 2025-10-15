import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaCode,
  FaEnvelope,
  FaServer,
  FaCss3Alt,
} from "react-icons/fa";
import { SiReact, SiVite, SiNodedotjs, SiExpress } from "react-icons/si";

const Footer = () => {
  const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiVite, name: "Vite", color: "#646CFF" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: FaEnvelope, name: "Nodemailer", color: "#339933" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/michael-merino-0b7871207/",
      color: "#0077B5",
      name: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/MichaelMerino11",
      color: "#333",
      name: "GitHub",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/maikijr11/",
      color: "#E4405F",
      name: "Instagram",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Technologies Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FaCode className={styles.sectionIcon} />
            <h3>Tecnologías Utilizadas</h3>
          </div>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <div key={tech.name} className={styles.techItem}>
                <tech.icon
                  className={styles.techIcon}
                  style={{ color: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Enlaces Rápidos</h3>
          </div>
          <ul className={styles.linksList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Conectemos</h3>
          </div>
          <p className={styles.socialText}>Sígueme en mis redes sociales</p>
          <div className={styles.socialGrid}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ "--social-color": social.color }}
              >
                <social.icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            &copy; 2024 Michael Merino. Todos los derechos reservados.
          </p>
          <p className={styles.madeWith}>
            Hecho con <FaHeart className={styles.heartIcon} /> usando React &
            Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
