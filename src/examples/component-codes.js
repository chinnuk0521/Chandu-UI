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
}`,
  },
  Card: {
    jsx: `import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} title - Card title
 * @param {string} subtitle - Card subtitle
 * @param {React.ReactNode} image - Card image
 * @param {React.ReactNode} footer - Card footer
 * @param {string} className - Additional CSS classes
 * @param {Function} onClick - Click handler
 */
export default function Card({
  children,
  title,
  subtitle,
  image,
  footer,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      className={\`card \${onClick ? 'clickable' : ''} \${className}\`}
      onClick={onClick}
      {...props}
    >
      {image && <div className="card-image">{image}</div>}
      {(title || subtitle || children) && (
        <div className="card-content">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          {children && <div className="card-body">{children}</div>}
        </div>
      )}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}`,
    css: `.card {
  background: var(--bg-card);
  border-radius: 16px;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dark-mode .card {
  background: var(--bg-card);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
  border-color: var(--border-color);
}

.card:hover {
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.dark-mode .card:hover {
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.3);
}

.card.clickable {
  cursor: pointer;
}

.card.clickable:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 32px rgba(0, 51, 141, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-primary);
}

.dark-mode .card.clickable:hover {
  box-shadow: 
    0 12px 32px rgba(0, 51, 141, 0.25),
    0 4px 16px rgba(0, 0, 0, 0.4);
}

.card.clickable:active {
  transform: translateY(-2px);
  transition: transform 0.1s ease;
}

.card-image {
  width: 100%;
  overflow: hidden;
  position: relative;
  background: var(--bg-tertiary);
}

.card-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.card.clickable:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  transition: color 0.3s ease;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.card.clickable:hover .card-title {
  color: var(--accent-primary);
}

.card-subtitle {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;
  font-weight: 500;
  line-height: 1.5;
}

.card-body {
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color 0.3s ease;
  font-size: 0.9375rem;
  flex: 1;
}

.card-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border-light);
  background: var(--bg-tertiary);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
}

.dark-mode .card-footer {
  background: rgba(255, 255, 255, 0.02);
  border-top-color: var(--border-color);
}

.card.clickable:hover .card-footer {
  border-top-color: var(--border-color);
}

@media (max-width: 768px) {
  .card-content {
    padding: 1.25rem;
  }

  .card-footer {
    padding: 1rem 1.25rem;
  }

  .card-title {
    font-size: 1.125rem;
  }
}`,
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
}`,
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
}`,
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
  width: 100%;
  max-width: 600px;
  position: relative;
}

.global-search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--bg-card);
  border: 1.5px solid var(--border-light);
  border-radius: 16px;
  padding: 0.875rem 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.global-search-input-wrapper:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.1),
    0 4px 16px rgba(0, 51, 141, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-1px);
}

