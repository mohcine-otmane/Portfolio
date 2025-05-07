import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto relative">
        <div className="glass-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight animate-fade-in">
                Welcome to My Portfolio
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left animate-slide-in"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed animate-fade-in animation-delay-200">
              I'm a full-stack developer passionate about creating beautiful and functional web applications.
              Explore my work and let's connect to discuss how we can work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <a
                href="#projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-text font-semibold overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    View Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-glass-border text-text overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                    Contact Me
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v16m0-16l8 8-8 8" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 