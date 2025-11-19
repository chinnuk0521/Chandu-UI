# Component Documentation

This file contains comprehensive documentation for all components in the Chandu UI library.

## Header

### Purpose
Navigation header component with mobile menu support, scroll detection, and customizable menu items.

### Props
- `menuItems` (Array, default: `[]`) - Array of menu item objects with `label` and `href` properties
- `logo` (string, default: `"Chandu UI"`) - Logo text or image URL
- `onMenuItemClick` (Function) - Callback function when a menu item is clicked
- `viewComponentsButton` (Object) - Optional button object with `label` and `onClick` properties
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `header` - Main container with scroll detection
- `header-container` - Inner container for layout
- `logo` - Logo link/container
- `nav` - Navigation menu container
- `nav-link` - Individual menu item links
- `mobile-menu-toggle` - Mobile hamburger menu button
- `mobile-menu-overlay` - Overlay for mobile menu

### Usage Example
```jsx
<Header 
  logo="My App"
  menuItems={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ]}
  viewComponentsButton={{
    label: "View Components",
    onClick: () => navigate("/components")
  }}
/>
```

### Notes / Constraints
- Automatically adds scroll detection styling when scrolled past 50px
- Mobile menu prevents body scroll when open
- Supports both hash links and regular URLs

## Hero

### Purpose
Full-screen hero section component for landing pages with customizable title, subtitle, description, and action buttons.

### Props
- `title` (string, default: `"Welcome to Chandu UI"`) - Main heading text
- `subtitle` (string, default: `"Innovation Meets Excellence"`) - Subheading text
- `description` (string, default: provided description) - Description paragraph text
- `buttons` (Array, default: provided buttons) - Array of button objects with `label`, `onClick`, and `variant` properties
- `backgroundImage` (string) - Optional background image URL
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `hero` - Main section container
- `hero-overlay` - Overlay for background image
- `hero-container` - Content container
- `hero-content` - Text content wrapper
- `hero-buttons` - Button container

### Usage Example
```jsx
<Hero
  title="Welcome to Our App"
  subtitle="Innovation Meets Excellence"
  description="We build amazing products"
  buttons={[
    { label: 'Get Started', onClick: () => {}, variant: 'primary' },
    { label: 'Learn More', onClick: () => {}, variant: 'secondary' },
  ]}
  backgroundImage="/path/to/image.jpg"
/>
```

### Notes / Constraints
- Automatically sets `id="home"` for navigation
- Background image is optional and uses CSS background-image
- Buttons array can be empty to hide buttons

## Footer

### Purpose
Footer component for tech companies with logo, description, social links, and navigation sections.

### Props
- No props - This is a static footer component

### Structure
- `footer` - Main footer container
- `footer-container` - Inner container
- `footer-content` - Main content wrapper
- `footer-section` - Individual sections (logo, resources, company)
- `footer-bottom` - Bottom section with copyright and legal links
- `footer-social` - Social media links container

### Usage Example
```jsx
<Footer />
```

### Notes / Constraints
- Static component with no customizable props
- Contains hardcoded links and social media icons
- Uses react-icons for social media icons

## Features

### Purpose
Features section component displaying a grid of feature cards with icons, titles, and descriptions.

### Props
- No props - This is a static features component

### Structure
- `features` - Main section container with `id="features"`
- `features-container` - Inner container
- `features-header` - Header section with title and subtitle
- `features-grid` - Grid container for feature cards
- `feature-card` - Individual feature card
- `feature-icon` - Icon container
- `feature-title` - Feature title
- `feature-description` - Feature description text

### Usage Example
```jsx
<Features />
```

### Notes / Constraints
- Static component with predefined features
- Uses react-icons for feature icons
- Features are hardcoded in the component

## About

### Purpose
About section component with title, stats, description, and code example visualization.

### Props
- No props - This is a static about component

### Structure
- `about` - Main section container with `id="about"`
- `about-container` - Inner container
- `about-content` - Content wrapper
- `about-text` - Text content section
- `about-header` - Header with title and stats
- `about-stats` - Statistics container
- `about-image` - Image/code example section

### Usage Example
```jsx
<About />
```

### Notes / Constraints
- Static component with hardcoded content
- Includes animated code example visualization
- Stats are hardcoded (71+ Components, 100% Accessible)

## Services

### Purpose
Services/use cases section component displaying a grid of service cards with icons, titles, and descriptions.

### Props
- No props - This is a static services component

### Structure
- `services` - Main section container with `id="services"`
- `services-container` - Inner container
- `services-header` - Header section with title and subtitle
- `services-grid` - Grid container for service cards
- `service-card` - Individual service card
- `service-icon` - Icon container
- `service-title` - Service title
- `service-description` - Service description text

### Usage Example
```jsx
<Services />
```

### Notes / Constraints
- Static component with predefined use cases
- Uses react-icons for service icons
- Use cases are hardcoded in the component

## Autocomplete

### Purpose
Production-ready autocomplete component with multi-select, search functionality, and custom input support.

### Props
- `options` (Array, default: `[]`) - Array of options to display (strings or objects)
- `value` (Array, default: `[]`) - Selected values (controlled component)
- `onChange` (Function) - Callback when selection changes (receives new selected array)
- `getOptionLabel` (Function) - Function to get display label from option (default: returns option as string)
- `getOptionValue` (Function) - Function to get value from option (default: returns option as string)
- `placeholder` (string, default: `"Type to search or add custom..."`) - Placeholder text for input
- `allowCustomInput` (boolean, default: `true`) - Allow adding custom values not in options list
- `className` (string, default: `""`) - Additional CSS classes
- `inputProps` (Object, default: `{}`) - Additional props to pass to input element

### Structure
- `autocomplete-wrapper` - Main container
- `input-area` - Input form container
- `tag` - Selected item tag display
- `suggestions` - Dropdown suggestions list
- `empty-state` - Empty state message

### Usage Example
```jsx
<Autocomplete
  options={['Apple', 'Banana', 'Cherry']}
  value={selected}
  onChange={setSelected}
  placeholder="Search fruits..."
  allowCustomInput={true}
/>
```

### Notes / Constraints
- Supports keyboard navigation (Arrow keys, Enter, Escape, Backspace)
- Automatically filters out selected items from suggestions
- Custom inputs are tracked separately from options
- Dropdown width matches input width to prevent layout shifts

## GlobalSearch

### Purpose
Global search component with real-time filtering, keyboard navigation, and customizable search logic.

### Props
- `items` (Array, default: `[]`) - Array of items to search through
- `onSelect` (Function) - Callback when an item is selected
- `getItemLabel` (Function) - Function to get display label from item (default: returns item as string)
- `getItemValue` (Function) - Function to get value from item (default: returns item as string)
- `searchFunction` (Function) - Custom search function (optional, uses default if not provided)
- `placeholder` (string, default: `"Search..."`) - Placeholder text for input
- `showResultsOnFocus` (boolean, default: `true`) - Show results when input is focused
- `maxResults` (number, default: `10`) - Maximum number of results to display
- `className` (string, default: `""`) - Additional CSS classes
- `inputProps` (Object, default: `{}`) - Additional props to pass to input element

### Structure
- `global-search-wrapper` - Main container
- `global-search-input-wrapper` - Input container with icon
- `global-search-input` - Search input field
- `global-search-results` - Results dropdown
- `global-search-result` - Individual result item
- `global-search-empty` - Empty state message

### Usage Example
```jsx
<GlobalSearch
  items={['Item 1', 'Item 2', 'Item 3']}
  onSelect={(item) => console.log('Selected:', item)}
  placeholder="Search..."
  maxResults={5}
/>
```

### Notes / Constraints
- Supports keyboard navigation (Arrow keys, Enter, Escape)
- Closes dropdown when clicking outside
- Shows empty state when no results found
- Custom search function can override default filtering logic

## Input

### Purpose
Text input component with label, error handling, helper text, and required field support.

