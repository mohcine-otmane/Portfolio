import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJava, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiGraphql, SiCplusplus, SiCmake, SiSpringboot, SiHibernate, SiMysql } from 'react-icons/si';
import { HiArrowRight, HiArrowNarrowRight } from 'react-icons/hi';
import { BsLaptop, BsServer } from 'react-icons/bs';

// Custom SFML Icon Component
const SFMLIcon = () => (
  <svg 
    className="w-6 h-6" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M4 4H20V20H4V4Z" 
      fill="#FF6B6B"
    />
    <path 
      d="M7 7H17V17H7V7Z" 
      fill="white"
    />
    <path 
      d="M9 9H15V15H9V9Z" 
      fill="#FF6B6B"
    />
    <path 
      d="M11 11H13V13H11V11Z" 
      fill="white"
    />
  </svg>
);

const Home = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [lastHoveredTech, setLastHoveredTech] = useState(null);
  const techStack = [
    { name: "PHP", icon: <FaPhp className="w-6 h-6 text-[#777BB4]" /> },
    { name: "Python", icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="w-6 h-6 text-[#007396]" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
    { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-[#00599C]" /> },
    { name: "SFML", icon: <SFMLIcon /> },
    { name: "CMake", icon: <SiCmake className="w-6 h-6 text-[#064F8C]" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
    { name: "Hibernate", icon: <SiHibernate className="w-6 h-6 text-[#BCAE79]" /> },
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-[#F05032]" /> },
    { name: "Linux", icon: <FaDocker className="w-6 h-6 text-[#2496ED]" /> },
    { name: "Shell", icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> }
  ];

  const defaultTech = techStack.find(t => t.name === 'Git');

  const featuredProjects = [
    {
      title: "SFML",
      description: "Contribution au développement de la bibliothèque SFML, amélioration des performances et correction de bugs",
      tech: ["C++", "SFML", "CMake"],
      link: "https://github.com/SFML/SFML",
      icon: <SFMLIcon />
    },
    {
      title: "OBS Studio",
      description: "Contribution au développement d'OBS Studio, amélioration des fonctionnalités de streaming",
      tech: ["C++", "Qt", "FFmpeg"],
      link: "https://github.com/obsproject/obs-studio",
      icon: <BsLaptop className="w-8 h-8 text-primary" />
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Développeur FullStack",
      company: "Freelance",
      description: "Développement d'applications web et mobiles avec PHP, Python, Java et Spring Boot"
    },
    {
      year: "2022",
      title: "Ingénieur Développement",
      company: "INPT",
      description: "Développement d'applications de gestion et de systèmes d'information"
    },
    {
      year: "2021",
      title: "Développeur Backend",
      company: "ENSEM",
      description: "Développement d'APIs RESTful et de microservices avec Spring Boot et .NET Core"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/mohcine-otmane" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohcine-otmane-024b2582/" },
    { name: "Email", icon: <HiArrowNarrowRight />, link: "mailto:mohcine.otmane@ensem.ac.ma" },
    { name: "Phone", icon: <HiArrowRight />, link: "tel:+212670728010" }
  ];

  // Tech stack style mapping for consistent icon backgrounds and effects
  const techStackStyles = {
    PHP:    { bgColor: 'bg-[#777BB4]/10', hoverBgColor: 'group-hover:bg-[#777BB4]/20', glowColor: 'group-hover:shadow-[#777BB4]/20', color: 'text-[#777BB4]', animation: 'group-hover:animate-bounce' },
    Python: { bgColor: 'bg-[#3776AB]/10', hoverBgColor: 'group-hover:bg-[#3776AB]/20', glowColor: 'group-hover:shadow-[#3776AB]/20', color: 'text-[#3776AB]', animation: 'group-hover:animate-pulse' },
    Java:   { bgColor: 'bg-[#007396]/10', hoverBgColor: 'group-hover:bg-[#007396]/20', glowColor: 'group-hover:shadow-[#007396]/20', color: 'text-[#007396]', animation: 'group-hover:animate-spin-slow' },
    'Spring Boot': { bgColor: 'bg-[#6DB33F]/10', hoverBgColor: 'group-hover:bg-[#6DB33F]/20', glowColor: 'group-hover:shadow-[#6DB33F]/20', color: 'text-[#6DB33F]', animation: 'group-hover:animate-pulse' },
    'C++':   { bgColor: 'bg-[#00599C]/10', hoverBgColor: 'group-hover:bg-[#00599C]/20', glowColor: 'group-hover:shadow-[#00599C]/20', color: 'text-[#00599C]', animation: 'group-hover:animate-bounce' },
    SFML:   { bgColor: 'bg-[#FF6B6B]/10', hoverBgColor: 'group-hover:bg-[#FF6B6B]/20', glowColor: 'group-hover:shadow-[#FF6B6B]/20', color: 'text-[#FF6B6B]', animation: 'group-hover:animate-pulse' },
    CMake:  { bgColor: 'bg-[#064F8C]/10', hoverBgColor: 'group-hover:bg-[#064F8C]/20', glowColor: 'group-hover:shadow-[#064F8C]/20', color: 'text-[#064F8C]', animation: 'group-hover:animate-spin-slow' },
    MySQL:  { bgColor: 'bg-[#4479A1]/10', hoverBgColor: 'group-hover:bg-[#4479A1]/20', glowColor: 'group-hover:shadow-[#4479A1]/20', color: 'text-[#4479A1]', animation: 'group-hover:animate-bounce' },
    Hibernate: { bgColor: 'bg-[#BCAE79]/10', hoverBgColor: 'group-hover:bg-[#BCAE79]/20', glowColor: 'group-hover:shadow-[#BCAE79]/20', color: 'text-[#BCAE79]', animation: 'group-hover:animate-pulse' },
    Git:    { bgColor: 'bg-[#F05032]/10', hoverBgColor: 'group-hover:bg-[#F05032]/20', glowColor: 'group-hover:shadow-[#F05032]/20', color: 'text-[#F05032]', animation: 'group-hover:animate-bounce' },
    Linux:  { bgColor: 'bg-[#2496ED]/10', hoverBgColor: 'group-hover:bg-[#2496ED]/20', glowColor: 'group-hover:shadow-[#2496ED]/20', color: 'text-[#2496ED]', animation: 'group-hover:animate-pulse' },
    Shell:  { bgColor: 'bg-[#339933]/10', hoverBgColor: 'group-hover:bg-[#339933]/20', glowColor: 'group-hover:shadow-[#339933]/20', color: 'text-[#339933]', animation: 'group-hover:animate-spin-slow' },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-main text-main">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div 
        className="container mx-auto relative space-y-20 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500"
          variants={itemVariants}
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight"
                variants={itemVariants}
              >
                Mohcine Otmane
              </motion.h1>
              <div className="text-lg text-primary font-semibold">Développeur FullStack | Mathématiques Appliquées | Ingénierie Télécom</div>
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
                variants={itemVariants}
              />
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl text-main mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Développeur FullStack expérimenté en PHP, Python, Java, Spring Boot, .NET Core et C/C++.<br/>
              Solide formation en mathématiques appliquées et ingénierie des télécommunications. Passionné par l'open source, Linux et le streaming Shell. Contributeur à des projets open-source comme SFML, OBS Studio et VLC.
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className="glass-card p-6 transform hover:scale-[1.02] transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                </div>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <Link to={project.link} className="text-primary hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  Learn more <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto glass-card p-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Experience</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <span className="text-primary font-semibold">{item.year}</span>
                  <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                  <p className="text-text-secondary">{item.company}</p>
            </div>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div 
          className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 gradient-text text-center">Tech Stack</h2>
          <div className="relative w-96 h-96 mx-auto group">
            {/* Animated icons circle */}
            <div
              className="absolute inset-0 icons-circle animate-spin-very-slow"
              style={{ animationPlayState: isIconHovered ? 'paused' : 'running' }}
            >
              {techStack.map((tech, index) => {
                const total = techStack.length;
                const angle = (index / total) * 2 * Math.PI;
                const angleDeg = (index / total) * 360;
                const radius = 172;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)` ,
                      top: `calc(50% + ${y}px)` ,
                      transform: `translate(-50%, -50%) rotate(${angleDeg}deg)`
                    }}
                    onMouseEnter={() => { setIsIconHovered(true); setHoveredTech(tech); setLastHoveredTech(tech); }}
                    onMouseLeave={() => { setIsIconHovered(false); setHoveredTech(null); }}
                  >
                    <div className={`p-4 rounded-2xl shadow-lg transition-all duration-300 relative overflow-visible flex items-center justify-center 
                      ${techStackStyles[tech.name]?.bgColor || 'bg-white/10'} 
                      ${techStackStyles[tech.name]?.hoverBgColor?.replace('group-hover', 'hover') || ''} 
                      ${techStackStyles[tech.name]?.glowColor?.replace('group-hover', 'hover') || ''} 
                      hover:scale-110 
                      ${techStackStyles[tech.name]?.animation?.replace('group-hover', 'hover') || ''}`}
                    >
                      <div className={`w-5 h-5 flex items-center justify-center ${techStackStyles[tech.name]?.color || ''}`}>
                        {tech.icon}
                      </div>
                    </div>
                    {/* Tech name */}
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Center dot */}
            <div className="absolute left-1/2 top-1/2 flex items-center justify-center" style={{transform:'translate(-50%,-50%)', zIndex: 10}}>
              <div className={`flex flex-col items-center transition-all duration-500 ease-in-out`}>
                <div className={`w-24 h-24 flex items-center justify-center rounded-2xl shadow-xl bg-white/10 transition-all duration-500 ease-in-out relative ${techStackStyles[(hoveredTech || lastHoveredTech || defaultTech).name]?.bgColor || ''}`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl pointer-events-none blur-xl opacity-70 transition-all duration-500 ease-in-out 
                    ${techStackStyles[(hoveredTech || lastHoveredTech || defaultTech).name]?.glowColor?.replace('group-hover', '') || 'shadow-[0_0_40px_10px_rgba(240,80,50,0.4)]'}`} />
                  <span className={`w-16 h-16 flex items-center justify-center relative z-10 transition-all duration-500 ease-in-out ${techStackStyles[(hoveredTech || lastHoveredTech || defaultTech).name]?.color || ''}`}>{(hoveredTech || lastHoveredTech || defaultTech).icon}</span>
                </div>
                <div className="mt-2 text-lg font-bold text-center text-main drop-shadow-lg transition-all duration-500 ease-in-out">
                  {(hoveredTech || lastHoveredTech || defaultTech).name}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 