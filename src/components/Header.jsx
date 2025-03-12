import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Header.module.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Portafolio</h1>
        </div>

        {/* Botón de menú hamburguesa en móviles */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú de navegación */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
