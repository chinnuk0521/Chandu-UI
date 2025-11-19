/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Snackbar
 */

import React, { useEffect } from "react";
import {
  HiXMark,
  HiCheckCircle,
  HiXCircle,
  HiExclamationTriangle,
  HiInformationCircle,
} from "react-icons/hi2";
import "./Snackbar.css";

/**
 * Reusable Snackbar Component
 *
 * @param {boolean} open - Show snackbar
 * @param {boolean} isOpen - Alternative prop name for open
 * @param {string} message - Snackbar message
 * @param {string} variant - Variant: 'default', 'success', 'error', 'warning', 'info'
 * @param {number} duration - Auto close duration in ms
 * @param {Function} onClose - Close callback
 * @param {string} position - Position: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
 * @param {boolean} showIcon - Show icon for variant
 * @param {string} className - Additional CSS classes
 */
export default function Snackbar({
  open: openProp = false,
  isOpen,
  message = "",
  variant = "default",
  duration = 4000,
  onClose,
  position = "bottom-center",
  showIcon = true,
  className = "",
  ...props
}) {
  // Support both 'open' and 'isOpen' props
  const open = openProp || isOpen || false;

  useEffect(() => {
    if (open && duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  const icons = {
    success: HiCheckCircle,
    error: HiXCircle,
    warning: HiExclamationTriangle,
    info: HiInformationCircle,
  };

  const Icon = icons[variant] || null;

  return (
    <div className={`snackbar snackbar-${variant} snackbar-${position} ${className}`}
        {...props}
      >
      {showIcon && Icon && (
        <Icon className="snackbar-icon" />
      )}
      <span className="snackbar-message">{message}</span>
      {onClose && (
        <button className="snackbar-close" onClick={onClose} aria-label="Close">
          <HiXMark />
        </button>
      )}
      </div>);
}
