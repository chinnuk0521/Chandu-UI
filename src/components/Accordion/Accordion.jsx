import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import "./Accordion.css";

/**
 * Reusable Accordion Component
 *
 * @param {Array} items - Array of accordion items with title and content
 * @param {boolean} allowMultiple - Allow multiple items to be open at once
 * @param {Array} defaultOpen - Array of indices that should be open by default
 * @param {string} className - Additional CSS classes
 */
export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = "",
  ...props
}) {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (allowMultiple) {
          newSet.add(index);
        } else {
          return new Set([index]);
        }
      }
      return newSet;
    });
  };

  return (
    <div className={`accordion ${className}`} {...props}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${isOpen ? "open" : ""}`}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              type="button"
            >
              <span className="accordion-title">{item.title}</span>
              <HiChevronDown
                className={`accordion-icon ${isOpen ? "open" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
