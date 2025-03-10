import React from "react";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>Sobre Mí</h2>
        <p>
          Soy un desarrollador Full Stack de 23 años, apasionado por crear
          interfaces de usuario intuitivas y visualmente atractivas utilizando
          tecnologías modernas como HTML, CSS, JavaScript, Angular y React.
        </p>
        <p>
          Tengo experiencia en backend con Java (Spring Boot) y Python, así como
          en la gestión de bases de datos con PostgreSQL, MySQL y MongoDB.
          También tengo conocimientos en AWS y CI/CD.
        </p>
        <p>
          Soy proactivo, perseverante y disfruto trabajar en equipo. Mi nivel de
          inglés B2 me permite comunicarme fluidamente en entornos
          profesionales.
        </p>
      </div>
    </section>
  );
};

export default About;
