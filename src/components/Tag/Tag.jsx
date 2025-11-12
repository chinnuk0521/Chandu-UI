import React from "react";
import { HiX } from "react-icons/hi";
import "./Tag.css";

/**
 * Reusable Tag Component
 *
 * @param {string} variant - Tag variant: 'default', 'primary', 'success', 'warning', 'error', 'info'
 * @param {string} size - Tag size: 'small', 'medium', 'large'
 * @param {boolean} closable - Show close button
 * @param {Function} onClose - Close callback
 * @param {string} label - Tag label text (alternative to children)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Tag content
 */
export default function Tag({
  variant = "default",
  size = "medium",
  closable = false,
  onClose,
  label,
  className = "",
  children,
  ...props
}) {
  // Support both label prop and children for flexibility
  const content = label || children;
  // If onClose is provided, automatically make it closable
  const isClosable = closable || (onClose !== undefined);

  return (
    <span className={`tag tag-${variant} tag-${size} ${className}`} {...props}>
      {content}
      {isClosable && onClose && (
        <button className="tag-close" onClick={onClose} aria-label="Remove tag">
          <HiX />
        </button>
      )}
    </span>
  );
}
