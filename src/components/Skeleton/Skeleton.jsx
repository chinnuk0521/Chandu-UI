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
    <div className={`skeleton skeleton-${variant} ${className}`}
        style={style}
        aria-label="Loading"
        role="status"
        {...props}
      >
        <span className="sr-only">Loading content...</span>
      </div>);
}
