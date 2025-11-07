import React from 'react';
import './Hero.css';

/**
 * Reusable Hero Section Component
 * 
 * @param {string} title - Main heading
 * @param {string} subtitle - Subheading
 * @param {string} description - Description text
 * @param {Array} buttons - Array of button objects { label, onClick, variant }
 * @param {string} backgroundImage - Background image URL
 * @param {string} className - Additional CSS classes
 */
export default function Hero({
  title = 'Welcome to Chandu UI',
  subtitle = 'Innovation Meets Excellence',
  description = 'We build cutting-edge solutions that transform businesses and drive success in the digital age.',
  buttons = [
    { label: 'Get Started', onClick: () => {}, variant: 'primary' },
    { label: 'Learn More', onClick: () => {}, variant: 'secondary' },
  ],
  backgroundImage,
  className = '',
}) {
  return (
    <section className={`hero ${className}`} id="home" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          <h1 className="hero-title">{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          {buttons.length > 0 && (
            <div className="hero-buttons">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`hero-button ${button.variant || 'primary'}`}
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

