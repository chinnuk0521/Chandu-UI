/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Card
 */

import React from "react";
import "./Card.css";

/**
 * Reusable Card Component
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {React.ReactNode} image - Card image
 * @param {React.ReactNode} footer - Card footer
 * @param {string} className - Additional CSS classes
 * @param {Function} onClick - Click handler
 */
export default function Card({
  children,
  title,
  subtitle,
  image,
  footer,
  className = "",
  onClick,
  ...props
}) {
  return (
    <div
      className={`card ${onClick ? "clickable" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      <a 
        href="/docs?component=Card" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Card";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      {image && <div className="card-image">{image}</div>}
      {(title || subtitle || children) && (
        <div className="card-content">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          {children && <div className="card-body">{children}</div>}
        </div>
      )}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
