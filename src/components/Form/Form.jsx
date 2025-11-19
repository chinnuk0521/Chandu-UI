/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Form
 */

import React from "react";
import "./Form.css";

/**
 * Reusable Form Component
 *
 * @param {Function} onSubmit - Form submit handler
 * @param {React.ReactNode} children - Form content
 * @param {string} className - Additional CSS classes
 */
export default function Form({ onSubmit, children, className = "", ...props }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (<form className={`form ${className}`} onSubmit={handleSubmit} {...props}>
        {children}
      </form>);
}
