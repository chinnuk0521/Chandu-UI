import React, { useState, useRef } from "react";
import "./Chart.css";

/**
 * Reusable Chart Component
 *
 * @param {Array} data - Chart data points
 * @param {string} type - Chart type: 'line', 'bar', 'pie'
 * @param {string} title - Chart title
 * @param {string} className - Additional CSS classes
 */
export default function Chart({
  data = [],
  type = "line",
  title,
  className = "",
  ...props
}) {
  // Normalize data - handle both array format and Chart.js-like object format
  let normalizedData = [];
  
  if (Array.isArray(data)) {
    normalizedData = data;
  } else if (data && typeof data === 'object') {
    // Handle Chart.js-like format: { labels: [...], datasets: [{ data: [...] }] }
    if (data.labels && data.datasets && data.datasets[0] && Array.isArray(data.datasets[0].data)) {
      normalizedData = data.labels.map((label, index) => ({
        label: label,
        value: data.datasets[0].data[index] || 0
      }));
    } else {
      // Fallback: return empty array
      normalizedData = [];
    }
  }

  if (normalizedData.length === 0) {
    return (
      <div className={`chart chart-${type} ${className}`} {...props}>
        {title && <h3 className="chart-title">{title}</h3>}
        <div className="chart-container">
          <p style={{ padding: "2rem", textAlign: "center", color: "var(--text-secondary)" }}>
            No data available
          </p>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...normalizedData.map((d) => d.value || 0), 0);
  const [hoveredData, setHoveredData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = (data, event) => {
    setHoveredData(data);
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = event.currentTarget.getBoundingClientRect();
      
      // Calculate position relative to container
      const x = elementRect.left - containerRect.left + elementRect.width / 2;
      const y = elementRect.top - containerRect.top - 10;
      
      setTooltipPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  const renderLineChart = () => {
    // Add padding to viewBox (10% on each side)
    const padding = 10;
    const chartWidth = 100 - padding * 2;
    const chartHeight = 100 - padding * 2;
    
    const points = normalizedData
      .map((d, index) => {
        const x = padding + (index / (normalizedData.length - 1 || 1)) * chartWidth;
        const y = padding + chartHeight - ((d.value || 0) / maxValue) * chartHeight;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="2"
        />
        {normalizedData.map((d, index) => {
          const x = padding + (index / (normalizedData.length - 1 || 1)) * chartWidth;
          const y = padding + chartHeight - ((d.value || 0) / maxValue) * chartHeight;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2.5"
              fill="var(--accent-primary)"
              stroke="white"
              strokeWidth="1.5"
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || `Item ${index + 1}`, value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>
    );
  };

  const renderBarChart = () => {
    // Add padding to viewBox
    const padding = 8;
    const chartWidth = 100 - padding * 2;
    const chartHeight = 100 - padding * 2;
    const barWidth = chartWidth / normalizedData.length;

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(0, 51, 141, 0.7)" stopOpacity="1" />
          </linearGradient>
        </defs>
        {normalizedData.map((d, index) => {
          const height = ((d.value || 0) / maxValue) * chartHeight;
          const x = padding + index * barWidth;
          const y = padding + chartHeight - height;
          return (
            <rect
              key={index}
              x={x + barWidth * 0.15}
              y={y}
              width={barWidth * 0.7}
              height={height}
              fill="url(#barGradient)"
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || `Item ${index + 1}`, value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>
    );
  };

  const renderPieChart = () => {
    let currentAngle = 0;
    const total = normalizedData.reduce((sum, d) => sum + (d.value || 0), 0);
    const radius = 35; // Slightly smaller to add padding

    return (
      <svg viewBox="0 0 100 100" className="chart-svg" preserveAspectRatio="xMidYMid meet">
        {normalizedData.map((d, index) => {
          const angle = ((d.value || 0) / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const startX =
            50 + radius * Math.cos(((startAngle - 90) * Math.PI) / 180);
          const startY =
            50 + radius * Math.sin(((startAngle - 90) * Math.PI) / 180);
          const endX =
            50 + radius * Math.cos(((currentAngle - 90) * Math.PI) / 180);
          const endY =
            50 + radius * Math.sin(((currentAngle - 90) * Math.PI) / 180);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <path
              key={index}
              d={`M 50 50 L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY} Z`}
              fill={`hsl(${index * 60}, 70%, 50%)`}
              onMouseEnter={(e) => handleMouseEnter({ label: d.label || `Item ${index + 1}`, value: d.value || 0 }, e)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className={`chart chart-${type} ${className}`} {...props}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container" ref={containerRef}>
        {type === "line" && renderLineChart()}
        {type === "bar" && renderBarChart()}
        {type === "pie" && renderPieChart()}
        {hoveredData && (
          <div
            className="chart-tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            <table className="chart-tooltip-table">
              <tbody>
                <tr>
                  <td>{hoveredData.label}</td>
                  <td>{hoveredData.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="chart-data-table-container">
        <table className="chart-data-table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {normalizedData.map((d, index) => (
              <tr key={index}>
                <td>
            <span
                    className="chart-data-table-color"
              style={{
                backgroundColor:
                  type === "pie"
                    ? `hsl(${index * 60}, 70%, 50%)`
                    : "var(--accent-primary)",
              }}
            />
                  {d.label || `Item ${index + 1}`}
                </td>
                <td>{d.value || 0}</td>
              </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
