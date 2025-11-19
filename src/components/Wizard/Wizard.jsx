/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Wizard
 */

import React from "react";
import { HiCheck, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "./Wizard.css";

/**
 * Reusable Wizard Component
 *
 * @param {Array} steps - Wizard steps
 * @param {number} currentStep - Current step index
 * @param {number} activeStep - Active step index (alternative to currentStep)
 * @param {Function} onStepChange - Step change handler
 * @param {boolean} showNavigation - Show Previous/Next buttons (default: true)
 * @param {string} className - Additional CSS classes
 */
export default function Wizard({
  steps = [],
  currentStep = 0,
  activeStep,
  onStepChange,
  showNavigation = true,
  className = "",
  ...props
}) {
  // Support both currentStep and activeStep for backward compatibility
  const activeStepIndex = activeStep !== undefined ? activeStep : currentStep;
  
  const handleStepClick = (index) => {
    if (onStepChange && index <= activeStepIndex) {
      onStepChange(index);
    }
  };

  const handlePrevious = () => {
    if (onStepChange && activeStepIndex > 0) {
      onStepChange(activeStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (onStepChange && activeStepIndex < steps.length - 1) {
      onStepChange(activeStepIndex + 1);
    }
  };

  return (
    <>
      <a 
        href="/docs?component=Wizard" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Wizard";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`wizard ${className}`} {...props}>
      <div className="wizard-steps">
        {steps.map((step, index) => {
          const isCompleted = index < activeStepIndex;
          const isActive = index === activeStepIndex;
          const isDisabled = index > activeStepIndex;

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
      {steps[activeStepIndex] && (
        <>
          <div className="wizard-content">{steps[activeStepIndex].content}</div>
          {showNavigation && (
            <div className="wizard-navigation">
              <button
                className="wizard-button wizard-button-previous"
                onClick={handlePrevious}
                disabled={activeStepIndex === 0}
                type="button"
              >
                <HiChevronLeft />
                Previous
              </button>
              <button
                className="wizard-button wizard-button-next"
                onClick={handleNext}
                disabled={activeStepIndex === steps.length - 1}
                type="button"
              >
                Next
                <HiChevronRight />
              </button>
            </div>
          )}
        </>
      )}
      </div>
    </>
  );
}
