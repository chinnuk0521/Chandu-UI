/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Chip
 */

import React from "react";
import { HiXMark } from "react-icons/hi2";
import "./Chip.css";

/**
 * Reusable Chip Component
 */
export default function Chip({
  label,
  onDelete,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Chip" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Chip";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <span
        className={`chip chip-${variant} chip-${size} ${className}`}
        {...props}
      >
      {label}
      {onDelete && (
        <button
          className="chip-delete"
          onClick={onDelete}
          aria-label="Delete chip"
        >
          <HiXMark />
        </button>
      )}
    </span>
    </>
  );
}
