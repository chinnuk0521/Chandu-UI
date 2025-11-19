/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## AboutUsPage
 */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiRocketLaunch,
  HiLightBulb,
  HiShieldCheck,
  HiSparkles,
  HiGlobeAlt,
  HiUserGroup,
  HiChartBar,
} from "react-icons/hi2";
import { HiCode } from "react-icons/hi";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import "./AboutUsPage.css";

/**
 * About Us Page Component
 * 
 * A comprehensive about page that tells the story of Chandu UI,
 * explaining what it is, why it exists, and who it helps.
 */
export default function AboutUsPage() {
  const navigate = useNavigate();
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

  const whyChooseUs = [
    {
      icon: HiShieldCheck,
      title: "Production Ready",
      description:
        "Every component is battle-tested and used in real-world applications. No experimental code, just reliable solutions.",
    },
    {
      icon: HiCode,
      title: "Developer First",
      description:
        "Built by developers, for developers. Intuitive APIs, comprehensive documentation, and TypeScript support included.",
    },
    {
      icon: HiSparkles,
      title: "Modern & Accessible",
      description:
        "Following the latest web standards and WCAG guidelines. Your applications will be accessible to everyone.",
    },
    {
      icon: HiRocketLaunch,
      title: "Performance Optimized",
      description:
        "Lightweight, tree-shakeable, and optimized for speed. Your users will notice the difference.",
    },
    {
      icon: HiUserGroup,
      title: "Community Driven",
      description:
        "Open source and community-driven. Regular updates, active maintenance, and responsive support.",
    },
  ];

  const whatWeOffer = [
    {
      icon: HiChartBar,
      title: "69+ Components",
      description:
        "A comprehensive library covering everything from basic buttons to complex data tables and charts.",
    },
    {
      icon: HiGlobeAlt,
      title: "Fully Responsive",
      description:
        "Mobile-first design that works seamlessly across all devices, from phones to large desktop screens.",
    },
    {
      icon: HiLightBulb,
      title: "Easy Customization",
      description:
        "Customize everything with CSS variables or override styles. Match your brand identity effortlessly.",
    },
    {
      icon: HiShieldCheck,
      title: "Type Safe",
      description:
        "Full TypeScript support with comprehensive type definitions for better development experience.",
    },
  ];

  return (
    <div className={`app about-us-page ${darkMode ? "dark-mode" : ""}`}>
      <Header
        logo="Chandu UI"
        viewComponentsButton={{
          label: "Components",
          onClick: () => {
            navigate("/components/Button");
          },
        }}
      />

      <Hero
        title="About Chandu UI"
        subtitle="Building the Future of Web Development"
        description="We're on a mission to help developers build better applications faster, with components that are reliable, accessible, and beautiful."
        buttons={[
          {
            label: "Components",
            onClick: () => navigate("/components/Button"),
            variant: "primary",
          },
          {
            label: "Documentation",
            onClick: () => navigate("/docs"),
            variant: "secondary",
          },
        ]}
      />

      {/* Our Story Section */}
      <section className="about-us-section story-section">
        <div className="about-us-container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              Why we built Chandu UI and the problem it solves
            </p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="story-paragraph">
                Building modern web applications shouldn't mean reinventing the
                wheel every time. Yet, developers constantly find themselves
                rebuilding the same components—buttons, forms, modals, tables—over
                and over again, wasting precious time that could be spent on
                solving real business problems.
              </p>
              <p className="story-paragraph">
                That's why we created Chandu UI. We saw developers struggling with
                inconsistent component libraries, accessibility issues, and
                performance problems. We wanted to provide a solution that's not
                just another component library, but a reliable foundation that
                developers can trust.
              </p>
              <p className="story-paragraph">
                Chandu UI was born from the frustration of working with
                over-engineered solutions and the desire to create something
                simple, powerful, and genuinely useful. We built it for tech
                companies and startups who need to move fast without compromising
                on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-us-section mission-section">
        <div className="about-us-container">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              What drives us every day
            </p>
          </div>
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">
                <HiRocketLaunch />
              </div>
              <h3 className="mission-title">Ship Faster</h3>
              <p className="mission-description">
                We believe developers should spend less time building UI components
                and more time creating value. Our components are ready to use,
                so you can focus on what makes your product unique.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <HiShieldCheck />
              </div>
              <h3 className="mission-title">Build Better</h3>
              <p className="mission-description">
                Quality shouldn't be optional. Every component is built with
                accessibility, performance, and maintainability in mind from day
                one.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <HiUserGroup />
              </div>
              <h3 className="mission-title">Empower Everyone</h3>
              <p className="mission-description">
                Great tools should be accessible to everyone. That's why Chandu UI
                is open source, well-documented, and free to use for any project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="about-us-section offer-section">
        <div className="about-us-container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Everything you need to build modern web applications
            </p>
          </div>
          <div className="offer-grid">
            {whatWeOffer.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="offer-card">
                  <div className="offer-icon">
                    <IconComponent />
                  </div>
                  <h3 className="offer-title">{item.title}</h3>
                  <p className="offer-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-us-section why-choose-section">
        <div className="about-us-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              What makes Chandu UI different
            </p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="why-choose-card">
                  <div className="why-choose-icon">
                    <IconComponent />
                  </div>
                  <h3 className="why-choose-title">{item.title}</h3>
                  <p className="why-choose-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Vision Ahead Section */}
      <section className="about-us-section vision-section">
        <div className="about-us-container">
          <div className="section-header">
            <h2 className="section-title">The Vision Ahead</h2>
            <p className="section-subtitle">
              Where we're heading and what's next
            </p>
          </div>
          <div className="vision-content">
            <div className="vision-text">
              <p className="vision-paragraph">
                We're just getting started. Our roadmap includes expanding the
                component library, adding more advanced features, and building a
                thriving community of developers who contribute and improve the
                project together.
              </p>
              <p className="vision-paragraph">
                We're committed to keeping Chandu UI open source, well-maintained,
                and aligned with the latest web standards. As React and the web
                platform evolve, so will we.
              </p>
              <div className="vision-goals">
                <div className="vision-goal-item">
                  <div className="vision-goal-icon">
                    <HiSparkles />
                  </div>
                  <div className="vision-goal-content">
                    <h4 className="vision-goal-title">More Components</h4>
                    <p className="vision-goal-description">
                      Continuously adding new components based on community needs
                      and real-world use cases.
                    </p>
                  </div>
                </div>
                <div className="vision-goal-item">
                  <div className="vision-goal-icon">
                    <HiCode />
                  </div>
                  <div className="vision-goal-content">
                    <h4 className="vision-goal-title">Better Documentation</h4>
                    <p className="vision-goal-description">
                      Expanding documentation with more examples, guides, and
                      best practices.
                    </p>
                  </div>
                </div>
                <div className="vision-goal-item">
                  <div className="vision-goal-icon">
                    <HiGlobeAlt />
                  </div>
                  <div className="vision-goal-content">
                    <h4 className="vision-goal-title">Growing Community</h4>
                    <p className="vision-goal-description">
                      Building a vibrant community where developers can share,
                      learn, and contribute together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

