/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Popover
 */

import React, { useState, useRef, useEffect } from "react";
import "./Popover.css";

/**
 * Reusable Popover Component
 */
export default function Popover({
  content,
  trigger = "click",
  position = "bottom",
  children,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen && trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, trigger]);

  const handleTrigger = () => {
    if (trigger === "click") {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsOpen(false);
    }
  };

  return (
    <>
      <a 
        href="/docs?component=Popover" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Popover";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        ref={containerRef}
        className={`popover-wrapper ${className}`}
        onClick={trigger === "click" ? handleTrigger : undefined}
        onMouseEnter={trigger === "hover" ? handleMouseEnter : undefined}
        onMouseLeave={trigger === "hover" ? handleMouseLeave : undefined}
        {...props}
      >
        {children}
      {isOpen && (
        <div className={`popover popover-${position}`}>
          <div className="popover-content">{content}</div>
          <div className={`popover-arrow popover-arrow-${position}`}></div>
        </div>
      )}
      </div>
    </>
  );
}
