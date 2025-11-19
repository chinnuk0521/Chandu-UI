/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Divider
 */

import React from "react";
import "./Divider.css";

/**
 * Reusable Divider Component
 */
export default function Divider({
  orientation = "horizontal",
  text,
  className = "",
  ...props
}) {
  return (
    <div className={`divider divider-${orientation} ${className}`} {...props}>
      {text && orientation === "horizontal" && (
        <span className="divider-text">{text}</span>
      )}
    </div>);
}
