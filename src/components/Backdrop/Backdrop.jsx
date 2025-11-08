import React from "react";
import "./Backdrop.css";

/**
 * Reusable Backdrop Component
 *
 * @param {boolean} open - Show backdrop
 * @param {Function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
export default function Backdrop({
  open = false,
  onClick,
  className = "",
  ...props
}) {
  if (!open) return null;

  return (
    <div className={`backdrop ${className}`} onClick={onClick} {...props} />
  );
}