### Props
- `label` (string) - Input label text
- `error` (string) - Error message to display
- `helperText` (string) - Helper text below input
- `required` (boolean, default: `false`) - Show required indicator
- `className` (string, default: `""`) - Additional CSS classes
- All standard HTML input props are supported via spread operator

### Structure
- `input-wrapper` - Main container
- `input-label` - Label element with required indicator
- `input` - Input field
- `input-error` - Error message display
- `input-helper` - Helper text display

### Usage Example
```jsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
  error="Invalid email"
  helperText="We'll never share your email"
/>
```

### Notes / Constraints
- Uses React forwardRef for ref forwarding
- Error message takes precedence over helper text
- Required indicator is an asterisk (*)
- Supports all standard HTML input types and attributes

## Button

### Purpose
Reusable button component with multiple variants, sizes, loading states, and disabled states.

### Props
- `variant` (string, default: `"primary"`) - Button variant: 'primary', 'secondary', 'outline', 'text'
- `size` (string, default: `"medium"`) - Button size: 'small', 'medium', 'large'
- `disabled` (boolean, default: `false`) - Disable button
- `loading` (boolean, default: `false`) - Show loading state with spinner
- `className` (string, default: `""`) - Additional CSS classes
- `children` (React.ReactNode) - Button content
- `onClick` (Function) - Click handler
- `type` (string, default: `"button"`) - Button type: 'button', 'submit', 'reset'

### Structure
- `btn` - Main button element
- `btn-spinner` - Loading spinner element
- `btn-content-loading` - Content wrapper when loading

### Usage Example
```jsx
<Button variant="primary" size="medium" onClick={() => {}}>
  Click Me
</Button>
<Button variant="primary" loading>Loading...</Button>
```

### Notes / Constraints
- Loading state automatically disables the button
- Button is disabled when either `disabled` or `loading` is true
- Loading spinner appears before button content

## Card

### Purpose
Card component for displaying content with optional title, subtitle, image, and footer.

### Props
- `children` (React.ReactNode) - Card content
- `title` (string) - Card title
- `subtitle` (string) - Card subtitle
- `image` (React.ReactNode) - Card image element
- `footer` (React.ReactNode) - Card footer content
- `className` (string, default: `""`) - Additional CSS classes
- `onClick` (Function) - Click handler (makes card clickable)

### Structure
- `card` - Main card container
- `card-image` - Image container
- `card-content` - Content wrapper
- `card-title` - Title element
- `card-subtitle` - Subtitle element
- `card-body` - Main content body
- `card-footer` - Footer container

### Usage Example
```jsx
<Card
  title="Card Title"
  subtitle="Card Subtitle"
  image={<img src="..." alt="..." />}
  footer={<Button>Action</Button>}
>
  Card content goes here
</Card>
```

### Notes / Constraints
- All props are optional
- Card becomes clickable when `onClick` is provided
- Image, title, subtitle, and footer are all optional

## Modal

### Purpose
Modal/Dialog component with customizable size, title, footer, and close functionality.

### Props
- `isOpen` (boolean) - Modal open state
- `onClose` (Function) - Close handler
- `title` (string) - Modal title
- `children` (React.ReactNode) - Modal content
- `footer` (React.ReactNode) - Modal footer content
- `size` (string, default: `"medium"`) - Modal size: 'small', 'medium', 'large', 'full'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `modal-overlay` - Backdrop overlay
- `modal` - Main modal container
- `modal-header` - Header with title and close button
- `modal-title` - Title element
- `modal-close` - Close button
- `modal-content` - Content area
- `modal-footer` - Footer area

### Usage Example
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
>
  Modal content
</Modal>
```

### Notes / Constraints
- Prevents body scroll when open
- Closes on Escape key press
- Closes on overlay click
- Returns null when `isOpen` is false

## Badge

### Purpose
Badge component for labels, tags, and status indicators with multiple variants and sizes.

### Props
- `children` (React.ReactNode) - Badge content
- `variant` (string, default: `"primary"`) - Badge variant: 'primary', 'secondary', 'success', 'warning', 'error'
- `size` (string, default: `"medium"`) - Badge size: 'small', 'medium', 'large'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `badge` - Main badge element

### Usage Example
```jsx
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error" size="small">Error</Badge>
```

### Notes / Constraints
- Simple span element with styling classes
- Supports all standard HTML span attributes via spread operator

## Avatar

### Purpose
Avatar component with image support, initials fallback, status indicators, and badge counts.

### Props
- `src` (string) - Image source URL
- `alt` (string) - Alt text for image
- `name` (string) - Name for initials fallback
- `size` (string, default: `"medium"`) - Avatar size: 'small', 'medium', 'large'
- `status` (string) - Status indicator: 'online', 'offline', 'away', 'busy'
- `badge` (number) - Badge count to display
- `color` (string) - Color variant for initials: 'primary', 'success', 'warning', 'error', 'info'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `avatar` - Main avatar container
- `avatar-image` - Image element
- `avatar-initials` - Initials display
- `avatar-status` - Status indicator
- `avatar-badge` - Badge count display

### Usage Example
```jsx
<Avatar name="John Doe" size="medium" />
<Avatar src="/path/to/image.jpg" alt="User" />
<Avatar name="Jane Smith" status="online" badge={5} />
```

### Notes / Constraints
- Falls back to initials if image fails to load or src is not provided
- Initials are generated from first and last name (or first letter if single name)
- Color is auto-generated from name if not specified
- Badge shows "99+" for counts over 99

## Spinner

### Purpose
Loading spinner component with multiple sizes and color variants.

### Props
- `size` (string, default: `"medium"`) - Spinner size: 'small', 'medium', 'large'
- `variant` (string, default: `"primary"`) - Spinner variant: 'primary', 'secondary', 'success', 'warning', 'error'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `spinner` - Main spinner element
- `sr-only` - Screen reader only text

### Usage Example
```jsx
<Spinner size="medium" variant="primary" />
```

### Notes / Constraints
- Includes ARIA attributes for accessibility
- Has screen reader text for loading state
- Pure CSS animation-based spinner

## Tabs

### Purpose
Tabs component for organizing content into multiple panels with keyboard navigation.

### Props
- `tabs` (Array, default: `[]`) - Array of tab objects with `label`, `content`, and optional `disabled` properties
- `defaultTab` (number, default: `0`) - Default active tab index
- `onChange` (Function) - Tab change handler (receives index and tab object)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `tabs` - Main tabs container
- `tabs-header` - Tab buttons container
- `tab-button` - Individual tab button
- `tabs-content` - Active tab content area

### Usage Example
```jsx
<Tabs
  tabs={[
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> },
    { label: 'Tab 3', content: <div>Content 3</div>, disabled: true },
  ]}
  onChange={(index, tab) => console.log('Tab changed:', index)}
/>
```

### Notes / Constraints
- Disabled tabs cannot be clicked
- Only one tab is active at a time
- Content is rendered based on active tab index

## CodeViewer

### Purpose
Code viewer component that displays JSX and CSS code in a modal with copy functionality.

### Props
- `isOpen` (boolean) - Modal open state
- `onClose` (Function) - Close handler
- `title` (string) - Modal title (default: "Component Code")
- `jsxCode` (string) - JSX code to display
- `cssCode` (string) - CSS code to display

### Structure
- Uses Modal component as wrapper
- `code-viewer` - Main container
- `code-section` - Individual code section
- `code-header` - Header with title and copy button
- `code-block` - Code display area

### Usage Example
```jsx
<CodeViewer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Button Component Code"
  jsxCode="<Button>Click me</Button>"
  cssCode=".btn { color: blue; }"
