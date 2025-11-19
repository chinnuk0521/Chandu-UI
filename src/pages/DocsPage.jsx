import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiChevronLeft, HiChevronRight, HiHome, HiMoon, HiSun } from "react-icons/hi";
import "./DocsPage.css";

// List of all 69 components
const COMPONENT_LIST = [
  "Header",
  "Hero",
  "Footer",
  "Features",
  "About",
  "Services",
  "Autocomplete",
  "GlobalSearch",
  "Input",
  "Button",
  "Card",
  "Modal",
  "Badge",
  "Avatar",
  "Spinner",
  "Tabs",
  "CodeViewer",
  "Dropdown",
  "Checkbox",
  "Radio",
  "Switch",
  "Textarea",
  "Progress",
  "Alert",
  "Tooltip",
  "Divider",
  "Skeleton",
  "Chip",
  "Breadcrumb",
  "Pagination",
  "Accordion",
  "Drawer",
  "Popover",
  "Stepper",
  "Rating",
  "Slider",
  "Menu",
  "Toast",
  "ToastContainer",
  "Table",
  "Timeline",
  "Carousel",
  "FileUpload",
  "Calendar",
  "Notification",
  "Backdrop",
  "Snackbar",
  "List",
  "Tag",
  "SearchBar",
  "Navbar",
  "Sidebar",
  "ImageGallery",
  "VideoPlayer",
  "AudioPlayer",
  "Chart",
  "DataTable",
  "Form",
  "Select",
  "DateRangePicker",
  "TimePicker",
  "ColorPicker",
  "RichTextEditor",
  "CodeEditor",
  "TreeView",
  "DragDrop",
  "Wizard",
  "Tour",
  "Chat",
];

