import React from "react";
import "./Avatar.css";

/**
 * Reusable Avatar Component
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} name - Name for initials fallback
 * @param {string} size - Avatar size: 'small', 'medium', 'large'
 * @param {string} className - Additional CSS classes
 */
export default function Avatar({
  src,
  alt,
  name,
  size = "medium",
  className = "",
  ...props
}) {
  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className={`avatar avatar-${size} ${className}`} {...props}>
      {src ? (
        <img src={src} alt={alt || name} className="avatar-image" />
      ) : (
        <div className="avatar-initials">{getInitials(name)}</div>
      )}
    </div>
  );
}
