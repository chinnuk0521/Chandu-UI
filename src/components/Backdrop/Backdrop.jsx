/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Backdrop
 */

import React, { useEffect } from "react";
import "./Backdrop.css";

/**
 * Reusable Backdrop Component
 *
 * @param {boolean} open - Show backdrop
 * @param {boolean} isOpen - Alternative prop name for open
 * @param {Function} onClick - Click handler
 * @param {boolean} preventScroll - Prevent body scroll when backdrop is open
 * @param {string} className - Additional CSS classes
 */
export default function Backdrop({
  open: openProp = false,
  isOpen,
  onClick,
  preventScroll = true,
  className = "",
  ...props
}) {
  // Support both 'open' and 'isOpen' props
  const open = openProp || isOpen || false;

  // Prevent body scroll when backdrop is open
  useEffect(() => {
    if (open && preventScroll) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, preventScroll]);

  if (!open) return null;

  const handleClick = (e) => {
    // Only trigger onClick if clicking directly on the backdrop (not on children)
    if (e.target === e.currentTarget && onClick) {
      onClick(e);
    }
  };

  return (
    <div className={`backdrop ${className}`}
        onClick={handleClick}
        role="presentation"
        aria-hidden="true"
        {...props}
      />);
}