/>
```

### Notes / Constraints
- Requires Modal component internally
- Uses Tabs component to switch between JSX and CSS
- Copy functionality uses navigator.clipboard API
- Shows success feedback when code is copied

## Dropdown

### Purpose
Dropdown select component with customizable options and placeholder.

### Props
- `options` (Array, default: `[]`) - Array of option objects with `value` and `label` properties
- `value` (any) - Selected value
- `onChange` (Function) - Change handler (receives selected value)
- `placeholder` (string, default: `"Select an option..."`) - Placeholder text
- `disabled` (boolean, default: `false`) - Disable dropdown
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `dropdown-container` - Main container
- `dropdown-button` - Trigger button
- `dropdown-value` - Selected value display
- `dropdown-icon` - Chevron icon
- `dropdown-menu` - Dropdown menu
- `dropdown-item` - Individual option item

### Usage Example
```jsx
<Dropdown
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose an option..."
/>
```

### Notes / Constraints
- Closes when clicking outside
- Selected option is highlighted
- Dropdown menu appears below the button

## Checkbox

### Purpose
Checkbox input component with label and custom styling.

### Props
- `label` (string) - Checkbox label text
- `checked` (boolean, default: `false`) - Checked state
- `onChange` (Function) - Change handler
- `disabled` (boolean, default: `false`) - Disable checkbox
- `className` (string, default: `""`) - Additional CSS classes
- All standard HTML checkbox input props are supported

### Structure
- `checkbox-wrapper` - Main label container
- `checkbox-input` - Hidden native input
- `checkbox-checkmark` - Custom checkmark display
- `checkbox-label` - Label text

### Usage Example
```jsx
<Checkbox
  label="I agree to the terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

### Notes / Constraints
- Uses label wrapper for better accessibility
- Custom checkmark is styled with CSS
- Native input is hidden but still functional

## Radio

### Purpose
Radio button component with label support for radio groups.

### Props
- `label` (string) - Radio label text
- `name` (string) - Radio group name (required for grouping)
- `value` (any) - Radio value
- `checked` (boolean, default: `false`) - Checked state
- `onChange` (Function) - Change handler
- `disabled` (boolean, default: `false`) - Disable radio
- `className` (string, default: `""`) - Additional CSS classes
- All standard HTML radio input props are supported

### Structure
- `radio-wrapper` - Main label container
- `radio-input` - Hidden native input
- `radio-checkmark` - Custom radio display
- `radio-label` - Label text

### Usage Example
```jsx
<Radio
  name="gender"
  value="male"
  label="Male"
  checked={gender === 'male'}
  onChange={(e) => setGender(e.target.value)}
/>
```

### Notes / Constraints
- Requires `name` prop for proper radio group behavior
- Multiple radio buttons with same `name` form a group
- Custom radio button is styled with CSS

## Switch

### Purpose
Toggle switch component for boolean values with label support.

### Props
- `label` (string) - Switch label text
- `checked` (boolean, default: `false`) - Checked/toggled state
- `onChange` (Function) - Change handler
- `disabled` (boolean, default: `false`) - Disable switch
- `className` (string, default: `""`) - Additional CSS classes
- All standard HTML checkbox input props are supported (uses checkbox internally)

### Structure
- `switch-wrapper` - Main label container
- `switch-label` - Label text (if provided)
- `switch` - Switch container
- `switch-input` - Hidden native checkbox input
- `switch-slider` - Slider element

### Usage Example
```jsx
<Switch
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

### Notes / Constraints
- Uses checkbox input internally for form compatibility
- Label can be placed before or after the switch
- Slider animates when toggled

## Textarea

### Purpose
Multi-line text input component with label, error handling, and helper text.

### Props
- `label` (string) - Textarea label
- `placeholder` (string) - Placeholder text
- `value` (string) - Textarea value
- `onChange` (Function) - Change handler
- `error` (string) - Error message
- `helperText` (string) - Helper text
- `required` (boolean, default: `false`) - Show required indicator
- `disabled` (boolean, default: `false`) - Disable textarea
- `rows` (number, default: `4`) - Number of visible rows
- `className` (string, default: `""`) - Additional CSS classes
- All standard HTML textarea props are supported

### Structure
- `textarea-wrapper` - Main container
- `textarea-label` - Label with required indicator
- `textarea` - Textarea element
- `textarea-error-text` - Error message
- `textarea-helper-text` - Helper text

### Usage Example
```jsx
<Textarea
  label="Message"
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  rows={5}
/>
```

### Notes / Constraints
- Error message takes precedence over helper text
- Required indicator is an asterisk (*)
- Supports all standard HTML textarea attributes

## Progress

### Purpose
Progress bar component for displaying completion status with customizable appearance.

### Props
- `value` (number, default: `0`) - Current progress value
- `max` (number, default: `100`) - Maximum value
- `showLabel` (boolean, default: `false`) - Show percentage label
- `label` (string) - Custom label text (alternative to showLabel)
- `size` (string, default: `"medium"`) - Size: 'small', 'medium', 'large'
- `variant` (string, default: `"primary"`) - Variant: 'primary', 'secondary', 'success', 'warning', 'error'
- `animated` (boolean, default: `true`) - Enable animation
- `striped` (boolean, default: `false`) - Show striped pattern
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `progress-wrapper` - Main container
- `progress-label` - Label container (if shown)
- `progress-bar` - Progress bar container
- `progress-fill` - Filled portion of progress bar

### Usage Example
```jsx
<Progress value={75} max={100} showLabel variant="success" />
<Progress value={50} label="50% Complete" animated striped />
```

### Notes / Constraints
- Percentage is calculated as (value / max) * 100
- Value is clamped between 0 and max
- Includes ARIA attributes for accessibility
- Custom label overrides percentage display

## Alert

### Purpose
Alert component for displaying notifications with different variants and optional close button.

### Props
- `variant` (string, default: `"info"`) - Alert variant: 'info', 'success', 'warning', 'error'
- `title` (string) - Optional alert title
- `children` (React.ReactNode) - Alert message content
- `onClose` (Function) - Optional close handler (shows close button if provided)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `alert` - Main alert container
- `alert-content` - Content wrapper
- `alert-icon` - Variant icon
- `alert-text` - Text container
- `alert-title` - Title element
- `alert-message` - Message content
- `alert-close` - Close button

### Usage Example
```jsx
<Alert variant="success" title="Success!" onClose={() => {}}>
  Your changes have been saved.
</Alert>
<Alert variant="error">
  An error occurred. Please try again.
</Alert>
```

### Notes / Constraints
- Different icons for each variant (info, success, warning, error)
- Close button only appears if `onClose` is provided
- Title is optional

## Tooltip

### Purpose
Tooltip component that displays contextual information on hover.

### Props
- `content` (string|React.ReactNode) - Tooltip content
- `position` (string, default: `"top"`) - Tooltip position: 'top', 'bottom', 'left', 'right'
- `children` (React.ReactNode) - Element to attach tooltip to
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `tooltip-wrapper` - Wrapper around trigger element
- `tooltip` - Tooltip element (shown on hover)

### Usage Example
```jsx
<Tooltip content="This is a tooltip" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

### Notes / Constraints
- Tooltip appears on mouse enter and disappears on mouse leave
- Position determines where tooltip appears relative to trigger
- Wraps children element

## Divider

### Purpose
Divider component for visual separation with optional text.

### Props
- `orientation` (string, default: `"horizontal"`) - Orientation: 'horizontal', 'vertical'
- `text` (string) - Optional text to display in divider
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `divider` - Main divider element
- `divider-text` - Text element (only for horizontal dividers)

### Usage Example
```jsx
<Divider />
<Divider text="OR" />
<Divider orientation="vertical" />
```

### Notes / Constraints
- Text only appears on horizontal dividers
- Vertical dividers are typically used in flex layouts

## Skeleton

### Purpose
Skeleton loading component for displaying loading placeholders.

### Props
- `variant` (string, default: `"text"`) - Variant: 'text', 'circular', 'rectangular', 'rounded'
- `width` (string|number) - Custom width
- `height` (string|number) - Custom height
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `skeleton` - Main skeleton element
- `sr-only` - Screen reader only text

### Usage Example
```jsx
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width="100%" height={200} />
```

