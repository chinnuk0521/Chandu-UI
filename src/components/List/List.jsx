import React from "react";
import "./List.css";

/**
 * Reusable List Component
 *
 * @param {Array} items - Array of list items { primary, secondary, icon, action }
 * @param {boolean} dense - Dense spacing
 * @param {boolean} dividers - Show dividers
 * @param {string} className - Additional CSS classes
 */
export default function List({
  items = [],
  dense = false,
  dividers = true,
  className = "",
  ...props
}) {
  return (
    <ul
      className={`list ${dense ? "list-dense" : ""} ${dividers ? "list-dividers" : ""} ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item.icon && (
            <div className="list-item-icon">
              {typeof item.icon === "string" ? (
                <span>{item.icon}</span>
              ) : (
                item.icon
              )}
            </div>
          )}
          <div className="list-item-content">
            {item.primary && (
              <div className="list-item-primary">{item.primary}</div>
            )}
            {item.secondary && (
              <div className="list-item-secondary">{item.secondary}</div>
            )}
          </div>
          {item.action && <div className="list-item-action">{item.action}</div>}
        </li>
      ))}
    </ul>
  );
}
