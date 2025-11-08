import React, { useEffect } from "react";
import "./Modal.css";

/**
 * Reusable Modal Component
 *
 * @param {boolean} isOpen - Modal open state
 * @param {Function} onClose - Close handler
 * @param {string} title - Modal title
 * @param {React.ReactNode} children - Modal content
 * @param {React.ReactNode} footer - Modal footer
 * @param {string} size - Modal size: 'small', 'medium', 'large', 'full'
 * @param {string} className - Additional CSS classes
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "medium",
  className = "",
}) {
  useEffect(() => {
    if (isOpen) {
      if (document && document.body) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (document && document.body) {
        document.body.style.overflow = "";
      }
    }

    return () => {
      if (document && document.body) {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        if (onClose && typeof onClose === "function") {
          onClose();
        }
      }
    };

    if (document) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      if (document) {
        document.removeEventListener("keydown", handleEscape);
      }
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (onClose && typeof onClose === "function") {
      onClose();
    }
  };

  const handleModalClick = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`modal modal-${size} ${className}`}
        onClick={handleModalClick}
      >
        {(title || onClose) && (
          <div className="modal-header">
            {title && <h2 className="modal-title">{title}</h2>}
            {onClose && (
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className="modal-content">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
