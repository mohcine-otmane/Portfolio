import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MdMenu,
  MdClose
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
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  const navItems = [
    {
      path: '/',
      icon: <RiHome4Fill className="w-6 h-6" />,
      label: 'Home',
      color: 'text-[#FF6B6B]',
      hoverColor: 'group-hover:text-[#FF8787]',
      bgColor: 'bg-[#FF6B6B]/10',
      hoverBgColor: 'group-hover:bg-[#FF6B6B]/20',
      glowColor: 'group-hover:shadow-[#FF6B6B]/20'
    },
    {
      path: '/about',
      icon: <RiUser3Fill className="w-6 h-6" />,
      label: 'About',
      color: 'text-[#4ECDC4]',
      hoverColor: 'group-hover:text-[#6ED7D0]',
      bgColor: 'bg-[#4ECDC4]/10',
      hoverBgColor: 'group-hover:bg-[#4ECDC4]/20',
      glowColor: 'group-hover:shadow-[#4ECDC4]/20'
    },
    {
      path: '/projects',
      icon: <RiCodeSSlashFill className="w-6 h-6" />,
      label: 'Projects',
      color: 'text-[#FFD93D]',
      hoverColor: 'group-hover:text-[#FFE566]',
      bgColor: 'bg-[#FFD93D]/10',
      hoverBgColor: 'group-hover:bg-[#FFD93D]/20',
      glowColor: 'group-hover:shadow-[#FFD93D]/20'
    },
    {
      path: '/contact',
      icon: <RiMailFill className="w-6 h-6" />,
      label: 'Contact',
      color: 'text-[#95E1D3]',
      hoverColor: 'group-hover:text-[#A7E7DB]',
      bgColor: 'bg-[#95E1D3]/10',
      hoverBgColor: 'group-hover:bg-[#95E1D3]/20',
      glowColor: 'group-hover:shadow-[#95E1D3]/20'
    }
  ];

  const socialLinks = [
    {
      icon: <RiGithubFill className="w-5 h-5" />,
      href: 'https://github.com',
      color: 'text-[#181717]',
      hoverColor: 'group-hover:text-[#2D2D2D]',
      bgColor: 'bg-[#181717]/10',
      hoverBgColor: 'group-hover:bg-[#181717]/20',
      glowColor: 'group-hover:shadow-[#181717]/20'
    },
    {
      icon: <RiLinkedinFill className="w-5 h-5" />,
      href: 'https://linkedin.com',
      color: 'text-[#0A66C2]',
      hoverColor: 'group-hover:text-[#0B7DE3]',
      bgColor: 'bg-[#0A66C2]/10',
      hoverBgColor: 'group-hover:bg-[#0A66C2]/20',
      glowColor: 'group-hover:shadow-[#0A66C2]/20'
    },
    {
      icon: <RiTwitterFill className="w-5 h-5" />,
      href: 'https://twitter.com',
      color: 'text-[#1DA1F2]',
      hoverColor: 'group-hover:text-[#4AB4F4]',
      bgColor: 'bg-[#1DA1F2]/10',
      hoverBgColor: 'group-hover:bg-[#1DA1F2]/20',
      glowColor: 'group-hover:shadow-[#1DA1F2]/20'
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
                <FaReact className="w-8 h-8 text-[#61DAFB] transform group-hover:rotate-180 transition-all duration-500" />
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
              >
                <div className={`p-3 rounded-xl ${item.bgColor} ${item.hoverBgColor} transition-all duration-300 ${item.glowColor} group-hover:shadow-lg`}>
                  <div className={`${item.color} ${item.hoverColor} transform group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>
                <span className="absolute left-full ml-2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform group-hover:translate-x-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-auto flex flex-col space-y-4 w-full px-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
              >
                <div className={`p-2 rounded-xl ${item.bgColor} ${item.hoverBgColor} transition-all duration-300 ${item.glowColor} group-hover:shadow-lg`}>
                  <div className={`${item.color} ${item.hoverColor} transform group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 