import React, { useState, useEffect, useRef, MouseEvent } from 'react';

const CustomSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log(containerRef);
    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener('mousemove', event => {
        setX(event.clientX);
        setY(event.clientY);
      });

      return () => {
        containerRef &&
          containerRef.current &&
          containerRef.current.removeEventListener('mousemove', event => {
            setX(event.clientX);
            setY(event.clientY);
          });
      };
    }
  }, []);

  return (
    <div style={{ border: '2px solid blue' }} ref={containerRef}>
      <h1>{`X - ${x}`}</h1>
      <h1>{`Y - ${y}`}</h1>
    </div>
  );
};

export default CustomSlider;
