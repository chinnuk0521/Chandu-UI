/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## DataTable
 */

import React, { useState } from "react";
import { HiChevronUp, HiChevronDown, HiSearch } from "react-icons/hi";
import "./DataTable.css";

/**
 * Reusable DataTable Component
 *
 * @param {Array} columns - Table columns configuration
 * @param {Array} data - Table data
 * @param {boolean} searchable - Enable search
 * @param {boolean} sortable - Enable sorting
 * @param {string} className - Additional CSS classes
 */
export default function DataTable({
  columns = [],
  data = [],
  searchable = true,
  sortable = true,
  className = "",
  ...props
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Normalize columns - support both array of strings and array of objects
  const normalizedColumns = columns.map((col, index) => {
    if (typeof col === "string") {
      return { 
        key: col.toLowerCase().replace(/\s+/g, "_"), 
        label: col, 
        sortable: sortable 
      };
    }
    return { 
      key: col.key || `col_${index}`, 
      label: col.label || col.key, 
      sortable: col.sortable !== undefined ? col.sortable : sortable 
    };
  });

  const filteredData =
    searchable && searchQuery
      ? data.filter((row) =>
          normalizedColumns.some((col) => {
            // Handle both object and array data formats
            const value = row[col.key] || (typeof row === 'object' && row !== null ? Object.values(row).join(' ') : String(row));
            return String(value || "")
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        )
      : data;

  const sortedData =
    sortable && sortColumn
      ? [...filteredData].sort((a, b) => {
          let aVal = a[sortColumn];
          let bVal = b[sortColumn];
          
          // Handle null/undefined values
          if (aVal == null) aVal = "";
          if (bVal == null) bVal = "";
          
          // Convert to strings for comparison if needed
          const aStr = String(aVal).toLowerCase();
          const bStr = String(bVal).toLowerCase();
          
          // Try to compare as numbers if both are numeric
          const aNum = Number(aVal);
          const bNum = Number(bVal);
          const isNumeric = !isNaN(aNum) && !isNaN(bNum) && aStr !== "" && bStr !== "";
          
          if (isNumeric) {
            return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
          }
          
          // String comparison
          if (sortDirection === "asc") {
            return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
          }
          return aStr < bStr ? 1 : aStr > bStr ? -1 : 0;
        })
      : filteredData;

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnKey);
      setSortDirection("asc");
    }
  };

  return (
    <div className={`data-table ${className}`} {...props}>
      {searchable && (
        <div className="data-table-search">
          <HiSearch className="data-table-search-icon" />
          <input
            type="text"
            className="data-table-search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}
      <div className="data-table-container">
        <table className="data-table-table">
          <thead>
            <tr>
              {normalizedColumns.map((column) => (
                <th
                  key={column.key}
                  className={column.sortable ? "sortable" : ""}
                  onClick={() =>
                    column.sortable && handleSort(column.key)
                  }
                >
                  <div className="data-table-header">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span className="data-table-sort-icon">
                        {sortColumn === column.key ? (
                          sortDirection === "asc" ? (
                            <HiChevronUp />
                          ) : (
                            <HiChevronDown />
                          )
                        ) : (
                          <HiChevronUp style={{ opacity: 0.3 }} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr key={index}>
                  {normalizedColumns.map((column) => {
                    // Handle both object and array data formats
                    let cellValue = row[column.key];
                    if (cellValue === undefined && typeof row === 'object' && row !== null) {
                      // Try to find value by label if key doesn't match
                      const labelKey = column.label;
                      cellValue = row[labelKey] || '';
                    }
                    return <td key={column.key}>{cellValue != null ? cellValue : ""}</td>;
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={normalizedColumns.length} className="data-table-empty">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>);
}
