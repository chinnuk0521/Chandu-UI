/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Checkbox
 */

import React from "react";
import "./Checkbox.css";

/**
 * Reusable Checkbox Component
 */
export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Checkbox" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Checkbox";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <label
        className={`checkbox-wrapper ${disabled ? "disabled" : ""} ${className}`}
      >
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="checkbox-checkmark"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
    </>
  );
}
