import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/400x300',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x300',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      image: 'https://via.placeholder.com/400x300',
      github: '#',
      live: '#',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-indigo-500/40"
            style={{ minHeight: 400 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl border-b border-indigo-400/20"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">
                {project.title}
              </h3>
              <p className="text-indigo-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-200 rounded-full border border-indigo-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-yellow-300 font-semibold transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-yellow-300 font-semibold transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 