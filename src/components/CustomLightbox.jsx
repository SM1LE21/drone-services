import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const CustomLightbox = ({ slides, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIndex(currentIndex);
    setIsLoading(true); // Set loading state to true when the slide changes
  }, [currentIndex]);

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
    setIsLoading(true);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
    setIsLoading(true);
  };

  const handleLoad = () => {
    setIsLoading(false); // Set loading state to false when the media is fully loaded
  };

  const currentSlide = slides[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">×</button>
      <div className="relative w-full max-w-4xl">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <ClipLoader color={"#ffffff"} loading={isLoading} size={50} />
          </div>
        )}
        {currentSlide.type === 'image' ? (
          <img
            src={currentSlide.src}
            alt=""
            className="w-full h-auto"
            onLoad={handleLoad}
          />
        ) : (
          <div className="video-container">
            <iframe
              src={currentSlide.src}
              allow="autoplay"
              className="w-full h-full"
              frameBorder="0"
              onLoad={handleLoad}
            ></iframe>
          </div>
        )}
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl">
          ‹
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl">
          ›
        </button>
      </div>
    </div>
  );
};

export default CustomLightbox;
