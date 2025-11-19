/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## DateRangePicker
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { HiCalendar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./DateRangePicker.css";

/**
 * Reusable DateRangePicker Component with Modern Calendar UI
 *
 * @param {Date|Object} startDate - Start date or value object with startDate/endDate
 * @param {Date} endDate - End date
 * @param {Function} onChange - Change handler
 * @param {Object} value - Value object with startDate and endDate
 * @param {string} className - Additional CSS classes
 */
export default function DateRangePicker({
  startDate: startDateProp = null,
  endDate: endDateProp = null,
  onChange,
  value,
  className = "",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);

  // Handle both prop styles: value object or separate startDate/endDate props
  const startDate = value?.startDate || startDateProp;
  const endDate = value?.endDate || endDateProp;

  const [currentMonth, setCurrentMonth] = useState(
    startDate || new Date()
  );
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);
  const [selectingStart, setSelectingStart] = useState(true);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sync state when value prop changes
  useEffect(() => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    if (startDate) {
      setCurrentMonth(new Date(startDate));
    }
  }, [startDate, endDate]);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day, monthDate) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      monthDate.getMonth() === today.getMonth() &&
      monthDate.getFullYear() === today.getFullYear()
    );
  };

  const isInRange = (day, monthDate) => {
    if (!tempStartDate || !tempEndDate) return false;
    const date = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );
    return date >= tempStartDate && date <= tempEndDate;
  };

  const isStartDate = (day, monthDate) => {
    if (!tempStartDate) return false;
    const date = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );
    return (
      date.getTime() ===
      new Date(
        tempStartDate.getFullYear(),
        tempStartDate.getMonth(),
        tempStartDate.getDate()
      ).getTime()
    );
  };

  const isEndDate = (day, monthDate) => {
    if (!tempEndDate) return false;
    const date = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );
    return (
      date.getTime() ===
      new Date(
        tempEndDate.getFullYear(),
        tempEndDate.getMonth(),
        tempEndDate.getDate()
      ).getTime()
    );
  };

  const handleDateClick = (day, monthDate) => {
    const clickedDate = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );

    if (selectingStart || !tempStartDate) {
      setTempStartDate(clickedDate);
      setTempEndDate(null);
      setSelectingStart(false);
    } else {
      if (clickedDate < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(clickedDate);
      } else {
        setTempEndDate(clickedDate);
      }
      setSelectingStart(true);
      if (onChange) {
        onChange({
          startDate: clickedDate < tempStartDate ? clickedDate : tempStartDate,
          endDate: clickedDate < tempStartDate ? tempStartDate : clickedDate,
        });
      }
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <div className="date-range-calendar">
        <div className="date-range-calendar-header">
          <button
            className="date-range-calendar-nav"
            onClick={goToPreviousMonth}
          >
            <HiChevronLeft />
          </button>
          <h3 className="date-range-calendar-month">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button
            className="date-range-calendar-nav"
            onClick={goToNextMonth}
          >
            <HiChevronRight />
          </button>
        </div>

        <div className="date-range-calendar-weekdays">
          {dayNames.map((day) => (
            <div key={day} className="date-range-calendar-weekday">
              {day}
            </div>
          ))}
        </div>

        <div className="date-range-calendar-days">
          {days.map((day, index) => {
            const isRange = isInRange(day, currentMonth);
            const isStart = isStartDate(day, currentMonth);
            const isEnd = isEndDate(day, currentMonth);
            const isTodayDate = isToday(day, currentMonth);

            return (
              <button
                key={index}
                className={`date-range-calendar-day ${day === null ? "empty" : ""} ${isTodayDate ? "today" : ""} ${isStart ? "start" : ""} ${isEnd ? "end" : ""} ${isRange ? "in-range" : ""}`}
                onClick={() => day && handleDateClick(day, currentMonth)}
                disabled={day === null}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
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
      // Use a fixed width for the dropdown to accommodate one calendar
      setDropdownWidth(360);
    }
  }, [isOpen]);

  return (
    <>
      <a 
        href="/docs?component=DateRangePicker" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=DateRangePicker";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        className={`date-range-picker ${className}`}
        ref={containerRef}
      style={{ position: "relative", width: "100%" }}
      {...props}
    >
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
        <div
          className="date-range-picker-dropdown"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "calc(100% + 0.5rem)",
            minWidth: "360px",
            width: "max-content",
            maxWidth: "90vw",
          }}
        >
          <div className="date-range-picker-calendars">
            {renderCalendar()}
          </div>
          {tempStartDate && tempEndDate && (
            <div className="date-range-picker-actions">
              <button
                className="date-range-picker-clear"
                onClick={() => {
                  setTempStartDate(null);
                  setTempEndDate(null);
                  setSelectingStart(true);
                  if (onChange) onChange({ startDate: null, endDate: null });
                }}
              >
                Clear
              </button>
            </div>
          )}
        </div>
      )}
      </div>
    </>
  );
}
