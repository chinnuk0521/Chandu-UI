/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Autocomplete
 */

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  HiInformationCircle,
  HiMagnifyingGlass,
  HiCheckCircle,
} from "react-icons/hi2";
import "./Autocomplete.css";

/**
 * Reusable Autocomplete Component
 *
 * A production-ready autocomplete component with multi-select, search, and custom input support.
 * Can be easily integrated into any React application.
 *
 * @param {Array} options - Array of options to display (strings or objects)
 * @param {Array} value - Selected values (controlled component)
 * @param {Function} onChange - Callback when selection changes (receives new selected array)
 * @param {Function} getOptionLabel - Function to get display label from option (default: returns option as string)
 * @param {Function} getOptionValue - Function to get value from option (default: returns option as string)
 * @param {string} placeholder - Placeholder text for input
 * @param {boolean} allowCustomInput - Allow adding custom values not in options list
 * @param {string} className - Additional CSS classes
 * @param {Object} inputProps - Additional props to pass to input element
 */
export default function Autocomplete({
  options = [],
  value = [],
  onChange,
  getOptionLabel = (option) =>
    typeof option === "string" ? option : String(option),
  getOptionValue = (option) =>
    typeof option === "string" ? option : String(option),
  placeholder = "Type to search or add custom...",
  allowCustomInput = true,
  className = "",
  inputProps = {},
}) {
  const [search, setSearch] = useState("");
  const [customInputs, setCustomInputs] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(null);

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Normalize selected values to always be an array
  const selected = Array.isArray(value) ? value : [];

  // Filter options based on search term and exclude selected items
  const filtered = options.filter((option) => {
    const label = getOptionLabel(option).toLowerCase();
    const searchLower = search.toLowerCase();
    const optionValue = getOptionValue(option);
    const isSelected = selected.some(
      (selectedItem) => getOptionValue(selectedItem) === optionValue
    );
    const isCustom = customInputs.some(
      (customItem) => getOptionValue(customItem) === optionValue
    );

    return label.includes(searchLower) && !isSelected && !isCustom;
  });

  const handleSelect = (option) => {
    const newSelected = [...selected, option];
    setSearch("");
    setIsOpen(false);
    setHighlightedIndex(-1);
    onChange?.(newSelected);
    inputRef.current?.focus();
  };

  const handleRemove = (optionToRemove) => {
    const optionValue = getOptionValue(optionToRemove);
    const newSelected = selected.filter(
      (item) => getOptionValue(item) !== optionValue
    );
    setCustomInputs(
      customInputs.filter((item) => getOptionValue(item) !== optionValue)
    );

    if (inputRef.current === document.activeElement) {
      setIsOpen(true);
    }
    onChange?.(newSelected);
    inputRef.current?.focus();
  };

  const handleCustomInput = (e) => {
    e.preventDefault();
    if (search.trim() && allowCustomInput) {
      const trimmedValue = search.trim();
      const isAlreadySelected = selected.some(
        (item) => getOptionValue(item) === trimmedValue
      );

      if (!isAlreadySelected) {
        const newSelected = [...selected, trimmedValue];
        setCustomInputs([...customInputs, trimmedValue]);
        setSearch("");
        setIsOpen(false);
        setHighlightedIndex(-1);
        onChange?.(newSelected);
        inputRef.current?.focus();
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleInputFocus = () => {
    const hasAvailableItems = options.some((option) => {
      const optionValue = getOptionValue(option);
      return !selected.some((item) => getOptionValue(item) === optionValue);
    });

    if (hasAvailableItems || search.length > 0) {
      setIsOpen(true);
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen && e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(0);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filtered[highlightedIndex]) {
          handleSelect(filtered[highlightedIndex]);
        } else if (search.trim() && allowCustomInput) {
          const isAlreadySelected = selected.some(
            (item) => getOptionValue(item) === search.trim()
          );
          if (!isAlreadySelected) {
            handleCustomInput(e);
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
      case "Backspace":
        if (!search && selected.length > 0) {
          handleRemove(selected[selected.length - 1]);
        }
        break;
      default:
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (dropdownRef.current && highlightedIndex >= 0) {
      const focusedElement = dropdownRef.current.children[highlightedIndex];
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex]);

  // Calculate dropdown width to prevent layout shifts
  useLayoutEffect(() => {
    if (isOpen && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [isOpen]);

  const canAddCustom =
    search.trim() &&
    allowCustomInput &&
    !selected.some((item) => getOptionValue(item) === search.trim()) &&
    !options.some((option) => getOptionValue(option) === search.trim());

  return (
    <div className={`autocomplete-wrapper ${className}`} ref={containerRef}>
      <a 
        href="/docs?component=Autocomplete" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=Autocomplete";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <form className="input-area" onSubmit={handleCustomInput}>
        {selected.map((item, index) => (
          <span key={`${getOptionValue(item)}-${index}`} className="tag">
            {getOptionLabel(item)}
            <button
              type="button"
              onClick={() => handleRemove(item)}
              aria-label={`Remove ${getOptionLabel(item)}`}
              className="tag-remove"
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          placeholder={
            selected.length === 0 ? placeholder : "Add more items..."
          }
          value={search}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          autoComplete="off"
          {...inputProps}
        />
      </form>
      {isOpen && (
        <>
          {filtered.length > 0 ? (
            <ul 
              className="suggestions" 
              ref={dropdownRef} 
              role="listbox"
              style={{
                position: "absolute",
                left: 0,
                width: dropdownWidth ? `${dropdownWidth}px` : "100%",
                minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
                top: "calc(100% + 0.5rem)",
                transform: "translateX(0)"
              }}
            >
              {filtered.map((option, index) => (
                <li
                  key={getOptionValue(option)}
                  className={index === highlightedIndex ? "highlighted" : ""}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  role="option"
                  aria-selected={index === highlightedIndex}
                >
                  {getOptionLabel(option)}
                </li>
              ))}
            </ul>
          ) : search.trim() && canAddCustom ? (
            <div 
              className="empty-state" 
              role="status"
              style={{
                position: "absolute",
                left: 0,
                width: dropdownWidth ? `${dropdownWidth}px` : "100%",
                minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
                top: "calc(100% + 0.5rem)",
                transform: "translateX(0)"
              }}
            >
              <HiMagnifyingGlass className="empty-icon" />
              <p>
                No suggestions found. Press <kbd>Enter</kbd> to add "
                {search.trim()}"
              </p>
            </div>
          ) : search.trim() && !canAddCustom ? (
            <div 
              className="empty-state" 
              role="status"
              style={{
                position: "absolute",
                left: 0,
                width: dropdownWidth ? `${dropdownWidth}px` : "100%",
                minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
                top: "calc(100% + 0.5rem)",
                transform: "translateX(0)"
              }}
            >
              <HiInformationCircle className="empty-icon" />
              <p>This item is already selected</p>
            </div>
          ) : !search.trim() && filtered.length === 0 && selected.length > 0 ? (
            <div 
              className="empty-state" 
              role="status"
              style={{
                position: "absolute",
                left: 0,
                width: dropdownWidth ? `${dropdownWidth}px` : "100%",
                minWidth: dropdownWidth ? `${dropdownWidth}px` : "100%",
                top: "calc(100% + 0.5rem)",
                transform: "translateX(0)"
              }}
            >
              <HiCheckCircle className="empty-icon" />
              <p>All items selected. Type to add custom items.</p>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
