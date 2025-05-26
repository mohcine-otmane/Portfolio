import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './components/Skills';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [isSpinning, setIsSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);
  const lastMouseX = useRef(0);
  const isDragging = useRef(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      setIsSpinning(false);
      wheel.classList.remove('spinning');
      wheel.classList.add('stopping');
      
      // Get current rotation from transform
      const transform = window.getComputedStyle(wheel).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      const currentRotation = Math.round(Math.atan2(matrix.m21, matrix.m11) * (180/Math.PI));
      setRotation(currentRotation);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - lastMouseX.current;
      const newRotation = rotation + deltaX * 0.5;
      setRotation(newRotation);
      wheel.style.transform = `rotate(${newRotation}deg)`;
      lastMouseX.current = e.clientX;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      wheel.classList.remove('stopping');
      wheel.classList.add('spinning');
      setIsSpinning(true);
      
      // Reset inline transform to let CSS animation take over
      wheel.style.transform = '';
    };

    wheel.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      wheel.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [rotation]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-main text-main transition-colors duration-300">
        <Navbar />
        <main className="lg:ml-64 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
