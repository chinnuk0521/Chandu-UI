import React, { useState, useRef, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi2";
import "./Menu.css";

/**
 * Reusable Menu Component
 */
export default function Menu({
  items = [],
  trigger,
  position = "bottom-left",
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleItemClick = (item) => {
    if (!item.disabled) {
      item.onClick?.();
      setIsOpen(false);
    }
  };

  return (
    <div className={`menu-wrapper ${className}`} ref={containerRef} {...props}>
      <div className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`menu menu-${position}`}>
          {items.map((item, index) => {
            // Handle divider items
            if (item.type === "divider" || item.divider) {
              return <div key={index} className="menu-divider" />;
            }
            
            return (
              <div
                key={index}
                className={`menu-item ${item.disabled ? "disabled" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                <span className="menu-label">{item.label || ""}</span>
                {item.children && <HiChevronRight className="menu-arrow" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
