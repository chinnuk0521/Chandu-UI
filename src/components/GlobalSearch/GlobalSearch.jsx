import React, { useState, useRef, useEffect } from "react";
import { HiMagnifyingGlass, HiXMark, HiInformationCircle } from 'react-icons/hi2';
import "./GlobalSearch.css";

/**
 * Reusable Global Search Component
 * 
 * A production-ready global search component with real-time filtering,
 * keyboard navigation, and customizable search logic.
 * 
 * @param {Array} items - Array of items to search through
 * @param {Function} onSelect - Callback when an item is selected
 * @param {Function} getItemLabel - Function to get display label from item (default: returns item as string)
 * @param {Function} getItemValue - Function to get value from item (default: returns item as string)
 * @param {Function} searchFunction - Custom search function (optional, uses default if not provided)
 * @param {string} placeholder - Placeholder text for input
 * @param {boolean} showResultsOnFocus - Show results when input is focused
 * @param {number} maxResults - Maximum number of results to display
 * @param {string} className - Additional CSS classes
 * @param {Object} inputProps - Additional props to pass to input element
 */
export default function GlobalSearch({
  items = [],
  onSelect,
  getItemLabel = (item) => typeof item === 'string' ? item : String(item),
  getItemValue = (item) => typeof item === 'string' ? item : String(item),
  searchFunction,
  placeholder = "Search...",
  showResultsOnFocus = true,
  maxResults = 10,
  className = "",
  inputProps = {},
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [results, setResults] = useState([]);
  
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  // Default search function
  const defaultSearchFunction = (searchTerm, items) => {
    if (!searchTerm.trim()) {
      return items.slice(0, maxResults);
    }
    
    const term = searchTerm.toLowerCase();
    return items.filter((item) => {
      const label = getItemLabel(item).toLowerCase();
      return label.includes(term);
    }).slice(0, maxResults);
  };

  // Perform search
  useEffect(() => {
    const searchFn = searchFunction || defaultSearchFunction;
    const searchResults = searchFn(search, items);
    setResults(searchResults);
    setHighlightedIndex(-1);
  }, [search, items, searchFunction, maxResults]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleInputFocus = () => {
    if (showResultsOnFocus && (search.length > 0 || results.length > 0)) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay to allow click events on results to fire first
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }, 200);
  };

  const handleSelect = (item) => {
    setSearch("");
    setIsOpen(false);
    setHighlightedIndex(-1);
    onSelect?.(item);
    inputRef.current?.blur();
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
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && results[highlightedIndex]) {
          handleSelect(results[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
      default:
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
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
    if (resultsRef.current && highlightedIndex >= 0) {
      const focusedElement = resultsRef.current.children[highlightedIndex];
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex]);

  return (
    <div className={`global-search-wrapper ${className}`} ref={containerRef}>
      <div className="global-search-input-wrapper">
        <HiMagnifyingGlass className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          autoComplete="off"
          className="global-search-input"
          {...inputProps}
        />
        {search && (
          <button
            type="button"
            className="clear-button"
            onClick={() => {
              setSearch("");
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            >
            <HiXMark />
          </button>
        )}
      </div>
      {isOpen && results.length > 0 && (
        <div className="global-search-results" ref={resultsRef} role="listbox">
          {results.map((item, index) => (
            <div
              key={getItemValue(item)}
              className={`global-search-result ${index === highlightedIndex ? "highlighted" : ""}`}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => setHighlightedIndex(index)}
              role="option"
              aria-selected={index === highlightedIndex}
            >
              <span className="result-label">{getItemLabel(item)}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && search.trim() && results.length === 0 && (
        <div className="global-search-empty" role="status">
          <HiInformationCircle className="empty-icon" />
          <p>No results found for "{search}"</p>
        </div>
      )}
    </div>
  );
}

