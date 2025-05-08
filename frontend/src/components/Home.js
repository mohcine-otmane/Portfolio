import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient circles - reduced complexity */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
            <span className="gradient-text">Welcome to My Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-slideInUp animation-delay-200">
            I'm a passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex justify-center gap-4 mb-12 animate-fadeIn animation-delay-400">
            <Link to="/projects" className="btn-primary hover-scale">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary hover-scale">
              Contact Me
            </Link>
          </div>
          <div className="flex justify-center gap-6 animate-fadeIn animation-delay-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 