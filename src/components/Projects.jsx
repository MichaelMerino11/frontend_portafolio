import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/Projects.module.scss";
import lumini1 from "../assets/images/lumini/lumini1.jpg";
import res1 from "../assets/images/restaurante/res1.jpg";
import temp1 from "../assets/images/temperatura/temp1.jpg";
import { motion } from "framer-motion";
import br1 from "../assets/images/brasil/br1.jpeg";
import force from "../assets/images/force/force.jpeg";
import nexus from "../assets/images/nexus/nexus.jpeg";
import jcs from "../assets/images/jcs/jcs.jpeg";

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const professionalProjects = [
  {
    title: "Jimcorpservi CÍA.LTDA",
    description:
      "Sitio web corporativo para empresa especializada en servicios de limpieza institucional, hospitalaria e industrial. Desarrollo completo con backend para formularios y gestión de contenido.",
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "AOS",
      "Node.js",
      "Express.js",
      "Multer",
      "Nodemailer",
      "CORS",
      "Helmet",
      "dotenv",
      "cPanel",
    ],
    images: [jcs],
    github: "https://github.com/MichaelMerino11/JimCorpServi",
    category: "professional",
  },
];

const personalProjects = [
  {
    title: "ExtremeForce Landing Page",
    description:
      "Landing page deportiva premium con diseño energético y moderno. Optimizada para conversión con secciones estratégicas de productos, características y suscripción.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel", "Responsive Design"],
    images: [force],
    github: "https://github.com/MichaelMerino11/ExtremeForce-Landing-Page",
    category: "personal",
  },
  {
    title: "Nexus Landing Page",
    description:
      "Plataforma de soluciones digitales avanzadas con enfoque en transformación digital empresarial. Diseño minimalista y profesional para clientes corporativos.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel", "UI/UX Design"],
    images: [nexus],
    github: "https://github.com/MichaelMerino11/Nexus-Landing-Page",
    category: "personal",
  },
  {
    title: "Lumini Mobile App",
    description:
      "Aplicación móvil innovadora para análisis de emociones y patrones de sueño. Interfaz intuitiva y experiencia de usuario optimizada para bienestar digital.",
    technologies: ["React Native", "Expo", "Node.js", "Mobile Development"],
    images: [lumini1],
    github: "https://github.com/MichaelMerino11/Lumini_MovilApp.git",
    category: "personal",
  },
];

const universityProjects = [
  {
    title: "Restaurante Blog & Management",
    description:
      "Sistema completo de gestión para restaurante con blog integrado. Frontend desarrollado con Angular para administración eficiente de meseros y contenido.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "REST API"],
    images: [res1],
    github: "https://github.com/MichaelMerino11/frontend_restaurante.git",
    category: "university",
  },
  {
    title: "Sistema de Monitoreo de Temperatura",
    description:
      "Solución full-stack para monitoreo en tiempo real de temperaturas. Arquitectura escalable con frontend y backend integrados para control industrial.",
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript", "Real-time Data"],
    images: [temp1],
    github: "https://github.com/MichaelMerino11/Proyecto_integrador.git",
    category: "university",
  },
  {
    title: "Discover Brasil Blog",
    description:
      "Plataforma cultural interactiva para explorar la rica cultura brasileña. Diseño responsive con enfoque en experiencia de usuario y contenido multimedia.",
    technologies: ["HTML", "CSS", "JavaScript", "Cultural Design"],
    images: [br1],
    github: "https://github.com/MichaelMerino11/Discover_Brazil.git",
    category: "university",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos los Proyectos", icon: <FaLaptopCode /> },
    { id: "professional", label: "Profesionales", icon: <FaCode /> },
    { id: "personal", label: "Personales", icon: <FaCode /> },
    { id: "university", label: "Universitarios", icon: <FaCode /> },
  ];

  const filteredProjects = [
    ...professionalProjects,
    ...personalProjects,
    ...universityProjects,
  ].filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  //  const getProjectsByCategory = (category) => {
  //    return filteredProjects.filter((project) => project.category === category);
  //  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2>Portafolio de Proyectos</h2>
          <p>
            Una colección de soluciones digitales que demuestran mi expertise en
            desarrollo web y móvil
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${
                activeFilter === filter.id ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className={styles.filterIcon}>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Vista de Todos los Proyectos */}
        {activeFilter === "all" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={styles.projectsContainer}
          >
            {/* Proyectos Profesionales */}
            {professionalProjects.length > 0 && (
              <motion.section
                variants={itemVariants}
                className={styles.categorySection}
              >
                <div className={styles.categoryHeader}>
                  <div
                    className={`${styles.categoryIcon} ${styles.professional}`}
                  >
                    <FaCode />
                  </div>
                  <h3>Proyectos Profesionales</h3>
                  <div className={styles.categoryLine}></div>
                </div>
                <div className={styles.grid}>
                  {professionalProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Proyectos Personales */}
            {personalProjects.length > 0 && (
              <motion.section
                variants={itemVariants}
                className={styles.categorySection}
              >
                <div className={styles.categoryHeader}>
                  <div className={`${styles.categoryIcon} ${styles.personal}`}>
                    <FaLaptopCode />
                  </div>
                  <h3>Proyectos Personales</h3>
                  <div className={styles.categoryLine}></div>
                </div>
                <div className={styles.grid}>
                  {personalProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Proyectos Universitarios */}
            {universityProjects.length > 0 && (
              <motion.section
                variants={itemVariants}
                className={styles.categorySection}
              >
                <div className={styles.categoryHeader}>
                  <div
                    className={`${styles.categoryIcon} ${styles.university}`}
                  >
                    <FaCode />
                  </div>
                  <h3>Proyectos Universitarios</h3>
                  <div className={styles.categoryLine}></div>
                </div>
                <div className={styles.grid}>
                  {universityProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </motion.section>
            )}
          </motion.div>
        )}

        {/* Vista Filtrada */}
        {activeFilter !== "all" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.grid}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

// Componente de Tarjeta de Proyecto
const ProjectCard = ({ project}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className={`${styles.card} ${styles[project.category]}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className={styles.imageContainer}>
        <motion.img
          src={project.images[0]}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.overlayContent}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
        <div className={`${styles.categoryBadge} ${styles[project.category]}`}>
          {project.category === "professional" && "💼 Profesional"}
          {project.category === "personal" && "🚀 Personal"}
          {project.category === "university" && "🎓 Universitario"}
        </div>
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <FaGithub className={styles.icon} />
            Ver Código
            <FiArrowRight className={styles.arrow} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
