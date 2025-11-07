import React from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import './Breadcrumb.css';

/**
 * Reusable Breadcrumb Component
 */
export default function Breadcrumb({
  items = [],
  separator = <HiChevronRight />,
  className = '',
  ...props
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb" {...props}>
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">{separator}</span>}
            {index === items.length - 1 ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="breadcrumb-link">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

