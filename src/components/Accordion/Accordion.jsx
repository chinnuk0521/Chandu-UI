import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import './Accordion.css';

/**
 * Reusable Accordion Component
 */
export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
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
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openItems.has(index) ? 'open' : ''}`}
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.has(index)}
          >
            <span className="accordion-title">{item.title}</span>
            <HiChevronDown className={`accordion-icon ${openItems.has(index) ? 'open' : ''}`} />
          </button>
          {openItems.has(index) && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

