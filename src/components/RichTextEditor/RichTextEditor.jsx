/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## RichTextEditor
 */

import React, { useRef, useEffect, useCallback } from "react";
import "./RichTextEditor.css";

/**
 * Reusable RichTextEditor Component
 *
 * @param {string} value - Editor content
 * @param {Function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {string} className - Additional CSS classes
 */
export default function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Start typing...",
  className = "",
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
    
    const newValue = editorRef.current.innerHTML || "";
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
      const currentContent = editorRef.current.innerHTML || "";
      if (!currentContent) {
        editorRef.current.innerHTML = value;
        lastValueRef.current = value;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync value prop with contentEditable (only when value changes externally)
  useEffect(() => {
    if (!editorRef.current) return;
    
    const currentContent = editorRef.current.innerHTML || "";
    const normalizedValue = value || "";
    
    // Only update if value changed externally (not from our own input)
    if (normalizedValue !== currentContent && !isInternalUpdateRef.current) {
      const savedSel = saveSelection();
      isInternalUpdateRef.current = true;
      editorRef.current.innerHTML = normalizedValue;
      lastValueRef.current = normalizedValue;
      
      // Restore cursor position after a brief delay
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
    
    // Save selection before command
    const savedSel = saveSelection();
    
    // Execute the command
    document.execCommand(command, false, commandValue);
    
    // Restore selection and update value
    setTimeout(() => {
      if (savedSel) {
        restoreSelection(savedSel);
      }
      handleInput();
    }, 0);
  }, [saveSelection, restoreSelection, handleInput]);

  // Handle paste to clean up pasted content
  const handlePaste = useCallback((e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
    handleInput();
  }, [handleInput]);

  return (
    <>
      <a 
        href="/docs?component=RichTextEditor" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=RichTextEditor";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`rich-text-editor ${className}`} {...props}>
      <div className="rich-text-editor-toolbar">
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("bold")}
          title="Bold"
          onMouseDown={(e) => e.preventDefault()}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("italic")}
          title="Italic"
          onMouseDown={(e) => e.preventDefault()}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("underline")}
          title="Underline"
          onMouseDown={(e) => e.preventDefault()}
        >
          <u>U</u>
        </button>
        <div className="rich-text-editor-separator" />
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("insertUnorderedList")}
          title="Bullet List"
          onMouseDown={(e) => e.preventDefault()}
        >
          <span className="rich-text-editor-list-icon">•</span>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("insertOrderedList")}
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
    </>
  );
}
