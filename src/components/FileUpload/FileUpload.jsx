/**
 * Documentation:
 * Refer to COMPONENT_DOCUMENTATION.md
 * Section: ## FileUpload
 */

import React, { useState, useRef } from "react";
import { HiCloudUpload, HiX } from "react-icons/hi";
import "./FileUpload.css";

/**
 * Reusable FileUpload Component
 *
 * @param {Function} onFileSelect - Callback when file is selected
 * @param {Array} accept - Accepted file types
 * @param {number} maxSize - Max file size in MB
 * @param {boolean} multiple - Allow multiple files
 * @param {string} className - Additional CSS classes
 */
export default function FileUpload({
  onFileSelect,
  accept = "*/*",
  maxSize = 10,
  multiple = false,
  className = "",
  ...props
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    const validFiles = fileArray.filter((file) => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File ${file.name} exceeds maximum size of ${maxSize}MB`);
        return false;
      }
      return true;
    });

    const newFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : newFiles[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    handleFileSelect(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : newFiles[0]);
    }
  };

  return (
    <>
      <a 
        href="/docs?component=FileUpload" 
        className="documentation-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/docs?component=FileUpload";
        }}
        style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'inherit', textDecoration: 'underline' }}
      >
        Check Documentation
      </a>
      <div className={`file-upload ${className}`} {...props}>
      <div
        className={`file-upload-area ${isDragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <HiCloudUpload className="file-upload-icon" />
        <p className="file-upload-text">
          Drag and drop files here, or click to select
        </p>
        <p className="file-upload-hint">Max size: {maxSize}MB</p>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="file-upload-input"
        />
      </div>

      {files.length > 0 && (
        <div className="file-upload-list">
          {files.map((file, index) => (
            <div key={index} className="file-upload-item">
              <span className="file-upload-name">{file.name}</span>
              <span className="file-upload-size">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                className="file-upload-remove"
                onClick={() => removeFile(index)}
                aria-label="Remove file"
              >
                <HiX />
              </button>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
