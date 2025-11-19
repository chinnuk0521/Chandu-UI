/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Spinner
 */

import React from "react";
import "./Spinner.css";

/**
 * Reusable Spinner/Loader Component
 *
 * @param {string} size - Spinner size: 'small', 'medium', 'large'
 * @param {string} variant - Spinner variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {string} className - Additional CSS classes
 */
export default function Spinner({
  size = "medium",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Spinner" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Spinner";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        className={`spinner spinner-${size} spinner-${variant} ${className}`}
        {...props}
        role="status"
        aria-label="Loading"
        aria-live="polite"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
