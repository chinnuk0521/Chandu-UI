/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Input
 */

import React, { forwardRef } from "react";
import "./Input.css";

/**
 * Reusable Input Component
 *
 * @param {string} label - Input label
 * @param {string} error - Error message
 * @param {string} helperText - Helper text
 * @param {boolean} required - Required field
 * @param {string} className - Additional CSS classes
 */
const Input = forwardRef(function Input(
  { label, error, helperText, required, className = "", ...props },
  ref
) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input ref={ref} className={`input ${error ? "error" : ""}`} {...props} />
      {error && <span className="input-error">{error}</span>}
      {helperText && !error && (
        <span className="input-helper">{helperText}</span>
      )}
    </div>
  );
});

export default Input;
