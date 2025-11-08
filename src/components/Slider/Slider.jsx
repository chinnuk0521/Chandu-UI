import React, { useState } from "react";
import "./Slider.css";

/**
 * Reusable Slider Component
 */
export default function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  showValue = true,
  label,
  className = "",
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className={`slider-wrapper ${className}`} {...props}>
      {label && (
        <div className="slider-label">
          <span>{label}</span>
          {showValue && <span className="slider-value">{currentValue}</span>}
        </div>
      )}
      <div className="slider-container">
        <input
          type="range"
          className="slider-input"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          style={{
            "--percentage": `${percentage}%`,
          }}
        />
        {!label && showValue && (
          <div className="slider-value-display">{currentValue}</div>
        )}
      </div>
    </div>
  );
}
