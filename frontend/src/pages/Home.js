import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB"],
      link: "/projects"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Firebase", "Material-UI"],
      link: "/projects"
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
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", link: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", link: "https://twitter.com/yourusername" }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto relative space-y-20">
        {/* Hero Section */}
        <div className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight animate-fade-in">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left animate-slide-in"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed animate-fade-in animation-delay-200">
              I'm a full-stack developer passionate about creating beautiful and functional web applications.
              With expertise in modern web technologies and a keen eye for design, I build solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Link
                to="/projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-text font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    View Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-glass-border text-text overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    Contact Me
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v16m0-16l8 8-8 8" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="glass-card p-6 transform hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={project.link} className="text-primary hover:text-secondary transition-colors duration-300">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto glass-card p-8">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Experience</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <span className="text-primary font-semibold">{item.year}</span>
                  <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                  <p className="text-text-secondary">{item.company}</p>
                </div>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Skills Preview */}
        <div className="max-w-4xl mx-auto glass-card p-8">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 'Docker', 'GraphQL'].map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
                <span className="text-lg font-medium text-text">{skill}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/skills" className="text-primary hover:text-secondary transition-colors duration-300">
              View all skills →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 