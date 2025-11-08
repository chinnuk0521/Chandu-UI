import React, { useState, useEffect } from "react";
import {
  Header,
  Hero,
  Features,
  About,
  Services,
  Footer,
  Autocomplete,
  GlobalSearch,
  Button,
  Card,
  Input,
  Modal,
  Badge,
  Avatar,
  Spinner,
  Tabs,
  CodeViewer,
  Dropdown,
  Checkbox,
  Radio,
  Switch,
  Textarea,
  Progress,
  Alert,
  Tooltip,
  Divider,
  Skeleton,
  Chip,
  Breadcrumb,
  Pagination,
  Accordion,
  Drawer,
  Popover,
  Stepper,
  Rating,
  Slider,
  Menu,
  Toast,
  ToastContainer,
  Table,
  Timeline,
  Carousel,
  FileUpload,
  Calendar,
  Notification,
  Backdrop,
  Snackbar,
  List,
  Tag,
  SearchBar,
  Navbar,
  Sidebar,
  ImageGallery,
  VideoPlayer,
  AudioPlayer,
  Chart,
  DataTable,
  Form,
  Select,
  DateRangePicker,
  TimePicker,
  ColorPicker,
  RichTextEditor,
  CodeEditor,
  TreeView,
  DragDrop,
  Wizard,
  Tour,
  Chat,
} from "./index";
import { FRUITS, COUNTRIES, TECHNOLOGIES } from "./examples/demo-data";
import { COMPONENT_CODES } from "./examples/component-codes";
import "./App.css";

