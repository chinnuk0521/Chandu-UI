# Component Library Usage Guide

**Last Updated: November 2025**

## Installation

```bash
npm install chandu-ui-components
# or
npm i chandu-ui-components
```

## Quick Start

```jsx
import React from 'react';
import { Header, Hero, Autocomplete } from 'chandu-ui-components';

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

## Importing Styles

Each component requires its CSS file to be imported:

```jsx
// Option 1: Import individual component styles
import 'chandu-ui-components/dist/Header.css';
import 'chandu-ui-components/dist/Autocomplete.css';

// Option 2: Import all styles (if bundled)
import 'chandu-ui-components/dist/index.css';
```

## Components

### Layout Components

#### Header
Navigation header with mobile menu support.

```jsx
import { Header } from 'chandu-ui-components';

<Header
  logo="My App"
  menuItems={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ]}
  onMenuItemClick={(item) => console.log(item)}
/>
```

#### Hero
Full-screen hero section.

```jsx
import { Hero } from 'chandu-ui-components';

<Hero
  title="Welcome to Our App"
  subtitle="Innovation Meets Excellence"
  description="We build amazing products"
  buttons={[
    { label: 'Get Started', onClick: () => {}, variant: 'primary' },
    { label: 'Learn More', onClick: () => {}, variant: 'secondary' },
  ]}
/>
```

#### Footer
Multi-column footer with links and social media.

```jsx
import { Footer } from 'chandu-ui-components';

<Footer
  logo="My App"
  description="Building the future"
  links={[
    {
      title: 'Company',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
      ],
    },
  ]}
  socialLinks={[
    { icon: '📘', href: '#' },
    { icon: '🐦', href: '#' },
  ]}
/>
```

### Section Components

#### Features
Features grid section.

```jsx
import { Features } from 'chandu-ui-components';

<Features
  title="Our Features"
  subtitle="Everything you need"
  features={[
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Lightning-fast performance',
    },
  ]}
/>
```

#### About
About section with highlights.

```jsx
import { About } from 'chandu-ui-components';

<About
  title="About Us"
  description="We are a team of passionate developers"
  highlights={[
    '10+ Years of Experience',
    '500+ Successful Projects',
  ]}
/>
```

#### Services
Services grid section.

```jsx
import { Services } from 'chandu-ui-components';

<Services
  title="Our Services"
  services={[
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications',
    },
  ]}
/>
```

#### Contact
Contact form section.

```jsx
import { Contact } from 'chandu-ui-components';

<Contact
  title="Get In Touch"
  onSubmit={(formData) => console.log(formData)}
  contactInfo={{
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Street, City',
  }}
/>
```

### Form Components

#### Autocomplete
Multi-select autocomplete with search.

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
      allowCustomInput={true}
    />
  );
}
```

#### GlobalSearch
Global search component.

```jsx
import { GlobalSearch } from 'chandu-ui-components';

<GlobalSearch
  items={['Item 1', 'Item 2', 'Item 3']}
  onSelect={(item) => console.log('Selected:', item)}
  placeholder="Search..."
  maxResults={10}
/>
```

## TypeScript Support

The library is written in JavaScript but can be used with TypeScript. Type definitions may be added in future versions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

