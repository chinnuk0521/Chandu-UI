/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Progress
 */

import React from "react";
import "./Progress.css";

/**
 * Reusable Progress Component
 *
 * @param {number} value - Current progress value
 * @param {number} max - Maximum value (default: 100)
 * @param {boolean} showLabel - Show percentage label
 * @param {string} label - Custom label text (alternative to showLabel)
 * @param {string} size - Size: 'small', 'medium', 'large'
 * @param {string} variant - Variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {boolean} animated - Enable animation
 * @param {boolean} striped - Show striped pattern
 * @param {string} className - Additional CSS classes
 */
export default function Progress({
  value = 0,
  max = 100,
  showLabel = false,
  label,
  size = "medium",
  variant = "primary",
  animated = true,
  striped = false,
  className = "",
  ...props
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const displayLabel = label !== undefined ? label : (showLabel ? `${Math.round(percentage)}%` : null);

  return (
    <div className={`progress-wrapper progress-${size} ${className}`}
        {...props}
      >
      {displayLabel && (
        <div className="progress-label">
          <span>{displayLabel}</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={`progress-fill progress-${variant} ${animated ? 'progress-animated' : ''} ${striped ? 'progress-striped' : ''}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={`Progress: ${Math.round(percentage)}%`}
        ></div>
      </div>
    </div>);
}
