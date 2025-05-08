import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * CursorBackground component creates an interactive background effect that follows the cursor.
 * It uses multiple layered light elements with different properties for a dynamic effect.
 */
const CursorBackground = () => {
  // Refs for DOM elements and animation control
  const containerRef = useRef(null);
  const lightsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastUpdateRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  // State for hover effect
  const [isHovering, setIsHovering] = useState(false);

  // Constants for performance tuning
  const THROTTLE_MS = 16; // ~60fps
  const ANIMATION_DURATION = 300; // ms
  const SCALE_FACTOR = 1.1;
  const RIPPLE_SCALE = 1.2;
  const RIPPLE_DURATION = 200; // ms

  /**
   * Light element configuration
   * Each light has different properties for size, blur, opacity, and colors
   */
  const lights = [
    {
      size: 500,
      blur: 'blur-2xl',
      opacity: '15',
      color: 'from-primary/15 via-secondary/15 to-accent/15',
      hoverColor: 'from-primary/20 via-secondary/20 to-accent/20',
    },
    {
      size: 350,
      blur: 'blur-xl',
      opacity: '10',
      color: 'from-secondary/15 via-accent/15 to-primary/15',
      hoverColor: 'from-secondary/20 via-accent/20 to-primary/20',
    },
    {
      size: 250,
      blur: 'blur-lg',
      opacity: '8',
      color: 'from-accent/15 via-primary/15 to-secondary/15',
      hoverColor: 'from-accent/20 via-primary/20 to-secondary/20',
    },
  ];

  /**
   * Updates the position of light elements based on mouse movement
   * Uses requestAnimationFrame for smooth animations and throttling for performance
   */
  const handleMouseMove = useCallback((e) => {
    const now = performance.now();
    if (now - lastUpdateRef.current < THROTTLE_MS) return;
    lastUpdateRef.current = now;

    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    
    mousePositionRef.current = {
      x: clientX - left,
      y: clientY - top,
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      lightsRef.current.forEach((light, index) => {
        if (!light) return;
        
        const offset = index * 15;
        const scale = isHovering ? SCALE_FACTOR : 1;
        
        light.style.transform = `translate(${mousePositionRef.current.x + offset}px, ${
          mousePositionRef.current.y + offset
        }px) scale(${scale})`;
      });
    });
  }, [isHovering]);

  /**
   * Creates a ripple effect when clicking
   * Each light element expands and contracts with a slight delay
   */
  const handleClick = useCallback((e) => {
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current.getBoundingClientRect();
    
    const clickX = clientX - left;
    const clickY = clientY - top;

    lightsRef.current.forEach((light, index) => {
      if (!light) return;
      
      setTimeout(() => {
        light.style.transform = `translate(${clickX}px, ${clickY}px) scale(${RIPPLE_SCALE})`;
        setTimeout(() => {
          light.style.transform = `translate(${mousePositionRef.current.x}px, ${
            mousePositionRef.current.y
          }px) scale(1)`;
        }, RIPPLE_DURATION);
      }, index * 50);
    });
  }, []);

  /**
   * Handles mouse enter event
   * Increases brightness and updates hover state
   */
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    lightsRef.current.forEach((light) => {
      if (!light) return;
      light.style.filter = 'brightness(1.1)';
    });
  }, []);

  /**
   * Handles mouse leave event
   * Resets brightness and hover state
   */
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    lightsRef.current.forEach((light) => {
      if (!light) return;
      light.style.filter = 'brightness(1)';
    });
  }, []);

  // Set up event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('click', handleClick);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleClick, handleMouseEnter, handleMouseLeave]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {lights.map((light, index) => (
        <div
          key={index}
          ref={(el) => (lightsRef.current[index] = el)}
          className={`absolute rounded-full bg-gradient-to-r ${
            isHovering ? light.hoverColor : light.color
          } ${light.blur} transition-transform duration-${ANIMATION_DURATION} ease-out`}
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            opacity: light.opacity / 100,
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
        />
      ))}
    </div>
  );
};

export default CursorBackground; 