import React, { useState } from "react";
import "./Avatar.css";

/**
 * Reusable Avatar Component
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} name - Name for initials fallback
 * @param {string} size - Avatar size: 'small', 'medium', 'large'
 * @param {string} status - Status indicator: 'online', 'offline', 'away', 'busy'
 * @param {number} badge - Badge count to display
 * @param {string} color - Color variant for initials: 'primary', 'success', 'warning', 'error', 'info'
 * @param {string} className - Additional CSS classes
 */
export default function Avatar({
  src,
  alt,
  name,
  size = "medium",
  status,
  badge,
  color,
  className = "",
  ...props
}) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Generate color based on name if no color specified
  const getColorClass = () => {
    if (color) return `avatar-color-${color}`;
    if (!name) return "avatar-color-primary";
    
    // Generate consistent color based on name
    const colors = ["primary", "success", "warning", "error", "info"];
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `avatar-color-${colors[hash % colors.length]}`;
  };

  const showImage = src && !imageError;

  return (
    <div 
      className={`avatar avatar-${size} ${getColorClass()} ${className}`} 
      {...props}
    >
      {showImage ? (
        <img 
          src={src} 
          alt={alt || name || "Avatar"} 
          className="avatar-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="avatar-initials">{getInitials(name)}</div>
      )}
      
      {status && (
        <span className={`avatar-status ${status}`} aria-label={`Status: ${status}`} />
      )}
      
      {badge !== undefined && badge > 0 && (
        <span className="avatar-badge" aria-label={`${badge} notifications`}>
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </div>
  );
}
