import React, { useState, useEffect, useRef } from 'react';
import { slides } from './slideData';
import '../../css/Slide.css';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    let timer;
    const currentRef = videoRefs.current[currentSlide];

    if (slides[currentSlide].type === 'video') {
      if (currentRef) {
        currentRef.play();
        timer = setTimeout(handleNextSlide, 2000); // Adjusted duration for video slides (2 seconds)
      }
    } else {
      timer = setTimeout(handleNextSlide, 1500); // Adjusted duration for non-video slides (1.5 seconds)
    }

    return () => {
      clearTimeout(timer);
      if (currentRef) {
        currentRef.pause();
      }
    };
  }, [currentSlide]);

  const renderSlide = (slide, index) => {
    if (slide.type === 'image') {
      return (
        <img
          src={slide.src}
          alt={slide.alt}
          className="slide-image"
          key={index}
        />
      );
    } else if (slide.type === 'video') {
      return (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className="slide-video"
          key={index}
          muted
        >
          <source src={slide.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  return (
    <div className="slide-container">
      <div
        className="slide-content"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {renderSlide(slide, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
