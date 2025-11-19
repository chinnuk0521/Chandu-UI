import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { COMPONENT_CODES } from "../examples/component-codes";
import CodeViewer from "../components/CodeViewer";
import {
  Header,
  Hero,
  Features,
  About,
  Services,
  Footer,
  Button,
  Card,
  Input,
  Autocomplete,
  GlobalSearch,
  Badge,
  Avatar,
  Spinner,
  Modal,
  Tabs,
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
} from "../index";
import { FRUITS, COUNTRIES, TECHNOLOGIES } from "../examples/demo-data";
import { HiInbox, HiPaperAirplane, HiDocumentText, HiChevronRight, HiUser, HiCog, HiLogout } from "react-icons/hi";
import "../App.css";
import "./ComponentsPage.css";

// All available components grouped by category
const COMPONENT_GROUPS = {
  "Layout & Navigation": [
    "Header",
    "Footer",
    "Navbar",
    "Sidebar",
    "Breadcrumb",
    "Divider",
  ],
  "Form Components": [
    "Input",
    "Textarea",
    "Select",
    "Checkbox",
    "Radio",
    "Switch",
    "Form",
    "Autocomplete",
    "DateRangePicker",
    "TimePicker",
    "ColorPicker",
    "FileUpload",
    "SearchBar",
  ],
  "Buttons & Actions": ["Button", "Chip", "Tag", "Badge"],
  "Feedback & Overlays": [
    "Modal",
    "Drawer",
    "Popover",
    "Tooltip",
    "Alert",
    "Toast",
    "ToastContainer",
    "Snackbar",
    "Notification",
    "Backdrop",
    "Progress",
    "Spinner",
    "Skeleton",
  ],
  "Data Display": [
    "Card",
    "Table",
    "DataTable",
    "List",
    "Avatar",
    "Accordion",
    "Tabs",
    "Timeline",
    "TreeView",
  ],
  "Media": [
    "ImageGallery",
    "VideoPlayer",
    "AudioPlayer",
    "Carousel",
    "Chart",
  ],
  "Advanced": [
    "Calendar",
    "CodeEditor",
    "CodeViewer",
    "RichTextEditor",
    "DragDrop",
    "Rating",
    "Slider",
    "Menu",
    "Pagination",
    "Stepper",
    "Wizard",
    "Tour",
    "Chat",
    "GlobalSearch",
  ],
  "Page Sections": ["Hero", "Features", "About", "Services"],
};

// Flatten all components into a single list
const ALL_COMPONENTS = Object.values(COMPONENT_GROUPS).flat();

