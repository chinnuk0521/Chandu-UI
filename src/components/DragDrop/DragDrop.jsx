import React, { useState } from "react";
import "./DragDrop.css";

/**
 * Reusable DragDrop Component
 *
 * @param {Array} items - Draggable items
 * @param {Function} onReorder - Reorder handler
 * @param {React.ReactNode} renderItem - Item render function
 * @param {string} className - Additional CSS classes
 */
export default function DragDrop({
  items = [],
  onReorder,
  renderItem,
  className = "",
  ...props
}) {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      const newItems = [...items];
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(dropIndex, 0, removed);
      if (onReorder) {
        onReorder(newItems);
      }
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className={`drag-drop ${className}`} {...props}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`drag-drop-item ${draggedIndex === index ? "dragging" : ""} ${dragOverIndex === index ? "drag-over" : ""}`}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
        >
          <span className="drag-drop-handle">⋮⋮</span>
          {renderItem ? renderItem(item, index) : <span>{item}</span>}
        </div>
      ))}
    </div>
  );
}
