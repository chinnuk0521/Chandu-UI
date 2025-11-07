import React, { useState, useEffect } from 'react';
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
} from './index';
import { FRUITS, COUNTRIES, TECHNOLOGIES } from './examples/demo-data';
import { COMPONENT_CODES } from './examples/component-codes';
import './App.css';

function App() {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [badgeCount, setBadgeCount] = useState(5);
  const [codeViewerOpen, setCodeViewerOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [dropdownValue, setDropdownValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [darkModeChecked, setDarkModeChecked] = useState(() => {
    // Load dark mode preference from localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [textareaValue, setTextareaValue] = useState('');
  const [progressValue, setProgressValue] = useState(45);
  const [chips, setChips] = useState(['React', 'Vue', 'Angular']);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [toasts, setToasts] = useState([]);

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
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkModeChecked]);

  return (
    <div className={`app ${darkModeChecked ? 'dark-mode' : ''}`}>
      <Header logo="Chandu UI" />
      
      <Hero
        title="Build Modern UIs Faster"
        subtitle="Professional React Component Library"
        description="Production-ready components designed for tech companies and startups. Ship faster with beautiful, accessible, and customizable React components."
        buttons={[
          {
            label: 'Get Started',
            onClick: () => {
              const element = document.querySelector('#components');
              element?.scrollIntoView({ behavior: 'smooth' });
            },
            variant: 'primary',
          },
          {
            label: 'View Documentation',
            onClick: () => {
              window.open('https://github.com/chandu/components', '_blank');
            },
            variant: 'secondary',
          },
        ]}
      />

      <section id="components" className="components-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h2 className="showcase-title">Component Library</h2>
            <p className="showcase-subtitle">41+ Production-Ready Components</p>
            <p className="showcase-description">
              Carefully crafted components for modern web applications. Built with accessibility, performance, and developer experience in mind.
            </p>
          </div>

          <div className="components-grid">
            {/* Button Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Button</h3>
                <p className="component-demo-story">
                  Every great application starts with a button. Our Button component is the foundation of user interaction, 
                  designed to be flexible, accessible, and beautiful. Whether you need a primary action, secondary option, 
                  or a subtle text button, we've got you covered.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple variants: primary, secondary, outline, and text</li>
                  <li>Three sizes: small, medium, and large</li>
                  <li>Loading states and disabled states</li>
                  <li>Fully accessible with ARIA attributes</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Button')}>
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
                    <Button variant="primary" size="small">Small</Button>
                    <Button variant="primary" size="medium">Medium</Button>
                    <Button variant="primary" size="large">Large</Button>
                  </div>
                  <div className="button-group">
                    <Button variant="primary" loading={buttonLoading} onClick={handleButtonClick}>
                      {buttonLoading ? 'Loading...' : 'Click Me'}
                    </Button>
                    <Button variant="primary" disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Card</h3>
                <p className="component-demo-story">
                  Cards are the building blocks of modern web design. They help organize content, create visual hierarchy, 
                  and make information digestible. Our Card component is perfect for product showcases, feature highlights, 
                  pricing tables, and dashboard widgets.
                </p>
                <ul className="component-demo-features">
                  <li>Support for images, titles, subtitles, and footers</li>
                  <li>Clickable cards with hover effects</li>
                  <li>Flexible content structure</li>
                  <li>Perfect for dashboards and product displays</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Card')}>
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
                      footer={<Button variant="primary" size="small">Get Started</Button>}
                    >
                      Perfect for showcasing products, features, or pricing tiers in your application.
                    </Card>
                    <Card
                      title="Interactive Card"
                      onClick={() => alert('Card clicked!')}
                    >
                      Click this card to see the interaction. Great for dashboards and data visualization.
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
                  Forms are the bridge between your users and your application. Our Input component makes form building 
                  a breeze with built-in validation, error handling, and helper text. Create beautiful, accessible forms 
                  that guide users through their journey.
                </p>
                <ul className="component-demo-features">
                  <li>Built-in validation and error states</li>
                  <li>Helper text for user guidance</li>
                  <li>Required field indicators</li>
                  <li>Disabled states for better UX</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Input')}>
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
                        if (e.target.value.length < 3 && e.target.value.length > 0) {
                          setInputError('Name must be at least 3 characters');
                        } else {
                          setInputError('');
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
                  Search and select multiple items with ease. Our Autocomplete component combines the power of search 
                  with multi-select functionality, making it perfect for tags, categories, and complex form inputs. 
                  Users can search, select, and remove items seamlessly.
                </p>
                <ul className="component-demo-features">
                  <li>Real-time search and filtering</li>
                  <li>Multi-select with tag display</li>
                  <li>Keyboard navigation support</li>
                  <li>Custom input support</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Autocomplete')}>
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
                      <strong>Selected:</strong> {selectedFruits.join(', ')}
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
                  Power your application with intelligent search. Our Global Search component provides real-time 
                  filtering across large datasets, making it easy for users to find exactly what they're looking for. 
                  Perfect for dashboards, admin panels, and content-heavy applications.
                </p>
                <ul className="component-demo-features">
                  <li>Real-time search filtering</li>
                  <li>Keyboard navigation</li>
                  <li>Customizable result limits</li>
                  <li>Works with any data structure</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('GlobalSearch')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <GlobalSearch
                    items={[...FRUITS, ...COUNTRIES.map(c => c.name), ...TECHNOLOGIES.map(t => t.label)]}
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
                  Badges are small but powerful. They communicate status, count notifications, and highlight important 
                  information at a glance. Use them for status indicators, notification counts, and feature labels 
                  throughout your application.
                </p>
                <ul className="component-demo-features">
                  <li>Five color variants</li>
                  <li>Three sizes available</li>
                  <li>Perfect for notifications</li>
                  <li>Status indicators</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Badge')}>
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
                    <Badge variant="primary" size="small">Small</Badge>
                    <Badge variant="primary" size="medium">Medium</Badge>
                    <Badge variant="primary" size="large">Large</Badge>
                  </div>
                  <div className="badge-group">
                    <Badge variant="primary">{badgeCount} Notifications</Badge>
                    <Button variant="outline" size="small" onClick={() => setBadgeCount(badgeCount + 1)}>
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
                  Personalize your application with user avatars. Our Avatar component automatically generates 
                  initials from names, supports images, and comes in multiple sizes. Perfect for user profiles, 
                  comments, team displays, and anywhere you need to show who's who.
                </p>
                <ul className="component-demo-features">
                  <li>Automatic initials generation</li>
                  <li>Image support with fallback</li>
                  <li>Three sizes: small, medium, large</li>
                  <li>Consistent styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Avatar')}>
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
                  Loading states are inevitable in modern applications. Our Spinner component provides smooth, 
                  professional loading indicators that keep users informed during async operations. Simple, elegant, 
                  and always appropriate.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth rotation animation</li>
                  <li>Three sizes available</li>
                  <li>Accessible with ARIA labels</li>
                  <li>Lightweight and performant</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Spinner')}>
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
                  Sometimes you need to capture user attention for important actions. Our Modal component creates 
                  focused dialogs for confirmations, forms, and critical information. With smooth animations and 
                  proper focus management, modals feel natural and accessible.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple sizes: small, medium, large, full</li>
                  <li>Escape key and click-outside to close</li>
                  <li>Header, body, and footer sections</li>
                  <li>Proper focus trapping</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Modal')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual component-demo-visual-modal">
                <div className="demo-interactive demo-interactive-modal">
                  <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                    Open Modal
                  </Button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Confirm Action"
                    footer={
                      <>
                        <Button variant="text" onClick={() => setIsModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                          Confirm
                        </Button>
                      </>
                    }
                  >
                    <p>This is a modal component. Use it for confirmations, forms, or important information.</p>
                    <p style={{ marginTop: '1rem' }}>Click outside or press Escape to close.</p>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Tabs Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Tabs</h3>
                <p className="component-demo-story">
                  Organize complex content into manageable sections with Tabs. Perfect for settings pages, dashboards, 
                  and detail views, tabs help users navigate between related content without losing context. Clean, 
                  intuitive, and accessible.
                </p>
                <ul className="component-demo-features">
                  <li>Dynamic tab content</li>
                  <li>Disabled tab support</li>
                  <li>Change event callbacks</li>
                  <li>Clean, professional styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Tabs')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Tabs
                    tabs={[
                      {
                        label: 'Overview',
                        content: <div><p>Overview content</p><p>Display key metrics and information here.</p></div>,
                      },
                      {
                        label: 'Details',
                        content: <div><p>Details content</p><p>Show detailed information in this tab.</p></div>,
                      },
                      {
                        label: 'Settings',
                        content: <div><p>Settings content</p><p>Configure options and preferences here.</p></div>,
                      },
                      {
                        label: 'Disabled',
                        content: <div>This tab is disabled</div>,
                        disabled: true,
                      },
                    ]}
                    onChange={(index, tab) => console.log('Tab changed:', index, tab)}
                  />
                </div>
              </div>
            </div>

            {/* Dropdown Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Dropdown</h3>
                <p className="component-demo-story">
                  When you need users to select from a list of options, our Dropdown component provides a clean, 
                  intuitive interface. With smooth animations, keyboard navigation, and clear visual feedback, 
                  it makes selection effortless.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth open/close animations</li>
                  <li>Keyboard navigation support</li>
                  <li>Selected state highlighting</li>
                  <li>Disabled state support</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Dropdown')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Dropdown
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' },
                      { value: 'option4', label: 'Option 4' },
                      { value: 'option5', label: 'Option 5' },
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
                  Checkboxes are essential for multi-select scenarios, consent forms, and preference settings. 
                  Our Checkbox component provides clear visual feedback and maintains consistency with the rest 
                  of your design system.
                </p>
                <ul className="component-demo-features">
                  <li>Custom styled checkboxes</li>
                  <li>Label support for better UX</li>
                  <li>Disabled state handling</li>
                  <li>Accessible by default</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Checkbox')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  When users need to choose one option from multiple choices, Radio buttons are the perfect solution. 
                  They provide clear visual feedback and ensure only one selection at a time, making them ideal for 
                  surveys, settings, and preference selection.
                </p>
                <ul className="component-demo-features">
                  <li>Group-based single selection</li>
                  <li>Clear visual indicators</li>
                  <li>Keyboard accessible</li>
                  <li>Perfect for forms and surveys</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Radio')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Radio
                      name="radio-group"
                      label="Option 1"
                      value="option1"
                      checked={radioValue === 'option1'}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      name="radio-group"
                      label="Option 2"
                      value="option2"
                      checked={radioValue === 'option2'}
                      onChange={(e) => setRadioValue(e.target.value)}
                    />
                    <Radio
                      name="radio-group"
                      label="Option 3"
                      value="option3"
                      checked={radioValue === 'option3'}
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
                  Toggle switches are perfect for on/off settings, feature toggles, and preference controls. 
                  They provide immediate visual feedback and are more intuitive than checkboxes for binary choices. 
                  Our Switch component is smooth, accessible, and beautiful.
                </p>
                <ul className="component-demo-features">
                  <li>Smooth toggle animation</li>
                  <li>Clear on/off states</li>
                  <li>Label support</li>
                  <li>Disabled state handling</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Switch')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  Sometimes users need more space to express themselves. Our Textarea component handles multi-line 
                  input with grace, supporting validation, helper text, and error states. Perfect for comments, 
                  messages, and detailed descriptions.
                </p>
                <ul className="component-demo-features">
                  <li>Resizable vertical sizing</li>
                  <li>Validation and error handling</li>
                  <li>Helper text support</li>
                  <li>Consistent with Input styling</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Textarea')}>
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
                  Keep users informed about long-running operations with our Progress component. Whether it's a file 
                  upload, form completion, or data processing, progress bars provide clear visual feedback and reduce 
                  perceived wait time.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple variants: primary, success, warning, error</li>
                  <li>Optional percentage labels</li>
                  <li>Three sizes: small, medium, large</li>
                  <li>Smooth animation transitions</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Progress')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                    <Progress value={progressValue} showLabel variant="primary" />
                    <Progress value={75} showLabel variant="success" />
                    <Progress value={50} showLabel variant="warning" />
                    <Progress value={25} showLabel variant="error" />
                    <Button variant="outline" size="small" onClick={() => setProgressValue(Math.min(100, progressValue + 10))}>
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
                  Communication is key in great applications. Our Alert component helps you deliver important messages 
                  to users with clarity and style. From success confirmations to error warnings, alerts keep users 
                  informed and engaged.
                </p>
                <ul className="component-demo-features">
                  <li>Four variants: info, success, warning, error</li>
                  <li>Icon support for visual clarity</li>
                  <li>Optional close button</li>
                  <li>Title and message support</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Alert')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                  Sometimes users need a little help understanding what something does. Tooltips provide contextual 
                  information without cluttering the interface. Hover over any element to reveal helpful hints and 
                  additional context.
                </p>
                <ul className="component-demo-features">
                  <li>Four positions: top, bottom, left, right</li>
                  <li>Smooth fade-in animation</li>
                  <li>Automatic positioning</li>
                  <li>Works with any child element</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Tooltip')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem', justifyContent: 'center' }}>
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
              </div>
            </div>

            {/* Divider Component */}
            <div className="component-demo">
              <div className="component-demo-content">
                <h3 className="component-demo-title">Divider</h3>
                <p className="component-demo-story">
                  Visual separation is crucial for readability and organization. Our Divider component creates clean 
                  boundaries between sections, making content easier to scan and understand. Use it to separate 
                  content blocks, form sections, or list items.
                </p>
                <ul className="component-demo-features">
                  <li>Horizontal and vertical orientations</li>
                  <li>Optional text label</li>
                  <li>Subtle and professional styling</li>
                  <li>Perfect for content organization</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Divider')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ padding: '1rem', width: '100%' }}>
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
                  Loading states don't have to be boring. Our Skeleton component creates engaging loading placeholders 
                  that match your content structure. Users see what's coming, reducing perceived load time and 
                  improving the overall experience.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple variants: text, circular, rectangular, rounded</li>
                  <li>Smooth shimmer animation</li>
                  <li>Customizable width and height</li>
                  <li>Perfect for content placeholders</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Skeleton')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ width: '100%' }}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
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
                  Chips are compact elements perfect for tags, filters, and selections. They help users understand 
                  what's selected, what's available, and provide quick removal options. Great for search filters, 
                  selected items, and category displays.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple color variants</li>
                  <li>Optional delete functionality</li>
                  <li>Three sizes available</li>
                  <li>Perfect for tags and filters</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Chip')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <Chip label="Default" />
                    <Chip label="Primary" variant="primary" />
                    <Chip label="Success" variant="success" />
                    <Chip label="Warning" variant="warning" />
                    <Chip label="Error" variant="error" />
                    {chips.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip}
                        onDelete={() => setChips(chips.filter((_, i) => i !== index))}
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
                  Navigate your application with clear breadcrumb trails. Help users understand their location 
                  in the hierarchy and provide quick navigation back to parent pages. Essential for complex 
                  applications with deep navigation structures.
                </p>
                <ul className="component-demo-features">
                  <li>Customizable separators</li>
                  <li>Active page highlighting</li>
                  <li>Accessible navigation</li>
                  <li>Perfect for complex hierarchies</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Breadcrumb')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Breadcrumb
                    items={[
                      { label: 'Home', href: '#home' },
                      { label: 'About', href: '#about' },
                    { label: 'Services', href: '#services' },
                    { label: 'Features', href: '#features' },
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
                  Navigate through large datasets with ease. Our Pagination component provides intuitive 
                  controls for moving between pages, making it perfect for tables, lists, and search results. 
                  Clean, accessible, and highly customizable.
                </p>
                <ul className="component-demo-features">
                  <li>First/Last page navigation</li>
                  <li>Previous/Next controls</li>
                  <li>Active page highlighting</li>
                  <li>Responsive design</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Pagination')}>
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
                  Organize content into collapsible sections. Perfect for FAQs, settings panels, and 
                  content-heavy pages. Users can expand only what they need, keeping interfaces clean 
                  and focused.
                </p>
                <ul className="component-demo-features">
                  <li>Single or multiple open sections</li>
                  <li>Smooth animations</li>
                  <li>Customizable content</li>
                  <li>Perfect for FAQs and settings</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Accordion')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Accordion
                    items={[
                      {
                        title: 'What is this component library?',
                        content: 'A production-ready React component library with 40+ components designed for modern web applications.',
                      },
                      {
                        title: 'How do I install it?',
                        content: 'Simply run npm install @chandu/components and import the components you need.',
                      },
                      {
                        title: 'Is it free to use?',
                        content: 'Yes! This is an open-source library free for personal and commercial use.',
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
                  Slide-out panels for navigation, filters, and additional content. Drawers provide 
                  a space-efficient way to display secondary content without cluttering the main interface. 
                  Perfect for mobile navigation and side panels.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple positions (left, right, top, bottom)</li>
                  <li>Three sizes available</li>
                  <li>Smooth slide animations</li>
                  <li>Overlay backdrop</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Drawer')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
                  <Drawer
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    title="Settings"
                    position="right"
                    size="medium"
                  >
                    <p>Drawer content goes here. You can add any content you need.</p>
                    <Button variant="primary" onClick={() => setIsDrawerOpen(false)} style={{ marginTop: '1rem' }}>
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
                  Contextual popups that appear near their trigger. Perfect for additional information, 
                  actions, or content that doesn't warrant a full modal. Lightweight and flexible.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple positions</li>
                  <li>Click or hover triggers</li>
                  <li>Arrow indicators</li>
                  <li>Lightweight and fast</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Popover')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                  Guide users through multi-step processes. Perfect for forms, wizards, and onboarding 
                  flows. Visual progress indicators help users understand where they are and what's next.
                </p>
                <ul className="component-demo-features">
                  <li>Horizontal and vertical orientations</li>
                  <li>Completed step indicators</li>
                  <li>Active step highlighting</li>
                  <li>Perfect for multi-step forms</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Stepper')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <Stepper
                    steps={[
                      { label: 'Account', description: 'Create account' },
                      { label: 'Profile', description: 'Add details' },
                      { label: 'Review', description: 'Confirm' },
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
                  Collect user feedback with star ratings. Perfect for reviews, product ratings, and 
                  satisfaction surveys. Interactive and visually appealing.
                </p>
                <ul className="component-demo-features">
                  <li>Interactive star ratings</li>
                  <li>Hover effects</li>
                  <li>Read-only mode</li>
                  <li>Customizable max value</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Rating')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Rating value={ratingValue} onChange={setRatingValue} max={5} size="large" />
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
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
                  Select values from a range with an intuitive slider. Perfect for filters, volume controls, 
                  and any numeric input where a visual range selection is more intuitive than typing.
                </p>
                <ul className="component-demo-features">
                  <li>Customizable min/max values</li>
                  <li>Step increments</li>
                  <li>Value display</li>
                  <li>Smooth interactions</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Slider')}>
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
                  Dropdown menus for actions and navigation. Perfect for context menus, user menus, 
                  and action lists. Clean, accessible, and highly customizable.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple positions</li>
                  <li>Icon support</li>
                  <li>Disabled items</li>
                  <li>Divider support</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Menu')}>
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
                      { label: 'Profile', onClick: () => alert('Profile clicked') },
                      { label: 'Settings', onClick: () => alert('Settings clicked') },
                      { label: 'Divider', divider: true },
                      { label: 'Logout', onClick: () => alert('Logout clicked') },
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
                  Non-intrusive notifications that appear temporarily. Perfect for success messages, 
                  errors, and system notifications. Auto-dismisses after a set duration.
                </p>
                <ul className="component-demo-features">
                  <li>Multiple variants (info, success, warning, error)</li>
                  <li>Auto-dismiss</li>
                  <li>Manual close option</li>
                  <li>Slide-in animations</li>
                </ul>
                <div className="component-demo-cta">
                  <button className="view-code-button" onClick={() => handleViewCode('Toast')}>
                    View Code
                  </button>
                </div>
              </div>
              <div className="component-demo-visual">
                <div className="demo-interactive">
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Button
                      variant="primary"
                      onClick={() => {
                        const newToast = {
                          id: Date.now(),
                          message: 'Operation successful!',
                          variant: 'success',
                          duration: 3000,
                        };
                        setToasts([...toasts, newToast]);
                        setTimeout(() => {
                          setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
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
                          message: 'An error occurred.',
                          variant: 'error',
                          duration: 3000,
                        };
                        setToasts([...toasts, newToast]);
                        setTimeout(() => {
                          setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
                        }, 3000);
                      }}
                    >
                      Show Error Toast
                    </Button>
                  </div>
                  <ToastContainer
                    toasts={toasts}
                    position="top-right"
                    onRemove={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))}
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
