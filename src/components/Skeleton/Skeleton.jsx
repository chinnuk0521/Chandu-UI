import React from "react";
import "./Skeleton.css";

/**
 * Reusable Skeleton Loading Component
 */
export default function Skeleton({
  variant = "text",
  width,
  height,
  className = "",
  ...props
}) {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`skeleton skeleton-${variant} ${className}`}
      style={style}
      {...props}
    />
  );
}
