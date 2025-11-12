import React, { useState, useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./ImageGallery.css";

/**
 * Reusable ImageGallery Component
 *
 * @param {Array} images - Array of image URLs or objects with src and alt
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

  // Normalize images to handle both string URLs and objects
  const normalizedImages = images.map((img, index) => {
    if (typeof img === "string") {
      return { src: img, alt: `Gallery image ${index + 1}` };
    }
    return { src: img.src || img.url, alt: img.alt || `Gallery image ${index + 1}` };
  });

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
        document.body.style.overflow = "";
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % normalizedImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, normalizedImages.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!normalizedImages || normalizedImages.length === 0) {
    return (
      <div className={`image-gallery ${className}`} {...props}>
        <div
          style={{
            color: "var(--text-tertiary)",
            textAlign: "center",
            padding: "3rem 2rem",
            background: "var(--bg-tertiary)",
            borderRadius: "12px",
            border: "1px solid var(--border-light)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 500 }}>
            No images to display
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-gallery ${className}`} {...props}>
      <div className="image-gallery-grid">
        {normalizedImages.map((image, index) => (
          <div
            key={index}
            className="image-gallery-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300/00338d/ffffff?text=Image+${index + 1}`;
              }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="image-gallery-lightbox" onClick={closeLightbox}>
          <button
            className="image-gallery-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <HiX />
          </button>
          <button
            className="image-gallery-nav image-gallery-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <HiChevronLeft />
          </button>
          <img
            src={normalizedImages[selectedIndex].src}
            alt={normalizedImages[selectedIndex].alt}
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
            aria-label="Next image"
          >
            <HiChevronRight />
          </button>
          <div className="image-gallery-counter">
            {selectedIndex + 1} / {normalizedImages.length}
          </div>
        </div>
      )}

      {showThumbnails && normalizedImages.length > 1 && (
        <div className="image-gallery-thumbnails">
          {normalizedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={selectedIndex === index ? "active" : ""}
              onClick={() => {
                setSelectedIndex(index);
                document.body.style.overflow = "hidden";
              }}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/80/00338d/ffffff?text=${index + 1}`;
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIndex(index);
                  document.body.style.overflow = "hidden";
                }
              }}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
