import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * 
 * @param {React.ReactNode} children - Badge content
 * @param {string} variant - Badge variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {string} size - Badge size: 'small', 'medium', 'large'
 * @param {string} className - Additional CSS classes
 */
export default function Badge({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) {
  return (
    <span
      className={`badge badge-${variant} badge-${size} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

