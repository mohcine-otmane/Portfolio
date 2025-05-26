import React from 'react';
import { FaCode, FaServer, FaGraduationCap, FaRocket } from 'react-icons/fa';
import profile from './assets/images/profile.png';

const About = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative icon-glow">
            <img src={profile} alt="Profile" className="w-40 h-40 rounded-full shadow-xl border-4 border-white object-cover bg-white/80" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white tracking-wide">MOHCINE OTMANE</h1>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16 animate-slideInDown">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Philosophy Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-glow">
                <FaCode className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">My Philosophy</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I believe in creating software that not only solves problems but also delights users. 
              My approach combines technical excellence with user-centered design, ensuring that 
              every project I work on is both powerful and accessible.
            </p>
          </div>

          {/* Technical Expertise Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-glow">
                <FaServer className="text-3xl text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold">Technical Expertise</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              With expertise in both frontend and backend development, I create seamless, 
              scalable applications that deliver exceptional user experiences. My focus is on 
              writing clean, maintainable code and implementing best practices.
            </p>
          </div>

          {/* Education Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-glow">
                <FaGraduationCap className="text-3xl text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I hold a degree in Computer Science and continuously expand my knowledge through 
              self-learning and practical experience. I stay current with the latest technologies 
              and industry trends.
            </p>
          </div>

          {/* Goals Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-glow">
                <FaRocket className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Goals</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My goal is to contribute to innovative projects that make a positive impact. 
              I'm passionate about creating solutions that help businesses grow and improve 
              people's lives through technology.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto animate-fadeIn animation-delay-600">
          <p className="text-text-secondary italic">
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 