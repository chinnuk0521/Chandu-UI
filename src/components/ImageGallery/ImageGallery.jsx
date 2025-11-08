import React, { useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./ImageGallery.css";

/**
 * Reusable ImageGallery Component
 *
 * @param {Array} images - Array of image URLs
 * @param {boolean} showThumbnails - Show thumbnail navigation
 * @param {string} className - Additional CSS classes
 */
export default function ImageGallery({
  images = [],
  showThumbnails = true,
  className = "",
  ...props
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className={`image-gallery ${className}`} {...props}>
        <p style={{ color: "#6b7280", textAlign: "center", padding: "2rem" }}>
          No images to display
        </p>
      </div>
    );
  }

  return (
    <div className={`image-gallery ${className}`} {...props}>
      <div className="image-gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300/00338d/ffffff?text=Image+${index + 1}`;
              }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="image-gallery-lightbox" onClick={closeLightbox}>
          <button className="image-gallery-close" onClick={closeLightbox}>
            <HiX />
          </button>
          <button
            className="image-gallery-nav image-gallery-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <HiChevronLeft />
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Gallery ${selectedIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800/00338d/ffffff?text=Image+${selectedIndex + 1}`;
            }}
          />
          <button
            className="image-gallery-nav image-gallery-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <HiChevronRight />
          </button>
        </div>
      )}

      {showThumbnails && images.length > 1 && (
        <div className="image-gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={selectedIndex === index ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/80/00338d/ffffff?text=${index + 1}`;
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
