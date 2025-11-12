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
import "./App.css";

function HomePage() {
  const navigate = useNavigate();
  const [darkModeChecked, setDarkModeChecked] = useState(() => {
    // Load dark mode preference from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

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
      <Header 
        logo="Chandu UI"
        viewComponentsButton={{
          label: "View Components",
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
    </Routes>
  );
}

export default App;
