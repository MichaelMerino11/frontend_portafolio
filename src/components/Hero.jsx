import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/images/maiki.jpeg";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <img src={profilePhoto} alt="Michael Merino" />
        <h1>Michael Andrés Merino Romero</h1>
        <p>Full Stack Developer</p>
        <div className={styles.buttons}>
          <a href="#projects">Ver Proyectos</a>
          <a
            href="https://drive.google.com/file/d/1YMoAbLX3u4AhKJIoAUEWWeVzVs9aZzWq/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://github.com/MichaelMerino11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-merino-0b7871207/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