### Notes / Constraints
- Includes ARIA attributes for accessibility
- Custom width and height override variant defaults
- Animated shimmer effect

## Chip

### Purpose
Chip component for labels, tags, and removable items.

### Props
- `label` (string) - Chip label text
- `onDelete` (Function) - Optional delete handler (shows delete button if provided)
- `variant` (string, default: `"default"`) - Chip variant
- `size` (string, default: `"medium"`) - Chip size: 'small', 'medium', 'large'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `chip` - Main chip element
- `chip-delete` - Delete button (if onDelete provided)

### Usage Example
```jsx
<Chip label="React" />
<Chip label="JavaScript" onDelete={() => {}} variant="primary" />
```

### Notes / Constraints
- Delete button only appears if `onDelete` is provided
- Uses X icon for delete button

## Breadcrumb

### Purpose
Breadcrumb navigation component for showing navigation hierarchy.

### Props
- `items` (Array, default: `[]`) - Array of breadcrumb items with `label` and `href` properties
- `separator` (React.ReactNode, default: `<HiChevronRight />`) - Separator element between items
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `breadcrumb` - Main nav container
- `breadcrumb-list` - Ordered list container
- `breadcrumb-item` - Individual breadcrumb item
- `breadcrumb-separator` - Separator element
- `breadcrumb-link` - Link element (for non-current items)
- `breadcrumb-current` - Current page span (for last item)

### Usage Example
```jsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page', href: '/products/item' },
  ]}
/>
```

### Notes / Constraints
- Last item is displayed as current page (not a link)
- Returns null if items array is empty
- Includes ARIA label for accessibility
- Uses ordered list for semantic HTML

## Pagination

### Purpose
Pagination component for navigating through multiple pages.

### Props
- `currentPage` (number, default: `1`) - Current active page
- `totalPages` (number, default: `10`) - Total number of pages
- `onPageChange` (Function) - Page change handler (receives new page number)
- `showFirstLast` (boolean, default: `true`) - Show First/Last buttons
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `pagination` - Main nav container
- `pagination-button` - Individual page button
- Active page button has `active` class

### Usage Example
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  showFirstLast={true}
/>
```

### Notes / Constraints
- Shows maximum of 5 visible page numbers
- Returns null if totalPages is 1 or less
- First/Previous buttons disabled on first page
- Last/Next buttons disabled on last page
- Includes ARIA labels for accessibility

## Accordion

### Purpose
Accordion component for displaying collapsible content sections with expand/collapse functionality.

### Props
- `items` (Array, default: `[]`) - Array of accordion items with `title` and `content` properties
- `allowMultiple` (boolean, default: `false`) - Allow multiple items to be open simultaneously
- `defaultOpen` (Array, default: `[]`) - Array of indices that should be open by default
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `accordion` - Main container
- `accordion-item` - Individual accordion item
- `accordion-header` - Clickable header with title and icon
- `accordion-title` - Title text
- `accordion-icon` - Chevron icon (rotates when open)
- `accordion-content` - Collapsible content area

### Usage Example
```jsx
<Accordion
  items={[
    { title: 'Section 1', content: <div>Content 1</div> },
    { title: 'Section 2', content: <div>Content 2</div> },
  ]}
  allowMultiple={false}
  defaultOpen={[0]}
/>
```

### Notes / Constraints
- Only one item can be open at a time when `allowMultiple` is false
- Uses Set for efficient open items tracking
- Includes ARIA attributes for accessibility
- Icon rotates to indicate open/closed state

## Drawer

### Purpose
Drawer component (side panel) that slides in from different positions with overlay backdrop.

### Props
- `isOpen` (boolean) - Drawer open state
- `onClose` (Function) - Close handler function
- `title` (string) - Optional drawer title
- `children` (React.ReactNode) - Drawer content
- `position` (string, default: `"right"`) - Drawer position: 'left', 'right', 'top', 'bottom'
- `size` (string, default: `"medium"`) - Drawer size: 'small', 'medium', 'large', 'full'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `drawer-overlay` - Backdrop overlay
- `drawer` - Main drawer container
- `drawer-header` - Header section with title and close button
- `drawer-title` - Title element
- `drawer-close` - Close button
- `drawer-content` - Content area

### Usage Example
```jsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  position="right"
  size="medium"
>
  Drawer content here
</Drawer>
```

### Notes / Constraints
- Prevents body scroll when open
- Closes on Escape key press
- Closes on overlay click
- Returns null when `isOpen` is false
- Supports multiple positions and sizes

## Popover

### Purpose
Popover component that displays content in a floating panel, triggered by click or hover.

### Props
- `content` (React.ReactNode) - Popover content to display
- `trigger` (string, default: `"click"`) - Trigger type: 'click', 'hover'
- `position` (string, default: `"bottom"`) - Popover position: 'top', 'bottom', 'left', 'right'
- `children` (React.ReactNode) - Element to attach popover to
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `popover-wrapper` - Wrapper around trigger element
- `popover` - Popover container
- `popover-content` - Content area
- `popover-arrow` - Arrow pointing to trigger element

### Usage Example
```jsx
<Popover
  content={<div>Popover content</div>}
  trigger="click"
  position="bottom"
>
  <Button>Click me</Button>
</Popover>
```

### Notes / Constraints
- Closes when clicking outside (for click trigger)
- Hover trigger shows on mouse enter and hides on mouse leave
- Includes arrow pointing to trigger element
- Position determines where popover appears relative to trigger

## Stepper

### Purpose
Stepper component for displaying multi-step processes with progress indication.

### Props
- `steps` (Array, default: `[]`) - Array of step objects with `label` and optional `description`
- `currentStep` (number, default: `0`) - Current active step index (deprecated, use `activeStep`)
- `activeStep` (number) - Current active step index
- `orientation` (string, default: `"horizontal"`) - Orientation: 'horizontal', 'vertical'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `stepper` - Main container
- `stepper-step` - Individual step container
- `stepper-connector` - Connector line between steps
- `stepper-line` - Line connecting steps
- `stepper-indicator` - Step indicator (number or checkmark)
- `stepper-check-icon` - Checkmark icon for completed steps
- `stepper-number` - Step number display
- `stepper-label` - Label container
- `stepper-label-text` - Step label text
- `stepper-description` - Step description text

### Usage Example
```jsx
<Stepper
  steps={[
    { label: 'Step 1', description: 'Description 1' },
    { label: 'Step 2', description: 'Description 2' },
    { label: 'Step 3' },
  ]}
  activeStep={1}
  orientation="horizontal"
/>
```

### Notes / Constraints
- Supports both `currentStep` and `activeStep` props (backward compatibility)
- Completed steps show checkmark icon
- Active step is highlighted
- Pending steps show step number
- Connector lines show completion status

## Rating

### Purpose
Star rating component for displaying and selecting ratings with hover effects.

### Props
- `value` (number, default: `0`) - Current rating value
- `max` (number, default: `5`) - Maximum rating value
- `onChange` (Function) - Callback when rating changes (receives new rating)
- `readOnly` (boolean, default: `false`) - Make rating read-only
- `size` (string, default: `"medium"`) - Rating size: 'small', 'medium', 'large'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `rating` - Main container
- `rating-star` - Individual star button
- Star states: `filled`, `half` (for partial ratings)

### Usage Example
```jsx
<Rating
  value={3}
  max={5}
  onChange={(rating) => console.log('Rating:', rating)}
  readOnly={false}
  size="medium"
