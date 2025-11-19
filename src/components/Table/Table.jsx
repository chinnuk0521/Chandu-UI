/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## Table
 */

import React from "react";
import "./Table.css";

/**
 * Reusable Table Component
 *
 * @param {Array} columns - Array of column definitions { key, label, sortable } or array of strings
 * @param {Array} data - Array of data objects or array of arrays
 * @param {boolean} striped - Striped rows
 * @param {boolean} bordered - Bordered table
 * @param {string} className - Additional CSS classes
 */
export default function Table({
  columns = [],
  data = [],
  striped = false,
  bordered = false,
  className = "",
  ...props
}) {
  // Normalize columns - support both array of strings and array of objects
  const normalizedColumns = columns.map((col, index) => {
    if (typeof col === "string") {
      return { key: col.toLowerCase().replace(/\s+/g, "_"), label: col, sortable: false };
    }
    return { key: col.key || `col_${index}`, label: col.label || col.key, sortable: col.sortable || false };
  });

  // Normalize data - support both array of arrays and array of objects
  const normalizedData = data.map((row) => {
    if (Array.isArray(row)) {
      // Convert array to object using column keys
      const rowObj = {};
      normalizedColumns.forEach((col, index) => {
        rowObj[col.key] = row[index] || "";
      });
      return rowObj;
    }
    return row;
  });

  return (
    <div className={`table-wrapper ${className}`} {...props}>
      <table
        className={`table ${striped ? "table-striped" : ""} ${bordered ? "table-bordered" : ""}`}
      >
        <thead>
          <tr>
            {normalizedColumns.map((column) => (
              <th
                key={column.key}
                className={column.sortable ? "sortable" : ""}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {normalizedData.length > 0 ? (
            normalizedData.map((row, index) => (
              <tr key={index}>
                {normalizedColumns.map((column) => (
                  <td key={column.key}>{row[column.key] || ""}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={normalizedColumns.length} className="table-empty">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>);
}
