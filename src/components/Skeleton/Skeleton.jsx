/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Skeleton
 */

import React from "react";
import "./Skeleton.css";

/**
 * Reusable Skeleton Loading Component
 *
 * @param {string} variant - Variant: 'text', 'circular', 'rectangular', 'rounded'
 * @param {string|number} width - Custom width
 * @param {string|number} height - Custom height
 * @param {string} className - Additional CSS classes
 */
export default function Skeleton({
  variant = "text",
  width,
  height,
  className = "",
  ...props
}) {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <>
      <a 
        href="/docs?component=Skeleton" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Skeleton";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        className={`skeleton skeleton-${variant} ${className}`}
        style={style}
        aria-label="Loading"
        role="status"
        {...props}
      >
        <span className="sr-only">Loading content...</span>
      </div>
    </>
  );
}
