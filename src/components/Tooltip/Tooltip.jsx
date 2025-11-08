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
      {children}
      {isVisible && (
        <div ref={tooltipRef} className={`tooltip tooltip-${position}`}>
          {content}
        </div>
      )}
    </div>
  );
}
