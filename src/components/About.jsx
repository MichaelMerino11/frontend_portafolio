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

import reactIcon from "../assets/images/iconos/react3.png";
import angularIcon from "../assets/images/iconos/angular.png";
import javaIcon from "../assets/images/iconos/java2.png";
import nodeIcon from "../assets/images/iconos/node.png";
import pythonIcon from "../assets/images/iconos/python.png";
import postgresqlIcon from "../assets/images/iconos/postgresql.png";
import mongoIcon from "../assets/images/iconos/mongo3.png";
import awsIcon from "../assets/images/iconos/aws.png";
import flutterIcon from "../assets/images/iconos/flutter2.png";
import ionicIcon from "../assets/images/iconos/ionic2.png";

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
  const techLogos = [
    { id: 1, name: "React", image: reactIcon },
    { id: 2, name: "Angular", image: angularIcon },
    { id: 3, name: "Java", image: javaIcon },
    { id: 4, name: "Node.js", image: nodeIcon },
    { id: 5, name: "Python", image: pythonIcon },
    { id: 6, name: "PostgreSQL", image: postgresqlIcon },
    { id: 7, name: "MongoDB", image: mongoIcon },
    { id: 8, name: "AWS", image: awsIcon },
    { id: 9, name: "Flutter", image: flutterIcon },
    { id: 10, name: "Ionic", image: ionicIcon },
  ];

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
  /*
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
*/
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
          <TechCarousel logos={techLogos} />
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
          <div className={styles.underline}></div>

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

// Componente del Carrusel
const TechCarousel = ({ logos }) => {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {/* Máscara izquierda */}
        <div className={styles.maskLeft}></div>

        {/* Máscara derecha */}
        <div className={styles.maskRight}></div>

        <motion.div
          className={styles.carouselTrack}
          drag="x"
          dragConstraints={{
            left: -(logos.length * 140 + logos.length * 32),
            right: 0,
          }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={!isDragging ? "animate" : "idle"}
          variants={{
            animate: {
              x: [0, -(logos.length * 140 + logos.length * 32)],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            },
            idle: {},
          }}
        >
          {/* Primera copia */}
          {logos.map((tech, index) => (
            <motion.div
              key={`first-${tech.id}-${index}`}
              className={styles.carouselItem}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                className={styles.techLogo}
              />
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}

          {/* Segunda copia (para efecto infinito perfecto) */}
          {logos.map((tech, index) => (
            <motion.div
              key={`second-${tech.id}-${index}`}
              className={styles.carouselItem}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                className={styles.techLogo}
              />
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicador de drag */}
      <div className={styles.dragHint}>
        <span>← Desliza para explorar →</span>
      </div>
    </div>
  );
};

export default About;