.search-icon {
  font-size: 1.25rem;
  margin-right: 0.875rem;
  color: var(--text-tertiary);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.global-search-input-wrapper:focus-within .search-icon {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.global-search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.9375rem;
  color: var(--text-primary);
  background: transparent;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
}

.global-search-input::placeholder {
  color: var(--text-tertiary);
  opacity: 0.7;
  font-weight: 400;
}

.clear-button {
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  font-size: 1.125rem;
  line-height: 1;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.clear-button svg {
  width: 100%;
  height: 100%;
}

.clear-button:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  transform: scale(1.1) rotate(90deg);
}

.clear-button:active {
  transform: scale(0.95) rotate(90deg);
}

.global-search-results {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  max-height: 400px;
  overflow-y: auto;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 1000;
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  scrollbar-width: thin;
  scrollbar-color: var(--border-light) transparent;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.global-search-results::-webkit-scrollbar {
  width: 6px;
}

.global-search-results::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.global-search-results::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 3px;
}

.global-search-results::-webkit-scrollbar-thumb:hover {
  background: var(--border-color);
}

.global-search-result {
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid var(--border-light);
  -webkit-user-select: none;
  user-select: none;
  position: relative;
}

.global-search-result:first-child {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.global-search-result:last-child {
  border-bottom: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.global-search-result::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--accent-primary) 0%, #0066ff 100%);
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 3px 3px 0;
}

.global-search-result:hover,
.global-search-result.highlighted {
  background: linear-gradient(90deg, rgba(0, 51, 141, 0.05) 0%, rgba(0, 51, 141, 0.02) 100%);
  transform: translateX(4px);
}

.global-search-result:hover::before,
.global-search-result.highlighted::before {
  opacity: 1;
}

.global-search-result .result-label {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.5;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: -0.1px;
}

.global-search-result:hover .result-label,
.global-search-result.highlighted .result-label {
  color: var(--accent-primary);
  font-weight: 500;
}

.global-search-empty {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  padding: 2.5rem 1.5rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 1000;
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.global-search-empty .empty-icon {
  font-size: 2.5rem;
  display: block;
  margin: 0 auto 0.875rem;
  color: var(--text-tertiary);
  opacity: 0.6;
}

.global-search-empty p {
  margin: 0;
  line-height: 1.5;
  color: var(--text-secondary);
}

.dark-mode .global-search-input-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .global-search-input-wrapper:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.2),
    0 4px 16px rgba(0, 51, 141, 0.25),
    0 2px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .global-search-results {
  background: rgba(30, 30, 30, 0.98);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.dark-mode .global-search-results::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

.dark-mode .global-search-results::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dark-mode .global-search-result {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .global-search-result:hover,
.dark-mode .global-search-result.highlighted {
  background: linear-gradient(90deg, rgba(0, 51, 141, 0.15) 0%, rgba(0, 51, 141, 0.08) 100%);
}

.dark-mode .global-search-empty {
  background: rgba(30, 30, 30, 0.98);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.dark-mode .clear-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .global-search-input-wrapper {
    padding: 0.75rem 1rem;
    border-radius: 12px;
  }

  .search-icon {
    font-size: 1.125rem;
    margin-right: 0.75rem;
  }

  .global-search-input {
    font-size: 0.875rem;
  }

  .clear-button {
    width: 24px;
    height: 24px;
    font-size: 1rem;
    right: 0.625rem;
  }

  .global-search-results {
    border-radius: 12px;
    max-height: 300px;
  }

  .global-search-result {
    padding: 0.75rem 1rem;
  }

  .global-search-result .result-label {
    font-size: 0.875rem;
  }

  .global-search-empty {
    padding: 2rem 1.25rem;
    border-radius: 12px;
  }

  .global-search-empty .empty-icon {
    font-size: 2rem;
  }
}`,
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
}`,
  },
  Avatar: {
    jsx: `import React, { useState } from 'react';
import './Avatar.css';

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
  size = 'medium',
  status,
  badge,
  color,
  className = '',
  ...props
}) {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Generate color based on name if no color specified
  const getColorClass = () => {
    if (color) return 'avatar-color-' + color;
    if (!name) return 'avatar-color-primary';
    
    // Generate consistent color based on name
    const colors = ['primary', 'success', 'warning', 'error', 'info'];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return 'avatar-color-' + colors[hash % colors.length];
  };

  const showImage = src && !imageError;

  return (
    <div 
      className={\`avatar avatar-\${size} \${getColorClass()} \${className}\`} 
      {...props}
    >
      {showImage ? (
        <img 
          src={src} 
          alt={alt || name || 'Avatar'} 
          className="avatar-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="avatar-initials">{getInitials(name)}</div>
      )}
      
      {status && (
        <span className={\`avatar-status \${status}\`} aria-label={\`Status: \${status}\`} />
      )}
      
      {badge !== undefined && badge > 0 && (
        <span className="avatar-badge" aria-label={\`\${badge} notifications\`}>
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </div>
  );
}`,
    css: `.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: visible;
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
  color: #ffffff;
  font-weight: 600;
  flex-shrink: 0;
  position: relative;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 1px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 3px solid var(--bg-card);
}

.dark-mode .avatar {
  border-color: var(--bg-card);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    0 2px 6px rgba(0, 51, 141, 0.15);
}

.dark-mode .avatar:hover {
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.3);
}

.avatar-small {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
  border-width: 2px;
}

.avatar-medium {
  width: 48px;
  height: 48px;
  font-size: 1rem;
  border-width: 3px;
}

.avatar-large {
  width: 64px;
  height: 64px;
  font-size: 1.25rem;
  border-width: 4px;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.avatar:hover .avatar-image {
  transform: scale(1.1);
}

.avatar-initials {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  user-select: none;
  letter-spacing: 0.5px;
}

/* Status indicator */
.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--bg-card);
  background: var(--success);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.avatar-small .avatar-status {
  width: 8px;
  height: 8px;
  border-width: 1.5px;
}

.avatar-large .avatar-status {
  width: 16px;
  height: 16px;
  border-width: 3px;
}

.avatar-status.offline {
  background: var(--text-tertiary);
}

.avatar-status.away {
  background: var(--warning);
}

.avatar-status.busy {
  background: var(--error);
}

/* Badge/Notification count */
.avatar-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 10px;
  background: var(--error);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--bg-card);
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
  z-index: 10;
}

.avatar-small .avatar-badge {
  min-width: 14px;
  height: 14px;
  font-size: 0.5rem;
  padding: 0 4px;
  border-width: 1.5px;
  top: -3px;
  right: -3px;
}

.avatar-large .avatar-badge {
  min-width: 22px;
  height: 22px;
  font-size: 0.75rem;
  padding: 0 8px;
  border-width: 3px;
  top: -6px;
  right: -6px;
}

/* Grouped avatars */
.avatar-group {
  display: inline-flex;
  align-items: center;
}

.avatar-group .avatar {
  margin-left: -8px;
  border: 3px solid var(--bg-card);
}

.avatar-group .avatar:first-child {
  margin-left: 0;
}

.avatar-group .avatar:hover {
  z-index: 1;
  margin-right: 8px;
}

/* Variant colors for initials */
.avatar-color-primary {
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
}

.avatar-color-success {
  background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
}

.avatar-color-warning {
  background: linear-gradient(135deg, var(--warning) 0%, #d97706 100%);
}

.avatar-color-error {
  background: linear-gradient(135deg, var(--error) 0%, #dc2626 100%);
}

.avatar-color-info {
  background: linear-gradient(135deg, var(--info) 0%, #2563eb 100%);
}

@media (max-width: 768px) {
  .avatar-small {
    width: 28px;
    height: 28px;
    font-size: 0.6875rem;
  }

  .avatar-medium {
    width: 40px;
    height: 40px;
    font-size: 0.875rem;
  }

  .avatar-large {
    width: 56px;
    height: 56px;
    font-size: 1.125rem;
  }
}`,
  },
  Spinner: {
    jsx: `import React from 'react';
import './Spinner.css';

/**
 * Reusable Spinner/Loader Component
 *
 * @param {string} size - Spinner size: 'small', 'medium', 'large'
 * @param {string} variant - Spinner variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {string} className - Additional CSS classes
 */
export default function Spinner({
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <div
      className={\`spinner spinner-\${size} spinner-\${variant} \${className}\`}
      {...props}
      role="status"
      aria-label="Loading"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}`,
    css: `.spinner {
  border: 3px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

.spinner-primary {
  border-color: rgba(0, 51, 141, 0.2);
  border-top-color: var(--accent-primary);
}

.spinner-secondary {
  border-color: rgba(107, 114, 128, 0.2);
  border-top-color: #6b7280;
}

.spinner-success {
  border-color: rgba(16, 185, 129, 0.2);
  border-top-color: var(--success);
}

.spinner-warning {
  border-color: rgba(245, 158, 11, 0.2);
  border-top-color: var(--warning);
}

.spinner-error {
  border-color: rgba(239, 68, 68, 0.2);
  border-top-color: var(--error);
}

.spinner-small {
  width: 20px;
  height: 20px;
  border-width: 2px;
}

.spinner-medium {
  width: 40px;
  height: 40px;
  border-width: 3px;
}

.spinner-large {
  width: 60px;
  height: 60px;
  border-width: 4px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Dark mode support */
.dark-mode .spinner-primary {
  border-color: rgba(74, 158, 255, 0.2);
  border-top-color: var(--accent-light);
}

.dark-mode .spinner-secondary {
  border-color: rgba(156, 163, 175, 0.2);
  border-top-color: #9ca3af;
}

.dark-mode .spinner-success {
  border-color: rgba(16, 185, 129, 0.2);
  border-top-color: var(--success);
}

.dark-mode .spinner-warning {
  border-color: rgba(245, 158, 11, 0.2);
  border-top-color: var(--warning);
}

.dark-mode .spinner-error {
  border-color: rgba(239, 68, 68, 0.2);
  border-top-color: var(--error);
}`,
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
}`,
  },
  Tabs: {
    jsx: `import React, { useState } from 'react';
import './Tabs.css';

/**
 * Reusable Tabs Component
 *
 * @param {Array} tabs - Array of tab objects { label, content, disabled }
 * @param {number} defaultTab - Default active tab index
 * @param {Function} onChange - Tab change handler
 * @param {string} className - Additional CSS classes
 */
export default function Tabs({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index) => {
    if (tabs[index]?.disabled) return;
    setActiveTab(index);
    onChange?.(index, tabs[index]);
  };

  return (
    <div className={\`tabs \${className}\`}>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={\`tab-button \${activeTab === index ? 'active' : ''} \${tab.disabled ? 'disabled' : ''}\`}
            onClick={() => handleTabClick(index)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeTab]?.content}</div>
    </div>
  );
}`,
    css: `.tabs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.tabs-header {
  display: flex;
  gap: 0.25rem;
  border-bottom: 1px solid var(--border-light);
  margin-bottom: 2rem;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  position: relative;
  padding-bottom: 0;
}

.tabs-header::-webkit-scrollbar {
  display: none;
}

.dark-mode .tabs-header {
  border-bottom-color: var(--border-color);
}

.tab-button {
  padding: 1rem 2rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -1px;
  letter-spacing: 0.02em;
  text-transform: none;
  border-radius: 0;
}

.tab-button::before {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.tab-button::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  opacity: 0;
}

.tab-button:hover:not(.disabled) {
  color: var(--accent-primary);
  background: transparent;
}

.tab-button:hover:not(.disabled)::before {
  transform: scaleX(0.6);
}

.tab-button:hover:not(.disabled)::after {
  width: 40%;
  transform: translateX(-50%) scaleX(1);
  opacity: 0.5;
}

.tab-button.active {
  color: var(--accent-primary);
  font-weight: 600;
  background: transparent;
}

.tab-button.active::before {
  transform: scaleX(1);
  height: 3px;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.tab-button.active::after {
  display: none;
}

.tab-button.disabled {
  opacity: 0.35;
  cursor: not-allowed;
  color: var(--text-tertiary);
  pointer-events: none;
}

.tab-button:focus {
  outline: none;
}

.tab-button:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 8px;
  border-radius: 4px;
}

.tabs-content {
  min-height: 120px;
  color: var(--text-primary);
  width: 100%;
  padding: 0;
  animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modern variant: Pills */
.tabs.pills .tabs-header {
  border-bottom: none;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: var(--bg-tertiary);
  padding: 0.375rem;
  border-radius: 12px;
  border: 1px solid var(--border-light);
}

.dark-mode .tabs.pills .tabs-header {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.tabs.pills .tab-button {
  border-radius: 8px;
  margin-bottom: 0;
  padding: 0.75rem 1.5rem;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.tabs.pills .tab-button::before,
.tabs.pills .tab-button::after {
  display: none;
}

.tabs.pills .tab-button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 51, 141, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.tabs.pills .tab-button:hover:not(.disabled)::after {
  opacity: 1;
}

.tabs.pills .tab-button:hover:not(.disabled) {
  color: var(--accent-primary);
  transform: translateY(-1px);
}

.tabs.pills .tab-button.active {
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.95) 100%);
  color: white;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    0 2px 6px rgba(0, 51, 141, 0.15);
  transform: translateY(-1px);
  font-weight: 600;
}

.dark-mode .tabs.pills .tab-button.active {
  background: var(--accent-primary);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.4),
    0 2px 6px rgba(0, 51, 141, 0.3);
}

/* Modern variant: Enclosed */
.tabs.enclosed .tabs-header {
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 0.5rem;
  background: var(--bg-card);
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.dark-mode .tabs.enclosed .tabs-header {
  border-color: var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background: var(--bg-tertiary);
}

.tabs.enclosed .tab-button {
  border-radius: 8px;
  margin-bottom: 0;
  padding: 0.875rem 1.75rem;
  background: transparent;
  position: relative;
}

.tabs.enclosed .tab-button::before,
.tabs.enclosed .tab-button::after {
  display: none;
}

.tabs.enclosed .tab-button:hover:not(.disabled) {
  background: var(--bg-tertiary);
  color: var(--accent-primary);
}

.tabs.enclosed .tab-button.active {
  background: var(--bg-card);
  color: var(--accent-primary);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  font-weight: 600;
}

.dark-mode .tabs.enclosed .tab-button.active {
  background: var(--bg-card);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Modern variant: Underlined with background */
.tabs.modern .tabs-header {
  border-bottom: 1px solid var(--border-light);
  margin-bottom: 2rem;
  background: linear-gradient(to bottom, var(--bg-tertiary) 0%, transparent 100%);
  padding: 0.5rem 0.5rem 0 0.5rem;
  border-radius: 12px 12px 0 0;
}

.dark-mode .tabs.modern .tabs-header {
  background: linear-gradient(to bottom, var(--bg-tertiary) 0%, transparent 100%);
  border-bottom-color: var(--border-color);
}

.tabs.modern .tab-button {
  border-radius: 8px 8px 0 0;
  padding: 0.875rem 1.75rem;
  margin-bottom: 0;
}

.tabs.modern .tab-button::before {
  height: 3px;
  border-radius: 3px 3px 0 0;
  bottom: -1px;
}

.tabs.modern .tab-button:hover:not(.disabled) {
  background: rgba(0, 51, 141, 0.05);
}

.dark-mode .tabs.modern .tab-button:hover:not(.disabled) {
  background: rgba(0, 51, 141, 0.1);
}

.tabs.modern .tab-button.active {
  background: var(--bg-card);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

.dark-mode .tabs.modern .tab-button.active {
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
}

.tabs.modern .tab-button.active::before {
  box-shadow: 0 2px 12px rgba(0, 51, 141, 0.4);
}

/* Responsive design */
@media (max-width: 768px) {
  .tabs-header {
    gap: 0.125rem;
    margin-bottom: 1.5rem;
  }

  .tab-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }

  .tabs.pills .tab-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  .tabs.enclosed .tab-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  .tabs.modern .tab-button {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .tab-button {
    padding: 0.75rem 1.25rem;
    font-size: 0.8125rem;
  }
}`,
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
}`,
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
}`,
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
}`,
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
}`,
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
}`,
  },
  Progress: {
    jsx: `import React from 'react';
import './Progress.css';

/**
 * Reusable Progress Component
 *
 * @param {number} value - Current progress value
 * @param {number} max - Maximum value (default: 100)
 * @param {boolean} showLabel - Show percentage label
 * @param {string} label - Custom label text (alternative to showLabel)
 * @param {string} size - Size: 'small', 'medium', 'large'
 * @param {string} variant - Variant: 'primary', 'secondary', 'success', 'warning', 'error'
 * @param {boolean} animated - Enable animation
 * @param {boolean} striped - Show striped pattern
 * @param {string} className - Additional CSS classes
 */
export default function Progress({
  value = 0,
  max = 100,
  showLabel = false,
  label,
  size = 'medium',
  variant = 'primary',
  animated = true,
  striped = false,
  className = '',
  ...props
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const displayLabel = label !== undefined ? label : (showLabel ? \`\${Math.round(percentage)}%\` : null);

  return (
    <div
      className={\`progress-wrapper progress-\${size} \${className}\`}
      {...props}
    >
      {displayLabel && (
        <div className="progress-label">
          <span>{displayLabel}</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={\`progress-fill progress-\${variant} \${animated ? 'progress-animated' : ''} \${striped ? 'progress-striped' : ''}\`}
          style={{ width: \`\${percentage}%\` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={\`Progress: \${Math.round(percentage)}%\`}
        ></div>
      </div>
    </div>
  );
}`,
    css: `.progress-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;
}

.dark-mode .progress-label {
  color: var(--text-tertiary);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark-mode .progress-bar {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
}

.progress-small .progress-bar {
  height: 4px;
  border-radius: 4px;
}

.progress-medium .progress-bar {
  height: 8px;
  border-radius: 8px;
}

.progress-large .progress-bar {
  height: 12px;
  border-radius: 12px;
}

.progress-fill {
  height: 100%;
  border-radius: inherit;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.progress-animated .progress-fill {
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-striped .progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1rem 0;
  }
}

.progress-primary {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.progress-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
  box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3);
}

.progress-success {
  background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.progress-warning {
  background: linear-gradient(135deg, var(--warning) 0%, #d97706 100%);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.progress-error {
  background: linear-gradient(135deg, var(--error) 0%, #dc2626 100%);
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
}

/* Smooth shimmer effect for animated progress */
.progress-animated .progress-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: progress-shimmer 2s infinite;
}

@keyframes progress-shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .progress-label {
    font-size: 0.8125rem;
  }
}`,
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
}`,
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
}`,
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
}`,
  },
  Skeleton: {
    jsx: `import React from 'react';
import './Skeleton.css';

/**
 * Reusable Skeleton Loading Component
 *
 * @param {string} variant - Variant: 'text', 'circular', 'rectangular', 'rounded'
 * @param {string|number} width - Custom width
 * @param {string|number} height - Custom height
 * @param {string} className - Additional CSS classes
 */
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
      aria-label="Loading"
      role="status"
    />
  );
}`,
    css: `.skeleton {
  background: var(--bg-tertiary);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: shimmer 1.5s ease-in-out infinite;
  transform: translateX(-100%);
}

.dark-mode .skeleton::after {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
}

.skeleton-text {
  height: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 4px;
}

.skeleton-text:last-child {
  width: 60%;
  margin-bottom: 0;
}

.skeleton-circular {
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.skeleton-rectangular {
  width: 100%;
  height: 200px;
  border-radius: 8px;
}

.skeleton-rounded {
  border-radius: 12px;
  width: 100%;
  height: 100px;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Pulse animation alternative */
.skeleton-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}`,
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
}`,
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
  color: #6b7280;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.breadcrumb-link {
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #00338d;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}`,
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
  padding: 0.5rem 0;
}

.pagination-button {
  min-width: 40px;
  height: 40px;
  padding: 0.5rem 0.875rem;
  border: 1px solid var(--border-light);
  border-radius: 10px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  position: relative;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.pagination-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.05) 0%, rgba(0, 51, 141, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.pagination-button:hover:not(:disabled):not(.active) {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-1px);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.15),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

.pagination-button:hover:not(:disabled):not(.active)::before {
  opacity: 1;
}

.pagination-button:active:not(:disabled):not(.active) {
  transform: translateY(0);
  box-shadow: 
    0 2px 6px rgba(0, 51, 141, 0.1),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: var(--bg-tertiary);
  border-color: var(--border-light);
  color: var(--text-tertiary);
}

.pagination-button:disabled:hover {
  transform: none;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.pagination-button.active {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  border-color: var(--accent-primary);
  color: #ffffff;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  font-weight: 600;
  transform: scale(1.05);
}

.pagination-button.active::before {
  display: none;
}

.pagination-button.active:hover {
  background: linear-gradient(135deg, #0052cc 0%, #0052cc 100%);
  transform: scale(1.05) translateY(-1px);
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.35),
    0 3px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.pagination-button.active:active {
  transform: scale(1.02);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.dark-mode .pagination-button {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.dark-mode .pagination-button:hover:not(:disabled):not(.active) {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-primary);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    0 0 0 1px rgba(0, 51, 141, 0.2);
}

.dark-mode .pagination-button:disabled {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.05);
}

.dark-mode .pagination-button.active {
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.5),
    0 2px 6px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .pagination-button.active:hover {
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.6),
    0 3px 8px rgba(0, 51, 141, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.pagination-button:focus-visible {
  outline: none;
  box-shadow: 
    0 0 0 3px rgba(0, 51, 141, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.05);
}

.pagination-button.active:focus-visible {
  box-shadow: 
    0 0 0 3px rgba(0, 51, 141, 0.3),
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2);
}

@media (max-width: 768px) {
  .pagination {
    gap: 0.375rem;
  }

  .pagination-button {
    min-width: 36px;
    height: 36px;
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
    border-radius: 8px;
  }

  .pagination-button.active {
    transform: scale(1.03);
  }

  .pagination-button.active:hover {
    transform: scale(1.03) translateY(-1px);
  }
}`,
  },
  Accordion: {
    jsx: `import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import './Accordion.css';

/**
 * Reusable Accordion Component
 *
 * @param {Array} items - Array of accordion items with title and content
 * @param {boolean} allowMultiple - Allow multiple items to be open at once
 * @param {Array} defaultOpen - Array of indices that should be open by default
 * @param {string} className - Additional CSS classes
 */
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
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div key={index} className="accordion-item">
            <button
              className={\`accordion-header \${isOpen ? 'open' : ''}\`}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              type="button"
            >
              <span className="accordion-title">{item.title}</span>
              <HiChevronDown
                className={\`accordion-icon \${isOpen ? 'open' : ''}\`}
                aria-hidden="true"
              />
            </button>
            <div className={\`accordion-content \${isOpen ? 'open' : ''}\`}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
    css: `.accordion {
  width: 100%;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-card);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.dark-mode .accordion {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-color: var(--border-color);
}

.accordion-item {
  border-bottom: 1px solid var(--border-light);
  transition: border-color 0.3s ease;
  position: relative;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: var(--bg-card);
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  font-family: inherit;
  position: relative;
  z-index: 1;
}

.accordion-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: var(--accent-primary);
  transition: width 0.3s ease;
  z-index: -1;
}

.accordion-header:hover {
  background: var(--bg-tertiary);
  padding-left: 1.75rem;
}

.accordion-header:hover::before {
  width: 4px;
}

.accordion-header.open {
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-card) 100%);
  border-bottom: 1px solid var(--border-light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.accordion-header.open::before {
  width: 4px;
}

.dark-mode .accordion-header.open {
  background: var(--bg-tertiary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.accordion-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
  letter-spacing: 0.01em;
  flex: 1;
}

.accordion-header:hover .accordion-title {
  color: var(--accent-primary);
}

.accordion-header.open .accordion-title {
  color: var(--accent-primary);
  font-weight: 700;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  color: var(--text-tertiary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  margin-left: 1rem;
}

.accordion-header:hover .accordion-icon {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.accordion-icon.open {
  transform: rotate(180deg) scale(1.1);
  color: var(--accent-primary);
}

.accordion-content {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  background: var(--bg-card);
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.9375rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.accordion-content.open {
  padding: 1.25rem 1.5rem;
  max-height: 1000px;
  opacity: 1;
  animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
  }
}

/* Smooth content reveal */
.accordion-item {
  overflow: hidden;
}

/* Focus states for accessibility */
.accordion-header:focus {
  outline: none;
}

.accordion-header:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: -2px;
  border-radius: 0;
}

.accordion-header:focus-visible:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

/* Responsive design */
@media (max-width: 768px) {
  .accordion-header {
    padding: 1rem 1.25rem;
  }

  .accordion-header:hover {
    padding-left: 1.5rem;
  }

  .accordion-content.open {
    padding: 1rem 1.25rem;
  }

  .accordion-title {
    font-size: 0.9375rem;
  }

  .accordion-icon {
    width: 20px;
    height: 20px;
  }
}`,
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
  background: #fafafa;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  border: 1px solid #d1d5db;
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
  border-bottom: 1px solid #d1d5db;
  transition: border-color 0.3s ease;
}

.drawer-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00338d;
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
  color: #6b7280;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.drawer-close:hover {
  background: #f0f0f0;
  color: #1a1a1a;
}

.drawer-content {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
  color: #374151;
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
}`,
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
  background: #fafafa;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #1a1a1a;
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
  border-top-color: #fafafa;
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
  border-bottom-color: #fafafa;
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
  border-left-color: #fafafa;
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
  border-right-color: #fafafa;
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
}`,
  },
  Stepper: {
    jsx: `import React from 'react';
import { HiCheck } from 'react-icons/hi2';
import './Stepper.css';

export default function Stepper({
  steps = [],
  currentStep = 0,
  activeStep,
  orientation = 'horizontal',
  className = '',
  ...props
}) {
  // Support both currentStep and activeStep for backward compatibility
  const activeStepIndex = activeStep !== undefined ? activeStep : currentStep;
  
  return (
    <div className={\`stepper stepper-\${orientation} \${className}\`} {...props}>
      {steps.map((step, index) => {
        const isCompleted = index < activeStepIndex;
        const isActive = index === activeStepIndex;
        const isPending = index > activeStepIndex;

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
  justify-content: space-between;
  padding: 2rem 0;
  gap: 0;
  position: relative;
  background: transparent;
}

.stepper-horizontal {
  flex-direction: row;
  align-items: flex-start;
}

.stepper-vertical {
  flex-direction: column;
  gap: 2.5rem;
  align-items: flex-start;
}

.stepper-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  min-width: 0;
  z-index: 1;
}

.stepper-horizontal .stepper-step {
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.stepper-connector {
  position: absolute;
  top: 24px;
  left: 50%;
  right: -50%;
  height: 4px;
  z-index: 0;
  transform: translateX(-50%);
}

.stepper-step:first-child .stepper-connector {
  left: 50%;
}

.stepper-step:last-child .stepper-connector {
  display: none;
}

.stepper-horizontal .stepper-connector {
  top: 24px;
  left: calc(50% + 24px);
  right: calc(-50% + 24px);
  height: 4px;
  transform: none;
}

.stepper-line {
  height: 4px;
  background: var(--border-light);
  border-radius: 4px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.stepper-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--accent-primary) 0%, #0066ff 100%);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 51, 141, 0.3);
}

.stepper-line.completed {
  background: linear-gradient(90deg, var(--accent-primary) 0%, #0066ff 100%);
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.stepper-line.completed::after {
  width: 100%;
}

.stepper-indicator {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 3px solid var(--border-light);
  color: var(--text-tertiary);
  font-weight: 600;
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(0, 51, 141, 0);
  flex-shrink: 0;
}

.stepper-indicator::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.stepper-indicator.active {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  border-color: var(--accent-primary);
  color: #ffffff;
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.35),
    0 4px 12px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 4px rgba(0, 51, 141, 0.1);
  transform: scale(1.1);
  animation: pulseActive 2s ease-in-out infinite;
}

.stepper-indicator.active::before {
  background: rgba(0, 51, 141, 0.15);
  transform: scale(1.3);
}

.stepper-indicator.completed {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-color: #10b981;
  color: #ffffff;
  box-shadow: 
    0 4px 16px rgba(16, 185, 129, 0.3),
    0 2px 8px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: scale(1);
}

.stepper-indicator.completed::before {
  background: rgba(16, 185, 129, 0.1);
  transform: scale(1.2);
}

.stepper-indicator.pending {
  background: var(--bg-card);
  border-color: var(--border-light);
  color: var(--text-tertiary);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.stepper-number {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.stepper-check-icon {
  width: 22px;
  height: 22px;
  stroke-width: 3;
  animation: checkmarkIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.stepper-label {
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
  max-width: 140px;
}

.stepper-horizontal .stepper-label {
  margin-top: 1rem;
  text-align: center;
  max-width: 100%;
}

.stepper-label-text {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.4;
  letter-spacing: -0.2px;
}

.stepper-label-text.active {
  color: var(--accent-primary);
  font-weight: 700;
  font-size: 1rem;
  transform: translateY(-2px);
  text-shadow: 0 1px 2px rgba(0, 51, 141, 0.1);
}

.stepper-description {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.4;
  margin-top: 0.125rem;
  font-weight: 400;
}

.stepper-label-text.active + .stepper-description {
  color: var(--text-secondary);
  font-weight: 500;
}

@keyframes pulseActive {
  0%, 100% {
    box-shadow: 
      0 8px 24px rgba(0, 51, 141, 0.35),
      0 4px 12px rgba(0, 51, 141, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 4px rgba(0, 51, 141, 0.1);
  }
  50% {
    box-shadow: 
      0 8px 24px rgba(0, 51, 141, 0.4),
      0 4px 12px rgba(0, 51, 141, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 6px rgba(0, 51, 141, 0.15);
  }
}

@keyframes checkmarkIn {
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.dark-mode .stepper-indicator {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text-tertiary);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.dark-mode .stepper-indicator.pending {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
}

.dark-mode .stepper-indicator.active {
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.5),
    0 4px 12px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 0 4px rgba(0, 51, 141, 0.2);
}

.dark-mode .stepper-indicator.completed {
  box-shadow: 
    0 4px 16px rgba(16, 185, 129, 0.4),
    0 2px 8px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .stepper-line {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark-mode .stepper-line.completed {
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark-mode .stepper-label-text {
  color: var(--text-secondary);
}

.dark-mode .stepper-label-text.active {
  text-shadow: 0 1px 2px rgba(0, 51, 141, 0.3);
}

.dark-mode .stepper-description {
  color: var(--text-tertiary);
}`,
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
  gap: 0.375rem;
  padding: 0.25rem;
}

.rating-star {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: var(--text-tertiary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: none;
  border-radius: 4px;
}

.rating-star::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 6px;
  background: rgba(255, 193, 7, 0);
  transition: background 0.2s ease;
  z-index: -1;
}

.rating-star:hover::before {
  background: rgba(255, 193, 7, 0.1);
}

.rating-star:focus-visible {
  outline: 2px solid rgba(255, 193, 7, 0.5);
  outline-offset: 2px;
}

.rating-star svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .rating-star svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.rating-star:not(.readonly):not(:disabled):hover {
  color: #ffc107;
  transform: scale(1.15) rotate(5deg);
}

.rating-star:not(.readonly):not(:disabled):hover svg {
  filter: drop-shadow(0 2px 8px rgba(255, 193, 7, 0.4));
}

.rating-star:not(.readonly):not(:disabled):active {
  transform: scale(1.05) rotate(-2deg);
}

.rating-star.filled {
  color: #ffc107;
  position: relative;
}

.rating-star.filled svg {
  filter: drop-shadow(0 2px 6px rgba(255, 193, 7, 0.5));
  animation: starFill 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .rating-star.filled svg {
  filter: drop-shadow(0 2px 6px rgba(255, 193, 7, 0.6));
}

.rating-star.filled::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 8px;
  background: radial-gradient(
    circle,
    rgba(255, 193, 7, 0.2) 0%,
    transparent 70%
  );
  opacity: 0;
  animation: starGlow 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  pointer-events: none;
}

.rating-star.half {
  position: relative;
  color: var(--text-tertiary);
}

.rating-star.half::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  color: #ffc107;
  overflow: hidden;
  z-index: 1;
}

.rating-star.half svg {
  position: relative;
  z-index: 0;
}

.rating.readonly .rating-star {
  cursor: default;
}

.rating.readonly .rating-star:hover {
  transform: none;
}

.rating.readonly .rating-star:hover::before {
  background: transparent;
}

.rating-small {
  gap: 0.25rem;
}

.rating-small .rating-star {
  width: 18px;
  height: 18px;
  font-size: 18px;
  padding: 0.125rem;
}

.rating-medium .rating-star {
  width: 28px;
  height: 28px;
  font-size: 28px;
  padding: 0.25rem;
}

.rating-large .rating-star {
  width: 36px;
  height: 36px;
  font-size: 36px;
  padding: 0.375rem;
}

.rating-star:disabled {
  cursor: default;
  opacity: 0.6;
}

@keyframes starFill {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes starGlow {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .rating {
    gap: 0.25rem;
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
}`,
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
      <div 
        className="slider-container"
        style={{
          '--percentage': \`\${percentage}%\`,
        }}
      >
        <input
          type="range"
          className="slider-input"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
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
  padding: 0.75rem 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.slider-value {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--accent-primary);
  transition: color 0.2s ease;
}

.slider-container {
  position: relative;
  width: 100%;
  padding: 0.75rem 0;
}

.slider-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  width: var(--percentage, 0%);
  background: var(--accent-primary);
  border-radius: 3px;
  transition: width 0.1s linear;
  pointer-events: none;
  z-index: 1;
}

.slider-input {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border-light);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  transition: background 0.2s ease;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.dark-mode .slider-input {
  background: rgba(255, 255, 255, 0.1);
}

.slider-input::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: transparent;
}

.slider-input::-moz-range-track {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: transparent;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 2px solid var(--accent-primary);
  box-shadow: 
    0 2px 6px rgba(0, 51, 141, 0.25),
    0 0 0 0 rgba(0, 51, 141, 0);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: -7px;
}

.slider-input::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 
    0 3px 10px rgba(0, 51, 141, 0.35),
    0 0 0 4px rgba(0, 51, 141, 0.1);
}

.slider-input::-webkit-slider-thumb:active {
  transform: scale(1.1);
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.3),
    0 0 0 3px rgba(0, 51, 141, 0.15);
}

.slider-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 2px solid var(--accent-primary);
  box-shadow: 
    0 2px 6px rgba(0, 51, 141, 0.25),
    0 0 0 0 rgba(0, 51, 141, 0);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slider-input::-moz-range-thumb:hover {
  transform: scale(1.15);
  box-shadow: 
    0 3px 10px rgba(0, 51, 141, 0.35),
    0 0 0 4px rgba(0, 51, 141, 0.1);
}

.slider-input::-moz-range-thumb:active {
  transform: scale(1.1);
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.3),
    0 0 0 3px rgba(0, 51, 141, 0.15);
}

.slider-input:focus-visible {
  outline: none;
}

.slider-input:focus-visible::-webkit-slider-thumb {
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.15),
    0 2px 6px rgba(0, 51, 141, 0.25);
}

.slider-input:focus-visible::-moz-range-thumb {
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.15),
    0 2px 6px rgba(0, 51, 141, 0.25);
}

.slider-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-input:disabled::-webkit-slider-thumb,
.slider-input:disabled::-moz-range-thumb {
  cursor: not-allowed;
  opacity: 0.6;
}

.slider-input:disabled::-webkit-slider-thumb:hover,
.slider-input:disabled::-moz-range-thumb:hover {
  transform: none;
}

.slider-value-display {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-primary);
  transition: color 0.2s ease;
}

@media (max-width: 768px) {
  .slider-wrapper {
    padding: 0.625rem 0;
  }

  .slider-label {
    margin-bottom: 0.625rem;
    font-size: 0.8125rem;
  }

  .slider-value {
    font-size: 0.8125rem;
  }

  .slider-container {
    padding: 0.625rem 0;
  }

  .slider-container::before {
    height: 5px;
  }

  .slider-input {
    height: 5px;
  }

  .slider-input::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    margin-top: -6.5px;
  }

  .slider-input::-moz-range-thumb {
    width: 18px;
    height: 18px;
  }

  .slider-value-display {
    font-size: 0.8125rem;
    margin-top: 0.5rem;
  }
}`,
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
          {items.map((item, index) => {
            // Handle divider items
            if (item.type === 'divider' || item.divider) {
              return <div key={index} className="menu-divider" />;
            }
            
            return (
              <div
                key={index}
                className={\`menu-item \${item.disabled ? 'disabled' : ''}\`}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                <span className="menu-label">{item.label || ''}</span>
                {item.children && <HiChevronRight className="menu-arrow" />}
              </div>
            );
          })}
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
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  padding: 0.5rem;
  min-width: 220px;
  z-index: 1000;
  animation: menuSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.dark-mode .menu {
  background: rgba(30, 30, 30, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.menu-bottom-left {
  top: calc(100% + 8px);
  left: 0;
  animation: menuSlideInBottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-bottom-right {
  top: calc(100% + 8px);
  right: 0;
  animation: menuSlideInBottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-top-left {
  bottom: calc(100% + 8px);
  left: 0;
  animation: menuSlideInTop 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-top-right {
  bottom: calc(100% + 8px);
  right: 0;
  animation: menuSlideInTop 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 0.125rem 0;
}

.menu-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) scaleY(0);
  width: 3px;
  height: 0;
  background: var(--accent-primary);
  border-radius: 0 2px 2px 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item:hover:not(.disabled) {
  background: linear-gradient(
    90deg,
    rgba(0, 51, 141, 0.08) 0%,
    rgba(0, 51, 141, 0.04) 100%
  );
  color: var(--accent-primary);
  transform: translateX(2px);
}

.menu-item:hover:not(.disabled)::before {
  transform: translateY(-50%) scaleY(1);
  height: 60%;
}

.dark-mode .menu-item:hover:not(.disabled) {
  background: linear-gradient(
    90deg,
    rgba(0, 51, 141, 0.2) 0%,
    rgba(0, 51, 141, 0.1) 100%
  );
}

.menu-item.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.menu-divider {
  height: 1px;
  background: var(--border-light);
  margin: 0.375rem 0;
  border: none;
  padding: 0;
}

.dark-mode .menu-divider {
  background: rgba(255, 255, 255, 0.1);
}

.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
  transition: color 0.2s ease, transform 0.2s ease;
}

.menu-item:hover:not(.disabled) .menu-icon {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.menu-label {
  flex: 1;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-tertiary);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.menu-item:hover:not(.disabled) .menu-arrow {
  color: var(--accent-primary);
  transform: translateX(2px);
}

@keyframes menuSlideIn {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes menuSlideInBottom {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes menuSlideInTop {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .menu {
    min-width: 200px;
    padding: 0.5rem;
  }

  .menu-item {
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
  }

  .menu-icon {
    font-size: 1rem;
    width: 18px;
    height: 18px;
  }
}`,
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
  border-color: #3b82f6;
  color: #3b82f6;
}

.toast-success {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  color: #10b981;
}

.toast-warning {
  background: rgba(245, 158, 11, 0.1);
  border-color: #f59e0b;
  color: #f59e0b;
}

.toast-error {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
  color: #ef4444;
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
}`,
  },
  ToastContainer: {
    jsx: `import React from 'react';
import Toast from '../Toast';
import './ToastContainer.css';

/**
 * Toast Container Component for managing multiple toasts
 *
 * @param {Array} toasts - Array of toast objects { id, message, variant, duration }
 * @param {string} position - Position: 'top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'
 * @param {Function} onRemove - Callback when toast is removed (receives toast id)
 * @param {string} className - Additional CSS classes
 */
export default function ToastContainer({
  toasts = [],
  position = 'top-right',
  onRemove,
  className = '',
  ...props
}) {
  if (toasts.length === 0) return null;

  return (
    <div
      className={\`toast-container toast-container-\${position} \${className}\`}
      {...props}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          duration={toast.duration}
          onClose={() => onRemove?.(toast.id)}
        />
      ))}
    </div>
  );
}`,
    css: `.toast-container {
  position: fixed;
  z-index: 10001;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  pointer-events: none;
}

.toast-container-top-right {
  top: 1rem;
  right: 1rem;
  align-items: flex-end;
}

.toast-container-top-left {
  top: 1rem;
  left: 1rem;
  align-items: flex-start;
}

.toast-container-top-center {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.toast-container-bottom-right {
  bottom: 1rem;
  right: 1rem;
  align-items: flex-end;
}

.toast-container-bottom-left {
  bottom: 1rem;
  left: 1rem;
  align-items: flex-start;
}

.toast-container-bottom-center {
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.toast-container > * {
  pointer-events: auto;
}

@media (max-width: 768px) {
  .toast-container {
    padding: 0.75rem;
  }

  .toast-container-top-right,
  .toast-container-top-left,
  .toast-container-top-center {
    top: 0.5rem;
  }

  .toast-container-bottom-right,
  .toast-container-bottom-left,
  .toast-container-bottom-center {
    bottom: 0.5rem;
  }
}`,
  },
  Table: {
    jsx: `import React from 'react';
import './Table.css';

/**
 * Reusable Table Component
 *
 * @param {Array} columns - Array of column definitions { key, label, sortable } or array of strings
 * @param {Array} data - Array of data objects or array of arrays
 * @param {boolean} striped - Striped rows
 * @param {boolean} bordered - Bordered table
 * @param {string} className - Additional CSS classes
 */
export default function Table({
  columns = [],
  data = [],
  striped = false,
  bordered = false,
  className = '',
  ...props
}) {
  // Normalize columns - support both array of strings and array of objects
  const normalizedColumns = columns.map((col, index) => {
    if (typeof col === 'string') {
      return { key: col.toLowerCase().replace(/\\s+/g, '_'), label: col, sortable: false };
    }
    return { key: col.key || \`col_\${index}\`, label: col.label || col.key, sortable: col.sortable || false };
  });

  // Normalize data - support both array of arrays and array of objects
  const normalizedData = data.map((row) => {
    if (Array.isArray(row)) {
      // Convert array to object using column keys
      const rowObj = {};
      normalizedColumns.forEach((col, index) => {
        rowObj[col.key] = row[index] || '';
      });
      return rowObj;
    }
    return row;
  });

  return (
    <div className={\`table-wrapper \${className}\`} {...props}>
      <table
        className={\`table \${striped ? 'table-striped' : ''} \${bordered ? 'table-bordered' : ''}\`}
      >
        <thead>
          <tr>
            {normalizedColumns.map((column) => (
              <th
                key={column.key}
                className={column.sortable ? 'sortable' : ''}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {normalizedData.length > 0 ? (
            normalizedData.map((row, index) => (
              <tr key={index}>
                {normalizedColumns.map((column) => (
                  <td key={column.key}>{row[column.key] || ''}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={normalizedColumns.length} className="table-empty">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}`,
    css: `.table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  background: var(--bg-card);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.dark-mode .table-wrapper {
  border-color: var(--border-color);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  table-layout: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: table;
  min-width: 100%;
}

.table thead {
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(0, 51, 141, 0.05) 100%);
  position: sticky;
  top: 0;
  z-index: 10;
}

.dark-mode .table thead {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
}

.table th {
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 700;
  color: var(--text-primary);
  border-bottom: 2px solid var(--border-color);
  white-space: normal;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  box-sizing: border-box;
}

.table th::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
}

.table th.sortable:hover {
  color: var(--accent-primary);
  background: rgba(0, 51, 141, 0.05);
}

.table th.sortable:hover::after {
  opacity: 0.3;
}

.dark-mode .table th.sortable:hover {
  background: rgba(255, 255, 255, 0.05);
}

.table td {
  padding: 1rem 1.25rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
  transition: all 0.2s ease;
  font-size: 0.9375rem;
  line-height: 1.5;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.table tbody tr {
  transition: all 0.2s ease;
}

.table tbody tr:hover {
  background: var(--bg-tertiary);
  transform: scale(1.001);
}

.dark-mode .table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

/* Striped table - improved styling */
.table-striped tbody tr {
  background: transparent;
}

.table-striped tbody tr:nth-child(odd) {
  background: var(--bg-card);
}

.table-striped tbody tr:nth-child(even) {
  background: var(--bg-tertiary);
}

.dark-mode .table-striped tbody tr:nth-child(odd) {
  background: var(--bg-card);
}

.dark-mode .table-striped tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.03);
}

/* Striped table hover states */
.table-striped tbody tr:nth-child(odd):hover {
  background: rgba(0, 51, 141, 0.06);
}

.table-striped tbody tr:nth-child(even):hover {
  background: rgba(0, 51, 141, 0.1);
}

.dark-mode .table-striped tbody tr:nth-child(odd):hover {
  background: rgba(255, 255, 255, 0.04);
}

.dark-mode .table-striped tbody tr:nth-child(even):hover {
  background: rgba(255, 255, 255, 0.06);
}

.table-bordered {
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid var(--border-light);
  box-sizing: border-box;
}

.table-empty {
  text-align: center;
  color: var(--text-tertiary);
  padding: 3rem 1rem !important;
  font-style: italic;
}

@media (max-width: 768px) {
  .table-wrapper {
    border-radius: 8px;
  }

  .table {
    font-size: 0.875rem;
  }

  .table th {
    padding: 0.875rem 1rem;
    font-size: 0.8125rem;
  }

  .table td {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
}`,
  },
  Timeline: {
    jsx: `import React from 'react';
import './Timeline.css';

/**
 * Reusable Timeline Component
 *
 * @param {Array} items - Array of timeline items { title, description, date, icon }
 * @param {string} orientation - 'vertical' or 'horizontal'
 * @param {string} className - Additional CSS classes
 */
export default function Timeline({
  items = [],
  orientation = 'vertical',
  className = '',
  ...props
}) {
  return (
    <div className={\`timeline timeline-\${orientation} \${className}\`} {...props}>
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker">
            {item.icon || <div className="timeline-dot"></div>}
          </div>
          <div className="timeline-content">
            {item.date && <div className="timeline-date">{item.date}</div>}
            <h3 className="timeline-title">{item.title}</h3>
            {item.description && (
              <p className="timeline-description">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}`,
    css: `.timeline {
  position: relative;
  width: 100%;
}

.timeline-vertical {
  padding-left: 3rem;
}

.timeline-vertical::before {
  content: "";
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--border-light) 0%,
    var(--accent-primary) 50%,
    var(--border-light) 100%
  );
  border-radius: 2px;
}

.dark-mode .timeline-vertical::before {
  background: linear-gradient(
    to bottom,
    var(--border-color) 0%,
    var(--accent-primary) 50%,
    var(--border-color) 100%
  );
}

.timeline-item {
  position: relative;
  padding-bottom: 3rem;
  display: flex;
  gap: 1.5rem;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-item:nth-child(4) {
  animation-delay: 0.4s;
}

.timeline-item:nth-child(5) {
  animation-delay: 0.5s;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item:last-child .timeline-marker::after {
  display: none;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-marker {
  position: absolute;
  left: -3rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 3px solid var(--accent-primary);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 
    0 0 0 4px var(--bg-card),
    0 4px 12px rgba(0, 51, 141, 0.2),
    0 2px 6px rgba(0, 51, 141, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .timeline-marker {
  box-shadow: 
    0 0 0 4px var(--bg-card),
    0 4px 12px rgba(0, 51, 141, 0.4),
    0 2px 6px rgba(0, 51, 141, 0.3);
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.15);
  box-shadow: 
    0 0 0 4px var(--bg-card),
    0 6px 20px rgba(0, 51, 141, 0.35),
    0 4px 12px rgba(0, 51, 141, 0.25);
  border-color: var(--accent-primary);
}

.timeline-marker::after {
  content: "";
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 3rem;
  background: linear-gradient(
    to bottom,
    var(--accent-primary) 0%,
    transparent 100%
  );
  opacity: 0.3;
}

.timeline-dot {
  width: 0.625rem;
  height: 0.625rem;
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.4);
}

.timeline-content {
  flex: 1;
  padding-top: 0.125rem;
  position: relative;
}

.timeline-content::before {
  content: "";
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1px;
  background: linear-gradient(
    to right,
    var(--accent-primary) 0%,
    transparent 100%
  );
  opacity: 0.5;
}

.timeline-date {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--bg-tertiary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.dark-mode .timeline-date {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.timeline-item:hover .timeline-date {
  background: rgba(0, 51, 141, 0.1);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateX(4px);
}

.dark-mode .timeline-item:hover .timeline-date {
  background: rgba(0, 51, 141, 0.2);
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
}

.timeline-item:hover .timeline-title {
  color: var(--accent-primary);
}

.timeline-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .timeline-description {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.timeline-item:hover .timeline-description {
  border-color: var(--accent-primary);
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.12),
    0 2px 8px rgba(0, 51, 141, 0.08);
  transform: translateX(4px);
}

.dark-mode .timeline-item:hover .timeline-description {
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.25),
    0 2px 8px rgba(0, 51, 141, 0.15);
}

.timeline-marker svg,
.timeline-marker i {
  width: 1rem;
  height: 1rem;
  color: var(--accent-primary);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker svg,
.timeline-item:hover .timeline-marker i {
  transform: scale(1.2) rotate(5deg);
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .timeline-vertical {
    padding-left: 2.5rem;
  }

  .timeline-vertical::before {
    left: 0.75rem;
    width: 1.5px;
  }

  .timeline-marker {
    left: -2.5rem;
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: 
      0 0 0 3px var(--bg-card),
      0 3px 10px rgba(0, 51, 141, 0.2);
  }

  .timeline-item {
    padding-bottom: 2.5rem;
    gap: 1rem;
  }

  .timeline-title {
    font-size: 1.125rem;
  }

  .timeline-description {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }

  .timeline-date {
    font-size: 0.75rem;
    padding: 0.2rem 0.625rem;
  }
}

@media (max-width: 480px) {
  .timeline-vertical {
    padding-left: 2rem;
  }

  .timeline-marker {
    left: -2rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  .timeline-vertical::before {
    left: 0.5rem;
  }
}`,
  },
  Carousel: {
    jsx: `import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Carousel.css';

export default function Carousel({
  items = [],
  autoPlay = false,
  interval = 3000,
  showIndicators = true,
  showArrows = true,
  className = '',
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection('next');
    } else if (index < currentIndex) {
      setDirection('prev');
    }
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className={\`carousel \${className}\`} {...props}>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={\`carousel-slide \${index === currentIndex ? 'active' : ''} \${index === currentIndex ? 'slide-' + direction : ''}\`}
          >
            {typeof item === 'object' && item !== null && 'content' in item ? item.content : item}
          </div>
        ))}
      </div>
      {showArrows && items.length > 1 && (
        <>
          <button 
            className="carousel-arrow carousel-arrow-prev" 
            onClick={goToPrevious}
            aria-label="Previous slide"
            type="button"
          >
            <HiChevronLeft />
          </button>
          <button 
            className="carousel-arrow carousel-arrow-next" 
            onClick={goToNext}
            aria-label="Next slide"
            type="button"
          >
            <HiChevronRight />
          </button>
        </>
      )}
      {showIndicators && items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={\`carousel-indicator \${index === currentIndex ? 'active' : ''}\`}
              onClick={() => goToSlide(index)}
              aria-label={\`Go to slide \${index + 1}\`}
            />
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .carousel {
  border-color: var(--border-color);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.carousel:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.15),
    0 6px 20px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(0, 51, 141, 0.3);
}

.dark-mode .carousel:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.3),
    0 6px 20px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  border-radius: 20px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(0) scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  will-change: opacity, transform;
}

.carousel-slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
  z-index: 1;
}

.carousel-slide.active.slide-next {
  animation: slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide.active.slide-prev {
  animation: slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 51, 141, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--accent-primary);
  font-size: 1.5rem;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.12),
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.carousel-arrow::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.9) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-arrow:hover::before {
  opacity: 1;
}

.carousel-arrow:hover {
  background: var(--accent-primary);
  color: white;
  transform: translateY(-50%) scale(1.15);
  border-color: var(--accent-primary);
  box-shadow: 
    0 12px 32px rgba(0, 51, 141, 0.4),
    0 6px 16px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(1.05);
}

.carousel-arrow svg {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.carousel-arrow:hover svg {
  transform: scale(1.1);
}

.carousel-arrow-prev {
  left: 1.5rem;
}

.carousel-arrow-next {
  right: 1.5rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.625rem;
  z-index: 10;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 51, 141, 0.1);
}

.dark-mode .carousel-indicators {
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
}

.carousel-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 51, 141, 0.3);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  position: relative;
  overflow: hidden;
}

.carousel-indicator::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.carousel-indicator:hover::before {
  opacity: 0.5;
}

.carousel-indicator:hover {
  transform: scale(1.3);
  background: rgba(0, 51, 141, 0.5);
}

.carousel-indicator.active {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
  box-shadow: 
    0 0 12px rgba(0, 51, 141, 0.5),
    0 0 6px rgba(0, 51, 141, 0.3);
  transform: scale(1.2);
}

.carousel-indicator.active::before {
  opacity: 1;
}

.carousel-indicator.active:hover {
  transform: scale(1.4);
}

.carousel-slide > * {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@media (max-width: 768px) {
  .carousel {
    border-radius: 16px;
  }

  .carousel-container {
    min-height: 300px;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }

  .carousel-arrow-prev {
    left: 0.75rem;
  }

  .carousel-arrow-next {
    right: 0.75rem;
  }

  .carousel-indicators {
    bottom: 1rem;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
  }

  .carousel-indicator {
    width: 6px;
    height: 6px;
  }

  .carousel-indicator.active {
    width: 6px;
    height: 6px;
    transform: scale(1.2);
  }
}

@media (max-width: 480px) {
  .carousel-container {
    min-height: 200px;
  }

  .carousel-arrow {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
  }

  .carousel-arrow-prev {
    left: 0.5rem;
  }

  .carousel-arrow-next {
    right: 0.5rem;
  }

  .carousel-indicators {
    bottom: 0.75rem;
    padding: 0.375rem 0.625rem;
  }
}`,
  },
  FileUpload: {
    jsx: `import React, { useState, useRef } from 'react';
import { HiCloudUpload, HiX } from 'react-icons/hi';
import './FileUpload.css';

export default function FileUpload({
  onFileSelect,
  accept = '*/*',
  maxSize = 10,
  multiple = false,
  className = '',
  ...props
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    const validFiles = fileArray.filter((file) => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(\`File \${file.name} exceeds maximum size of \${maxSize}MB\`);
        return false;
      }
      return true;
    });

    const newFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : newFiles[0]);
    }
  };

  return (
    <div className={\`file-upload \${className}\`} {...props}>
      <div
        className={\`file-upload-area \${isDragging ? 'dragging' : ''}\`}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFileSelect(e.dataTransfer.files);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        <HiCloudUpload className="file-upload-icon" />
        <p className="file-upload-text">Drag and drop files here, or click to select</p>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="file-upload-input"
        />
      </div>
    </div>
  );
}`,
    css: `.file-upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f0f0f0;
}

.file-upload-area:hover {
  border-color: #00338d;
  background: #fafafa;
}

.file-upload-area.dragging {
  border-color: #00338d;
  background: rgba(0, 51, 141, 0.05);
}`,
  },
  Calendar: {
    jsx: `import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import '../DateRangePicker/DateRangePicker.css';
import './Calendar.css';

/**
 * Reusable Calendar Component
 *
 * @param {Date} value - Selected date
 * @param {Function} onChange - Callback when date is selected
 * @param {Date} minDate - Minimum selectable date
 * @param {Date} maxDate - Maximum selectable date
 * @param {string} className - Additional CSS classes
 */
export default function Calendar({
  value = null,
  onChange,
  minDate = null,
  maxDate = null,
  className = '',
  ...props
}) {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [selectedDate, setSelectedDate] = useState(value);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (day, monthDate) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      monthDate.getMonth() === today.getMonth() &&
      monthDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day, monthDate) => {
    if (!selectedDate) return false;
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    return (
      date.getTime() ===
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ).getTime()
    );
  };

  const handleDateClick = (day, monthDate = currentDate) => {
    const newDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;
    setSelectedDate(newDate);
    if (onChange) onChange(newDate);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <div className="date-range-calendar">
        <div className="date-range-calendar-header">
          <button className="date-range-calendar-nav" onClick={goToPreviousMonth}>
            <HiChevronLeft />
          </button>
          <h3 className="date-range-calendar-month">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button className="date-range-calendar-nav" onClick={goToNextMonth}>
            <HiChevronRight />
          </button>
        </div>
        <div className="date-range-calendar-weekdays">
          {dayNames.map((day) => (
            <div key={day} className="date-range-calendar-weekday">{day}</div>
          ))}
        </div>
        <div className="date-range-calendar-days">
          {days.map((day, index) => {
            const isTodayDate = isToday(day, currentDate);
            const isSelectedDate = isSelected(day, currentDate);

            return (
              <button
                key={index}
                className={\`date-range-calendar-day \${day === null ? 'empty' : ''} \${isTodayDate ? 'today' : ''} \${isSelectedDate ? 'start' : ''}\`}
                onClick={() => day && handleDateClick(day)}
                disabled={day === null}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={\`calendar \${className}\`} {...props}>
      {renderCalendar()}
    </div>
  );
}`,
    css: `.calendar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  box-sizing: border-box;
}

.dark-mode .calendar {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.calendar .date-range-calendar {
  width: 100%;
  min-width: 320px;
  max-width: 360px;
  margin: 0 auto;
}

/* Use date-range-calendar styles from DateRangePicker.css */
/* Selected date uses "start" class to match DateRangePicker styling */
.date-range-calendar-day.start {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
  color: white;
  font-weight: 700;
  border-color: var(--accent-primary);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
  z-index: 2;
}

.date-range-calendar-day.start:hover {
  background: linear-gradient(135deg, var(--accent-hover), var(--accent-primary));
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 51, 141, 0.4);
}

@media (max-width: 768px) {
  .calendar {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .calendar .date-range-calendar {
    max-width: 100%;
    min-width: 100%;
  }
}`,
  },
  Notification: {
    jsx: `import React from 'react';
import { HiCheckCircle, HiInformationCircle, HiExclamationCircle, HiXCircle, HiX } from 'react-icons/hi';
import './Notification.css';

export default function Notification({
  type = 'info',
  title,
  message,
  showIcon = true,
  closable = true,
  onClose,
  className = '',
  ...props
}) {
  const icons = {
    success: HiCheckCircle,
    info: HiInformationCircle,
    warning: HiExclamationCircle,
    error: HiXCircle,
  };

  const Icon = icons[type] || HiInformationCircle;

  return (
    <div className={\`notification notification-\${type} \${className}\`} {...props}>
      {showIcon && (
        <div className="notification-icon">
          <Icon />
        </div>
      )}
      <div className="notification-content">
        {title && <h4 className="notification-title">{title}</h4>}
        {message && <p className="notification-message">{message}</p>}
      </div>
      {closable && onClose && (
        <button className="notification-close" onClick={onClose}>
          <HiX />
        </button>
      )}
    </div>
  );
}`,
    css: `.notification {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border: 1px solid;
  background: #fafafa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.notification-success {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.notification-info {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}`,
  },
  Backdrop: {
    jsx: `import React, { useEffect } from 'react';
import './Backdrop.css';

/**
 * Reusable Backdrop Component
 *
 * @param {boolean} open - Show backdrop
 * @param {boolean} isOpen - Alternative prop name for open
 * @param {Function} onClick - Click handler
 * @param {boolean} preventScroll - Prevent body scroll when backdrop is open
 * @param {string} className - Additional CSS classes
 */
export default function Backdrop({
  open: openProp = false,
  isOpen,
  onClick,
  preventScroll = true,
  className = '',
  ...props
}) {
  // Support both 'open' and 'isOpen' props
  const open = openProp || isOpen || false;

  // Prevent body scroll when backdrop is open
  useEffect(() => {
    if (open && preventScroll) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open, preventScroll]);

  if (!open) return null;

  const handleClick = (e) => {
    // Only trigger onClick if clicking directly on the backdrop (not on children)
    if (e.target === e.currentTarget && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={\`backdrop \${className}\`}
      onClick={handleClick}
      role="presentation"
      aria-hidden="true"
      {...props}
    />
  );
}`,
    css: `.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.backdrop:hover {
  background: rgba(0, 0, 0, 0.6);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Dark mode support */
.dark-mode .backdrop {
  background: rgba(0, 0, 0, 0.7);
}

.dark-mode .backdrop:hover {
  background: rgba(0, 0, 0, 0.8);
}`,
  },
  Snackbar: {
    jsx: `import React, { useEffect } from 'react';
import {
  HiXMark,
  HiCheckCircle,
  HiXCircle,
  HiExclamationTriangle,
  HiInformationCircle,
} from 'react-icons/hi2';
import './Snackbar.css';

/**
 * Reusable Snackbar Component
 *
 * @param {boolean} open - Show snackbar
 * @param {boolean} isOpen - Alternative prop name for open
 * @param {string} message - Snackbar message
 * @param {string} variant - Variant: 'default', 'success', 'error', 'warning', 'info'
 * @param {number} duration - Auto close duration in ms
 * @param {Function} onClose - Close callback
 * @param {string} position - Position: 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
 * @param {boolean} showIcon - Show icon for variant
 * @param {string} className - Additional CSS classes
 */
export default function Snackbar({
  open: openProp = false,
  isOpen,
  message = '',
  variant = 'default',
  duration = 4000,
  onClose,
  position = 'bottom-center',
  showIcon = true,
  className = '',
  ...props
}) {
  // Support both 'open' and 'isOpen' props
  const open = openProp || isOpen || false;

  useEffect(() => {
    if (open && duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  const icons = {
    success: HiCheckCircle,
    error: HiXCircle,
    warning: HiExclamationTriangle,
    info: HiInformationCircle,
  };

  const Icon = icons[variant] || null;

  return (
    <div
      className={\`snackbar snackbar-\${variant} snackbar-\${position} \${className}\`}
      {...props}
    >
      {showIcon && Icon && (
        <Icon className="snackbar-icon" />
      )}
      <span className="snackbar-message">{message}</span>
      {onClose && (
        <button className="snackbar-close" onClick={onClose} aria-label="Close">
          <HiXMark />
        </button>
      )}
    </div>
  );
}`,
    css: `.snackbar {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  background: var(--bg-card);
  color: var(--text-primary);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  min-width: 300px;
  max-width: 500px;
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--border-light);
  box-sizing: border-box;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.snackbar-top-left {
  top: 1rem;
  left: 1rem;
  animation: slideInDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-top-center {
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  animation: slideInDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-top-right {
  top: 1rem;
  right: 1rem;
  animation: slideInDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-bottom-left {
  bottom: 1rem;
  left: 1rem;
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-bottom-center {
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-bottom-right {
  bottom: 1rem;
  right: 1rem;
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.snackbar-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  opacity: 0.9;
}

.snackbar-message {
  flex: 1;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5;
}

.snackbar-close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 1.125rem;
  opacity: 0.7;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  flex-shrink: 0;
}

.snackbar-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.snackbar-success .snackbar-close:hover,
.snackbar-error .snackbar-close:hover,
.snackbar-warning .snackbar-close:hover,
.snackbar-info .snackbar-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.snackbar-default {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.snackbar-success {
  background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
}

.snackbar-error {
  background: linear-gradient(135deg, var(--error) 0%, #dc2626 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
}

.snackbar-warning {
  background: linear-gradient(135deg, var(--warning) 0%, #d97706 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);
}

.snackbar-info {
  background: linear-gradient(135deg, var(--info) 0%, #2563eb 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

@media (max-width: 768px) {
  .snackbar {
    min-width: calc(100% - 2rem);
    max-width: calc(100% - 2rem);
    left: 1rem !important;
    right: 1rem !important;
    transform: none !important;
  }

  .snackbar-bottom-center,
  .snackbar-top-center {
    left: 1rem !important;
    right: 1rem !important;
    transform: none !important;
  }
}`,
  },
  List: {
    jsx: `import React from 'react';
import './List.css';

/**
 * Reusable List Component
 *
 * @param {Array} items - Array of list items { primary, secondary, icon, action }
 * @param {boolean} dense - Dense spacing
 * @param {boolean} dividers - Show dividers
 * @param {string} variant - List variant: 'default', 'outlined', 'elevated'
 * @param {string} className - Additional CSS classes
 * @param {Function} onItemClick - Callback when item is clicked
 */
export default function List({
  items = [],
  dense = false,
  dividers = true,
  variant = 'default',
  className = '',
  onItemClick,
  ...props
}) {
  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    } else if (item.onClick) {
      item.onClick(item, index);
    }
  };

  return (
    <ul
      className={\`list list-\${variant} \${dense ? 'list-dense' : ''} \${dividers ? 'list-dividers' : ''} \${className}\`}
      {...props}
    >
      {items.length > 0 ? (
        items.map((item, index) => (
          <li
            key={item.id || index}
            className="list-item"
            onClick={() => handleItemClick(item, index)}
            style={item.disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
          >
            {item.icon && (
              <div className="list-item-icon">
                {typeof item.icon === 'string' ? (
                  <span>{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>
            )}
            <div className="list-item-content">
              {item.primary && (
                <div className="list-item-primary">{item.primary}</div>
              )}
              {item.secondary && (
                <div className="list-item-secondary">{item.secondary}</div>
              )}
            </div>
            {item.action && <div className="list-item-action">{item.action}</div>}
          </li>
        ))
      ) : (
        <li className="list-item" style={{ cursor: 'default', justifyContent: 'center', padding: '2rem' }}>
          <div className="list-item-content" style={{ textAlign: 'center' }}>
            <div className="list-item-secondary">No items to display</div>
          </div>
        </li>
      )}
    </ul>
  );
}`,
    css: `.list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.dark-mode .list {
  border-color: var(--border-color);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
}

.list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  background: transparent;
}

.list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.list-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(2px);
}

.list-item:hover::before {
  opacity: 1;
}

.dark-mode .list-item:hover {
  background: rgba(255, 255, 255, 0.03);
}

.list-dense .list-item {
  padding: 0.75rem 1rem;
  gap: 0.875rem;
}

.list-dividers .list-item:not(:last-child) {
  border-bottom: 1px solid var(--border-light);
}

.list-item-icon {
  flex-shrink: 0;
  color: var(--accent-primary);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  background: rgba(0, 51, 141, 0.08);
  transition: all 0.2s ease;
}

.dark-mode .list-item-icon {
  background: rgba(255, 255, 255, 0.05);
}

.list-item:hover .list-item-icon {
  background: rgba(0, 51, 141, 0.12);
  transform: scale(1.05);
  color: var(--accent-primary);
}

.dark-mode .list-item:hover .list-item-icon {
  background: rgba(255, 255, 255, 0.08);
}

.list-item-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.list-item-icon span {
  font-size: 1.5rem;
  line-height: 1;
}

.list-item-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.list-item-primary {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  transition: color 0.2s ease;
}

.list-item:hover .list-item-primary {
  color: var(--accent-primary);
}

.list-item-secondary {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  transition: color 0.2s ease;
}

.list-item-action {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform: translateX(-4px);
}

.list-item:hover .list-item-action {
  opacity: 1;
  transform: translateX(0);
}

.list-item-action button {
  transition: all 0.2s ease;
}

.list-item-action button:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .list {
    border-radius: 8px;
  }

  .list-item {
    padding: 0.875rem 1rem;
    gap: 0.875rem;
  }

  .list-item-icon {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.25rem;
  }

  .list-dense .list-item {
    padding: 0.625rem 0.875rem;
    gap: 0.75rem;
  }

  .list-dense .list-item-icon {
    width: 2rem;
    height: 2rem;
    font-size: 1.125rem;
  }

  .list-item-action {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Default variant - Card style with subtle shadow */
.list-default {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.04);
}

/* Outlined variant - Bold border, transparent background */
.list-outlined {
  background: transparent;
  border: 3px solid var(--accent-primary);
  box-shadow: none;
  border-radius: 16px;
}

.dark-mode .list-outlined {
  border-color: var(--accent-primary);
}

.list-outlined .list-item {
  border-radius: 12px;
  margin: 0.25rem 0.5rem;
  background: var(--bg-tertiary);
}

.list-outlined .list-item:first-child {
  margin-top: 0.5rem;
}

.list-outlined .list-item:last-child {
  margin-bottom: 0.5rem;
}

.list-outlined .list-item:hover {
  background: rgba(0, 51, 141, 0.1);
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.15);
}

.dark-mode .list-outlined .list-item {
  background: rgba(255, 255, 255, 0.03);
}

.dark-mode .list-outlined .list-item:hover {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.list-outlined .list-item-icon {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.list-outlined .list-item:hover .list-item-icon {
  background: var(--accent-primary);
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.4);
}

.list-outlined .list-item::before {
  display: none;
}

/* Elevated variant - Strong shadow, no border, elevated appearance */
.list-elevated {
  border: none;
  background: var(--bg-card);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.list-elevated:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.18),
    0 6px 16px rgba(0, 0, 0, 0.12),
    0 3px 8px rgba(0, 0, 0, 0.1);
}

.dark-mode .list-elevated {
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.3);
}

.dark-mode .list-elevated:hover {
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.6),
    0 6px 16px rgba(0, 0, 0, 0.5),
    0 3px 8px rgba(0, 0, 0, 0.4);
}

.list-elevated .list-item {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-tertiary) 100%);
  border-radius: 12px;
  margin: 0.375rem 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.list-elevated .list-item:first-child {
  margin-top: 0.75rem;
}

.list-elevated .list-item:last-child {
  margin-bottom: 0.75rem;
}

.list-elevated .list-item:hover {
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(0, 51, 141, 0.1) 100%);
  transform: translateX(4px) translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 51, 141, 0.2);
}

.dark-mode .list-elevated .list-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.dark-mode .list-elevated .list-item:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.08) 100%);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.3);
}

.list-elevated .list-item-icon {
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
}

.list-elevated .list-item:hover .list-item-icon {
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.9) 100%);
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 6px 16px rgba(0, 51, 141, 0.4);
}

.list-elevated .list-item::before {
  display: none;
}

.list-elevated .list-dividers .list-item:not(:last-child) {
  border-bottom: 2px solid var(--border-light);
}`,
  },
  Tag: {
    jsx: `import React from 'react';
import { HiX } from 'react-icons/hi';
import './Tag.css';

/**
 * Reusable Tag Component
 *
 * @param {string} variant - Tag variant: 'default', 'primary', 'success', 'warning', 'error', 'info'
 * @param {string} size - Tag size: 'small', 'medium', 'large'
 * @param {boolean} closable - Show close button
 * @param {Function} onClose - Close callback
 * @param {string} label - Tag label text (alternative to children)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Tag content
 */
export default function Tag({
  variant = 'default',
  size = 'medium',
  closable = false,
  onClose,
  label,
  className = '',
  children,
  ...props
}) {
  // Support both label prop and children for flexibility
  const content = label || children;
  // If onClose is provided, automatically make it closable
  const isClosable = closable || (onClose !== undefined);

  return (
    <span className={\`tag tag-\${variant} tag-\${size} \${className}\`} {...props}>
      {content}
      {isClosable && onClose && (
        <button className="tag-close" onClick={onClose} aria-label="Remove tag">
          <HiX />
        </button>
      )}
    </span>
  );
}`,
    css: `.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.tag-small {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.tag-large {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.tag-default {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.tag-primary {
  background: var(--accent-primary);
  color: white;
}

.tag-success {
  background: var(--success);
  color: white;
}

.tag-warning {
  background: var(--warning);
  color: white;
}

.tag-error {
  background: var(--error);
  color: white;
}

.tag-info {
  background: var(--info);
  color: white;
}

.tag-close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.375rem;
  opacity: 0.7;
  transition: all 0.2s ease;
  font-size: 1rem;
  line-height: 1;
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}

.tag-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

.tag-primary .tag-close:hover,
.tag-success .tag-close:hover,
.tag-warning .tag-close:hover,
.tag-error .tag-close:hover,
.tag-info .tag-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .tag {
    font-size: 0.8125rem;
    padding: 0.3125rem 0.625rem;
  }
}`,
  },
  SearchBar: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiSearch, HiX } from 'react-icons/hi';
import './SearchBar.css';

export default function SearchBar({
  suggestions = [],
  onSearch,
  onSelect,
  placeholder = 'Search...',
  className = '',
  ...props
}) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    if (query && suggestions.length > 0) {
      const filtered = suggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  return (
    <div className={\`search-bar \${className}\`} ref={searchRef} {...props}>
      <div className="search-bar-input-wrapper">
        <HiSearch className="search-bar-icon" />
        <input
          type="text"
          className="search-bar-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
        />
        {query && (
          <button className="search-bar-clear" onClick={() => setQuery('')}>
            <HiX />
          </button>
        )}
      </div>
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="search-bar-suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="search-bar-suggestion"
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
                if (onSelect) onSelect(suggestion);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.search-bar {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.search-bar-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #fafafa;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.search-bar-input-wrapper:focus-within {
  border-color: #00338d;
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}`,
  },
  Navbar: {
    jsx: `import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

export default function Navbar({
  items = [],
  logo,
  onItemClick,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={\`navbar \${className}\`} {...props}>
      <div className="navbar-container">
        {logo && <div className="navbar-logo">{logo}</div>}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
        <ul className={\`navbar-menu \${isOpen ? 'open' : ''}\`}>
          {items.map((item, index) => (
            <li key={index} className="navbar-item">
              <a
                href={item.href}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (onItemClick) onItemClick(item);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}`,
    css: `.navbar {
  width: 100%;
  background: #fafafa;
  border-bottom: 1px solid #d1d5db;
  padding: 1rem 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`,
  },
  Sidebar: {
    jsx: `import React from 'react';
import { HiX } from 'react-icons/hi';
import './Sidebar.css';

export default function Sidebar({
  open = false,
  onClose,
  position = 'left',
  children,
  className = '',
  ...props
}) {
  if (!open) return null;

  return (
    <>
      <div className="sidebar-backdrop" onClick={onClose} />
      <aside className={\`sidebar sidebar-\${position} \${className}\`} {...props}>
        {onClose && (
          <button className="sidebar-close" onClick={onClose}>
            <HiX />
          </button>
        )}
        <div className="sidebar-content">{children}</div>
      </aside>
    </>
  );
}`,
    css: `.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  animation: fadeIn 0.2s ease;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 320px;
  max-width: 90vw;
  background: #fafafa;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}`,
  },
  ImageGallery: {
    jsx: `import React, { useState, useEffect } from 'react';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './ImageGallery.css';

/**
 * Reusable ImageGallery Component
 *
 * @param {Array} images - Array of image URLs or objects with src and alt
 * @param {boolean} showThumbnails - Show thumbnail navigation
 * @param {string} className - Additional CSS classes
 */
export default function ImageGallery({
  images = [],
  showThumbnails = true,
  className = '',
  ...props
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Normalize images to handle both string URLs and objects
  const normalizedImages = images.map((img, index) => {
    if (typeof img === 'string') {
      return { src: img, alt: 'Gallery image ' + (index + 1) };
    }
    return { src: img.src || img.url, alt: img.alt || 'Gallery image ' + (index + 1) };
  });

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, normalizedImages.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!normalizedImages || normalizedImages.length === 0) {
    return (
      <div className={\`image-gallery \${className}\`} {...props}>
        <div
          style={{
            color: 'var(--text-tertiary)',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'var(--bg-tertiary)',
            borderRadius: '12px',
            border: '1px solid var(--border-light)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9375rem', fontWeight: 500 }}>
            No images to display
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={\`image-gallery \${className}\`} {...props}>
      <div className="image-gallery-grid">
        {normalizedImages.map((image, index) => (
          <div
            key={index}
            className="image-gallery-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            aria-label={\`View image \${index + 1}\`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300/00338d/ffffff?text=Image+' + (index + 1);
              }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="image-gallery-lightbox" onClick={closeLightbox}>
          <button
            className="image-gallery-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <HiX />
          </button>
          <button
            className="image-gallery-nav image-gallery-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <HiChevronLeft />
          </button>
          <img
            src={normalizedImages[selectedIndex].src}
            alt={normalizedImages[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800/00338d/ffffff?text=Image+' + (selectedIndex + 1);
            }}
          />
          <button
            className="image-gallery-nav image-gallery-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <HiChevronRight />
          </button>
          <div className="image-gallery-counter">
            {selectedIndex + 1} / {normalizedImages.length}
          </div>
        </div>
      )}

      {showThumbnails && normalizedImages.length > 1 && (
        <div className="image-gallery-thumbnails">
          {normalizedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={selectedIndex === index ? 'active' : ''}
              onClick={() => {
                setSelectedIndex(index);
                document.body.style.overflow = 'hidden';
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/80/00338d/ffffff?text=' + (index + 1);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(index);
                  document.body.style.overflow = 'hidden';
                }
              }}
              aria-label={\`View image \${index + 1}\`}
            />
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.image-gallery {
  width: 100%;
  position: relative;
}

.image-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.image-gallery-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--bg-tertiary);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04);
  border: 2px solid var(--border-light);
}

.dark-mode .image-gallery-item {
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
  border-color: var(--border-color);
}

.image-gallery-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0) 0%,
    rgba(0, 51, 141, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.image-gallery-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 12px 24px rgba(0, 51, 141, 0.2),
    0 6px 12px rgba(0, 51, 141, 0.15),
    0 2px 6px rgba(0, 51, 141, 0.1);
  border-color: var(--accent-primary);
}

.dark-mode .image-gallery-item:hover {
  box-shadow: 
    0 12px 24px rgba(0, 51, 141, 0.4),
    0 6px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2);
}

.image-gallery-item:hover::before {
  opacity: 1;
}

.image-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.image-gallery-item:hover img {
  transform: scale(1.1);
}

.image-gallery-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.image-gallery-lightbox img {
  max-width: 90%;
  max-height: 85%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 10px 30px rgba(0, 0, 0, 0.4);
  animation: zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.image-gallery-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.875rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-gallery-close:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.image-gallery-close:active {
  transform: scale(0.95) rotate(90deg);
}

.image-gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 1.25rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-gallery-nav:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.image-gallery-nav:active {
  transform: translateY(-50%) scale(0.95);
}

.image-gallery-prev {
  left: 2rem;
}

.image-gallery-next {
  right: 2rem;
}

.image-gallery-thumbnails {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  overflow-x: auto;
  padding: 0.75rem;
  background: var(--bg-tertiary);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  scrollbar-width: thin;
  scrollbar-color: var(--border-light) transparent;
}

.dark-mode .image-gallery-thumbnails {
  background: var(--bg-tertiary);
  border-color: var(--border-color);
}

.image-gallery-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.image-gallery-thumbnails::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.image-gallery-thumbnails::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.image-gallery-thumbnails::-webkit-scrollbar-thumb:hover {
  background: var(--text-tertiary);
}

.dark-mode .image-gallery-thumbnails::-webkit-scrollbar-thumb {
  background: var(--border-color);
}

.dark-mode .image-gallery-thumbnails::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.image-gallery-thumbnails img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.dark-mode .image-gallery-thumbnails img {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.image-gallery-thumbnails img:hover {
  opacity: 1;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
}

.image-gallery-thumbnails img.active {
  opacity: 1;
  border-color: var(--accent-primary);
  box-shadow: 
    0 0 0 2px var(--bg-card),
    0 4px 12px rgba(0, 51, 141, 0.4),
    0 2px 6px rgba(0, 51, 141, 0.3);
  transform: scale(1.05);
}

.image-gallery-counter {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  z-index: 10001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-gallery-lightbox::after {
  content: 'Press ESC to close';
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10001;
  pointer-events: none;
}

@media (max-width: 768px) {
  .image-gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.75rem;
  }

  .image-gallery-item {
    border-radius: 10px;
  }

  .image-gallery-item:hover {
    transform: translateY(-4px) scale(1.01);
  }

  .image-gallery-thumbnails {
    gap: 0.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }

  .image-gallery-thumbnails img {
    width: 60px;
    height: 60px;
  }

  .image-gallery-lightbox {
    padding: 1rem;
  }

  .image-gallery-lightbox img {
    max-width: 95%;
    max-height: 80%;
  }

  .image-gallery-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    padding: 0.625rem;
    font-size: 1.25rem;
  }

  .image-gallery-nav {
    width: 44px;
    height: 44px;
    padding: 0.75rem;
    font-size: 1.5rem;
  }

  .image-gallery-prev {
    left: 0.75rem;
  }

  .image-gallery-next {
    right: 0.75rem;
  }

  .image-gallery-counter {
    bottom: 1rem;
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }

  .image-gallery-lightbox::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .image-gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
  }

  .image-gallery-thumbnails img {
    width: 50px;
    height: 50px;
  }
}`,
  },
  VideoPlayer: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import {
  HiPlay,
  HiPause,
  HiVolumeUp,
  HiVolumeOff,
  HiArrowsExpand,
  HiX,
} from 'react-icons/hi';
import './VideoPlayer.css';

/**
 * Reusable VideoPlayer Component
 *
 * @param {string} src - Video source URL
 * @param {string} poster - Poster image URL
 * @param {boolean} controls - Show controls
 * @param {boolean} autoplay - Autoplay video
 * @param {string} className - Additional CSS classes
 */
export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoplay = false,
  className = '',
  ...props
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(video.duration);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ':' + secs.toString().padStart(2, '0');
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      setShowControls(false);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={\`video-player \${className}\`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="video-player-wrapper">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="video-player-video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
        />
        {isLoading && (
          <div className="video-player-loading">
            <div className="video-player-spinner"></div>
          </div>
        )}
      </div>
      {controls && (
        <div
          className={\`video-player-controls \${showControls || !isPlaying ? 'visible' : ''}\`}
        >
          <div className="video-player-progress-container">
            <div
              className="video-player-progress-buffer"
              style={{
                width: videoRef.current
                  ? ((videoRef.current.buffered.length > 0
                      ? videoRef.current.buffered.end(0) / duration
                      : 0) * 100) + '%'
                  : '0%',
              }}
            />
            <div
              className="video-player-progress-filled"
              style={{
                width: duration ? ((currentTime / duration) * 100) + '%' : '0%',
              }}
            />
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="video-player-progress"
            />
          </div>

          <div className="video-player-controls-bottom">
            <div className="video-player-controls-left">
              <button
                className="video-player-button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <HiPause /> : <HiPlay />}
              </button>

              <div className="video-player-volume">
                <button
                  className="video-player-button video-player-button-small"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="video-player-volume-slider"
                  aria-label="Volume"
                />
              </div>

              <div className="video-player-time">
                <span>{formatTime(currentTime)}</span>
                <span className="video-player-time-separator">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="video-player-controls-right">
              <button
                className="video-player-button video-player-button-small"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? <HiX /> : <HiArrowsExpand />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`,
    css: `.video-player {
  position: relative;
  width: 100%;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode .video-player {
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.3);
}

.video-player:hover {
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.2),
    0 6px 16px rgba(0, 0, 0, 0.15);
}

.dark-mode .video-player:hover {
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.5),
    0 6px 16px rgba(0, 0, 0, 0.4);
}

.video-player-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: #000;
  overflow: hidden;
}

.video-player-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-player-video:hover {
  transform: scale(1.01);
}

.video-player-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.video-player-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.video-player-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 60%,
    transparent 100%
  );
  padding: 1rem 1.25rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.video-player-controls.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.video-player-progress-container {
  position: relative;
  width: 100%;
  height: 6px;
  margin-bottom: 1rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.video-player-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  -webkit-appearance: none;
  appearance: none;
}

.video-player-progress::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--accent-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.video-player-progress::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 8px rgba(0, 51, 141, 0.5);
}

.video-player-progress::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--accent-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.video-player-progress::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 8px rgba(0, 51, 141, 0.5);
}

.video-player-progress-buffer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  z-index: 1;
  transition: width 0.1s linear;
}

.video-player-progress-filled {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--accent-primary);
  border-radius: 3px;
  z-index: 2;
  transition: width 0.1s linear;
  pointer-events: none;
}

.video-player-controls-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.video-player-controls-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.video-player-controls-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.video-player-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}

.video-player-button:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.video-player-button:active {
  transform: scale(0.95);
}

.video-player-button-small {
  width: 36px;
  height: 36px;
  font-size: 1.25rem;
  padding: 0.5rem;
}

.video-player-volume {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
}

.video-player-volume-slider {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  transition: all 0.2s ease;
}

.video-player-volume-slider:hover {
  background: rgba(255, 255, 255, 0.4);
}

.video-player-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.video-player-volume-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
}

.video-player-volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.video-player-volume-slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
}

.video-player-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.video-player-time-separator {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .video-player-controls {
    padding: 0.75rem 1rem;
  }

  .video-player-button {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
    padding: 0.625rem;
  }

  .video-player-button-small {
    width: 32px;
    height: 32px;
    font-size: 1.125rem;
    padding: 0.5rem;
  }

  .video-player-volume-slider {
    width: 60px;
  }

  .video-player-time {
    font-size: 0.75rem;
    margin-left: 0.25rem;
  }

  .video-player-controls-left {
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .video-player-controls {
    padding: 0.625rem 0.75rem;
  }

  .video-player-volume {
    display: none;
  }

  .video-player-time {
    font-size: 0.6875rem;
  }
}

.video-player:fullscreen {
  border-radius: 0;
}

.video-player:fullscreen .video-player-wrapper {
  padding-bottom: 0;
  height: 100vh;
}

.video-player:fullscreen .video-player-video {
  object-fit: contain;
}`,
  },
  AudioPlayer: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import './AudioPlayer.css';

/**
 * Reusable AudioPlayer Component
 *
 * @param {string} src - Audio source URL
 * @param {string} title - Audio title
 * @param {string} artist - Artist name
 * @param {string} cover - Cover image URL
 * @param {boolean} autoplay - Autoplay audio
 * @param {string} className - Additional CSS classes
 */
export default function AudioPlayer({
  src,
  title = 'Audio Track',
  artist = 'Unknown Artist',
  cover,
  autoplay = false,
  className = '',
  ...props
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [buffered, setBuffered] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadedData = () => {
      setIsLoading(false);
      setDuration(audio.duration);
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const updateBuffered = () => {
      if (audio.buffered.length > 0) {
        const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
        setBuffered((bufferedEnd / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('progress', updateBuffered);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('progress', updateBuffered);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ':' + seconds.toString().padStart(2, '0');
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={\`audio-player \${className} \${isPlaying ? 'playing' : ''}\`}
      {...props}
    >
      <audio ref={audioRef} src={src} autoPlay={autoplay} />
      
      <div className="audio-player-background" />
      
      <div className="audio-player-content">
        {cover && (
          <div className="audio-player-cover">
            <div className="audio-player-cover-wrapper">
              <img src={cover} alt={title + ' cover'} />
              {isPlaying && (
                <>
                  <div className="audio-player-cover-overlay" />
                  <div className="audio-player-cover-rings">
                    <div className="audio-player-ring ring-1" />
                    <div className="audio-player-ring ring-2" />
                    <div className="audio-player-ring ring-3" />
                  </div>
                </>
              )}
            </div>
            {isPlaying && (
              <div className="audio-player-equalizer">
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
                <div className="audio-player-bar" />
              </div>
            )}
          </div>
        )}

        <div className="audio-player-info">
          <div className="audio-player-title">{title}</div>
          <div className="audio-player-artist">{artist}</div>
          {isPlaying && (
            <div className="audio-player-status">
              <span className="audio-player-status-dot" />
              <span>Now Playing</span>
            </div>
          )}
        </div>

        <div className="audio-player-main-controls">
          <button
            className="audio-player-play-button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            disabled={isLoading}
          >
            <div className="audio-player-play-button-bg" />
            {isLoading ? (
              <div className="audio-player-spinner" />
            ) : isPlaying ? (
              <HiPause />
            ) : (
              <HiPlay />
            )}
          </button>

          <div className="audio-player-progress-container">
            <div className="audio-player-progress-wrapper">
              <div className="audio-player-progress-track" />
              <div
                className="audio-player-progress-buffer"
                style={{ width: buffered + '%' }}
              />
              <div
                className="audio-player-progress-filled"
                style={{ width: progressPercentage + '%' }}
              >
                <div className="audio-player-progress-thumb" />
              </div>
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="audio-player-slider"
                aria-label="Seek"
              />
            </div>
            <div className="audio-player-time-container">
              <span className="audio-player-time">{formatTime(currentTime)}</span>
              <span className="audio-player-time-separator">/</span>
              <span className="audio-player-time">{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        <div className="audio-player-volume-container">
          <button
            className="audio-player-volume-button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
          <div className="audio-player-volume-wrapper">
            <div
              className="audio-player-volume-fill"
              style={{ width: (volume * 100) + '%' }}
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="audio-player-volume-slider"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}`,
    css: `.audio-player {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.dark-mode .audio-player {
  border-color: var(--border-color);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.audio-player-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.03) 0%,
    rgba(0, 51, 141, 0.01) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.audio-player:hover .audio-player-background,
.audio-player.playing .audio-player-background {
  opacity: 1;
}

.audio-player::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--accent-primary) 20%,
    rgba(0, 51, 141, 0.8) 50%,
    var(--accent-primary) 80%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

.audio-player:hover::before,
.audio-player.playing::before {
  opacity: 1;
}

.audio-player:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.15),
    0 6px 20px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  border-color: rgba(0, 51, 141, 0.3);
}

.dark-mode .audio-player:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.3),
    0 6px 20px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.audio-player.playing {
  border-color: rgba(0, 51, 141, 0.4);
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.2),
    0 6px 20px rgba(0, 51, 141, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .audio-player.playing {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.4),
    0 6px 20px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.audio-player-content {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  position: relative;
  z-index: 1;
  width: 100%;
}

.audio-player-cover {
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.audio-player-cover-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.audio-player:hover .audio-player-cover-wrapper {
  transform: scale(1.08) rotate(2deg);
  box-shadow: 
    0 12px 32px rgba(0, 51, 141, 0.3),
    0 6px 16px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.audio-player.playing .audio-player-cover-wrapper {
  animation: coverPulse 2s ease-in-out infinite;
}

@keyframes coverPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.audio-player-cover-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.audio-player:hover .audio-player-cover-wrapper img {
  transform: scale(1.1);
}

.audio-player-cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.3) 0%,
    rgba(0, 51, 141, 0.1) 50%,
    transparent 100%
  );
  animation: overlayPulse 3s ease-in-out infinite;
}

@keyframes overlayPulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
}

.audio-player-cover-rings {
  position: absolute;
  inset: -20px;
  pointer-events: none;
}

.audio-player-ring {
  position: absolute;
  inset: 0;
  border: 2px solid var(--accent-primary);
  border-radius: 16px;
  opacity: 0;
  animation: ringExpand 2s ease-out infinite;
}

.audio-player-ring.ring-1 {
  animation-delay: 0s;
}

.audio-player-ring.ring-2 {
  animation-delay: 0.7s;
}

.audio-player-ring.ring-3 {
  animation-delay: 1.4s;
}

@keyframes ringExpand {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.audio-player-equalizer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-top: 0.75rem;
  height: 20px;
}

.audio-player-bar {
  width: 3px;
  background: linear-gradient(
    to top,
    var(--accent-primary) 0%,
    rgba(0, 51, 141, 0.6) 100%
  );
  border-radius: 2px;
  animation: equalizer 1.2s ease-in-out infinite;
}

.audio-player-bar:nth-child(1) {
  height: 60%;
  animation-delay: 0s;
}

.audio-player-bar:nth-child(2) {
  height: 100%;
  animation-delay: 0.2s;
}

.audio-player-bar:nth-child(3) {
  height: 80%;
  animation-delay: 0.4s;
}

.audio-player-bar:nth-child(4) {
  height: 70%;
  animation-delay: 0.6s;
}

@keyframes equalizer {
  0%, 100% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1);
  }
}

.audio-player-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
}

.audio-player-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
  margin-top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.audio-player:hover .audio-player-title,
.audio-player.playing .audio-player-title {
  color: var(--accent-primary);
  transform: translateX(2px);
}

.audio-player-artist {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-top: 0;
  line-height: 1.4;
}

.audio-player-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--accent-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  animation: fadeInUp 0.4s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.audio-player-status-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: statusPulse 1.5s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(0, 51, 141, 0.6);
}

@keyframes statusPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.audio-player-main-controls {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex: 1;
  min-width: 0;
  align-self: stretch;
}

.audio-player-play-button {
  position: relative;
  background: linear-gradient(135deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.9) 100%);
  border: none;
  color: white;
  font-size: 1.625rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  box-shadow: 
    0 8px 20px rgba(0, 51, 141, 0.4),
    0 4px 10px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  overflow: hidden;
  z-index: 1;
  align-self: center;
}

.audio-player-play-button-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.audio-player-play-button:hover .audio-player-play-button-bg {
  opacity: 1;
}

.audio-player-play-button:hover {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 
    0 12px 28px rgba(0, 51, 141, 0.5),
    0 6px 14px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.audio-player-play-button:active {
  transform: scale(1.05) rotate(2deg);
}

.audio-player.playing .audio-player-play-button {
  animation: playButtonPulse 2s ease-in-out infinite;
}

@keyframes playButtonPulse {
  0%, 100% {
    box-shadow: 
      0 8px 20px rgba(0, 51, 141, 0.4),
      0 4px 10px rgba(0, 51, 141, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 
      0 8px 20px rgba(0, 51, 141, 0.6),
      0 4px 10px rgba(0, 51, 141, 0.5),
      0 0 20px rgba(0, 51, 141, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
}

.audio-player-play-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.audio-player-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.audio-player-progress-container {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  justify-content: center;
}

.audio-player-progress-wrapper {
  position: relative;
  width: 100%;
  height: 8px;
  cursor: pointer;
  transition: height 0.3s ease;
}

.audio-player-progress-wrapper:hover {
  height: 10px;
}

.audio-player-progress-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.audio-player-progress-buffer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 51, 141, 0.2) 0%,
    rgba(0, 51, 141, 0.15) 100%
  );
  border-radius: 4px;
  transition: width 0.2s linear;
  z-index: 1;
}

.audio-player-progress-filled {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--accent-primary) 0%,
    rgba(0, 51, 141, 0.9) 50%,
    var(--accent-primary) 100%
  );
  border-radius: 4px;
  transition: width 0.1s linear;
  z-index: 2;
  box-shadow: 
    0 0 12px rgba(0, 51, 141, 0.5),
    0 0 6px rgba(0, 51, 141, 0.3);
  position: relative;
}

.audio-player-progress-thumb {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: white;
  border: 3px solid var(--accent-primary);
  border-radius: 50%;
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.4),
    0 0 12px rgba(0, 51, 141, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.audio-player-progress-wrapper:hover .audio-player-progress-thumb {
  opacity: 1;
}

.audio-player-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  -webkit-appearance: none;
  appearance: none;
}

.audio-player-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--accent-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.audio-player-slider::-webkit-slider-thumb:hover {
  transform: scale(1.3);
  box-shadow: 0 3px 8px rgba(0, 51, 141, 0.5);
}

.audio-player-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--accent-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.audio-player-slider::-moz-range-thumb:hover {
  transform: scale(1.3);
  box-shadow: 0 3px 8px rgba(0, 51, 141, 0.5);
}

.audio-player-time-container {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
  margin-top: 0;
}

.audio-player-time {
  min-width: 35px;
  text-align: left;
}

.audio-player-time-separator {
  opacity: 0.6;
}

.audio-player-volume-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  align-self: center;
}

.audio-player-volume-button {
  background: var(--bg-tertiary);
  border: 2px solid var(--border-light);
  color: var(--text-primary);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.625rem;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.audio-player-volume-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.audio-player-volume-button:hover::before {
  opacity: 1;
}

.dark-mode .audio-player-volume-button {
  border-color: var(--border-color);
}

.audio-player-volume-button:hover {
  background: var(--bg-hover);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.2);
}

.audio-player-volume-button:active {
  transform: scale(0.95) rotate(0deg);
}

.audio-player-volume-wrapper {
  position: relative;
  width: 90px;
  height: 6px;
  background: var(--bg-tertiary);
  border-radius: 3px;
  overflow: hidden;
}

.audio-player-volume-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary) 0%, rgba(0, 51, 141, 0.8) 100%);
  border-radius: 3px;
  transition: width 0.1s linear;
  box-shadow: 0 0 8px rgba(0, 51, 141, 0.4);
}

.audio-player-volume-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  -webkit-appearance: none;
  appearance: none;
}

.audio-player-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: var(--accent-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.audio-player-volume-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 6px rgba(0, 51, 141, 0.4);
}

.audio-player-volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--accent-primary);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.audio-player-volume-slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 6px rgba(0, 51, 141, 0.4);
}

@media (max-width: 768px) {
  .audio-player {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .audio-player-content {
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .audio-player-cover-wrapper {
    width: 80px;
    height: 80px;
  }

  .audio-player-main-controls {
    width: 100%;
    order: 2;
  }

  .audio-player-volume-container {
    order: 1;
    margin-left: auto;
  }

  .audio-player-play-button {
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
    padding: 0.875rem;
  }

  .audio-player-title {
    font-size: 1.125rem;
  }

  .audio-player-artist {
    font-size: 0.875rem;
  }

  .audio-player-volume-wrapper {
    width: 70px;
  }
}

@media (max-width: 480px) {
  .audio-player {
    padding: 1.25rem;
  }

  .audio-player-content {
    gap: 1rem;
  }

  .audio-player-cover-wrapper {
    width: 70px;
    height: 70px;
  }

  .audio-player-volume-wrapper {
    width: 60px;
  }

  .audio-player-time-container {
    font-size: 0.75rem;
  }
}`,
  },
  Chart: {
    jsx: `import React, { useState, useRef } from 'react';
import './Chart.css';

export default function Chart({
  data = [],
  type = 'line',
  title,
  className = '',
  ...props
}) {
  let normalizedData = [];
  
  if (Array.isArray(data)) {
    normalizedData = data;
  } else if (data && typeof data === 'object') {
    if (data.labels && data.datasets && data.datasets[0] && Array.isArray(data.datasets[0].data)) {
      normalizedData = data.labels.map((label, index) => ({
        label: label,
        value: data.datasets[0].data[index] || 0
      }));
    } else {
      normalizedData = [];
    }
  }

  if (normalizedData.length === 0) {
    return (
      <div className={\`chart chart-\${type} \${className}\`} {...props}>
        {title && <h3 className="chart-title">{title}</h3>}
        <div className="chart-container">
          <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No data available
          </p>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...normalizedData.map((d) => d.value || 0), 0);
  const [hoveredData, setHoveredData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = (data, event) => {
    setHoveredData(data);
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = event.currentTarget.getBoundingClientRect();
      
      const x = elementRect.left - containerRect.left + elementRect.width / 2;
      const y = elementRect.top - containerRect.top - 10;
      
      setTooltipPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  const renderLineChart = () => {
    const padding = 10;
    const chartWidth = 100 - padding * 2;
    const chartHeight = 100 - padding * 2;
    
    const points = normalizedData
      .map((d, index) => {
        const x = padding + (index / (normalizedData.length - 1 || 1)) * chartWidth;
        const y = padding + chartHeight - ((d.value || 0) / maxValue) * chartHeight;
        return x + ',' + y;
      })
      .join(' ');

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="2"
        />
        {normalizedData.map((d, index) => {
          const x = padding + (index / (normalizedData.length - 1 || 1)) * chartWidth;
          const y = padding + chartHeight - ((d.value || 0) / maxValue) * chartHeight;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2.5"
              fill="var(--accent-primary)"
              stroke="white"
              strokeWidth="1.5"
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || 'Item ' + (index + 1), value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </svg>
    );
  };

  const renderBarChart = () => {
    const padding = 8;
    const chartWidth = 100 - padding * 2;
    const chartHeight = 100 - padding * 2;
    const barWidth = chartWidth / normalizedData.length;

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(0, 51, 141, 0.7)" stopOpacity="1" />
          </linearGradient>
        </defs>
        {normalizedData.map((d, index) => {
          const height = ((d.value || 0) / maxValue) * chartHeight;
          const x = padding + index * barWidth;
          const y = padding + chartHeight - height;
          return (
            <rect
              key={index}
              x={x + barWidth * 0.15}
              y={y}
              width={barWidth * 0.7}
              height={height}
              fill="url(#barGradient)"
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || 'Item ' + (index + 1), value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </svg>
    );
  };

  const renderPieChart = () => {
    let currentAngle = 0;
    const total = normalizedData.reduce((sum, d) => sum + (d.value || 0), 0);
    const radius = 35;

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        {normalizedData.map((d, index) => {
          const angle = ((d.value || 0) / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const startX = 50 + radius * Math.cos(((startAngle - 90) * Math.PI) / 180);
          const startY = 50 + radius * Math.sin(((startAngle - 90) * Math.PI) / 180);
          const endX = 50 + radius * Math.cos(((currentAngle - 90) * Math.PI) / 180);
          const endY = 50 + radius * Math.sin(((currentAngle - 90) * Math.PI) / 180);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <path
              key={index}
              d={'M 50 50 L ' + startX + ' ' + startY + ' A ' + radius + ' ' + radius + ' 0 ' + largeArc + ' 1 ' + endX + ' ' + endY + ' Z'}
              fill={'hsl(' + (index * 60) + ', 70%, 50%)'}
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || 'Item ' + (index + 1), value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className={\`chart chart-\${type} \${className}\`} {...props}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container" ref={containerRef}>
        {type === 'line' && renderLineChart()}
        {type === 'bar' && renderBarChart()}
        {type === 'pie' && renderPieChart()}
        {hoveredData && (
          <div
            className="chart-tooltip"
            style={{
              left: tooltipPosition.x + 'px',
              top: tooltipPosition.y + 'px'
            }}
          >
            <div className="chart-tooltip-title">{title || 'Chart Data'}</div>
            <table className="chart-tooltip-table">
              <tbody>
                <tr>
                  <td>{hoveredData.label}</td>
                  <td>{hoveredData.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="chart-data-table-container">
        <table className="chart-data-table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {normalizedData.map((d, index) => (
              <tr key={index}>
                <td>
                  <span
                    className="chart-data-table-color"
                    style={{
                      backgroundColor: type === 'pie' ? 'hsl(' + (index * 60) + ', 70%, 50%)' : 'var(--accent-primary)'
                    }}
                  />
                  {d.label || 'Item ' + (index + 1)}
                </td>
                <td>{d.value || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
    css: `.chart {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dark-mode .chart {
  border-color: var(--border-color);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.chart::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--accent-primary) 20%,
    rgba(0, 51, 141, 0.8) 50%,
    var(--accent-primary) 80%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.chart:hover::before {
  opacity: 1;
}

.chart:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.15),
    0 6px 20px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  border-color: rgba(0, 51, 141, 0.3);
}

.dark-mode .chart:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.3),
    0 6px 20px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.01em;
  position: relative;
  padding-bottom: 0.75rem;
}

.chart-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--accent-primary) 50%, transparent 100%);
  border-radius: 2px;
}

.chart-container {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.02) 0%,
    rgba(0, 51, 141, 0.01) 50%,
    transparent 100%
  );
  border-radius: 12px;
  padding: 0.75rem;
  flex: 1;
  min-height: 0;
}

.chart-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 8px rgba(0, 51, 141, 0.1));
}

.chart-line .chart-svg polyline {
  stroke: var(--accent-primary);
  stroke-width: 3;
  fill: none;
  filter: drop-shadow(0 2px 4px rgba(0, 51, 141, 0.2));
}

.chart-line .chart-svg circle {
  fill: white;
  stroke: var(--accent-primary);
  stroke-width: 3;
  r: 4;
  filter: drop-shadow(0 2px 6px rgba(0, 51, 141, 0.3));
  transition: all 0.3s ease;
}

.chart-line .chart-svg circle:hover {
  r: 6;
  filter: drop-shadow(0 4px 8px rgba(0, 51, 141, 0.5));
}

.chart-bar .chart-svg rect {
  fill: url(#barGradient);
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 1;
  filter: drop-shadow(0 4px 8px rgba(0, 51, 141, 0.2));
  transition: all 0.3s ease;
  rx: 4;
  ry: 4;
}

.chart-bar .chart-svg rect:hover {
  filter: drop-shadow(0 6px 12px rgba(0, 51, 141, 0.4));
  transform: translateY(-2px);
}

.chart-bar .chart-svg {
  background: linear-gradient(to top, rgba(0, 51, 141, 0.05) 0%, transparent 100%);
}

.chart-pie .chart-svg path {
  stroke: white;
  stroke-width: 2;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15));
  transition: all 0.3s ease;
  cursor: pointer;
}

.chart-pie .chart-svg path:hover {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25));
  transform: scale(1.05);
  transform-origin: center;
}

.chart-data-table-container {
  width: 100%;
  margin-top: auto;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}

.chart-data-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-tertiary);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  table-layout: fixed;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: table;
}

.dark-mode .chart-data-table {
  border-color: var(--border-color);
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.chart-data-table thead {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 51, 141, 0.05) 100%);
}

.dark-mode .chart-data-table thead {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.2) 0%, rgba(0, 51, 141, 0.1) 100%);
}

.chart-data-table th {
  padding: 0.75rem 0.875rem;
  text-align: left;
  font-weight: 700;
  font-size: 0.8125rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--border-light);
  box-sizing: border-box;
}

.dark-mode .chart-data-table th {
  border-bottom-color: var(--border-color);
  color: var(--text-primary);
}

.chart-data-table th:first-child {
  padding-left: 0.875rem;
  width: 65%;
  max-width: 65%;
}

.chart-data-table th:last-child {
  text-align: right;
  padding-right: 0.875rem;
  width: 35%;
  max-width: 35%;
}

.chart-data-table tbody tr {
  border-bottom: 1px solid var(--border-light);
  transition: all 0.2s ease;
}

.dark-mode .chart-data-table tbody tr {
  border-bottom-color: var(--border-color);
}

.chart-data-table tbody tr:last-child {
  border-bottom: none;
}

.chart-data-table tbody tr:hover {
  background: rgba(0, 51, 141, 0.05);
}

.dark-mode .chart-data-table tbody tr:hover {
  background: rgba(0, 51, 141, 0.15);
}

.chart-data-table td {
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.chart-data-table td:first-child {
  padding-left: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
  min-width: 0;
  max-width: 65%;
  overflow: hidden;
  white-space: nowrap;
}

.chart-data-table td:last-child {
  text-align: right;
  padding-right: 0.875rem;
  font-weight: 700;
  color: var(--accent-primary);
  font-variant-numeric: tabular-nums;
  font-size: 0.9375rem;
  white-space: nowrap;
  max-width: 35%;
}

.chart-data-table-color {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
}

.chart-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(0, 51, 141, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 51, 141, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chart:hover .chart-container::before {
  opacity: 1;
}

.chart-tooltip {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 0;
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  pointer-events: none;
  transform: translate(-50%, -100%);
  margin-top: -10px;
  min-width: 120px;
  animation: tooltipFadeIn 0.2s ease-out;
}

.dark-mode .chart-tooltip {
  background: var(--bg-card);
  border-color: var(--border-color);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.5),
    0 6px 20px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3);
}

.chart-tooltip-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-tertiary);
  border-radius: 12px 12px 0 0;
  text-align: center;
}

.dark-mode .chart-tooltip-title {
  border-bottom-color: var(--border-color);
  background: rgba(0, 0, 0, 0.2);
}

.chart-tooltip-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.chart-tooltip-table tbody tr {
  border-bottom: none;
}

.chart-tooltip-table td {
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
}

.chart-tooltip-table td:first-child {
  font-weight: 600;
  color: var(--text-primary);
  border-right: 1px solid var(--border-light);
}

.dark-mode .chart-tooltip-table td:first-child {
  border-right-color: var(--border-color);
}

.chart-tooltip-table td:last-child {
  font-weight: 700;
  color: var(--accent-primary);
  font-variant-numeric: tabular-nums;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -100%) scale(1);
  }
}

