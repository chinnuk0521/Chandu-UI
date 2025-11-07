import React from 'react';
import { 
  HiBolt, 
  HiUserGroup, 
  HiPaintBrush, 
  HiDevicePhoneMobile, 
  HiRocketLaunch 
} from 'react-icons/hi2';
import { HiCode } from 'react-icons/hi';
import './Features.css';

/**
 * Features Component for Tech Companies
 */
export default function Features() {
  const features = [
    {
      icon: HiBolt,
      title: 'Lightning Fast',
      description: 'Optimized for performance with minimal bundle size. Components are tree-shakeable and load only what you need.',
    },
    {
      icon: HiUserGroup,
      title: 'Accessible',
      description: 'Built with accessibility in mind. All components follow WCAG guidelines and work with screen readers.',
    },
    {
      icon: HiPaintBrush,
      title: 'Customizable',
      description: 'Easy to customize and theme. Use CSS variables or override styles to match your brand identity.',
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Responsive',
      description: 'Mobile-first design that works seamlessly across all devices and screen sizes.',
    },
    {
      icon: HiCode,
      title: 'Developer Friendly',
      description: 'Well-documented with TypeScript support. Intuitive APIs that make development a breeze.',
    },
    {
      icon: HiRocketLaunch,
      title: 'Production Ready',
      description: 'Battle-tested components used in production. Regular updates and maintenance included.',
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Chandu UI?</h2>
          <p className="features-subtitle">
            Built for modern tech companies and startups who need reliable, professional components
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <IconComponent />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
