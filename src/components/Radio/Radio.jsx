import React from 'react';
import './Radio.css';

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
  className = '',
  ...props
}) {
  return (
    <label className={`radio-wrapper ${disabled ? 'disabled' : ''} ${className}`}>
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
  );
}

