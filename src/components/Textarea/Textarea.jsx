import React from 'react';
import './Textarea.css';

/**
 * Reusable Textarea Component
 */
export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) {
  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <label className="textarea-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <textarea
        className={`textarea ${error ? 'textarea-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        {...props}
      />
      {error && <span className="textarea-error-text">{error}</span>}
      {helperText && !error && (
        <span className="textarea-helper-text">{helperText}</span>
      )}
    </div>
  );
}

