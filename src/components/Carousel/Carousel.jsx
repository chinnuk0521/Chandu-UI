import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Carousel.css";

/**
 * Reusable Carousel Component
 *
 * @param {Array} items - Array of carousel items
 * @param {boolean} autoPlay - Auto play carousel
 * @param {number} interval - Auto play interval in ms
 * @param {boolean} showIndicators - Show dot indicators
 * @param {boolean} showArrows - Show navigation arrows
 * @param {string} className - Additional CSS classes
 */
export default function Carousel({
  items = [],
  autoPlay = false,
  interval = 3000,
  showIndicators = true,
  showArrows = true,
  className = "",
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection('next');
    } else if (index < currentIndex) {
      setDirection('prev');
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <div className={`carousel ${className}`} {...props}>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? "active" : ""} ${index === currentIndex ? `slide-${direction}` : ""}`}
          >
            {typeof item === 'object' && item !== null && 'content' in item ? item.content : item}
          </div>
        ))}
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
            type="button"
          >
            <HiChevronLeft />
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={goToNext}
            aria-label="Next slide"
            type="button"
          >
            <HiChevronRight />
          </button>
        </>
      )}

      {showIndicators && items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
