import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi2";
import "./Dropdown.css";

/**
 * Reusable Dropdown Component
 */
export default function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  disabled = false,
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`dropdown-container ${className}`} ref={containerRef}>
      <button
        className={`dropdown-button ${isOpen ? "open" : ""} ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        {...props}
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <HiChevronDown className={`dropdown-icon ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${value === option.value ? "selected" : ""}`}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
