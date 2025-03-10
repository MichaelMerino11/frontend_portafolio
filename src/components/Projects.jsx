import React from "react";
import { FaGithub } from "react-icons/fa";
import lumini1 from "../assets/images/lumini/lumini1.jpeg";
import res1 from "../assets/images/restaurante/res1.jpeg";
import temp1 from "../assets/images/temperatura/temp1.jpg";
import br1 from "../assets/images/brasil/br1.jpeg";
import styles from "../styles/Projects.module.scss";

const projects = [
  {
    title: "Lumini Mobile App",
    description:
      "Aplicación móvil para registrar emociones, analizar patrones de sueño y ofrecer guía emocional personalizada.",
    technologies: ["React Native", "Expo", "Node.js"],
    images: [lumini1],
    github: "https://github.com/MichaelMerino11/Lumini_MovilApp.git",
  },
  {
    title: "Restaurante",
    description:
      "Frontend para un restaurante desarrollado con Angular. Incluye inicio de sesión y gestión de meseros.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    images: [res1],
    github: "https://github.com/MichaelMerino11/frontend_restaurante.git",
  },
  {
    title: "Sistema de Monitoreo de Temperatura",
    description:
      "Sistema para monitorear la temperatura en tiempo real. Incluye backend y frontend responsivo.",
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
    images: [temp1],
    github: "https://github.com/MichaelMerino11/Proyecto_integrador.git",
  },
  {
    title: "Discover Brasil",
    description:
      "Aplicación web para explorar la cultura brasileña. Incluye información sobre comida, historia y tradiciones.",
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
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.images[0]} alt={project.title} />
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
    </section>
  );
};

export default Projects;