@media (max-width: 1024px) {
  .demo-interactive > div[style*="grid"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .chart {
    padding: 1rem;
    border-radius: 12px;
  }

  .chart-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
  }

  .chart-container {
    height: 200px;
    padding: 0.5rem;
  }

  .chart-data-table th {
    padding: 0.75rem 0.875rem;
    font-size: 0.75rem;
  }

  .chart-data-table th:first-child {
    padding-left: 0.75rem;
    width: 65%;
  }

  .chart-data-table th:last-child {
    padding-right: 0.75rem;
    width: 35%;
  }

  .chart-data-table td {
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
  }

  .chart-data-table td:first-child {
    padding-left: 0.75rem;
    gap: 0.5rem;
  }

  .chart-data-table td:last-child {
    padding-right: 0.75rem;
    font-size: 0.875rem;
  }

  .chart-data-table-color {
    width: 12px;
    height: 12px;
  }

  .demo-interactive > div[style*="grid"] {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
}

@media (max-width: 480px) {
  .chart {
    padding: 1.25rem;
  }

  .chart-container {
    height: 240px;
  }

  .chart-data-table-container {
    overflow: hidden;
  }

  .chart-data-table {
    font-size: 0.75rem;
  }

  .chart-data-table th,
  .chart-data-table td {
    padding: 0.625rem 0.75rem;
  }

  .chart-data-table th:first-child,
  .chart-data-table td:first-child {
    padding-left: 0.875rem;
  }

  .chart-data-table th:last-child,
  .chart-data-table td:last-child {
    padding-right: 0.875rem;
  }
}`,
  },
  DataTable: {
    jsx: `import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown, HiSearch } from 'react-icons/hi';
