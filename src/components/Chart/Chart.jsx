import React from "react";
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
  const maxValue = Math.max(...data.map((d) => d.value), 0);

  const renderLineChart = () => {
    const points = data
      .map((d, index) => {
        const x = (index / (data.length - 1 || 1)) * 100;
        const y = 100 - (d.value / maxValue) * 100;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg viewBox="0 0 100 100" className="chart-svg">
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent-primary)"
          strokeWidth="2"
        />
        {data.map((d, index) => {
          const x = (index / (data.length - 1 || 1)) * 100;
          const y = 100 - (d.value / maxValue) * 100;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="var(--accent-primary)"
            />
          );
        })}
      </svg>
    );
  };

  const renderBarChart = () => {
    const barWidth = 100 / data.length;

    return (
      <svg viewBox="0 0 100 100" className="chart-svg">
        {data.map((d, index) => {
          const height = (d.value / maxValue) * 100;
          const x = index * barWidth;
          const y = 100 - height;
          return (
            <rect
              key={index}
              x={x + barWidth * 0.1}
              y={y}
              width={barWidth * 0.8}
              height={height}
              fill="var(--accent-primary)"
            />
          );
        })}
      </svg>
    );
  };

  const renderPieChart = () => {
    let currentAngle = 0;
    const total = data.reduce((sum, d) => sum + d.value, 0);

    return (
      <svg viewBox="0 0 100 100" className="chart-svg">
        {data.map((d, index) => {
          const angle = (d.value / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const startX =
            50 + 40 * Math.cos(((startAngle - 90) * Math.PI) / 180);
          const startY =
            50 + 40 * Math.sin(((startAngle - 90) * Math.PI) / 180);
          const endX =
            50 + 40 * Math.cos(((currentAngle - 90) * Math.PI) / 180);
          const endY =
            50 + 40 * Math.sin(((currentAngle - 90) * Math.PI) / 180);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <path
              key={index}
              d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY} Z`}
              fill={`hsl(${index * 60}, 70%, 50%)`}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className={`chart chart-${type} ${className}`} {...props}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-container">
        {type === "line" && renderLineChart()}
        {type === "bar" && renderBarChart()}
        {type === "pie" && renderPieChart()}
      </div>
      <div className="chart-legend">
        {data.map((d, index) => (
          <div key={index} className="chart-legend-item">
            <span
              className="chart-legend-color"
              style={{
                backgroundColor:
                  type === "pie"
                    ? `hsl(${index * 60}, 70%, 50%)`
                    : "var(--accent-primary)",
              }}
            />
            <span className="chart-legend-label">{d.label}</span>
            <span className="chart-legend-value">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