/>
```

### Notes / Constraints
- Shows hover effect when not read-only
- Supports half-star ratings
- Includes ARIA labels for accessibility
- Stars are buttons when not read-only

## Slider

### Purpose
Range slider component for selecting numeric values within a range.

### Props
- `value` (number, default: `50`) - Current slider value
- `min` (number, default: `0`) - Minimum value
- `max` (number, default: `100`) - Maximum value
- `step` (number, default: `1`) - Step increment
- `onChange` (Function) - Change handler (receives new value)
- `disabled` (boolean, default: `false`) - Disable slider
- `showValue` (boolean, default: `true`) - Show current value display
- `label` (string) - Optional label text
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `slider-wrapper` - Main container
- `slider-label` - Label container (if label provided)
- `slider-value` - Current value display
- `slider-container` - Slider track container
- `slider-input` - Native range input
- `slider-value-display` - Value display (when no label)

### Usage Example
```jsx
<Slider
  value={value}
  min={0}
  max={100}
  step={1}
  onChange={setValue}
  label="Volume"
  showValue={true}
/>
```

### Notes / Constraints
- Uses CSS custom properties for percentage calculation
- Value is controlled internally if `onChange` is not provided
- Supports custom step increments
- Value display can be shown with or without label

## Menu

### Purpose
Dropdown menu component with customizable items, icons, and nested support.

### Props
- `items` (Array, default: `[]`) - Array of menu items with `label`, `onClick`, optional `icon`, `disabled`, `children`, `type` (for dividers)
- `trigger` (React.ReactNode) - Element that triggers the menu
- `position` (string, default: `"bottom-left"`) - Menu position: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `menu-wrapper` - Main container
- `menu-trigger` - Trigger element container
- `menu` - Dropdown menu container
- `menu-item` - Individual menu item
- `menu-icon` - Item icon
- `menu-label` - Item label text
- `menu-arrow` - Arrow for items with children
- `menu-divider` - Divider separator

### Usage Example
```jsx
<Menu
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'Item 1', onClick: () => {}, icon: <Icon /> },
    { type: 'divider' },
    { label: 'Item 2', onClick: () => {}, disabled: true },
  ]}
  position="bottom-left"
/>
```

### Notes / Constraints
- Closes when clicking outside
- Supports divider items (use `type: 'divider'` or `divider: true`)
- Disabled items cannot be clicked
- Shows arrow for items with children (nested menu support)
- Menu closes after item click

## Toast

### Purpose
Toast notification component for displaying temporary messages with different variants.

### Props
- `message` (string) - Toast message text
- `variant` (string, default: `"info"`) - Toast variant: 'info', 'success', 'warning', 'error'
- `duration` (number, default: `5000`) - Auto-close duration in milliseconds (0 for no auto-close)
- `onClose` (Function) - Close handler function
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `toast` - Main toast container
- `toast-icon` - Variant icon (info, success, warning, error)
- `toast-message` - Message text
- `toast-close` - Close button (if onClose provided)

### Usage Example
```jsx
<Toast
  message="Operation successful!"
  variant="success"
  duration={5000}
  onClose={() => {}}
/>
```

### Notes / Constraints
- Auto-closes after duration if duration > 0
- Different icons for each variant
- Close button only appears if `onClose` is provided
- Uses react-icons for variant icons

## ToastContainer

### Purpose
Container component for managing and displaying multiple toast notifications.

### Props
- `toasts` (Array, default: `[]`) - Array of toast objects with `id`, `message`, `variant`, `duration`
- `position` (string, default: `"top-right"`) - Container position: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
- `onRemove` (Function) - Handler to remove toast (receives toast id)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `toast-container` - Main container
- Uses `Toast` component internally for each toast

### Usage Example
```jsx
<ToastContainer
  toasts={[
    { id: 1, message: 'Success!', variant: 'success', duration: 5000 },
    { id: 2, message: 'Error!', variant: 'error', duration: 5000 },
  ]}
  position="top-right"
  onRemove={(id) => removeToast(id)}
/>
```

### Notes / Constraints
- Returns null if toasts array is empty
- Each toast must have a unique `id`
- Position determines where container appears on screen
- Manages multiple toasts simultaneously

## Table

### Purpose
Table component for displaying tabular data with support for columns and rows.

### Props
- `columns` (Array, default: `[]`) - Array of column definitions (strings or objects with `key`, `label`, `sortable`)
- `data` (Array, default: `[]`) - Array of data objects or arrays
- `striped` (boolean, default: `false`) - Apply striped row styling
- `bordered` (boolean, default: `false`) - Apply border styling
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `table-wrapper` - Main container
- `table` - Table element
- `table-striped` - Striped rows class
- `table-bordered` - Bordered table class
- `thead` - Table header
- `tbody` - Table body
- `table-empty` - Empty state cell
- `sortable` - Sortable column class

### Usage Example
```jsx
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: false },
  ]}
  data={[
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ]}
  striped={true}
  bordered={true}
/>
```

### Notes / Constraints
- Supports both array of strings and array of objects for columns
- Supports both array of arrays and array of objects for data
- Automatically normalizes data format
- Shows empty state when no data
- Sortable columns have visual indicator

## Timeline

### Purpose
Timeline component for displaying chronological events with markers and content.

### Props
- `items` (Array, default: `[]`) - Array of timeline items with `title`, `description`, `date`, optional `icon`
- `orientation` (string, default: `"vertical"`) - Timeline orientation: 'vertical', 'horizontal'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `timeline` - Main container
- `timeline-item` - Individual timeline item
- `timeline-marker` - Marker container (icon or dot)
- `timeline-dot` - Default dot marker
- `timeline-content` - Content container
- `timeline-date` - Date display
- `timeline-title` - Title element
- `timeline-description` - Description text

### Usage Example
```jsx
<Timeline
  items={[
    { title: 'Event 1', description: 'Description 1', date: '2024-01-01', icon: <Icon /> },
    { title: 'Event 2', description: 'Description 2', date: '2024-01-02' },
  ]}
  orientation="vertical"
/>
```

### Notes / Constraints
- Supports custom icons or default dot markers
- Date is optional
- Description is optional
- Supports both vertical and horizontal orientations

## Carousel

### Purpose
Carousel component for displaying slides with navigation arrows and indicators.

### Props
- `items` (Array, default: `[]`) - Array of carousel items (can be objects with `content` property or direct content)
- `autoPlay` (boolean, default: `false`) - Enable auto-play
- `interval` (number, default: `3000`) - Auto-play interval in milliseconds
- `showIndicators` (boolean, default: `true`) - Show dot indicators
- `showArrows` (boolean, default: `true`) - Show navigation arrows
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `carousel` - Main container
- `carousel-container` - Slides container
- `carousel-slide` - Individual slide
- `active` - Active slide class
- `slide-next`, `slide-prev` - Slide direction classes
- `carousel-arrow` - Navigation arrow buttons
- `carousel-arrow-prev`, `carousel-arrow-next` - Arrow position classes
- `carousel-indicators` - Indicators container
- `carousel-indicator` - Individual indicator button

### Usage Example
```jsx
<Carousel
  items={[
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    { content: <div>Slide 3</div> },
  ]}
  autoPlay={true}
  interval={3000}
  showIndicators={true}
  showArrows={true}
/>
```

### Notes / Constraints
- Returns null if items array is empty
- Supports both direct content and objects with `content` property
- Auto-play only works with multiple items
- Includes slide direction animations
- Arrows and indicators only show when there are multiple items

## FileUpload

### Purpose
File upload component with drag-and-drop support, file validation, and preview.

### Props
- `onFileSelect` (Function) - Callback when files are selected (receives file or array of files)
- `accept` (string, default: `"*/*"`) - Accepted file types (e.g., "image/*", ".pdf")
- `maxSize` (number, default: `10`) - Maximum file size in MB
- `multiple` (boolean, default: `false`) - Allow multiple file selection
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `file-upload` - Main container
- `file-upload-area` - Drop zone area
- `dragging` - Dragging state class
- `file-upload-icon` - Upload icon
- `file-upload-text` - Main instruction text
- `file-upload-hint` - File size hint
- `file-upload-input` - Hidden file input
- `file-upload-list` - Selected files list
- `file-upload-item` - Individual file item
- `file-upload-name` - File name
- `file-upload-size` - File size display
- `file-upload-remove` - Remove file button

### Usage Example
```jsx
<FileUpload
  onFileSelect={(files) => console.log('Files:', files)}
  accept="image/*"
  maxSize={5}
  multiple={true}
