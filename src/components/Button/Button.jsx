import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * 
 * @param {string} variant - Button variant: 'primary', 'secondary', 'outline', 'text'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {boolean} disabled - Disable button
 * @param {boolean} loading - Show loading state
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 * @param {Function} onClick - Click handler
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 */
export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${loading ? 'loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      <span className={loading ? 'btn-content-loading' : ''}>{children}</span>
    </button>
  );
}

