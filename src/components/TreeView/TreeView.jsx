import React, { useState } from "react";
import {
  HiChevronRight,
  HiChevronDown,
  HiFolder,
  HiFolderOpen,
  HiDocument,
} from "react-icons/hi";
import "./TreeView.css";

/**
 * Reusable TreeView Component
 *
 * @param {Array} data - Tree data
 * @param {Function} onSelect - Selection handler
 * @param {string} className - Additional CSS classes
 */
export default function TreeView({
  data = [],
  onSelect,
  className = "",
  ...props
}) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderNode = (node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded[node.id];

    return (
      <div key={node.id} className="tree-view-node">
        <div
          className="tree-view-item"
          style={{ paddingLeft: `${level * 1.5}rem` }}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(node.id);
            }
            if (onSelect) {
              onSelect(node);
            }
          }}
        >
          {hasChildren && (
            <span className="tree-view-chevron">
              {isExpanded ? <HiChevronDown /> : <HiChevronRight />}
            </span>
          )}
          {!hasChildren && <span className="tree-view-spacer" />}
          <span className="tree-view-icon">
            {hasChildren ? (
              isExpanded ? (
                <HiFolderOpen />
              ) : (
                <HiFolder />
              )
            ) : (
              <HiDocument />
            )}
          </span>
          <span className="tree-view-label">{node.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div className="tree-view-children">
            {node.children.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`tree-view ${className}`} {...props}>
      {data.map((node) => renderNode(node))}
    </div>
  );
}
