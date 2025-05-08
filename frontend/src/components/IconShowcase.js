import React, { useState, useEffect, useRef } from 'react';
// Font Awesome icons
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
// Material Design icons
import { MdEmail, MdPhone, MdLocationOn, MdCode, MdBrush, MdPalette } from 'react-icons/md';
// Bootstrap icons
import { BsGithub, BsLinkedin, BsTwitter, BsHeartFill, BsStarFill, BsLightningFill } from 'react-icons/bs';
// Ionicons
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoFirebase } from 'react-icons/io5';
// Ant Design icons
import { AiFillGithub, AiFillLinkedin, AiFillTwitter, AiFillApi } from 'react-icons/ai';
// Simple Icons
import { SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const IconShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightIntensity, setLightIntensity] = useState(1);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (showcaseRef.current) {
        const rect = showcaseRef.current.getBoundingClientRect();
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
    
    const deltaX = (mousePosition.x - centerX) / 20;
    const deltaY = (mousePosition.y - centerY) / 20;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    );
    
    const elementIntensity = Math.max(0, 1 - (distance / 500)) * lightIntensity;
    
    const shadowX = -deltaX * 2;
    const shadowY = -deltaY * 2;
    
    return { 
      x: deltaX, 
      y: deltaY, 
      shadowX,
      shadowY,
      intensity: elementIntensity,
      distance
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

  const iconSets = [
    {
      title: "Frontend",
      icons: [
        { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-[#61DAFB]", glow: "group-hover:shadow-[#61DAFB]/20" },
        { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-white", glow: "group-hover:shadow-white/20" },
        { icon: <IoLogoJavascript className="w-8 h-8" />, name: "JavaScript", color: "text-[#F7DF1E]", glow: "group-hover:shadow-[#F7DF1E]/20" },
        { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-[#3178C6]", glow: "group-hover:shadow-[#3178C6]/20" },
        { icon: <IoLogoHtml5 className="w-8 h-8" />, name: "HTML5", color: "text-[#E34F26]", glow: "group-hover:shadow-[#E34F26]/20" },
        { icon: <IoLogoCss3 className="w-8 h-8" />, name: "CSS3", color: "text-[#1572B6]", glow: "group-hover:shadow-[#1572B6]/20" },
        { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind", color: "text-[#06B6D4]", glow: "group-hover:shadow-[#06B6D4]/20" },
      ]
    },
    {
      title: "Backend",
      icons: [
        { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-[#339933]", glow: "group-hover:shadow-[#339933]/20" },
        { icon: <IoLogoPython className="w-8 h-8" />, name: "Python", color: "text-[#3776AB]", glow: "group-hover:shadow-[#3776AB]/20" },
        { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", color: "text-[#47A248]", glow: "group-hover:shadow-[#47A248]/20" },
        { icon: <AiFillApi className="w-8 h-8" />, name: "REST API", color: "text-[#FF6B6B]", glow: "group-hover:shadow-[#FF6B6B]/20" },
        { icon: <IoLogoFirebase className="w-8 h-8" />, name: "Firebase", color: "text-[#FFCA28]", glow: "group-hover:shadow-[#FFCA28]/20" },
      ]
    },
    {
      title: "DevOps",
      icons: [
        { icon: <FaDocker className="w-8 h-8" />, name: "Docker", color: "text-[#2496ED]", glow: "group-hover:shadow-[#2496ED]/20" },
        { icon: <FaAws className="w-8 h-8" />, name: "AWS", color: "text-[#FF9900]", glow: "group-hover:shadow-[#FF9900]/20" },
        { icon: <BsLightningFill className="w-8 h-8" />, name: "CI/CD", color: "text-[#FFD700]", glow: "group-hover:shadow-[#FFD700]/20" },
      ]
    },
    {
      title: "Social",
      icons: [
        { icon: <FaGithub className="w-8 h-8" />, name: "GitHub", color: "text-[#181717]", glow: "group-hover:shadow-[#181717]/20" },
        { icon: <FaLinkedin className="w-8 h-8" />, name: "LinkedIn", color: "text-[#0A66C2]", glow: "group-hover:shadow-[#0A66C2]/20" },
        { icon: <FaTwitter className="w-8 h-8" />, name: "Twitter", color: "text-[#1DA1F2]", glow: "group-hover:shadow-[#1DA1F2]/20" },
      ]
    }
  ];

  return (
    <div 
      ref={showcaseRef}
      className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-text-secondary mb-12 text-center">
          Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {iconSets.map((set, index) => (
            <div 
              key={index}
              className="bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-glass-border/20"
              style={getLightStyle(this)}
            >
              <h3 className="text-xl font-semibold text-text-secondary mb-6">
                {set.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {set.icons.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/10"
                  >
                    <div className={`relative ${item.color} group-hover:scale-110 transition-all duration-300`}>
                      <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.glow}`}></div>
                      {item.icon}
                    </div>
                    <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:translate-y-1">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconShowcase; 