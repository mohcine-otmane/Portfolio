import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-accent mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-glass-border text-text focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-accent mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-glass-border text-text focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-accent mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-background/50 border border-glass-border text-text focus:outline-none focus:border-accent transition-colors"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-text font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 