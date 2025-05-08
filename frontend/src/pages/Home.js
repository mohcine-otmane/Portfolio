import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight, HiArrowNarrowRight } from 'react-icons/hi';
import { BsCodeSlash, BsLaptop, BsServer } from 'react-icons/bs';

const Home = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB"],
      link: "/projects",
      icon: <BsLaptop className="w-8 h-8 text-primary" />
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      link: "/projects",
      icon: <BsServer className="w-8 h-8 text-primary" />
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      description: "Leading development of enterprise-scale applications"
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "StartupX",
      description: "Built and maintained multiple web applications"
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "WebSolutions",
      description: "Started my journey in web development"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/yourusername" }
  ];

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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
        className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
        className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
        className="container mx-auto relative space-y-20"
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
                Hi, I'm <span className="text-primary">Your Name</span>
              </motion.h1>
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"
                variants={itemVariants}
              />
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed"
              variants={itemVariants}
            >
              I'm a full-stack developer passionate about creating beautiful and functional web applications.
              With expertise in modern web technologies and a keen eye for design, I build solutions that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                to="/projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-text font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    View Projects
                  <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-glass-border text-text overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    Contact Me
                  <HiArrowNarrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6 pt-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
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

        {/* Quick Skills Preview */}
        <motion.div 
          className="max-w-4xl mx-auto glass-card p-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker', 'GraphQL'].map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsCodeSlash className="w-6 h-6 text-primary mb-2" />
                <span className="text-lg font-medium text-text">{skill}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/skills" className="text-primary hover:text-secondary transition-colors duration-300 flex items-center justify-center gap-2">
              View all skills <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 