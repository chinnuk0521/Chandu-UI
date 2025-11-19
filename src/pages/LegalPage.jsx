import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiHome, HiMoon, HiSun } from "react-icons/hi";
import logoImage from "../assets/Logo.svg";
import "./DocsPage.css";

export default function LegalPage() {
  const { documentType } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  // Fetch markdown file
  useEffect(() => {
    const fileName = documentType === "privacy" 
      ? "PRIVACY_POLICY.md" 
      : documentType === "terms" 
      ? "TERMS_OF_SERVICE.md" 
      : documentType === "license"
      ? "LICENSE.md"
      : documentType === "maintainers"
      ? "MAINTAINERS.md"
      : null;

    if (!fileName) {
      setMarkdownContent("# Document Not Found\n\nThe requested document could not be found.");
      return;
    }

    fetch(`/${fileName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        setMarkdownContent(text);
      })
      .catch((error) => {
        console.error("Error loading document:", error);
        setMarkdownContent(`# Error\n\nError loading ${fileName}. Please ensure the file exists in the public folder.`);
      });
  }, [documentType]);

  // Simple markdown to HTML converter
  const parseMarkdown = (text) => {
    if (!text) return "";

    const lines = text.split("\n");
    const elements = [];
    let currentCodeBlock = null;
    let inList = false;
    let listItems = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith("```")) {
        if (currentCodeBlock === null) {
          currentCodeBlock = { language: line.slice(3).trim(), code: [] };
        } else {
          elements.push(
            <pre key={`code-${i}`}>
              <code>{currentCodeBlock.code.join("\n")}</code>
            </pre>
          );
          currentCodeBlock = null;
        }
        continue;
      }

      if (currentCodeBlock !== null) {
        currentCodeBlock.code.push(line);
        continue;
      }

      // Headers
      if (line.startsWith("# ")) {
        if (inList) {
          elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        elements.push(
          <h1 key={`h1-${i}`} className="legal-heading">
            {line.slice(2).trim()}
          </h1>
        );
        continue;
      }

      if (line.startsWith("## ")) {
        if (inList) {
          elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        elements.push(
          <h2 key={`h2-${i}`} className="legal-heading">
            {line.slice(3).trim()}
          </h2>
        );
        continue;
      }

      if (line.startsWith("### ")) {
        if (inList) {
          elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        elements.push(
          <h3 key={`h3-${i}`} className="legal-heading">
            {line.slice(4).trim()}
          </h3>
        );
        continue;
      }

      // Lists
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        if (!inList) {
          inList = true;
        }
        const text = line.trim().slice(2);
        listItems.push(<li key={`li-${i}`}>{parseInlineMarkdown(text)}</li>);
        continue;
      }

      // Close list if we hit a non-list line
      if (inList && line.trim() === "") {
        elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
        listItems = [];
        inList = false;
        continue;
      }

      // Paragraphs
      if (line.trim() !== "") {
        if (inList) {
          elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        // Check if this is the "Last Updated" line
        const isLastUpdated = line.includes("Last Updated");
        elements.push(
          <p key={`p-${i}`} className={isLastUpdated ? "legal-paragraph legal-last-updated" : "legal-paragraph"}>
            {parseInlineMarkdown(line)}
          </p>
        );
      } else if (inList) {
        elements.push(<ul key={`list-${i}`}>{listItems}</ul>);
        listItems = [];
        inList = false;
      }
    }

    // Close any remaining list
    if (inList && listItems.length > 0) {
      elements.push(<ul key="list-final">{listItems}</ul>);
    }

    return elements;
  };

  // Parse inline markdown (bold, italic, links)
  const parseInlineMarkdown = (text) => {
    const parts = [];
    let currentIndex = 0;

    // Links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let lastIndex = 0;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <a
          key={`link-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="legal-link"
        >
          {match[1]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Bold: **text**
    const processedParts = parts.map((part, index) => {
      if (typeof part === "string") {
        const boldRegex = /\*\*([^*]+)\*\*/g;
        const result = [];
        let partIndex = 0;
        let boldMatch;

        while ((boldMatch = boldRegex.exec(part)) !== null) {
          if (boldMatch.index > partIndex) {
            result.push(part.substring(partIndex, boldMatch.index));
          }
          result.push(
            <strong key={`bold-${index}-${boldMatch.index}`}>
              {boldMatch[1]}
            </strong>
          );
          partIndex = boldMatch.index + boldMatch[0].length;
        }

        if (partIndex < part.length) {
          result.push(part.substring(partIndex));
        }

        return result.length > 0 ? result : part;
      }
      return part;
    });

    return processedParts.length > 0 ? processedParts : text;
  };

  const documentTitle = documentType === "privacy" 
    ? "Privacy Policy" 
    : documentType === "terms" 
    ? "Terms of Service" 
    : documentType === "license"
    ? "License"
    : documentType === "maintainers"
    ? "Maintainers"
    : "Legal Document";

  return (
    <div className="docs-page legal-page">
      <div className="docs-main legal-main">
        <div className="docs-container legal-container">
          <div className="docs-content legal-docs-content">
            <div className="docs-header">
              <div className="docs-header-brand">
                <a
                  href="/"
                  className="docs-logo-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  <img
                    src={logoImage}
                    alt="Chandu UI Logo"
                    className="docs-logo-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="docs-logo-text">Chandu UI</span>
                </a>
              </div>
              <div className="docs-header-navbar">
                <div className="docs-breadcrumb">
                  <button
                    className="breadcrumb-link"
                    onClick={() => navigate("/")}
                  >
                    <HiHome /> Home
                  </button>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-current">{documentTitle}</span>
                </div>
                <button
                  className="docs-theme-toggle"
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <HiSun /> : <HiMoon />}
                </button>
              </div>
            </div>
            {markdownContent ? (
              <div className="markdown-content legal-content">
                {parseMarkdown(markdownContent)}
              </div>
            ) : (
              <div className="docs-loading">Loading document...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