import './DataTable.css';

/**
 * Reusable DataTable Component
 *
 * @param {Array} columns - Table columns configuration
 * @param {Array} data - Table data
 * @param {boolean} searchable - Enable search
 * @param {boolean} sortable - Enable sorting
 * @param {string} className - Additional CSS classes
 */
export default function DataTable({
  columns = [],
  data = [],
  searchable = true,
  sortable = true,
  className = '',
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Normalize columns - support both array of strings and array of objects
  const normalizedColumns = columns.map((col, index) => {
    if (typeof col === 'string') {
      return { 
        key: col.toLowerCase().replace(/\\s+/g, '_'), 
        label: col, 
        sortable: sortable 
      };
    }
    return { 
      key: col.key || 'col_' + index, 
      label: col.label || col.key, 
      sortable: col.sortable !== undefined ? col.sortable : sortable 
    };
  });

  const filteredData =
    searchable && searchQuery
      ? data.filter((row) =>
          normalizedColumns.some((col) => {
            // Handle both object and array data formats
            const value = row[col.key] || (typeof row === 'object' && row !== null ? Object.values(row).join(' ') : String(row));
            return String(value || '')
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        )
      : data;

  const sortedData =
    sortable && sortColumn
      ? [...filteredData].sort((a, b) => {
          let aVal = a[sortColumn];
          let bVal = b[sortColumn];
          
          // Handle null/undefined values
          if (aVal == null) aVal = '';
          if (bVal == null) bVal = '';
          
          // Convert to strings for comparison if needed
          const aStr = String(aVal).toLowerCase();
          const bStr = String(bVal).toLowerCase();
          
          // Try to compare as numbers if both are numeric
          const aNum = Number(aVal);
          const bNum = Number(bVal);
          const isNumeric = !isNaN(aNum) && !isNaN(bNum) && aStr !== '' && bStr !== '';
          
          if (isNumeric) {
            return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
          }
          
          // String comparison
          if (sortDirection === 'asc') {
            return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
          }
          return aStr < bStr ? 1 : aStr > bStr ? -1 : 0;
        })
      : filteredData;

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  return (
    <div className={\`data-table \${className}\`} {...props}>
      {searchable && (
        <div className="data-table-search">
          <HiSearch className="data-table-search-icon" />
          <input
            type="text"
            className="data-table-search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}
      <div className="data-table-container">
        <table className="data-table-table">
          <thead>
            <tr>
              {normalizedColumns.map((column) => (
                <th
                  key={column.key}
                  className={column.sortable ? 'sortable' : ''}
                  onClick={() =>
                    column.sortable && handleSort(column.key)
                  }
                >
                  <div className="data-table-header">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span className="data-table-sort-icon">
                        {sortColumn === column.key ? (
                          sortDirection === 'asc' ? (
                            <HiChevronUp />
                          ) : (
                            <HiChevronDown />
                          )
                        ) : (
                          <HiChevronUp style={{ opacity: 0.3 }} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr key={index}>
                  {normalizedColumns.map((column) => {
                    // Handle both object and array data formats
                    let cellValue = row[column.key];
                    if (cellValue === undefined && typeof row === 'object' && row !== null) {
                      // Try to find value by label if key doesn't match
                      const labelKey = column.label;
                      cellValue = row[labelKey] || '';
                    }
                    return <td key={column.key}>{cellValue != null ? cellValue : ''}</td>;
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={normalizedColumns.length} className="data-table-empty">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
    css: `.data-table {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 4px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
}

.dark-mode .data-table {
  border-color: var(--border-color);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 4px rgba(0, 0, 0, 0.2);
}

.data-table-search {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-tertiary);
  transition: background 0.2s ease;
}

.dark-mode .data-table-search {
  background: rgba(255, 255, 255, 0.02);
}

.data-table-search-icon {
  color: var(--text-tertiary);
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.data-table-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-family: inherit;
  width: 100%;
  padding: 0;
}

.data-table-search-input::placeholder {
  color: var(--text-tertiary);
}

.data-table-search-input:focus {
  color: var(--text-primary);
}

.data-table-container {
  overflow-x: auto;
  position: relative;
}

.data-table-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  table-layout: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: table;
  min-width: 100%;
}

.data-table-table thead {
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(0, 51, 141, 0.05) 100%);
  position: sticky;
  top: 0;
  z-index: 10;
}

.dark-mode .data-table-table thead {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
}

.data-table-table th {
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 700;
  color: var(--text-primary);
  border-bottom: 2px solid var(--border-color);
  white-space: normal;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.data-table-table th::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.data-table-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  position: relative;
}

.data-table-table th.sortable:hover {
  color: var(--accent-primary);
  background: rgba(0, 51, 141, 0.05);
}

.data-table-table th.sortable:hover::after {
  opacity: 0.3;
}

.dark-mode .data-table-table th.sortable:hover {
  background: rgba(255, 255, 255, 0.05);
}

.data-table-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
}

.data-table-sort-icon {
  color: var(--accent-primary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.data-table-table th.sortable:not(:hover) .data-table-sort-icon {
  opacity: 0.5;
}

.data-table-table th.sortable:hover .data-table-sort-icon {
  opacity: 1;
}

.data-table-table td {
  padding: 1rem 1.25rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
  transition: all 0.2s ease;
  font-size: 0.9375rem;
  line-height: 1.5;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.data-table-table tbody tr {
  transition: all 0.2s ease;
}

.data-table-table tbody tr:hover {
  background: var(--bg-tertiary);
  transform: scale(1.001);
}

.dark-mode .data-table-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.data-table-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table-empty {
  text-align: center;
  color: var(--text-tertiary);
  padding: 3rem 1rem !important;
  font-style: italic;
  font-size: 0.9375rem;
}

@media (max-width: 768px) {
  .data-table {
    border-radius: 8px;
  }

  .data-table-search {
    padding: 0.875rem 1rem;
  }

  .data-table-table {
    font-size: 0.875rem;
  }

  .data-table-table th {
    padding: 0.875rem 1rem;
    font-size: 0.8125rem;
  }

  .data-table-table td {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
}`,
  },
  Form: {
    jsx: `import React from 'react';
import './Form.css';

export default function Form({
  onSubmit,
  children,
  className = '',
  ...props
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      className={\`form \${className}\`}
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </form>
  );
}`,
    css: `.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}`,
  },
  Select: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown, HiCheck } from 'react-icons/hi';
import './Select.css';

export default function Select({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={\`select \${disabled ? 'disabled' : ''} \${isOpen ? 'open' : ''} \${className}\`} ref={selectRef} {...props}>
      <div
        className="select-trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? 'select-value' : 'select-placeholder'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <HiChevronDown className={\`select-icon \${isOpen ? 'open' : ''}\`} />
      </div>
      {isOpen && !disabled && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={\`select-option \${value === option.value ? 'selected' : ''}\`}
              onClick={() => {
                if (onChange) onChange(option.value);
                setIsOpen(false);
              }}
            >
              <span>{option.label}</span>
              {value === option.value && <HiCheck className="select-check" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
    css: `.select {
  position: relative;
  width: 100%;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #fafafa;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
}`,
  },
  DateRangePicker: {
    jsx: `import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { HiCalendar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './DateRangePicker.css';

/**
 * Reusable DateRangePicker Component with Modern Calendar UI
 *
 * @param {Date|Object} startDate - Start date or value object with startDate/endDate
 * @param {Date} endDate - End date
 * @param {Function} onChange - Change handler
 * @param {Object} value - Value object with startDate and endDate
 * @param {string} className - Additional CSS classes
 */
export default function DateRangePicker({
  startDate: startDateProp = null,
  endDate: endDateProp = null,
  onChange,
  value,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);

  // Handle both prop styles: value object or separate startDate/endDate props
  const startDate = value?.startDate || startDateProp;
  const endDate = value?.endDate || endDateProp;

  const [currentMonth, setCurrentMonth] = useState(startDate || new Date());
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);
  const [selectingStart, setSelectingStart] = useState(true);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Sync state when value prop changes
  useEffect(() => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
    if (startDate) {
      setCurrentMonth(new Date(startDate));
    }
  }, [startDate, endDate]);

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day, monthDate) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      monthDate.getMonth() === today.getMonth() &&
      monthDate.getFullYear() === today.getFullYear()
    );
  };

  const isInRange = (day, monthDate) => {
    if (!tempStartDate || !tempEndDate) return false;
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    return date >= tempStartDate && date <= tempEndDate;
  };

  const isStartDate = (day, monthDate) => {
    if (!tempStartDate) return false;
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    return (
      date.getTime() ===
      new Date(
        tempStartDate.getFullYear(),
        tempStartDate.getMonth(),
        tempStartDate.getDate()
      ).getTime()
    );
  };

  const isEndDate = (day, monthDate) => {
    if (!tempEndDate) return false;
    const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
    return (
      date.getTime() ===
      new Date(
        tempEndDate.getFullYear(),
        tempEndDate.getMonth(),
        tempEndDate.getDate()
      ).getTime()
    );
  };

  const handleDateClick = (day, monthDate) => {
    const clickedDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);

    if (selectingStart || !tempStartDate) {
      setTempStartDate(clickedDate);
      setTempEndDate(null);
      setSelectingStart(false);
    } else {
      if (clickedDate < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(clickedDate);
      } else {
        setTempEndDate(clickedDate);
      }
      setSelectingStart(true);
      if (onChange) {
        onChange({
          startDate: clickedDate < tempStartDate ? clickedDate : tempStartDate,
          endDate: clickedDate < tempStartDate ? tempStartDate : clickedDate,
        });
      }
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return (
      <div className="date-range-calendar">
        <div className="date-range-calendar-header">
          <button className="date-range-calendar-nav" onClick={goToPreviousMonth}>
            <HiChevronLeft />
          </button>
          <h3 className="date-range-calendar-month">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button className="date-range-calendar-nav" onClick={goToNextMonth}>
            <HiChevronRight />
          </button>
        </div>
        <div className="date-range-calendar-weekdays">
          {dayNames.map((day) => (
            <div key={day} className="date-range-calendar-weekday">{day}</div>
          ))}
        </div>
        <div className="date-range-calendar-days">
          {days.map((day, index) => {
            const isRange = isInRange(day, currentMonth);
            const isStart = isStartDate(day, currentMonth);
            const isEnd = isEndDate(day, currentMonth);
            const isTodayDate = isToday(day, currentMonth);

            return (
              <button
                key={index}
                className={\`date-range-calendar-day \${day === null ? 'empty' : ''} \${isTodayDate ? 'today' : ''} \${isStart ? 'start' : ''} \${isEnd ? 'end' : ''} \${isRange ? 'in-range' : ''}\`}
                onClick={() => day && handleDateClick(day, currentMonth)}
                disabled={day === null}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate dropdown width to prevent layout shifts
  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      setDropdownWidth(360);
    }
  }, [isOpen]);

  return (
    <div
      className={\`date-range-picker \${className}\`}
      ref={containerRef}
      style={{ position: 'relative', width: '100%' }}
      {...props}
    >
      <div className="date-range-picker-trigger" onClick={() => setIsOpen(!isOpen)}>
        <HiCalendar className="date-range-picker-icon" />
        <span className="date-range-picker-text">
          {startDate && endDate
            ? \`\${formatDate(startDate)} - \${formatDate(endDate)}\`
            : 'Select date range'}
        </span>
      </div>
      {isOpen && (
        <div
          className="date-range-picker-dropdown"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 'calc(100% + 0.5rem)',
            minWidth: '360px',
            width: 'max-content',
            maxWidth: '90vw',
          }}
        >
          <div className="date-range-picker-calendars">
            {renderCalendar()}
          </div>
          {tempStartDate && tempEndDate && (
            <div className="date-range-picker-actions">
              <button
                className="date-range-picker-clear"
                onClick={() => {
                  setTempStartDate(null);
                  setTempEndDate(null);
                  setSelectingStart(true);
                  if (onChange) onChange({ startDate: null, endDate: null });
                }}
              >
                Clear
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}`,
    css: `.date-range-picker {
  position: relative;
  width: 100%;
  display: block;
  box-sizing: border-box;
}

.date-range-picker-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 44px;
}

.date-range-picker-trigger:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.1);
}

.date-range-picker-icon {
  color: var(--text-tertiary);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.date-range-picker-text {
  color: var(--text-primary);
  font-size: 0.9375rem;
  flex: 1;
  text-align: left;
  font-weight: 500;
}

.date-range-picker-dropdown {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 50%;
  margin-top: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  z-index: 1000;
  min-width: 360px;
  width: max-content;
  max-width: 90vw;
  animation: slideDownFade 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  transform: translateX(-50%);
  overflow: hidden;
}

.date-range-picker-calendars {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.date-range-calendar {
  width: 100%;
  min-width: 320px;
  max-width: 360px;
  margin: 0 auto;
}

.date-range-calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-light);
  position: relative;
}

.date-range-calendar-header::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  opacity: 0.3;
}

.date-range-calendar-nav {
  background: var(--bg-tertiary);
  border: 1px solid transparent;
  color: var(--accent-primary);
  cursor: pointer;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.125rem;
  width: 40px;
  height: 40px;
}

.date-range-calendar-nav:hover {
  background: var(--accent-primary);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.25);
}

.date-range-calendar-month {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.date-range-calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
}

.date-range-calendar-weekday {
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-tertiary);
  padding: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
}

.date-range-calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.date-range-calendar-day {
  aspect-ratio: 1;
  border: 2px solid transparent;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.9375rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  position: relative;
}

.date-range-calendar-day.today {
  background: rgba(0, 51, 141, 0.08);
  color: var(--accent-primary);
  font-weight: 700;
  border-color: var(--accent-primary);
  border-width: 2px;
}

.date-range-calendar-day.start,
.date-range-calendar-day.end {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
  color: white;
  font-weight: 700;
  border-color: var(--accent-primary);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
  z-index: 2;
}

.date-range-calendar-day.in-range {
  background: rgba(0, 51, 141, 0.08);
  color: var(--accent-primary);
  border-radius: 0;
  border-color: transparent;
}

.date-range-calendar-day.empty {
  cursor: default;
  pointer-events: none;
  visibility: hidden;
}

.date-range-picker-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-light);
}

.date-range-picker-clear {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.date-range-picker-clear:hover {
  background: var(--bg-tertiary);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.15);
}

@keyframes slideDownFade {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .date-range-picker-dropdown {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    left: 0 !important;
    right: 0 !important;
    padding: 1.5rem;
    transform: translateX(0) !important;
  }

  .date-range-calendar {
    max-width: 100%;
    min-width: 100%;
  }
}`,
  },
  TimePicker: {
    jsx: `import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { HiClock } from 'react-icons/hi';
import './TimePicker.css';

/**
 * Reusable TimePicker Component with Modern UI
 *
 * @param {string} value - Time value (HH:MM format)
 * @param {Function} onChange - Change handler
 * @param {string} className - Additional CSS classes
 */
export default function TimePicker({
  value = '',
  onChange,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);
  const hoursScrollRef = useRef(null);
  const minutesScrollRef = useRef(null);
  const [hours, setHours] = useState(value ? value.split(':')[0] : '12');
  const [minutes, setMinutes] = useState(value ? value.split(':')[1] : '00');

  const handleTimeChange = (newHours, newMinutes) => {
    setHours(newHours);
    setMinutes(newMinutes);
    const timeString = \`\${newHours.padStart(2, '0')}:\${newMinutes.padStart(2, '0')}\`;
    if (onChange) {
      onChange(timeString);
    }
  };

  const generateOptions = (max) => {
    return Array.from({ length: max }, (_, i) => i.toString().padStart(2, '0'));
  };

  const hourOptions = generateOptions(24);
  const minuteOptions = generateOptions(60);

  // Sync state when value prop changes
  useEffect(() => {
    if (value) {
      const [h, m] = value.split(':');
      setHours(h || '12');
      setMinutes(m || '00');
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate dropdown width to prevent layout shifts
  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [isOpen]);

  // Scroll to selected values when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (hoursScrollRef.current) {
          const selectedHour = hoursScrollRef.current.querySelector('.time-picker-option-modern.selected');
          if (selectedHour) {
            selectedHour.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }
        }
        if (minutesScrollRef.current) {
          const selectedMinute = minutesScrollRef.current.querySelector('.time-picker-option-modern.selected');
          if (selectedMinute) {
            selectedMinute.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }
        }
      }, 100);
    }
  }, [isOpen, hours, minutes]);

  const handleScroll = (type, value) => {
    if (type === 'hours') {
      handleTimeChange(value, minutes);
    } else {
      handleTimeChange(hours, value);
    }
  };

  return (
    <div
      className={\`time-picker \${className}\`}
      ref={containerRef}
      style={{ position: 'relative', width: '100%' }}
      {...props}
    >
      <div className="time-picker-trigger" onClick={() => setIsOpen(!isOpen)}>
        <HiClock className="time-picker-icon" />
        <span className="time-picker-text">{value || 'Select time'}</span>
      </div>
      {isOpen && (
        <div
          className="time-picker-dropdown"
          style={{
            position: 'absolute',
            left: 0,
            width: dropdownWidth ? \`\${dropdownWidth}px\` : '100%',
            minWidth: dropdownWidth ? \`\${dropdownWidth}px\` : '100%',
            top: 'calc(100% + 0.5rem)',
            transform: 'translateX(0)',
          }}
        >
          <div className="time-picker-modern">
            <div className="time-picker-selector-modern">
              <label className="time-picker-label-modern">Hours</label>
              <div className="time-picker-scroll-container" ref={hoursScrollRef}>
                {hourOptions.map((h) => (
                  <button
                    key={h}
                    className={\`time-picker-option-modern \${hours === h ? 'selected' : ''}\`}
                    onClick={() => handleScroll('hours', h)}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
            <div className="time-picker-separator-modern">:</div>
            <div className="time-picker-selector-modern">
              <label className="time-picker-label-modern">Minutes</label>
              <div className="time-picker-scroll-container" ref={minutesScrollRef}>
                {minuteOptions.map((m) => (
                  <button
                    key={m}
                    className={\`time-picker-option-modern \${minutes === m ? 'selected' : ''}\`}
                    onClick={() => handleScroll('minutes', m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`,
    css: `.time-picker {
  position: relative;
  width: 100%;
  display: block;
  box-sizing: border-box;
}

.time-picker-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
}

.time-picker-trigger:hover {
  border-color: var(--accent-primary);
}

.time-picker-icon {
  color: var(--text-tertiary);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.time-picker-text {
  color: var(--text-primary);
  font-size: 0.9375rem;
  flex: 1;
  text-align: left;
}

.time-picker-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  margin-top: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  z-index: 1000;
  min-width: 200px;
  animation: slideDown 0.15s ease-out;
  box-sizing: border-box;
  transform: translateX(0);
}

.time-picker-modern {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
}

.time-picker-selector-modern {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.time-picker-label-modern {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.time-picker-scroll-container {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: var(--bg-tertiary);
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.time-picker-scroll-container::-webkit-scrollbar {
  width: 6px;
}

.time-picker-scroll-container::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.time-picker-scroll-container::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.time-picker-scroll-container::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}

.time-picker-option-modern {
  min-width: 60px;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 1.125rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-picker-option-modern:hover {
  background: rgba(0, 51, 141, 0.1);
  color: var(--accent-primary);
}

.time-picker-option-modern.selected {
  background: var(--accent-primary);
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.time-picker-separator-modern {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 2.5rem;
  line-height: 1;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px) translateX(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0);
  }
}

@media (max-width: 768px) {
  .time-picker-dropdown {
    min-width: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  .time-picker-modern {
    gap: 0.75rem;
  }

  .time-picker-option-modern {
    min-width: 50px;
    padding: 0.625rem 0.75rem;
    font-size: 1rem;
  }

  .time-picker-separator-modern {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .time-picker-scroll-container {
    max-height: 150px;
  }
}`,
  },
  ColorPicker: {
    jsx: `import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './ColorPicker.css';

/**
 * Reusable ColorPicker Component
 *
 * @param {string} value - Color value (hex)
 * @param {Function} onChange - Change handler
 * @param {Array} presetColors - Preset color options
 * @param {string} className - Additional CSS classes
 */
export default function ColorPicker({
  value = '#000000',
  onChange,
  presetColors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
  ],
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);
  const containerRef = useRef(null);

  const handleColorChange = (color) => {
    if (onChange) {
      onChange(color);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Calculate dropdown width to prevent layout shifts
  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [isOpen]);

  return (
    <div
      className={\`color-picker \${className}\`}
      ref={containerRef}
      style={{ position: 'relative', width: '100%' }}
      {...props}
    >
      <div
        className="color-picker-trigger"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: value }}
      >
        <span className="color-picker-value">{value}</span>
      </div>
      {isOpen && (
        <div
          className="color-picker-dropdown"
          style={{
            position: 'absolute',
            left: 0,
            width: dropdownWidth ? \`\${dropdownWidth}px\` : '100%',
            minWidth: dropdownWidth ? \`\${dropdownWidth}px\` : '100%',
            top: 'calc(100% + 0.5rem)',
            transform: 'translateX(0)',
          }}
        >
          <div className="color-picker-presets">
            {presetColors.map((color, index) => (
              <button
                key={index}
                className={\`color-picker-preset \${value === color ? 'active' : ''}\`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                title={color}
              />
            ))}
          </div>
          <div className="color-picker-input-group">
            <label>Custom Color</label>
            <input
              type="color"
              value={value}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker-input"
            />
            <input
              type="text"
              value={value}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker-text-input"
              placeholder="#000000"
            />
          </div>
        </div>
      )}
    </div>
  );
}`,
    css: `.color-picker {
  position: relative;
  width: 100%;
  display: block;
  box-sizing: border-box;
}

.color-picker-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  background: var(--bg-card);
  width: 100%;
  box-sizing: border-box;
}

.color-picker-trigger:hover {
  border-color: var(--accent-primary);
}

.color-picker-value {
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-family: monospace;
  font-weight: 500;
}

.color-picker-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  margin-top: 0;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 1000;
  min-width: 250px;
  width: 100%;
  animation: slideDown 0.2s ease;
  box-sizing: border-box;
  transform: translateX(0);
}

.color-picker-presets {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.color-picker-preset {
  aspect-ratio: 1;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  background: none;
}

.color-picker-preset:hover {
  transform: scale(1.1);
  border-color: var(--accent-primary);
}

.color-picker-preset.active {
  border-color: var(--accent-primary);
  border-width: 3px;
  transform: scale(1.1);
}

.color-picker-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.color-picker-input-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.color-picker-input {
  width: 100%;
  height: 50px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  outline: none;
}

.color-picker-text-input {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-family: monospace;
  outline: none;
  transition: all 0.2s ease;
}

.color-picker-text-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 51, 141, 0.1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px) translateX(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(0);
  }
}

@media (max-width: 768px) {
  .color-picker-dropdown {
    min-width: 100%;
    left: 0;
    right: 0;
  }

  .color-picker-presets {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
  },
  RichTextEditor: {
    jsx: `import React, { useRef, useEffect, useCallback } from 'react';
import './RichTextEditor.css';

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Start typing...',
  className = '',
  ...props
}) {
  const editorRef = useRef(null);
  const isInternalUpdateRef = useRef(false);
  const lastValueRef = useRef(value);

  // Save cursor position
  const saveSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && editorRef.current?.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(editorRef.current);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      return {
        start,
        end: start + range.toString().length,
      };
    }
    return null;
  }, []);

  // Restore cursor position
  const restoreSelection = useCallback((savedSel) => {
    if (!savedSel || !editorRef.current) return;
    const selection = window.getSelection();
    const range = document.createRange();
    let charIndex = 0;
    const nodeStack = [editorRef.current];
    let node;
    let foundStart = false;
    let stop = false;
    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType === Node.TEXT_NODE) {
        const nextCharIndex = charIndex + node.textContent.length;
        if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
          range.setStart(node, savedSel.start - charIndex);
          foundStart = true;
        }
        if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
          range.setEnd(node, savedSel.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }
    selection.removeAllRanges();
    selection.addRange(range);
  }, []);

  // Handle input changes
  const handleInput = useCallback(() => {
    if (!editorRef.current || isInternalUpdateRef.current) return;
    const newValue = editorRef.current.innerHTML || '';
    if (newValue !== lastValueRef.current) {
      lastValueRef.current = newValue;
      if (onChange) {
        onChange(newValue);
      }
    }
  }, [onChange]);

  // Initialize editor content on mount
  useEffect(() => {
    if (editorRef.current && value) {
      const currentContent = editorRef.current.innerHTML || '';
      if (!currentContent) {
        editorRef.current.innerHTML = value;
        lastValueRef.current = value;
      }
    }
  }, []);

  // Sync value prop with contentEditable
  useEffect(() => {
    if (!editorRef.current) return;
    const currentContent = editorRef.current.innerHTML || '';
    const normalizedValue = value || '';
    if (normalizedValue !== currentContent && !isInternalUpdateRef.current) {
      const savedSel = saveSelection();
      isInternalUpdateRef.current = true;
      editorRef.current.innerHTML = normalizedValue;
      lastValueRef.current = normalizedValue;
      setTimeout(() => {
        if (savedSel) {
          restoreSelection(savedSel);
        }
        isInternalUpdateRef.current = false;
      }, 0);
    }
  }, [value, saveSelection, restoreSelection]);

  // Execute formatting command
  const execCommand = useCallback((command, commandValue = null) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const savedSel = saveSelection();
    document.execCommand(command, false, commandValue);
    setTimeout(() => {
      if (savedSel) {
        restoreSelection(savedSel);
      }
      handleInput();
    }, 0);
  }, [saveSelection, restoreSelection, handleInput]);

  // Handle paste
  const handlePaste = useCallback((e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    handleInput();
  }, [handleInput]);

  return (
    <div className={\`rich-text-editor \${className}\`} {...props}>
      <div className="rich-text-editor-toolbar">
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand('bold')}
          title="Bold"
          onMouseDown={(e) => e.preventDefault()}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand('italic')}
          title="Italic"
          onMouseDown={(e) => e.preventDefault()}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand('underline')}
          title="Underline"
          onMouseDown={(e) => e.preventDefault()}
        >
          <u>U</u>
        </button>
        <div className="rich-text-editor-separator" />
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand('insertUnorderedList')}
          title="Bullet List"
          onMouseDown={(e) => e.preventDefault()}
        >
          <span className="rich-text-editor-list-icon">•</span>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand('insertOrderedList')}
          title="Numbered List"
          onMouseDown={(e) => e.preventDefault()}
        >
          <span className="rich-text-editor-list-icon">1.</span>
        </button>
      </div>
      <div
        ref={editorRef}
        className="rich-text-editor-content"
        contentEditable
        onInput={handleInput}
        onPaste={handlePaste}
        onBlur={handleInput}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />
    </div>
  );
}`,
    css: `.rich-text-editor {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.dark-mode .rich-text-editor {
  border-color: var(--border-color);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.rich-text-editor::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--accent-primary) 20%,
    rgba(0, 51, 141, 0.8) 50%,
    var(--accent-primary) 80%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.rich-text-editor:hover::before {
  opacity: 1;
}

.rich-text-editor:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.15),
    0 6px 20px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  border-color: rgba(0, 51, 141, 0.3);
}

.dark-mode .rich-text-editor:hover {
  box-shadow: 
    0 12px 40px rgba(0, 51, 141, 0.3),
    0 6px 20px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.rich-text-editor-toolbar {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--border-light);
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.03) 0%,
    rgba(0, 51, 141, 0.01) 50%,
    transparent 100%
  );
  position: relative;
  z-index: 2;
}

.dark-mode .rich-text-editor-toolbar {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.1) 0%,
    rgba(0, 51, 141, 0.05) 50%,
    transparent 100%
  );
  border-bottom-color: var(--border-color);
}

.rich-text-editor-toolbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 51, 141, 0.2) 50%,
    transparent 100%
  );
}

.rich-text-editor-button {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  min-width: 40px;
  height: 40px;
  position: relative;
}

.rich-text-editor-button:hover {
  background: rgba(0, 51, 141, 0.08);
  color: var(--accent-primary);
  border-color: rgba(0, 51, 141, 0.2);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.15);
}

.dark-mode .rich-text-editor-button:hover {
  background: rgba(0, 51, 141, 0.2);
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.3);
}

.rich-text-editor-button:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 51, 141, 0.1);
}

.rich-text-editor-button strong {
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
}

.rich-text-editor-button em {
  font-style: italic;
  font-size: 1rem;
  font-weight: 600;
}

.rich-text-editor-button u {
  text-decoration: underline;
  font-size: 1rem;
  font-weight: 600;
  text-decoration-thickness: 2px;
}

.rich-text-editor-list-icon {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  color: inherit;
}

.rich-text-editor-separator {
  width: 1px;
  height: 28px;
  background: var(--border-light);
  margin: 0 0.125rem;
  opacity: 0.5;
}

.dark-mode .rich-text-editor-separator {
  background: var(--border-color);
  opacity: 0.6;
}

.rich-text-editor-content {
  min-height: 250px;
  max-height: 500px;
  padding: 1.25rem;
  outline: none;
  color: var(--text-primary);
  font-size: 0.9375rem;
  line-height: 1.7;
  overflow-y: auto;
  background: var(--bg-card);
  transition: background-color 0.2s ease;
}

.rich-text-editor-content:focus {
  outline: none;
  background: var(--bg-card);
}

.rich-text-editor-content:empty::before {
  content: attr(data-placeholder);
  color: var(--text-tertiary);
  pointer-events: none;
  font-style: italic;
  opacity: 0.6;
}

.rich-text-editor-content::-webkit-scrollbar {
  width: 10px;
}

.rich-text-editor-content::-webkit-scrollbar-track {
  background: var(--bg-tertiary);
  border-left: 1px solid var(--border-light);
}

.dark-mode .rich-text-editor-content::-webkit-scrollbar-track {
  border-left-color: var(--border-color);
}

.rich-text-editor-content::-webkit-scrollbar-thumb {
  background: rgba(0, 51, 141, 0.2);
  border-radius: 5px;
  border: 2px solid var(--bg-tertiary);
  transition: background 0.2s ease;
}

.rich-text-editor-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 51, 141, 0.35);
}

.dark-mode .rich-text-editor-content::-webkit-scrollbar-thumb {
  background: rgba(0, 51, 141, 0.3);
}

.dark-mode .rich-text-editor-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 51, 141, 0.5);
}

@media (max-width: 768px) {
  .rich-text-editor {
    border-radius: 12px;
  }

  .rich-text-editor-toolbar {
    flex-wrap: wrap;
    gap: 0.375rem;
    padding: 0.75rem 1rem;
  }

  .rich-text-editor-button {
    min-width: 36px;
    height: 36px;
    padding: 0.4375rem 0.625rem;
    font-size: 0.9375rem;
  }

  .rich-text-editor-content {
    min-height: 200px;
    max-height: 400px;
    padding: 1rem;
    font-size: 0.875rem;
  }
}`,
  },
  CodeEditor: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import './CodeEditor.css';

export default function CodeEditor({
  value = '',
  onChange,
  language = 'javascript',
  className = '',
  ...props
}) {
  const [lineNumbers, setLineNumbers] = useState(['1']);
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const lines = value.split('\\n');
    setLineNumbers(lines.map((_, index) => (index + 1).toString()));
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleScroll = () => {
    if (lineNumbersRef.current && textareaRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className={\`code-editor code-editor-\${language} \${className}\`} {...props}>
      <div className="code-editor-header">
        <span className="code-editor-language">{language}</span>
      </div>
      <div className="code-editor-container">
        <div className="code-editor-line-numbers" ref={lineNumbersRef}>
          {lineNumbers.map((line, index) => (
            <div key={index} className="code-editor-line-number">
              {line}
            </div>
          ))}
        </div>
        <textarea
          ref={textareaRef}
          className="code-editor-textarea"
          value={value}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck={false}
          placeholder="// Start coding..."
        />
      </div>
    </div>
  );
}`,
    css: `.code-editor {
  width: 100%;
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.code-editor:hover {
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 6px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.code-editor::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--accent-primary) 20%, rgba(0, 51, 141, 0.8) 50%, var(--accent-primary) 80%, transparent 100%);
  opacity: 0.6;
  z-index: 1;
}

.code-editor-header {
  padding: 0.875rem 1.25rem;
  background: linear-gradient(135deg, #252526 0%, #1e1e1e 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.code-editor-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(0, 51, 141, 0.3) 50%, transparent 100%);
}

.code-editor-language {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.375rem 0.875rem;
  background: rgba(0, 51, 141, 0.15);
  border: 1px solid rgba(0, 51, 141, 0.3);
  border-radius: 6px;
  backdrop-filter: blur(10px);
}

.code-editor-container {
  display: flex;
  position: relative;
  min-height: 300px;
  max-height: 600px;
  overflow: auto;
  background: #1e1e1e;
}

.code-editor-line-numbers {
  padding: 1rem 0.5rem 1rem 1rem;
  background: #252526;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: right;
  user-select: none;
  min-width: 55px;
  flex-shrink: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  font-variant-numeric: tabular-nums;
  position: sticky;
  left: 0;
  z-index: 1;
}

.code-editor-line-number {
  padding-right: 0.75rem;
  transition: color 0.2s ease;
}

.code-editor-line-number:hover {
  color: rgba(255, 255, 255, 0.6);
}

.code-editor-textarea {
  flex: 1;
  padding: 1rem;
  background: #1e1e1e;
  color: #d4d4d4;
  border: none;
  outline: none;
  font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  resize: none;
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: auto;
  tab-size: 2;
  transition: background-color 0.2s ease;
}

.code-editor-textarea:focus {
  background: #1a1a1a;
}

.code-editor-textarea::placeholder {
  color: rgba(255, 255, 255, 0.25);
  font-style: italic;
}

.code-editor-textarea::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.code-editor-textarea::-webkit-scrollbar-track {
  background: #252526;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.code-editor-textarea::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  border: 2px solid #252526;
  transition: background 0.2s ease;
}

.code-editor-textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}

.code-editor-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.code-editor-container::-webkit-scrollbar-track {
  background: #252526;
}

.code-editor-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  transition: background 0.2s ease;
}

.code-editor-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}

.dark-mode .code-editor {
  border-color: rgba(255, 255, 255, 0.12);
}

.dark-mode .code-editor-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #141414 100%);
}

.dark-mode .code-editor-line-numbers {
  background: #1a1a1a;
}

.dark-mode .code-editor-textarea {
  background: #141414;
}

.dark-mode .code-editor-textarea:focus {
  background: #0f0f0f;
}

@media (max-width: 768px) {
  .code-editor {
    border-radius: 12px;
  }

  .code-editor-container {
    min-height: 250px;
    max-height: 400px;
  }

  .code-editor-header {
    padding: 0.75rem 1rem;
  }

  .code-editor-language {
    font-size: 0.75rem;
    padding: 0.3125rem 0.75rem;
  }

  .code-editor-line-numbers {
    min-width: 45px;
    font-size: 0.8125rem;
    padding: 0.875rem 0.375rem 0.875rem 0.75rem;
  }

  .code-editor-textarea {
    font-size: 0.8125rem;
    padding: 0.875rem;
    line-height: 1.5;
  }
}`,
  },
  TreeView: {
    jsx: `import React, { useState, useMemo } from 'react';
import {
  HiChevronRight,
  HiChevronDown,
  HiFolder,
  HiFolderOpen,
  HiDocument,
} from 'react-icons/hi';
import './TreeView.css';

/**
 * Reusable TreeView Component
 *
 * @param {Array} data - Tree data
 * @param {Function} onSelect - Selection handler
 * @param {string} className - Additional CSS classes
 */
export default function TreeView({
  data = [],
  onSelect,
  className = '',
  ...props
}) {
  const [expanded, setExpanded] = useState({});
  const [selected, setSelected] = useState(null);

  // Generate unique IDs for nodes if they don't have them
  const normalizeData = (nodes, parentPath = '') => {
    return nodes.map((node, index) => {
      const nodeId = node.id || parentPath + '-' + index + '-' + node.label;
      const nodePath = parentPath ? parentPath + '-' + index : '' + index;
      
      const normalizedNode = {
        ...node,
        id: nodeId,
        path: nodePath,
      };

      if (node.children && node.children.length > 0) {
        normalizedNode.children = normalizeData(node.children, nodePath);
      }

      return normalizedNode;
    });
  };

  const normalizedData = useMemo(() => normalizeData(data), [data]);

  const toggleExpand = (id, event) => {
    event.stopPropagation();
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNodeClick = (node, event) => {
    event.stopPropagation();
    setSelected(node.id);
    if (onSelect) {
      onSelect(node);
    }
  };

  const renderNode = (node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded[node.id];
    const isSelected = selected === node.id;

    return (
      <div key={node.id} className="tree-view-node">
        <div
          className={\`tree-view-item \${isSelected ? 'selected' : ''}\`}
          style={{ paddingLeft: \`\${level * 1.5}rem\` }}
          onClick={(e) => handleNodeClick(node, e)}
        >
          {hasChildren && (
            <span
              className="tree-view-chevron"
              onClick={(e) => toggleExpand(node.id, e)}
            >
              {isExpanded ? <HiChevronDown /> : <HiChevronRight />}
            </span>
          )}
          {!hasChildren && <span className="tree-view-spacer" />}
          <span className="tree-view-icon">
            {hasChildren ? (
              isExpanded ? (
                <HiFolderOpen />
              ) : (
                <HiFolder />
              )
            ) : (
              <HiDocument />
            )}
          </span>
          <span className="tree-view-label">{node.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div className="tree-view-children">
            {node.children.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={\`tree-view \${className}\`} {...props}>
      {normalizedData.map((node) => renderNode(node))}
    </div>
  );
}`,
    css: `.tree-view {
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 0.75rem;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.dark-mode .tree-view {
  border-color: var(--border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.tree-view::-webkit-scrollbar {
  width: 8px;
}

.tree-view::-webkit-scrollbar-track {
  background: var(--bg-tertiary);
  border-radius: 4px;
}

.tree-view::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 4px;
  transition: background 0.3s ease;
}

.tree-view::-webkit-scrollbar-thumb:hover {
  background: var(--text-tertiary);
}

.dark-mode .tree-view::-webkit-scrollbar-thumb {
  background: var(--border-color);
}

.dark-mode .tree-view::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.tree-view-node {
  width: 100%;
  position: relative;
}

.tree-view-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  position: relative;
  margin: 0.125rem 0;
}

.tree-view-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: var(--accent-primary);
  border-radius: 0 8px 8px 0;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.1;
}

.tree-view-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(2px);
}

.tree-view-item:hover::before {
  width: 3px;
}

.tree-view-item:active {
  transform: translateX(1px);
}

.tree-view-chevron {
  color: var(--text-tertiary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.25rem;
  position: relative;
  z-index: 1;
}

.tree-view-chevron:hover {
  color: var(--accent-primary);
  background: rgba(0, 51, 141, 0.1);
  transform: scale(1.15);
}

.tree-view-item:hover .tree-view-chevron {
  color: var(--accent-primary);
}

.tree-view-chevron:active {
  transform: scale(0.95);
}

.tree-view-spacer {
  width: 24px;
  flex-shrink: 0;
  margin-right: 0.25rem;
}

.tree-view-icon {
  color: var(--text-tertiary);
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tree-view-item:hover .tree-view-icon {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.tree-view-icon svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.dark-mode .tree-view-icon svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.tree-view-label {
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-weight: 500;
  flex: 1;
  transition: color 0.3s ease;
  letter-spacing: 0.01em;
}

.tree-view-item:hover .tree-view-label {
  color: var(--accent-primary);
  font-weight: 600;
}

.tree-view-children {
  margin-left: 0.5rem;
  padding-left: 1rem;
  border-left: 2px solid var(--border-light);
  margin-top: 0.25rem;
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.dark-mode .tree-view-children {
  border-left-color: var(--border-color);
}

.tree-view-children::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--accent-primary) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tree-view-node:hover .tree-view-children::before {
  opacity: 0.3;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    max-height: 1000px;
    transform: translateY(0);
  }
}

.tree-view-item.selected {
  background: rgba(0, 51, 141, 0.1);
  border-left: 3px solid var(--accent-primary);
  padding-left: 0.75rem;
}

.dark-mode .tree-view-item.selected {
  background: rgba(0, 51, 141, 0.2);
}

.tree-view-item.selected .tree-view-label {
  color: var(--accent-primary);
  font-weight: 600;
}

.tree-view-item.selected .tree-view-icon {
  color: var(--accent-primary);
}

.tree-view-item.selected::before {
  width: 3px;
  opacity: 1;
}

.tree-view-item:focus {
  outline: none;
}

.tree-view-item:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  border-radius: 8px;
}

.tree-view-children {
  overflow: hidden;
}

@media (max-width: 768px) {
  .tree-view {
    padding: 0.5rem;
    border-radius: 8px;
  }

  .tree-view-item {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    gap: 0.5rem;
  }

  .tree-view-chevron,
  .tree-view-spacer {
    width: 18px;
  }

  .tree-view-icon {
    font-size: 1rem;
    width: 18px;
    height: 18px;
  }

  .tree-view-label {
    font-size: 0.875rem;
  }

  .tree-view-children {
    margin-left: 0.375rem;
    padding-left: 0.75rem;
  }
}

@media (max-width: 480px) {
  .tree-view-item {
    padding: 0.5rem;
  }

  .tree-view-chevron,
  .tree-view-spacer {
    width: 16px;
  }

  .tree-view-icon {
    font-size: 0.9375rem;
    width: 16px;
    height: 16px;
  }
}`,
  },
  DragDrop: {
    jsx: `import React, { useState } from 'react';
import './DragDrop.css';

export default function DragDrop({
  items = [],
  onReorder,
  renderItem,
  className = '',
  ...props
}) {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      const newItems = [...items];
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(dropIndex, 0, removed);
      if (onReorder) {
        onReorder(newItems);
      }
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className={\`drag-drop \${className}\`} {...props}>
      {items.map((item, index) => (
        <div
          key={index}
          className={\`drag-drop-item \${draggedIndex === index ? 'dragging' : ''} \${dragOverIndex === index ? 'drag-over' : ''}\`}
          draggable
          onDragStart={() => setDraggedIndex(index)}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverIndex(index);
          }}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={() => {
            setDraggedIndex(null);
            setDragOverIndex(null);
          }}
        >
          <span className="drag-drop-handle">⋮⋮</span>
          {renderItem ? renderItem(item, index) : <span>{item}</span>}
        </div>
      ))}
    </div>
  );
}`,
    css: `.drag-drop {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drag-drop-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  cursor: move;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  position: relative;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02);
}

.dark-mode .drag-drop-item {
  border-color: var(--border-color);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.drag-drop-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: linear-gradient(
    180deg,
    var(--accent-primary) 0%,
    rgba(0, 51, 141, 0.8) 100%
  );
  border-radius: 12px 0 0 12px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.drag-drop-item:hover {
  border-color: rgba(0, 51, 141, 0.3);
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.12),
    0 2px 8px rgba(0, 51, 141, 0.08);
  transform: translateY(-2px);
  background: linear-gradient(
    135deg,
    var(--bg-card) 0%,
    rgba(0, 51, 141, 0.02) 100%
  );
}

.dark-mode .drag-drop-item:hover {
  border-color: rgba(0, 51, 141, 0.5);
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.25),
    0 2px 8px rgba(0, 51, 141, 0.15);
  background: linear-gradient(
    135deg,
    var(--bg-card) 0%,
    rgba(0, 51, 141, 0.08) 100%
  );
}

.drag-drop-item:hover::before {
  width: 4px;
  opacity: 1;
}

.drag-drop-item.dragging {
  opacity: 0.4;
  cursor: grabbing;
  transform: scale(0.98) rotate(1deg);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.2),
    0 4px 12px rgba(0, 51, 141, 0.15);
  border-color: var(--accent-primary);
  z-index: 1000;
  background: var(--bg-card);
}

.dark-mode .drag-drop-item.dragging {
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.4),
    0 4px 12px rgba(0, 51, 141, 0.3);
}

.drag-drop-item.drag-over {
  border-color: var(--accent-primary);
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.08) 0%,
    rgba(0, 51, 141, 0.12) 100%
  );
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 6px 20px rgba(0, 51, 141, 0.2),
    0 3px 10px rgba(0, 51, 141, 0.15),
    inset 0 0 0 2px rgba(0, 51, 141, 0.1);
  border-width: 2px;
}

.dark-mode .drag-drop-item.drag-over {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.15) 0%,
    rgba(0, 51, 141, 0.2) 100%
  );
  box-shadow: 
    0 6px 20px rgba(0, 51, 141, 0.35),
    0 3px 10px rgba(0, 51, 141, 0.25),
    inset 0 0 0 2px rgba(0, 51, 141, 0.2);
}

.drag-drop-item.drag-over::before {
  width: 4px;
  opacity: 1;
}

.drag-drop-handle {
  color: var(--text-tertiary);
  font-size: 1.125rem;
  cursor: grab;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  letter-spacing: -2px;
  line-height: 1;
  font-weight: 700;
}

.drag-drop-handle::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: rgba(0, 51, 141, 0.05);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.drag-drop-handle:hover {
  color: var(--accent-primary);
  transform: scale(1.1);
}

.drag-drop-handle:hover::before {
  opacity: 1;
}

.drag-drop-item:hover .drag-drop-handle {
  color: var(--accent-primary);
}

.drag-drop-handle:active {
  cursor: grabbing;
  transform: scale(0.95);
}

.drag-drop-item.dragging .drag-drop-handle {
  color: var(--accent-primary);
  transform: scale(1.15) rotate(5deg);
}

.drag-drop-item > *:not(.drag-drop-handle) {
  flex: 1;
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.drag-drop-item:hover > *:not(.drag-drop-handle) {
  color: var(--text-primary);
}

.drag-drop-item.drag-over > *:not(.drag-drop-handle) {
  color: var(--accent-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .drag-drop {
    gap: 0.625rem;
  }

  .drag-drop-item {
    padding: 0.875rem 1rem;
    border-radius: 10px;
    gap: 0.875rem;
  }

  .drag-drop-handle {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  .drag-drop-item > *:not(.drag-drop-handle) {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .drag-drop-item {
    padding: 0.75rem 0.875rem;
    gap: 0.75rem;
  }

  .drag-drop-handle {
    width: 24px;
    height: 24px;
    font-size: 0.9375rem;
  }
}`,
  },
  Wizard: {
    jsx: `import React from 'react';
import { HiCheck, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import './Wizard.css';

export default function Wizard({
  steps = [],
  currentStep = 0,
  activeStep,
  onStepChange,
  showNavigation = true,
  className = '',
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
    <div className={\`wizard \${className}\`} {...props}>
      <div className="wizard-steps">
        {steps.map((step, index) => {
          const isCompleted = index < activeStepIndex;
          const isActive = index === activeStepIndex;
          const isDisabled = index > activeStepIndex;

          return (
            <div
              key={index}
              className={\`wizard-step \${isActive ? 'active' : ''} \${isCompleted ? 'completed' : ''} \${isDisabled ? 'disabled' : ''}\`}
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
                  <div className="wizard-step-description">{step.description}</div>
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
  );
}`,
    css: `.wizard {
  width: 100%;
}

.wizard-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 2.5rem;
  overflow-x: auto;
  padding: 0 0.5rem 1rem;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: var(--border-light) transparent;
}

.wizard-steps::-webkit-scrollbar {
  height: 6px;
}

.wizard-steps::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.wizard-steps::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 3px;
}

.wizard-steps::-webkit-scrollbar-thumb:hover {
  background: var(--border-color);
}

.wizard-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 140px;
  position: relative;
  padding: 0 0.75rem;
  transition: all 0.3s ease;
  z-index: 1;
}

.wizard-step.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.wizard-step:not(.disabled) {
  cursor: pointer;
}

.wizard-step:not(.disabled):hover .wizard-step-indicator {
  transform: scale(1.08);
  box-shadow: 0 6px 20px rgba(0, 51, 141, 0.25);
}

.wizard-step:not(.disabled):hover .wizard-step-title {
  color: var(--accent-primary);
}

.wizard-step-indicator {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 3px solid var(--border-light);
  color: var(--text-tertiary);
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.wizard-step-indicator::before {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0.8);
  z-index: -1;
}

.wizard-step.active .wizard-step-indicator {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  border-color: var(--accent-primary);
  color: #ffffff;
  transform: scale(1.1);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.35),
    0 4px 12px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 4px rgba(0, 51, 141, 0.1);
  animation: pulseActive 2s ease-in-out infinite;
}

.wizard-step.active .wizard-step-indicator::before {
  background: rgba(0, 51, 141, 0.15);
  opacity: 1;
  transform: scale(1.3);
}

.wizard-step.completed .wizard-step-indicator {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-color: #10b981;
  color: #ffffff;
  box-shadow: 
    0 4px 16px rgba(16, 185, 129, 0.3),
    0 2px 8px rgba(16, 185, 129, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: scale(1);
}

.wizard-step.completed .wizard-step-indicator::before {
  background: rgba(16, 185, 129, 0.1);
  opacity: 1;
  transform: scale(1.2);
}

.wizard-step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.wizard-step-check {
  width: 22px;
  height: 22px;
  color: white;
  stroke-width: 3;
  animation: checkmarkIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-step-content {
  flex: 1;
  min-width: 0;
  text-align: center;
  width: 100%;
}

.wizard-step-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.4;
  letter-spacing: -0.2px;
}

.wizard-step.active .wizard-step-title {
  color: var(--accent-primary);
  font-weight: 700;
  font-size: 1rem;
  transform: translateY(-2px);
  text-shadow: 0 1px 2px rgba(0, 51, 141, 0.1);
}

.wizard-step.completed .wizard-step-title {
  color: var(--text-secondary);
}

.wizard-step-description {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  line-height: 1.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-step.active .wizard-step-description {
  color: var(--text-secondary);
  font-weight: 500;
}

.wizard-step-connector {
  position: absolute;
  top: 24px;
  left: calc(50% + 24px);
  width: calc(100% - 48px);
  height: 4px;
  background: var(--border-light);
  z-index: 0;
  border-radius: 4px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  pointer-events: none;
}

.wizard-step-connector::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}

.wizard-step.completed .wizard-step-connector {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  box-shadow: 
    0 2px 8px rgba(16, 185, 129, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.wizard-step.completed .wizard-step-connector::after {
  width: 100%;
}

.wizard-step.active .wizard-step-connector {
  background: linear-gradient(90deg, #10b981 0%, var(--border-light) 100%);
}

.wizard-content {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2.5rem;
  min-height: 280px;
  margin-bottom: 1.5rem;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: contentFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
}

.wizard-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-light);
  border-radius: 10px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.05),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.wizard-button:hover:not(:disabled) {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-1px);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.15),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

.wizard-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 
    0 2px 6px rgba(0, 51, 141, 0.1),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

.wizard-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: var(--bg-tertiary);
  border-color: var(--border-light);
  color: var(--text-tertiary);
}

.wizard-button:disabled:hover {
  transform: none;
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.05),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.wizard-button-next {
  margin-left: auto;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  border-color: var(--accent-primary);
  color: #ffffff;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.wizard-button-next:hover:not(:disabled) {
  background: linear-gradient(135deg, #0052cc 0%, #0052cc 100%);
  transform: translateY(-1px);
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.35),
    0 3px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.wizard-button-next:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.dark-mode .wizard-navigation {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .wizard-button {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.3),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.dark-mode .wizard-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-primary);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    0 0 0 1px rgba(0, 51, 141, 0.2);
}

.dark-mode .wizard-button:disabled {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.05);
}

.dark-mode .wizard-button-next {
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.5),
    0 2px 6px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .wizard-button-next:hover:not(:disabled) {
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.6),
    0 3px 8px rgba(0, 51, 141, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

@keyframes pulseActive {
  0%, 100% {
    box-shadow: 
      0 8px 24px rgba(0, 51, 141, 0.35),
      0 4px 12px rgba(0, 51, 141, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 4px rgba(0, 51, 141, 0.1);
  }
  50% {
    box-shadow: 
      0 8px 24px rgba(0, 51, 141, 0.4),
      0 4px 12px rgba(0, 51, 141, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 0 0 6px rgba(0, 51, 141, 0.15);
  }
}

@keyframes checkmarkIn {
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(5deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark-mode .wizard-step-indicator {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text-tertiary);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.dark-mode .wizard-step.active .wizard-step-indicator {
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.5),
    0 4px 12px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 0 4px rgba(0, 51, 141, 0.2);
}

.dark-mode .wizard-step.completed .wizard-step-indicator {
  box-shadow: 
    0 4px 16px rgba(16, 185, 129, 0.4),
    0 2px 8px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .wizard-step-connector {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark-mode .wizard-step.completed .wizard-step-connector {
  box-shadow: 
    0 2px 8px rgba(16, 185, 129, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark-mode .wizard-step-title {
  color: var(--text-primary);
}

.dark-mode .wizard-step.active .wizard-step-title {
  text-shadow: 0 1px 2px rgba(0, 51, 141, 0.3);
}

.dark-mode .wizard-content {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}`,
  },
  Tour: {
    jsx: `import React, { useState, useEffect, useRef } from 'react';
import { HiXMark, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import './Tour.css';

export default function Tour({
  steps = [],
  open,
  isOpen,
  onClose,
  onComplete,
  className = '',
  ...props
}) {
  // Support both open and isOpen for backward compatibility
  const isOpenState = open !== undefined ? open : (isOpen !== undefined ? isOpen : false);
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0, placement: 'bottom' });
  const [highlightRect, setHighlightRect] = useState(null);
  const tourRef = useRef(null);
  const highlightedElementRef = useRef(null);

  useEffect(() => {
    if (isOpenState && steps.length > 0) {
      const step = steps[currentStep];
      const element = document.querySelector(step.target);
      
      if (element) {
        highlightedElementRef.current = element;
        const rect = element.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;
        
        // Store highlight position
        setHighlightRect({
          top: rect.top + scrollY,
          left: rect.left + scrollX,
          width: rect.width,
          height: rect.height,
        });

        // Determine placement (top, bottom, left, right)
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = viewportWidth - rect.right;
        const spaceLeft = rect.left;

        let placement = 'bottom';
        let top = rect.bottom + scrollY + 16;
        let left = rect.left + scrollX + rect.width / 2;

        if (spaceBelow < 200 && spaceAbove > spaceBelow) {
          placement = 'top';
          top = rect.top + scrollY - 16;
        } else if (spaceRight < 300 && spaceLeft > spaceRight) {
          placement = 'left';
          top = rect.top + scrollY + rect.height / 2;
          left = rect.left + scrollX - 16;
        } else if (spaceLeft < 300) {
          placement = 'right';
          top = rect.top + scrollY + rect.height / 2;
          left = rect.right + scrollX + 16;
        }

        setPosition({ top, left, placement });

        // Scroll element into view if needed
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    }
  }, [isOpenState, currentStep, steps]);

  useEffect(() => {
    if (isOpenState && highlightedElementRef.current) {
      // Add highlight class to target element
      highlightedElementRef.current.classList.add('tour-highlighted');
      
      return () => {
        if (highlightedElementRef.current) {
          highlightedElementRef.current.classList.remove('tour-highlighted');
        }
      };
    }
  }, [isOpenState, currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (onComplete) {
        onComplete();
      }
      if (onClose) {
        onClose();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    if (highlightedElementRef.current) {
      highlightedElementRef.current.classList.remove('tour-highlighted');
    }
    if (onClose) {
      onClose();
    }
  };

  if (!isOpenState || steps.length === 0) return null;

  const step = steps[currentStep];

  return (
    <>
      <div className="tour-overlay" onClick={handleClose} />
      {highlightRect && (
        <div
          className="tour-highlight"
          style={{
            top: \`\${highlightRect.top}px\`,
            left: \`\${highlightRect.left}px\`,
            width: \`\${highlightRect.width}px\`,
            height: \`\${highlightRect.height}px\`,
          }}
        />
      )}
      <div
        ref={tourRef}
        className={\`tour tour-\${position.placement} \${className}\`}
        style={{
          top: \`\${position.top}px\`,
          left: \`\${position.left}px\`,
        }}
        {...props}
      >
        <div className="tour-header">
          <div className="tour-header-content">
            <div className="tour-step-badge">Step {currentStep + 1}</div>
            <div className="tour-title">{step.title}</div>
          </div>
          <button 
            className="tour-close" 
            onClick={handleClose}
            aria-label="Close tour"
            type="button"
          >
            <HiXMark />
          </button>
        </div>
        <div className="tour-content">
          <p className="tour-description">{step.content}</p>
        </div>
        <div className="tour-footer">
          <div className="tour-progress">
            <div className="tour-progress-bar">
              <div 
                className="tour-progress-fill"
                style={{ width: \`\${((currentStep + 1) / steps.length) * 100}%\` }}
              />
            </div>
            <span className="tour-progress-text">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="tour-actions">
            {currentStep > 0 && (
              <button
                className="tour-button tour-button-secondary"
                onClick={handlePrev}
                type="button"
              >
                <HiChevronLeft />
                Previous
              </button>
            )}
            <button
              className="tour-button tour-button-primary"
              onClick={handleNext}
              type="button"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <HiChevronRight />
                </>
              ) : (
                'Finish'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`,
    css: `.tour-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 9998;
  animation: fadeIn 0.3s ease;
}

.tour-highlight {
  position: absolute;
  border: 3px solid var(--accent-primary);
  border-radius: 12px;
  box-shadow: 
    0 0 0 9999px rgba(0, 0, 0, 0.6),
    0 0 0 4px var(--accent-primary),
    0 0 20px rgba(0, 51, 141, 0.5),
    inset 0 0 20px rgba(0, 51, 141, 0.2);
  z-index: 9997;
  pointer-events: none;
  animation: highlightPulse 2s ease-in-out infinite;
}

.tour-highlighted {
  position: relative;
  z-index: 9999 !important;
  transition: all 0.3s ease;
}

.tour {
  position: fixed;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.25),
    0 4px 16px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  z-index: 10000;
  min-width: 340px;
  max-width: 420px;
  animation: tourSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.tour-bottom {
  transform: translateX(-50%) translateY(0);
}

.tour-top {
  transform: translateX(-50%) translateY(-100%);
}

.tour-left {
  transform: translateX(-100%) translateY(-50%);
}

.tour-right {
  transform: translateX(0) translateY(-50%);
}

.tour-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.25rem;
  border-bottom: 1px solid var(--border-light);
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.03) 0%, rgba(0, 51, 141, 0.01) 100%);
  border-radius: 16px 16px 0 0;
}

.tour-header-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tour-step-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  width: fit-content;
  box-shadow: 0 2px 8px rgba(0, 51, 141, 0.25);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.tour-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  letter-spacing: -0.3px;
}

.tour-close {
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-left: 0.75rem;
}

.tour-close:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
  transform: rotate(90deg) scale(1.1);
}

.tour-close:active {
  transform: rotate(90deg) scale(0.95);
}

.tour-content {
  padding: 1.5rem;
}

.tour-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  letter-spacing: -0.1px;
}

.tour-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border-light);
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.02) 0%, rgba(0, 51, 141, 0.01) 100%);
  border-radius: 0 0 16px 16px;
}

.tour-progress {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tour-progress-bar {
  flex: 1;
  height: 6px;
  background: var(--border-light);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.tour-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary) 0%, #0066ff 100%);
  border-radius: 6px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 0 8px rgba(0, 51, 141, 0.4),
    0 2px 4px rgba(0, 51, 141, 0.2);
}

.tour-progress-text {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  font-weight: 600;
  min-width: 50px;
  text-align: right;
}

.tour-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.tour-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  white-space: nowrap;
}

.tour-button-primary {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  color: #ffffff;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.tour-button-primary:hover {
  background: linear-gradient(135deg, #0052cc 0%, #0052cc 100%);
  transform: translateY(-2px);
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.35),
    0 3px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.tour-button-primary:active {
  transform: translateY(0);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.tour-button-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.05),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.tour-button-secondary:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.15),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

.tour-button-secondary:active {
  transform: translateY(0);
  box-shadow: 
    0 2px 6px rgba(0, 51, 141, 0.1),
    0 0 0 1px rgba(0, 51, 141, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes highlightPulse {
  0%, 100% {
    box-shadow: 
      0 0 0 9999px rgba(0, 0, 0, 0.6),
      0 0 0 4px var(--accent-primary),
      0 0 20px rgba(0, 51, 141, 0.5),
      inset 0 0 20px rgba(0, 51, 141, 0.2);
  }
  50% {
    box-shadow: 
      0 0 0 9999px rgba(0, 0, 0, 0.6),
      0 0 0 5px var(--accent-primary),
      0 0 30px rgba(0, 51, 141, 0.6),
      inset 0 0 25px rgba(0, 51, 141, 0.3);
  }
}

@keyframes tourSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.dark-mode .tour-overlay {
  background: rgba(0, 0, 0, 0.75);
}

.dark-mode .tour-highlight {
  box-shadow: 
    0 0 0 9999px rgba(0, 0, 0, 0.75),
    0 0 0 4px var(--accent-primary),
    0 0 30px rgba(0, 51, 141, 0.6),
    inset 0 0 25px rgba(0, 51, 141, 0.3);
}

.dark-mode .tour {
  background: rgba(30, 30, 30, 0.98);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.dark-mode .tour-header {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 51, 141, 0.05) 100%);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .tour-footer {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.08) 0%, rgba(0, 51, 141, 0.04) 100%);
  border-top-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .tour-progress-bar {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark-mode .tour-progress-fill {
  box-shadow: 
    0 0 12px rgba(0, 51, 141, 0.6),
    0 2px 6px rgba(0, 51, 141, 0.4);
}

.dark-mode .tour-button-secondary {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.3),
    0 0 0 0 rgba(0, 51, 141, 0);
}

.dark-mode .tour-button-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--accent-primary);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    0 0 0 1px rgba(0, 51, 141, 0.2);
}

.dark-mode .tour-button-primary {
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.5),
    0 2px 6px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .tour-button-primary:hover {
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.6),
    0 3px 8px rgba(0, 51, 141, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .tour {
    min-width: 280px;
    max-width: 90vw;
  }

  .tour-header,
  .tour-content,
  .tour-footer {
    padding: 1rem;
  }

  .tour-actions {
    flex-direction: column;
    width: 100%;
  }

  .tour-button {
    width: 100%;
    justify-content: center;
  }
}`,
  },
  Chat: {
    jsx: `import React, { useState, useRef, useEffect } from 'react';
import { HiPaperAirplane, HiFaceSmile } from 'react-icons/hi2';
import './Chat.css';

export default function Chat({
  messages = [],
  onSend,
  placeholder = 'Type a message...',
  className = '',
  ...props
}) {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={\`chat \${className}\`} {...props}>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={\`chat-message \${message.sender === 'user' ? 'user' : 'other'}\`}
          >
            {message.avatar && (
              <div className="chat-avatar">{message.avatar}</div>
            )}
            <div className="chat-message-content">
              {message.sender !== 'user' && message.name && (
                <div className="chat-message-name">{message.name}</div>
              )}
              <div className="chat-message-text">{message.text}</div>
              {message.timestamp && (
                <div className="chat-message-time">{message.timestamp}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <button 
          className="chat-input-button"
          type="button"
          aria-label="Add emoji"
        >
          <HiFaceSmile />
        </button>
        <input
          type="text"
          className="chat-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="chat-input-button chat-send-button"
          onClick={handleSend}
          type="button"
          aria-label="Send message"
          disabled={!inputValue.trim()}
        >
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
}`,
    css: `.chat {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: linear-gradient(180deg, rgba(0, 51, 141, 0.01) 0%, transparent 100%);
  scrollbar-width: thin;
  scrollbar-color: var(--border-light) transparent;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: var(--border-color);
}

.chat-message {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  max-width: 75%;
  animation: messageSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation-fill-mode: forwards;
}

.chat-message:nth-child(1) { animation-delay: 0.05s; }
.chat-message:nth-child(2) { animation-delay: 0.1s; }
.chat-message:nth-child(3) { animation-delay: 0.15s; }

.chat-message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.25),
    0 0 0 2px var(--bg-card);
  border: 2px solid var(--bg-card);
}

.chat-message.user .chat-avatar {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 
    0 2px 8px rgba(16, 185, 129, 0.25),
    0 0 0 2px var(--bg-card);
}

.chat-message-content {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-width: 0;
}

.chat-message-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.125rem;
  padding: 0 0.5rem;
  letter-spacing: -0.1px;
}

.chat-message.user .chat-message-name {
  text-align: right;
  padding-right: 0.5rem;
}

.chat-message-text {
  padding: 0.875rem 1.125rem;
  border-radius: 16px;
  font-size: 0.9375rem;
  line-height: 1.6;
  word-wrap: break-word;
  position: relative;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-message-text:hover {
  transform: translateY(-1px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
}

.chat-message.user .chat-message-text {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  color: #ffffff;
  border-bottom-right-radius: 4px;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.chat-message.user .chat-message-text:hover {
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.35),
    0 3px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.chat-message.other .chat-message-text {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  border-bottom-left-radius: 4px;
}

.chat-message-time {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  padding: 0 0.5rem;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.chat-message.user .chat-message-time {
  text-align: right;
  padding-right: 0.5rem;
}

.chat-input-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border-light);
  background: linear-gradient(180deg, var(--bg-card) 0%, rgba(0, 51, 141, 0.02) 100%);
  backdrop-filter: blur(10px);
}

.chat-input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  border: 1.5px solid var(--border-light);
  border-radius: 24px;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.9375rem;
  font-family: inherit;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.04),
    inset 0 1px 2px rgba(0, 0, 0, 0.02);
}

.chat-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.1),
    0 4px 12px rgba(0, 51, 141, 0.15),
    inset 0 1px 2px rgba(0, 0, 0, 0.02);
  transform: translateY(-1px);
}

.chat-input::placeholder {
  color: var(--text-tertiary);
  opacity: 0.7;
}

.chat-input-button {
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.625rem;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.chat-input-button:hover:not(:disabled) {
  color: var(--accent-primary);
  background: var(--bg-tertiary);
  transform: scale(1.1) rotate(5deg);
}

.chat-input-button:active:not(:disabled) {
  transform: scale(0.95);
}

.chat-input-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.chat-send-button {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  color: #ffffff;
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.3),
    0 2px 6px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.chat-send-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #0052cc 0%, #0052cc 100%);
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.35),
    0 3px 8px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.chat-send-button:active:not(:disabled) {
  transform: scale(0.95) rotate(0deg);
}

.chat-send-button:disabled {
  background: var(--bg-tertiary);
  color: var(--text-tertiary);
  box-shadow: none;
  opacity: 0.5;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark-mode .chat {
  background: rgba(30, 30, 30, 0.98);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.dark-mode .chat-messages {
  background: linear-gradient(180deg, rgba(0, 51, 141, 0.05) 0%, transparent 100%);
}

.dark-mode .chat-messages::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

.dark-mode .chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dark-mode .chat-avatar {
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.4),
    0 0 0 2px rgba(30, 30, 30, 0.98);
  border-color: rgba(30, 30, 30, 0.98);
}

.dark-mode .chat-message.user .chat-avatar {
  box-shadow: 
    0 2px 8px rgba(16, 185, 129, 0.4),
    0 0 0 2px rgba(30, 30, 30, 0.98);
}

.dark-mode .chat-message.other .chat-message-text {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2);
}

.dark-mode .chat-message.user .chat-message-text {
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.5),
    0 2px 6px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .chat-message.user .chat-message-text:hover {
  box-shadow: 
    0 6px 16px rgba(0, 51, 141, 0.6),
    0 3px 8px rgba(0, 51, 141, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.dark-mode .chat-input-container {
  background: linear-gradient(180deg, rgba(30, 30, 30, 0.98) 0%, rgba(0, 51, 141, 0.05) 100%);
  border-top-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .chat-input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

.dark-mode .chat-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 
    0 0 0 4px rgba(0, 51, 141, 0.2),
    0 4px 12px rgba(0, 51, 141, 0.25),
    inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

.dark-mode .chat-input-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.dark-mode .chat-send-button:disabled {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .chat {
    height: 400px;
    border-radius: 12px;
  }

  .chat-messages {
    padding: 1rem;
    gap: 1rem;
  }

  .chat-message {
    max-width: 85%;
  }

  .chat-avatar {
    width: 36px;
    height: 36px;
    font-size: 0.8125rem;
  }

  .chat-message-text {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  .chat-input-container {
    padding: 1rem;
    gap: 0.625rem;
  }

  .chat-input {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  .chat-input-button {
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
    padding: 0.5rem;
  }
}`,
  },
  Header: {
    jsx: `import React, { useState, useEffect } from "react";
import "./Header.css";

// Import logo image
import logoImage from "../../assets/Logo.svg";

/**
 * Reusable Header/Navigation Component
 *
 * @param {Array} menuItems - Array of menu items { label, href }
 * @param {string} logo - Logo text or image URL
 * @param {Function} onMenuItemClick - Callback when menu item is clicked
 * @param {string} className - Additional CSS classes
 * @param {Object} viewComponentsButton - Optional button for viewing components
 */
export default function Header({
  menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
  ],
  logo = "Chandu UI",
  onMenuItemClick,
  className = "",
  viewComponentsButton,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const handleClick = (item) => {
    setIsMobileMenuOpen(false);
    onMenuItemClick?.(item);
  };

  return (
    <header className={\`header \${isScrolled ? "scrolled" : ""} \${className}\`}>
      <div className="header-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector("#home");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            src={logoImage}
            alt="Chandu UI Logo"
            className="logo-image"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </a>
        <nav className={\`nav \${isMobileMenuOpen ? "open" : ""}\`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
                if (item.href.startsWith("#")) {
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.label}
            </a>
          ))}
          {viewComponentsButton && (
            <button
              className="nav-button"
              onClick={(e) => {
                e.preventDefault();
                handleClick({ label: "View Components" });
                viewComponentsButton.onClick?.();
              }}
            >
              {viewComponentsButton.label || "View Components"}
            </button>
          )}
        </nav>
        <button
          className={\`mobile-menu-toggle \${isMobileMenuOpen ? "active" : ""}\`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className={\`mobile-menu-overlay \${isMobileMenuOpen ? "active" : ""}\`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}`,
    css: `.header {
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  right: 1.25rem;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark-mode .header {
  background: rgba(18, 18, 18, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.header.scrolled {
  top: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.header-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
}

.logo-image {
  height: 100px;
  width: auto;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 0.625rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-hover);
  transform: translateY(-2px);
}

.nav-button {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.625rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 51, 141, 0.3);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.625rem;
  }

  .nav:not(.open) {
    display: none;
  }
}`,
  },
  Hero: {
    jsx: `import React from "react";
import "./Hero.css";

/**
 * Reusable Hero Section Component
 *
 * @param {string} title - Main heading
 * @param {string} subtitle - Subheading
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button objects { label, onClick, variant }
 * @param {string} backgroundImage - Background image URL
 * @param {string} className - Additional CSS classes
 */
export default function Hero({
  title = "Welcome to Chandu UI",
  subtitle = "Innovation Meets Excellence",
  description = "We build cutting-edge solutions that transform businesses and drive success in the digital age.",
  buttons = [
    { label: "Get Started", onClick: () => {}, variant: "primary" },
    { label: "Learn More", onClick: () => {}, variant: "secondary" },
  ],
  backgroundImage,
  className = "",
}) {
  return (
    <section
      className={\`hero \${className}\`}
      id="home"
      style={
        backgroundImage ? { backgroundImage: \`url(\${backgroundImage})\` } : {}
      }
    >
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          <h1 className="hero-title">{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          {buttons.length > 0 && (
            <div className="hero-buttons">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={\`hero-button \${button.variant || "primary"}\`}
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}`,
    css: `.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.03) 0%,
    rgba(0, 102, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.02) 50%,
    rgba(0, 51, 141, 0.03) 75%,
    rgba(0, 102, 255, 0.05) 100%
  );
  background-size: 400% 400%;
  background-position: center;
  padding-top: 120px;
  margin-top: 20px;
  overflow: hidden;
  transition: background 0.3s ease;
  animation: gradientShift 20s ease infinite;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 51, 141, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 102, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(0, 51, 141, 0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 30%,
    transparent 70%,
    rgba(0, 51, 141, 0.05) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.hero[style*="background-image"] .hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.hero-content {
  text-align: center;
  color: var(--text-primary);
  max-width: 850px;
  margin: 0 auto;
  transition: color 0.3s ease;
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--accent-primary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: color 0.3s ease;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 102, 255, 0.08) 100%);
  border-radius: 50px;
  border: 1px solid rgba(0, 51, 141, 0.2);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out 0.1s both;
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #0066ff 30%,
    var(--accent-primary) 60%,
    #0066ff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  letter-spacing: -0.04em;
  animation: fadeInUp 0.8s ease-out 0.2s both, gradientText 8s ease infinite;
  text-shadow: 0 4px 20px rgba(0, 51, 141, 0.1);
  position: relative;
}

@keyframes gradientText {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  border-radius: 2px;
  opacity: 0.6;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-description {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  margin-bottom: 3.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
  transition: color 0.3s ease;
  font-weight: 400;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 1s ease-out 0.3s both;
  letter-spacing: -0.01em;
}

.hero-buttons {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.hero-button {
  padding: 1.125rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  font-family: inherit;
}

.hero-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.hero-button:hover::before {
  width: 300px;
  height: 300px;
}

.hero-button.primary {
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  color: #ffffff;
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.3),
    0 2px 8px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
}

.hero-button.primary:hover {
  background: linear-gradient(135deg, #0052cc 0%, var(--accent-primary) 100%);
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    0 8px 32px rgba(0, 51, 141, 0.4),
    0 4px 16px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.hero-button.primary:active {
  transform: translateY(-2px) scale(1.01);
}

.hero-button.secondary {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--accent-primary);
  border: 2px solid var(--accent-primary);
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.15),
    0 2px 8px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.hero-button.secondary:hover {
  background: var(--accent-primary);
  color: #ffffff;
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    0 8px 32px rgba(0, 51, 141, 0.35),
    0 4px 16px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: var(--accent-primary);
}

.hero-button.secondary:active {
  transform: translateY(-2px) scale(1.01);
}

.dark-mode .hero {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.1) 0%,
    rgba(0, 102, 255, 0.08) 25%,
    rgba(30, 30, 30, 0.05) 50%,
    rgba(0, 51, 141, 0.1) 75%,
    rgba(0, 102, 255, 0.08) 100%
  );
}

.dark-mode .hero::before {
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 51, 141, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(0, 51, 141, 0.1) 0%, transparent 50%);
}

.dark-mode .hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    transparent 30%,
    transparent 70%,
    rgba(0, 51, 141, 0.1) 100%
  );
}

.dark-mode .hero-subtitle {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.2) 0%, rgba(0, 102, 255, 0.15) 100%);
  border-color: rgba(0, 51, 141, 0.3);
  box-shadow: 
    0 2px 8px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark-mode .hero-description {
  color: var(--text-secondary);
}

.dark-mode .hero-button.secondary {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-primary);
  box-shadow: 
    0 4px 16px rgba(0, 51, 141, 0.2),
    0 2px 8px rgba(0, 51, 141, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .hero-button.secondary:hover {
  box-shadow: 
    0 8px 32px rgba(0, 51, 141, 0.4),
    0 4px 16px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: clamp(2.25rem, 7vw, 4rem);
  }

  .hero-description {
    font-size: clamp(1.125rem, 2.2vw, 1.375rem);
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
    min-height: auto;
    padding-bottom: 4rem;
    background-size: 200% 200%;
  }

  .hero-container {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .hero-title::after {
    width: 80px;
    height: 3px;
  }

  .hero-subtitle {
    font-size: 0.875rem;
    padding: 0.4375rem 1rem;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .hero-button {
    width: 100%;
    max-width: 100%;
    padding: 1rem 2rem;
    font-size: 0.9375rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 90px;
    padding-bottom: 3rem;
  }

  .hero-container {
    padding: 1rem;
  }

  .hero-title {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    word-wrap: break-word;
    margin-bottom: 1.25rem;
  }

  .hero-title::after {
    width: 60px;
    height: 2px;
  }

  .hero-subtitle {
    font-size: 0.8125rem;
    padding: 0.375rem 0.875rem;
    margin-bottom: 0.875rem;
  }

  .hero-description {
    font-size: clamp(0.9375rem, 1.8vw, 1.125rem);
    margin-bottom: 2rem;
    word-wrap: break-word;
    line-height: 1.6;
  }

  .hero-button {
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .hero {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 2.5rem;
  }

  .hero-title {
    font-size: clamp(1.75rem, 6vw, 2.25rem);
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
    margin-bottom: 2rem;
  }

  .hero-buttons {
    flex-direction: row;
    max-width: 100%;
  }

  .hero-button {
    flex: 1;
    min-width: 0;
  }
}`,
  },
  Features: {
    jsx: `import React from "react";
import {
  HiBolt,
  HiUserGroup,
  HiPaintBrush,
  HiDevicePhoneMobile,
  HiRocketLaunch,
} from "react-icons/hi2";
import { HiCode } from "react-icons/hi";
import "./Features.css";

/**
 * Features Component for Tech Companies
 */
export default function Features() {
  const features = [
    {
      icon: HiBolt,
      title: "Lightning Fast",
      description:
        "Optimized for performance with minimal bundle size. Components are tree-shakeable and load only what you need.",
    },
    {
      icon: HiUserGroup,
      title: "Accessible",
      description:
        "Built with accessibility in mind. All components follow WCAG guidelines and work with screen readers.",
    },
    {
      icon: HiPaintBrush,
      title: "Customizable",
      description:
        "Easy to customize and theme. Use CSS variables or override styles to match your brand identity.",
    },
    {
      icon: HiDevicePhoneMobile,
      title: "Responsive",
      description:
        "Mobile-first design that works seamlessly across all devices and screen sizes.",
    },
    {
      icon: HiCode,
      title: "Developer Friendly",
      description:
        "Well-documented with TypeScript support. Intuitive APIs that make development a breeze.",
    },
    {
      icon: HiRocketLaunch,
      title: "Production Ready",
      description:
        "Battle-tested components used in production. Regular updates and maintenance included.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Chandu UI?</h2>
          <p className="features-subtitle">
            Built for modern tech companies and startups who need reliable,
            professional components
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,
    css: `.features {
  padding: 8rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.02) 0%,
    rgba(0, 102, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(0, 51, 141, 0.02) 75%,
    rgba(0, 102, 255, 0.03) 100%
  );
  position: relative;
  transition: background-color 0.3s ease;
  overflow: hidden;
  scroll-margin-top: 100px;
}

.features::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: gradientPulse 15s ease infinite;
}

@keyframes gradientPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.features-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #0066ff 30%,
    var(--accent-primary) 60%,
    #0066ff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 1rem;
  box-sizing: border-box;
  letter-spacing: -0.03em;
  line-height: 1.2;
  animation: gradientText 8s ease infinite;
  position: relative;
}

@keyframes gradientText {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.features-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  border-radius: 2px;
  opacity: 0.6;
}

.features-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  transition: color 0.3s ease;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.75rem;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.feature-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1.5px solid var(--border-light);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--accent-primary),
    #0066ff,
    var(--accent-primary)
  );
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: gradientShift 3s ease infinite;
}

.feature-card::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(0, 51, 141, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--accent-primary);
  box-shadow: 
    0 16px 48px rgba(0, 51, 141, 0.15),
    0 8px 24px rgba(0, 51, 141, 0.1),
    0 0 0 1px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  background: linear-gradient(
    135deg,
    var(--bg-card) 0%,
    rgba(0, 51, 141, 0.02) 100%
  );
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover::after {
  opacity: 1;
}

.dark-mode .feature-card {
  background: rgba(30, 30, 30, 0.7);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .feature-card:hover {
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(0, 51, 141, 0.15) 100%
  );
  box-shadow: 
    0 16px 48px rgba(0, 51, 141, 0.3),
    0 8px 24px rgba(0, 51, 141, 0.2),
    0 0 0 1px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.75rem;
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 102, 255, 0.08) 100%);
  border-radius: 20px;
  border: 1px solid rgba(0, 51, 141, 0.2);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
  color: #0066ff;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.15) 0%, rgba(0, 102, 255, 0.12) 100%);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.dark-mode .feature-icon {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.2) 0%, rgba(0, 102, 255, 0.15) 100%);
  border-color: rgba(0, 51, 141, 0.3);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark-mode .feature-card:hover .feature-icon {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.3) 0%, rgba(0, 102, 255, 0.2) 100%);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.feature-card:hover .feature-title {
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.feature-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  transition: color 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.01em;
}

.dark-mode .features {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.08) 0%,
    rgba(0, 102, 255, 0.06) 25%,
    rgba(30, 30, 30, 0.03) 50%,
    rgba(0, 51, 141, 0.08) 75%,
    rgba(0, 102, 255, 0.06) 100%
  );
}

.dark-mode .features::before {
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.1) 0%, transparent 60%);
}

@media (max-width: 768px) {
  .features {
    padding: 4rem 1.5rem;
  }

  .features-header {
    margin-bottom: 3rem;
  }

  .features-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.3;
  }

  .features-title::after {
    width: 80px;
    height: 3px;
  }

  .features-subtitle {
    font-size: clamp(0.9375rem, 2vw, 1.125rem);
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
  }

  .feature-card {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }

  .feature-icon {
    font-size: 2.5rem;
    width: 70px;
    height: 70px;
    margin-bottom: 1.25rem;
  }

  .feature-title {
    font-size: 1.35rem;
  }

  .feature-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .features {
    padding: 3rem 1rem;
  }

  .features-container {
    padding: 0 0.5rem;
  }

  .features-header {
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .features-title {
    font-size: 1.5rem;
  }

  .features-subtitle {
    font-size: 0.95rem;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .feature-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .feature-title {
    font-size: 1.25rem;
  }

  .feature-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .features {
    padding: 3rem 1.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
    max-width: 100%;
  }

  .feature-card {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 360px) {
  .features {
    padding: 2.5rem 0.75rem;
  }

  .features-container {
    padding: 0 0.25rem;
  }

  .features-title {
    font-size: 1.35rem;
    padding: 0 0.5rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .feature-card {
    padding: 1.25rem;
    width: 100%;
    max-width: 100%;
  }
}`,
  },
  About: {
    jsx: `import React from "react";
import "./About.css";

/**
 * About Component for Tech Companies
 */
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-header">
              <h2 className="about-title">Built for Modern Teams</h2>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">71+</div>
                  <div className="stat-label">Components</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Accessible</div>
                </div>
              </div>
            </div>
            <p className="about-description">
              Chandu UI is a comprehensive React component library designed
              specifically for tech companies and startups. We understand the
              challenges of building modern web applications - you need
              components that are reliable, performant, and easy to integrate.
            </p>
            <p className="about-description">
              Our components are production-ready, fully accessible, and
              optimized for performance. Whether you're building a SaaS
              platform, a startup MVP, or an enterprise application, Chandu UI
              provides the building blocks you need to ship faster.
            </p>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <div className="mac-card">
                <div className="code-block">
                  <div className="code-header">
                    <div className="code-dots">
                      <span className="code-dot code-dot-red"></span>
                      <span className="code-dot code-dot-yellow"></span>
                      <span className="code-dot code-dot-green"></span>
                    </div>
                    <span className="code-filename">example.jsx</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">import</span>
                      <span className="code-bracket">{" {"}</span>
                      <span className="code-identifier"> Button </span>
                      <span className="code-bracket">{"}"}</span>
                      <span className="code-keyword"> from</span>
                    </div>
                    <div className="code-line">
                      <span className="code-string"> 'chandu-ui-components'</span>
                      <span className="code-punctuation">;</span>
                    </div>
                    <div className="code-line code-empty"></div>
                    <div className="code-line">
                      <span className="code-tag">&lt;</span>
                      <span className="code-component">Button</span>
                      <span className="code-attr"> variant</span>
                      <span className="code-operator">=</span>
                      <span className="code-string">"primary"</span>
                      <span className="code-tag">&gt;</span>
                    </div>
                    <div className="code-line">
                      <span className="code-text"> Get Started</span>
                    </div>
                    <div className="code-line">
                      <span className="code-tag">&lt;/</span>
                      <span className="code-component">Button</span>
                      <span className="code-tag">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    css: `.about {
  padding: 8rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.02) 0%,
    rgba(0, 102, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(0, 51, 141, 0.02) 75%,
    rgba(0, 102, 255, 0.03) 100%
  );
  position: relative;
  transition: background-color 0.3s ease;
  overflow: hidden;
  scroll-margin-top: 100px;
}

.about::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: gradientPulse 15s ease infinite;
}

@keyframes gradientPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.about-text,
.about-image {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.about-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #0066ff 30%,
    var(--accent-primary) 60%,
    #0066ff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: -0.03em;
  line-height: 1.2;
  animation: gradientText 8s ease infinite;
  position: relative;
  flex: 1;
  min-width: 300px;
}

@keyframes gradientText {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.about-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 0;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  border-radius: 2px;
  opacity: 0.6;
}

.about-description {
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.8;
  transition: color 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.01em;
}

.about-stats {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex: 0 0 auto;
  margin: 0;
}

.stat-item {
  text-align: left;
  flex: 0 0 auto;
  min-width: 120px;
  padding: 1.25rem 1.75rem;
  background: var(--bg-card);
  border: 1.5px solid var(--border-light);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), #0066ff);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.12),
    0 4px 12px rgba(0, 51, 141, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  background: linear-gradient(135deg, var(--bg-card) 0%, rgba(0, 51, 141, 0.02) 100%);
}

.stat-item:hover::before {
  opacity: 1;
}

.dark-mode .stat-item {
  background: rgba(30, 30, 30, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .stat-item:hover {
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(0, 51, 141, 0.15) 100%);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.3),
    0 4px 12px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-primary) 0%, #0066ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  font-weight: 600;
}

.about-image {
  position: relative;
}

.about-image-placeholder {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 102, 255, 0.08) 100%) !important;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 8px 32px rgba(0, 51, 141, 0.15),
    0 4px 16px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1.5px solid rgba(0, 51, 141, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.about-image-placeholder::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(0, 51, 141, 0.15) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.about-image-placeholder:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    0 12px 48px rgba(0, 51, 141, 0.2),
    0 6px 24px rgba(0, 51, 141, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: var(--accent-primary);
}

.about-image-placeholder:hover::before {
  opacity: 1;
}

.dark-mode .about-image-placeholder {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.2) 0%, rgba(0, 102, 255, 0.15) 100%) !important;
  border-color: rgba(0, 51, 141, 0.3);
  box-shadow: 
    0 8px 32px rgba(0, 51, 141, 0.3),
    0 4px 16px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .about-image-placeholder:hover {
  box-shadow: 
    0 12px 48px rgba(0, 51, 141, 0.4),
    0 6px 24px rgba(0, 51, 141, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.mac-card {
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.4),
    0 4px 16px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.mac-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), #0066ff, var(--accent-primary));
  background-size: 200% 100%;
  animation: gradientShift 3s ease infinite;
  opacity: 0.8;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.dark-mode .mac-card {
  background: #1e1e1e;
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.6),
    0 4px 16px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.08);
}

.code-block {
  font-family:
    "SF Mono", "Monaco", "Menlo", "Consolas", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  background: transparent !important;
  border-radius: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.code-header {
  background: #2d2d2d !important;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3a3a3a;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.dark-mode .code-header {
  background: #2d2d2d !important;
  border-bottom-color: #3a3a3a;
}

.code-dots {
  display: flex;
  gap: 0.375rem;
  align-items: center;
}

.code-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transition: opacity 0.2s ease;
}

.code-dot-red {
  background: #ff5f57;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.code-dot-yellow {
  background: #ffbd2e;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.code-dot-green {
  background: #28ca42;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
}

.code-filename {
  font-size: 0.75rem;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-family:
    "Poppins",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  transition: color 0.3s ease;
}

.dark-mode .code-filename {
  color: #ffffff;
}

.code-content {
  padding: 1.75rem 1.5rem;
  background: #1e1e1e !important;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dark-mode .code-content {
  background: #1e1e1e !important;
}

.code-line {
  margin-bottom: 0.5rem;
  padding-left: 0;
  position: relative;
  white-space: pre;
  font-family:
    "SF Mono", "Monaco", "Menlo", "Consolas", "Courier New", monospace;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.6;
  transition: color 0.3s ease;
  font-weight: 400;
}

.dark-mode .code-line {
  color: #ffffff;
  font-weight: 400;
}

.code-line.code-empty {
  height: 0.75rem;
  margin-bottom: 0.5rem;
}

.code-keyword {
  color: #569cd6;
  font-weight: 600;
}

.dark-mode .code-keyword {
  color: #569cd6;
}

.code-bracket {
  color: #ffffff;
  opacity: 1;
}

.dark-mode .code-bracket {
  color: #ffffff;
  opacity: 1;
}

.code-identifier {
  color: #ffffff;
  font-weight: 400;
}

.dark-mode .code-identifier {
  color: #ffffff;
  font-weight: 400;
}

.code-string {
  color: #ce9178;
}

.dark-mode .code-string {
  color: #ce9178;
}

.code-punctuation {
  color: #ffffff;
  opacity: 1;
  transition: color 0.3s ease;
}

.dark-mode .code-punctuation {
  color: #ffffff;
  opacity: 1;
}

.code-tag {
  color: #569cd6;
  transition: color 0.3s ease;
}

.dark-mode .code-tag {
  color: #569cd6;
}

.code-component {
  color: #4ec9b0;
  font-weight: 500;
}

.dark-mode .code-component {
  color: #4ec9b0;
  font-weight: 500;
}

.code-attr {
  color: #9cdcfe;
}

.dark-mode .code-attr {
  color: #9cdcfe;
}

.code-operator {
  color: #ffffff;
  opacity: 1;
  transition: color 0.3s ease;
}

.dark-mode .code-operator {
  color: #ffffff;
  opacity: 1;
}

.code-text {
  color: #ffffff;
  transition: color 0.3s ease;
  font-weight: 400;
}

.dark-mode .code-text {
  color: #ffffff;
  font-weight: 400;
}

.dark-mode .about {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.08) 0%,
    rgba(0, 102, 255, 0.06) 25%,
    rgba(30, 30, 30, 0.03) 50%,
    rgba(0, 51, 141, 0.08) 75%,
    rgba(0, 102, 255, 0.06) 100%
  );
}

.dark-mode .about::before {
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.1) 0%, transparent 60%);
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .about-title {
    min-width: auto;
    width: 100%;
  }

  .about-stats {
    justify-content: flex-start;
    width: 100%;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1.5rem;
  }

  .about-container {
    padding: 0 0.5rem;
  }

  .about-content {
    gap: 2.5rem;
    width: 100%;
    max-width: 100%;
  }

  .about-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .about-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    min-width: auto;
    width: 100%;
    line-height: 1.3;
  }

  .about-title::after {
    width: 80px;
    height: 3px;
  }

  .about-description {
    font-size: clamp(0.9375rem, 2vw, 1.125rem);
    line-height: 1.7;
  }

  .about-stats {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }

  .stat-item {
    flex: 1;
    min-width: 0;
    padding: 1rem 1.25rem;
  }

  .stat-number {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 0.375rem;
  }

  .stat-label {
    font-size: 0.75rem;
    letter-spacing: 0.05em;
  }

  .about-image-placeholder {
    padding: 1.5rem;
  }

  .code-content {
    padding: 1.5rem 1.25rem;
  }

  .code-line {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 3rem 1rem;
  }

  .about-content {
    gap: 2rem;
  }

  .about-title {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
  }

  .about-title::after {
    width: 60px;
    height: 2px;
  }

  .about-description {
    font-size: clamp(0.875rem, 1.8vw, 1rem);
  }

  .about-header {
    gap: 1.25rem;
    margin-bottom: 1rem;
  }

  .about-stats {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }

  .stat-item {
    flex: 1;
    min-width: 0;
    padding: 1rem 0.875rem;
  }

  .stat-number {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    margin-bottom: 0.375rem;
  }

  .stat-label {
    font-size: 0.6875rem;
    letter-spacing: 0.05em;
  }

  .about-image-placeholder {
    padding: 1.25rem;
  }

  .code-header {
    padding: 0.75rem 1rem;
  }

  .code-content {
    padding: 1.25rem 1rem;
    min-height: 150px;
  }

  .code-line {
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .code-filename {
    font-size: 0.7rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .about {
    padding: 3rem 1.5rem;
  }

  .about-content {
    gap: 2rem;
  }

  .about-header {
    gap: 1.5rem;
  }

  .about-stats {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }

  .stat-item {
    flex: 1;
    min-width: 0;
    padding: 1rem 1.25rem;
  }

  .stat-number {
    font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  }

  .stat-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 360px) {
  .about {
    padding: 2.5rem 0.75rem;
  }

  .about-header {
    gap: 1rem;
  }

  .about-title {
    font-size: 1.35rem;
    min-width: auto;
  }

  .about-title::after {
    width: 50px;
  }

  .about-stats {
    gap: 0.5rem;
  }

  .stat-item {
    padding: 0.875rem 0.625rem;
  }

  .stat-number {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.625rem;
    letter-spacing: 0.05em;
  }
}`,
  },
  Services: {
    jsx: `import React from "react";
import {
  HiBriefcase,
  HiRocketLaunch,
  HiBuildingOffice,
  HiChartBar,
  HiShoppingBag,
  HiCog6Tooth,
} from "react-icons/hi2";
import "./Services.css";

/**
 * Services/Use Cases Component for Tech Companies
 */
export default function Services() {
  const useCases = [
    {
      title: "SaaS Applications",
      description:
        "Perfect for building modern SaaS platforms with professional UI components that scale.",
      icon: HiBriefcase,
    },
    {
      title: "Startup MVPs",
      description:
        "Ship your MVP faster with pre-built components that look professional out of the box.",
      icon: HiRocketLaunch,
    },
    {
      title: "Enterprise Apps",
      description:
        "Enterprise-grade components with accessibility and performance built-in from the start.",
      icon: HiBuildingOffice,
    },
    {
      title: "Admin Dashboards",
      description:
        "Build powerful admin interfaces with our comprehensive set of form and data components.",
      icon: HiChartBar,
    },
    {
      title: "E-commerce Platforms",
      description:
        "Create beautiful shopping experiences with our flexible card and layout components.",
      icon: HiShoppingBag,
    },
    {
      title: "Developer Tools",
      description:
        "Perfect for building developer-facing tools with clean, professional interfaces.",
      icon: HiCog6Tooth,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Perfect For</h2>
          <p className="services-subtitle">
            Use cases where professional, reliable components make all the
            difference
          </p>
        </div>
        <div className="services-grid">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3 className="service-title">{useCase.title}</h3>
                <p className="service-description">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,
    css: `.services {
  padding: 8rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.02) 0%,
    rgba(0, 102, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(0, 51, 141, 0.02) 75%,
    rgba(0, 102, 255, 0.03) 100%
  );
  position: relative;
  transition: background-color 0.3s ease;
  overflow: hidden;
  scroll-margin-top: 100px;
}

.services::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: gradientPulse 15s ease infinite;
}

@keyframes gradientPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.services-header {
  text-align: center;
  margin-bottom: 4rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.services-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    #0066ff 30%,
    var(--accent-primary) 60%,
    #0066ff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 1rem;
  box-sizing: border-box;
  letter-spacing: -0.03em;
  line-height: 1.2;
  animation: gradientText 8s ease infinite;
  position: relative;
}

@keyframes gradientText {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.services-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  border-radius: 2px;
  opacity: 0.6;
}

.services-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.375rem);
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  transition: color 0.3s ease;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.75rem;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.service-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1.5px solid var(--border-light);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--accent-primary),
    #0066ff,
    var(--accent-primary)
  );
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.service-card::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(0, 51, 141, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--accent-primary);
  box-shadow: 
    0 16px 48px rgba(0, 51, 141, 0.15),
    0 8px 24px rgba(0, 51, 141, 0.1),
    0 0 0 1px rgba(0, 51, 141, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  background: linear-gradient(
    135deg,
    var(--bg-card) 0%,
    rgba(0, 51, 141, 0.02) 100%
  );
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover::after {
  opacity: 1;
}

.dark-mode .service-card {
  background: rgba(30, 30, 30, 0.7);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.dark-mode .service-card:hover {
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9) 0%,
    rgba(0, 51, 141, 0.15) 100%
  );
  box-shadow: 
    0 16px 48px rgba(0, 51, 141, 0.3),
    0 8px 24px rgba(0, 51, 141, 0.2),
    0 0 0 1px rgba(0, 51, 141, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.service-icon {
  font-size: 3.5rem;
  margin-bottom: 1.75rem;
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(0, 102, 255, 0.08) 100%);
  border-radius: 20px;
  border: 1px solid rgba(0, 51, 141, 0.2);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
  color: #0066ff;
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.15) 0%, rgba(0, 102, 255, 0.12) 100%);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.dark-mode .service-icon {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.2) 0%, rgba(0, 102, 255, 0.15) 100%);
  border-color: rgba(0, 51, 141, 0.3);
  box-shadow: 
    0 4px 12px rgba(0, 51, 141, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.dark-mode .service-card:hover .service-icon {
  background: linear-gradient(135deg, rgba(0, 51, 141, 0.3) 0%, rgba(0, 102, 255, 0.2) 100%);
  box-shadow: 
    0 8px 24px rgba(0, 51, 141, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.service-card:hover .service-title {
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.service-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  transition: color 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.01em;
}

.dark-mode .services {
  background: linear-gradient(
    135deg,
    rgba(0, 51, 141, 0.08) 0%,
    rgba(0, 102, 255, 0.06) 25%,
    rgba(30, 30, 30, 0.03) 50%,
    rgba(0, 51, 141, 0.08) 75%,
    rgba(0, 102, 255, 0.06) 100%
  );
}

.dark-mode .services::before {
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 141, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 102, 255, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 141, 0.1) 0%, transparent 60%);
}

@media (max-width: 768px) {
  .services {
    padding: 4rem 1.5rem;
  }

  .services-header {
    margin-bottom: 3rem;
  }

  .services-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.3;
  }

  .services-title::after {
    width: 80px;
    height: 3px;
  }

  .services-subtitle {
    font-size: clamp(0.9375rem, 2vw, 1.125rem);
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    max-width: 100%;
  }

  .service-card {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }

  .service-icon {
    font-size: 2.5rem;
    width: 70px;
    height: 70px;
    margin-bottom: 1.25rem;
  }

  .service-title {
    font-size: 1.35rem;
  }

  .service-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 3rem 1rem;
  }

  .services-container {
    padding: 0 0.5rem;
  }

  .services-header {
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .services-title {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
  }

  .services-title::after {
    width: 60px;
    height: 2px;
  }

  .services-subtitle {
    font-size: clamp(0.875rem, 2vw, 1rem);
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .services {
    padding: 3rem 1.5rem;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
    max-width: 100%;
  }

  .service-card {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 360px) {
  .services {
    padding: 2.5rem 0.75rem;
  }

  .services-container {
    padding: 0 0.25rem;
  }

  .services-title {
    font-size: 1.35rem;
    padding: 0 0.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .service-card {
    padding: 1.25rem;
    width: 100%;
    max-width: 100%;
  }
}`,
  },
  Footer: {
    jsx: `import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import "./Footer.css";

/**
 * Footer Component for Tech Companies
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              <img src={Logo} alt="Chandu UI Logo" className="footer-logo-img" />
              <h3 className="footer-logo">Chandu UI</h3>
            </div>
            <p className="footer-description">
              Professional React component library for modern tech companies and
              startups.
            </p>
            <div className="footer-contact">
              <a href="mailto:chanduui@outlook.in" className="footer-email">
                <FaEnvelope />
                <span>chanduui@outlook.in</span>
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/chandu/components"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/chandu/components">Documentation</a></li>
              <li><a href="https://github.com/chandu/components">GitHub</a></li>
              <li><a href="#contact">Support</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Use Cases</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Chandu UI. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`,
    css: `.footer {
  padding: 4rem 0 2rem;
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-hover) 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.footer::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.footer-logo-img {
  width: 56px;
  height: 56px;
  filter: brightness(0) invert(1);
  object-fit: contain;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.footer-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  transition: all 0.2s ease;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 4px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-legal a:hover {
  color: #ffffff;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}`,
  },
};
