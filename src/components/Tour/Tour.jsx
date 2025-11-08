import React, { useState, useEffect, useRef } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Tour.css";

/**
 * Reusable Tour Component
 *
 * @param {Array} steps - Tour steps
 * @param {boolean} open - Tour open state
 * @param {Function} onClose - Close handler
 * @param {Function} onComplete - Complete handler
 * @param {string} className - Additional CSS classes
 */
export default function Tour({
  steps = [],
  open = false,
  onClose,
  onComplete,
  className = "",
  ...props
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tourRef = useRef(null);

  useEffect(() => {
    if (open && steps.length > 0) {
      const step = steps[currentStep];
      const element = document.querySelector(step.target);
      if (element) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 10,
          left: rect.left + rect.width / 2,
        });
      }
    }
  }, [open, currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (onComplete) {
        onComplete();
      }
      if (onClose) {
        onClose();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!open || steps.length === 0) return null;

  const step = steps[currentStep];

  return (
    <>
      <div className="tour-overlay" onClick={onClose} />
      <div
        ref={tourRef}
        className={`tour ${className}`}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: "translateX(-50%)",
        }}
        {...props}
      >
        <div className="tour-header">
          <div className="tour-title">{step.title}</div>
          <button className="tour-close" onClick={onClose}>
            <HiX />
          </button>
        </div>
        <div className="tour-content">
          <p className="tour-description">{step.content}</p>
        </div>
        <div className="tour-footer">
          <div className="tour-progress">
            {currentStep + 1} / {steps.length}
          </div>
          <div className="tour-actions">
            {currentStep > 0 && (
              <button
                className="tour-button tour-button-secondary"
                onClick={handlePrev}
              >
                <HiChevronLeft />
                Previous
              </button>
            )}
            <button
              className="tour-button tour-button-primary"
              onClick={handleNext}
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <HiChevronRight />
                </>
              ) : (
                "Finish"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
