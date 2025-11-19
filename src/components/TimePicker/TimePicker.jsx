/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## TimePicker
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { HiClock } from "react-icons/hi";
import "./TimePicker.css";

/**
 * Reusable TimePicker Component with Modern UI
 *
 * @param {string} value - Time value (HH:MM format)
 * @param {Function} onChange - Change handler
 * @param {string} className - Additional CSS classes
 */
export default function TimePicker({
  value = "",
  onChange,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);
  const hoursScrollRef = useRef(null);
  const minutesScrollRef = useRef(null);
  const [hours, setHours] = useState(value ? value.split(":")[0] : "12");
  const [minutes, setMinutes] = useState(value ? value.split(":")[1] : "00");

  const handleTimeChange = (newHours, newMinutes) => {
    setHours(newHours);
    setMinutes(newMinutes);
    const timeString = `${newHours.padStart(2, "0")}:${newMinutes.padStart(2, "0")}`;
    if (onChange) {
      onChange(timeString);
    }
  };

  const generateOptions = (max) => {
    return Array.from({ length: max }, (_, i) => i.toString().padStart(2, "0"));
  };

  const hourOptions = generateOptions(24);
  const minuteOptions = generateOptions(60);

  // Sync state when value prop changes
  useEffect(() => {
    if (value) {
      const [h, m] = value.split(":");
      setHours(h || "12");
      setMinutes(m || "00");
    }
  }, [value]);

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

  // Scroll to selected values when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (hoursScrollRef.current) {
          const selectedHour = hoursScrollRef.current.querySelector(
            `.time-picker-option-modern.selected`
          );
          if (selectedHour) {
            selectedHour.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        }
        if (minutesScrollRef.current) {
          const selectedMinute = minutesScrollRef.current.querySelector(
            `.time-picker-option-modern.selected`
          );
          if (selectedMinute) {
            selectedMinute.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        }
      }, 100);
    }
  }, [isOpen, hours, minutes]);

  const handleScroll = (type, value) => {
    if (type === "hours") {
      handleTimeChange(value, minutes);
    } else {
      handleTimeChange(hours, value);
    }
  };

  return (
    <div className={`time-picker ${className}`}
        ref={containerRef}
        style={{ position: "relative", width: "100%" }}
        {...props}
      >
      <div className="time-picker-trigger" onClick={() => setIsOpen(!isOpen)}>
        <HiClock className="time-picker-icon" />
        <span className="time-picker-text">{value || "Select time"}</span>
      </div>
      {isOpen && (
        <div
          className="time-picker-dropdown"
          style={{
            position: "absolute",
            left: 0,
            width: dropdownWidth ? `${dropdownWidth}px` : "100%",
            minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
            top: "calc(100% + 0.5rem)",
            transform: "translateX(0)",
          }}
        >
          <div className="time-picker-modern">
            <div className="time-picker-selector-modern">
              <label className="time-picker-label-modern">Hours</label>
              <div
                className="time-picker-scroll-container"
                ref={hoursScrollRef}
              >
                {hourOptions.map((h) => (
                  <button
                    key={h}
                    className={`time-picker-option-modern ${hours === h ? "selected" : ""}`}
                    onClick={() => handleScroll("hours", h)}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
            <div className="time-picker-separator-modern">:</div>
            <div className="time-picker-selector-modern">
              <label className="time-picker-label-modern">Minutes</label>
              <div
                className="time-picker-scroll-container"
                ref={minutesScrollRef}
              >
                {minuteOptions.map((m) => (
                  <button
                    key={m}
                    className={`time-picker-option-modern ${minutes === m ? "selected" : ""}`}
                    onClick={() => handleScroll("minutes", m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>);
}
