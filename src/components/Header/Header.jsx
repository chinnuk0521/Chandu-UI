import React, { useState, useEffect } from 'react';
import './Header.css';

// Import logo image
import logoImage from '../../assets/Logo.svg';

/**
 * Reusable Header/Navigation Component
 * 
 * @param {Array} menuItems - Array of menu items { label, href }
 * @param {string} logo - Logo text or image URL
 * @param {Function} onMenuItemClick - Callback when menu item is clicked
 * @param {string} className - Additional CSS classes
 */
export default function Header({
  menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ],
  logo = 'Chandu UI',
  onMenuItemClick,
  className = '',
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (item) => {
    setIsMobileMenuOpen(false);
    onMenuItemClick?.(item);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${className}`}>
      <div className="header-container">
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector('#home');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img 
            src={logoImage} 
            alt="Chandu UI Logo" 
            className="logo-image"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
            }}
          />
        </a>
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
                if (item.href.startsWith('#')) {
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

