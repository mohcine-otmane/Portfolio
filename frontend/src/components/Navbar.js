import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MdMenu,
  MdClose,
  MdEmail,
  MdWhatsapp
} from 'react-icons/md';
import { 
  RiHome4Fill,
  RiUser3Fill,
  RiCodeSSlashFill,
  RiMailFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill
} from 'react-icons/ri';
import logo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightIntensity, setLightIntensity] = useState(1);
  const navRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate light intensity based on cursor distance from navbar
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(e.clientX - rect.left, 2) + 
          Math.pow(e.clientY - rect.top, 2)
        );
        const maxDistance = Math.max(window.innerWidth, window.innerHeight);
        const intensity = Math.max(0, 1 - (distance / maxDistance));
        setLightIntensity(intensity);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateLightEffect = (element) => {
    if (!element) return { x: 0, y: 0, intensity: 0 };
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate direction from element to cursor
    const deltaX = (mousePosition.x - centerX) / 20;
    const deltaY = (mousePosition.y - centerY) / 20;
    
    // Calculate distance from cursor to element
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    );
    
    // Calculate light intensity based on distance
    const elementIntensity = Math.max(0, 1 - (distance / 500)) * lightIntensity;
    
    // Calculate shadow position (opposite to light source)
    const shadowX = -deltaX * 2; // Increased shadow offset
    const shadowY = -deltaY * 2;
    
    return { 
      x: deltaX, 
      y: deltaY, 
      shadowX,
      shadowY,
      intensity: elementIntensity,
      distance: distance
    };
  };

  const getLightStyle = (element) => {
    const { x, y, shadowX, shadowY, intensity, distance } = calculateLightEffect(element);
    
    return {
      transform: `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`,
      boxShadow: `
        ${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.4),
        ${shadowX/2}px ${shadowY/2}px 15px rgba(0,0,0,0.3),
        ${x}px ${y}px 10px rgba(255,255,255,${intensity * 0.15}),
        0 0 ${20 * intensity}px rgba(255,255,255,${intensity * 0.05})
      `,
      background: `linear-gradient(
        ${Math.atan2(y, x) * (180/Math.PI)}deg,
        rgba(255,255,255,${intensity * 0.15}) 0%,
        rgba(0,0,0,${0.1 + (1-intensity) * 0.2}) 100%
      )`,
      filter: `brightness(${1 + intensity * 0.3}) contrast(${1 + intensity * 0.1})`
    };
  };

  const navItems = [
    {
      path: '/',
      icon: <RiHome4Fill className="w-6 h-6" />,
      label: 'Home',
      color: 'text-[#FF6B6B]',
      hoverColor: 'group-hover:text-[#FF8787]',
      bgColor: 'bg-[#FF6B6B]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B6B]/20',
      glowColor: 'group-hover:shadow-[#FF6B6B]/20',
      animation: 'group-hover:animate-bounce'
    },
    {
      path: '/about',
      icon: <RiUser3Fill className="w-6 h-6" />,
      label: 'About',
      color: 'text-[#4ECDC4]',
      hoverColor: 'group-hover:text-[#6ED7D0]',
      bgColor: 'bg-[#4ECDC4]/10',
      hoverBgColor: 'group-hover:bg-[#4ECDC4]/20',
      glowColor: 'group-hover:shadow-[#4ECDC4]/20',
      animation: 'group-hover:animate-pulse'
    },
    {
      path: '/projects',
      icon: <RiCodeSSlashFill className="w-6 h-6" />,
      label: 'Projects',
      color: 'text-[#FFD93D]',
      hoverColor: 'group-hover:text-[#FFE566]',
      bgColor: 'bg-[#FFD93D]/10',
      hoverBgColor: 'group-hover:bg-[#FFD93D]/20',
      glowColor: 'group-hover:shadow-[#FFD93D]/20',
      animation: 'group-hover:animate-spin-slow'
    },
    {
      path: '/contact',
      icon: <RiMailFill className="w-6 h-6" />,
      label: 'Contact',
      color: 'text-[#95E1D3]',
      hoverColor: 'group-hover:text-[#A7E7DB]',
      bgColor: 'bg-[#95E1D3]/10',
      hoverBgColor: 'group-hover:bg-[#95E1D3]/20',
      glowColor: 'group-hover:shadow-[#95E1D3]/20',
      animation: 'group-hover:animate-wiggle'
    }
  ];

  const socialLinks = [
    {
      icon: <RiGithubFill className="w-5 h-5" />,
      href: 'https://github.com/mohcine-otmane',
      color: 'text-[#181717]',
      hoverColor: 'group-hover:text-[#2D2D2D]',
      bgColor: 'bg-[#181717]/10',
      hoverBgColor: 'group-hover:bg-[#181717]/20',
      glowColor: 'group-hover:shadow-[#181717]/20',
      animation: 'group-hover:animate-bounce'
    },
    {
      icon: <RiLinkedinFill className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/mohcine-otmane-024b2582/',
      color: 'text-[#0A66C2]',
      hoverColor: 'group-hover:text-[#0B7DE3]',
      bgColor: 'bg-[#0A66C2]/10',
      hoverBgColor: 'group-hover:bg-[#0A66C2]/20',
      glowColor: 'group-hover:shadow-[#0A66C2]/20',
      animation: 'group-hover:animate-pulse'
    },
    {
      icon: <MdEmail className="w-5 h-5" />,
      href: 'mailto:mohcine.otmane@ensem.ac.ma',
      color: 'text-[#EA4335]',
      hoverColor: 'group-hover:text-[#F5655C]',
      bgColor: 'bg-[#EA4335]/10',
      hoverBgColor: 'group-hover:bg-[#EA4335]/20',
      glowColor: 'group-hover:shadow-[#EA4335]/20',
      animation: 'group-hover:animate-pulse'
    },
    {
      icon: <MdWhatsapp className="w-5 h-5" />,
      href: 'https://wa.me/212670728010',
      color: 'text-[#25D366]',
      hoverColor: 'group-hover:text-[#28E56C]',
      bgColor: 'bg-[#25D366]/10',
      hoverBgColor: 'group-hover:bg-[#25D366]/20',
      glowColor: 'group-hover:shadow-[#25D366]/20',
      animation: 'group-hover:animate-bounce'
    }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[100] p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
      >
        {isOpen ? (
          <MdClose className="w-6 h-6 text-white transform hover:rotate-90 transition-all duration-300" />
        ) : (
          <MdMenu className="w-6 h-6 text-white transform hover:rotate-90 transition-all duration-300" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 h-full w-20 lg:w-24 bg-white/5 backdrop-blur-lg border-r border-white/10 transform transition-all duration-500 ease-in-out lg:translate-x-0 z-[95] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center py-8 h-full">
          <div className="mb-12">
            <Link 
              to="/" 
              className="logo flex items-center justify-center group" 
              onClick={() => {
                setIsOpen(false);
                setActiveItem('/');
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#61DAFB]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img src={logo} alt="Logo" className="w-12 h-12 object-contain bg-white rounded-full shadow-lg p-1 border-2 border-gray-200 transition-transform duration-700 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(33,150,243,0.4)] group-hover:rotate-360" />
              </div>
            </Link>
          </div>
          
          {/* Navigation Items */}
          <div className="flex flex-col space-y-8 w-full px-2">
            {navItems.map((item, index) => (
            <Link
                key={index}
                to={item.path}
                className={`group relative flex items-center justify-center ${activeItem === item.path ? 'scale-110' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveItem(item.path);
                }}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
            >
                <div 
                  className={`p-3 rounded-xl ${item.bgColor} ${item.hoverBgColor} transition-all duration-300 ${item.glowColor} group-hover:shadow-lg relative overflow-hidden`}
                  style={getLightStyle(this)}
                >
                  <div className={`${item.color} ${item.hoverColor} transform group-hover:scale-110 transition-all duration-300 ${item.animation}`}>
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-full"></div>
              </div>
                <span className={`absolute left-full ml-2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform group-hover:translate-x-1 ${hoveredItem === item.path ? 'animate-fadeIn' : ''}`}>
                  {item.label}
              </span>
            </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-auto flex flex-col space-y-4 w-full px-2">
            <div className="relative w-16 h-16 mx-auto group">
              {/* Outer rotating circle */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-primary/50 transition-all duration-500 group-hover:animate-spin-slow"></div>
              
              {/* Inner pulsing circle */}
              <div className="absolute inset-2 rounded-full border border-white/10 group-hover:border-secondary/30 transition-all duration-500 animate-pulse"></div>
              
              {/* Gradient background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Center dot */}
              <div className="absolute inset-[45%] rounded-full bg-white/20 group-hover:bg-primary/30 transition-all duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                {socialLinks.map((item, index) => {
                  const angle = (index * 90) % 360; // 90 degrees between each icon
                  const radius = 24; // Increased radius for better spacing
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social absolute transform transition-all duration-500"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={() => setHoveredItem(`social-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div 
                        className={`p-2 rounded-xl ${item.bgColor} ${item.hoverBgColor} transition-all duration-300 ${item.glowColor} group-hover/social:shadow-lg relative overflow-hidden group-hover/social:scale-110`}
                        style={getLightStyle(this)}
                      >
                        <div className={`${item.color} ${item.hoverColor} transform transition-all duration-300 ${item.animation}`}>
                          {item.icon}
                        </div>
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 transform group-hover/social:translate-x-full"></div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-sm"></div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 