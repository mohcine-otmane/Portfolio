import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
      <div className="relative mb-12 w-full flex flex-col items-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 w-full md:w-2/3 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg mb-2">Get in Touch</h2>
          <p className="mt-2 text-lg text-indigo-100 text-center max-w-2xl">Feel free to reach out to me for any inquiries or collaborations.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-8">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 hover:scale-105 transition-transform duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-100">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-indigo-400/20 border border-indigo-400/30 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-100">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-indigo-400/20 border border-indigo-400/30 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-100">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-indigo-400/20 border border-indigo-400/30 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl border border-indigo-400/30 p-10 flex flex-col justify-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 drop-shadow">Other Ways to Connect</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <span className="text-indigo-100">Email:</span>
              <a href="mailto:your.email@example.com" className="ml-2 text-indigo-300 hover:text-yellow-300 font-semibold transition-colors duration-200">your.email@example.com</a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-100">LinkedIn:</span>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-yellow-300 font-semibold transition-colors duration-200">linkedin.com/in/yourprofile</a>
            </div>
            <div className="flex items-center">
              <span className="text-indigo-100">GitHub:</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-300 hover:text-yellow-300 font-semibold transition-colors duration-200">github.com/yourusername</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 