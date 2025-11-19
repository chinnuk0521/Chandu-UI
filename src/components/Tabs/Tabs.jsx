/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Tabs
 */

import React, { useState } from "react";
import "./Tabs.css";

/**
 * Reusable Tabs Component
 *
 * @param {Array} tabs - Array of tab objects { label, content, disabled }
 * @param {number} defaultTab - Default active tab index
 * @param {Function} onChange - Tab change handler
 * @param {string} className - Additional CSS classes
 */
export default function Tabs({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = "",
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    if (tabs[index]?.disabled) return;
    setActiveTab(index);
    onChange?.(index, tabs[index]);
  };

  return (
    <div className={`tabs ${className}`}>
      <a 
        href="/docs?component=Tabs" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Tabs";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
      </a>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""} ${tab.disabled ? "disabled" : ""}`}
            onClick={() => handleTabClick(index)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeTab]?.content}</div>
    </div>
  );
}
