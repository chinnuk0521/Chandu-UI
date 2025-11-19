/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Select
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { HiChevronDown, HiCheck } from "react-icons/hi";
import "./Select.css";

/**
 * Reusable Select Component
 *
 * @param {Array} options - Select options
 * @param {string} value - Selected value
 * @param {Function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} disabled - Disable select
 * @param {string} className - Additional CSS classes
 */
export default function Select({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option...",
  disabled = false,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const selectRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (isOpen && triggerRef.current) {
      const width = triggerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [isOpen]);

  // Normalize options to handle both string arrays and object arrays
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return (
    <>
      <a 
        href="/docs?component=Select" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Select";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        className={`select ${disabled ? "disabled" : ""} ${isOpen ? "open" : ""} ${className}`}
        ref={selectRef}
        style={{ position: "relative", width: "100%" }}
        {...props}
      >
        <div
          ref={triggerRef}
          className="select-trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span
            className={selectedOption ? "select-value" : "select-placeholder"}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <HiChevronDown className={`select-icon ${isOpen ? "open" : ""}`} />
        </div>
        {isOpen && !disabled && (
          <div
            className="select-dropdown"
          style={{ 
            position: "absolute",
            left: 0,
            width: dropdownWidth ? `${dropdownWidth}px` : "100%",
            minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
            top: "calc(100% + 0.5rem)"
          }}
        >
          {normalizedOptions.map((option) => (
                  <div
                    key={option.value}
              className={`select-option ${value === option.value ? "selected" : ""}`}
                    onClick={() => handleSelect(option)}
                  >
                    <span>{option.label}</span>
              {value === option.value && <HiCheck className="select-check" />}
                  </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
