import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MdHome,
  MdPerson,
  MdCode,
  MdEmail,
  MdMenu,
  MdClose
} from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[100] p-2 rounded-lg bg-glass-bg border border-glass-border hover:bg-accent/10 transition-colors"
      >
        {isOpen ? (
          <MdClose className="w-6 h-6 text-accent" />
        ) : (
          <MdMenu className="w-6 h-6 text-accent" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-20 lg:w-24 glass-card transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-[95] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center py-8 h-full">
          <div className="mb-12">
            <Link to="/" className="logo flex items-center justify-center group" onClick={() => setIsOpen(false)}>
              <MdCode className="w-8 h-8 text-accent transform group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          <div className="flex flex-col space-y-8 w-full px-2">
            <Link
              to="/"
              className="group relative flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MdHome className="w-6 h-6 text-accent transform group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute left-full ml-2 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Home
              </span>
            </Link>
            <Link
              to="/about"
              className="group relative flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <MdPerson className="w-6 h-6 text-accent transform group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute left-full ml-2 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                About
              </span>
            </Link>
            <Link
              to="/projects"
              className="group relative flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MdCode className="w-6 h-6 text-accent transform group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute left-full ml-2 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Projects
              </span>
            </Link>
            <Link
              to="/contact"
              className="group relative flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <MdEmail className="w-6 h-6 text-accent transform group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute left-full ml-2 px-2 py-1 bg-card/90 backdrop-blur-sm rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 