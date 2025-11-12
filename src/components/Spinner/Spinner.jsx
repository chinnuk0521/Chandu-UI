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
    <div
      className={`spinner spinner-${size} spinner-${variant} ${className}`}
      {...props}
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
