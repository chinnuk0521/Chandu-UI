import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import ComponentsPage from "./pages/ComponentsPage";
import DocsPage from "./pages/DocsPage";
import LegalPage from "./pages/LegalPage";
import AboutUsPage from "./pages/AboutUsPage";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  // Apply dark mode class to body and html, and persist to localStorage
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

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header 
        logo="Chandu UI"
        viewComponentsButton={{
          label: "Components",
          onClick: () => {
            navigate("/components/Button");
          }
        }}
      />

      <Hero
        title="Build Modern UIs Faster"
        subtitle="Professional React Component Library"
        description="Production-ready components designed for tech companies and startups. Ship faster with beautiful, accessible, and customizable React components."
        buttons={[
          {
            label: "Components",
            onClick: () => {
              navigate("/components/Button");
            },
            variant: "primary",
          },
          {
            label: "Documentation",
            onClick: () => {
              navigate("/docs");
            },
            variant: "secondary",
          },
        ]}
      />

      <Features />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/components/:componentName" element={<ComponentsPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/legal/:documentType" element={<LegalPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
