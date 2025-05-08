import React from 'react';
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
  const iconSets = [
    {
      title: "Frontend",
      icons: [
        { icon: <FaReact className="w-8 h-8" />, name: "React", color: "text-[#61DAFB]" },
        { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js", color: "text-white" },
        { icon: <IoLogoJavascript className="w-8 h-8" />, name: "JavaScript", color: "text-[#F7DF1E]" },
        { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript", color: "text-[#3178C6]" },
        { icon: <IoLogoHtml5 className="w-8 h-8" />, name: "HTML5", color: "text-[#E34F26]" },
        { icon: <IoLogoCss3 className="w-8 h-8" />, name: "CSS3", color: "text-[#1572B6]" },
        { icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind", color: "text-[#06B6D4]" },
      ]
    },
    {
      title: "Backend",
      icons: [
        { icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js", color: "text-[#339933]" },
        { icon: <IoLogoPython className="w-8 h-8" />, name: "Python", color: "text-[#3776AB]" },
        { icon: <SiMongodb className="w-8 h-8" />, name: "MongoDB", color: "text-[#47A248]" },
        { icon: <AiFillApi className="w-8 h-8" />, name: "REST API", color: "text-[#FF6B6B]" },
        { icon: <IoLogoFirebase className="w-8 h-8" />, name: "Firebase", color: "text-[#FFCA28]" },
      ]
    },
    {
      title: "DevOps",
      icons: [
        { icon: <FaDocker className="w-8 h-8" />, name: "Docker", color: "text-[#2496ED]" },
        { icon: <FaAws className="w-8 h-8" />, name: "AWS", color: "text-[#FF9900]" },
        { icon: <BsLightningFill className="w-8 h-8" />, name: "CI/CD", color: "text-[#FFD700]" },
      ]
    },
    {
      title: "Social",
      icons: [
        { icon: <FaGithub className="w-8 h-8" />, name: "GitHub", color: "text-[#181717]" },
        { icon: <FaLinkedin className="w-8 h-8" />, name: "LinkedIn", color: "text-[#0A66C2]" },
        { icon: <FaTwitter className="w-8 h-8" />, name: "Twitter", color: "text-[#1DA1F2]" },
      ]
    }
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {iconSets.map((set, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 p-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-white text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {set.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {set.icons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/10 group"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconShowcase; 