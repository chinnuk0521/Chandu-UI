import React from "react";
import "./List.css";

/**
 * Reusable List Component
 *
 * @param {Array} items - Array of list items { primary, secondary, icon, action }
 * @param {boolean} dense - Dense spacing
 * @param {boolean} dividers - Show dividers
 * @param {string} variant - List variant: 'default', 'outlined', 'elevated'
 * @param {string} className - Additional CSS classes
 * @param {Function} onItemClick - Callback when item is clicked
 */
export default function List({
  items = [],
  dense = false,
  dividers = true,
  variant = "default",
  className = "",
  onItemClick,
  ...props
}) {
  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    } else if (item.onClick) {
      item.onClick(item, index);
    }
  };

  return (
    <ul
      className={`list list-${variant} ${dense ? "list-dense" : ""} ${dividers ? "list-dividers" : ""} ${className}`}
      {...props}
    >
      {items.length > 0 ? (
        items.map((item, index) => (
          <li
            key={item.id || index}
            className="list-item"
            onClick={() => handleItemClick(item, index)}
            style={item.disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
          >
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
        ))
      ) : (
        <li className="list-item" style={{ cursor: "default", justifyContent: "center", padding: "2rem" }}>
          <div className="list-item-content" style={{ textAlign: "center" }}>
            <div className="list-item-secondary">No items to display</div>
          </div>
        </li>
      )}
    </ul>
  );
}
