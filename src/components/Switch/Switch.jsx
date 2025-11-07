import React from 'react';
import './Switch.css';

/**
 * Reusable Switch/Toggle Component
 */
export default function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <label className={`switch-wrapper ${disabled ? 'disabled' : ''} ${className}`}>
      {label && <span className="switch-label">{label}</span>}
      <div className={`switch ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}`}>
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
  );
}

