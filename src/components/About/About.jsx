import React from "react";
import "./About.css";

/**
 * About Component for Tech Companies
 */
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Built for Modern Teams</h2>
            <p className="about-description">
              Chandu UI is a comprehensive React component library designed
              specifically for tech companies and startups. We understand the
              challenges of building modern web applications - you need
              components that are reliable, performant, and easy to integrate.
            </p>
            <p className="about-description">
              Our components are production-ready, fully accessible, and
              optimized for performance. Whether you're building a SaaS
              platform, a startup MVP, or an enterprise application, Chandu UI
              provides the building blocks you need to ship faster.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">71+</div>
                <div className="stat-label">Components</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Accessible</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">Dependencies</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <div className="mac-card">
                <div className="code-block">
                  <div className="code-header">
                    <div className="code-dots">
                      <span className="code-dot code-dot-red"></span>
                      <span className="code-dot code-dot-yellow"></span>
                      <span className="code-dot code-dot-green"></span>
                    </div>
                    <span className="code-filename">example.jsx</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">import</span>
                      <span className="code-bracket">{" {"}</span>
                      <span className="code-identifier"> Button </span>
                      <span className="code-bracket">{"}"}</span>
                      <span className="code-keyword"> from</span>
                    </div>
                    <div className="code-line">
                      <span className="code-string"> '@chandu/components'</span>
                      <span className="code-punctuation">;</span>
                    </div>
                    <div className="code-line code-empty"></div>
                    <div className="code-line">
                      <span className="code-tag">&lt;</span>
                      <span className="code-component">Button</span>
                      <span className="code-attr"> variant</span>
                      <span className="code-operator">=</span>
                      <span className="code-string">"primary"</span>
                      <span className="code-tag">&gt;</span>
                    </div>
                    <div className="code-line">
                      <span className="code-text"> Get Started</span>
                    </div>
                    <div className="code-line">
                      <span className="code-tag">&lt;/</span>
                      <span className="code-component">Button</span>
                      <span className="code-tag">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
