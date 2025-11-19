/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Rating
 */

import React, { useState } from "react";
import { HiStar } from "react-icons/hi2";
import "./Rating.css";

/**
 * Reusable Rating Component
 */
export default function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = "medium",
  className = "",
  ...props
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (rating) => {
    if (!readOnly && onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating) => {
    if (!readOnly) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(0);
    }
  };

  const displayValue = hoverValue || value;

  return (
    <div className={`rating rating-${size} ${readOnly ? "readonly" : ""} ${className}`}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;
        const isFilled = rating <= displayValue;
        const isHalf = rating - 0.5 <= displayValue && rating > displayValue;

        return (
          <button
            key={index}
            type="button"
            className={`rating-star ${isFilled ? "filled" : ""} ${isHalf ? "half" : ""}`}
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter(rating)}
            disabled={readOnly}
            aria-label={`Rate ${rating} out of ${max}`}
          >
            <HiStar />
          </button>
        );
      })}
      </div>);
}
