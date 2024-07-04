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
        timer = setTimeout(handleNextSlide, (currentRef.duration || 3) * 1000); // Further reduced fallback duration
      }
    } else {
      timer = setTimeout(handleNextSlide, (slides[currentSlide].duration || 2) * 1000); // Further reduced duration for non-video slides
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
          width="600" // Set desired width
          height="400" // Set desired height
        />
      );
    } else if (slide.type === 'video') {
      return (
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className="slide-video"
          key={index}
          muted
          width="600" // Set desired width
          height="400" // Set desired height
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
      <div className="slide-content">{renderSlide(slides[currentSlide], currentSlide)}</div>
      {/* <button
        className="slide-button prev-button"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        aria-label="Previous Slide"
      >
        Previous
      </button> */}
      {/* <button
        className="slide-button next-button"
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        aria-label="Next Slide"
      >
        Next
      </button> */}
    </div>
  );
};

export default Slide;
