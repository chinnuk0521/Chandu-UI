/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Divider
 */

import React from "react";
import "./Divider.css";

/**
 * Reusable Divider Component
 */
export default function Divider({
  orientation = "horizontal",
  text,
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Divider" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Divider";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`divider divider-${orientation} ${className}`} {...props}>
      {text && orientation === "horizontal" && (
        <span className="divider-text">{text}</span>
      )}
    </div>
    </>
  );
}
