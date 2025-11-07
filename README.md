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

### Layout Components

- **Header** - Navigation header with mobile menu
- **Hero** - Full-screen hero section
- **Footer** - Multi-column footer

### Section Components

- **Features** - Features grid section
- **About** - About section with highlights
- **Services** - Services grid section
- **Contact** - Contact form section

### Form Components

- **Autocomplete** - Multi-select autocomplete with search
- **GlobalSearch** - Global search component
- **Input** - Text input with label, error, and helper text

### UI Components

- **Button** - Button component with variants and sizes
- **Card** - Card component for displaying content
- **Modal** - Modal/Dialog component
- **Badge** - Badge component for labels and tags
- **Avatar** - Avatar component with image or initials
- **Spinner** - Loading spinner component
- **Tabs** - Tabs component for organizing content

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

Each component includes its own CSS file. Import the styles you need:

```jsx
// Import individual component styles
import 'chandu-ui-components/dist/Header.css';
import 'chandu-ui-components/dist/Autocomplete.css';

// Or import all styles (if available)
import 'chandu-ui-components/dist/index.css';
```

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

Contributions are welcome! Please read our contributing guidelines first.

## License

MIT

## Author

Chandu UI
