import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
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

  const handleDateClick = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
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

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

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
    <div className={`calendar ${className}`} {...props}>
      <div className="calendar-header">
        <button className="calendar-nav" onClick={goToPreviousMonth}>
          <HiChevronLeft />
        </button>
        <h3 className="calendar-month">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button className="calendar-nav" onClick={goToNextMonth}>
          <HiChevronRight />
        </button>
      </div>

      <div className="calendar-weekdays">
        {dayNames.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => (
          <button
            key={index}
            className={`calendar-day ${day === null ? "empty" : ""} ${isToday(day) ? "today" : ""} ${isSelected(day) ? "selected" : ""}`}
            onClick={() => day && handleDateClick(day)}
            disabled={day === null}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
