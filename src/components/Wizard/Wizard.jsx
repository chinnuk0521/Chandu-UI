import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import "./Wizard.css";

/**
 * Reusable Wizard Component
 *
 * @param {Array} steps - Wizard steps
 * @param {number} currentStep - Current step index
 * @param {Function} onStepChange - Step change handler
 * @param {string} className - Additional CSS classes
 */
export default function Wizard({
  steps = [],
  currentStep = 0,
  onStepChange,
  className = "",
  ...props
}) {
  const handleStepClick = (index) => {
    if (onStepChange && index <= currentStep) {
      onStepChange(index);
    }
  };

  return (
    <div className={`wizard ${className}`} {...props}>
      <div className="wizard-steps">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isDisabled = index > currentStep;

          return (
            <div
              key={index}
              className={`wizard-step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""} ${isDisabled ? "disabled" : ""}`}
              onClick={() => handleStepClick(index)}
            >
              <div className="wizard-step-indicator">
                {isCompleted ? (
                  <HiCheck className="wizard-step-check" />
                ) : (
                  <span className="wizard-step-number">{index + 1}</span>
                )}
              </div>
              <div className="wizard-step-content">
                <div className="wizard-step-title">{step.title}</div>
                {step.description && (
                  <div className="wizard-step-description">
                    {step.description}
                  </div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="wizard-step-connector" />
              )}
            </div>
          );
        })}
      </div>
      {steps[currentStep] && (
        <div className="wizard-content">{steps[currentStep].content}</div>
      )}
    </div>
  );
}
