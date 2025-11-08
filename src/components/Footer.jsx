import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobeAmericas,
  FaRocket,
  FaAward,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const Footer = () => {
  const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiVite, name: "Vite", color: "#646CFF" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const services = [
    { name: "Desarrollo Web", icon: FaCode },
    { name: "Apps Móviles", icon: FaRocket },
    { name: "Backend APIs", icon: FaServer },
    { name: "Consultoría Tech", icon: FaAward },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Quito, Ecuador",
      subtext: "Disponible para proyectos remotos",
    },
    {
      icon: FaEnvelope,
      text: "maikijunior9@gmail.com",
      href: "mailto:maikijunior9@gmail.com",
    },
    {
      icon: FaGlobeAmericas,
      text: "UTC-5",
      subtext: "Zona horaria",
    },
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

  const stats = [
    { number: "10+", label: "Proyectos Completados" },
    { number: "3+", label: "Años de Experiencia" },
    { number: "5+", label: "Tecnologías Dominadas" },
    { number: "100%", label: "Compromiso" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Brand & About */}
          <div className={styles.brandSection}>
            <div className={styles.brandHeader}>
              <FaShieldAlt className={styles.brandIcon} />
              <h3>Historial temporal</h3>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FaRocket className={styles.sectionIcon} />
              <h3>Servicios</h3>
            </div>
            <ul className={styles.servicesList}>
              {services.map((service) => (
                <li key={service.name} className={styles.serviceItem}>
                  <service.icon className={styles.serviceIcon} />
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Navegación</h3>
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

          {/* Contact & Tech */}
          <div className={styles.contactTechSection}>
            {/* Contact Info */}
            <div className={styles.contactSection}>
              <div className={styles.sectionHeader}>
                <FaEnvelope className={styles.sectionIcon} />
                <h3>Contacto</h3>
              </div>
              <div className={styles.contactList}>
                {contactInfo.map((contact, index) => (
                  <div key={index} className={styles.contactItem}>
                    <contact.icon className={styles.contactIcon} />
                    <div className={styles.contactText}>
                      {contact.href ? (
                        <a href={contact.href} className={styles.contactLink}>
                          {contact.text}
                        </a>
                      ) : (
                        <span>{contact.text}</span>
                      )}
                      {contact.subtext && (
                        <span className={styles.contactSubtext}>
                          {contact.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Bottom Section */}
      <div className={styles.socialSection}>
        <div className={styles.socialContainer}>
          <div className={styles.socialContent}>
            <p className={styles.socialText}>
              ¿Interesado en trabajar juntos?
              <span className={styles.highlight}> Conectemos</span>
            </p>
            <div className={styles.socialGrid}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={{ "--social-color": social.color }}
                  title={social.name}
                >
                  <social.icon className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              &copy; 2025 Michael Merino. Todos los derechos reservados.
            </p>
          </div>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>
              Política de Privacidad
            </a>
            <span className={styles.separator}>•</span>
            <a href="/terms" className={styles.legalLink}>
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
