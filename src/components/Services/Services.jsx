import React from "react";
import {
  HiBriefcase,
  HiRocketLaunch,
  HiBuildingOffice,
  HiChartBar,
  HiShoppingBag,
  HiCog6Tooth,
} from "react-icons/hi2";
import "./Services.css";

/**
 * Services/Use Cases Component for Tech Companies
 */
export default function Services() {
  const useCases = [
    {
      title: "SaaS Applications",
      description:
        "Perfect for building modern SaaS platforms with professional UI components that scale.",
      icon: HiBriefcase,
    },
    {
      title: "Startup MVPs",
      description:
        "Ship your MVP faster with pre-built components that look professional out of the box.",
      icon: HiRocketLaunch,
    },
    {
      title: "Enterprise Apps",
      description:
        "Enterprise-grade components with accessibility and performance built-in from the start.",
      icon: HiBuildingOffice,
    },
    {
      title: "Admin Dashboards",
      description:
        "Build powerful admin interfaces with our comprehensive set of form and data components.",
      icon: HiChartBar,
    },
    {
      title: "E-commerce Platforms",
      description:
        "Create beautiful shopping experiences with our flexible card and layout components.",
      icon: HiShoppingBag,
    },
    {
      title: "Developer Tools",
      description:
        "Perfect for building developer-facing tools with clean, professional interfaces.",
      icon: HiCog6Tooth,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Perfect For</h2>
          <p className="services-subtitle">
            Use cases where professional, reliable components make all the
            difference
          </p>
        </div>
        <div className="services-grid">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3 className="service-title">{useCase.title}</h3>
                <p className="service-description">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