function App() {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [badgeCount, setBadgeCount] = useState(5);
  const [codeViewerOpen, setCodeViewerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [darkModeChecked, setDarkModeChecked] = useState(() => {
    // Load dark mode preference from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });
  const [textareaValue, setTextareaValue] = useState("");
  const [progressValue, setProgressValue] = useState(45);
  const [chips, setChips] = useState(["React", "Vue", "Angular"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [toasts, setToasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#00338d");
  const [timeValue, setTimeValue] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [richTextValue, setRichTextValue] = useState("");
  const [codeValue, setCodeValue] = useState("// Start coding...");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "other",
      name: "John",
      text: "Hello! How can I help you?",
      timestamp: "10:30 AM",
    },
    {
      sender: "user",
      text: "Hi! I need help with the components.",
      timestamp: "10:31 AM",
    },
  ]);
  const [dragItems, setDragItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [wizardStep, setWizardStep] = useState(0);
  const [tourOpen, setTourOpen] = useState(false);

  const handleButtonClick = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  const handleViewCode = (componentName) => {
    setSelectedComponent(componentName);
    setCodeViewerOpen(true);
  };

  // Apply dark mode class to body and html, and persist to localStorage
  useEffect(() => {
    if (darkModeChecked) {
      document.body.classList.add("dark-mode");
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkModeChecked]);

  return (
    <div className={`app ${darkModeChecked ? "dark-mode" : ""}`}>
      <Header logo="Chandu UI" />

      <Hero
        title="Build Modern UIs Faster"
        subtitle="Professional React Component Library"
        description="Production-ready components designed for tech companies and startups. Ship faster with beautiful, accessible, and customizable React components."
        buttons={[
          {
            label: "Get Started",
            onClick: () => {
              const element = document.querySelector("#components");
              element?.scrollIntoView({ behavior: "smooth" });
            },
            variant: "primary",
          },
          {
            label: "View Documentation",
            onClick: () => {
              window.open("https://github.com/chandu/components", "_blank");
            },
            variant: "secondary",
          },
        ]}
      />

      <section id="components" className="components-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h2 className="showcase-title">Component Library</h2>
            <p className="showcase-subtitle">71+ Production-Ready Components</p>
            <p className="showcase-description">
              Carefully crafted components for modern web applications. Built
              with accessibility, performance, and developer experience in mind.
            </p>
          </div>

          <div className="components-grid">
            {/* Button Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Button</h3>
                <p className="component-demo-story">
                  Every great application starts with a button. Our Button
                  component is the foundation of user interaction, designed to
                  be flexible, accessible, and beautiful. Whether you need a
                  primary action, secondary option, or a subtle text button,
                  we've got you covered.
                </p>
                <ul className="component-demo-features">
                  <li>
                    Multiple variants: primary, secondary, outline, and text
                  </li>
                  <li>Three sizes: small, medium, and large</li>
                  <li>Loading states and disabled states</li>
                  <li>Fully accessible with ARIA attributes</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Button")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="button-group">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="text">Text</Button>
                  </div>
                  <div className="button-group">
                    <Button variant="primary" size="small">
                      Small
                    </Button>
                    <Button variant="primary" size="medium">
                      Medium
                    </Button>
                    <Button variant="primary" size="large">
                      Large
                    </Button>
                  </div>
                  <div className="button-group">
                    <Button
                      variant="primary"
                      loading={buttonLoading}
                      onClick={handleButtonClick}
                    >
                      {buttonLoading ? "Loading..." : "Click Me"}
                    </Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Card</h3>
                <p className="component-demo-story">
                  Cards are the building blocks of modern web design. They help
                  organize content, create visual hierarchy, and make
                  information digestible. Our Card component is perfect for
                  product showcases, feature highlights, pricing tables, and
                  dashboard widgets.
                </p>
                <ul className="component-demo-features">
                  <li>Support for images, titles, subtitles, and footers</li>
                  <li>Clickable cards with hover effects</li>
                  <li>Flexible content structure</li>
                  <li>Perfect for dashboards and product displays</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Card")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="card-grid">
                    <Card
                      title="Product Card"
                      subtitle="Premium Plan"
                      image={<div className="demo-image"></div>}
                      footer={
                        <Button variant="primary" size="small">
                          Get Started
                        </Button>
                      }
                    >
                      Perfect for showcasing products, features, or pricing
                      tiers in your application.
                    </Card>
                    <Card
                      title="Interactive Card"
                      onClick={() => alert("Card clicked!")}
                    >
                      Click this card to see the interaction. Great for
                      dashboards and data visualization.
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Input</h3>
                <p className="component-demo-story">
                  Forms are the bridge between your users and your application.
                  Our Input component makes form building a breeze with built-in
                  validation, error handling, and helper text. Create beautiful,
                  accessible forms that guide users through their journey.
                </p>
                <ul className="component-demo-features">
                  <li>Built-in validation and error states</li>
                  <li>Helper text for user guidance</li>
                  <li>Required field indicators</li>
                  <li>Disabled states for better UX</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Input")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="input-group">
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (
                          e.target.value.length < 3 &&
                          e.target.value.length > 0
                        ) {
                          setInputError("Name must be at least 3 characters");
                        } else {
                          setInputError("");
                        }
                      }}
                      required
                      error={inputError}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      helperText="We'll never share your email with anyone"
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter password"
                      helperText="Must be at least 8 characters"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Autocomplete Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Autocomplete</h3>
                <p className="component-demo-story">
                  <strong>Multi-select autocomplete for form inputs.</strong>{" "}
                  Select multiple items from a searchable list with tag display.
                  Perfect for selecting categories, tags, or multiple options in
                  forms. Users can add custom values not in the list.
                  <strong>Use when:</strong> You need to select multiple items
                  from a list (e.g., tags, categories, multi-select dropdowns).
                </p>
                <ul className="component-demo-features">
                  <li>Multi-select with tag chips</li>
                  <li>Custom input values allowed</li>
                  <li>Real-time search filtering</li>
                  <li>Keyboard navigation support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Autocomplete")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Autocomplete
                    options={FRUITS}
                    value={selectedFruits}
                    onChange={setSelectedFruits}
                    placeholder="Search and select items..."
                  />
                  {selectedFruits.length > 0 && (
                    <div className="selected-display">
                      <strong>Selected:</strong> {selectedFruits.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* GlobalSearch Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Global Search</h3>
                <p className="component-demo-story">
                  <strong>
                    Single-select search for finding and selecting one item.
                  </strong>{" "}
                  Search across large datasets and select a single result.
                  Perfect for command palettes, quick actions, and finding
                  specific items. Returns one selected item.
                  <strong>Use when:</strong> You need to search and select ONE
                  item from a large dataset (e.g., command palette, quick
                  search).
                </p>
                <ul className="component-demo-features">
                  <li>Single-item selection</li>
                  <li>Custom search functions</li>
                  <li>Result limit control</li>
                  <li>Keyboard navigation</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("GlobalSearch")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <GlobalSearch
                    items={[
                      ...FRUITS,
                      ...COUNTRIES.map((c) => c.name),
                      ...TECHNOLOGIES.map((t) => t.label),
                    ]}
                    onSelect={(item) => {
                      setSearchResult(item);
                    }}
                    placeholder="Search across all items..."
                    maxResults={8}
                  />
                  {searchResult && (
                    <div className="selected-display">
                      <strong>Last Selected:</strong> {searchResult}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Badge Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Badge</h3>
                <p className="component-demo-story">
                  <strong>
                    Non-removable badges for status indicators and counts.
                  </strong>{" "}
                  Small indicators that communicate status, count notifications,
                  and highlight important information. Cannot be removed - used
                  for status display only.
                  <strong>Use when:</strong> You need non-removable indicators
                  (e.g., notification counts, status badges, feature labels).
                </p>
                <ul className="component-demo-features">
                  <li>Non-removable badges</li>
                  <li>Status indicators</li>
                  <li>Notification counts</li>
                  <li>Five color variants</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Badge")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="badge-group">
                    <Badge variant="primary">New</Badge>
                    <Badge variant="secondary">Beta</Badge>
                    <Badge variant="success">Active</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="error">Error</Badge>
                  </div>
                  <div className="badge-group">
                    <Badge variant="primary" size="small">
                      Small
                    </Badge>
                    <Badge variant="primary" size="medium">
                      Medium
                    </Badge>
                    <Badge variant="primary" size="large">
                      Large
                    </Badge>
                  </div>
                  <div className="badge-group">
                    <Badge variant="primary">{badgeCount} Notifications</Badge>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => setBadgeCount(badgeCount + 1)}
                    >
                      Add Badge
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Avatar</h3>
                <p className="component-demo-story">
                  Personalize your application with user avatars. Our Avatar
                  component automatically generates initials from names,
                  supports images, and comes in multiple sizes. Perfect for user
                  profiles, comments, team displays, and anywhere you need to
                  show who's who.
                </p>
                <ul className="component-demo-features">
                  <li>Automatic initials generation</li>
                  <li>Image support with fallback</li>
                  <li>Three sizes: small, medium, large</li>
                  <li>Consistent styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Avatar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="avatar-group">
                    <div className="avatar-item">
                      <Avatar name="Chandu Kalluru" size="small" />
                      <span>Small</span>
                    </div>
                    <div className="avatar-item">
                      <Avatar name="Chandu Kalluru" size="medium" />
                      <span>Medium</span>
                    </div>
                    <div className="avatar-item">
                      <Avatar name="Chandu Kalluru" size="large" />
                      <span>Large</span>
                    </div>
                    <div className="avatar-item">
                      <Avatar name="John Doe" />
                      <span>John Doe</span>
                    </div>
                    <div className="avatar-item">
                      <Avatar name="Jane Smith" />
                      <span>Jane Smith</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spinner Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Spinner</h3>
                <p className="component-demo-story">
                  Loading states are inevitable in modern applications. Our
                  Spinner component provides smooth, professional loading
                  indicators that keep users informed during async operations.
                  Simple, elegant, and always appropriate.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth rotation animation</li>
                  <li>Three sizes available</li>
                  <li>Accessible with ARIA labels</li>
                  <li>Lightweight and performant</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Spinner")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div className="spinner-group">
                    <div className="spinner-item">
                      <Spinner size="small" />
                      <span>Small</span>
                    </div>
                    <div className="spinner-item">
                      <Spinner size="medium" />
                      <span>Medium</span>
                    </div>
                    <div className="spinner-item">
                      <Spinner size="large" />
                      <span>Large</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Modal</h3>
                <p className="component-demo-story">
                  <strong>
                    Centered dialog overlay for important actions.
                  </strong>{" "}
                  Focused dialogs that appear in the center of the screen for
                  confirmations, forms, and critical information. Blocks
                  background interaction with backdrop. Perfect for important
                  actions.
                  <strong>Use when:</strong> You need a centered dialog for
                  important actions (e.g., confirmations, forms, critical
                  information).
                </p>
                <ul className="component-demo-features">
                  <li>Centered dialog overlay</li>
                  <li>Backdrop blocking</li>
                  <li>Header, body, and footer</li>
                  <li>Focus trapping</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Modal")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual component-demo-visual-modal">
                <div className="demo-interactive demo-interactive-modal">
                  <Button
                    variant="primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Open Modal
                  </Button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Confirm Action"
                    footer={
                      <>
                        <Button
                          variant="text"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => setIsModalOpen(false)}
                        >
                          Confirm
                        </Button>
                      </>
                    }
                  >
                    <p>
                      This is a modal component. Use it for confirmations,
                      forms, or important information.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      Click outside or press Escape to close.
                    </p>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Tabs Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tabs</h3>
                <p className="component-demo-story">
                  Organize complex content into manageable sections with Tabs.
                  Perfect for settings pages, dashboards, and detail views, tabs
                  help users navigate between related content without losing
                  context. Clean, intuitive, and accessible.
                </p>
                <ul className="component-demo-features">
                  <li>Dynamic tab content</li>
                  <li>Disabled tab support</li>
                  <li>Change event callbacks</li>
                  <li>Clean, professional styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Tabs")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Tabs
                    tabs={[
                      {
                        label: "Overview",
                        content: (
                          <div>
                            <p>Overview content</p>
                            <p>Display key metrics and information here.</p>
                          </div>
                        ),
                      },
                      {
                        label: "Details",
                        content: (
                          <div>
                            <p>Details content</p>
                            <p>Show detailed information in this tab.</p>
                          </div>
                        ),
                      },
                      {
                        label: "Settings",
                        content: (
                          <div>
                            <p>Settings content</p>
                            <p>Configure options and preferences here.</p>
                          </div>
                        ),
                      },
                      {
                        label: "Disabled",
                        content: <div>This tab is disabled</div>,
                        disabled: true,
                      },
                    ]}
                    onChange={(index, tab) =>
                      console.log("Tab changed:", index, tab)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Dropdown Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Dropdown</h3>
                <p className="component-demo-story">
                  When you need users to select from a list of options, our
                  Dropdown component provides a clean, intuitive interface. With
                  smooth animations, keyboard navigation, and clear visual
                  feedback, it makes selection effortless.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth open/close animations</li>
                  <li>Keyboard navigation support</li>
                  <li>Selected state highlighting</li>
                  <li>Disabled state support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Dropdown")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Dropdown
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                      { value: "option4", label: "Option 4" },
                      { value: "option5", label: "Option 5" },
                    ]}
                    value={dropdownValue}
                    onChange={setDropdownValue}
                    placeholder="Select an option..."
                  />
                </div>
              </div>
            </div>

            {/* Checkbox Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Checkbox</h3>
                <p className="component-demo-story">
                  Checkboxes are essential for multi-select scenarios, consent
                  forms, and preference settings. Our Checkbox component
                  provides clear visual feedback and maintains consistency with
                  the rest of your design system.
                </p>
                <ul className="component-demo-features">
                  <li>Custom styled checkboxes</li>
                  <li>Label support for better UX</li>
                  <li>Disabled state handling</li>
                  <li>Accessible by default</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Checkbox")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Checkbox
                      label="Accept terms and conditions"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />
                    <Checkbox
                      label="Subscribe to newsletter"
                      checked={newsletterChecked}
                      onChange={(e) => setNewsletterChecked(e.target.checked)}
                    />
                    <Checkbox label="Disabled checkbox" disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Radio Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Radio</h3>
                <p className="component-demo-story">
                  When users need to choose one option from multiple choices,
                  Radio buttons are the perfect solution. They provide clear
                  visual feedback and ensure only one selection at a time,
                  making them ideal for surveys, settings, and preference
                  selection.
                </p>
                <ul className="component-demo-features">
                  <li>Group-based single selection</li>
                  <li>Clear visual indicators</li>
                  <li>Keyboard accessible</li>
                  <li>Perfect for forms and surveys</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Radio")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Radio
                      name="radio-group"
                      label="Option 1"
                      value="option1"
                      checked={radioValue === "option1"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      name="radio-group"
                      label="Option 2"
                      value="option2"
                      checked={radioValue === "option2"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      name="radio-group"
                      label="Option 3"
                      value="option3"
                      checked={radioValue === "option3"}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Switch Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Switch</h3>
                <p className="component-demo-story">
                  Toggle switches are perfect for on/off settings, feature
                  toggles, and preference controls. They provide immediate
                  visual feedback and are more intuitive than checkboxes for
                  binary choices. Our Switch component is smooth, accessible,
                  and beautiful.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth toggle animation</li>
                  <li>Clear on/off states</li>
                  <li>Label support</li>
                  <li>Disabled state handling</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Switch")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Switch
                      label="Enable notifications"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    />
                    <Switch
                      label="Dark mode"
                      checked={darkModeChecked}
                      onChange={(e) => setDarkModeChecked(e.target.checked)}
                    />
                    <Switch label="Disabled switch" disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Textarea</h3>
                <p className="component-demo-story">
                  Sometimes users need more space to express themselves. Our
                  Textarea component handles multi-line input with grace,
                  supporting validation, helper text, and error states. Perfect
                  for comments, messages, and detailed descriptions.
                </p>
                <ul className="component-demo-features">
                  <li>Resizable vertical sizing</li>
                  <li>Validation and error handling</li>
                  <li>Helper text support</li>
                  <li>Consistent with Input styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Textarea")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Textarea
                    label="Message"
                    placeholder="Enter your message..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    rows={5}
                    helperText="Maximum 500 characters"
                  />
                </div>
              </div>
            </div>

            {/* Progress Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Progress</h3>
                <p className="component-demo-story">
                  <strong>
                    Linear progress bar for showing completion percentage.
                  </strong>{" "}
                  Display progress of long-running operations with a horizontal
                  progress bar. Perfect for file uploads, form completion, and
                  data processing. Shows percentage completion.
                  <strong>Use when:</strong> You need to show progress
                  percentage (e.g., file uploads, loading states, completion
                  percentage).
                </p>
                <ul className="component-demo-features">
                  <li>Linear progress bar</li>
                  <li>Percentage display</li>
                  <li>Multiple variants</li>
                  <li>Smooth animations</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Progress")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      width: "100%",
                    }}
                  >
                    <Progress
                      value={progressValue}
                      showLabel
                      variant="primary"
                    />
                    <Progress value={75} showLabel variant="success" />
                    <Progress value={50} showLabel variant="warning" />
                    <Progress value={25} showLabel variant="error" />
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() =>
                        setProgressValue(Math.min(100, progressValue + 10))
                      }
                    >
                      Increase Progress
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Alert</h3>
                <p className="component-demo-story">
                  <strong>Inline alert messages for page content.</strong>{" "}
                  Display important messages directly in the page flow with
                  title and message. Perfect for form validation, page-level
                  warnings, and inline notifications. Stays visible until
                  dismissed.
                  <strong>Use when:</strong> You need to show messages within
                  page content (e.g., form errors, page warnings, inline
                  notifications).
                </p>
                <ul className="component-demo-features">
                  <li>Inline page placement</li>
                  <li>Title and message support</li>
                  <li>Four variants: info, success, warning, error</li>
                  <li>Optional close button</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Alert")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Alert variant="info" title="Info" onClose={() => {}}>
                      This is an informational message.
                    </Alert>
                    <Alert variant="success" title="Success">
                      Operation completed successfully!
                    </Alert>
                    <Alert variant="warning" title="Warning">
                      Please review your input before proceeding.
                    </Alert>
                    <Alert variant="error" title="Error" onClose={() => {}}>
                      An error occurred. Please try again.
                    </Alert>
                  </div>
                </div>
              </div>
            </div>

            {/* Tooltip Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tooltip</h3>
                <p className="component-demo-story">
                  Sometimes users need a little help understanding what
                  something does. Tooltips provide contextual information
                  without cluttering the interface. Hover over any element to
                  reveal helpful hints and additional context.
                </p>
                <ul className="component-demo-features">
                  <li>Four positions: top, bottom, left, right</li>
                  <li>Smooth fade-in animation</li>
                  <li>Automatic positioning</li>
                  <li>Works with any child element</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Tooltip")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                      flexWrap: "wrap",
                      padding: "2rem",
                      justifyContent: "center",
                    }}
                  >
                    <Tooltip content="This is a tooltip on top" position="top">
                      <Button variant="primary">Hover Top</Button>
                    </Tooltip>
                    <Tooltip
                      content="This is a tooltip on bottom"
                      position="bottom"
                    >
                      <Button variant="primary">Hover Bottom</Button>
                    </Tooltip>
                    <Tooltip
                      content="This is a tooltip on left"
                      position="left"
                    >
                      <Button variant="primary">Hover Left</Button>
                    </Tooltip>
                    <Tooltip
                      content="This is a tooltip on right"
                      position="right"
                    >
                      <Button variant="primary">Hover Right</Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Divider</h3>
                <p className="component-demo-story">
                  Visual separation is crucial for readability and organization.
                  Our Divider component creates clean boundaries between
                  sections, making content easier to scan and understand. Use it
                  to separate content blocks, form sections, or list items.
                </p>
                <ul className="component-demo-features">
                  <li>Horizontal and vertical orientations</li>
                  <li>Optional text label</li>
                  <li>Subtle and professional styling</li>
                  <li>Perfect for content organization</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Divider")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ padding: "1rem", width: "100%" }}>
                    <p>Content above</p>
                    <Divider />
                    <p>Content below</p>
                    <Divider text="OR" />
                    <p>More content</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skeleton Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Skeleton</h3>
                <p className="component-demo-story">
                  Loading states don't have to be boring. Our Skeleton component
                  creates engaging loading placeholders that match your content
                  structure. Users see what's coming, reducing perceived load
                  time and improving the overall experience.
                </p>
                <ul className="component-demo-features">
                  <li>
                    Multiple variants: text, circular, rectangular, rounded
                  </li>
                  <li>Smooth shimmer animation</li>
                  <li>Customizable width and height</li>
                  <li>Perfect for content placeholders</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Skeleton")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ width: "100%" }}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                    <div
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <Skeleton variant="circular" />
                      <div style={{ flex: 1 }}>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width="80%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chip Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Chip</h3>
                <p className="component-demo-story">
                  <strong>
                    Deletable chips for selected items and filters.
                  </strong>{" "}
                  Compact elements perfect for showing selected items, filters,
                  and selections. Help users understand what's selected and
                  provide quick deletion. Great for search filters and selected
                  items.
                  <strong>Use when:</strong> You need to show selected items
                  that can be deleted (e.g., selected filters, chosen items).
                </p>
                <ul className="component-demo-features">
                  <li>Deletable chips</li>
                  <li>Selected item display</li>
                  <li>Multiple color variants</li>
                  <li>Delete functionality</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Chip")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <Chip label="Default" />
                    <Chip label="Primary" variant="primary" />
                    <Chip label="Success" variant="success" />
                    <Chip label="Warning" variant="warning" />
                    <Chip label="Error" variant="error" />
                    {chips.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip}
                        onDelete={() =>
                          setChips(chips.filter((_, i) => i !== index))
                        }
                        variant="primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumb Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Breadcrumb</h3>
                <p className="component-demo-story">
                  Navigate your application with clear breadcrumb trails. Help
                  users understand their location in the hierarchy and provide
                  quick navigation back to parent pages. Essential for complex
                  applications with deep navigation structures.
                </p>
                <ul className="component-demo-features">
                  <li>Customizable separators</li>
                  <li>Active page highlighting</li>
                  <li>Accessible navigation</li>
                  <li>Perfect for complex hierarchies</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Breadcrumb")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Breadcrumb
                    items={[
                      { label: "Home", href: "#home" },
                      { label: "About", href: "#about" },
                      { label: "Services", href: "#services" },
                      { label: "Features", href: "#features" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Pagination Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Pagination</h3>
                <p className="component-demo-story">
                  Navigate through large datasets with ease. Our Pagination
                  component provides intuitive controls for moving between
                  pages, making it perfect for tables, lists, and search
                  results. Clean, accessible, and highly customizable.
                </p>
                <ul className="component-demo-features">
                  <li>First/Last page navigation</li>
                  <li>Previous/Next controls</li>
                  <li>Active page highlighting</li>
                  <li>Responsive design</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Pagination")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurrentPage}
                    showFirstLast={true}
                  />
                </div>
              </div>
            </div>

            {/* Accordion Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Accordion</h3>
                <p className="component-demo-story">
                  Organize content into collapsible sections. Perfect for FAQs,
                  settings panels, and content-heavy pages. Users can expand
                  only what they need, keeping interfaces clean and focused.
                </p>
                <ul className="component-demo-features">
                  <li>Single or multiple open sections</li>
                  <li>Smooth animations</li>
                  <li>Customizable content</li>
                  <li>Perfect for FAQs and settings</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Accordion")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Accordion
                    items={[
                      {
                        title: "What is this component library?",
                        content:
                          "A production-ready React component library with 40+ components designed for modern web applications.",
                      },
                      {
                        title: "How do I install it?",
                        content:
                          "Simply run npm install @chandu/components and import the components you need.",
                      },
                      {
                        title: "Is it free to use?",
                        content:
                          "Yes! This is an open-source library free for personal and commercial use.",
                      },
                    ]}
                    allowMultiple={false}
                  />
                </div>
              </div>
            </div>

            {/* Drawer Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Drawer</h3>
                <p className="component-demo-story">
                  <strong>
                    Slide-out panel from edges for secondary content.
                  </strong>{" "}
                  Panels that slide in from edges (left, right, top, bottom) for
                  navigation, filters, and additional content. Space-efficient
                  way to display secondary content. Perfect for mobile
                  navigation.
                  <strong>Use when:</strong> You need a slide-out panel from
                  edges (e.g., mobile navigation, filters, settings panels).
                </p>
                <ul className="component-demo-features">
                  <li>Edge slide-out panels</li>
                  <li>Multiple positions</li>
                  <li>Three sizes available</li>
                  <li>Smooth slide animations</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Drawer")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setIsDrawerOpen(true)}>
                    Open Drawer
                  </Button>
                  <Drawer
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    title="Settings"
                    position="right"
                    size="medium"
                  >
                    <p>
                      Drawer content goes here. You can add any content you
                      need.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setIsDrawerOpen(false)}
                      style={{ marginTop: "1rem" }}
                    >
                      Close
                    </Button>
                  </Drawer>
                </div>
              </div>
            </div>

            {/* Popover Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Popover</h3>
                <p className="component-demo-story">
                  <strong>Contextual popup near trigger element.</strong>{" "}
                  Lightweight popups that appear near their trigger element.
                  Perfect for additional information, actions, or content that
                  doesn't warrant a full modal. No backdrop, appears near
                  trigger.
                  <strong>Use when:</strong> You need a lightweight popup near a
                  trigger (e.g., tooltips with actions, contextual menus).
                </p>
                <ul className="component-demo-features">
                  <li>Near trigger positioning</li>
                  <li>No backdrop overlay</li>
                  <li>Click or hover triggers</li>
                  <li>Arrow indicators</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Popover")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                  >
                    <Popover
                      content="This is a popover with additional information."
                      position="top"
                      trigger="click"
                    >
                      <Button>Top Popover</Button>
                    </Popover>
                    <Popover
                      content="Hover to see this popover."
                      position="bottom"
                      trigger="hover"
                    >
                      <Button variant="secondary">Hover Popover</Button>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>

            {/* Stepper Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Stepper</h3>
                <p className="component-demo-story">
                  <strong>
                    Step indicators with connectors for process visualization.
                  </strong>{" "}
                  Visual progress indicators showing steps in a process with
                  connectors. Perfect for showing progress through steps.
                  Horizontal and vertical orientations with step numbers.
                  <strong>Use when:</strong> You need to show step-by-step
                  progress with indicators (e.g., process steps, form sections).
                </p>
                <ul className="component-demo-features">
                  <li>Step indicators</li>
                  <li>Connector lines</li>
                  <li>Horizontal and vertical</li>
                  <li>Step number display</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Stepper")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Stepper
                    steps={[
                      { label: "Account", description: "Create account" },
                      { label: "Profile", description: "Add details" },
                      { label: "Review", description: "Confirm" },
                    ]}
                    currentStep={1}
                    orientation="horizontal"
                  />
                </div>
              </div>
            </div>

            {/* Rating Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Rating</h3>
                <p className="component-demo-story">
                  Collect user feedback with star ratings. Perfect for reviews,
                  product ratings, and satisfaction surveys. Interactive and
                  visually appealing.
                </p>
                <ul className="component-demo-features">
                  <li>Interactive star ratings</li>
                  <li>Hover effects</li>
                  <li>Read-only mode</li>
                  <li>Customizable max value</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Rating")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Rating
                      value={ratingValue}
                      onChange={setRatingValue}
                      max={5}
                      size="large"
                    />
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      Current rating: {ratingValue} / 5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Slider</h3>
                <p className="component-demo-story">
                  Select values from a range with an intuitive slider. Perfect
                  for filters, volume controls, and any numeric input where a
                  visual range selection is more intuitive than typing.
                </p>
                <ul className="component-demo-features">
                  <li>Customizable min/max values</li>
                  <li>Step increments</li>
                  <li>Value display</li>
                  <li>Smooth interactions</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Slider")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Slider
                    value={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                    step={1}
                    label="Volume"
                    showValue={true}
                  />
                </div>
              </div>
            </div>

            {/* Menu Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Menu</h3>
                <p className="component-demo-story">
                  <strong>Dropdown menu for actions and options.</strong>{" "}
                  Dropdown menu that appears below a trigger element. Perfect
                  for context menus, user menus, and action lists. Different
                  from Navbar - appears as dropdown, not fixed navigation.
                  <strong>Use when:</strong> You need a dropdown menu for
                  actions (e.g., user menus, context menus, action lists).
                </p>
                <ul className="component-demo-features">
                  <li>Dropdown menu</li>
                  <li>Trigger-based display</li>
                  <li>Icon support</li>
                  <li>Divider support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Menu")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Menu
                    trigger={<Button>Open Menu</Button>}
                    position="bottom-left"
                    items={[
                      {
                        label: "Profile",
                        onClick: () => alert("Profile clicked"),
                      },
                      {
                        label: "Settings",
                        onClick: () => alert("Settings clicked"),
                      },
                      { label: "Divider", divider: true },
                      {
                        label: "Logout",
                        onClick: () => alert("Logout clicked"),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Toast Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Toast</h3>
                <p className="component-demo-story">
                  <strong>Top-positioned temporary messages with icons.</strong>{" "}
                  System-level notifications that appear at the top of the
                  screen. Perfect for system notifications, errors, and
                  important updates. Auto-dismisses with icon display.
                  <strong>Use when:</strong> You need system-level notifications
                  at the top (e.g., "Connection lost", "Update available").
                </p>
                <ul className="component-demo-features">
                  <li>Top screen position</li>
                  <li>Icon support</li>
                  <li>Auto-dismiss timer</li>
                  <li>Multiple variants</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Toast")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => {
                        const newToast = {
                          id: Date.now(),
                          message: "Operation successful!",
                          variant: "success",
                          duration: 3000,
                        };
                        setToasts([...toasts, newToast]);
                        setTimeout(() => {
                          setToasts((prev) =>
                            prev.filter((t) => t.id !== newToast.id)
                          );
                        }, 3000);
                      }}
                    >
                      Show Success Toast
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const newToast = {
                          id: Date.now(),
                          message: "An error occurred.",
                          variant: "error",
                          duration: 3000,
                        };
                        setToasts([...toasts, newToast]);
                        setTimeout(() => {
                          setToasts((prev) =>
                            prev.filter((t) => t.id !== newToast.id)
                          );
                        }, 3000);
                      }}
                    >
                      Show Error Toast
                    </Button>
                  </div>
                  <ToastContainer
                    toasts={toasts}
                    position="top-right"
                    onRemove={(id) =>
                      setToasts((prev) => prev.filter((t) => t.id !== id))
                    }
                  />
                </div>
              </div>
            </div>

            {/* Table Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Table</h3>
                <p className="component-demo-story">
                  <strong>Basic table for simple data display.</strong> Display
                  structured data in rows and columns. Perfect for simple data
                  tables without advanced features. Clean, responsive tables
                  with basic styling options.
                  <strong>Use when:</strong> You need a simple table to display
                  data (e.g., basic data lists, simple reports).
                </p>
                <ul className="component-demo-features">
                  <li>Basic table structure</li>
                  <li>Striped and bordered variants</li>
                  <li>Responsive design</li>
                  <li>Simple data display</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Table")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Table
                    columns={[
                      { key: "name", label: "Name", sortable: true },
                      { key: "role", label: "Role", sortable: true },
                      { key: "status", label: "Status", sortable: true },
                    ]}
                    data={[
                      { name: "John Doe", role: "Developer", status: "Active" },
                      {
                        name: "Jane Smith",
                        role: "Designer",
                        status: "Active",
                      },
                      {
                        name: "Bob Johnson",
                        role: "Manager",
                        status: "Inactive",
                      },
                    ]}
                    striped
                  />
                </div>
              </div>
            </div>

            {/* Timeline Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Timeline</h3>
                <p className="component-demo-story">
                  Visualize chronological events and processes with our Timeline
                  component. Perfect for project tracking, activity feeds, and
                  process visualization. Clean, vertical timelines that tell a
                  story.
                </p>
                <ul className="component-demo-features">
                  <li>Vertical timeline layout</li>
                  <li>Custom icons and markers</li>
                  <li>Date and description support</li>
                  <li>Perfect for activity feeds</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Timeline")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Timeline
                    items={[
                      {
                        title: "Project Started",
                        description: "Initial setup completed",
                        date: "Jan 2024",
                      },
                      {
                        title: "First Milestone",
                        description: "Core features implemented",
                        date: "Feb 2024",
                      },
                      {
                        title: "Launch",
                        description: "Product released to market",
                        date: "Mar 2024",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Carousel Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Carousel</h3>
                <p className="component-demo-story">
                  Showcase images, content, or features with our Carousel
                  component. Perfect for hero sections, testimonials, and
                  product galleries. Smooth animations and intuitive navigation
                  make browsing a pleasure.
                </p>
                <ul className="component-demo-features">
                  <li>Auto-play support</li>
                  <li>Navigation arrows</li>
                  <li>Dot indicators</li>
                  <li>Smooth transitions</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Carousel")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Carousel
                    items={[
                      <div
                        key="1"
                        style={{
                          padding: "2rem",
                          background:
                            "linear-gradient(135deg, #00338d 0%, #0066cc 100%)",
                          borderRadius: "12px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <h3>Slide 1</h3>
                        <p>First carousel item</p>
                      </div>,
                      <div
                        key="2"
                        style={{
                          padding: "2rem",
                          background:
                            "linear-gradient(135deg, #0066cc 0%, #4a9eff 100%)",
                          borderRadius: "12px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <h3>Slide 2</h3>
                        <p>Second carousel item</p>
                      </div>,
                      <div
                        key="3"
                        style={{
                          padding: "2rem",
                          background:
                            "linear-gradient(135deg, #4a9eff 0%, #6bb5ff 100%)",
                          borderRadius: "12px",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <h3>Slide 3</h3>
                        <p>Third carousel item</p>
                      </div>,
                    ]}
                    showArrows
                    showIndicators
                    autoPlay={false}
                  />
                </div>
              </div>
            </div>

            {/* FileUpload Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">File Upload</h3>
                <p className="component-demo-story">
                  Make file uploads effortless with drag-and-drop support. Our
                  FileUpload component provides a modern, intuitive interface
                  for selecting and managing files. Perfect for forms,
                  dashboards, and content management.
                </p>
                <ul className="component-demo-features">
                  <li>Drag and drop support</li>
                  <li>Multiple file selection</li>
                  <li>File size validation</li>
                  <li>File list management</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("FileUpload")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <FileUpload
                    onFileSelect={(files) =>
                      console.log("Files selected:", files)
                    }
                    maxSize={10}
                    multiple
                  />
                </div>
              </div>
            </div>

            {/* Calendar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Calendar</h3>
                <p className="component-demo-story">
                  Select dates with ease using our Calendar component. Perfect
                  for booking systems, date pickers, and scheduling interfaces.
                  Clean, intuitive calendar that makes date selection simple and
                  enjoyable.
                </p>
                <ul className="component-demo-features">
                  <li>Month navigation</li>
                  <li>Date selection</li>
                  <li>Today highlighting</li>
                  <li>Min/max date constraints</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Calendar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Calendar value={selectedDate} onChange={setSelectedDate} />
                </div>
              </div>
            </div>

            {/* Notification Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Notification</h3>
                <p className="component-demo-story">
                  <strong>
                    Card-style notifications for app-level messages.
                  </strong>{" "}
                  Display structured notifications with icon, title, and message
                  in a card format. Perfect for app-wide notifications, system
                  messages, and important updates. More prominent than alerts.
                  <strong>Use when:</strong> You need card-style notifications
                  with icon, title, and message (e.g., app notifications, system
                  messages).
                </p>
                <ul className="component-demo-features">
                  <li>Card-style layout</li>
                  <li>Icon, title, and message</li>
                  <li>Four variants: success, info, warning, error</li>
                  <li>Closable option</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Notification")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Notification
                      type="success"
                      title="Success"
                      message="Operation completed successfully!"
                      showIcon
                    />
                    <Notification
                      type="info"
                      title="Info"
                      message="This is an informational message."
                      showIcon
                    />
                    <Notification
                      type="warning"
                      title="Warning"
                      message="Please review before proceeding."
                      showIcon
                    />
                    <Notification
                      type="error"
                      title="Error"
                      message="An error occurred. Please try again."
                      showIcon
                      closable
                      onClose={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Backdrop Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Backdrop</h3>
                <p className="component-demo-story">
                  Create focused overlays with our Backdrop component. Perfect
                  for modals, drawers, and dialogs that need to draw user
                  attention. Simple, elegant backdrop that enhances focus and
                  prevents background interaction.
                </p>
                <ul className="component-demo-features">
                  <li>Full-screen overlay</li>
                  <li>Smooth fade animation</li>
                  <li>Click handler support</li>
                  <li>Perfect for modals and drawers</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Backdrop")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setBackdropOpen(!backdropOpen)}>
                    {backdropOpen ? "Hide" : "Show"} Backdrop
                  </Button>
                  <Backdrop
                    open={backdropOpen}
                    onClick={() => setBackdropOpen(false)}
                  />
                </div>
              </div>
            </div>

            {/* Snackbar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Snackbar</h3>
                <p className="component-demo-story">
                  <strong>Bottom-positioned temporary messages.</strong>{" "}
                  Non-intrusive notifications that appear at the bottom of the
                  screen. Perfect for quick feedback, success messages, and
                  brief notifications. Auto-dismisses after a set duration.
                  <strong>Use when:</strong> You need quick feedback messages at
                  the bottom (e.g., "Saved successfully", "Copied to
                  clipboard").
                </p>
                <ul className="component-demo-features">
                  <li>Bottom screen position</li>
                  <li>Auto-dismiss timer</li>
                  <li>Multiple variants</li>
                  <li>Non-intrusive design</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Snackbar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setSnackbarOpen(true)}>
                    Show Snackbar
                  </Button>
                  <Snackbar
                    open={snackbarOpen}
                    message="This is a snackbar notification!"
                    variant="success"
                    duration={3000}
                    position="bottom-center"
                    onClose={() => setSnackbarOpen(false)}
                  />
                </div>
              </div>
            </div>

            {/* List Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">List</h3>
                <p className="component-demo-story">
                  <strong>
                    Vertical list for displaying items with icons and actions.
                  </strong>{" "}
                  Display structured lists with icons, actions, and rich
                  content. Perfect for navigation menus, settings panels, and
                  content lists. Different from tables - vertical list format.
                  <strong>Use when:</strong> You need a vertical list of items
                  (e.g., navigation menus, settings lists, item lists).
                </p>
                <ul className="component-demo-features">
                  <li>Vertical list format</li>
                  <li>Icon support</li>
                  <li>Primary and secondary text</li>
                  <li>Action buttons</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("List")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <List
                    items={[
                      {
                        primary: "Inbox",
                        secondary: "5 unread messages",
                        icon: "📥",
                      },
                      {
                        primary: "Sent",
                        secondary: "12 messages sent",
                        icon: "📤",
                      },
                      {
                        primary: "Drafts",
                        secondary: "3 saved drafts",
                        icon: "📝",
                      },
                    ]}
                    dividers
                  />
                </div>
              </div>
            </div>

            {/* Tag Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tag</h3>
                <p className="component-demo-story">
                  <strong>
                    Removable tags for categorizing and labeling content.
                  </strong>{" "}
                  Label and categorize content with removable tags. Perfect for
                  filters, categories, and metadata. Tags can be removed by
                  clicking the close button.
                  <strong>Use when:</strong> You need removable labels for
                  categorizing content (e.g., filters, categories, removable
                  tags).
                </p>
                <ul className="component-demo-features">
                  <li>Removable tags</li>
                  <li>Multiple color variants</li>
                  <li>Three sizes available</li>
                  <li>Close button support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Tag")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <Tag variant="default">Default</Tag>
                    <Tag variant="primary">Primary</Tag>
                    <Tag variant="success">Success</Tag>
                    <Tag variant="warning">Warning</Tag>
                    <Tag variant="error">Error</Tag>
                    <Tag variant="info">Info</Tag>
                    <Tag
                      variant="primary"
                      closable
                      onClose={() => alert("Tag closed")}
                    >
                      Closable
                    </Tag>
                  </div>
                </div>
              </div>
            </div>

            {/* SearchBar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Search Bar</h3>
                <p className="component-demo-story">
                  <strong>
                    Simple search input with suggestions (no selection).
                  </strong>{" "}
                  Basic search functionality that triggers search events without
                  selecting items. Perfect for search boxes, filters, and query
                  inputs. Only provides search suggestions, doesn't select.
                  <strong>Use when:</strong> You need a simple search input that
                  triggers search events (e.g., search boxes, filters).
                </p>
                <ul className="component-demo-features">
                  <li>Search event triggers</li>
                  <li>Suggestions display</li>
                  <li>No item selection</li>
                  <li>Simple search input</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("SearchBar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <SearchBar
                    suggestions={[
                      "React",
                      "Vue",
                      "Angular",
                      "Svelte",
                      "Next.js",
                      "Nuxt.js",
                    ]}
                    onSearch={(query) => console.log("Search:", query)}
                    onSelect={(item) => console.log("Selected:", item)}
                    placeholder="Search frameworks..."
                  />
                </div>
              </div>
            </div>

            {/* Navbar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Navbar</h3>
                <p className="component-demo-story">
                  <strong>Horizontal navigation bar for top navigation.</strong>{" "}
                  Clean navigation bar component that stays at the top of the
                  page. Perfect for headers, dashboards, and application
                  navigation. Horizontal layout with logo and menu items.
                  <strong>Use when:</strong> You need a horizontal navigation
                  bar at the top (e.g., website headers, app navigation).
                </p>
                <ul className="component-demo-features">
                  <li>Horizontal top navigation</li>
                  <li>Logo and menu items</li>
                  <li>Mobile hamburger menu</li>
                  <li>Responsive design</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Navbar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Navbar
                    logo="Chandu UI"
                    items={[
                      { label: "Home", href: "#home" },
                      { label: "About", href: "#about" },
                      { label: "Services", href: "#services" },
                      { label: "Contact", href: "#contact" },
                    ]}
                    onItemClick={(item) => console.log("Clicked:", item)}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Sidebar</h3>
                <p className="component-demo-story">
                  <strong>
                    Slide-out side panel for navigation and content.
                  </strong>{" "}
                  Side panel that slides in from left or right for navigation
                  and additional content. Perfect for mobile menus, settings
                  panels, and secondary navigation. Has backdrop overlay.
                  <strong>Use when:</strong> You need a side panel that slides
                  in (e.g., mobile menus, settings panels, side navigation).
                </p>
                <ul className="component-demo-features">
                  <li>Side slide-out panel</li>
                  <li>Left or right positioning</li>
                  <li>Backdrop overlay</li>
                  <li>Smooth slide animations</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Sidebar")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setSidebarOpen(true)}>
                    Open Sidebar
                  </Button>
                  <Sidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    position="right"
                  >
                    <h3>Sidebar Content</h3>
                    <p>
                      This is sidebar content. You can add any content here.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setSidebarOpen(false)}
                      style={{ marginTop: "1rem" }}
                    >
                      Close
                    </Button>
                  </Sidebar>
                </div>
              </div>
            </div>

            {/* ImageGallery Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Image Gallery</h3>
                <p className="component-demo-story">
                  Beautiful image gallery with lightbox view. Perfect for
                  portfolios, product showcases, and photo galleries. Click any
                  image to view in full-screen lightbox mode.
                </p>
                <ul className="component-demo-features">
                  <li>Grid layout with responsive design</li>
                  <li>Full-screen lightbox view</li>
                  <li>Navigation arrows</li>
                  <li>Thumbnail navigation</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("ImageGallery")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <ImageGallery
                    images={[
                      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=200&fit=crop",
                    ]}
                    showThumbnails
                  />
                </div>
              </div>
            </div>

            {/* VideoPlayer Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Video Player</h3>
                <p className="component-demo-story">
                  Custom video player with playback controls. Perfect for media
                  websites, tutorials, and content platforms. Clean interface
                  with play, pause, and volume controls.
                </p>
                <ul className="component-demo-features">
                  <li>Play/pause controls</li>
                  <li>Volume control</li>
                  <li>Mute/unmute toggle</li>
                  <li>Poster image support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("VideoPlayer")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <VideoPlayer
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    poster="https://via.placeholder.com/800x450/00338d/ffffff?text=Video+Poster"
                    controls
                  />
                </div>
              </div>
            </div>

            {/* AudioPlayer Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Audio Player</h3>
                <p className="component-demo-story">
                  Professional audio player with progress tracking. Perfect for
                  music apps, podcasts, and audio content. Shows track
                  information and playback controls.
                </p>
                <ul className="component-demo-features">
                  <li>Play/pause controls</li>
                  <li>Progress bar with seeking</li>
                  <li>Volume control</li>
                  <li>Track information display</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("AudioPlayer")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <AudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                    title="Sample Audio Track"
                    artist="Chandu UI"
                  />
                </div>
              </div>
            </div>

            {/* Chart Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Chart</h3>
                <p className="component-demo-story">
                  Visualize data with beautiful charts. Support for line, bar,
                  and pie charts. Perfect for dashboards, analytics, and data
                  visualization. Clean and professional design.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple chart types: line, bar, pie</li>
                  <li>Interactive legends</li>
                  <li>Responsive design</li>
                  <li>Customizable colors</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Chart")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Chart
                    type="line"
                    title="Sales Overview"
                    data={[
                      { label: "Jan", value: 20 },
                      { label: "Feb", value: 35 },
                      { label: "Mar", value: 30 },
                      { label: "Apr", value: 45 },
                      { label: "May", value: 40 },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* DataTable Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Data Table</h3>
                <p className="component-demo-story">
                  <strong>Advanced table with search, sort, and filter.</strong>{" "}
                  Full-featured data table with built-in search, column sorting,
                  and filtering. Perfect for admin panels, dashboards, and
                  data-heavy applications. Includes search bar and sortable
                  columns.
                  <strong>Use when:</strong> You need an advanced table with
                  search and sort (e.g., admin panels, data dashboards).
                </p>
                <ul className="component-demo-features">
                  <li>Built-in search bar</li>
                  <li>Column sorting</li>
                  <li>Data filtering</li>
                  <li>Empty state handling</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("DataTable")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <DataTable
                    columns={[
                      { key: "name", label: "Name", sortable: true },
                      { key: "email", label: "Email", sortable: true },
                      { key: "role", label: "Role", sortable: true },
                    ]}
                    data={[
                      {
                        name: "John Doe",
                        email: "john@example.com",
                        role: "Admin",
                      },
                      {
                        name: "Jane Smith",
                        email: "jane@example.com",
                        role: "User",
                      },
                      {
                        name: "Bob Johnson",
                        email: "bob@example.com",
                        role: "Editor",
                      },
                    ]}
                    searchable
                    sortable
                  />
                </div>
              </div>
            </div>

            {/* Form Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Form</h3>
                <p className="component-demo-story">
                  Form wrapper component for building complex forms. Perfect for
                  contact forms, registration, and data entry. Handles form
                  submission and validation.
                </p>
                <ul className="component-demo-features">
                  <li>Form submission handling</li>
                  <li>Validation support</li>
                  <li>Flexible layout</li>
                  <li>Accessible by default</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Form")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Form submitted!");
                    }}
                  >
                    <Input label="Name" placeholder="Enter your name" />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <Button type="submit" variant="primary">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>

            {/* Select Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Select</h3>
                <p className="component-demo-story">
                  Enhanced select dropdown with custom styling. Perfect for
                  forms and data selection. Smooth animations and keyboard
                  navigation support.
                </p>
                <ul className="component-demo-features">
                  <li>Custom dropdown styling</li>
                  <li>Selected state indicator</li>
                  <li>Keyboard navigation</li>
                  <li>Disabled state support</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Select")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Select
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                    ]}
                    value={dropdownValue}
                    onChange={setDropdownValue}
                    placeholder="Select an option..."
                  />
                </div>
              </div>
            </div>

            {/* DateRangePicker Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Date Range Picker</h3>
                <p className="component-demo-story">
                  Select date ranges with ease. Perfect for booking systems,
                  analytics dashboards, and date filtering. Clean interface for
                  start and end date selection.
                </p>
                <ul className="component-demo-features">
                  <li>Start and end date selection</li>
                  <li>Date validation</li>
                  <li>Formatted display</li>
                  <li>Calendar integration</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("DateRangePicker")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <DateRangePicker
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    onChange={setDateRange}
                  />
                </div>
              </div>
            </div>

            {/* TimePicker Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Time Picker</h3>
                <p className="component-demo-story">
                  Select time with hour and minute selectors. Perfect for
                  scheduling, booking, and time-based applications. Clean and
                  intuitive interface.
                </p>
                <ul className="component-demo-features">
                  <li>Hour and minute selection</li>
                  <li>24-hour format</li>
                  <li>Formatted time display</li>
                  <li>Easy to use interface</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("TimePicker")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <TimePicker value={timeValue} onChange={setTimeValue} />
                </div>
              </div>
            </div>

            {/* ColorPicker Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Color Picker</h3>
                <p className="component-demo-story">
                  Select colors with preset options and custom color input.
                  Perfect for theme customization, design tools, and color
                  selection. Visual color preview.
                </p>
                <ul className="component-demo-features">
                  <li>Preset color options</li>
                  <li>Custom color input</li>
                  <li>Hex color support</li>
                  <li>Visual color preview</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("ColorPicker")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <ColorPicker
                    value={selectedColor}
                    onChange={setSelectedColor}
                  />
                </div>
              </div>
            </div>

            {/* RichTextEditor Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Rich Text Editor</h3>
                <p className="component-demo-story">
                  WYSIWYG editor for rich text content. Perfect for content
                  management, blogs, and text editing. Format text with bold,
                  italic, lists, and more.
                </p>
                <ul className="component-demo-features">
                  <li>Bold, italic, underline formatting</li>
                  <li>Bullet and numbered lists</li>
                  <li>ContentEditable support</li>
                  <li>Toolbar with formatting options</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("RichTextEditor")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <RichTextEditor
                    value={richTextValue}
                    onChange={setRichTextValue}
                    placeholder="Start typing..."
                  />
                </div>
              </div>
            </div>

            {/* CodeEditor Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Code Editor</h3>
                <p className="component-demo-story">
                  Code editor with line numbers and syntax highlighting support.
                  Perfect for code snippets, documentation, and code examples.
                  Dark theme optimized for coding.
                </p>
                <ul className="component-demo-features">
                  <li>Line numbers</li>
                  <li>Monospace font</li>
                  <li>Dark theme</li>
                  <li>Scroll synchronization</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("CodeEditor")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <CodeEditor
                    value={codeValue}
                    onChange={setCodeValue}
                    language="javascript"
                  />
                </div>
              </div>
            </div>

            {/* TreeView Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tree View</h3>
                <p className="component-demo-story">
                  Hierarchical tree structure for nested data. Perfect for file
                  browsers, navigation menus, and organizational structures.
                  Expandable and collapsible nodes.
                </p>
                <ul className="component-demo-features">
                  <li>Expandable/collapsible nodes</li>
                  <li>Folder and file icons</li>
                  <li>Nested structure support</li>
                  <li>Click handlers for selection</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("TreeView")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <TreeView
                    data={[
                      {
                        id: "1",
                        label: "Documents",
                        children: [
                          { id: "2", label: "File1.pdf" },
                          { id: "3", label: "File2.docx" },
                        ],
                      },
                      {
                        id: "4",
                        label: "Images",
                        children: [
                          { id: "5", label: "Photo1.jpg" },
                          { id: "6", label: "Photo2.png" },
                        ],
                      },
                    ]}
                    onSelect={(node) => console.log("Selected:", node)}
                  />
                </div>
              </div>
            </div>

            {/* DragDrop Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Drag & Drop</h3>
                <p className="component-demo-story">
                  Drag and drop interface for reordering items. Perfect for
                  lists, kanban boards, and sortable content. Visual feedback
                  during dragging.
                </p>
                <ul className="component-demo-features">
                  <li>Drag and drop reordering</li>
                  <li>Visual drag feedback</li>
                  <li>Drop zone highlighting</li>
                  <li>Custom item rendering</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("DragDrop")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <DragDrop
                    items={dragItems}
                    onReorder={setDragItems}
                    renderItem={(item, index) => <span>{item}</span>}
                  />
                </div>
              </div>
            </div>

            {/* Wizard Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Wizard</h3>
                <p className="component-demo-story">
                  <strong>
                    Multi-step form wizard with step content display.
                  </strong>{" "}
                  Complete wizard component with step indicators, content
                  display, and navigation. Perfect for multi-step forms,
                  onboarding, and complex workflows. Shows step content and
                  allows navigation.
                  <strong>Use when:</strong> You need a complete multi-step form
                  with content (e.g., multi-step forms, onboarding wizards).
                </p>
                <ul className="component-demo-features">
                  <li>Step content display</li>
                  <li>Step navigation</li>
                  <li>Progress tracking</li>
                  <li>Form wizard functionality</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Wizard")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Wizard
                    steps={[
                      {
                        title: "Account Setup",
                        description: "Create your account",
                        content: (
                          <div
                            style={{
                              padding: "1rem",
                              textAlign: "center",
                              color: "#374151",
                            }}
                          >
                            Enter your email and password to get started.
                          </div>
                        ),
                      },
                      {
                        title: "Profile Info",
                        description: "Tell us about yourself",
                        content: (
                          <div
                            style={{
                              padding: "1rem",
                              textAlign: "center",
                              color: "#374151",
                            }}
                          >
                            Add your name, photo, and preferences.
                          </div>
                        ),
                      },
                      {
                        title: "Review",
                        description: "Confirm details",
                        content: (
                          <div
                            style={{
                              padding: "1rem",
                              textAlign: "center",
                              color: "#374151",
                            }}
                          >
                            Review and confirm your information.
                          </div>
                        ),
                      },
                    ]}
                    currentStep={wizardStep}
                    onStepChange={setWizardStep}
                  />
                </div>
              </div>
            </div>

            {/* Tour Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tour</h3>
                <p className="component-demo-story">
                  User onboarding tour with step-by-step guidance. Perfect for
                  introducing new features, product tours, and user guidance.
                  Highlights elements and provides instructions.
                </p>
                <ul className="component-demo-features">
                  <li>Step-by-step guidance</li>
                  <li>Element highlighting</li>
                  <li>Progress indicators</li>
                  <li>Next/Previous navigation</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Tour")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setTourOpen(true)}>Start Tour</Button>
                  <Tour
                    open={tourOpen}
                    onClose={() => setTourOpen(false)}
                    onComplete={() => {
                      setTourOpen(false);
                      alert("Tour completed!");
                    }}
                    steps={[
                      {
                        target: ".demo-interactive",
                        title: "Welcome",
                        content: "This is a demo component.",
                      },
                      {
                        target: ".view-code-button",
                        title: "View Code",
                        content: "Click here to view the code.",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Chat Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Chat</h3>
                <p className="component-demo-story">
                  Chat interface component for messaging. Perfect for support
                  systems, messaging apps, and communication interfaces. User
                  and other message styling with timestamps.
                </p>
                <ul className="component-demo-features">
                  <li>User and other message styling</li>
                  <li>Avatar support</li>
                  <li>Timestamps</li>
                  <li>Message input with send button</li>
                </ul>
                <div className="component-demo-cta">
                  <button
                    className="view-code-button"
                    onClick={() => handleViewCode("Chat")}
                  >
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Chat
                    messages={chatMessages}
                    onSend={(message) => {
                      setChatMessages([
                        ...chatMessages,
                        {
                          sender: "user",
                          text: message,
                          timestamp: new Date().toLocaleTimeString(),
                        },
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <About />
      <Services />
      <Footer />

      {selectedComponent && (
        <CodeViewer
          isOpen={codeViewerOpen}
          onClose={() => {
            setCodeViewerOpen(false);
            setSelectedComponent(null);
          }}
          title={`${selectedComponent} Component Code`}
          jsxCode={COMPONENT_CODES[selectedComponent]?.jsx}
          cssCode={COMPONENT_CODES[selectedComponent]?.css}
        />
      )}
    </div>
  );
}

export default App;
