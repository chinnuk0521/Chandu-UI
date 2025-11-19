/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## CodeEditor
 */

import React, { useState, useRef, useEffect } from "react";
import "./CodeEditor.css";

/**
 * Reusable CodeEditor Component
 *
 * @param {string} value - Code content
 * @param {Function} onChange - Change handler
 * @param {string} language - Programming language
 * @param {string} className - Additional CSS classes
 */
export default function CodeEditor({
  value = "",
  onChange,
  language = "javascript",
  className = "",
  ...props
}) {
  const [lineNumbers, setLineNumbers] = useState(["1"]);
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const lines = value.split("\n");
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
    <>
      <a 
        href="/docs?component=CodeEditor" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=CodeEditor";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div
        className={`code-editor code-editor-${language} ${className}`}
        {...props}
      >
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
    </>
  );
}
