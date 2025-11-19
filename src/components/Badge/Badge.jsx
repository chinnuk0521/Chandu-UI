/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Badge
 */

import React from "react";
import "./Badge.css";

/**
 * Reusable Badge Component
 *
 * @param {React.ReactNode} children - Badge content
 * @param {string} variant - Badge variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {string} size - Badge size: 'small', 'medium', 'large'
 * @param {string} className - Additional CSS classes
 */
export default function Badge({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Badge" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Badge";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <span
        className={`badge badge-${variant} badge-${size} ${className}`}
        {...props}
      >
        {children}
      </span>
    </>
  );
}
