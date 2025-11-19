/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## TreeView
 */

import React, { useState, useMemo } from "react";
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
  const [selected, setSelected] = useState(null);

  // Generate unique IDs for nodes if they don't have them
  const normalizeData = (nodes, parentPath = "") => {
    return nodes.map((node, index) => {
      const nodeId = node.id || `${parentPath}-${index}-${node.label}`;
      const nodePath = parentPath ? `${parentPath}-${index}` : `${index}`;
      
      const normalizedNode = {
        ...node,
        id: nodeId,
        path: nodePath,
      };

      if (node.children && node.children.length > 0) {
        normalizedNode.children = normalizeData(node.children, nodePath);
      }

      return normalizedNode;
    });
  };

  const normalizedData = useMemo(() => normalizeData(data), [data]);

  const toggleExpand = (id, event) => {
    event.stopPropagation();
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNodeClick = (node, event) => {
    event.stopPropagation();
    setSelected(node.id);
    if (onSelect) {
      onSelect(node);
    }
  };

  const renderNode = (node, level = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded[node.id];
    const isSelected = selected === node.id;

    return (
      <div key={node.id} className="tree-view-node">
        <div
          className={`tree-view-item ${isSelected ? "selected" : ""}`}
          style={{ paddingLeft: `${level * 1.5}rem` }}
          onClick={(e) => handleNodeClick(node, e)}
        >
          {hasChildren && (
            <span
              className="tree-view-chevron"
              onClick={(e) => toggleExpand(node.id, e)}
            >
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
    <>
      <a 
        href="/docs?component=TreeView" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=TreeView";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`tree-view ${className}`} {...props}>
        {normalizedData.map((node) => renderNode(node))}
      </div>
    </>
  );
}
