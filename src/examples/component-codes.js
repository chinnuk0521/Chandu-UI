// Actual component source code for the code viewer

export const COMPONENT_CODES = {
  Button: {
    jsx: `import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * 
 * @param {string} variant - Button variant: 'primary', 'secondary', 'outline', 'text'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {boolean} disabled - Disable button
 * @param {boolean} loading - Show loading state
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 * @param {Function} onClick - Click handler
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 */
export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={\`btn btn-\${variant} btn-\${size} \${loading ? 'loading' : ''} \${className}\`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      <span className={loading ? 'btn-content-loading' : ''}>{children}</span>
    </button>
  );
}`,
    css: `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-decoration: none;
  position: relative;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.btn-primary {
  background: #00338d;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  background: #0044b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
}

.btn-secondary {
  background: #6b7280;
  color: #ffffff;
}

.btn-secondary:hover:not(:disabled) {
  background: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}

.btn-outline {
  background: transparent;
  color: #00338d;
  border: 2px solid #00338d;
}

.btn-outline:hover:not(:disabled) {
  background: #00338d;
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-text {
  background: transparent;
  color: #00338d;
  padding: 0.5rem 1rem;
}

.btn-text:hover:not(:disabled) {
  background: #f3f4f6;
}

/* Sizes */
.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Loading state */
.btn.loading {
  pointer-events: none;
}

.btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.btn-content-loading {
  opacity: 0.7;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`
  },
  Card: {
    jsx: `import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * 
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {React.ReactNode} image - Card image
 * @param {React.ReactNode} children - Card content
 * @param {React.ReactNode} footer - Card footer
 * @param {Function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
export default function Card({
  title,
  subtitle,
  image,
  children,
  footer,
  onClick,
  className = '',
  ...props
}) {
  return (
    <div
      className={\`card \${onClick ? 'card-clickable' : ''} \${className}\`}
      onClick={onClick}
      {...props}
    >
      {image && <div className="card-image">{image}</div>}
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      {children && <div className="card-body">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}`,
    css: `.card {
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #d1d5db;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #00338d;
}

.card-clickable {
  cursor: pointer;
}

.card-clickable:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-header {
  padding: 1.5rem 1.5rem 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #00338d;
  margin: 0 0 0.5rem;
}

.card-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.card-body {
  padding: 1rem 1.5rem;
  color: #374151;
  line-height: 1.6;
}

.card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #d1d5db;
  background: #e8e8e8;
}`
  },
  Input: {
    jsx: `import React from 'react';
import './Input.css';

/**
 * Reusable Input Component
 * 
 * @param {string} label - Input label
 * @param {string} type - Input type
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {Function} onChange - Change handler
 * @param {string} error - Error message
 * @param {string} helperText - Helper text
 * @param {boolean} required - Required field
 * @param {boolean} disabled - Disable input
 * @param {string} className - Additional CSS classes
 */
export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div className={\`input-wrapper \${className}\`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={\`input \${error ? 'input-error' : ''}\`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        {...props}
      />
      {error && <span className="input-error-text">{error}</span>}
      {helperText && !error && (
        <span className="input-helper-text">{helperText}</span>
      )}
    </div>
  );
}`,
    css: `.input-wrapper {
  width: 100%;
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.required {
  color: #dc2626;
  margin-left: 0.25rem;
}

.input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: #f0f0f0;
  color: #1a1a1a;
  transition: all 0.2s ease;
  font-family: inherit;
}

.input::placeholder {
  color: #9ca3af;
}

.input:focus {
  outline: none;
  border-color: #00338d;
  background: #f5f5f5;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

.input:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.input-error {
  border-color: #dc2626;
}

.input-error:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.input-error-text {
  display: block;
  font-size: 0.875rem;
  color: #dc2626;
  margin-top: 0.25rem;
}

.input-helper-text {
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}`
  },
  Autocomplete: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import './Autocomplete.css';

/**
 * Reusable Autocomplete Component
 * 
 * @param {Array} options - Array of options to display
 * @param {Array} value - Selected values array
 * @param {Function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} allowCustom - Allow custom input
 */
export default function Autocomplete({
  options = [],
  value = [],
  onChange,
  placeholder = 'Type to search...',
  allowCustom = true,
  ...props
}) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = options.filter(
    (item) =>
      item.toLowerCase().includes(search.toLowerCase()) &&
      !value.includes(item)
  );

  const handleSelect = (item) => {
    onChange([...value, item]);
    setSearch('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleRemove = (item) => {
    onChange(value.filter((i) => i !== item));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="autocomplete-container" ref={containerRef}>
      <div className="input-area" onClick={() => inputRef.current?.focus()}>
        {value.map((item) => (
          <span key={item} className="tag">
            {item}
            <button
              type="button"
              className="tag-remove"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(item);
              }}
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ''}
        />
      </div>
      {isOpen && filtered.length > 0 && (
        <ul className="suggestions">
          {filtered.map((item, index) => (
            <li
              key={item}
              className={index === highlightedIndex ? 'highlighted' : ''}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`,
    css: `.autocomplete-container {
  width: 100%;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  position: relative;
}

.input-area {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  padding: 12px 16px;
  background: #f0f0f0;
  gap: 8px;
  transition: all 0.2s ease;
  min-height: 52px;
  position: relative;
}

.input-area:focus-within {
  border-color: #00338d;
  background: #f5f5f5;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

.input-area input {
  border: none;
  outline: none;
  flex: 1;
  min-width: 120px;
  font-size: 16px;
  padding: 6px;
  background: transparent;
  color: #1a1a1a;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #00338d;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
}

.tag-remove {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.tag-remove:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

.suggestions {
  list-style: none;
  margin-top: 8px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  max-height: 240px;
  overflow-y: auto;
  padding: 6px;
  background: #f0f0f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 100%;
  z-index: 1000;
  left: 0;
}

.suggestions li {
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  color: #374151;
}

.suggestions li:hover,
.suggestions li.highlighted {
  background: #e5e7eb;
  color: #00338d;
}`
  },
  GlobalSearch: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiMagnifyingGlass, HiXMark, HiInformationCircle } from 'react-icons/hi2';
import './GlobalSearch.css';

/**
 * Reusable Global Search Component
 */
export default function GlobalSearch({
  items = [],
  onSelect,
  placeholder = 'Search...',
  maxResults = 10,
  ...props
}) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = items
    .filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, maxResults);

  const handleSelect = (item) => {
    setSearch('');
    setIsOpen(false);
    onSelect?.(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(filtered[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="global-search-wrapper" ref={containerRef}>
      <div className="global-search-input-wrapper">
        <HiMagnifyingGlass className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          className="global-search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        {search && (
          <button
            type="button"
            className="clear-button"
            onClick={() => {
              setSearch('');
              inputRef.current?.focus();
            }}
          >
            <HiXMark />
          </button>
        )}
      </div>
      {isOpen && filtered.length > 0 && (
        <div className="global-search-results">
          {filtered.map((item, index) => (
            <div
              key={item}
              className={\`global-search-result \${index === highlightedIndex ? 'highlighted' : ''}\`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.global-search-wrapper {
  position: relative;
  width: 100%;
}

.global-search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  padding: 12px 16px;
  transition: all 0.2s ease;
}

.global-search-input-wrapper:focus-within {
  border-color: #00338d;
  background: #f5f5f5;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

.search-icon {
  font-size: 20px;
  margin-right: 12px;
  color: #6b7280;
  flex-shrink: 0;
}

.global-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #1a1a1a;
}

.clear-button {
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background: #e5e7eb;
}

.global-search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  max-height: 400px;
  overflow-y: auto;
  background: #f0f0f0;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.global-search-result {
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #374151;
}

.global-search-result:hover,
.global-search-result.highlighted {
  background: #e5e7eb;
  color: #00338d;
}`
  },
  Badge: {
    jsx: `import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 */
export default function Badge({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) {
  return (
    <span
      className={\`badge badge-\${variant} badge-\${size} \${className}\`}
      {...props}
    >
      {children}
    </span>
  );
}`,
    css: `.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 12px;
  padding: 0.25rem 0.75rem;
}

.badge-primary {
  background: #00338d;
  color: white;
}

.badge-secondary {
  background: #6b7280;
  color: white;
}

.badge-success {
  background: #10b981;
  color: white;
}

.badge-warning {
  background: #f59e0b;
  color: white;
}

.badge-error {
  background: #ef4444;
  color: white;
}

.badge-small {
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
}

.badge-medium {
  font-size: 0.875rem;
}

.badge-large {
  font-size: 1rem;
  padding: 0.375rem 1rem;
}`
  },
  Avatar: {
    jsx: `import React from 'react';
import './Avatar.css';

/**
 * Reusable Avatar Component
 */
export default function Avatar({
  name,
  image,
  size = 'medium',
  className = '',
  ...props
}) {
  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div
      className={\`avatar avatar-\${size} \${className}\`}
      {...props}
    >
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}`,
    css: `.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #00338d;
  color: white;
  font-weight: 600;
  overflow: hidden;
  border: 2px solid #e5e7eb;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-small {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.avatar-medium {
  width: 48px;
  height: 48px;
  font-size: 1rem;
}

.avatar-large {
  width: 64px;
  height: 64px;
  font-size: 1.25rem;
}`
  },
  Spinner: {
    jsx: `import React from 'react';
import './Spinner.css';

/**
 * Reusable Spinner Component
 */
export default function Spinner({
  size = 'medium',
  className = '',
  ...props
}) {
  return (
    <div
      className={\`spinner spinner-\${size} \${className}\`}
      {...props}
      aria-label="Loading"
    >
      <div className="spinner-circle"></div>
    </div>
  );
}`,
    css: `.spinner {
  display: inline-block;
  position: relative;
}

.spinner-circle {
  border: 3px solid #e5e7eb;
  border-top-color: #00338d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-small .spinner-circle {
  width: 20px;
  height: 20px;
  border-width: 2px;
}

.spinner-medium .spinner-circle {
  width: 32px;
  height: 32px;
  border-width: 3px;
}

.spinner-large .spinner-circle {
  width: 48px;
  height: 48px;
  border-width: 4px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`
  },
  Modal: {
    jsx: `import React, { useEffect } from 'react';
import './Modal.css';

/**
 * Reusable Modal Component
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  className = '',
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={\`modal modal-\${size} \${className}\`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || onClose) && (
          <div className="modal-header">
            {title && <h2 className="modal-title">{title}</h2>}
            {onClose && (
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className="modal-content">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}`,
    css: `.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
}

.modal {
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;
  overflow: hidden;
}

.modal-small {
  width: 100%;
  max-width: 400px;
}

.modal-medium {
  width: 100%;
  max-width: 600px;
}

.modal-large {
  width: 100%;
  max-width: 900px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #d1d5db;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00338d;
  margin: 0;
}

.modal-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #e5e7eb;
  color: #374151;
}

.modal-content {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  color: #374151;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #d1d5db;
  background: #e8e8e8;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`
  },
  Tabs: {
    jsx: `import React, { useState } from 'react';
import './Tabs.css';

/**
 * Reusable Tabs Component
 */
export default function Tabs({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = '',
  ...props
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index, tab) => {
    if (tab.disabled) return;
    setActiveTab(index);
    onChange?.(index, tab);
  };

  return (
    <div className={\`tabs-container \${className}\`} {...props}>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={\`tab-button \${activeTab === index ? 'active' : ''} \${tab.disabled ? 'disabled' : ''}\`}
            onClick={() => handleTabClick(index, tab)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}`,
    css: `.tabs-container {
  width: 100%;
}

.tabs-header {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  gap: 0.5rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #6b7280;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -2px;
}

.tab-button:hover:not(.disabled) {
  color: #00338d;
  background: #f5f5f5;
}

.tab-button.active {
  color: #00338d;
  border-bottom-color: #00338d;
  font-weight: 600;
}

.tab-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tabs-content {
  padding: 1.5rem 0;
  color: #374151;
}`
  },
  Dropdown: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import './Dropdown.css';

export default function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={\`dropdown-container \${className}\`} ref={containerRef}>
      <button
        className={\`dropdown-button \${isOpen ? 'open' : ''} \${disabled ? 'disabled' : ''}\`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        {...props}
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <HiChevronDown className={\`dropdown-icon \${isOpen ? 'open' : ''}\`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className={\`dropdown-item \${value === option.value ? 'selected' : ''}\`}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.dropdown-container {
  position: relative;
  width: 100%;
}

.dropdown-button {
  width: 100%;
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  background: #f5f5f5;
  color: #1a1a1a;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  font-family: inherit;
  min-height: 48px;
}

.dropdown-button:hover:not(.disabled) {
  border-color: #00338d;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.1);
}

.dropdown-button:focus {
  outline: none;
  border-color: #00338d;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

.dropdown-button.open {
  border-color: #00338d;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.15);
}

.dropdown-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #f3f4f6;
}

.dropdown-value {
  flex: 1;
  text-align: left;
  color: #1a1a1a;
  font-weight: 500;
}

.dropdown-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 0.75rem;
}

.dropdown-icon.open {
  transform: rotate(180deg);
  color: #00338d;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 280px;
  overflow-y: auto;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-item {
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #374151;
  font-size: 0.95rem;
  border-bottom: 1px solid #f3f4f6;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f0f0f0;
  color: #00338d;
  padding-left: 1.5rem;
}

.dropdown-item.selected {
  background: #00338d;
  color: white;
  font-weight: 500;
}

.dropdown-item.selected:hover {
  background: #002a6f;
  padding-left: 1.25rem;
}`
  },
  Checkbox: {
    jsx: `import React from 'react';
import './Checkbox.css';

export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <label className={\`checkbox-wrapper \${disabled ? 'disabled' : ''} \${className}\`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="checkbox-checkmark"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}`,
    css: `.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-wrapper.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 0;
  z-index: 1;
}

.checkbox-checkmark {
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: #f0f0f0;
  transition: all 0.2s ease;
  flex-shrink: 0;
  display: inline-block;
}

.checkbox-wrapper:hover:not(.disabled) .checkbox-checkmark {
  border-color: #00338d;
  background: #f5f5f5;
}

.checkbox-input:checked ~ .checkbox-checkmark {
  background: #00338d;
  border-color: #00338d;
}

.checkbox-input:checked ~ .checkbox-checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-input:disabled {
  cursor: not-allowed;
}

.checkbox-wrapper.disabled .checkbox-checkmark {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkbox-label {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}`
  },
  Radio: {
    jsx: `import React from 'react';
import './Radio.css';

export default function Radio({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <label className={\`radio-wrapper \${disabled ? 'disabled' : ''} \${className}\`}>
      <input
        type="radio"
        className="radio-input"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="radio-checkmark"></span>
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
}`,
    css: `.radio-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.radio-wrapper.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-checkmark {
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background: #f0f0f0;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.radio-wrapper:hover .radio-checkmark:not(.disabled) {
  border-color: #00338d;
  background: #f5f5f5;
}

.radio-input:checked ~ .radio-checkmark {
  border-color: #00338d;
}

.radio-input:checked ~ .radio-checkmark::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00338d;
}

.radio-input:disabled ~ .radio-checkmark {
  opacity: 0.6;
  cursor: not-allowed;
}

.radio-label {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}`
  },
  Switch: {
    jsx: `import React from 'react';
import './Switch.css';

export default function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <label className={\`switch-wrapper \${disabled ? 'disabled' : ''} \${className}\`}>
      {label && <span className="switch-label">{label}</span>}
      <div className={\`switch \${checked ? 'checked' : ''} \${disabled ? 'disabled' : ''}\`}>
        <input
          type="checkbox"
          className="switch-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span className="switch-slider"></span>
      </div>
    </label>
  );
}`,
    css: `.switch-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
}

.switch-wrapper.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch-label {
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
}

.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
}

.switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  z-index: 1;
  cursor: pointer;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  transition: 0.3s;
  border-radius: 24px;
}

.switch-slider::before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch.checked .switch-slider {
  background-color: #00338d;
}

.switch.checked .switch-slider::before {
  transform: translateX(20px);
}

.switch.disabled .switch-slider {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch-input:disabled {
  cursor: not-allowed;
}`
  },
  Textarea: {
    jsx: `import React from 'react';
import './Textarea.css';

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) {
  return (
    <div className={\`textarea-wrapper \${className}\`}>
      {label && (
        <label className="textarea-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <textarea
        className={\`textarea \${error ? 'textarea-error' : ''}\`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        {...props}
      />
      {error && <span className="textarea-error-text">{error}</span>}
      {helperText && !error && (
        <span className="textarea-helper-text">{helperText}</span>
      )}
    </div>
  );
}`,
    css: `.textarea-wrapper {
  width: 100%;
  margin-bottom: 1rem;
}

.textarea-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.required {
  color: #dc2626;
  margin-left: 0.25rem;
}

.textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: #f0f0f0;
  color: #1a1a1a;
  transition: all 0.2s ease;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
}

.textarea::placeholder {
  color: #9ca3af;
}

.textarea:focus {
  outline: none;
  border-color: #00338d;
  background: #f5f5f5;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

.textarea:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.textarea-error {
  border-color: #dc2626;
}

.textarea-error:focus {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.textarea-error-text {
  display: block;
  font-size: 0.875rem;
  color: #dc2626;
  margin-top: 0.25rem;
}

.textarea-helper-text {
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}`
  },
  Progress: {
    jsx: `import React from 'react';
import './Progress.css';

export default function Progress({
  value = 0,
  max = 100,
  showLabel = false,
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={\`progress-wrapper progress-\${size} \${className}\`} {...props}>
      {showLabel && (
        <div className="progress-label">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={\`progress-fill progress-\${variant}\`}
          style={{ width: \`\${percentage}%\` }}
        ></div>
      </div>
    </div>
  );
}`,
    css: `.progress-wrapper {
  width: 100%;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-small .progress-bar {
  height: 4px;
}

.progress-medium .progress-bar {
  height: 8px;
}

.progress-large .progress-bar {
  height: 12px;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-primary {
  background: #00338d;
}

.progress-secondary {
  background: #6b7280;
}

.progress-success {
  background: #10b981;
}

.progress-warning {
  background: #f59e0b;
}

.progress-error {
  background: #ef4444;
}`
  },
  Alert: {
    jsx: `import React from 'react';
import { HiInformationCircle, HiCheckCircle, HiExclamationTriangle, HiXCircle } from 'react-icons/hi2';
import './Alert.css';

export default function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...props
}) {
  const icons = {
    info: HiInformationCircle,
    success: HiCheckCircle,
    warning: HiExclamationTriangle,
    error: HiXCircle,
  };

  const Icon = icons[variant] || HiInformationCircle;

  return (
    <div className={\`alert alert-\${variant} \${className}\`} {...props}>
      <div className="alert-content">
        <Icon className="alert-icon" />
        <div className="alert-text">
          {title && <div className="alert-title">{title}</div>}
          <div className="alert-message">{children}</div>
        </div>
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}
    </div>
  );
}`,
    css: `.alert {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 1px solid;
  margin-bottom: 1rem;
}

.alert-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-text {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.alert-message {
  font-size: 0.875rem;
  line-height: 1.5;
}

.alert-info {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  color: #1e40af;
}

.alert-info .alert-icon {
  color: #3b82f6;
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  color: #047857;
}

.alert-success .alert-icon {
  color: #10b981;
}

.alert-warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: #f59e0b;
  color: #92400e;
}

.alert-warning .alert-icon {
  color: #f59e0b;
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
  color: #991b1b;
}

.alert-error .alert-icon {
  color: #ef4444;
}

.alert-close {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  color: inherit;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
}

.alert-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}`
  },
  Tooltip: {
    jsx: `import React, { useState } from 'react';
import './Tooltip.css';

export default function Tooltip({
  content,
  position = 'top',
  children,
  className = '',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={\`tooltip-wrapper \${className}\`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div className={\`tooltip tooltip-\${position}\`}>
          {content}
        </div>
      )}
    </div>
  );
}`,
    css: `.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background: #1a1a1a;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  z-index: 1000;
  pointer-events: none;
  animation: fadeIn 0.2s ease;
}

.tooltip::after {
  content: '';
  position: absolute;
  border: 5px solid transparent;
}

.tooltip-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-top::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: #1a1a1a;
}

.tooltip-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: #1a1a1a;
}

.tooltip-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-left::after {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: #1a1a1a;
}

.tooltip-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-right::after {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: #1a1a1a;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },
  Divider: {
    jsx: `import React from 'react';
import './Divider.css';

export default function Divider({
  orientation = 'horizontal',
  text,
  className = '',
  ...props
}) {
  return (
    <div
      className={\`divider divider-\${orientation} \${className}\`}
      {...props}
    >
      {text && orientation === 'horizontal' && (
        <span className="divider-text">{text}</span>
      )}
    </div>
  );
}`,
    css: `.divider {
  background: #e5e7eb;
}

.divider-horizontal {
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider-vertical {
  width: 1px;
  height: 100%;
  margin: 0 1rem;
  display: inline-block;
}

.divider-text {
  background: #f0f0f0;
  padding: 0 1rem;
  color: #6b7280;
  font-size: 0.875rem;
  position: relative;
}`
  },
  Skeleton: {
    jsx: `import React from 'react';
import './Skeleton.css';

export default function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  ...props
}) {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={\`skeleton skeleton-\${variant} \${className}\`}
      style={style}
      {...props}
    />
  );
}`,
    css: `.skeleton {
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-text {
  height: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
}

.skeleton-text:last-child {
  width: 60%;
}

.skeleton-circular {
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.skeleton-rectangular {
  width: 100%;
  height: 200px;
}

.skeleton-rounded {
  border-radius: 8px;
  width: 100%;
  height: 100px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}`
  },
  Chip: {
    jsx: `import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import './Chip.css';

export default function Chip({
  label,
  onDelete,
  variant = 'default',
  size = 'medium',
  className = '',
  ...props
}) {
  return (
    <span
      className={\`chip chip-\${variant} chip-\${size} \${className}\`}
      {...props}
    >
      {label}
      {onDelete && (
        <button
          className="chip-delete"
          onClick={onDelete}
          aria-label="Delete chip"
        >
          <HiXMark />
        </button>
      )}
    </span>
  );
}`,
    css: `.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 16px;
  font-weight: 500;
  background: #e5e7eb;
  color: #374151;
  border: 1px solid #d1d5db;
}

.chip-default {
  background: #e5e7eb;
  color: #374151;
}

.chip-primary {
  background: #00338d;
  color: white;
  border-color: #00338d;
}

.chip-success {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.chip-warning {
  background: #f59e0b;
  color: white;
  border-color: #f59e0b;
}

.chip-error {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}

.chip-small {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.chip-medium {
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
}

.chip-large {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.chip-delete {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  opacity: 0.7;
  margin-left: -4px;
}

.chip-delete:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

.chip-delete svg {
  width: 12px;
  height: 12px;
}`
  },
  Breadcrumb: {
    jsx: `import React from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import './Breadcrumb.css';

export default function Breadcrumb({
  items = [],
  separator = <HiChevronRight />,
  className = '',
  ...props
}) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={\`breadcrumb \${className}\`} aria-label="Breadcrumb" {...props}>
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">{separator}</span>}
            {index === items.length - 1 ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="breadcrumb-link">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}`,
    css: `.breadcrumb {
  width: 100%;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-separator {
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--accent-primary);
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}`
  },
  Pagination: {
    jsx: `import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import './Pagination.css';

export default function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  showFirstLast = true,
  className = '',
  ...props
}) {
  const pages = [];
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <nav className={\`pagination \${className}\`} aria-label="Pagination" {...props}>
      {showFirstLast && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          First
        </button>
      )}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <HiChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={\`pagination-button \${currentPage === page ? 'active' : ''}\`}
          onClick={() => handlePageChange(page)}
          aria-label={\`Page \${page}\`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <HiChevronRight />
      </button>
      {showFirstLast && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          Last
        </button>
      )}
    </nav>
  );
}`,
    css: `.pagination {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.pagination-button {
  min-width: 40px;
  height: 40px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.pagination-button:hover:not(:disabled):not(.active) {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.pagination-button.active:hover {
  background: var(--accent-hover);
}`
  },
  Accordion: {
    jsx: `import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import './Accordion.css';

export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  ...props
}) {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (allowMultiple) {
          newSet.add(index);
        } else {
          return new Set([index]);
        }
      }
      return newSet;
    });
  };

  return (
    <div className={\`accordion \${className}\`} {...props}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={\`accordion-header \${openItems.has(index) ? 'open' : ''}\`}
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.has(index)}
          >
            <span className="accordion-title">{item.title}</span>
            <HiChevronDown className={\`accordion-icon \${openItems.has(index) ? 'open' : ''}\`} />
          </button>
          {openItems.has(index) && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}`,
    css: `.accordion {
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.accordion-item {
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  font-family: inherit;
}

.accordion-header:hover {
  background: var(--bg-tertiary);
}

.accordion-header.open {
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.accordion-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.accordion-icon {
  width: 20px;
  height: 20px;
  color: var(--text-tertiary);
  transition: transform 0.3s ease, color 0.3s ease;
  flex-shrink: 0;
}

.accordion-icon.open {
  transform: rotate(180deg);
  color: var(--accent-primary);
}

.accordion-content {
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  color: var(--text-secondary);
  line-height: 1.6;
  animation: slideDown 0.3s ease;
  transition: color 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}`
  },
  Drawer: {
    jsx: `import React, { useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';
import './Drawer.css';

export default function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'medium',
  className = '',
  ...props
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div
        className={\`drawer drawer-\${position} drawer-\${size} \${className}\`}
        {...props}
      >
        {(title || onClose) && (
          <div className="drawer-header">
            {title && <h2 className="drawer-title">{title}</h2>}
            {onClose && (
              <button
                className="drawer-close"
                onClick={onClose}
                aria-label="Close drawer"
              >
                <HiXMark />
              </button>
            )}
          </div>
        )}
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
}`,
    css: `.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  animation: fadeIn 0.2s ease;
}

.drawer {
  position: fixed;
  top: 0;
  background: var(--bg-modal);
  box-shadow: -4px 0 24px var(--shadow-lg);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.drawer-right {
  right: 0;
  height: 100vh;
  animation: slideInRight 0.3s ease;
}

.drawer-left {
  left: 0;
  height: 100vh;
  animation: slideInLeft 0.3s ease;
}

.drawer-top {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 80vh;
  animation: slideInTop 0.3s ease;
}

.drawer-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 80vh;
  animation: slideInBottom 0.3s ease;
}

.drawer-small {
  width: 320px;
}

.drawer-medium {
  width: 400px;
}

.drawer-large {
  width: 600px;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.3s ease;
}

.drawer-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin: 0;
  transition: color 0.3s ease;
}

.drawer-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.drawer-close:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.drawer-content {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideInTop {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes slideInBottom {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}`
  },
  Popover: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import './Popover.css';

export default function Popover({
  content,
  trigger = 'click',
  position = 'bottom',
  children,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, trigger]);

  const handleTrigger = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={\`popover-wrapper \${className}\`}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
      onMouseLeave={trigger === 'hover' ? handleMouseLeave : undefined}
      {...props}
    >
      {children}
      {isOpen && (
        <div className={\`popover popover-\${position}\`}>
          <div className="popover-content">{content}</div>
          <div className={\`popover-arrow popover-arrow-\${position}\`}></div>
        </div>
      )}
    </div>
  );
}`,
    css: `.popover-wrapper {
  position: relative;
  display: inline-block;
}

.popover {
  position: absolute;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.popover-content {
  background: var(--bg-modal);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 12px var(--shadow-md);
  color: var(--text-primary);
  font-size: 0.875rem;
  min-width: 150px;
  max-width: 300px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.popover-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}

.popover-top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-top .popover-arrow {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--bg-modal);
}

.popover-bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.popover-bottom .popover-arrow {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--bg-modal);
}

.popover-left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.popover-left .popover-arrow {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--bg-modal);
}

.popover-right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.popover-right .popover-arrow {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--bg-modal);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },
  Stepper: {
    jsx: `import React from 'react';
import { HiCheck } from 'react-icons/hi2';
import './Stepper.css';

export default function Stepper({
  steps = [],
  currentStep = 0,
  orientation = 'horizontal',
  className = '',
  ...props
}) {
  return (
    <div className={\`stepper stepper-\${orientation} \${className}\`} {...props}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isPending = index > currentStep;

        return (
          <div key={index} className="stepper-step">
            <div className="stepper-connector">
              {orientation === 'horizontal' && index > 0 && (
                <div className={\`stepper-line \${isCompleted ? 'completed' : ''}\`}></div>
              )}
            </div>
            <div className={\`stepper-indicator \${isCompleted ? 'completed' : ''} \${isActive ? 'active' : ''} \${isPending ? 'pending' : ''}\`}>
              {isCompleted ? (
                <HiCheck className="stepper-check-icon" />
              ) : (
                <span className="stepper-number">{index + 1}</span>
              )}
            </div>
            {step.label && (
              <div className="stepper-label">
                <span className={\`stepper-label-text \${isActive ? 'active' : ''}\`}>
                  {step.label}
                </span>
                {step.description && (
                  <span className="stepper-description">{step.description}</span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}`,
    css: `.stepper {
  display: flex;
  width: 100%;
  align-items: flex-start;
}

.stepper-horizontal {
  flex-direction: row;
}

.stepper-vertical {
  flex-direction: column;
}

.stepper-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.stepper-horizontal .stepper-step {
  flex-direction: row;
}

.stepper-connector {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 0;
}

.stepper-horizontal .stepper-connector {
  top: 20px;
  left: calc(50% + 20px);
  right: calc(-50% + 20px);
}

.stepper-line {
  height: 2px;
  background: var(--border-color);
  transition: background-color 0.3s ease;
}

.stepper-line.completed {
  background: var(--accent-primary);
}

.stepper-indicator {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: 2px solid var(--border-color);
  color: var(--text-tertiary);
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.stepper-indicator.active {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
}

.stepper-indicator.completed {
  background: var(--success);
  border-color: var(--success);
  color: white;
}

.stepper-indicator.pending {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
  color: var(--text-tertiary);
}

.stepper-number {
  font-size: 1rem;
}

.stepper-check-icon {
  width: 20px;
  height: 20px;
}

.stepper-label {
  margin-top: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stepper-horizontal .stepper-label {
  margin-top: 0;
  margin-left: 0.75rem;
  text-align: left;
}

.stepper-label-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

.stepper-label-text.active {
  color: var(--accent-primary);
  font-weight: 600;
}

.stepper-description {
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color 0.3s ease;
}`
  },
  Rating: {
    jsx: `import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi2';
import './Rating.css';

export default function Rating({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = 'medium',
  className = '',
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
    <div
      className={\`rating rating-\${size} \${readOnly ? 'readonly' : ''} \${className}\`}
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
            className={\`rating-star \${isFilled ? 'filled' : ''} \${isHalf ? 'half' : ''}\`}
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter(rating)}
            disabled={readOnly}
            aria-label={\`Rate \${rating} out of \${max}\`}
          >
            <HiStar />
          </button>
        );
      })}
    </div>
  );
}`,
    css: `.rating {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.rating-star {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--border-color);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rating-star:not(.readonly):hover {
  color: var(--warning);
  transform: scale(1.1);
}

.rating-star.filled {
  color: var(--warning);
}

.rating.readonly .rating-star {
  cursor: default;
}

.rating-small .rating-star {
  width: 16px;
  height: 16px;
  font-size: 16px;
}

.rating-medium .rating-star {
  width: 24px;
  height: 24px;
  font-size: 24px;
}

.rating-large .rating-star {
  width: 32px;
  height: 32px;
  font-size: 32px;
}

.rating-star:disabled {
  cursor: default;
}`
  },
  Slider: {
    jsx: `import React, { useState } from 'react';
import './Slider.css';

export default function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  showValue = true,
  label,
  className = '',
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
    <div className={\`slider-wrapper \${className}\`} {...props}>
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
            '--percentage': \`\${percentage}%\`,
          }}
        />
        {!label && showValue && (
          <div className="slider-value-display">{currentValue}</div>
        )}
      </div>
    </div>
  );
}`,
    css: `.slider-wrapper {
  width: 100%;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.slider-value {
  font-weight: 600;
  color: var(--accent-primary);
  transition: color 0.3s ease;
}

.slider-container {
  position: relative;
  width: 100%;
}

.slider-input {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border-color);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color 0.3s ease;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-primary);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px var(--shadow-sm);
  transition: all 0.3s ease;
}

.slider-input::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px var(--shadow-md);
}

.slider-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-primary);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px var(--shadow-sm);
  transition: all 0.3s ease;
}

.slider-input::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px var(--shadow-md);
}

.slider-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.slider-value-display {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-primary);
  transition: color 0.3s ease;
}`
  },
  Menu: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import './Menu.css';

export default function Menu({
  items = [],
  trigger,
  position = 'bottom-left',
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleItemClick = (item) => {
    if (!item.disabled) {
      item.onClick?.();
      setIsOpen(false);
    }
  };

  return (
    <div className={\`menu-wrapper \${className}\`} ref={containerRef} {...props}>
      <div className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={\`menu menu-\${position}\`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={\`menu-item \${item.disabled ? 'disabled' : ''} \${item.divider ? 'divider' : ''}\`}
              onClick={() => handleItemClick(item)}
            >
              {item.icon && <span className="menu-icon">{item.icon}</span>}
              <span className="menu-label">{item.label}</span>
              {item.children && <HiChevronRight className="menu-arrow" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.menu-wrapper {
  position: relative;
  display: inline-block;
}

.menu-trigger {
  cursor: pointer;
}

.menu {
  position: absolute;
  background: var(--bg-modal);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow-md);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.menu-bottom-left {
  top: calc(100% + 8px);
  left: 0;
}

.menu-bottom-right {
  top: calc(100% + 8px);
  right: 0;
}

.menu-top-left {
  bottom: calc(100% + 8px);
  left: 0;
}

.menu-top-right {
  bottom: calc(100% + 8px);
  right: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: all 0.2s ease;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-item:hover:not(.disabled) {
  background: var(--bg-tertiary);
  color: var(--accent-primary);
}

.menu-item.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.menu-item.divider {
  border-bottom: 1px solid var(--border-color);
  margin: 0.25rem 0;
  padding-bottom: 0.75rem;
  transition: border-color 0.3s ease;
}

.menu-icon {
  display: flex;
  align-items: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.menu-label {
  flex: 1;
}

.menu-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-tertiary);
  transition: color 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },
  Toast: {
    jsx: `import React, { useEffect } from 'react';
import { HiXMark, HiCheckCircle, HiExclamationTriangle, HiInformationCircle, HiXCircle } from 'react-icons/hi2';
import './Toast.css';

export default function Toast({
  message,
  variant = 'info',
  duration = 5000,
  onClose,
  className = '',
  ...props
}) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: HiCheckCircle,
    error: HiXCircle,
    warning: HiExclamationTriangle,
    info: HiInformationCircle,
  };

  const Icon = icons[variant] || HiInformationCircle;

  return (
    <div className={\`toast toast-\${variant} \${className}\`} {...props}>
      <Icon className="toast-icon" />
      <span className="toast-message">{message}</span>
      {onClose && (
        <button
          className="toast-close"
          onClick={onClose}
          aria-label="Close toast"
        >
          <HiXMark />
        </button>
      )}
    </div>
  );
}`,
    css: `.toast {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow-md);
  min-width: 300px;
  max-width: 500px;
  animation: slideIn 0.3s ease;
  border: 1px solid;
  transition: all 0.3s ease;
}

.toast-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.5;
}

.toast-close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: 0.7;
  flex-shrink: 0;
}

.toast-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

.toast-info {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--info);
  color: var(--info);
}

.toast-success {
  background: rgba(16, 185, 129, 0.1);
  border-color: var(--success);
  color: var(--success);
}

.toast-warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: var(--warning);
  color: var(--warning);
}

.toast-error {
  background: rgba(239, 68, 68, 0.1);
  border-color: var(--error);
  color: var(--error);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`
  }
};
