/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Drawer
 */

import React, { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import "./Drawer.css";

/**
 * Reusable Drawer Component
 */
export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  size = "medium",
  className = "",
  ...props
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <a 
        href="/docs?component=Drawer" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Drawer";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '0.25rem', margin: '1rem 0' }}
      >
        Check Documentation
      </a>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div
        className={`drawer drawer-${position} drawer-${size} ${className}`}
        {...props}
      >
        {(title || onClose) && (
          <div className="drawer-header">
            {title && <h2 className="drawer-title">{title}</h2>}
            {onClose && (
              <button
                className="drawer-close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                <HiXMark />
              </button>
            )}
          </div>
        )}
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
}
