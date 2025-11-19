/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Alert
 */

import React from "react";
import {
  HiInformationCircle,
  HiCheckCircle,
  HiExclamationTriangle,
  HiXCircle,
} from "react-icons/hi2";
import "./Alert.css";

/**
 * Reusable Alert Component
 */
export default function Alert({
  variant = "info",
  title,
  children,
  onClose,
  className = "",
  ...props
}) {
  const icons = {
    info: HiInformationCircle,
    success: HiCheckCircle,
    warning: HiExclamationTriangle,
    error: HiXCircle,
  };

  const Icon = icons[variant] || HiInformationCircle;

  return (
    <div className={`alert alert-${variant} ${className}`} {...props}>
      <a 
        href="/docs?component=Alert" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Alert";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className="alert-content">
        <Icon className="alert-icon" />
        <div className="alert-text">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-message">{children}</div>
        </div>
      </div>
      {onClose && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
}
