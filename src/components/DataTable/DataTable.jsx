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

  const filteredData =
    searchable && searchQuery
      ? data.filter((row) =>
          columns.some((col) =>
            String(row[col.key] || "")
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        )
      : data;

  const sortedData =
    sortable && sortColumn
      ? [...filteredData].sort((a, b) => {
          const aVal = a[sortColumn];
          const bVal = b[sortColumn];
          if (sortDirection === "asc") {
            return aVal > bVal ? 1 : -1;
          }
          return aVal < bVal ? 1 : -1;
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
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={sortable && column.sortable ? "sortable" : ""}
                  onClick={() =>
                    sortable && column.sortable && handleSort(column.key)
                  }
                >
                  <div className="data-table-header">
                    {column.label}
                    {sortable &&
                      column.sortable &&
                      sortColumn === column.key && (
                        <span className="data-table-sort-icon">
                          {sortDirection === "asc" ? (
                            <HiChevronUp />
                          ) : (
                            <HiChevronDown />
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
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="data-table-empty">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
