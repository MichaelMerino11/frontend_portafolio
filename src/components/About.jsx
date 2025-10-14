import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaUsers,
  FaServer,
  FaTools,
  FaRocket,
  FaBrain,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

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

const About = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: FaCode,
      description: "Desarrollo de interfaces modernas y responsivas",
      technologies: [
        "React",
        "Angular",
        "TypeScript",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      color: "#3B82F6",
    },
    {
      category: "Backend Development",
      icon: FaServer,
      description: "Arquitecturas escalables y APIs robustas",
      technologies: [
        "Java Spring Boot",
        "Node.js",
        "Python",
        "Express.js",
        "REST APIs",
      ],
      color: "#10B981",
    },
    {
      category: "Database Management",
      icon: FaDatabase,
      description: "Diseño y optimización de bases de datos",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "NoSQL"],
      color: "#8B5CF6",
    },
    {
      category: "Cloud & DevOps",
      icon: FaCloud,
      description: "Infraestructura cloud y despliegue continuo",
      technologies: ["AWS", "CI/CD", "Docker", "Git", "Vercel"],
      color: "#F59E0B",
    },
    {
      category: "Mobile Development",
      icon: FaMobileAlt,
      description: "Aplicaciones móviles nativas y cross-platform",
      technologies: ["React Native", "Flutter", "Ionic", "Expo"],
      color: "#EF4444",
    },
    {
      category: "Tools & Methodologies",
      icon: FaTools,
      description: "Metodologías ágiles y herramientas de desarrollo",
      technologies: ["Git", "Scrum", "JIRA", "Figma", "Postman"],
      color: "#6B7280",
    },
  ];

  const softSkills = [
    {
      icon: FaBrain,
      name: "Resolución de Problemas",
      description: "Análisis y solución efectiva de desafíos técnicos",
    },
    {
      icon: FaUsers,
      name: "Trabajo en Equipo",
      description: "Colaboración efectiva en entornos multidisciplinarios",
    },
    {
      icon: FaLightbulb,
      name: "Pensamiento Creativo",
      description: "Innovación en el desarrollo de soluciones",
    },
    {
      icon: FaHandshake,
      name: "Comunicación",
      description: "Comunicación clara con equipos y stakeholders",
    },
    {
      icon: FaRocket,
      name: "Adaptabilidad",
      description: "Rápida adaptación a nuevas tecnologías y entornos",
    },
    {
      icon: FaChartLine,
      name: "Aprendizaje Continuo",
      description: "Actualización constante en tendencias tecnológicas",
    },
  ];

  const techIcons = [
    { icon: "⚛️", name: "React" },
    { icon: "🅰️", name: "Angular" },
    { icon: "☕", name: "Java" },
    { icon: "🔗", name: "Node.js" },
    { icon: "🐍", name: "Python" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "☁️", name: "AWS" },
    { icon: "💙", name: "Flutter" },
    { icon: "⚡", name: "Ionic" },
  ];

  return (
    <motion.section
      id="about"
      className={styles.about}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Header Section */}
        <motion.div className={styles.header} variants={itemVariants}>
          <h2>Acerca de Mí</h2>
          <div className={styles.underline}></div>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className={styles.descriptionSection}
          variants={itemVariants}
        >
          <div className={styles.descriptionContent}>
            <p className={styles.description}>
              Soy un <strong>Desarrollador Full Stack</strong> con experiencia
              en la creación de
              <strong> aplicaciones web y móviles modernas</strong>. Me
              especializo en desarrollar
              <strong> soluciones escalables y eficientes</strong> que combinan
              un
              <strong> frontend intuitivo</strong> con un{" "}
              <strong>backend robusto</strong>. Mi pasión es transformar ideas
              complejas en productos digitales funcionales y elegantes.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div className={styles.techStackSection} variants={itemVariants}>
          <h3>Tecnologías Principales</h3>
          <div className={styles.techGrid}>
            {techIcons.map((tech) => (
              <motion.div
                key={tech.name}
                className={styles.techItem}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.techIcon}>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div className={styles.skillsSection} variants={itemVariants}>
          <h3>Habilidades Técnicas</h3>
          <div className={styles.skillsGrid}>
            {technicalSkills.map((skill) => (
              <motion.div
                key={skill.category}
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={styles.skillHeader}
                  style={{ borderLeftColor: skill.color }}
                >
                  <div className={styles.skillIcon}>
                    <skill.icon style={{ color: skill.color }} />
                  </div>
                  <h4>{skill.category}</h4>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.technologies}>
                  {skill.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className={styles.softSkillsSection}
          variants={itemVariants}
        >
          <h3>Habilidades Interpersonales</h3>
          <div className={styles.softSkillsGrid}>
            {softSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className={styles.softSkillCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.softSkillIcon}>
                  <skill.icon />
                </div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
