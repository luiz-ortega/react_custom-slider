import React, { useState, useEffect, useRef, MouseEvent } from 'react';

const CustomSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove: any = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div style={{ border: '2px solid blue' }} ref={containerRef}>
      <h1>{`X - ${x}`}</h1>
      <h1>{`Y - ${y}`}</h1>
    </div>
  );
};

export default CustomSlider;
