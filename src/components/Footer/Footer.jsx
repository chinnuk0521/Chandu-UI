/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Footer
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
  FaBook,
} from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import "./Footer.css";

/**
 * Footer Component for Tech Companies
 */
export default function Footer() {
  const navigate = useNavigate();
  const githubRepo = "https://github.com/chinnuk0521/Chandu-UI";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              <img
                src={Logo}
                alt="Chandu UI Logo"
                className="footer-logo-img"
              />
              <h3 className="footer-logo">Chandu UI</h3>
            </div>
            <p className="footer-description">
              Professional React component library for modern tech companies and
              startups. Open source and community-driven.
            </p>
            <div className="footer-contact">
              <a href="mailto:chanduui@outlook.in" className="footer-email">
                <FaEnvelope />
                <span>chanduui@outlook.in</span>
              </a>
            </div>
            <div className="footer-social">
              <a
                href={githubRepo}
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
                <a
                  href="/docs"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/docs");
                  }}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href={githubRepo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`${githubRepo}/blob/master/CHANGELOG.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Community</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={`${githubRepo}/blob/master/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href={`${githubRepo}/blob/master/CODE_OF_CONDUCT.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href={`${githubRepo}/blob/master/SECURITY.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Security Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal/maintainers"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/legal/maintainers");
                  }}
                >
                  Maintainers
                </a>
              </li>
              <li>
                <a
                  href={`${githubRepo}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a
                  href={`${githubRepo}/discussions`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/about");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#services">Use Cases</a>
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
            <a
              href="/legal/license"
              onClick={(e) => {
                e.preventDefault();
                navigate("/legal/license");
              }}
            >
              License
            </a>
            <a
              href="/legal/privacy"
              onClick={(e) => {
                e.preventDefault();
                navigate("/legal/privacy");
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/legal/terms"
              onClick={(e) => {
                e.preventDefault();
                navigate("/legal/terms");
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
