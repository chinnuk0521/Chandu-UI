/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Stepper
 */

import React from "react";
import { HiCheck } from "react-icons/hi2";
import "./Stepper.css";

/**
 * Reusable Stepper Component
 */
export default function Stepper({
  steps = [],
  currentStep = 0,
  activeStep,
  orientation = "horizontal",
  className = "",
  ...props
}) {
  // Support both currentStep and activeStep for backward compatibility
  const activeStepIndex = activeStep !== undefined ? activeStep : currentStep;
  
  return (
    <div className={`stepper stepper-${orientation} ${className}`} {...props}>
      {steps.map((step, index) => {
        const isCompleted = index < activeStepIndex;
        const isActive = index === activeStepIndex;
        const isPending = index > activeStepIndex;

        return (
    <div key={index} className="stepper-step">
            <div className="stepper-connector">
              {orientation === "horizontal" && index > 0 && (
                <div
                  className={`stepper-line ${isCompleted ? "completed" : ""}`}
                ></div>
              )}
            </div>
            <div
              className={`stepper-indicator ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""} ${isPending ? "pending" : ""}`}
            >
              {isCompleted ? (
                <HiCheck className="stepper-check-icon" />
              ) : (
                <span className="stepper-number">{index + 1}</span>
              )}
            </div>
            {step.label && (
              <div className="stepper-label">
                <span
                  className={`stepper-label-text ${isActive ? "active" : ""}`}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span className="stepper-description">
                    {step.description}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
      </div>);
}
