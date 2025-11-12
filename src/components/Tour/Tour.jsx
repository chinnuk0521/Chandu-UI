import React, { useState, useEffect, useRef } from "react";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
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
  open,
  isOpen,
  onClose,
  onComplete,
  className = "",
  ...props
}) {
  // Support both open and isOpen for backward compatibility
  const isOpenState = open !== undefined ? open : (isOpen !== undefined ? isOpen : false);
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: "bottom" });
  const [highlightRect, setHighlightRect] = useState(null);
  const tourRef = useRef(null);
  const highlightedElementRef = useRef(null);

  // Reset step when tour opens and clean up when it closes
  useEffect(() => {
    if (isOpenState) {
      // Reset to first step when tour opens
      setCurrentStep(0);
      setHighlightRect(null);
    } else {
      // Clean up when tour closes
      if (highlightedElementRef.current) {
        highlightedElementRef.current.classList.remove("tour-highlighted");
        highlightedElementRef.current = null;
      }
      setHighlightRect(null);
      setCurrentStep(0); // Reset for next time
    }
  }, [isOpenState]);

  useEffect(() => {
    if (isOpenState && steps.length > 0 && currentStep >= 0 && currentStep < steps.length) {
      // Clean up previous highlight
      if (highlightedElementRef.current) {
        highlightedElementRef.current.classList.remove("tour-highlighted");
      }

      const step = steps[currentStep];
      if (!step || !step.target) {
        setHighlightRect(null);
        return;
      }

      const element = document.querySelector(step.target);
      
      if (element) {
        highlightedElementRef.current = element;
        
        let rafId = null;
        let timeoutId = null;
        
        // Use requestAnimationFrame for smooth updates
        const updatePosition = () => {
          if (!element || !document.body.contains(element)) {
            return;
          }
          
          const rect = element.getBoundingClientRect();
          const scrollY = window.scrollY || window.pageYOffset;
          const scrollX = window.scrollX || window.pageXOffset;
          
          // Store highlight position (absolute positioning)
          setHighlightRect({
            top: rect.top + scrollY,
            left: rect.left + scrollX,
            width: rect.width,
            height: rect.height,
          });

          // Determine placement (top, bottom, left, right)
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          const spaceBelow = viewportHeight - rect.bottom;
          const spaceAbove = rect.top;
          const spaceRight = viewportWidth - rect.right;
          const spaceLeft = rect.left;

          let placement = "bottom";
          let top = rect.bottom + scrollY + 16;
          let left = rect.left + scrollX + rect.width / 2;

          if (spaceBelow < 200 && spaceAbove > spaceBelow) {
            placement = "top";
            top = rect.top + scrollY - 16;
          } else if (spaceRight < 300 && spaceLeft > spaceRight) {
            placement = "left";
            top = rect.top + scrollY + rect.height / 2;
            left = rect.left + scrollX - 16;
          } else if (spaceLeft < 300) {
            placement = "right";
            top = rect.top + scrollY + rect.height / 2;
            left = rect.right + scrollX + 16;
          }

          setPosition({ top, left, placement });
        };

        // Optimized scroll handler using requestAnimationFrame
        const handleScroll = () => {
          if (rafId) {
            cancelAnimationFrame(rafId);
          }
          rafId = requestAnimationFrame(() => {
            // Verify element still exists and is the current highlighted element
            const currentElement = highlightedElementRef.current;
            if (currentElement && currentElement === element && document.body.contains(currentElement)) {
              updatePosition();
            }
          });
        };

        // Optimized resize handler
        const handleResize = () => {
          if (rafId) {
            cancelAnimationFrame(rafId);
          }
          rafId = requestAnimationFrame(() => {
            const currentElement = highlightedElementRef.current;
            if (currentElement && currentElement === element && document.body.contains(currentElement)) {
              updatePosition();
            }
          });
        };
        
        // Continuous update check (fallback for any missed scroll events)
        const continuousUpdate = setInterval(() => {
          const currentElement = highlightedElementRef.current;
          if (currentElement && currentElement === element && document.body.contains(currentElement)) {
            updatePosition();
          } else {
            clearInterval(continuousUpdate);
          }
        }, 100);

        // Scroll element into view first
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        
        // Update position after scroll animation completes
        timeoutId = setTimeout(() => {
          updatePosition();
        }, 400);
        
        // Also update immediately in case element is already in view
        updatePosition();
        
        // Add event listeners for scroll and resize on multiple targets
        window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        window.addEventListener("resize", handleResize, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        document.documentElement.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        document.body.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        
        // Also listen to scroll on any scrollable containers
        const scrollableContainers = document.querySelectorAll('[data-scroll-container], .demo-interactive, [style*="overflow"]');
        const containerList = Array.from(scrollableContainers);
        containerList.forEach(container => {
          container.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        });
        
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (rafId) {
            cancelAnimationFrame(rafId);
          }
          clearInterval(continuousUpdate);
          window.removeEventListener("scroll", handleScroll, { capture: true });
          window.removeEventListener("resize", handleResize);
          document.removeEventListener("scroll", handleScroll, { capture: true });
          document.documentElement.removeEventListener("scroll", handleScroll, { capture: true });
          document.body.removeEventListener("scroll", handleScroll, { capture: true });
          containerList.forEach(container => {
            container.removeEventListener("scroll", handleScroll, { capture: true });
          });
        };
      } else {
        setHighlightRect(null);
        highlightedElementRef.current = null;
      }
    }
  }, [isOpenState, currentStep, steps]);

  useEffect(() => {
    if (isOpenState && highlightedElementRef.current) {
      // Add highlight class to target element
      const element = highlightedElementRef.current;
      element.classList.add("tour-highlighted");
      
      return () => {
        if (element && element.classList) {
          element.classList.remove("tour-highlighted");
        }
      };
    }
  }, [isOpenState, currentStep, highlightRect]);

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

  const handleClose = () => {
    // Clean up highlight
    if (highlightedElementRef.current) {
      highlightedElementRef.current.classList.remove("tour-highlighted");
      highlightedElementRef.current = null;
    }
    setHighlightRect(null);
    
    if (onClose) {
      onClose();
    }
  };

  if (!isOpenState || steps.length === 0) return null;

  // Validate current step
  const validStep = Math.max(0, Math.min(currentStep, steps.length - 1));
  const step = steps[validStep];
  
  if (!step) return null;

  return (
    <>
      <div className="tour-overlay" onClick={handleClose} />
      {highlightRect && (
        <div
          className="tour-highlight"
          style={{
            top: `${highlightRect.top}px`,
            left: `${highlightRect.left}px`,
            width: `${highlightRect.width}px`,
            height: `${highlightRect.height}px`,
          }}
        />
      )}
      <div
        ref={tourRef}
        className={`tour tour-${position.placement} ${className}`}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        {...props}
      >
        <div className="tour-header">
          <div className="tour-header-content">
            <div className="tour-step-badge">Step {validStep + 1}</div>
            <div className="tour-title">{step.title}</div>
          </div>
          <button 
            className="tour-close" 
            onClick={handleClose}
            aria-label="Close tour"
            type="button"
          >
            <HiXMark />
          </button>
        </div>
        <div className="tour-content">
          <p className="tour-description">{step.content}</p>
        </div>
        <div className="tour-footer">
          <div className="tour-progress">
            <div className="tour-progress-bar">
              <div 
                className="tour-progress-fill"
                style={{ width: `${((validStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="tour-progress-text">
              {validStep + 1} of {steps.length}
            </span>
          </div>
          <div className="tour-actions">
            {validStep > 0 && (
              <button
                className="tour-button tour-button-secondary"
                onClick={handlePrev}
                type="button"
              >
                <HiChevronLeft />
                Previous
              </button>
            )}
            <button
              className="tour-button tour-button-primary"
              onClick={handleNext}
              type="button"
            >
              {validStep < steps.length - 1 ? (
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
