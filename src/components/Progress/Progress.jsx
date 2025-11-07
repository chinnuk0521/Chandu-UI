import React from 'react';
import './Progress.css';

/**
 * Reusable Progress Component
 */
export default function Progress({
  value = 0,
  max = 100,
  showLabel = false,
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`progress-wrapper progress-${size} ${className}`} {...props}>
      {showLabel && (
        <div className="progress-label">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={`progress-fill progress-${variant}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

