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
              className="glass-card p-8 animate-fadeIn"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          '--progress-width': `${skill.level}%`
                        }}
                      ></div>
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