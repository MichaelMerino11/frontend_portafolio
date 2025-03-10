import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/Projects.module.scss";
import lumini1 from "../assets/images/lumini/lumini1.jpg";
import res1 from "../assets/images/restaurante/res1.jpg";
import temp1 from "../assets/images/temperatura/temp1.jpg";
import br1 from "../assets/images/brasil/br1.jpeg";

const universityProjects = [
  {
    title: "Lumini Mobile App",
    description: "Aplicación para analizar emociones y patrones de sueño.",
    technologies: ["React Native", "Expo", "Node.js"],
    images: [lumini1],
    github: "https://github.com/MichaelMerino11/Lumini_MovilApp.git",
  },
];

const personalProjects = [
  {
    title: "Restaurante blog",
    description: "Frontend para restaurante con gestión de meseros.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    images: [res1],
    github: "https://github.com/MichaelMerino11/frontend_restaurante.git",
  },
  {
    title: "Sistema de Monitoreo de Temperatura",
    description:
      "Monitoreo en tiempo real de temperaturas con frontend y backend.",
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
    images: [temp1],
    github: "https://github.com/MichaelMerino11/Proyecto_integrador.git",
  },
  {
    title: "Discover Brasil blog",
    description:
      "Explora la cultura brasileña con información sobre comida y tradiciones.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [br1],
    github: "https://github.com/MichaelMerino11/Discover_Brazil.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Proyectos Destacados</h2>
        <p>Explora algunos de los proyectos en los que he trabajado.</p>

        {/* Sección de Proyectos Universitarios */}
        <div className={styles.section}>
          <h3>🚀 Proyectos Personales</h3>
          <div className={styles.grid}>
            {universityProjects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className={styles.icon} /> Ver código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Proyectos Personales */}
        <div className={styles.section}>
          <h3>🎓 Proyectos Universitarios</h3>
          <div className={styles.grid}>
            {personalProjects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={project.images[0]} alt={project.title} />
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className={styles.icon} /> Ver código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
