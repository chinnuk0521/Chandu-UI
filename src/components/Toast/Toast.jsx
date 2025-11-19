/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Toast
 */

import React, { useEffect } from "react";
import {
  HiXMark,
  HiCheckCircle,
  HiExclamationTriangle,
  HiInformationCircle,
  HiXCircle,
} from "react-icons/hi2";
import "./Toast.css";

/**
 * Reusable Toast Component
 */
export default function Toast({
  message,
  variant = "info",
  duration = 5000,
  onClose,
  className = "",
  ...props
}) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: HiCheckCircle,
    error: HiXCircle,
    warning: HiExclamationTriangle,
    info: HiInformationCircle,
  };

  const Icon = icons[variant] || HiInformationCircle;

  return (
    <>
      <a 
        href="/docs?component=Toast" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Toast";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`toast toast-${variant} ${className}`} {...props}>
      <Icon className="toast-icon" />
      <span className="toast-message">{message}</span>
      {onClose && (
        <button
          className="toast-close"
          onClick={onClose}
          aria-label="Close toast"
        >
          <HiXMark />
        </button>
      )}
      </div>
    </>
  );
}
