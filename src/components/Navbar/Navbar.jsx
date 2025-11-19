/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Navbar
 */

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

/**
 * Reusable Navbar Component
 *
 * @param {Array} items - Navigation items
 * @param {string} logo - Logo text or element
 * @param {Function} onItemClick - Item click handler
 * @param {string} className - Additional CSS classes
 */
export default function Navbar({
  items = [],
  logo,
  onItemClick,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setIsOpen(false);
    if (onItemClick) onItemClick(item);
  };

  return (
    <>
      <a 
        href="/docs?component=Navbar" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Navbar";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <nav className={`navbar ${className}`} {...props}>
      <div className="navbar-container">
        {logo && <div className="navbar-logo">{logo}</div>}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {items.map((item, index) => (
            <li key={index} className="navbar-item">
              <a
                href={item.href}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      </nav>
    </>
  );
}
