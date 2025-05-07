import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 hover-scale">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Who I Am</h3>
            <p className="text-text-secondary leading-relaxed">
              I am a passionate full-stack developer with a keen eye for creating elegant solutions 
              to complex problems. With expertise in modern web technologies and a strong foundation 
              in software engineering principles, I strive to build applications that are both 
              performant and user-friendly.
            </p>
          </div>
          <div className="glass-card p-8 hover-scale">
            <h3 className="text-2xl font-semibold mb-4 text-accent">My Journey</h3>
            <p className="text-text-secondary leading-relaxed">
              My journey in software development began with a curiosity about how things work on the web. 
              This curiosity evolved into a professional career where I've had the opportunity to work 
              on diverse projects, from e-commerce platforms to real-time applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 