import React, { MouseEvent, useState, useEffect } from 'react';

const CustomSlider: React.FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  /* const logMousePosition = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  }; */

  useEffect(() => {
    window.addEventListener('mousemove', event => {
      setX(event.clientX);
      setY(event.clientY);
    });

    return () => {
      window.removeEventListener('mousemove', event => {
        setX(event.clientX);
        setY(event.clientY);
      });
    };
  }, []);

  return (
    <>
      <h1>{`X - ${x}`}</h1>
      <h1>{`Y - ${y}`}</h1>
    </>
  );
};

export default CustomSlider;
