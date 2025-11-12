# chandu-ui-components

A production-ready, reusable React component library. Similar to Material-UI and MUI.

## Installation

```bash
npm install chandu-ui-components
# or
yarn add chandu-ui-components
# or
pnpm add chandu-ui-components
```

## Quick Start

```jsx
import React from 'react';
import { Header, Hero, Autocomplete } from 'chandu-ui-components';
import 'chandu-ui-components/dist/Header.css';
import 'chandu-ui-components/dist/Autocomplete.css';

function App() {
  return (
    <>
      <Header />
      <Hero title="Welcome" />
      <Autocomplete options={['Option 1', 'Option 2']} />
    </>
  );
}
```

## Components

**Total: 69 production-ready components**

All components have been modernized with:
- ✨ Modern, professional design with glassmorphic effects
- 🎨 Animated gradients and smooth transitions
- 🌙 Full dark mode support
- 📱 Complete responsive design
- ♿ Enhanced accessibility features
- 🎯 Interactive hover effects and animations

### Layout Components

- **Header** - Navigation header with mobile menu
- **Hero** - Full-screen hero section
- **Footer** - Multi-column footer
- **Navbar** - Navigation bar component
- **Sidebar** - Sidebar navigation component

### Section Components

- **Features** - Features grid section with modern card design and animations
- **About** - About section with stats, code examples, and modern styling
- **Services** - Services grid section with enhanced cards and hover effects

### Form Components

- **Autocomplete** - Multi-select autocomplete with search
- **GlobalSearch** - Global search component
- **Input** - Text input with label, error, and helper text
- **Textarea** - Multi-line text input
- **Select** - Select dropdown component
- **Checkbox** - Checkbox input component
- **Radio** - Radio button component
- **Switch** - Toggle switch component
- **Form** - Form component with validation
- **FileUpload** - File upload component with drag and drop support
- **DateRangePicker** - Date range picker component
- **TimePicker** - Time picker component
- **ColorPicker** - Color picker component

### UI Components

- **Button** - Button component with variants and sizes
- **Card** - Card component for displaying content
- **Modal** - Modal/Dialog component
- **Badge** - Badge component for labels and tags
- **Avatar** - Avatar component with image or initials
- **Spinner** - Loading spinner component
- **Tabs** - Tabs component for organizing content
- **Chip** - Chip component for labels and tags
- **Tag** - Tag component for labels and categories
- **Divider** - Divider component for visual separation
- **Skeleton** - Skeleton loading component
- **Progress** - Progress bar component
- **Slider** - Slider component for range selection
- **Rating** - Rating component with stars
- **Accordion** - Accordion component for collapsible content
- **Drawer** - Drawer component for side panels
- **Popover** - Popover component for contextual information
- **Tooltip** - Tooltip component for hover information
- **Menu** - Menu component for dropdown menus
- **Dropdown** - Dropdown component for selections
- **SearchBar** - Search bar component
- **Breadcrumb** - Breadcrumb navigation component
- **Pagination** - Pagination component for navigation
- **Stepper** - Stepper component for multi-step processes
- **List** - List component for displaying items

### Data Display Components

- **Table** - Data table component for displaying structured data
- **DataTable** - Advanced data table with sorting and filtering
- **Timeline** - Timeline component for displaying chronological events
- **TreeView** - Tree view component for hierarchical data
- **CodeViewer** - Code viewer component for displaying code
- **Chart** - Chart component with interactive tooltips and modern data table visualization

### Media Components

- **ImageGallery** - Modern image gallery with lightbox and Unsplash integration
- **VideoPlayer** - Professional video player with advanced controls and buffer indicators
- **AudioPlayer** - Modern audio player with cover art, equalizer animations, and enhanced controls
- **Carousel** - Image/content carousel with directional animations and modern styling

### Feedback Components

- **Alert** - Alert component for notifications
- **Toast** - Toast notification component
- **ToastContainer** - Toast container component
- **Notification** - Notification component for displaying alerts
- **Snackbar** - Snackbar component for temporary messages
- **Backdrop** - Backdrop component for modal overlays

### Advanced Components

- **RichTextEditor** - Rich text editor component with improved functionality and cursor handling
- **CodeEditor** - Code editor component
- **Calendar** - Calendar component for date selection (aligned with DateRangePicker)
- **DragDrop** - Drag and drop component with modern card-style design
- **Wizard** - Multi-step wizard component with navigation buttons and modern styling
- **Tour** - Product tour/onboarding component with element highlighting and automatic positioning
- **Chat** - Modern chat interface component with card-style design and animations