/>
```

### Notes / Constraints
- Validates file size and shows alert for oversized files
- Supports drag-and-drop and click to select
- Shows visual feedback when dragging
- Displays selected files with name and size
- Allows removing individual files

## Calendar

### Purpose
Calendar component for date selection with month navigation and date range constraints.

### Props
- `value` (Date, default: `null`) - Selected date
- `onChange` (Function) - Callback when date is selected (receives selected Date)
- `minDate` (Date, default: `null`) - Minimum selectable date
- `maxDate` (Date, default: `null`) - Maximum selectable date
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `calendar` - Main container
- `date-range-calendar` - Calendar grid container
- `date-range-calendar-header` - Header with month/year and navigation
- `date-range-calendar-nav` - Navigation buttons
- `date-range-calendar-month` - Month/year display
- `date-range-calendar-weekdays` - Weekday headers
- `date-range-calendar-weekday` - Individual weekday
- `date-range-calendar-days` - Days grid
- `date-range-calendar-day` - Individual day button
- `today` - Today date class
- `start` - Selected date class
- `empty` - Empty day cell class

### Usage Example
```jsx
<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
/>
```

### Notes / Constraints
- Highlights today's date
- Highlights selected date
- Prevents selection of dates outside min/max range
- Supports month navigation
- Uses shared CSS with DateRangePicker

## Notification

### Purpose
Notification component for displaying system notifications with different types and actions.

### Props
- `title` (string) - Notification title
- `message` (string) - Notification message
- `type` (string, default: `"info"`) - Notification type: 'info', 'success', 'warning', 'error'
- `duration` (number, default: `5000`) - Auto-close duration in milliseconds
- `onClose` (Function) - Close handler
- `actions` (Array) - Array of action buttons
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `notification` - Main container
- `notification-icon` - Type icon
- `notification-content` - Content wrapper
- `notification-title` - Title element
- `notification-message` - Message text
- `notification-actions` - Actions container
- `notification-close` - Close button

### Usage Example
```jsx
<Notification
  title="New Message"
  message="You have a new message"
  type="info"
  duration={5000}
  onClose={() => {}}
  actions={[
    { label: 'View', onClick: () => {} },
  ]}
/>
```

### Notes / Constraints
- Auto-closes after duration if duration > 0
- Different icons for each type
- Supports custom action buttons
- Close button appears if onClose is provided

## Backdrop

### Purpose
Backdrop overlay component for modals, drawers, and other overlay components.

### Props
- `isOpen` (boolean) - Backdrop visibility state
- `onClick` (Function) - Click handler for backdrop
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `backdrop` - Main backdrop element

### Usage Example
```jsx
<Backdrop
  isOpen={isOpen}
  onClick={() => setIsOpen(false)}
/>
```

### Notes / Constraints
- Returns null when `isOpen` is false
- Typically used with modals and drawers
- Provides visual separation and focus

## Snackbar

### Purpose
Snackbar component for displaying brief messages at the bottom of the screen.

### Props
- `message` (string) - Snackbar message
- `action` (React.ReactNode) - Optional action button
- `open` (boolean) - Snackbar visibility state
- `onClose` (Function) - Close handler
- `autoHideDuration` (number, default: `4000`) - Auto-hide duration in milliseconds
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `snackbar` - Main container
- `snackbar-message` - Message text
- `snackbar-action` - Action button container

### Usage Example
```jsx
<Snackbar
  message="Item saved successfully"
  action={<Button>Undo</Button>}
  open={open}
  onClose={() => setOpen(false)}
  autoHideDuration={4000}
/>
```

### Notes / Constraints
- Auto-hides after duration
- Typically appears at bottom of screen
- Supports optional action button
- Returns null when `open` is false

## List

### Purpose
List component for displaying ordered or unordered lists with customizable items.

### Props
- `items` (Array, default: `[]`) - Array of list items (strings or objects)
- `ordered` (boolean, default: `false`) - Use ordered list (ol) instead of unordered (ul)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `list` - Main list container
- `list-item` - Individual list item

### Usage Example
```jsx
<List
  items={['Item 1', 'Item 2', 'Item 3']}
  ordered={false}
/>
```

### Notes / Constraints
- Supports both strings and objects for items
- Can be ordered or unordered
- Simple list display component

## Tag

### Purpose
Tag component for labels, categories, and removable tags.

### Props
- `label` (string) - Tag label text
- `variant` (string, default: `"default"`) - Tag variant
- `size` (string, default: `"medium"`) - Tag size: 'small', 'medium', 'large'
- `onRemove` (Function) - Optional remove handler (shows remove button if provided)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `tag` - Main tag element
- `tag-label` - Label text
- `tag-remove` - Remove button

### Usage Example
```jsx
<Tag
  label="React"
  variant="primary"
  size="medium"
  onRemove={() => {}}
/>
```

### Notes / Constraints
- Remove button only appears if `onRemove` is provided
- Similar to Chip component but with different styling

## SearchBar

### Purpose
Search bar component with input field, search icon, and optional clear button.

### Props
- `value` (string) - Search input value
- `onChange` (Function) - Change handler (receives new value)
- `placeholder` (string, default: `"Search..."`) - Placeholder text
- `onSearch` (Function) - Search handler (called on Enter or button click)
- `showClearButton` (boolean, default: `true`) - Show clear button when value exists
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `search-bar` - Main container
- `search-bar-input` - Input field
- `search-bar-icon` - Search icon
- `search-bar-clear` - Clear button

### Usage Example
```jsx
<SearchBar
  value={searchValue}
  onChange={setSearchValue}
  placeholder="Search..."
  onSearch={(value) => console.log('Search:', value)}
  showClearButton={true}
/>
```

### Notes / Constraints
- Triggers search on Enter key press
- Clear button appears when value exists and `showClearButton` is true
- Includes search icon

## Navbar

### Purpose
Navigation bar component with logo, menu items, and mobile menu support.

### Props
- `logo` (React.ReactNode) - Logo element
- `menuItems` (Array) - Array of menu items with `label`, `href`, `onClick`
- `rightContent` (React.ReactNode) - Content to display on the right side
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `navbar` - Main container
- `navbar-container` - Inner container
- `navbar-logo` - Logo container
- `navbar-menu` - Menu items container
- `navbar-item` - Individual menu item
- `navbar-right` - Right content container
- `navbar-mobile-toggle` - Mobile menu toggle button

### Usage Example
```jsx
<Navbar
  logo={<img src="logo.png" alt="Logo" />}
  menuItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]}
  rightContent={<Button>Login</Button>}
/>
```

### Notes / Constraints
- Supports both href links and onClick handlers
- Includes mobile menu toggle
- Responsive design

## Sidebar

### Purpose
Sidebar navigation component with collapsible menu items and nested support.

### Props
- `items` (Array) - Array of sidebar items with `label`, `icon`, `href`, `onClick`, `children`
- `collapsed` (boolean, default: `false`) - Collapse sidebar
- `onToggle` (Function) - Toggle collapse handler
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `sidebar` - Main container
- `sidebar-header` - Header section
- `sidebar-menu` - Menu container
- `sidebar-item` - Individual menu item
- `sidebar-item-icon` - Item icon
- `sidebar-item-label` - Item label
- `sidebar-item-children` - Nested items container

### Usage Example
```jsx
<Sidebar
  items={[
    { label: 'Dashboard', icon: <Icon />, href: '/dashboard' },
    { label: 'Settings', icon: <Icon />, children: [
      { label: 'Profile', href: '/settings/profile' },
    ]},
  ]}
  collapsed={false}
  onToggle={() => {}}
