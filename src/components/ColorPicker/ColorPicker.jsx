/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## ColorPicker
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./ColorPicker.css";

/**
 * Reusable ColorPicker Component
 *
 * @param {string} value - Color value (hex)
 * @param {Function} onChange - Change handler
 * @param {Array} presetColors - Preset color options
 * @param {string} className - Additional CSS classes
 */
export default function ColorPicker({
  value = "#000000",
  onChange,
  presetColors = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
  ],
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);

  const handleColorChange = (color) => {
    if (onChange) {
      onChange(color);
    }
  };

  // Close dropdown when clicking outside
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Calculate dropdown width to prevent layout shifts
  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [isOpen]);

  return (
    <div className={`color-picker ${className}`}
        ref={containerRef}
        style={{ position: "relative", width: "100%" }}
        {...props}
      >
      <div
        className="color-picker-trigger"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: value }}
      >
        <span className="color-picker-value">{value}</span>
      </div>
      {isOpen && (
        <div
          className="color-picker-dropdown"
          style={{
            position: "absolute",
            left: 0,
            width: dropdownWidth ? `${dropdownWidth}px` : "100%",
            minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
            top: "calc(100% + 0.5rem)",
            transform: "translateX(0)",
          }}
        >
          <div className="color-picker-presets">
            {presetColors.map((color, index) => (
              <button
                key={index}
                className={`color-picker-preset ${value === color ? "active" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                title={color}
              />
            ))}
          </div>
          <div className="color-picker-input-group">
            <label>Custom Color</label>
            <input
              type="color"
              value={value}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker-input"
            />
            <input
              type="text"
              value={value}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker-text-input"
              placeholder="#000000"
            />
          </div>
        </div>
      )}
      </div>);
}
