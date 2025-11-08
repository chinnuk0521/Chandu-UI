import React, { useRef } from "react";
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

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    if (onChange) {
      onChange(editorRef.current?.innerHTML || "");
    }
  };

  const handleInput = () => {
    if (onChange) {
      onChange(editorRef.current?.innerHTML || "");
    }
  };

  return (
    <div className={`rich-text-editor ${className}`} {...props}>
      <div className="rich-text-editor-toolbar">
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("bold")}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("italic")}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("underline")}
          title="Underline"
        >
          <u>U</u>
        </button>
        <div className="rich-text-editor-separator" />
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("insertUnorderedList")}
          title="Bullet List"
        >
          <span className="rich-text-editor-list-icon">•</span>
        </button>
        <button
          type="button"
          className="rich-text-editor-button"
          onClick={() => execCommand("insertOrderedList")}
          title="Numbered List"
        >
          <span className="rich-text-editor-list-icon">1.</span>
        </button>
      </div>
      <div
        ref={editorRef}
        className="rich-text-editor-content"
        contentEditable
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        data-placeholder={placeholder}
      />
    </div>
  );
}