## Usage Examples

### Header Component

```jsx
import { Header } from 'chandu-ui-components';

<Header
  logo="My App"
  menuItems={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ]}
/>
```

### Hero Component

```jsx
import { Hero } from 'chandu-ui-components';

<Hero
  title="Welcome to Our App"
  subtitle="Innovation Meets Excellence"
  description="We build amazing products"
  buttons={[
    { label: 'Get Started', onClick: () => {}, variant: 'primary' },
  ]}
/>
```

### Autocomplete Component

```jsx
import { Autocomplete } from 'chandu-ui-components';
import { useState } from 'react';

function MyComponent() {
  const [selected, setSelected] = useState([]);
  
  return (
    <Autocomplete
      options={['Apple', 'Banana', 'Cherry']}
      value={selected}
      onChange={setSelected}
      placeholder="Search..."
    />
  );
}
```

### GlobalSearch Component

```jsx
import { GlobalSearch } from 'chandu-ui-components';

<GlobalSearch
  items={['Item 1', 'Item 2', 'Item 3']}
  onSelect={(item) => console.log('Selected:', item)}
  placeholder="Search..."
/>
```

### Button Component

```jsx
import { Button } from 'chandu-ui-components';

<Button variant="primary" size="medium" onClick={() => {}}>
  Click Me
</Button>
<Button variant="primary" loading>Loading...</Button>
```

### Card Component

```jsx
import { Card } from 'chandu-ui-components';

<Card
  title="Card Title"
  subtitle="Card Subtitle"
  image={<img src="..." alt="..." />}
  footer={<Button>Action</Button>}
>
  Card content goes here
</Card>
```

### Input Component

```jsx
import { Input } from 'chandu-ui-components';

<Input
  label="Name"
  placeholder="Enter your name"
  required
  helperText="Helper text"
/>
<Input
  label="Email"
  type="email"
  error="Invalid email"
/>
```

### Modal Component

```jsx
import { Modal } from 'chandu-ui-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        Modal content
      </Modal>
    </>
  );
}
```

### Badge Component

```jsx
import { Badge } from 'chandu-ui-components';

<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error" size="small">Error</Badge>
```

### Avatar Component

```jsx
import { Avatar } from 'chandu-ui-components';

<Avatar name="John Doe" size="medium" />
<Avatar src="/path/to/image.jpg" alt="User" />
```

### Spinner Component

```jsx
import { Spinner } from 'chandu-ui-components';

<Spinner size="medium" variant="primary" />
```

### Tabs Component

```jsx
import { Tabs } from 'chandu-ui-components';

<Tabs
  tabs={[
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  onChange={(index, tab) => console.log('Tab changed:', index)}
/>
```

## Styling

Import the main stylesheet to get all component styles:

```jsx
// Import all component styles
import 'chandu-ui-components/dist/style.css';
```

This will include styles for all 69 components. The styles are optimized and minified for production use.

## Props Documentation

### Header Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `Array` | `[]` | Array of menu items |
| `logo` | `string` | `'Chandu UI'` | Logo text |
| `onMenuItemClick` | `Function` | `undefined` | Menu item click handler |
| `className` | `string` | `''` | Additional CSS classes |

### Autocomplete Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array` | `[]` | Array of options |
| `value` | `Array` | `[]` | Selected values |
| `onChange` | `Function` | `undefined` | Change handler |
| `placeholder` | `string` | `'Type to search...'` | Placeholder text |
| `allowCustomInput` | `boolean` | `true` | Allow custom input |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Preview build
npm run preview
```

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

We have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors are expected to follow.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

For detailed instructions, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

We take security seriously. If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md).

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via:
- Email: [security@chanduui.com] (or your preferred security contact)
- GitHub Security Advisory: [Private Vulnerability Reporting](https://github.com/chinnuk0521/Chandu-UI/security/advisories/new)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Maintainers

See [MAINTAINERS.md](MAINTAINERS.md) for information about project maintainers.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## Support

- 📖 [Documentation](README.md)
- 💬 [Discussions](https://github.com/chinnuk0521/Chandu-UI/discussions)
- 🐛 [Issues](https://github.com/chinnuk0521/Chandu-UI/issues)
- 🔒 [Security](SECURITY.md)

## Author

**Chandu UI**

- GitHub: [@chinnuk0521](https://github.com/chinnuk0521)
- Project: [Chandu UI](https://github.com/chinnuk0521/Chandu-UI)

---

Made with ❤️ by the Chandu UI team
