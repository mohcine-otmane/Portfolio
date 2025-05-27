import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'otmanemohcine30@gmail.com',
      link: 'mailto:otmanemohcine30@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      content: '+212607720930',
      link: 'tel:+212607720930',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      content: 'Casablanca, Morocco',
      link: 'https://maps.google.com/?q=Casablanca,+Morocco',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
    },
  ];

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slideInDown">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out through the form below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fadeIn delay-200">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex items-center gap-4 hover-scale transition-all duration-300"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/50 rounded-full text-gray-300 hover:text-primary hover:bg-background/70 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  title="Google Maps - Casablanca, Morocco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.3177328395!2d-7.6824492!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed740c4d2!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1647043087964!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/30 backdrop-blur-xl border border-gray-600/20 rounded-xl p-8 animate-fadeIn delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-gray-500 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-gray-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-gray-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 bg-background/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-gray-500 transition-colors duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 