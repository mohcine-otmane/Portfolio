import React from 'react';
import { FaCode, FaServer, FaGraduationCap, FaRocket } from 'react-icons/fa';
import profile from './assets/images/profile.png';

const About = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={profile} alt="Profile" className="w-40 h-40 rounded-full shadow-xl border-4 border-white object-cover bg-white/80" />
          <h1 className="mt-4 text-3xl font-bold text-white tracking-wide">MOHCINE OTMANE</h1>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16 animate-slideInDown">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Philosophy Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-200">
            <div className="flex items-center gap-4 mb-6">
              <FaCode className="text-3xl text-primary" />
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
              <FaServer className="text-3xl text-secondary" />
              <h3 className="text-2xl font-semibold">Technical Expertise</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              With expertise in modern web technologies, I specialize in building scalable 
              applications using React, Node.js, and cloud services. I'm passionate about 
              staying current with emerging technologies and best practices.
            </p>
          </div>

          {/* Background Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-400">
            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap className="text-3xl text-accent" />
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My journey in software development began with a strong foundation in computer science 
              and has evolved through hands-on experience in various industries. I've worked on 
              projects ranging from enterprise applications to innovative startups.
            </p>
          </div>

          {/* Current Focus Section */}
          <div className="glass-card p-8 animate-fadeIn animation-delay-500">
            <div className="flex items-center gap-4 mb-6">
              <FaRocket className="text-3xl text-primary" />
              <h3 className="text-2xl font-semibold">Current Focus</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Currently, I'm focused on building modern web applications with a strong emphasis 
              on performance, accessibility, and user experience. I'm particularly interested 
              in exploring the intersection of AI and web development.
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