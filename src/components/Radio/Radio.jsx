/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Radio
 */

import React from "react";
import "./Radio.css";

/**
 * Reusable Radio Component
 */
export default function Radio({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <>
      <a 
        href="/docs?component=Radio" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Radio";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <label
        className={`radio-wrapper ${disabled ? "disabled" : ""} ${className}`}
      >
      <input
        type="radio"
        className="radio-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="radio-checkmark"></span>
      {label && <span className="radio-label">{label}</span>}
    </label>
    </>
  );
}
