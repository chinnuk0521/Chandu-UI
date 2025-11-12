import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import "./Footer.css";

/**
 * Footer Component for Tech Companies
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              <img src={Logo} alt="Chandu UI Logo" className="footer-logo-img" />
              <h3 className="footer-logo">Chandu UI</h3>
            </div>
            <p className="footer-description">
              Professional React component library for modern tech companies and
              startups.
            </p>
            <div className="footer-contact">
              <a href="mailto:chanduui@outlook.in" className="footer-email">
                <FaEnvelope />
                <span>chanduui@outlook.in</span>
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://github.com/chandu/components"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/chandu/components">Documentation</a>
              </li>
              <li>
                <a href="https://github.com/chandu/components">GitHub</a>
              </li>
              <li>
                <a href="#contact">Support</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Use Cases</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Chandu UI. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
