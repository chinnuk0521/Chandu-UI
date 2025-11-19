/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Switch
 */

import React from "react";
import "./Switch.css";

/**
 * Reusable Switch/Toggle Component
 */
export default function Switch({
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
        href="/docs?component=Switch" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Switch";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <label
        className={`switch-wrapper ${disabled ? "disabled" : ""} ${className}`}
      >
      {label && <span className="switch-label">{label}</span>}
      <div
        className={`switch ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}`}
      >
        <input
          type="checkbox"
          className="switch-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span className="switch-slider"></span>
      </div>
    </label>
    </>
  );
}
