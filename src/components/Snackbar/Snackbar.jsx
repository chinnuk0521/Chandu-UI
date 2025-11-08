import React, { useEffect } from "react";
import { HiX } from "react-icons/hi";
import "./Snackbar.css";

/**
 * Reusable Snackbar Component
 *
 * @param {boolean} open - Show snackbar
 * @param {string} message - Snackbar message
 * @param {string} variant - Variant: 'default', 'success', 'error', 'warning', 'info'
 * @param {number} duration - Auto close duration in ms
 * @param {Function} onClose - Close callback
 * @param {string} position - Position: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
 * @param {string} className - Additional CSS classes
 */
export default function Snackbar({
  open = false,
  message = "",
  variant = "default",
  duration = 4000,
  onClose,
  position = "bottom-center",
  className = "",
  ...props
}) {
  useEffect(() => {
    if (open && duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      className={`snackbar snackbar-${variant} snackbar-${position} ${className}`}
      {...props}
    >
      <span className="snackbar-message">{message}</span>
      {onClose && (
        <button className="snackbar-close" onClick={onClose} aria-label="Close">
          <HiX />
        </button>
      )}
    </div>
  );
}
