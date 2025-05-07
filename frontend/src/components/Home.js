import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="glass-card p-12 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight">
                Welcome to My Portfolio
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              I'm a full-stack developer passionate about creating beautiful and functional web applications.
              Explore my work and let's connect to discuss how we can work together.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-text font-semibold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 rounded-lg border-2 border-glass-border text-text hover:bg-glass-bg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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