export default function DocsPage() {
  console.log("🔵 [DocsPage] Component rendered");
  
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const componentName = searchParams.get("component");
  const contentRef = useRef(null);
  const [markdownContent, setMarkdownContent] = useState("");
  const [activeComponent, setActiveComponent] = useState(componentName || COMPONENT_LIST[0] || "");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isManualNavigationRef = useRef(false);
  const lastManualNavigationRef = useRef(null);
  
  // Dark mode state
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

  console.log("🔵 [DocsPage] State:", {
    componentName,
    activeComponent,
    sidebarOpen,
    markdownContentLength: markdownContent.length,
    hasContentRef: !!contentRef.current
  });

  // Get current component index and navigation info
  const getCurrentIndex = () => {
    const index = COMPONENT_LIST.indexOf(activeComponent);
    console.log("🟢 [getCurrentIndex]", { activeComponent, index });
    return index;
  };

  const getPreviousComponent = () => {
    const currentIndex = getCurrentIndex();
    const prev = currentIndex > 0 ? COMPONENT_LIST[currentIndex - 1] : null;
    console.log("🟢 [getPreviousComponent]", { currentIndex, prev });
    return prev;
  };

  const getNextComponent = () => {
    const currentIndex = getCurrentIndex();
    const next = currentIndex < COMPONENT_LIST.length - 1 ? COMPONENT_LIST[currentIndex + 1] : null;
    console.log("🟢 [getNextComponent]", { currentIndex, next });
    return next;
  };

  const getComponentNumber = () => {
    const currentIndex = getCurrentIndex();
    const number = currentIndex >= 0 ? currentIndex + 1 : 0;
    console.log("🟢 [getComponentNumber]", { currentIndex, number });
    return number;
  };

  // Set default component in URL if none is specified
  useEffect(() => {
    if (!componentName && COMPONENT_LIST.length > 0) {
      setSearchParams({ component: COMPONENT_LIST[0] });
      setActiveComponent(COMPONENT_LIST[0]);
    }
  }, [componentName, setSearchParams]);

  useEffect(() => {
    console.log("🟡 [useEffect] Fetching markdown file...");
    // Fetch the markdown file from public folder
    fetch("/COMPONENT_DOCUMENTATION.md")
      .then((response) => {
        console.log("🟡 [fetch] Response status:", response.status, response.ok);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log("🟡 [fetch] Markdown loaded, length:", text.length);
        console.log("🟡 [fetch] First 200 chars:", text.substring(0, 200));
        setMarkdownContent(text);
      })
      .catch((error) => {
        console.error("🔴 [fetch] Error loading documentation:", error);
        setMarkdownContent("# Documentation\n\nError loading documentation file. Please ensure COMPONENT_DOCUMENTATION.md exists in the public folder.");
      });
  }, []);

  // Scroll to component section when component name changes (from URL)
  useEffect(() => {
    console.log("🟡 [useEffect] URL component change check:", {
      componentName,
      hasMarkdown: !!markdownContent,
      markdownLength: markdownContent.length,
      activeComponent,
      shouldScroll: componentName && markdownContent && componentName !== activeComponent
    });
    
    if (componentName && markdownContent && componentName !== activeComponent) {
      console.log("🟡 [useEffect] Attempting to scroll to component:", componentName);
      
      // Set manual navigation flag for URL-based navigation
      isManualNavigationRef.current = true;
      lastManualNavigationRef.current = Date.now();
      
      // Update active component immediately
      setActiveComponent(componentName);
      
      // Wait a bit for content to render
      setTimeout(() => {
        const headers = Array.from(document.querySelectorAll("h2.component-heading, h2"));
        console.log("🟡 [useEffect] Found headers:", headers.length);
        console.log("🟡 [useEffect] Header texts:", headers.map(h => h.textContent.trim()));
        
        const targetElement = headers.find(
          (h2) => h2.textContent.trim() === componentName
        );
        
        console.log("🟡 [useEffect] Target element found:", !!targetElement);
        
        if (targetElement) {
          console.log("🟡 [useEffect] Scrolling to component:", componentName);
          // Calculate offset for fixed sidebar
          const offset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          console.log("🟡 [useEffect] Scroll positions:", {
            elementPosition,
            pageYOffset: window.pageYOffset,
            offsetPosition
          });

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Highlight the section briefly
          const originalBg = targetElement.style.backgroundColor;
          targetElement.style.backgroundColor = "rgba(59, 130, 246, 0.2)";
          targetElement.style.transition = "background-color 0.3s";
          setTimeout(() => {
            targetElement.style.backgroundColor = originalBg || "";
          }, 2000);
          
          // Clear manual navigation flag after scroll completes
          setTimeout(() => {
            isManualNavigationRef.current = false;
            console.log("🟡 [useEffect] Manual navigation flag cleared");
          }, 1500);
        } else {
          console.warn("🔴 [useEffect] Target element not found for component:", componentName);
          // Clear flag even if element not found
          isManualNavigationRef.current = false;
        }
      }, 300);
    }
  }, [componentName, markdownContent, activeComponent]);

  // Scroll handler disabled - sidebar stays fixed on current component
  // Only manual navigation (sidebar click, next/prev buttons, URL) will change activeComponent
  // This matches the Components page behavior where one component is shown at a time

  const scrollToComponent = React.useCallback((component, updateUrl = false) => {
    console.log("🟠 [scrollToComponent] Called with:", { component, updateUrl });
    
    if (!component) {
      console.warn("🔴 [scrollToComponent] No component provided");
      return;
    }
    
    // Set manual navigation flag to prevent scroll handler from interfering
    isManualNavigationRef.current = true;
    lastManualNavigationRef.current = Date.now();
    
    console.log("🟠 [scrollToComponent] Updating state and URL");
    // Update state first
    setActiveComponent(component);
    setSidebarOpen(false); // Close sidebar on mobile after click
    
    // Always update URL to keep everything in sync
    if (updateUrl) {
      console.log("🟠 [scrollToComponent] Updating URL params");
      setSearchParams({ component });
    }
    
    // Wait for DOM to update, then scroll - use requestAnimationFrame for better timing
    let attempts = 0;
    const maxAttempts = 10;
    
    const scrollToElement = () => {
      attempts++;
      console.log(`🟠 [scrollToElement] Attempt ${attempts}/${maxAttempts} for component:`, component);
      
      const headers = Array.from(document.querySelectorAll("h2.component-heading, h2"));
      console.log("🟠 [scrollToElement] Found headers:", headers.length);
      console.log("🟠 [scrollToElement] Header texts:", headers.map(h => h.textContent.trim()));
      
      const targetElement = headers.find(
        (h2) => h2.textContent.trim() === component
      );
      
      if (targetElement) {
        console.log("🟠 [scrollToElement] Target element found! Scrolling...");
        // Calculate offset for fixed sidebar
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        console.log("🟠 [scrollToElement] Scroll positions:", {
          elementPosition,
          pageYOffset: window.pageYOffset,
          offsetPosition,
          offset
        });

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Highlight the section briefly
        const originalBg = targetElement.style.backgroundColor;
        targetElement.style.backgroundColor = "rgba(59, 130, 246, 0.15)";
        targetElement.style.transition = "background-color 0.3s";
        setTimeout(() => {
          targetElement.style.backgroundColor = originalBg || "";
        }, 2000);
        
        // Clear manual navigation flag after scroll completes (with delay)
        setTimeout(() => {
          isManualNavigationRef.current = false;
          console.log("🟠 [scrollToComponent] Manual navigation flag cleared");
        }, 1500);
      } else if (attempts < maxAttempts) {
        console.warn(`🟠 [scrollToElement] Element not found, retrying... (${attempts}/${maxAttempts})`);
        // If element not found, try again after a short delay
        setTimeout(scrollToElement, 100);
      } else {
        console.error("🔴 [scrollToElement] Max attempts reached, element not found for:", component);
      }
    };
    
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setTimeout(scrollToElement, 100);
    });
  }, [setSearchParams]);

  const navigateToComponent = React.useCallback((component, direction) => {
    console.log("🔴 [navigateToComponent] Called with:", { component, direction, type: typeof component });
    
    if (component && typeof component === 'string') {
      const isInList = COMPONENT_LIST.includes(component);
      console.log("🔴 [navigateToComponent] Component in list:", isInList, "List:", COMPONENT_LIST);
      
      // Ensure component exists in the list
      if (isInList) {
        console.log("🔴 [navigateToComponent] Calling scrollToComponent");
        scrollToComponent(component, true);
      } else {
        console.warn("🔴 [navigateToComponent] Component not in list:", component);
      }
    } else {
      console.warn("🔴 [navigateToComponent] Invalid component:", component);
    }
  }, [scrollToComponent]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle if not typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      console.log("⚪ [handleKeyDown] Key pressed:", e.key, "Active component:", activeComponent);

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = COMPONENT_LIST.indexOf(activeComponent);
        console.log("⚪ [handleKeyDown] Previous navigation, currentIndex:", currentIndex);
        if (currentIndex > 0) {
          const prev = COMPONENT_LIST[currentIndex - 1];
          console.log("⚪ [handleKeyDown] Navigating to previous:", prev);
          scrollToComponent(prev, true);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = COMPONENT_LIST.indexOf(activeComponent);
        console.log("⚪ [handleKeyDown] Next navigation, currentIndex:", currentIndex);
        if (currentIndex < COMPONENT_LIST.length - 1) {
          const next = COMPONENT_LIST[currentIndex + 1];
          console.log("⚪ [handleKeyDown] Navigating to next:", next);
          scrollToComponent(next, true);
        }
      }
    };

    if (activeComponent) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [activeComponent, scrollToComponent]);

  // Simple markdown to HTML converter for basic formatting
  // Only shows the active component's documentation
  const parseMarkdown = React.useCallback((text) => {
    console.log("🟤 [parseMarkdown] Starting parse, text length:", text?.length, "Active component:", activeComponent);
    
    if (!text) {
      console.warn("🟤 [parseMarkdown] No text provided");
      return "";
    }
    
    // If no active component, show message
    if (!activeComponent) {
      return (
        <div className="docs-no-component-selected">
          <p>Please select a component from the sidebar to view its documentation.</p>
        </div>
      );
    }
    
    // Split by lines
    const lines = text.split("\n");
    console.log("🟤 [parseMarkdown] Total lines:", lines.length);
    const elements = [];
    let currentCodeBlock = null;
    let currentList = null;
    let componentCount = 0;
    let isInActiveComponent = false;
    let foundActiveComponent = false;
    let shouldStop = false;
    
    for (let index = 0; index < lines.length && !shouldStop; index++) {
      const line = lines[index];
      
      // Headers - Component sections (check this FIRST before processing any content)
      if (line.startsWith("## ")) {
        // Close any open lists or code blocks before processing header
        if (currentList) {
          if (isInActiveComponent) {
            elements.push(currentList);
          }
          currentList = null;
        }
        if (currentCodeBlock !== null) {
          // If we're in active component, add the code block
          if (isInActiveComponent) {
            elements.push(
              <pre key={`code-${index}`}>
                <code>{currentCodeBlock.code.join("\n")}</code>
              </pre>
            );
          }
          currentCodeBlock = null;
        }
        
        const text = line.slice(3).trim();
        const componentIndex = COMPONENT_LIST.indexOf(text);
        
        // Check if this is the active component
        if (text === activeComponent) {
          isInActiveComponent = true;
          foundActiveComponent = true;
          componentCount++;
          const componentNumber = componentIndex >= 0 ? componentIndex + 1 : 0;
          
          console.log("🟤 [parseMarkdown] Found active component header:", {
            text,
            componentIndex,
            componentNumber
          });
          
          elements.push(
            <div key={`component-wrapper-${index}`} className="component-section-wrapper">
              <h2 key={`h2-${index}`} id={text.toLowerCase().replace(/\s+/g, "-")} className="component-heading">
                {text}
              </h2>
            </div>
          );
        } else {
          // If we were in the active component and hit a new component, stop parsing
          if (isInActiveComponent) {
            console.log("🟤 [parseMarkdown] Reached next component, stopping parse");
            shouldStop = true; // Exit early - we've finished the active component
            continue;
          }
          // Otherwise, we haven't reached the active component yet, keep looking
          isInActiveComponent = false;
          // Reset code blocks and lists when we're not in active component
          currentCodeBlock = null;
          currentList = null;
        }
        continue;
      }
      
      // Only parse content if we're in the active component section
      if (!isInActiveComponent) {
        // Skip all content before we reach the active component
        continue;
      }
      
      // Code blocks - only process if we're in active component
      if (line.startsWith("```")) {
        if (currentCodeBlock === null) {
          currentCodeBlock = { language: line.slice(3), code: [] };
        } else {
          elements.push(
            <pre key={`code-${index}`}>
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
      
      if (line.startsWith("### ")) {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
        }
        const text = line.slice(4);
        elements.push(<h3 key={`h3-${index}`}>{text}</h3>);
        continue;
      }
      
      // Lists
      if (line.trim().startsWith("- ")) {
        if (!currentList) {
          currentList = <ul key={`ul-${index}`} style={{ marginLeft: "2rem" }}></ul>;
        }
        const text = line.trim().slice(2);
        const listItem = <li key={`li-${index}`}>{text}</li>;
        if (React.isValidElement(currentList)) {
          currentList = React.cloneElement(currentList, {
            children: [...(currentList.props.children || []), listItem]
          });
        }
        continue;
      }
      
      // Regular paragraphs
      if (line.trim()) {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
        }
        // Handle inline code
        const parts = line.split(/(`[^`]+`)/);
        const formattedLine = parts.map((part, partIndex) => {
          if (part.startsWith("`") && part.endsWith("`")) {
            return <code key={`code-${index}-${partIndex}`} style={{ background: "#f3f4f6", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" }}>{part.slice(1, -1)}</code>;
          }
          return part;
        });
        elements.push(<p key={`p-${index}`}>{formattedLine}</p>);
      } else if (currentList) {
        elements.push(currentList);
        currentList = null;
      }
    }
    
    // Close any remaining open lists or code blocks (only if we're in active component)
    if (isInActiveComponent) {
      if (currentList) {
        elements.push(currentList);
      }
      if (currentCodeBlock !== null) {
        elements.push(
          <pre key={`code-final`}>
            <code>{currentCodeBlock.code.join("\n")}</code>
          </pre>
        );
      }
    }
    
    // If we didn't find the active component, show a message
    if (!foundActiveComponent) {
      console.warn("🟤 [parseMarkdown] Active component not found in markdown:", activeComponent);
      return (
        <div className="docs-no-component-selected">
          <p>Documentation for "{activeComponent}" not found.</p>
        </div>
      );
    }
    
    console.log("🟤 [parseMarkdown] Parse complete, total elements:", elements.length, "Active component:", activeComponent);
    return elements;
  }, [navigateToComponent, activeComponent]);

  return (
    <div className="docs-page">
      {/* Mobile Menu Toggle */}
      <button
        className="docs-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="docs-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`docs-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="docs-sidebar-header">
          <div className="docs-sidebar-header-content">
            <img src="/Logo.svg" alt="Logo" className="docs-sidebar-logo" />
            <h2>Components</h2>
          </div>
          <button
            className="docs-sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <HiX />
          </button>
        </div>
        <nav className="docs-sidebar-nav">
          <ul>
            {COMPONENT_LIST.map((component) => (
              <li key={component}>
                <button
                  className={`docs-sidebar-link ${
                    activeComponent === component ? "active" : ""
                  }`}
                  onClick={() => {
                    console.log("🟡 [Button Click] Sidebar component clicked:", component);
                    scrollToComponent(component, true); // Update URL when sidebar is clicked
                  }}
                >
                  {component}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="docs-main">
        <div className="docs-container">
          <div className="docs-content" ref={contentRef}>
            <div className="docs-header">
              <div className="docs-header-navbar">
                <div className="docs-breadcrumb">
                  <button
                    className="breadcrumb-link"
                    onClick={() => navigate("/")}
                  >
                    <HiHome /> Home
                  </button>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-current">Documentation</span>
                  {activeComponent && (
                    <>
                      <span className="breadcrumb-separator">/</span>
                      <span className="breadcrumb-current">{activeComponent}</span>
                    </>
                  )}
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
              <div className="markdown-content">
                {parseMarkdown(markdownContent)}
              </div>
            ) : (
              <div className="docs-loading">Loading documentation...</div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation Bar */}
      {activeComponent && (
        <div className="docs-bottom-nav">
          <div className="docs-bottom-nav-container">
            <div className="docs-bottom-nav-content">
              {getPreviousComponent() ? (
                <button
                  className="bottom-nav-button bottom-nav-button-prev"
                  onClick={(e) => {
                    console.log("🟡 [Button Click] Previous (bottom nav) clicked");
                    e.preventDefault();
                    e.stopPropagation();
                    const prev = getPreviousComponent();
                    console.log("🟡 [Button Click] Previous component:", prev);
                    if (prev) navigateToComponent(prev, 'prev');
                  }}
                >
                  <HiChevronLeft />
                  <div className="bottom-nav-button-content">
                    <span className="bottom-nav-button-label">Previous</span>
                    <span className="bottom-nav-button-name">{getPreviousComponent()}</span>
                  </div>
                </button>
              ) : (
                <div className="bottom-nav-button-spacer"></div>
              )}
              
              <div className="bottom-nav-counter">
                {getComponentNumber()} of {COMPONENT_LIST.length}
              </div>
              
              {getNextComponent() ? (
                <button
                  className="bottom-nav-button bottom-nav-button-next"
                  onClick={(e) => {
                    console.log("🟡 [Button Click] Next (bottom nav) clicked");
                    e.preventDefault();
                    e.stopPropagation();
                    const next = getNextComponent();
                    console.log("🟡 [Button Click] Next component:", next);
                    if (next) navigateToComponent(next, 'next');
                  }}
                >
                  <div className="bottom-nav-button-content">
                    <span className="bottom-nav-button-label">Next</span>
                    <span className="bottom-nav-button-name">{getNextComponent()}</span>
                  </div>
                  <HiChevronRight />
                </button>
              ) : (
                <div className="bottom-nav-button-spacer"></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

