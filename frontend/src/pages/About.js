import React from 'react';
import { FaCode, FaServer, FaGraduationCap, FaRocket, FaLaptopCode, FaDatabase, FaTools, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Development Philosophy',
      description: 'I believe in writing clean, maintainable code that solves real-world problems. My approach combines technical excellence with practical solutions, always keeping the end user in mind.',
      color: 'text-blue-400',
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Technical Expertise',
      description: 'With expertise in both frontend and backend development, I create seamless, full-stack solutions. I specialize in modern JavaScript frameworks, cloud architecture, and scalable applications.',
      color: 'text-purple-400',
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: 'Background',
      description: "My journey in software development began with a passion for creating impactful solutions. Through continuous learning and hands-on experience, I have developed a strong foundation in modern web technologies.",
      color: 'text-green-400',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Current Focus',
      description: "I'm currently focused on building scalable web applications and exploring emerging technologies. My goal is to create innovative solutions that make a difference.",
      color: 'text-yellow-400',
    },
  ];

  const skills = [
    {
      category: 'Frontend Development',
      icon: <FaLaptopCode className="w-6 h-6" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Backend Development',
      icon: <FaServer className="w-6 h-6" />,
      items: ['Node.js', 'Express', 'Python', 'Django'],
    },
    {
      category: 'Database & Cloud',
      icon: <FaDatabase className="w-6 h-6" />,
      items: ['MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      category: 'Tools & Practices',
      icon: <FaTools className="w-6 h-6" />,
      items: ['Git', 'CI/CD', 'Agile', 'Testing'],
    },
  ];

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slideInDown">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A passionate full-stack developer dedicated to creating innovative solutions and delivering exceptional user experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="glass-card p-8 animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${section.color} p-3 rounded-lg bg-background/50`}>
                    {section.icon}
        </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
                    <p className="text-gray-300">{section.description}</p>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Skills & Additional Info */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="glass-card p-8 animate-fadeIn delay-200">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{skillGroup.icon}</div>
                      <h4 className="text-lg font-medium text-white">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-background/50 text-gray-300 rounded-full border border-glass-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Statement */}
            <div className="glass-card p-8 animate-fadeIn delay-300">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 p-3 rounded-lg bg-background/50">
                  <FaLightbulb className="w-6 h-6" />
            </div>
            <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Statement</h3>
                  <p className="text-gray-300">
                    I'm driven by the challenge of solving complex problems and creating elegant solutions. 
                    My approach combines technical expertise with creative thinking, always focusing on 
                    delivering value through clean, efficient code and intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 