import React, { useState } from "react";
import { HiCalendar } from "react-icons/hi";
import "./DateRangePicker.css";

/**
 * Reusable DateRangePicker Component
 *
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @param {Function} onChange - Change handler
 * @param {string} className - Additional CSS classes
 */
export default function DateRangePicker({
  startDate = null,
  endDate = null,
  onChange,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleStartDateChange = (e) => {
    const date = new Date(e.target.value);
    setTempStartDate(date);
    if (onChange) {
      onChange({ startDate: date, endDate: tempEndDate });
    }
  };

  const handleEndDateChange = (e) => {
    const date = new Date(e.target.value);
    setTempEndDate(date);
    if (onChange) {
      onChange({ startDate: tempStartDate, endDate: date });
    }
  };

  return (
    <div className={`date-range-picker ${className}`} {...props}>
      <div
        className="date-range-picker-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiCalendar className="date-range-picker-icon" />
        <span className="date-range-picker-text">
          {startDate && endDate
            ? `${formatDate(startDate)} - ${formatDate(endDate)}`
            : "Select date range"}
        </span>
      </div>
      {isOpen && (
        <div className="date-range-picker-dropdown">
          <div className="date-range-picker-inputs">
            <div className="date-range-picker-input-group">
              <label>Start Date</label>
              <input
                type="date"
                value={
                  tempStartDate ? tempStartDate.toISOString().split("T")[0] : ""
                }
                onChange={handleStartDateChange}
                className="date-range-picker-input"
              />
            </div>
            <div className="date-range-picker-input-group">
              <label>End Date</label>
              <input
                type="date"
                value={
                  tempEndDate ? tempEndDate.toISOString().split("T")[0] : ""
                }
                onChange={handleEndDateChange}
                min={
                  tempStartDate ? tempStartDate.toISOString().split("T")[0] : ""
                }
                className="date-range-picker-input"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
