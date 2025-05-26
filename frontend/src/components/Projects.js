import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaFilter, FaStar, FaEye, FaHeart, FaShare } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [likedProjects, setLikedProjects] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and interactive elements.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      image: '/portfolio.png',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com',
      category: 'frontend',
      icon: <FaCode className="text-3xl" />,
      color: 'from-blue-500 to-cyan-500',
      stats: {
        stars: 128,
        views: 1024,
        likes: 89
      }
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/ecommerce.png',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://yourecommerce.com',
      category: 'fullstack',
      icon: <FaServer className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
      stats: {
        stars: 256,
        views: 2048,
        likes: 156
      }
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: '/taskmanager.png',
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://yourtaskmanager.com',
      category: 'fullstack',
      icon: <FaDatabase className="text-3xl" />,
      color: 'from-green-500 to-emerald-500',
      stats: {
        stars: 512,
        views: 4096,
        likes: 234
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4 animate-slideInDown">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeIn">
            Explore my latest work and personal projects showcasing my skills in web development and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-fadeIn">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                ${activeFilter === filter.id 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105' 
                  : 'bg-card/50 text-gray-400 hover:bg-card/80 hover:text-white hover:scale-105'
                }`}
            >
              <FaFilter className="text-sm" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              id={`project-${project.id}`}
              className={`project-card group relative animate-fadeIn ${isVisible[`project-${project.id}`] ? 'animate-slideUp' : ''}`}
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="glass-card h-full overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${project.color}`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-accent border border-accent/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {project.category}
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-accent border border-accent/20 flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium text-accent border border-accent/20 flex items-center gap-1">
                      <FaEye className="text-blue-400" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(project.id)}
                    className="absolute bottom-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full text-accent border border-accent/20 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
                  >
                    <FaHeart className={`text-xl ${likedProjects[project.id] ? 'text-red-500 animate-heartBeat' : ''}`} />
                  </button>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`icon-glow text-accent transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-card/50 rounded-full text-accent border border-accent/20 hover:bg-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group/link"
                    >
                      <div className="icon-glow group-hover/link:animate-pulse">
                        <FaGithub className="text-xl" />
                      </div>
                      <span>View Code</span>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group/link"
                    >
                      <div className="icon-glow group-hover/link:animate-pulse">
                        <FaExternalLinkAlt className="text-xl" />
                      </div>
                      <span>Live Demo</span>
                    </a>
                    <button 
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group/link"
                      onClick={() => {
                        navigator.share({
                          title: project.title,
                          text: project.description,
                          url: project.live
                        });
                      }}
                    >
                      <div className="icon-glow group-hover/link:animate-pulse">
                        <FaShare className="text-xl" />
                      </div>
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${project.color}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 