export default function ComponentsPage() {
  const { componentName } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(
    componentName || ALL_COMPONENTS[0]
  );
  const [codeViewerOpen, setCodeViewerOpen] = useState(false);
  
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
  
  // State for all component demos
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [badgeCount, setBadgeCount] = useState(5);
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [progressValue, setProgressValue] = useState(45);
  const [chips, setChips] = useState(["React", "Vue", "Angular"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [toasts, setToasts] = useState([]);
  const [toastContainerToasts, setToastContainerToasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarVariant, setSnackbarVariant] = useState("success");
  const [backdropOpen, setBackdropOpen] = useState(false);
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
  const [demoSidebarOpen, setDemoSidebarOpen] = useState(false);
  const [demoSidebarPosition, setDemoSidebarPosition] = useState("left");

  const handleButtonClick = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  // Update selected component when URL param changes
  useEffect(() => {
    if (componentName && ALL_COMPONENTS.includes(componentName)) {
      setSelectedComponent(componentName);
    } else if (!componentName || !ALL_COMPONENTS.includes(componentName)) {
      // Redirect to first component if no component or invalid component
      navigate(`/components/${ALL_COMPONENTS[0]}`, { replace: true });
    }
  }, [componentName, navigate]);

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
    navigate(`/components/${component}`);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const handleViewCode = () => {
    setCodeViewerOpen(true);
  };

  const componentCode = COMPONENT_CODES[selectedComponent] || null;

  // Component demo metadata and renderers
  const getComponentDemo = () => {
    const demos = {
      Button: {
        title: "Button",
        description:
          "Every great application starts with a button. Our Button component is the foundation of user interaction, designed to be flexible, accessible, and beautiful. Whether you need a primary action, secondary option, or a subtle text button, we've got you covered.",
        detailedDescription:
          "The Button component is a fundamental UI element that enables user interactions throughout your application. It provides multiple visual variants to match different action hierarchies, from primary calls-to-action to subtle secondary options. Built with accessibility in mind, it includes proper ARIA attributes, keyboard navigation support, and clear visual feedback. The component supports loading states for async operations, disabled states for conditional interactions, and three size options to fit various design contexts. Whether you're building forms, dashboards, or landing pages, the Button component provides a consistent and professional interaction pattern.",
        howToUse: `import Button from 'chandu-ui-components/Button';

// Basic usage
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// With different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text Button</Button>

// With sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// With loading state
<Button loading={isLoading} onClick={handleSubmit}>
  Submit
</Button>

// Disabled state
<Button disabled>Disabled</Button>`,
        whereToUse:
          "Use the Button component for all user actions throughout your application. Primary buttons are ideal for main actions like 'Submit', 'Save', or 'Get Started' on forms and landing pages. Secondary buttons work well for alternative actions or less prominent features. Outline buttons are perfect for cancel actions or secondary navigation. Text buttons are great for subtle actions like 'Learn More' or 'View All'. Use loading states during API calls or form submissions. Disabled states help guide users by showing unavailable actions. Buttons are essential in forms, modals, navigation bars, hero sections, and any interface requiring user interaction.",
        features: [
          "Multiple variants: primary, secondary, outline, and text",
          "Three sizes: small, medium, and large",
          "Loading states and disabled states",
          "Fully accessible with ARIA attributes",
        ],
        render: () => (
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
        ),
      },
      Card: {
        title: "Card",
        description:
          "Cards are the building blocks of modern web design. They help organize content, create visual hierarchy, and make information digestible. Our Card component is perfect for product showcases, feature highlights, pricing tables, and dashboard widgets.",
        detailedDescription:
          "The Card component organizes content into visually distinct containers. It supports titles, subtitles, images, and custom footers. Cards can be clickable for interactive experiences and include hover effects for better user engagement.",
        howToUse: `import Card from 'chandu-ui-components/Card';

// Basic card
<Card title="Card Title">
  Card content goes here
</Card>

// With subtitle and footer
<Card
  title="Product"
  subtitle="Premium Plan"
  footer={<Button>Get Started</Button>}
>
  Product description
</Card>

// Clickable card
<Card
  title="Interactive Card"
  onClick={() => handleClick()}
>
  Click me
</Card>`,
        whereToUse:
          "Use cards for product listings, feature showcases, pricing tables, dashboard widgets, blog post previews, and any content that needs visual separation.",
        features: [
          "Support for images, titles, subtitles, and footers",
          "Clickable cards with hover effects",
          "Flexible content structure",
          "Perfect for dashboards and product displays",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", width: "100%" }}>
              {/* Product Card */}
              <Card
                title="Premium Plan"
                subtitle="Best for teams and businesses"
                footer={
                  <Button variant="primary" size="small">
                    Get Started
                  </Button>
                }
              >
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent-primary)", marginBottom: "0.5rem" }}>
                    $99<span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)" }}>/month</span>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                    Unlimited projects
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                    24/7 support
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                    Advanced analytics
                  </li>
                </ul>
              </Card>

              {/* Feature Card */}
              <Card
                title="Feature Highlight"
                subtitle="Modern UI Components"
                image={
                  <div style={{ 
                    width: "100%", 
                    height: "160px", 
                    background: "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-light) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "3rem"
                  }}>
                    🎨
                  </div>
                }
                footer={
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Button variant="outline" size="small">Learn More</Button>
                    <Button variant="primary" size="small">Try Now</Button>
                  </div>
                }
              >
                Build beautiful interfaces with our comprehensive component library. Perfect for modern web applications.
              </Card>

              {/* Interactive Card */}
              <Card
                title="Interactive Card"
                subtitle="Click to interact"
                onClick={() => alert("Card clicked!")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(135deg, var(--accent-primary), var(--accent-light))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1.25rem"
                  }}>
                    UI
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>Chandu UI</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Component Library</div>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Hover over this card to see smooth animations. Perfect for dashboards and interactive content.
                </p>
              </Card>

              {/* Simple Card */}
              <Card title="Simple Card">
                <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  A clean and minimal card design. Use this for displaying content, information, or any structured data.
                </p>
              </Card>
            </div>
          </div>
        ),
      },
      Input: {
        title: "Input",
        description:
          "Forms are the bridge between your users and your application. Our Input component makes form building a breeze with built-in validation, error handling, and helper text. Create beautiful, accessible forms that guide users through their journey.",
        detailedDescription:
          "The Input component provides text input fields with built-in validation, error handling, and helper text. It supports various input types, required field indicators, and disabled states for better form UX.",
        howToUse: `import Input from 'chandu-ui-components/Input';

// Basic input
<Input
  label="Name"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// With validation
<Input
  label="Email"
  type="email"
  required
  error={emailError}
  helperText="Enter a valid email"
/>

// Disabled state
<Input
  label="Disabled"
  value="Cannot edit"
  disabled
/>`,
        whereToUse:
          "Use in forms for user registration, login, contact forms, search bars, and any text input scenarios. Essential for data collection and user interaction.",
        features: [
          "Built-in validation and error states",
          "Helper text for user guidance",
          "Required field indicators",
          "Disabled states for better UX",
        ],
        render: () => {
          const handleSubmit = () => {
            // Reset errors
            setInputError("");
            setEmailError("");
            setPasswordError("");
            
            let hasError = false;
            
            // Validate Full Name
            if (!inputValue.trim()) {
              setInputError("Full name is required");
              hasError = true;
            } else if (inputValue.trim().length < 2) {
              setInputError("Full name must be at least 2 characters");
              hasError = true;
            }
            
            // Validate Email
            if (!emailValue.trim()) {
              setEmailError("Email address is required");
              hasError = true;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
              setEmailError("Please enter a valid email address");
              hasError = true;
            }
            
            // Validate Password
            if (!passwordValue) {
              setPasswordError("Password is required");
              hasError = true;
            } else if (passwordValue.length < 8) {
              setPasswordError("Password must be at least 8 characters");
              hasError = true;
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordValue)) {
              setPasswordError("Password must contain uppercase, lowercase, and number");
              hasError = true;
            }
            
            if (!hasError) {
              alert("Form submitted successfully!");
              // Reset form
              setInputValue("");
              setEmailValue("");
              setPasswordValue("");
            }
          };
          
          const handleCancel = () => {
            setInputValue("");
            setEmailValue("");
            setPasswordValue("");
            setInputError("");
            setEmailError("");
            setPasswordError("");
          };
          
          return (
            <div className="demo-interactive">
              <div style={{ 
                maxWidth: "520px", 
                margin: "0 auto",
                padding: "32px",
                background: "var(--bg-card)",
                borderRadius: "16px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)"
              }}>
                <h3 style={{ 
                  marginBottom: "8px", 
                  marginTop: "0",
                  color: "var(--text-primary)", 
                  fontSize: "1.5rem",
                  fontWeight: "600"
                }}>
                  User Registration Form
                </h3>
                <p style={{
                  marginBottom: "28px",
                  color: "var(--text-secondary)",
                  fontSize: "0.9375rem"
                }}>
                  Please fill in all required fields to create your account
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (inputError) setInputError("");
                    }}
                    error={inputError}
                    helperText={inputError ? "" : "Enter your first and last name"}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    error={emailError}
                    helperText={emailError ? "" : "We'll never share your email with anyone"}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    required
                    value={passwordValue}
                    onChange={(e) => {
                      setPasswordValue(e.target.value);
                      if (passwordError) setPasswordError("");
                    }}
                    error={passwordError}
                    helperText={passwordError ? "" : "Must be at least 8 characters with uppercase, lowercase, and number"}
                  />
                </div>
                <div style={{ 
                  display: "flex", 
                  gap: "12px", 
                  marginTop: "32px",
                  justifyContent: "space-between",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--border-color)"
                }}>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          );
        },
      },
      Autocomplete: {
        title: "Autocomplete",
        description:
          "Multi-select autocomplete for form inputs. Select multiple items from a searchable list with tag display. Perfect for selecting categories, tags, or multiple options in forms. Users can add custom values not in the list.",
        detailedDescription:
          "The Autocomplete component allows users to select multiple items from a searchable list. Selected items appear as chips that can be removed. Supports custom values and real-time filtering.",
        howToUse: `import Autocomplete from 'chandu-ui-components/Autocomplete';

<Autocomplete
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selectedItems}
  onChange={setSelectedItems}
  placeholder="Search and select..."
/>`,
        whereToUse:
          "Use for tag selection, category filtering, multi-select forms, and anywhere users need to choose multiple options from a list.",
        features: [
          "Multi-select with tag chips",
          "Custom input values allowed",
          "Real-time search filtering",
          "Keyboard navigation support",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <Autocomplete
                options={FRUITS}
                value={selectedFruits}
                onChange={setSelectedFruits}
                placeholder="Search and select items..."
              />
            </div>
          </div>
        ),
      },
      GlobalSearch: {
        title: "Global Search",
        description:
          "Single-select search for finding and selecting one item. Search across large datasets and select a single result. Perfect for command palettes, quick actions, and finding specific items.",
        detailedDescription:
          "The GlobalSearch component provides a single-select search interface for finding items in large datasets. It includes keyboard navigation and customizable search functions.",
        howToUse: `import GlobalSearch from 'chandu-ui-components/GlobalSearch';

<GlobalSearch
  items={['Item 1', 'Item 2', 'Item 3']}
  onSelect={(item) => handleSelect(item)}
  placeholder="Search items..."
/>`,
        whereToUse:
          "Use for command palettes, quick search functionality, item selection from large lists, and any single-item search scenario.",
        features: [
          "Single-item selection",
          "Custom search functions",
          "Result limit control",
          "Keyboard navigation",
        ],
        render: () => (
          <div className="demo-interactive">
            <GlobalSearch
              items={COUNTRIES.map((c) => c.name)}
              onSelect={(item) => setSearchResult(item)}
              placeholder="Search across all items..."
            />
          </div>
        ),
      },
      Badge: {
        title: "Badge",
        description:
          "Non-removable badges for status indicators and counts. Small indicators that communicate status, count notifications, and highlight important information.",
        detailedDescription:
          "The Badge component displays status indicators, notification counts, and labels. It comes in multiple color variants and sizes for different use cases.",
        howToUse: `import Badge from 'chandu-ui-components/Badge';

// Status badge
<Badge variant="success">Active</Badge>
<Badge variant="error">Error</Badge>

// With count
<Badge count={5}>Notifications</Badge>

// Different sizes
<Badge size="small">Small</Badge>
<Badge size="large">Large</Badge>`,
        whereToUse:
          "Use for status indicators, notification counts, labels, feature tags, and any small informational display that needs to stand out.",
        features: [
          "Non-removable badges",
          "Status indicators",
          "Notification counts",
          "Five color variants",
        ],
        render: () => (
          <div className="demo-interactive">
            <div className="button-group">
              <Badge variant="primary">New</Badge>
              <Badge variant="success">Beta</Badge>
              <Badge variant="warning">Active</Badge>
              <Badge variant="info">Pending</Badge>
              <Badge variant="error">Error</Badge>
            </div>
            <div className="button-group" style={{ marginTop: "16px" }}>
              <Badge size="small">Small</Badge>
              <Badge size="medium">Medium</Badge>
              <Badge size="large">Large</Badge>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Badge count={badgeCount}>5 Notifications</Badge>
              <Button
                variant="outline"
                size="small"
                onClick={() => setBadgeCount(badgeCount + 1)}
                style={{ marginLeft: "16px" }}
              >
                Add Badge
              </Button>
            </div>
          </div>
        ),
      },
      Avatar: {
        title: "Avatar",
        description:
          "Personalize your application with user avatars. Our Avatar component automatically generates initials from names, supports images, and comes in multiple sizes.",
        detailedDescription:
          "The Avatar component displays user profile pictures or automatically generates initials from names. It supports images with fallback to initials and comes in three sizes.",
        howToUse: `import Avatar from 'chandu-ui-components/Avatar';

// With name (generates initials)
<Avatar name="John Doe" size="medium" />

// With image
<Avatar
  src="/path/to/image.jpg"
  name="John Doe"
  size="large"
/>`,
        whereToUse:
          "Use in user profiles, comments, team displays, navigation menus, chat interfaces, and anywhere user identity needs to be shown.",
        features: [
          "Automatic initials generation",
          "Image support with fallback",
          "Three sizes: small, medium, large",
          "Status indicators (online, offline, away, busy)",
          "Badge/notification counts",
          "Color variants",
          "Grouped avatars support",
          "Smooth hover animations",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: "2.5rem", 
              width: "100%",
              alignItems: "center",
              justifyItems: "center"
            }}>
              {/* Sizes */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.25rem",
                alignItems: "center",
                width: "100%"
              }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid var(--border-light)"
                }}>
                  Sizes
                </h4>
                <div style={{ 
                  display: "flex", 
                  gap: "2rem", 
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%"
                }}>
                  <Avatar name="John Doe" size="small" />
                  <Avatar name="Jane Smith" size="medium" />
                  <Avatar name="Bob Johnson" size="large" />
            </div>
              </div>

              {/* With Status */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.25rem",
                alignItems: "center",
                width: "100%"
              }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid var(--border-light)"
                }}>
                  With Status
                </h4>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  width: "100%",
                  maxWidth: "320px"
                }}>
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "0.75rem"
                  }}>
                    <Avatar name="John Doe" status="online" />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "0.8125rem", 
                        fontWeight: 600, 
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem"
                      }}>
                        Online
                      </div>
                      <div style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--text-tertiary)",
                        lineHeight: "1.4"
                      }}>
                        User is active and available
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "0.75rem"
                  }}>
                    <Avatar name="Jane Smith" status="away" />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "0.8125rem", 
                        fontWeight: 600, 
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem"
                      }}>
                        Away
                      </div>
                      <div style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--text-tertiary)",
                        lineHeight: "1.4"
                      }}>
                        User is temporarily away
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "0.75rem"
                  }}>
                    <Avatar name="Bob Johnson" status="busy" />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "0.8125rem", 
                        fontWeight: 600, 
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem"
                      }}>
                        Busy
                      </div>
                      <div style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--text-tertiary)",
                        lineHeight: "1.4"
                      }}>
                        User is busy or in a meeting
                      </div>
                    </div>
                  </div>
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "0.75rem"
                  }}>
                    <Avatar name="Alice Brown" status="offline" />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ 
                        fontSize: "0.8125rem", 
                        fontWeight: 600, 
                        color: "var(--text-primary)",
                        marginBottom: "0.25rem"
                      }}>
                        Offline
                      </div>
                      <div style={{ 
                        fontSize: "0.75rem", 
                        color: "var(--text-tertiary)",
                        lineHeight: "1.4"
                      }}>
                        User is not available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* With Badges */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.25rem",
                alignItems: "center",
                width: "100%"
              }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid var(--border-light)"
                }}>
                  With Badges
                </h4>
                <div style={{ 
                  display: "flex", 
                  gap: "1.5rem", 
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  flexWrap: "wrap"
                }}>
                  <Avatar name="John Doe" badge={3} />
                  <Avatar name="Jane Smith" badge={12} />
                  <Avatar name="Bob Johnson" badge={99} />
                  <Avatar name="Alice Brown" badge={150} />
                </div>
              </div>

              {/* Grouped Avatars */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.25rem",
                alignItems: "center",
                gridColumn: "1 / -1",
                width: "100%"
              }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid var(--border-light)"
                }}>
                  Grouped Avatars
                </h4>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "1rem",
                  width: "100%"
                }}>
                  <div className="avatar-group" style={{ 
                    justifyContent: "center",
                    width: "100%",
                    cursor: "pointer"
                  }}>
                    <div data-name="John Doe">
                      <Avatar name="John Doe" size="medium" />
                    </div>
                    <div data-name="Jane Smith">
                      <Avatar name="Jane Smith" size="medium" />
                    </div>
                    <div data-name="Bob Johnson">
                      <Avatar name="Bob Johnson" size="medium" />
                    </div>
                    <div data-name="Alice Brown">
                      <Avatar name="Alice Brown" size="medium" />
                    </div>
                    <div data-name="Charlie Wilson">
                      <Avatar name="Charlie Wilson" size="medium" />
                    </div>
                    <div data-name="+5 More">
                      <Avatar name="+5" size="medium" />
                    </div>
                  </div>
                  <div style={{ 
                    textAlign: "center",
                    maxWidth: "500px",
                    padding: "0.75rem 1rem",
                    background: "var(--bg-tertiary)",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)"
                  }}>
                    <div style={{ 
                      fontSize: "0.8125rem", 
                      fontWeight: 600, 
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem"
                    }}>
                      Team Members (11 total)
                    </div>
                    <div style={{ 
                      fontSize: "0.75rem", 
                      color: "var(--text-secondary)",
                      lineHeight: "1.5"
                    }}>
                      Grouped avatars display multiple users in a compact, overlapping layout. 
                      Hover over any avatar to see it highlighted. Perfect for team displays, 
                      project collaborators, or member lists.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      Spinner: {
        title: "Spinner",
        description:
          "Loading states are inevitable in modern applications. Our Spinner component provides smooth, professional loading indicators that keep users informed during async operations.",
        detailedDescription:
          "The Spinner component displays a loading indicator during async operations. It provides visual feedback to users and comes in three sizes with smooth animations.",
        howToUse: `import Spinner from 'chandu-ui-components/Spinner';

// Basic spinner
<Spinner />

// With size
<Spinner size="small" />
<Spinner size="large" />

// With text
<div>
  <Spinner size="medium" />
  <span>Loading...</span>
</div>`,
        whereToUse:
          "Use during API calls, form submissions, data loading, file uploads, and any async operation where users need loading feedback.",
        features: [
          "Smooth rotation animation",
          "Three sizes available",
          "Accessible with ARIA labels",
          "Lightweight and performant",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", width: "100%" }}>
              {/* Sizes Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "2px solid var(--border-light)" }}>
                  Sizes
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Spinner size="small" />
                      <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Small</span>
                    </div>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem", marginLeft: "2.5rem" }}>20px × 20px</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Spinner size="medium" />
                      <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Medium</span>
                    </div>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem", marginLeft: "2.5rem" }}>40px × 40px</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Spinner size="large" />
                      <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Large</span>
                    </div>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem", marginLeft: "2.5rem" }}>60px × 60px</span>
                  </div>
                </div>
              </div>

              {/* Variants Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "2px solid var(--border-light)" }}>
                  Variants
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <Spinner size="medium" variant="primary" />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Primary</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <Spinner size="medium" variant="secondary" />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Secondary</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <Spinner size="medium" variant="success" />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Success</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <Spinner size="medium" variant="warning" />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Warning</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                    <Spinner size="medium" variant="error" />
                    <span style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 500 }}>Error</span>
                  </div>
                </div>
              </div>

              {/* Standalone Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "2px solid var(--border-light)" }}>
                  Standalone
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", justifyContent: "center", padding: "2rem", background: "var(--bg-tertiary)", borderRadius: "8px", minHeight: "200px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                    <Spinner size="small" />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>Small</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                    <Spinner size="medium" />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>Medium</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                    <Spinner size="large" />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.75rem" }}>Large</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      Modal: {
        title: "Modal",
        description:
          "Centered dialog overlay for important actions. Focused dialogs that appear in the center of the screen for confirmations, forms, and critical information. Blocks background interaction with backdrop.",
        detailedDescription:
          "The Modal component displays a centered dialog overlay for important actions. It blocks background interaction and includes header, body, and footer sections for flexible content.",
        howToUse: `import Modal from 'chandu-ui-components/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<Button onClick={handleSubmit}>Submit</Button>}
>
  Modal content here
</Modal>`,
        whereToUse:
          "Use for confirmations, forms, critical information, delete confirmations, and any action that requires user attention and blocks other interactions.",
        features: [
          "Centered dialog overlay",
          "Backdrop blocking",
          "Header, body, and footer",
          "Focus trapping",
        ],
        render: () => (
          <div className="demo-interactive">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Modal Title"
              footer={
                <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                  <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                    Confirm
                  </Button>
                </div>
              }
            >
              <p>This is a modal dialog. It blocks interaction with the background content.</p>
            </Modal>
          </div>
        ),
      },
      Tabs: {
        title: "Tabs",
        description:
          "Organize complex content into manageable sections with Tabs. Perfect for settings pages, dashboards, and detail views, tabs help users navigate between related content without losing context.",
        detailedDescription:
          "The Tabs component organizes content into sections with tab navigation. Users can switch between tabs to view different content without losing context.",
        howToUse: `import Tabs from 'chandu-ui-components/Tabs';

<Tabs
  activeTab={activeTab}
  onChange={setActiveTab}
  tabs={[
    { label: "Tab 1", content: "Content 1" },
    { label: "Tab 2", content: "Content 2" },
    { label: "Disabled", disabled: true, content: "Content 3" }
  ]}
/>`,
        whereToUse:
          "Use in settings pages, dashboards, detail views, product pages, and anywhere you need to organize related content into sections.",
        features: [
          "Dynamic tab content",
          "Disabled tab support",
          "Change event callbacks",
          "Clean, professional styling",
        ],
        render: () => (
          <div className="demo-interactive">
            <Tabs
              defaultTab={activeTab}
              onChange={(index) => setActiveTab(index)}
              tabs={[
                { label: "Overview", content: "Display key metrics and information here." },
                { label: "Details", content: "Show detailed information here." },
                { label: "Settings", content: "Configure settings here." },
                { label: "Disabled", disabled: true, content: "This tab is disabled." },
              ]}
            />
          </div>
        ),
      },
      Dropdown: {
        title: "Dropdown",
        description:
          "When you need users to select from a list of options, our Dropdown component provides a clean, intuitive interface. With smooth animations, keyboard navigation, and clear visual feedback, it makes selection effortless.",
        detailedDescription:
          "The Dropdown component provides a selectable list of options in a dropdown menu. It includes smooth animations, keyboard navigation, and clear visual feedback for selections.",
        howToUse: `import Dropdown from 'chandu-ui-components/Dropdown';

<Dropdown
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select an option..."
/>`,
        whereToUse:
          "Use in forms for single selection, filters, navigation menus, and anywhere users need to choose one option from a list.",
        features: [
          "Smooth open/close animations",
          "Keyboard navigation support",
          "Selected state highlighting",
          "Disabled state support",
        ],
        render: () => (
          <div className="demo-interactive">
            <Dropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4"]}
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Select an option..."
            />
          </div>
        ),
      },
      Checkbox: {
        title: "Checkbox",
        description:
          "Checkboxes are essential for multi-select scenarios, consent forms, and preference settings. Our Checkbox component provides clear visual feedback and maintains consistency with the rest of your design system.",
        detailedDescription:
          "The Checkbox component allows users to select multiple options. It includes label support, disabled states, and is fully accessible with proper ARIA attributes.",
        howToUse: `import Checkbox from 'chandu-ui-components/Checkbox';

<Checkbox
  label="I agree to terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// Disabled
<Checkbox label="Disabled" disabled checked />`,
        whereToUse:
          "Use in forms for multi-select options, consent checkboxes, preference settings, filters, and any scenario where multiple selections are allowed.",
        features: [
          "Custom styled checkboxes",
          "Label support for better UX",
          "Disabled state handling",
          "Accessible by default",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "500px" }}>
              <Checkbox
                label="I agree to the terms and conditions"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
              <Checkbox
                label="Subscribe to newsletter"
                checked={newsletterChecked}
                onChange={(e) => setNewsletterChecked(e.target.checked)}
              />
              <Checkbox label="Disabled checkbox" disabled checked />
            </div>
          </div>
        ),
      },
      Radio: {
        title: "Radio",
        description:
          "When users need to choose one option from multiple choices, Radio buttons are the perfect solution. They provide clear visual feedback and ensure only one selection at a time, making them ideal for surveys, settings, and preference selection.",
        detailedDescription:
          "The Radio component allows single selection from multiple options. Radio buttons in the same group ensure only one can be selected at a time.",
        howToUse: `import Radio from 'chandu-ui-components/Radio';

<Radio
  name="option"
  value="option1"
  checked={value === "option1"}
  onChange={(e) => setValue(e.target.value)}
  label="Option 1"
/>

<Radio
  name="option"
  value="option2"
  checked={value === "option2"}
  onChange={(e) => setValue(e.target.value)}
  label="Option 2"
/>`,
        whereToUse:
          "Use in forms for single-choice questions, settings pages, surveys, preference selection, and anywhere only one option should be selectable.",
        features: [
          "Group-based single selection",
          "Clear visual indicators",
          "Keyboard accessible",
          "Perfect for forms and surveys",
        ],
        render: () => (
          <div className="demo-interactive">
            <Radio
              name="options"
              value="option1"
              checked={radioValue === "option1"}
              onChange={(e) => setRadioValue(e.target.value)}
              label="Option 1"
            />
            <Radio
              name="options"
              value="option2"
              checked={radioValue === "option2"}
              onChange={(e) => setRadioValue(e.target.value)}
              label="Option 2"
              style={{ marginTop: "12px" }}
            />
            <Radio
              name="options"
              value="option3"
              checked={radioValue === "option3"}
              onChange={(e) => setRadioValue(e.target.value)}
              label="Option 3"
              style={{ marginTop: "12px" }}
            />
          </div>
        ),
      },
      Switch: {
        title: "Switch",
        description:
          "Toggle switches are perfect for on/off settings, feature toggles, and preference controls. They provide immediate visual feedback and are more intuitive than checkboxes for binary choices.",
        detailedDescription:
          "The Switch component provides a toggle for on/off settings. It's more intuitive than checkboxes for binary choices and includes smooth animations.",
        howToUse: `import Switch from 'chandu-ui-components/Switch';

<Switch
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>

// Disabled
<Switch label="Disabled" disabled checked />`,
        whereToUse:
          "Use for feature toggles, settings pages, preference controls, and any binary on/off choice where immediate visual feedback is important.",
        features: [
          "Smooth toggle animation",
          "Clear on/off states",
          "Label support",
          "Disabled state handling",
        ],
        render: () => (
          <div className="demo-interactive">
            <Switch
              label="Enable notifications"
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
            <Switch label="Disabled switch" disabled checked style={{ marginTop: "16px" }} />
          </div>
        ),
      },
      Textarea: {
        title: "Textarea",
        description:
          "Sometimes users need more space to express themselves. Our Textarea component handles multi-line input with grace, supporting validation, helper text, and error states. Perfect for comments, messages, and detailed descriptions.",
        detailedDescription:
          "The Textarea component provides multi-line text input with validation, error handling, and helper text. It's resizable and consistent with Input styling.",
        howToUse: `import Textarea from 'chandu-ui-components/Textarea';

<Textarea
  label="Message"
  placeholder="Enter your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
  helperText="Maximum 500 characters"
/>`,
        whereToUse:
          "Use for comments, messages, descriptions, feedback forms, and any scenario requiring multi-line text input.",
        features: [
          "Resizable vertical sizing",
          "Validation and error handling",
          "Helper text support",
          "Consistent with Input styling",
        ],
        render: () => (
          <div className="demo-interactive">
            <Textarea
              label="Message"
              placeholder="Enter your message..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              helperText="Maximum 500 characters"
              rows={4}
            />
          </div>
        ),
      },
      Progress: {
        title: "Progress",
        description:
          "Linear progress bar for showing completion percentage. Display progress of long-running operations with a horizontal progress bar. Perfect for file uploads, form completion, and data processing.",
        detailedDescription:
          "The Progress component displays a linear progress bar showing completion percentage. It provides visual feedback for long-running operations with smooth animations.",
        howToUse: `import Progress from 'chandu-ui-components/Progress';

<Progress value={75} label="75%" />

// Without label
<Progress value={50} />`,
        whereToUse:
          "Use for file uploads, form completion indicators, data processing, loading states, and any operation where progress needs to be shown.",
        features: [
          "Linear progress bar",
          "Percentage display",
          "Multiple variants",
          "Smooth animations",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
              <div>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Interactive Progress
                </h4>
                <Progress value={progressValue} label={`${progressValue}%`} variant="primary" />
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => setProgressValue(Math.max(0, progressValue - 10))}
                  >
                    Decrease
                  </Button>
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
                  >
                    Increase
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => setProgressValue(0)}
                  >
                    Reset
                  </Button>
                </div>
              </div>

              <div>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Variants
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Progress value={75} showLabel variant="primary" />
                  <Progress value={60} showLabel variant="success" />
                  <Progress value={45} showLabel variant="warning" />
                  <Progress value={30} showLabel variant="error" />
                  <Progress value={50} showLabel variant="secondary" />
                </div>
              </div>

              <div>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Sizes
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <Progress value={75} showLabel size="small" />
                  <Progress value={75} showLabel size="medium" />
                  <Progress value={75} showLabel size="large" />
                </div>
              </div>

              <div>
                <h4 style={{ margin: "0 0 0.75rem 0", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Striped Progress
                </h4>
                <Progress value={65} showLabel variant="primary" striped />
              </div>
            </div>
          </div>
        ),
      },
      Alert: {
        title: "Alert",
        description:
          "Inline alert messages for page content. Display important messages directly in the page flow with title and message. Perfect for form validation, page-level warnings, and inline notifications.",
        detailedDescription:
          "The Alert component displays inline messages with different variants for info, success, warning, and error states. It includes optional close functionality.",
        howToUse: `import Alert from 'chandu-ui-components/Alert';

<Alert
  variant="success"
  title="Success"
  message="Operation completed!"
/>

<Alert
  variant="error"
  title="Error"
  message="Something went wrong"
  closable
/>`,
        whereToUse:
          "Use for form validation messages, page-level notifications, success/error feedback, warnings, and any important inline message display.",
        features: [
          "Inline page placement",
          "Title and message support",
          "Four variants: info, success, warning, error",
          "Optional close button",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
              <Alert variant="info" title="Info">
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
        ),
      },
      Tooltip: {
        title: "Tooltip",
        description:
          "Sometimes users need a little help understanding what something does. Tooltips provide contextual information without cluttering the interface. Hover over any element to reveal helpful hints and additional context.",
        detailedDescription:
          "The Tooltip component displays contextual information on hover. It supports four positions and works with any child element to provide helpful hints.",
        howToUse: `import Tooltip from 'chandu-ui-components/Tooltip';

<Tooltip content="This is a tooltip" position="top">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip content="Help text" position="bottom">
  <Icon />
</Tooltip>`,
        whereToUse:
          "Use for icon explanations, button descriptions, form field help text, and anywhere additional context is needed without cluttering the interface.",
        features: [
          "Four positions: top, bottom, left, right",
          "Smooth fade-in animation",
          "Automatic positioning",
          "Works with any child element",
        ],
        render: () => (
          <div className="demo-interactive">
            <div className="button-group">
              <Tooltip content="This is a tooltip on top" position="top">
                <Button variant="primary">Hover Top</Button>
              </Tooltip>
              <Tooltip content="This is a tooltip on bottom" position="bottom">
                <Button variant="primary">Hover Bottom</Button>
              </Tooltip>
              <Tooltip content="This is a tooltip on left" position="left">
                <Button variant="primary">Hover Left</Button>
              </Tooltip>
              <Tooltip content="This is a tooltip on right" position="right">
                <Button variant="primary">Hover Right</Button>
              </Tooltip>
            </div>
          </div>
        ),
      },
      Divider: {
        title: "Divider",
        description:
          "Visual separation is crucial for readability and organization. Our Divider component creates clean boundaries between sections, making content easier to scan and understand.",
        detailedDescription:
          "The Divider component creates visual separation between content sections. It supports horizontal and vertical orientations with optional text labels.",
        howToUse: `import Divider from 'chandu-ui-components/Divider';

// Horizontal divider
<Divider />

// With text
<Divider text="OR" />

// Vertical
<Divider orientation="vertical" />`,
        whereToUse:
          "Use to separate form sections, list items, content blocks, and anywhere visual organization improves readability.",
        features: [
          "Horizontal and vertical orientations",
          "Optional text label",
          "Subtle and professional styling",
          "Perfect for content organization",
        ],
        render: () => (
          <div className="demo-interactive">
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
            <Divider text="OR" style={{ marginTop: "16px" }} />
            <p>More content</p>
          </div>
        ),
      },
      Skeleton: {
        title: "Skeleton",
        description:
          "Loading states don't have to be boring. Our Skeleton component creates engaging loading placeholders that match your content structure. Users see what's coming, reducing perceived load time and improving the overall experience.",
        detailedDescription:
          "The Skeleton component displays loading placeholders that match your content structure. It includes smooth shimmer animations and multiple shape variants.",
        howToUse: `import Skeleton from 'chandu-ui-components/Skeleton';

<Skeleton variant="text" width="100%" height={20} />
<Skeleton variant="circular" width={50} height={50} />
<Skeleton variant="rectangular" width="100%" height={100} />`,
        whereToUse:
          "Use as loading placeholders for content, images, cards, lists, and anywhere you want to show content structure while loading.",
        features: [
          "Multiple variants: text, circular, rectangular, rounded",
          "Smooth shimmer animation",
          "Customizable width and height",
          "Perfect for content placeholders",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", width: "100%" }}>
              {/* Text Skeleton */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h4 style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-light)" }}>
                  Text
                </h4>
                <div style={{ padding: "0.875rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <Skeleton variant="text" width="100%" height={12} />
                  <Skeleton variant="text" width="100%" height={12} />
                  <Skeleton variant="text" width="85%" height={12} />
                  <Skeleton variant="text" width="70%" height={12} />
                </div>
              </div>

              {/* Card Skeleton */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h4 style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-light)" }}>
                  Card
                </h4>
                <div style={{ padding: "1rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Skeleton variant="circular" width={36} height={36} />
                    <div style={{ flex: 1 }}>
                      <Skeleton variant="text" width="70%" height={12} style={{ marginBottom: "0.375rem" }} />
                      <Skeleton variant="text" width="50%" height={10} />
                    </div>
                  </div>
                  <Skeleton variant="rounded" width="100%" height={80} />
                  <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem" }}>
                    <Skeleton variant="text" width="50px" height={24} style={{ borderRadius: "4px" }} />
                    <Skeleton variant="text" width="50px" height={24} style={{ borderRadius: "4px" }} />
                  </div>
                </div>
              </div>

              {/* List Skeleton */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h4 style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-light)" }}>
                  List
                </h4>
                <div style={{ padding: "0.875rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  {[1, 2, 3].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: item < 3 ? "0.75rem" : "0" }}>
                      <Skeleton variant="circular" width={32} height={32} />
                      <div style={{ flex: 1 }}>
                        <Skeleton variant="text" width="75%" height={12} style={{ marginBottom: "0.375rem" }} />
                        <Skeleton variant="text" width="55%" height={10} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h4 style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border-light)" }}>
                  Variants
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "0.875rem", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Skeleton variant="circular" width={32} height={32} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>Circular</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Skeleton variant="rounded" width={60} height={32} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>Rounded</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Skeleton variant="rectangular" width={60} height={32} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>Rectangular</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Skeleton variant="text" width={60} height={16} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.8125rem" }}>Text</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      Chip: {
        title: "Chip",
        description:
          "Deletable chips for selected items and filters. Compact elements perfect for showing selected items, filters, and selections. Help users understand what's selected and provide quick deletion.",
        detailedDescription:
          "The Chip component displays compact, deletable elements for selected items and filters. Users can easily remove chips with the delete button.",
        howToUse: `import Chip from 'chandu-ui-components/Chip';

<Chip
  label="React"
  onDelete={() => handleDelete()}
/>

<Chip
  label="Vue"
  variant="primary"
  onDelete={() => handleDelete()}
/>`,
        whereToUse:
          "Use for selected filters, tags, categories, multi-select displays, and anywhere compact removable items need to be shown.",
        features: [
          "Deletable chips",
          "Selected item display",
          "Multiple color variants",
          "Delete functionality",
        ],
        render: () => (
          <div className="demo-interactive">
            <div className="button-group">
              <Chip label="Default" onDelete={() => {}} />
              <Chip label="Primary" variant="primary" onDelete={() => {}} />
              <Chip label="Success" variant="success" onDelete={() => {}} />
              <Chip label="Warning" variant="warning" onDelete={() => {}} />
              <Chip label="Error" variant="error" onDelete={() => {}} />
            </div>
            <div style={{ marginTop: "16px" }}>
              {chips.map((chip, idx) => (
                <Chip
                  key={idx}
                  label={chip}
                  onDelete={() => setChips(chips.filter((_, i) => i !== idx))}
                  style={{ marginRight: "8px", marginBottom: "8px" }}
                />
              ))}
            </div>
          </div>
        ),
      },
      Breadcrumb: {
        title: "Breadcrumb",
        description:
          "Navigate your application with clear breadcrumb trails. Help users understand their location in the hierarchy and provide quick navigation back to parent pages. Essential for complex applications with deep navigation structures.",
        detailedDescription:
          "The Breadcrumb component displays navigation hierarchy showing the user's current location. It helps users understand where they are and provides quick navigation to parent pages.",
        howToUse: `import Breadcrumb from 'chandu-ui-components/Breadcrumb';

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Details", href: "/products/123", active: true }
  ]}
/>`,
        whereToUse:
          "Use in complex applications with deep navigation, e-commerce product pages, documentation sites, admin panels, and anywhere users need to understand their location in a hierarchy.",
        features: [
          "Customizable separators",
          "Active page highlighting",
          "Accessible navigation",
          "Perfect for complex hierarchies",
        ],
        render: () => (
          <div className="demo-interactive">
            <Breadcrumb
              items={[
                { label: "Home", href: "#" },
                { label: "About", href: "#" },
                { label: "Services", href: "#" },
                { label: "Features", href: "#", active: true },
              ]}
            />
          </div>
        ),
      },
      Pagination: {
        title: "Pagination",
        description:
          "Navigate through large datasets with ease. Our Pagination component provides intuitive controls for moving between pages, making it perfect for tables, lists, and search results.",
        detailedDescription:
          "The Pagination component provides navigation controls for large datasets. It includes first, last, previous, and next buttons with active page highlighting.",
        howToUse: `import Pagination from 'chandu-ui-components/Pagination';

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>`,
        whereToUse:
          "Use with data tables, search results, product listings, blog posts, and any paginated content where users need to navigate through multiple pages.",
        features: [
          "First/Last page navigation",
          "Previous/Next controls",
          "Active page highlighting",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive">
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>
        ),
      },
      Accordion: {
        title: "Accordion",
        description:
          "Organize content into collapsible sections. Perfect for FAQs, settings panels, and content-heavy pages. Users can expand only what they need, keeping interfaces clean and focused.",
        detailedDescription:
          "The Accordion component organizes content into collapsible sections. Users can expand or collapse sections individually, keeping interfaces clean and organized.",
        howToUse: `import Accordion from 'chandu-ui-components/Accordion';

<Accordion
  items={[
    { title: "Question 1", content: "Answer 1" },
    { title: "Question 2", content: "Answer 2" }
  ]}
/>`,
        whereToUse:
          "Use for FAQs, settings panels, help documentation, product details, and any content that benefits from collapsible organization.",
        features: [
          "Single or multiple open sections",
          "Smooth animations",
          "Customizable content",
          "Perfect for FAQs and settings",
        ],
        render: () => (
          <div className="demo-interactive">
            <Accordion
              items={[
                {
                  title: "What is this component library?",
                  content: "This is a comprehensive React component library with 71+ production-ready components.",
                },
                {
                  title: "How do I install it?",
                  content: "You can install it via npm: npm install chandu-ui-components",
                },
                {
                  title: "Is it free to use?",
                  content: "Yes, it's completely free and open source.",
                },
              ]}
            />
          </div>
        ),
      },
      Drawer: {
        title: "Drawer",
        description:
          "Slide-out panel from edges for secondary content. Panels that slide in from edges (left, right, top, bottom) for navigation, filters, and additional content. Space-efficient way to display secondary content.",
        detailedDescription:
          "The Drawer component displays a slide-out panel from any edge of the screen. It's perfect for navigation, filters, and secondary content without taking up permanent screen space.",
        howToUse: `import Drawer from 'chandu-ui-components/Drawer';

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  title="Drawer Title"
>
  Drawer content here
</Drawer>`,
        whereToUse:
          "Use for mobile navigation, filters, settings panels, sidebars, and any secondary content that should slide in from edges.",
        features: [
          "Edge slide-out panels",
          "Multiple positions",
          "Three sizes available",
          "Smooth slide animations",
        ],
        render: () => (
          <div className="demo-interactive">
            <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
              Open Drawer
            </Button>
            <Drawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              position="right"
              title="Drawer Title"
            >
              <p>This is drawer content. It slides in from the edge.</p>
            </Drawer>
          </div>
        ),
      },
      Popover: {
        title: "Popover",
        description:
          "Contextual popup near trigger element. Lightweight popups that appear near their trigger element. Perfect for additional information, actions, or content that doesn't warrant a full modal.",
        detailedDescription:
          "The Popover component displays a lightweight popup near its trigger element. It's less intrusive than modals and perfect for contextual information or actions.",
        howToUse: `import Popover from 'chandu-ui-components/Popover';

<Popover
  content={<div>Popover content</div>}
  position="top"
>
  <Button>Trigger</Button>
</Popover>`,
        whereToUse:
          "Use for contextual menus, additional information, quick actions, and any lightweight popup that should appear near its trigger.",
        features: [
          "Near trigger positioning",
          "No backdrop overlay",
          "Click or hover triggers",
          "Arrow indicators",
        ],
        render: () => (
          <div className="demo-interactive">
            <Popover
              content={<div style={{ padding: "8px" }}>This is popover content</div>}
              position="top"
            >
              <Button variant="primary">Top Popover</Button>
            </Popover>
            <Popover
              content={<div style={{ padding: "8px" }}>Hover to see popover</div>}
              trigger="hover"
              style={{ marginLeft: "16px" }}
            >
              <Button variant="secondary">Hover Popover</Button>
            </Popover>
          </div>
        ),
      },
      Stepper: {
        title: "Stepper",
        description:
          "Step indicators with connectors for process visualization. Visual progress indicators showing steps in a process with connectors. Perfect for showing progress through steps.",
        detailedDescription:
          "The Stepper component displays step indicators with connectors showing progress through a multi-step process. It helps users understand their position in a workflow.",
        howToUse: `import Stepper from 'chandu-ui-components/Stepper';

<Stepper
  steps={[
    { label: "Step 1", description: "Description 1" },
    { label: "Step 2", description: "Description 2" }
  ]}
  activeStep={1}
/>`,
        whereToUse:
          "Use in multi-step forms, checkout processes, onboarding flows, wizard interfaces, and any process with sequential steps.",
        features: [
          "Step indicators",
          "Connector lines",
          "Horizontal and vertical",
          "Step number display",
        ],
        render: () => (
          <div className="demo-interactive">
            <Stepper
              steps={[
                { label: "Account", description: "Create account" },
                { label: "Profile", description: "Add details" },
                { label: "Review", description: "Confirm" },
              ]}
              activeStep={1}
            />
          </div>
        ),
      },
      Rating: {
        title: "Rating",
        description:
          "Collect user feedback with star ratings. Perfect for reviews, product ratings, and satisfaction surveys. Interactive and visually appealing.",
        detailedDescription:
          "The Rating component displays interactive star ratings for collecting user feedback. It supports hover effects, read-only mode, and customizable maximum values.",
        howToUse: `import Rating from 'chandu-ui-components/Rating';

<Rating
  value={rating}
  onChange={setRating}
  max={5}
/>

// Read-only
<Rating value={4} readOnly max={5} />`,
        whereToUse:
          "Use for product reviews, service ratings, feedback forms, satisfaction surveys, and anywhere you need to collect star-based ratings.",
        features: [
          "Interactive star ratings",
          "Hover effects",
          "Read-only mode",
          "Customizable max value",
        ],
        render: () => (
          <div className="demo-interactive">
            <div>
              <Rating
                value={ratingValue}
                onChange={setRatingValue}
                max={5}
              />
              <p style={{ marginTop: "8px" }}>Current rating: {ratingValue} / 5</p>
            </div>
          </div>
        ),
      },
      Slider: {
        title: "Slider",
        description:
          "Select values from a range with an intuitive slider. Perfect for filters, volume controls, and any numeric input where a visual range selection is more intuitive than typing.",
        detailedDescription:
          "The Slider component allows users to select values from a range using a visual slider. It's more intuitive than text input for numeric ranges.",
        howToUse: `import Slider from 'chandu-ui-components/Slider';

<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={1}
/>`,
        whereToUse:
          "Use for filters, volume controls, price ranges, size selectors, and any numeric input where visual selection is preferred over typing.",
        features: [
          "Customizable min/max values",
          "Step increments",
          "Value display",
          "Smooth interactions",
        ],
        render: () => (
          <div className="demo-interactive">
            <div>
              <label>Volume</label>
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                min={0}
                max={100}
              />
              <p>{sliderValue}</p>
            </div>
          </div>
        ),
      },
      Menu: {
        title: "Menu",
        description:
          "Dropdown menu for actions and options. Dropdown menu that appears below a trigger element. Perfect for context menus, user menus, and action lists.",
        detailedDescription:
          "The Menu component displays a dropdown menu with action items. It appears below a trigger element and supports icons and dividers for organization.",
        howToUse: `import Menu from 'chandu-ui-components/Menu';

<Menu
  items={[
    { label: "Edit", onClick: () => {} },
    { label: "Delete", onClick: () => {} }
  ]}
>
  <Button>Open Menu</Button>
</Menu>`,
        whereToUse:
          "Use for user menus, context menus, action lists, dropdown options, and anywhere you need a list of actions triggered by a button or element.",
        features: [
          "Dropdown menu",
          "Trigger-based display",
          "Icon support",
          "Divider support",
        ],
        render: () => (
          <div className="demo-interactive">
            <Menu
              trigger={<Button variant="primary">Open Menu</Button>}
              items={[
                { label: "Profile", icon: <HiUser />, onClick: () => {} },
                { label: "Settings", icon: <HiCog />, onClick: () => {} },
                { type: "divider" },
                { label: "Logout", icon: <HiLogout />, onClick: () => {} },
              ]}
            />
          </div>
        ),
      },
      Toast: {
        title: "Toast",
        description:
          "Top-positioned temporary messages with icons. System-level notifications that appear at the top of the screen. Perfect for system notifications, errors, and important updates.",
        detailedDescription:
          "The Toast component displays temporary notifications at the top of the screen. It auto-dismisses after a set duration and supports multiple variants with icons.",
        howToUse: `import { Toast, ToastContainer } from 'chandu-ui-components/Toast';

<ToastContainer>
  <Toast
    message="Operation successful!"
    variant="success"
    duration={3000}
  />
</ToastContainer>`,
        whereToUse:
          "Use for system notifications, success messages, error alerts, and any temporary notification that should appear at the top of the screen.",
        features: [
          "Top screen position",
          "Icon support",
          "Auto-dismiss timer",
          "Multiple variants",
        ],
        render: () => (
          <div className="demo-interactive" style={{ position: "relative", minHeight: "200px", overflow: "visible" }}>
            <div className="button-group">
              <Button
                variant="primary"
                onClick={() => {
                  setToasts([...toasts, { id: Date.now(), message: "Success!", variant: "success" }]);
                }}
              >
                Show Success Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setToasts([...toasts, { id: Date.now(), message: "Error occurred!", variant: "error" }]);
                }}
              >
                Show Error Toast
              </Button>
            </div>
            <ToastContainer 
              toasts={toasts} 
              onRemove={(id) => setToasts(toasts.filter((t) => t.id !== id))}
              position="top-right"
            />
          </div>
        ),
      },
      ToastContainer: {
        title: "Toast Container",
        description:
          "Container component for managing multiple toast notifications. Displays toasts in a fixed position with configurable placement. Perfect for system-wide notifications and message management.",
        detailedDescription:
          "The ToastContainer component manages and displays multiple toast notifications. It supports six position options (top-right, top-left, top-center, bottom-right, bottom-left, bottom-center) and automatically handles toast stacking.",
        howToUse: `import { ToastContainer, Toast } from 'chandu-ui-components/Toast';

const [toasts, setToasts] = useState([]);

// Add a toast
const addToast = (message, variant) => {
  setToasts([...toasts, { 
    id: Date.now(), 
    message, 
    variant 
  }]);
};

// Remove a toast
const removeToast = (id) => {
  setToasts(toasts.filter(t => t.id !== id));
};

<ToastContainer
  toasts={toasts}
  onRemove={removeToast}
  position="top-right"
/>`,
        whereToUse:
          "Use for managing multiple toast notifications system-wide, application-level notifications, and anywhere you need to display and manage multiple temporary messages.",
        features: [
          "Multiple toast management",
          "Six position options",
          "Automatic stacking",
          "Easy toast addition/removal",
        ],
        render: () => {
          const addToast = (message, variant) => {
            setToastContainerToasts([
              ...toastContainerToasts,
              { id: Date.now(), message, variant, duration: 3000 },
            ]);
          };

          const removeToast = (id) => {
            setToastContainerToasts(toastContainerToasts.filter((t) => t.id !== id));
          };

          return (
            <div className="demo-interactive" style={{ position: "relative", minHeight: "300px", overflow: "visible" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                <Button
                  variant="primary"
                  onClick={() => addToast("Success message!", "success")}
                >
                  Success Toast
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => addToast("Error occurred!", "error")}
                >
                  Error Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() => addToast("Warning message!", "warning")}
                >
                  Warning Toast
                </Button>
                <Button
                  variant="text"
                  onClick={() => addToast("Info message!", "info")}
                >
                  Info Toast
                </Button>
              </div>
              <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
                <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Toast Container Position: Top Right
                </p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                  Click buttons above to add toasts. They will appear in the top-right corner of this demo area.
                </p>
              </div>
              <ToastContainer
                toasts={toastContainerToasts}
                onRemove={removeToast}
                position="top-right"
              />
            </div>
          );
        },
      },
      Table: {
        title: "Table",
        description:
          "Basic table for simple data display. Display structured data in rows and columns. Perfect for simple data tables without advanced features.",
        detailedDescription:
          "The Table component displays structured data in rows and columns. It supports striped and bordered variants for better readability and is fully responsive.",
        howToUse: `import Table from 'chandu-ui-components/Table';

<Table
  columns={['Name', 'Email', 'Role']}
  data={[
    ['John Doe', 'john@example.com', 'Admin'],
    ['Jane Smith', 'jane@example.com', 'User']
  ]}
/>`,
        whereToUse:
          "Use for displaying structured data, user lists, product information, reports, and any tabular data that needs clear organization.",
        features: [
          "Basic table structure",
          "Striped and bordered variants",
          "Responsive design",
          "Simple data display",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "1.5rem", 
              width: "100%",
              alignItems: "start"
            }}>
              {/* Basic Table */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <h4 style={{ 
                  margin: "0 0 0.875rem 0", 
                  fontSize: "0.9375rem", 
                  fontWeight: 600, 
                  color: "var(--text-primary)",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--border-light)"
                }}>
                  Basic Table
                </h4>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Table
                    columns={["Name", "Role", "Status"]}
                    data={[
                      ["John Doe", "Developer", "Active"],
                      ["Jane Smith", "Designer", "Active"],
                      ["Bob Johnson", "Manager", "Inactive"],
                    ]}
                  />
                </div>
              </div>

              {/* Striped Table */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <h4 style={{ 
                  margin: "0 0 0.875rem 0", 
                  fontSize: "0.9375rem", 
                  fontWeight: 600, 
                  color: "var(--text-primary)",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--border-light)"
                }}>
                  Striped Table
                </h4>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Table
                    columns={["Product", "Price", "Stock"]}
                    data={[
                      ["Laptop", "$1,299", "45"],
                      ["Mouse", "$29", "120"],
                      ["Keyboard", "$79", "85"],
                      ["Monitor", "$399", "30"],
                      ["Headphones", "$149", "60"],
                    ]}
                    striped
                  />
                </div>
              </div>

              {/* Bordered Table */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <h4 style={{ 
                  margin: "0 0 0.875rem 0", 
                  fontSize: "0.9375rem", 
                  fontWeight: 600, 
                  color: "var(--text-primary)",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid var(--border-light)"
                }}>
                  Bordered Table
                </h4>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Table
                    columns={["ID", "Name", "Dept"]}
                    data={[
                      ["001", "John Doe", "Engineering"],
                      ["002", "Jane Smith", "Design"],
                      ["003", "Bob Johnson", "Marketing"],
                    ]}
                    bordered
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      Timeline: {
        title: "Timeline",
        description:
          "Visualize chronological events and processes with our Timeline component. Perfect for project tracking, activity feeds, and process visualization.",
        detailedDescription:
          "The Timeline component displays chronological events in a vertical layout. It supports custom icons, dates, and descriptions for each event.",
        howToUse: `import Timeline from 'chandu-ui-components/Timeline';

<Timeline
  items={[
    { date: "Jan 2024", title: "Event 1", description: "Description" },
    { date: "Feb 2024", title: "Event 2", description: "Description" }
  ]}
/>`,
        whereToUse:
          "Use for activity feeds, project timelines, order tracking, history displays, and any chronological event visualization.",
        features: [
          "Vertical timeline layout",
          "Custom icons and markers",
          "Date and description support",
          "Perfect for activity feeds",
        ],
        render: () => (
          <div className="demo-interactive">
            <Timeline
              items={[
                { date: "Jan 2024", title: "Project Started", description: "Initial setup completed" },
                { date: "Feb 2024", title: "First Milestone", description: "Core features implemented" },
                { date: "Mar 2024", title: "Launch", description: "Product released to market" },
              ]}
            />
          </div>
        ),
      },
      Carousel: {
        title: "Carousel",
        description:
          "Showcase images, content, or features with our Carousel component. Perfect for hero sections, testimonials, and product galleries. Smooth animations and intuitive navigation make browsing a pleasure.",
        detailedDescription:
          "The Carousel component displays a rotating set of items with smooth transitions. It includes navigation arrows, dot indicators, and optional auto-play functionality.",
        howToUse: `import Carousel from 'chandu-ui-components/Carousel';

<Carousel
  items={[
    { content: <div>Slide 1</div> },
    { content: <div>Slide 2</div> }
  ]}
  autoPlay
  showDots
/>`,
        whereToUse:
          "Use for image galleries, testimonials, feature showcases, hero sections, and any rotating content display.",
        features: [
          "Auto-play support",
          "Navigation arrows",
          "Dot indicators",
          "Smooth transitions",
        ],
        render: () => (
          <div className="demo-interactive">
            <Carousel
              showIndicators={false}
              items={[
                { 
                  content: (
                    <div style={{ 
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "400px"
                    }}>
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" 
                        alt="Mountain landscape"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        padding: "3rem 2rem 2rem",
                        color: "white"
                      }}>
                        <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Mountain Landscape</h3>
                        <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Beautiful mountain scenery with directional animations</p>
                      </div>
                    </div>
                  ) 
                },
                { 
                  content: (
                    <div style={{ 
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "400px"
                    }}>
                      <img 
                        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop" 
                        alt="Ocean view"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        padding: "3rem 2rem 2rem",
                        color: "white"
                      }}>
                        <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Ocean View</h3>
                        <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Stunning ocean waves with smooth transitions</p>
                      </div>
                    </div>
                  ) 
                },
                { 
                  content: (
                    <div style={{ 
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "400px"
                    }}>
                      <img 
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop" 
                        alt="Forest path"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        padding: "3rem 2rem 2rem",
                        color: "white"
                      }}>
                        <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Forest Path</h3>
                        <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Serene forest trail with professional design</p>
                      </div>
                    </div>
                  ) 
                },
                { 
                  content: (
                    <div style={{ 
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      minHeight: "400px"
                    }}>
                      <img 
                        src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop" 
                        alt="Desert sunset"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        padding: "3rem 2rem 2rem",
                        color: "white"
                      }}>
                        <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Desert Sunset</h3>
                        <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Breathtaking desert landscape at golden hour</p>
                      </div>
                    </div>
                  ) 
                },
              ]}
            />
          </div>
        ),
      },
      FileUpload: {
        title: "File Upload",
        description:
          "Make file uploads effortless with drag-and-drop support. Our FileUpload component provides a modern, intuitive interface for selecting and managing files.",
        detailedDescription:
          "The FileUpload component provides drag-and-drop file upload functionality. It supports multiple file selection, size validation, and file list management.",
        howToUse: `import FileUpload from 'chandu-ui-components/FileUpload';

<FileUpload
  onUpload={(files) => handleUpload(files)}
  maxSize={10 * 1024 * 1024}
  multiple
/>`,
        whereToUse:
          "Use in forms for document uploads, image galleries, content management systems, and anywhere users need to upload files.",
        features: [
          "Drag and drop support",
          "Multiple file selection",
          "File size validation",
          "File list management",
        ],
        render: () => (
          <div className="demo-interactive">
            <FileUpload
              onUpload={(files) => console.log("Uploaded:", files)}
              maxSize={10 * 1024 * 1024}
              accept="image/*"
            />
          </div>
        ),
      },
      Calendar: {
        title: "Calendar",
        description:
          "Select dates with ease using our Calendar component. Perfect for booking systems, date pickers, and scheduling interfaces. Clean, intuitive calendar that makes date selection simple and enjoyable.",
        detailedDescription:
          "The Calendar component provides a visual date picker with month navigation. It highlights today's date and supports min/max date constraints for validation.",
        howToUse: `import Calendar from 'chandu-ui-components/Calendar';

<Calendar
  selectedDate={selectedDate}
  onChange={setSelectedDate}
  minDate={new Date()}
/>`,
        whereToUse:
          "Use in booking systems, date pickers, scheduling interfaces, event calendars, and anywhere date selection is required.",
        features: [
          "Month navigation",
          "Date selection",
          "Today highlighting",
          "Min/max date constraints",
        ],
        render: () => (
          <div className="demo-interactive">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
        ),
      },
      Notification: {
        title: "Notification",
        description:
          "Card-style notifications for app-level messages. Display structured notifications with icon, title, and message in a card format. Perfect for app-wide notifications, system messages, and important updates.",
        detailedDescription:
          "The Notification component displays card-style notifications with icons, titles, and messages. It supports multiple variants and optional close functionality.",
        howToUse: `import Notification from 'chandu-ui-components/Notification';

<Notification
  variant="success"
  title="Success"
  message="Operation completed!"
  closable
  onClose={() => {}}
/>`,
        whereToUse:
          "Use for app-wide notifications, system messages, important updates, and any card-style notification that needs to stand out.",
        features: [
          "Card-style layout",
          "Icon, title, and message",
          "Four variants: success, info, warning, error",
          "Closable option",
        ],
        render: () => (
          <div className="demo-interactive">
            <Notification
              variant="success"
              title="Success"
              message="Operation completed successfully!"
              closable
            />
            <Notification
              variant="info"
              title="Info"
              message="This is an informational message."
              style={{ marginTop: "12px" }}
            />
            <Notification
              variant="warning"
              title="Warning"
              message="Please review before proceeding."
              style={{ marginTop: "12px" }}
            />
            <Notification
              variant="error"
              title="Error"
              message="An error occurred. Please try again."
              style={{ marginTop: "12px" }}
            />
          </div>
        ),
      },
      Backdrop: {
        title: "Backdrop",
        description:
          "Create focused overlays with our Backdrop component. Perfect for modals, drawers, and dialogs that need to draw user attention. Simple, elegant backdrop that enhances focus and prevents background interaction.",
        detailedDescription:
          "The Backdrop component creates a full-screen overlay that blocks background interaction. It's used with modals and drawers to focus user attention.",
        howToUse: `import Backdrop from 'chandu-ui-components/Backdrop';

<Backdrop
  open={isOpen}
  onClick={() => setIsOpen(false)}
/>`,
        whereToUse:
          "Use with modals, drawers, dialogs, and any overlay component that needs to block background interaction and focus user attention.",
        features: [
          "Full-screen overlay",
          "Smooth fade animation",
          "Click handler support",
          "Perfect for modals and drawers",
        ],
        render: () => (
          <div className="demo-interactive" style={{ position: "relative", minHeight: "300px", overflow: "visible" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              <Button variant="primary" onClick={() => setBackdropOpen(true)}>
                Show Backdrop
              </Button>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--text-secondary)", textAlign: "center" }}>
                Click the button above to show the backdrop overlay. Click anywhere on the backdrop to close it.
              </p>
            </div>
            {backdropOpen && (
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--bg-card)",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                zIndex: 999,
                minWidth: "250px",
                textAlign: "center",
                border: "1px solid var(--border-color)"
              }}>
                <h3 style={{ margin: "0 0 1rem 0", color: "var(--text-primary)" }}>Backdrop Active</h3>
                <p style={{ margin: "0 0 1.5rem 0", color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                  This content appears above the backdrop. Click outside to close.
                </p>
                <Button variant="primary" onClick={() => setBackdropOpen(false)}>
                  Close Backdrop
                </Button>
              </div>
            )}
            <Backdrop
              open={backdropOpen}
              onClick={() => setBackdropOpen(false)}
              preventScroll={false}
            />
          </div>
        ),
      },
      Snackbar: {
        title: "Snackbar",
        description:
          "Bottom-positioned temporary messages. Non-intrusive notifications that appear at the bottom of the screen. Perfect for quick feedback, success messages, and brief notifications.",
        detailedDescription:
          "The Snackbar component displays brief, non-intrusive messages at the bottom of the screen. It auto-dismisses after a set duration.",
        howToUse: `import Snackbar from 'chandu-ui-components/Snackbar';

<Snackbar
  message="Saved successfully!"
  variant="success"
  open={isOpen}
  onClose={() => setIsOpen(false)}
/>`,
        whereToUse:
          "Use for quick feedback messages, success confirmations, brief notifications, and any non-intrusive message that should appear at the bottom.",
        features: [
          "Bottom screen position",
          "Auto-dismiss timer",
          "Multiple variants",
          "Non-intrusive design",
        ],
        render: () => (
          <div className="demo-interactive" style={{ position: "relative", minHeight: "200px", overflow: "visible" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
              <Button
                variant="primary"
                onClick={() => {
                  setSnackbarVariant("success");
                  setSnackbarOpen(true);
                  setTimeout(() => setSnackbarOpen(false), 4000);
                }}
              >
                Success Snackbar
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setSnackbarVariant("error");
                  setSnackbarOpen(true);
                  setTimeout(() => setSnackbarOpen(false), 4000);
                }}
              >
                Error Snackbar
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSnackbarVariant("warning");
                  setSnackbarOpen(true);
                  setTimeout(() => setSnackbarOpen(false), 4000);
                }}
              >
                Warning Snackbar
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  setSnackbarVariant("info");
                  setSnackbarOpen(true);
                  setTimeout(() => setSnackbarOpen(false), 4000);
                }}
              >
                Info Snackbar
              </Button>
            </div>
            <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg-tertiary)", borderRadius: "8px" }}>
              <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Snackbar Position: Bottom Center
              </p>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                Click buttons above to show snackbars. They will appear at the bottom center of this demo area with icons and improved styling.
              </p>
            </div>
            <Snackbar
              open={snackbarOpen}
              message={`This is a ${snackbarVariant} snackbar message with improved styling and icons!`}
              variant={snackbarVariant}
              position="bottom-center"
              onClose={() => setSnackbarOpen(false)}
            />
          </div>
        ),
      },
      List: {
        title: "List",
        description:
          "Vertical list for displaying items with icons and actions. Display structured lists with icons, actions, and rich content. Perfect for navigation menus, settings panels, and content lists.",
        detailedDescription:
          "The List component displays items in a vertical list format. It supports icons, primary and secondary text, and action buttons for each item.",
        howToUse: `import List from 'chandu-ui-components/List';

<List
  variant="default"
  items={[
    { icon: <Icon />, primary: "Item 1", secondary: "Description" },
    { icon: <Icon />, primary: "Item 2", secondary: "Description" }
  ]}
/>

<List variant="outlined" items={[...]} />
<List variant="elevated" items={[...]} />`,
        whereToUse:
          "Use for navigation menus, settings panels, content lists, inbox displays, and any vertical list of items with icons and descriptions.",
        features: [
          "Vertical list format",
          "Icon support",
          "Primary and secondary text",
          "Action buttons",
          "Multiple variants: default, outlined, elevated",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "1.5rem", 
              width: "100%"
            }}>
              {/* Default Variant */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Default
                </h4>
            <List
                  variant="default"
              items={[
                {
                      icon: <HiInbox />,
                  primary: "Inbox",
                  secondary: "5 unread messages",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                },
                {
                      icon: <HiPaperAirplane />,
                  primary: "Sent",
                  secondary: "12 messages sent",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                    },
                  ]}
                />
              </div>

              {/* Outlined Variant */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Outlined
                </h4>
                <List
                  variant="outlined"
                  items={[
                {
                      icon: <HiInbox />,
                      primary: "Inbox",
                      secondary: "5 unread messages",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                    },
                    {
                      icon: <HiPaperAirplane />,
                      primary: "Sent",
                      secondary: "12 messages sent",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                },
              ]}
            />
              </div>

              {/* Elevated Variant */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: "0.875rem", 
                  fontWeight: 600, 
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  Elevated
                </h4>
                <List
                  variant="elevated"
                  items={[
                    {
                      icon: <HiInbox />,
                      primary: "Inbox",
                      secondary: "5 unread messages",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                    },
                    {
                      icon: <HiPaperAirplane />,
                      primary: "Sent",
                      secondary: "12 messages sent",
                      action: <HiChevronRight style={{ color: "var(--text-tertiary)" }} />,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        ),
      },
      Tag: {
        title: "Tag",
        description:
          "Removable tags for categorizing and labeling content. Label and categorize content with removable tags. Perfect for filters, categories, and metadata.",
        detailedDescription:
          "The Tag component displays removable labels for categorizing content. It supports multiple color variants and sizes with close button functionality.",
        howToUse: `import Tag from 'chandu-ui-components/Tag';

<Tag
  label="React"
  variant="primary"
  onClose={() => handleClose()}
/>

<Tag label="Vue" size="small" closable />`,
        whereToUse:
          "Use for content categorization, filters, labels, metadata display, and anywhere removable tags help organize information.",
        features: [
          "Removable tags",
          "Multiple color variants",
          "Three sizes available",
          "Close button support",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
              <Tag>Default</Tag>
              <Tag variant="primary">Primary</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
              <Tag variant="info">Info</Tag>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginTop: "1rem" }}>
              <Tag size="small">Small</Tag>
              <Tag size="medium">Medium</Tag>
              <Tag size="large">Large</Tag>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginTop: "1rem" }}>
              <Tag onClose={() => {}}>Closable</Tag>
              <Tag variant="primary" onClose={() => {}}>Closable Primary</Tag>
              <Tag variant="success" closable onClose={() => {}}>Closable Success</Tag>
            </div>
          </div>
        ),
      },
      SearchBar: {
        title: "Search Bar",
        description:
          "Simple search input with suggestions (no selection). Basic search functionality that triggers search events without selecting items. Perfect for search boxes, filters, and query inputs.",
        detailedDescription:
          "The SearchBar component provides a search input that triggers search events. It displays suggestions but doesn't select items, making it perfect for query-based searches.",
        howToUse: `import SearchBar from 'chandu-ui-components/SearchBar';

<SearchBar
  placeholder="Search..."
  onSearch={(query) => handleSearch(query)}
  suggestions={suggestions}
/>`,
        whereToUse:
          "Use for search boxes, filters, query inputs, and anywhere users need to enter search terms without selecting from a list.",
        features: [
          "Search event triggers",
          "Suggestions display",
          "No item selection",
          "Simple search input",
        ],
        render: () => (
          <div className="demo-interactive">
            <SearchBar
              placeholder="Search frameworks..."
              suggestions={["React", "Vue", "Angular", "Svelte"]}
              onSearch={(query) => console.log("Searching:", query)}
            />
          </div>
        ),
      },
      Navbar: {
        title: "Navbar",
        description:
          "Horizontal navigation bar for top navigation. Clean navigation bar component that stays at the top of the page. Perfect for headers, dashboards, and application navigation.",
        detailedDescription:
          "The Navbar component provides horizontal top navigation with logo and menu items. It includes a mobile hamburger menu and is fully responsive.",
        howToUse: `import Navbar from 'chandu-ui-components/Navbar';

<Navbar
  logo="My App"
  items={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }
  ]}
/>`,
        whereToUse:
          "Use for top navigation in dashboards, applications, websites, and anywhere horizontal navigation is needed at the top of the page.",
        features: [
          "Horizontal top navigation",
          "Logo and menu items",
          "Mobile hamburger menu",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive demo-layout-container">
            <div className="demo-navbar-wrapper">
              <Navbar
                logo="Chandu UI"
                items={[
                  { label: "Home", href: "#" },
                  { label: "About", href: "#" },
                  { label: "Services", href: "#" },
                  { label: "Features", href: "#" },
                ]}
              />
            </div>
          </div>
        ),
      },
      Sidebar: {
        title: "Sidebar",
        description:
          "Slide-out side panel for navigation and content. Side panel that slides in from left or right for navigation and additional content. Perfect for mobile menus, settings panels, and secondary navigation.",
        detailedDescription:
          "The Sidebar component displays a slide-out panel from the left or right edge. It includes a backdrop overlay and smooth slide animations for better UX.",
        howToUse: `import Sidebar from 'chandu-ui-components/Sidebar';

<Sidebar
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="left"
>
  Sidebar content here
</Sidebar>`,
        whereToUse:
          "Use for mobile navigation, settings panels, secondary navigation, filters, and any side panel that should slide in from edges.",
        features: [
          "Side slide-out panel",
          "Left or right positioning",
          "Backdrop overlay",
          "Smooth slide animations",
        ],
        render: () => (
          <div className="demo-interactive demo-sidebar-container">
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <Button 
                variant="primary" 
                onClick={() => {
                  setDemoSidebarPosition("left");
                  setDemoSidebarOpen(true);
                }}
              >
                Open Left Sidebar
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => {
                  setDemoSidebarPosition("right");
                  setDemoSidebarOpen(true);
                }}
              >
                Open Right Sidebar
              </Button>
            </div>
            <Sidebar
              open={demoSidebarOpen}
              onClose={() => setDemoSidebarOpen(false)}
              position={demoSidebarPosition}
              className="demo-sidebar"
            >
              <div style={{ padding: "20px" }}>
                <h3 style={{ marginTop: 0, marginBottom: "16px", color: "var(--text-primary)" }}>
                  Sidebar Content
                </h3>
                <p style={{ marginBottom: "12px", color: "var(--text-secondary)" }}>
                  This is a slide-out sidebar component positioned on the {demoSidebarPosition}.
                </p>
                <ul style={{ paddingLeft: "20px", color: "var(--text-secondary)" }}>
                  <li>Navigation item 1</li>
                  <li>Navigation item 2</li>
                  <li>Navigation item 3</li>
                </ul>
                <Button 
                  variant="outline" 
                  onClick={() => setDemoSidebarOpen(false)}
                  style={{ marginTop: "20px", width: "100%" }}
                >
                  Close Sidebar
                </Button>
              </div>
            </Sidebar>
          </div>
        ),
      },
      ImageGallery: {
        title: "Image Gallery",
        description:
          "Beautiful image gallery with lightbox view. Perfect for portfolios, product showcases, and photo galleries. Click any image to view in full-screen lightbox mode.",
        detailedDescription:
          "The ImageGallery component displays images in a responsive grid with a full-screen lightbox view. It includes navigation arrows and thumbnail support.",
        howToUse: `import ImageGallery from 'chandu-ui-components/ImageGallery';

<ImageGallery
  images={[
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" }
  ]}
/>`,
        whereToUse:
          "Use for portfolios, product showcases, photo galleries, image collections, and anywhere you need to display multiple images with lightbox functionality.",
        features: [
          "Grid layout with responsive design",
          "Full-screen lightbox view",
          "Navigation arrows",
          "Thumbnail navigation",
        ],
        render: () => (
          <div className="demo-interactive">
            <ImageGallery
              images={[
                { 
                  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", 
                  alt: "Beautiful mountain landscape" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop", 
                  alt: "Ocean waves at sunset" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop", 
                  alt: "Forest path in nature" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop", 
                  alt: "Desert landscape with dunes" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop", 
                  alt: "Misty mountain range" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop", 
                  alt: "Tropical beach paradise" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop", 
                  alt: "Northern lights in the sky" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop", 
                  alt: "Serene lake reflection" 
                },
                { 
                  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", 
                  alt: "Snow-capped mountain peaks" 
                },
              ]}
            />
          </div>
        ),
      },
      VideoPlayer: {
        title: "Video Player",
        description:
          "Custom video player with playback controls. Perfect for media websites, tutorials, and content platforms. Clean interface with play, pause, and volume controls.",
        detailedDescription:
          "The VideoPlayer component provides a custom video player with playback controls. It includes play, pause, volume, and mute functionality with poster image support.",
        howToUse: `import VideoPlayer from 'chandu-ui-components/VideoPlayer';

<VideoPlayer
  src="/video.mp4"
  poster="/poster.jpg"
/>`,
        whereToUse:
          "Use for media websites, tutorials, content platforms, video galleries, and anywhere custom video playback is needed.",
        features: [
          "Play/pause controls",
          "Volume control",
          "Mute/unmute toggle",
          "Poster image support",
        ],
        render: () => (
          <div className="demo-interactive">
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop"
            />
          </div>
        ),
      },
      AudioPlayer: {
        title: "Audio Player",
        description:
          "Professional audio player with progress tracking. Perfect for music apps, podcasts, and audio content. Shows track information and playback controls.",
        detailedDescription:
          "The AudioPlayer component provides audio playback with progress tracking. It displays track information and includes play, pause, and volume controls.",
        howToUse: `import AudioPlayer from 'chandu-ui-components/AudioPlayer';

<AudioPlayer
  src="/audio.mp3"
  title="Track Title"
  artist="Artist Name"
/>`,
        whereToUse:
          "Use for music apps, podcasts, audio content, media players, and anywhere audio playback with controls is needed.",
        features: [
          "Play/pause controls",
          "Progress bar with seeking",
          "Volume control",
          "Track information display",
        ],
        render: () => (
          <div className="demo-interactive">
            <AudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              title="Sample Audio Track"
              artist="Chandu UI"
              cover="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
            />
          </div>
        ),
      },
      Chart: {
        title: "Chart",
        description:
          "Visualize data with beautiful charts. Support for line, bar, and pie charts. Perfect for dashboards, analytics, and data visualization. Clean and professional design.",
        detailedDescription:
          "The Chart component visualizes data with multiple chart types including line, bar, and pie charts. It includes interactive legends and customizable colors.",
        howToUse: `import Chart from 'chandu-ui-components/Chart';

<Chart
  type="line"
  data={{
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{ label: "Sales", data: [10, 20, 30] }]
  }}
/>`,
        whereToUse:
          "Use in dashboards, analytics pages, data visualization, reports, and anywhere you need to display data in chart format.",
        features: [
          "Multiple chart types: line, bar, pie",
          "Interactive legends",
          "Responsive design",
          "Customizable colors",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: "1.5rem",
              width: "100%"
            }}>
            <Chart
              type="line"
                title="Sales Trend"
              data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  {
                      label: "Sales",
                      data: [45, 52, 48, 61, 55, 67],
                    },
                  ],
                }}
              />
              <Chart
                type="bar"
                title="Revenue by Month"
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Revenue",
                      data: [35, 42, 38, 51, 45, 58],
                    },
                  ],
                }}
              />
              <Chart
                type="pie"
                title="Market Share"
                data={{
                  labels: ["Product A", "Product B", "Product C", "Product D"],
                  datasets: [
                    {
                      label: "Share",
                      data: [35, 25, 20, 20],
                  },
                ],
              }}
            />
            </div>
          </div>
        ),
      },
      DataTable: {
        title: "Data Table",
        description:
          "Advanced table with search, sort, and filter. Full-featured data table with built-in search, column sorting, and filtering. Perfect for admin panels, dashboards, and data-heavy applications.",
        detailedDescription:
          "The DataTable component provides an advanced table with built-in search, sorting, and filtering. It's perfect for displaying large datasets with interactive features.",
        howToUse: `import DataTable from 'chandu-ui-components/DataTable';

<DataTable
  columns={['Name', 'Email', 'Role']}
  data={[
    { Name: 'John', Email: 'john@example.com', Role: 'Admin' }
  ]}
  searchable
  sortable
/>`,
        whereToUse:
          "Use in admin panels, dashboards, data-heavy applications, user management, and anywhere you need advanced table functionality with search and sort.",
        features: [
          "Built-in search bar",
          "Column sorting",
          "Data filtering",
          "Empty state handling",
        ],
        render: () => (
          <div className="demo-interactive">
            <DataTable
              columns={["Name", "Email", "Role"]}
              data={[
                { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
                { Name: "Jane Smith", Email: "jane@example.com", Role: "User" },
                { Name: "Bob Johnson", Email: "bob@example.com", Role: "Editor" },
              ]}
              searchable
              sortable
            />
          </div>
        ),
      },
      Form: {
        title: "Form",
        description:
          "Form wrapper component for building complex forms. Perfect for contact forms, registration, and data entry. Handles form submission and validation.",
        detailedDescription:
          "The Form component provides a wrapper for building complex forms with submission handling and validation support. It's accessible and flexible.",
        howToUse: `import Form from 'chandu-ui-components/Form';

<Form onSubmit={(data) => handleSubmit(data)}>
  <Input label="Name" required />
  <Button type="submit">Submit</Button>
</Form>`,
        whereToUse:
          "Use for contact forms, registration forms, data entry forms, and any form that needs submission handling and validation.",
        features: [
          "Form submission handling",
          "Validation support",
          "Flexible layout",
          "Accessible by default",
        ],
        render: () => (
          <div className="demo-interactive">
            <Form
              onSubmit={(data) => {
                console.log("Form submitted:", data);
                alert("Form submitted!");
              }}
            >
              <Input label="Name" placeholder="Enter your name" required />
              <Input label="Email" type="email" placeholder="Enter your email" required style={{ marginTop: "16px" }} />
              <Button type="submit" variant="primary" style={{ marginTop: "16px" }}>
                Submit
              </Button>
            </Form>
          </div>
        ),
      },
      Select: {
        title: "Select",
        description:
          "Enhanced select dropdown with custom styling. Perfect for forms and data selection. Smooth animations and keyboard navigation support.",
        detailedDescription:
          "The Select component provides an enhanced dropdown with custom styling. It includes smooth animations, keyboard navigation, and disabled state support.",
        howToUse: `import Select from 'chandu-ui-components/Select';

<Select
  options={['Option 1', 'Option 2']}
  value={value}
  onChange={setValue}
  placeholder="Select..."
/>`,
        whereToUse:
          "Use in forms for dropdown selection, data selection, filters, and anywhere you need a styled select dropdown with enhanced features.",
        features: [
          "Custom dropdown styling",
          "Selected state indicator",
          "Keyboard navigation",
          "Disabled state support",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
              <Select
                options={["Option 1", "Option 2", "Option 3"]}
                value={dropdownValue}
                onChange={setDropdownValue}
                placeholder="Select an option..."
              />
            </div>
          </div>
        ),
      },
      DateRangePicker: {
        title: "Date Range Picker",
        description:
          "Select date ranges with ease. Perfect for booking systems, analytics dashboards, and date filtering. Clean interface for start and end date selection.",
        detailedDescription:
          "The DateRangePicker component allows users to select a range of dates. It includes date validation and formatted display with calendar integration.",
        howToUse: `import DateRangePicker from 'chandu-ui-components/DateRangePicker';

<DateRangePicker
  value={dateRange}
  onChange={setDateRange}
  placeholder="Select date range"
/>`,
        whereToUse:
          "Use in booking systems, analytics dashboards, date filters, reporting tools, and anywhere date range selection is needed.",
        features: [
          "Start and end date selection",
          "Date validation",
          "Formatted display",
          "Calendar integration",
        ],
        render: () => (
          <div className="demo-interactive" style={{ overflow: "visible" }}>
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <DateRangePicker
                value={dateRange}
                onChange={setDateRange}
                placeholder="Select date range"
              />
            </div>
          </div>
        ),
      },
      TimePicker: {
        title: "Time Picker",
        description:
          "Select time with hour and minute selectors. Perfect for scheduling, booking, and time-based applications. Clean and intuitive interface.",
        detailedDescription:
          "The TimePicker component provides hour and minute selection for time input. It supports 24-hour format and displays formatted time.",
        howToUse: `import TimePicker from 'chandu-ui-components/TimePicker';

<TimePicker
  value={time}
  onChange={setTime}
  placeholder="Select time"
/>`,
        whereToUse:
          "Use in scheduling systems, booking applications, time-based forms, and anywhere time selection is required.",
        features: [
          "Hour and minute selection",
          "24-hour format",
          "Formatted time display",
          "Easy to use interface",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}>
              <TimePicker
                value={timeValue}
                onChange={setTimeValue}
                placeholder="Select time"
              />
            </div>
          </div>
        ),
      },
      ColorPicker: {
        title: "Color Picker",
        description:
          "Select colors with preset options and custom color input. Perfect for theme customization, design tools, and color selection. Visual color preview.",
        detailedDescription:
          "The ColorPicker component allows users to select colors from presets or input custom hex values. It includes visual color preview.",
        howToUse: `import ColorPicker from 'chandu-ui-components/ColorPicker';

<ColorPicker
  value={color}
  onChange={setColor}
/>`,
        whereToUse:
          "Use for theme customization, design tools, color selection in forms, and anywhere users need to pick colors.",
        features: [
          "Preset color options",
          "Custom color input",
          "Hex color support",
          "Visual color preview",
        ],
        render: () => (
          <div className="demo-interactive">
            <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
              <ColorPicker
                value={selectedColor}
                onChange={setSelectedColor}
              />
              <p style={{ marginTop: "16px", textAlign: "center" }}>Selected: {selectedColor}</p>
            </div>
          </div>
        ),
      },
      RichTextEditor: {
        title: "Rich Text Editor",
        description:
          "WYSIWYG editor for rich text content. Perfect for content management, blogs, and text editing. Format text with bold, italic, lists, and more.",
        detailedDescription:
          "The RichTextEditor component provides a WYSIWYG editor for rich text content. It includes formatting options like bold, italic, and lists with a toolbar.",
        howToUse: `import RichTextEditor from 'chandu-ui-components/RichTextEditor';

<RichTextEditor
  value={content}
  onChange={setContent}
/>`,
        whereToUse:
          "Use in content management systems, blogs, text editing interfaces, email composers, and anywhere rich text editing is needed.",
        features: [
          "Bold, italic, underline formatting",
          "Bullet and numbered lists",
          "ContentEditable support",
          "Toolbar with formatting options",
        ],
        render: () => (
          <div className="demo-interactive">
            <RichTextEditor
              value={richTextValue}
              onChange={setRichTextValue}
            />
          </div>
        ),
      },
      CodeEditor: {
        title: "Code Editor",
        description:
          "Code editor with line numbers and syntax highlighting support. Perfect for code snippets, documentation, and code examples. Dark theme optimized for coding.",
        detailedDescription:
          "The CodeEditor component provides a code editing interface with line numbers and syntax highlighting. It uses a dark theme optimized for coding.",
        howToUse: `import CodeEditor from 'chandu-ui-components/CodeEditor';

<CodeEditor
  value={code}
  onChange={setCode}
  language="javascript"
/>`,
        whereToUse:
          "Use for code snippets, documentation, code examples, code playgrounds, and anywhere code editing with syntax highlighting is needed.",
        features: [
          "Line numbers",
          "Monospace font",
          "Dark theme",
          "Scroll synchronization",
        ],
        render: () => (
          <div className="demo-interactive">
            <CodeEditor
              value={codeValue}
              onChange={setCodeValue}
              language="javascript"
            />
          </div>
        ),
      },
      TreeView: {
        title: "Tree View",
        description:
          "Hierarchical tree structure for nested data. Perfect for file browsers, navigation menus, and organizational structures. Expandable and collapsible nodes.",
        detailedDescription:
          "The TreeView component displays hierarchical data in a tree structure. It supports expandable/collapsible nodes and nested structures.",
        howToUse: `import TreeView from 'chandu-ui-components/TreeView';

<TreeView
  data={[
    { label: "Folder", children: [{ label: "File" }] }
  ]}
/>`,
        whereToUse:
          "Use for file browsers, navigation menus, organizational structures, nested data display, and anywhere hierarchical data needs to be shown.",
        features: [
          "Expandable/collapsible nodes",
          "Folder and file icons",
          "Nested structure support",
          "Click handlers for selection",
        ],
        render: () => (
          <div className="demo-interactive">
            <TreeView
              data={[
                {
                  id: "documents",
                  label: "Documents",
                  children: [
                    { id: "file1", label: "File1.txt" },
                    { id: "file2", label: "File2.txt" },
                    {
                      id: "subfolder",
                      label: "Subfolder",
                      children: [
                        { id: "file3", label: "File3.txt" },
                        { id: "file4", label: "File4.txt" },
                      ],
                    },
                  ],
                },
                {
                  id: "images",
                  label: "Images",
                  children: [
                    { id: "photo1", label: "Photo1.jpg" },
                    { id: "photo2", label: "Photo2.jpg" },
                  ],
                },
                {
                  id: "videos",
                  label: "Videos",
                  children: [
                    { id: "video1", label: "Video1.mp4" },
                    { id: "video2", label: "Video2.mp4" },
                  ],
                },
              ]}
            />
          </div>
        ),
      },
      DragDrop: {
        title: "Drag & Drop",
        description:
          "Drag and drop interface for reordering items. Perfect for lists, kanban boards, and sortable content. Visual feedback during dragging.",
        detailedDescription:
          "The DragDrop component provides drag and drop functionality for reordering items. It includes visual feedback and drop zone highlighting.",
        howToUse: `import DragDrop from 'chandu-ui-components/DragDrop';

<DragDrop
  items={items}
  onReorder={setItems}
/>`,
        whereToUse:
          "Use for sortable lists, kanban boards, task management, reorderable content, and anywhere drag and drop reordering is needed.",
        features: [
          "Drag and drop reordering",
          "Visual drag feedback",
          "Drop zone highlighting",
          "Custom item rendering",
        ],
        render: () => (
          <div className="demo-interactive">
            <DragDrop
              items={dragItems}
              onReorder={setDragItems}
            />
          </div>
        ),
      },
      Wizard: {
        title: "Wizard",
        description:
          "Multi-step form wizard with step content display. Complete wizard component with step indicators, content display, and navigation. Perfect for multi-step forms, onboarding, and complex workflows.",
        detailedDescription:
          "The Wizard component provides a multi-step form interface with step indicators and navigation. It tracks progress and displays step content.",
        howToUse: `import Wizard from 'chandu-ui-components/Wizard';

<Wizard
  steps={[
    { title: "Step 1", content: "Content 1" },
    { title: "Step 2", content: "Content 2" }
  ]}
  activeStep={step}
  onStepChange={setStep}
/>`,
        whereToUse:
          "Use for multi-step forms, onboarding flows, complex workflows, setup wizards, and any process that requires step-by-step completion.",
        features: [
          "Step content display",
          "Step navigation",
          "Progress tracking",
          "Form wizard functionality",
        ],
        render: () => (
          <div className="demo-interactive">
            <Wizard
              steps={[
                { title: "Account Setup", description: "Create your account", content: "Enter your email and password to get started." },
                { title: "Profile Info", description: "Tell us about yourself", content: "Add your profile information." },
                { title: "Review", description: "Confirm details", content: "Review and confirm your information." },
              ]}
              activeStep={wizardStep}
              onStepChange={setWizardStep}
            />
          </div>
        ),
      },
      Tour: {
        title: "Tour",
        description:
          "User onboarding tour with step-by-step guidance. Perfect for introducing new features, product tours, and user guidance. Highlights elements and provides instructions.",
        detailedDescription:
          "The Tour component provides step-by-step user guidance with element highlighting. It includes progress indicators and navigation controls.",
        howToUse: `import Tour from 'chandu-ui-components/Tour';

<Tour
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  steps={[
    { target: ".element", title: "Title", content: "Content" }
  ]}
/>`,
        whereToUse:
          "Use for user onboarding, product tours, feature introductions, user guidance, and anywhere step-by-step instructions are needed.",
        features: [
          "Step-by-step guidance",
          "Element highlighting",
          "Progress indicators",
          "Next/Previous navigation",
        ],
        render: () => (
          <div className="demo-interactive" style={{ position: "relative", minHeight: "300px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
              <Button 
                variant="primary" 
                onClick={() => setTourOpen(true)}
                id="tour-start-button"
              >
              Start Tour
            </Button>
              <div 
                id="tour-feature-1"
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "12px",
                  maxWidth: "400px",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.125rem" }}>Feature 1</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  This is the first feature you'll learn about.
                </p>
              </div>
              <div 
                id="tour-feature-2"
                style={{
                  padding: "1.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "12px",
                  maxWidth: "400px",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.125rem" }}>Feature 2</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  This is the second feature in our tour.
                </p>
              </div>
            </div>
            <Tour
              isOpen={tourOpen}
              onClose={() => setTourOpen(false)}
              onComplete={() => {
                setTourOpen(false);
                console.log("Tour completed!");
              }}
              steps={[
                {
                  target: "#tour-start-button",
                  title: "Welcome to the Tour",
                  content: "Click the 'Start Tour' button to begin exploring the features. This tour will guide you through the key components.",
                },
                {
                  target: "#tour-feature-1",
                  title: "Feature 1",
                  content: "This is the first feature. It demonstrates how the tour highlights specific elements on the page.",
                },
                {
                  target: "#tour-feature-2",
                  title: "Feature 2",
                  content: "This is the second feature. Notice how the tour automatically positions itself based on available space.",
                },
              ]}
            />
          </div>
        ),
      },
      Chat: {
        title: "Chat",
        description:
          "Chat interface component for messaging. Perfect for support systems, messaging apps, and communication interfaces. User and other message styling with timestamps.",
        detailedDescription:
          "The Chat component provides a messaging interface with user and other message styling. It includes avatar support, timestamps, and message input.",
        howToUse: `import Chat from 'chandu-ui-components/Chat';

<Chat
  messages={messages}
  onSend={(message) => handleSend(message)}
/>`,
        whereToUse:
          "Use for support systems, messaging apps, chat interfaces, communication platforms, and anywhere real-time messaging is needed.",
        features: [
          "User and other message styling",
          "Avatar support",
          "Timestamps",
          "Message input with send button",
        ],
        render: () => (
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
        ),
      },
      Header: {
        title: "Header",
        description:
          "Navigation header component for top-level navigation. Clean and professional header with logo, menu items, and mobile support.",
        detailedDescription:
          "The Header component serves as the primary navigation element for your website or application. It provides a fixed position navigation bar that stays visible as users scroll, ensuring easy access to key sections and features. The component includes a logo area for branding, a flexible menu system for navigation items, and a responsive mobile menu that transforms into a hamburger menu on smaller screens. Built with glassmorphism effects and smooth animations, it creates a modern, professional appearance. The header automatically adjusts its styling when scrolled, providing visual feedback and maintaining usability. It supports custom menu items, optional action buttons, and full mobile responsiveness with touch-friendly interactions.",
        howToUse: `import Header from 'chandu-ui-components/Header';

// Basic usage
<Header logo="My App" />

// With menu items
<Header
  logo="My App"
  menuItems={[
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ]}
/>

// With view components button
<Header
  logo="My App"
  menuItems={[...]}
  viewComponentsButton={{
    label: "View Components",
    onClick: () => navigate("/components")
  }}
/>

// With custom click handler
<Header
  logo="My App"
  menuItems={[...]}
  onMenuItemClick={(item) => console.log(item)}
/>`,
        whereToUse:
          "The Header component is essential for any website or web application requiring top-level navigation. Use it on landing pages to provide easy access to different sections like Home, About, Services, and Contact. It's perfect for SaaS applications, corporate websites, portfolio sites, and documentation pages. The fixed positioning makes it ideal for long-scrolling pages where users need constant access to navigation. The mobile-responsive design ensures it works seamlessly on all devices. Use the optional action button for important CTAs like 'Sign Up', 'Get Started', or 'View Components'. The header is typically placed at the top of every page in your application for consistent navigation.",
        features: [
          "Logo display",
          "Menu items",
          "Mobile responsive",
          "Customizable styling",
        ],
        render: () => (
          <div className="demo-interactive demo-layout-container">
            <div className="demo-header-wrapper">
              <Header 
                logo="Chandu UI"
                menuItems={[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Features", href: "#features" },
                ]}
              />
            </div>
          </div>
        ),
      },
      Footer: {
        title: "Footer",
        description:
          "Footer component for website footers. Multi-column layout with links, social media, and copyright information.",
        detailedDescription:
          "The Footer component provides a comprehensive bottom section for your website, containing essential links, contact information, social media connections, and legal information. It features a multi-column grid layout that organizes content into logical sections such as company information, resources, and legal links. The component includes built-in social media icon support for platforms like GitHub, Twitter, and LinkedIn, making it easy to connect your brand with social networks. The footer automatically displays the current year for copyright information and provides a clean, professional appearance with gradient backgrounds and subtle animations. It's fully responsive, adapting from a multi-column layout on desktop to a single-column stack on mobile devices.",
        howToUse: `import Footer from 'chandu-ui-components/Footer';

// Basic usage (uses default content)
<Footer />

// The Footer component is self-contained and doesn't require props
// It automatically includes:
// - Logo and company description
// - Contact email
// - Social media links
// - Resource links
// - Company links
// - Copyright and legal links`,
        whereToUse:
          "The Footer component should be placed at the bottom of every page on your website or application. It's essential for corporate websites, SaaS platforms, portfolio sites, and any professional web presence. Use it to provide quick access to important links like documentation, support, privacy policy, and terms of service. The footer is particularly important for e-commerce sites, where users expect to find shipping information, return policies, and customer service contacts. It's also crucial for content-heavy sites like blogs or documentation, where users scroll to the bottom and need easy navigation options. The social media links help build your online presence and community engagement. Place the footer after all main content but before closing body tags.",
        features: [
          "Multi-column layout",
          "Social media links",
          "Copyright information",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive demo-layout-container">
            <div className="demo-footer-wrapper">
              <Footer />
            </div>
          </div>
        ),
      },
      Hero: {
        title: "Hero",
        description:
          "Hero section component for landing pages. Large, impactful hero sections with title, subtitle, description, and call-to-action buttons.",
        detailedDescription:
          "The Hero component creates large, impactful landing page sections with title, subtitle, description, and call-to-action buttons. It supports background images.",
        howToUse: `import Hero from 'chandu-ui-components/Hero';

<Hero
  title="Welcome"
  subtitle="Subtitle"
  description="Description"
  buttons={[
    { label: "Get Started", onClick: () => {}, variant: "primary" }
  ]}
/>`,
        whereToUse:
          "Use for landing pages, homepage hero sections, marketing pages, and anywhere you need a large, impactful introduction section.",
        features: [
          "Title and subtitle",
          "Description text",
          "Call-to-action buttons",
          "Background image support",
        ],
        render: () => (
          <div className="demo-interactive">
            <Hero
              title="Welcome to Our App"
              subtitle="Build Amazing Things"
              description="This is a hero section component"
              buttons={[
                { label: "Get Started", onClick: () => {}, variant: "primary" },
                { label: "Learn More", onClick: () => {}, variant: "secondary" },
              ]}
            />
          </div>
        ),
      },
      Features: {
        title: "Features",
        description:
          "Features section component for showcasing product features. Grid layout with icons, titles, and descriptions.",
        detailedDescription:
          "The Features component displays product features in a responsive grid layout. It includes icons, titles, and descriptions for each feature.",
        howToUse: `import Features from 'chandu-ui-components/Features';

<Features />`,
        whereToUse:
          "Use for showcasing product features, service highlights, key benefits, and anywhere you need to display features in a grid layout.",
        features: [
          "Grid layout",
          "Icon support",
          "Feature cards",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive">
            <Features />
          </div>
        ),
      },
      About: {
        title: "About",
        description:
          "About section component for company or product information. Clean layout with text content and optional images.",
        detailedDescription:
          "The About component displays company or product information in a clean layout. It supports text content and optional images with flexible layouts.",
        howToUse: `import About from 'chandu-ui-components/About';

<About />`,
        whereToUse:
          "Use for about sections, company information, product descriptions, and anywhere you need to display informational content with images.",
        features: [
          "Text content",
          "Image support",
          "Flexible layout",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive">
            <About />
          </div>
        ),
      },
      Services: {
        title: "Services",
        description:
          "Services section component for showcasing services. Grid or list layout with service cards.",
        detailedDescription:
          "The Services component displays services in a grid or list layout with service cards. It includes icon support and responsive design.",
        howToUse: `import Services from 'chandu-ui-components/Services';

<Services />`,
        whereToUse:
          "Use for showcasing services, offerings, solutions, and anywhere you need to display services in a card-based layout.",
        features: [
          "Service cards",
          "Grid layout",
          "Icon support",
          "Responsive design",
        ],
        render: () => (
          <div className="demo-interactive">
            <Services />
          </div>
        ),
      },
      CodeViewer: {
        title: "Code Viewer",
        description:
          "Code viewer component for displaying code snippets. Syntax highlighting and copy functionality.",
        detailedDescription:
          "The CodeViewer component displays code snippets with syntax highlighting. It includes copy to clipboard functionality and supports multiple languages.",
        howToUse: `import CodeViewer from 'chandu-ui-components/CodeViewer';

<CodeViewer
  code="const example = 'code';"
  language="javascript"
/>`,
        whereToUse:
          "Use for displaying code snippets, documentation examples, code samples, and anywhere read-only code display with syntax highlighting is needed.",
        features: [
          "Syntax highlighting",
          "Copy to clipboard",
          "Multiple language support",
          "Read-only display",
        ],
        render: () => (
          <div className="demo-interactive">
            <p>Code Viewer is used to display code. Click "View Code" button to see it in action.</p>
          </div>
        ),
      },
    };
    return demos[selectedComponent] || null;
  };

  const componentDemo = getComponentDemo();

  return (
    <div className="components-page">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`components-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}
      >
        <div className="sidebar-header">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
            <button
              className="back-to-home-btn"
              onClick={() => navigate("/")}
              aria-label="Back to home"
              title="Back to Home"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="sidebar-title">Components</h2>
          </div>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          {Object.entries(COMPONENT_GROUPS).map(([groupName, components]) => (
            <div key={groupName} className="sidebar-group">
              <h3 className="sidebar-group-title">{groupName}</h3>
              <ul className="sidebar-list">
                {components.map((component) => (
                  <li key={component}>
                    <button
                      className={`sidebar-item ${
                        selectedComponent === component ? "active" : ""
                      }`}
                      onClick={() => handleComponentSelect(component)}
                    >
                      {component}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="components-main">
        <div className="component-detail">
          {selectedComponent && (
            <>
              <div className="component-detail-header">
                <h1 className="component-detail-title">{selectedComponent}</h1>
                <div className="component-header-buttons">
                  <button
                    className="view-code-btn"
                    onClick={handleViewCode}
                    disabled={!componentCode}
                  >
                    View Code
                  </button>
                  <button
                    className="view-documentation-btn"
                    onClick={() => navigate(`/docs?component=${selectedComponent}`)}
                  >
                    View Documentation
                  </button>
                </div>
              </div>

              <div className="component-detail-content">
                {componentDemo ? (
                  <div className="component-demo-header-layout">
                    {/* Component demo first */}
                    <div className="component-demo-visual-header">
                      {componentDemo.render()}
                    </div>
                    {/* Description and features below */}
                    <div className="component-demo-content-header">
                      {/* Description Section */}
                      <div className="component-section">
                        <h2 className="component-section-title">Description</h2>
                        <p className="component-demo-story">
                          {componentDemo.detailedDescription || componentDemo.description}
                        </p>
                      </div>

                      {/* How to Use Section */}
                      {componentDemo.howToUse && (
                        <div className="component-section">
                          <h2 className="component-section-title">How to Use</h2>
                          <div className="code-example">
                            <pre>
                              <code>{componentDemo.howToUse}</code>
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* Where to Use Section */}
                      {componentDemo.whereToUse && (
                        <div className="component-section">
                          <h2 className="component-section-title">Where to Use</h2>
                          <p className="component-where-to-use">
                            {componentDemo.whereToUse}
                          </p>
                        </div>
                      )}

                      {/* Key Features Section */}
                      <div className="component-section">
                        <h2 className="component-section-title">Key Features</h2>
                        <ul className="component-demo-features">
                          {componentDemo.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : componentCode ? (
                  <div className="component-info">
                    <div className="component-description">
                      <h2>Overview</h2>
                      <p>
                        The <strong>{selectedComponent}</strong> component is
                        part of the Chandu UI component library. Use the "View
                        Code" button above to see the implementation details.
                      </p>
                    </div>

                    <div className="component-props">
                      <h2>Usage</h2>
                      <p>
                        Import and use this component in your React application:
                      </p>
                      <pre className="code-snippet">
                        <code>{`import ${selectedComponent} from 'chandu-ui-components/${selectedComponent}';`}</code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="component-info">
                    <div className="component-description">
                      <h2>Component Information</h2>
                      <p>
                        The <strong>{selectedComponent}</strong> component is
                        available in the Chandu UI library. Code documentation
                        for this component is coming soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Code Viewer Modal */}
      {componentCode && (
        <CodeViewer
          isOpen={codeViewerOpen}
          onClose={() => setCodeViewerOpen(false)}
          componentName={selectedComponent}
          jsxCode={componentCode.jsx}
          cssCode={componentCode.css}
        />
      )}
    </div>
  );
}

