import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-3xl text-primary" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaNodeJs className="text-3xl text-secondary" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: <FaDatabase className="text-3xl text-accent" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FaTools className="text-3xl text-primary" />,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  const renderTechStack = (techStack) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-colors duration-300">
            <div className="icon-glow mb-2">
              <i className={`${tech.icon} text-3xl text-accent`}></i>
            </div>
            <span className="text-sm text-foreground/80">{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-slideInDown">
          <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-8 animate-fadeIn hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-glow hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden group-hover:bg-gray-700/70 transition-colors duration-300">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-progress relative"
                        style={{ 
                          width: `${skill.level}%`,
                          '--progress-width': `${skill.level}%`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 