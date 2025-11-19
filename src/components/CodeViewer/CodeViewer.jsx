/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## CodeViewer
 */

import React, { useState } from "react";
import { HiClipboard, HiCheck } from "react-icons/hi2";
import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs";
import "./CodeViewer.css";

/**
 * Code Viewer Component
 * Displays code with syntax highlighting and copy functionality
 */
export default function CodeViewer({
  isOpen,
  onClose,
  title,
  jsxCode,
  cssCode,
}) {
  const [copiedSection, setCopiedSection] = useState(null);

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  const tabs = [];

  if (jsxCode) {
    tabs.push({
      label: "JSX",
      content: (
        <div className="code-section">
          <div className="code-header">
            <h3 className="code-title">JSX Code</h3>
            <button
              className="copy-button"
              onClick={() => copyToClipboard(jsxCode, "jsx")}
              aria-label="Copy JSX code"
            >
              {copiedSection === "jsx" ? (
                <>
                  <HiCheck /> Copied!
                </>
              ) : (
                <>
                  <HiClipboard /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="code-block">
            <code>{jsxCode}</code>
          </pre>
        </div>
      ),
    });
  }

  if (cssCode) {
    tabs.push({
      label: "CSS",
      content: (
        <div className="code-section">
          <div className="code-header">
            <h3 className="code-title">CSS Code</h3>
            <button
              className="copy-button"
              onClick={() => copyToClipboard(cssCode, "css")}
              aria-label="Copy CSS code"
            >
              {copiedSection === "css" ? (
                <>
                  <HiCheck /> Copied!
                </>
              ) : (
                <>
                  <HiClipboard /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="code-block">
            <code>{cssCode}</code>
          </pre>
        </div>
      ),
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || "Component Code"}
      size="large"
    >
      <div className="code-viewer">
        <a 
          href="/docs?component=CodeViewer" 
          className="documentation-link"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/docs?component=CodeViewer";
          }}
          style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
        >
          Check Documentation
        </a>
        {tabs.length > 0 ? (
          <Tabs tabs={tabs} />
        ) : (
          <div className="no-code-message">
            No code available for this component.
          </div>
        )}
      </div>
    </Modal>
  );
}
