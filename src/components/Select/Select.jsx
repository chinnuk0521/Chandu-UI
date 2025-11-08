import React, { useState, useRef, useEffect } from "react";
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
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`select ${disabled ? "disabled" : ""} ${isOpen ? "open" : ""} ${className}`}
      ref={selectRef}
      {...props}
    >
      <div
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
        <div className="select-dropdown">
          {options.map((option) => (
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
  );
}
