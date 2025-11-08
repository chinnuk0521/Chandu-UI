import React from "react";
import "./Timeline.css";

/**
 * Reusable Timeline Component
 *
 * @param {Array} items - Array of timeline items { title, description, date, icon }
 * @param {string} orientation - 'vertical' or 'horizontal'
 * @param {string} className - Additional CSS classes
 */
export default function Timeline({
  items = [],
  orientation = "vertical",
  className = "",
  ...props
}) {
  return (
    <div className={`timeline timeline-${orientation} ${className}`} {...props}>
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker">
            {item.icon || <div className="timeline-dot"></div>}
          </div>
          <div className="timeline-content">
            {item.date && <div className="timeline-date">{item.date}</div>}
            <h3 className="timeline-title">{item.title}</h3>
            {item.description && (
              <p className="timeline-description">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
