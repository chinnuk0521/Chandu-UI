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
  return (<span
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
    </span>);
}
