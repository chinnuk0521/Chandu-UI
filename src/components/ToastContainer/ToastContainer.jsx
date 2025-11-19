/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## ToastContainer
 */

import React from "react";
import Toast from "../Toast";
import "./ToastContainer.css";

/**
 * Toast Container Component for managing multiple toasts
 */
export default function ToastContainer({
  toasts = [],
  position = "top-right",
  onRemove,
  className = "",
  ...props
}) {
  if (toasts.length === 0) return null;

  return (
    <div className={`toast-container toast-container-${position} ${className}`}
        {...props}
      >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          duration={toast.duration}
          onClose={() => onRemove?.(toast.id)}
        />
      ))}
      </div>);
}
