import React, { useState } from "react";
import { HiClock } from "react-icons/hi";
import "./TimePicker.css";

/**
 * Reusable TimePicker Component
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

  return (
    <div className={`time-picker ${className}`} {...props}>
      <div className="time-picker-trigger" onClick={() => setIsOpen(!isOpen)}>
        <HiClock className="time-picker-icon" />
        <span className="time-picker-text">{value || "Select time"}</span>
      </div>
      {isOpen && (
        <div className="time-picker-dropdown">
          <div className="time-picker-selectors">
            <div className="time-picker-selector">
              <label>Hours</label>
              <select
                value={hours}
                onChange={(e) => handleTimeChange(e.target.value, minutes)}
                className="time-picker-select"
              >
                {generateOptions(24).map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
            <span className="time-picker-separator">:</span>
            <div className="time-picker-selector">
              <label>Minutes</label>
              <select
                value={minutes}
                onChange={(e) => handleTimeChange(hours, e.target.value)}
                className="time-picker-select"
              >
                {generateOptions(60).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
