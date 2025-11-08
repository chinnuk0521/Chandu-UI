import React from "react";
import {
  HiCheckCircle,
  HiInformationCircle,
  HiExclamationCircle,
  HiXCircle,
  HiX,
} from "react-icons/hi";
import "./Notification.css";

/**
 * Reusable Notification Component
 *
 * @param {string} type - Notification type: 'success', 'info', 'warning', 'error'
 * @param {string} title - Notification title
 * @param {string} message - Notification message
 * @param {boolean} showIcon - Show icon
 * @param {boolean} closable - Show close button
 * @param {Function} onClose - Close callback
 * @param {string} className - Additional CSS classes
 */
export default function Notification({
  type = "info",
  title,
  message,
  showIcon = true,
  closable = true,
  onClose,
  className = "",
  ...props
}) {
  const icons = {
    success: HiCheckCircle,
    info: HiInformationCircle,
    warning: HiExclamationCircle,
    error: HiXCircle,
  };

  const Icon = icons[type] || HiInformationCircle;

  return (
    <div
      className={`notification notification-${type} ${className}`}
      {...props}
    >
      {showIcon && (
        <div className="notification-icon">
          <Icon />
        </div>
      )}
      <div className="notification-content">
        {title && <h4 className="notification-title">{title}</h4>}
        {message && <p className="notification-message">{message}</p>}
      </div>
      {closable && onClose && (
        <button
          className="notification-close"
          onClick={onClose}
          aria-label="Close"
        >
          <HiX />
        </button>
      )}
    </div>
  );
}
