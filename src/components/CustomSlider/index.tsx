import React, { useState, useEffect, useRef, MouseEvent } from 'react';

import './style.css';

const slides = [1, 2, 3, 4, 5];

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
    <>
      <p>{`X - ${x}/ Y - ${y}`}</p>
      <section ref={containerRef} className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide1" className="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide3" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide3" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide2" className="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide4" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide4" className="carousel__slide">
            <div className="carousel__snapper">
              <a href="#carousel__slide3" className="carousel__prev">
                Go to previous slide
              </a>
              <a href="#carousel__slide1" className="carousel__next">
                Go to first slide
              </a>
            </div>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
};

export default CustomSlider;