/>
```

### Notes / Constraints
- Supports nested menu items
- Can be collapsed/expanded
- Includes icons for items

## ImageGallery

### Purpose
Image gallery component with lightbox, thumbnail navigation, and keyboard controls.

### Props
- `images` (Array, default: `[]`) - Array of image URLs (strings) or objects with `src` and `alt`
- `showThumbnails` (boolean, default: `true`) - Show thumbnail navigation
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `image-gallery` - Main container
- `image-gallery-grid` - Grid of images
- `image-gallery-item` - Individual image item
- `image-gallery-lightbox` - Lightbox overlay
- `image-gallery-close` - Close button
- `image-gallery-nav` - Navigation buttons
- `image-gallery-prev`, `image-gallery-next` - Previous/Next buttons
- `image-gallery-counter` - Image counter display
- `image-gallery-thumbnails` - Thumbnails container

### Usage Example
```jsx
<ImageGallery
  images={[
    '/image1.jpg',
    { src: '/image2.jpg', alt: 'Image 2' },
  ]}
  showThumbnails={true}
/>
```

### Notes / Constraints
- Supports both string URLs and image objects
- Lightbox opens on image click
- Keyboard navigation (Arrow keys, Escape)
- Shows image counter in lightbox
- Prevents body scroll when lightbox is open
- Thumbnails only show when there are multiple images

## VideoPlayer

### Purpose
Video player component with controls, playback, and customization options.

### Props
- `src` (string) - Video source URL
- `poster` (string) - Poster image URL
- `controls` (boolean, default: `true`) - Show video controls
- `autoplay` (boolean, default: `false`) - Auto-play video
- `loop` (boolean, default: `false`) - Loop video
- `muted` (boolean, default: `false`) - Mute video
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `video-player` - Main container
- `video-player-video` - Video element
- `video-player-controls` - Controls container

### Usage Example
```jsx
<VideoPlayer
  src="/video.mp4"
  poster="/poster.jpg"
  controls={true}
  autoplay={false}
  loop={false}
/>
```

### Notes / Constraints
- Uses native HTML5 video element
- Supports standard video attributes
- Includes custom controls styling

## AudioPlayer

### Purpose
Audio player component with playback controls and progress tracking.

### Props
- `src` (string) - Audio source URL
- `title` (string) - Audio title
- `artist` (string) - Artist name
- `autoplay` (boolean, default: `false`) - Auto-play audio
- `loop` (boolean, default: `false`) - Loop audio
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `audio-player` - Main container
- `audio-player-info` - Title and artist info
- `audio-player-controls` - Playback controls
- `audio-player-progress` - Progress bar

### Usage Example
```jsx
<AudioPlayer
  src="/audio.mp3"
  title="Song Title"
  artist="Artist Name"
  autoplay={false}
  loop={false}
/>
```

### Notes / Constraints
- Uses native HTML5 audio element
- Includes custom controls and progress bar
- Shows title and artist information

## Chart

### Purpose
Chart component for displaying data visualizations (line, bar, pie, etc.).

### Props
- `type` (string, default: `"line"`) - Chart type: 'line', 'bar', 'pie', 'area'
- `data` (Array) - Chart data array
- `options` (Object) - Chart configuration options
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `chart` - Main container
- `chart-canvas` - Canvas element for rendering

### Usage Example
```jsx
<Chart
  type="line"
  data={[
    { label: 'Jan', value: 10 },
    { label: 'Feb', value: 20 },
  ]}
  options={{ /* chart options */ }}
/>
```

### Notes / Constraints
- Supports multiple chart types
- Requires chart data in specific format
- Customizable through options object

## DataTable

### Purpose
Advanced data table component with sorting, filtering, pagination, and selection.

### Props
- `columns` (Array) - Array of column definitions
- `data` (Array) - Table data array
- `sortable` (boolean, default: `false`) - Enable column sorting
- `filterable` (boolean, default: `false`) - Enable filtering
- `selectable` (boolean, default: `false`) - Enable row selection
- `pagination` (boolean, default: `false`) - Enable pagination
- `pageSize` (number, default: `10`) - Items per page
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `data-table` - Main container
- `data-table-header` - Header with filters
- `data-table-content` - Table content
- `data-table-pagination` - Pagination controls

### Usage Example
```jsx
<DataTable
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', filterable: true },
  ]}
  data={tableData}
  sortable={true}
  filterable={true}
  selectable={true}
  pagination={true}
  pageSize={10}
/>
```

### Notes / Constraints
- More advanced than basic Table component
- Supports sorting, filtering, and selection
- Includes pagination controls
- Handles large datasets efficiently

## Form

### Purpose
Form component with validation, field management, and submission handling.

### Props
- `onSubmit` (Function) - Form submission handler (receives form data)
- `initialValues` (Object, default: `{}`) - Initial form field values
- `validation` (Object) - Validation rules object
- `children` (React.ReactNode) - Form fields and content
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `form` - Main form container
- `form-field` - Individual form field wrapper
- `form-error` - Error message display
- `form-actions` - Submit/action buttons container

### Usage Example
```jsx
<Form
  onSubmit={(data) => console.log('Form data:', data)}
  initialValues={{ name: '', email: '' }}
  validation={{
    name: { required: true },
    email: { required: true, type: 'email' },
  }}
>
  <Input name="name" label="Name" />
  <Input name="email" label="Email" type="email" />
  <Button type="submit">Submit</Button>
</Form>
```

### Notes / Constraints
- Manages form state internally
- Validates fields based on rules
- Handles form submission
- Displays validation errors

## Select

### Purpose
Select dropdown component with search, multi-select, and custom options.

### Props
- `options` (Array, default: `[]`) - Array of option objects with `value` and `label`
- `value` (any) - Selected value(s) for single or multi-select
- `onChange` (Function) - Change handler (receives selected value)
- `placeholder` (string, default: `"Select an option..."`) - Placeholder text
- `multiple` (boolean, default: `false`) - Enable multi-select
- `searchable` (boolean, default: `false`) - Enable search functionality
- `disabled` (boolean, default: `false`) - Disable select
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `select` - Main container
- `select-trigger` - Trigger button
- `select-value` - Selected value display
- `select-menu` - Dropdown menu
- `select-option` - Individual option
- `select-search` - Search input (if searchable)

### Usage Example
```jsx
<Select
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose..."
  searchable={true}
  multiple={false}
