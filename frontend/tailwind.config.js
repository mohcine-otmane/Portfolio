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
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideInLeft': 'slideInLeft 0.5s ease-out forwards',
        'slideInRight': 'slideInRight 0.5s ease-out forwards',
        'slideInUp': 'slideInUp 0.5s ease-out forwards',
        'slideInDown': 'slideInDown 0.5s ease-out forwards',
        'progress': 'progress 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
} 