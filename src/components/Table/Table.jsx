import React from "react";
import "./Table.css";

/**
 * Reusable Table Component
 *
 * @param {Array} columns - Array of column definitions { key, label, sortable }
 * @param {Array} data - Array of data objects
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
  return (
    <div className={`table-wrapper ${className}`} {...props}>
      <table
        className={`table ${striped ? "table-striped" : ""} ${bordered ? "table-bordered" : ""}`}
      >
        <thead>
          <tr>
            {columns.map((column) => (
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
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
