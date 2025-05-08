/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a192f',
        text: '#8892b0',
        'text-secondary': '#ccd6f6',
        highlight: '#64ffda',
        primary: '#64ffda',
        secondary: '#8892b0',
        accent: '#64ffda',
        'glass-bg': 'rgba(10, 25, 47, 0.7)',
        'glass-border': 'rgba(100, 255, 218, 0.1)',
        card: 'rgba(10, 25, 47, 0.9)',
        border: '#8892b0',
        muted: '#1f2937',
        ring: '#64ffda',
        input: '#8892b0',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
} 