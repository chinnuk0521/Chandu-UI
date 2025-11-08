import React from "react";
import { HiX } from "react-icons/hi";
import "./Sidebar.css";

/**
 * Reusable Sidebar Component
 *
 * @param {boolean} open - Sidebar open state
 * @param {Function} onClose - Close handler
 * @param {string} position - Position: 'left' or 'right'
 * @param {React.ReactNode} children - Sidebar content
 * @param {string} className - Additional CSS classes
 */
export default function Sidebar({
  open = false,
  onClose,
  position = "left",
  children,
  className = "",
  ...props
}) {
  if (!open) return null;

  return (
    <>
      <div className="sidebar-backdrop" onClick={onClose} />
      <aside className={`sidebar sidebar-${position} ${className}`} {...props}>
        {onClose && (
          <button className="sidebar-close" onClick={onClose}>
            <HiX />
          </button>
        )}
        <div className="sidebar-content">{children}</div>
      </aside>
    </>
  );
}
