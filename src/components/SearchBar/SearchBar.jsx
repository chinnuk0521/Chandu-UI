import React, { useState, useRef, useEffect } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import "./SearchBar.css";

/**
 * Reusable SearchBar Component
 *
 * @param {Array} suggestions - Array of suggestion strings
 * @param {Function} onSearch - Search handler
 * @param {Function} onSelect - Selection handler
 * @param {string} placeholder - Placeholder text
 * @param {string} className - Additional CSS classes
 */
export default function SearchBar({
  suggestions = [],
  onSearch,
  onSelect,
  placeholder = "Search...",
  className = "",
  ...props
}) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    if (query && suggestions.length > 0) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleSearch = (value) => {
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    if (onSelect) onSelect(suggestion);
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(false);
    if (onSearch) onSearch("");
  };

  return (
    <div className={`search-bar ${className}`} ref={searchRef} {...props}>
      <div className="search-bar-input-wrapper">
        <HiSearch className="search-bar-icon" />
        <input
          type="text"
          className="search-bar-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setShowSuggestions(true)}
        />
        {query && (
          <button className="search-bar-clear" onClick={handleClear}>
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
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