/>
```

### Notes / Constraints
- Supports single and multi-select
- Searchable option filters options
- Closes when clicking outside
- Selected options are highlighted

## DateRangePicker

### Purpose
Date range picker component for selecting start and end dates.

### Props
- `startDate` (Date) - Start date value
- `endDate` (Date) - End date value
- `onChange` (Function) - Change handler (receives { startDate, endDate })
- `minDate` (Date) - Minimum selectable date
- `maxDate` (Date) - Maximum selectable date
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `date-range-picker` - Main container
- `date-range-calendar` - Calendar component (shared with Calendar)
- `date-range-inputs` - Input fields for dates

### Usage Example
```jsx
<DateRangePicker
  startDate={startDate}
  endDate={endDate}
  onChange={({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }}
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
/>
```

### Notes / Constraints
- Uses Calendar component internally
- Validates date range (end date must be after start date)
- Supports min/max date constraints
- Shows two calendars side by side

## TimePicker

### Purpose
Time picker component for selecting hours and minutes.

### Props
- `value` (Date|string) - Selected time value
- `onChange` (Function) - Change handler (receives time value)
- `format` (string, default: `"24h"`) - Time format: '12h', '24h'
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `time-picker` - Main container
- `time-picker-input` - Time input field
- `time-picker-dropdown` - Time selection dropdown
- `time-picker-hour` - Hour selector
- `time-picker-minute` - Minute selector

### Usage Example
```jsx
<TimePicker
  value={selectedTime}
  onChange={setSelectedTime}
  format="24h"
/>
```

### Notes / Constraints
- Supports 12-hour and 24-hour formats
- Includes hour and minute selection
- Can use native time input or custom picker

## ColorPicker

### Purpose
Color picker component for selecting colors with various input methods.

### Props
- `value` (string) - Selected color value (hex, rgb, etc.)
- `onChange` (Function) - Change handler (receives color value)
- `format` (string, default: `"hex"`) - Color format: 'hex', 'rgb', 'hsl'
- `presetColors` (Array) - Array of preset color values
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `color-picker` - Main container
- `color-picker-preview` - Color preview display
- `color-picker-input` - Color input field
- `color-picker-presets` - Preset colors container

### Usage Example
```jsx
<ColorPicker
  value="#ff0000"
  onChange={(color) => setColor(color)}
  format="hex"
  presetColors={['#ff0000', '#00ff00', '#0000ff']}
/>
```

### Notes / Constraints
- Supports multiple color formats
- Includes color preview
- Can show preset colors for quick selection
- Validates color values

## RichTextEditor

### Purpose
Rich text editor component with formatting tools (bold, italic, lists, etc.).

### Props
- `value` (string) - Editor content (HTML string)
- `onChange` (Function) - Change handler (receives HTML content)
- `placeholder` (string) - Placeholder text
- `toolbar` (Array) - Array of toolbar button configurations
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `rich-text-editor` - Main container
- `rich-text-editor-toolbar` - Toolbar with formatting buttons
- `rich-text-editor-content` - Editable content area

### Usage Example
```jsx
<RichTextEditor
  value={content}
  onChange={setContent}
  placeholder="Start typing..."
  toolbar={['bold', 'italic', 'underline', 'list']}
/>
```

### Notes / Constraints
- Provides WYSIWYG editing
- Includes formatting toolbar
- Outputs HTML content
- Supports various formatting options

## CodeEditor

### Purpose
Code editor component with syntax highlighting and line numbers.

### Props
- `value` (string) - Code content
- `onChange` (Function) - Change handler (receives code content)
- `language` (string, default: `"javascript"`) - Programming language for syntax highlighting
- `theme` (string, default: `"light"`) - Editor theme: 'light', 'dark'
- `readOnly` (boolean, default: `false`) - Make editor read-only
- `lineNumbers` (boolean, default: `true`) - Show line numbers
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `code-editor` - Main container
- `code-editor-content` - Code content area
- `code-editor-line-numbers` - Line numbers container

### Usage Example
```jsx
<CodeEditor
  value={code}
  onChange={setCode}
  language="javascript"
  theme="dark"
  lineNumbers={true}
  readOnly={false}
/>
```

### Notes / Constraints
- Supports syntax highlighting for multiple languages
- Includes line numbers
- Supports light and dark themes
- Can be read-only for code display

## TreeView

### Purpose
Tree view component for displaying hierarchical data with expand/collapse.

### Props
- `data` (Array) - Array of tree node objects with `label`, `children`, `id`
- `onSelect` (Function) - Node selection handler (receives selected node)
- `expanded` (Array, default: `[]`) - Array of expanded node IDs
- `selected` (string|number) - Selected node ID
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `tree-view` - Main container
- `tree-node` - Individual tree node
- `tree-node-label` - Node label
- `tree-node-children` - Nested children container
- `tree-node-expand` - Expand/collapse icon

### Usage Example
```jsx
<TreeView
  data={[
    {
      id: 1,
      label: 'Parent',
      children: [
        { id: 2, label: 'Child 1' },
        { id: 3, label: 'Child 2' },
      ],
    },
  ]}
  onSelect={(node) => console.log('Selected:', node)}
  expanded={[1]}
  selected={2}
/>
```

### Notes / Constraints
- Supports nested hierarchical data
- Nodes can be expanded/collapsed
- Highlights selected node
- Recursive rendering of children

## DragDrop

### Purpose
Drag and drop component for reordering items and drag-and-drop functionality.

### Props
- `items` (Array) - Array of draggable items
- `onReorder` (Function) - Reorder handler (receives new items array)
- `renderItem` (Function) - Function to render each item (receives item and index)
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `drag-drop` - Main container
- `drag-drop-item` - Individual draggable item
- `dragging` - Dragging state class
- `drag-handle` - Drag handle element

### Usage Example
```jsx
<DragDrop
  items={items}
  onReorder={setItems}
  renderItem={(item, index) => (
    <div key={index}>{item.label}</div>
  )}
/>
```

### Notes / Constraints
- Supports reordering items via drag and drop
- Provides visual feedback during dragging
- Custom render function for item display
- Handles drag start, drag over, and drop events

## Wizard

### Purpose
Wizard component for multi-step forms with progress indication and navigation.

### Props
- `steps` (Array) - Array of step objects with `title`, `content`, `validation`
- `currentStep` (number, default: `0`) - Current active step index
- `onNext` (Function) - Next step handler
- `onPrevious` (Function) - Previous step handler
- `onComplete` (Function) - Completion handler
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `wizard` - Main container
- `wizard-header` - Header with step indicators
- `wizard-content` - Current step content
- `wizard-actions` - Navigation buttons
- `wizard-progress` - Progress indicator

### Usage Example
```jsx
<Wizard
  steps={[
    { title: 'Step 1', content: <div>Content 1</div> },
    { title: 'Step 2', content: <div>Content 2</div> },
    { title: 'Step 3', content: <div>Content 3</div> },
  ]}
  currentStep={currentStep}
  onNext={() => setCurrentStep(prev => prev + 1)}
  onPrevious={() => setCurrentStep(prev => prev - 1)}
  onComplete={() => console.log('Wizard completed')}
/>
```

### Notes / Constraints
- Shows progress through steps
- Validates steps before allowing navigation
- Previous button disabled on first step
- Next button becomes "Complete" on last step

## Tour

### Purpose
Tour/onboarding component for guiding users through features with step-by-step highlights.

### Props
- `steps` (Array) - Array of tour step objects with `target`, `content`, `position`
- `isOpen` (boolean) - Tour visibility state
- `onClose` (Function) - Close handler
- `onComplete` (Function) - Completion handler
- `currentStep` (number, default: `0`) - Current step index
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `tour` - Main container
- `tour-overlay` - Overlay backdrop
- `tour-highlight` - Highlighted target element
- `tour-tooltip` - Tooltip with step content
- `tour-navigation` - Navigation buttons

### Usage Example
```jsx
<Tour
  steps={[
    {
      target: '.button-1',
      content: 'This is the first button',
      position: 'bottom',
    },
    {
      target: '.button-2',
      content: 'This is the second button',
      position: 'top',
    },
  ]}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onComplete={() => console.log('Tour completed')}
  currentStep={currentStep}
/>
```

### Notes / Constraints
- Highlights target elements
- Shows tooltip with step content
- Includes navigation (Next, Previous, Skip)
- Overlay dims non-targeted areas
- Closes on completion or user action

## Chat

### Purpose
Chat component for displaying messages, input, and chat interface.

### Props
- `messages` (Array) - Array of message objects with `id`, `text`, `sender`, `timestamp`
- `onSend` (Function) - Send message handler (receives message text)
- `currentUser` (string) - Current user identifier
- `placeholder` (string, default: `"Type a message..."`) - Input placeholder
- `className` (string, default: `""`) - Additional CSS classes

### Structure
- `chat` - Main container
- `chat-messages` - Messages container
- `chat-message` - Individual message
- `chat-message-sender` - Sender name
- `chat-message-text` - Message text
- `chat-message-time` - Timestamp
- `chat-input` - Input area
- `chat-send` - Send button

### Usage Example
```jsx
<Chat
  messages={[
    { id: 1, text: 'Hello!', sender: 'User 1', timestamp: new Date() },
    { id: 2, text: 'Hi there!', sender: 'User 2', timestamp: new Date() },
  ]}
  onSend={(text) => sendMessage(text)}
  currentUser="User 1"
  placeholder="Type a message..."
/>
```

### Notes / Constraints
- Displays messages in chronological order
- Distinguishes between current user and other users
- Shows timestamps for messages
- Includes input field and send button
- Auto-scrolls to latest message

