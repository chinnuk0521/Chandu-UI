import React from 'react';
import './Checkbox.css';

/**
 * Reusable Checkbox Component
 */
export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <label className={`checkbox-wrapper ${disabled ? 'disabled' : ''} ${className}`}>
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
  );
}

