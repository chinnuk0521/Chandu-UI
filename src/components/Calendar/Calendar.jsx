/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Calendar
 */

import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "../DateRangePicker/DateRangePicker.css";
import "./Calendar.css";

/**
 * Reusable Calendar Component
 *
 * @param {Date} value - Selected date
 * @param {Function} onChange - Callback when date is selected
 * @param {Date} minDate - Minimum selectable date
 * @param {Date} maxDate - Maximum selectable date
 * @param {string} className - Additional CSS classes
 */
export default function Calendar({
  value = null,
  onChange,
  minDate = null,
  maxDate = null,
  className = "",
  ...props
}) {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value);

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

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day, monthDate = currentDate) => {
    const newDate = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      day
    );
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isToday = (day, monthDate) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      monthDate.getMonth() === today.getMonth() &&
      monthDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day, monthDate) => {
    if (!selectedDate) return false;
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    return (
      date.getTime() ===
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ).getTime()
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
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
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
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
            const isTodayDate = isToday(day, currentDate);
            const isSelectedDate = isSelected(day, currentDate);

            return (
              <button
                key={index}
                className={`date-range-calendar-day ${day === null ? "empty" : ""} ${isTodayDate ? "today" : ""} ${isSelectedDate ? "start" : ""}`}
                onClick={() => day && handleDateClick(day)}
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

  return (
    <div className={`calendar ${className}`} {...props}>
        {renderCalendar()}
      </div>);
}
