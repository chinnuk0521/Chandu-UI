/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Tooltip
 */

import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

/**
 * Reusable Tooltip Component
 */
export default function Tooltip({
  content,
  position = "top",
  children,
  className = "",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      <a 
        href="/docs?component=Tooltip" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Tooltip";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      {children}
      {isVisible && (
        <div ref={tooltipRef} className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
}
