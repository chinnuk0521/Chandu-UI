import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import './Pagination.css';

/**
 * Reusable Pagination Component
 */
export default function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  showFirstLast = true,
  className = '',
  ...props
}) {
  const pages = [];
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <nav className={`pagination ${className}`} aria-label="Pagination" {...props}>
      {showFirstLast && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          First
        </button>
      )}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <HiChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <HiChevronRight />
      </button>
      {showFirstLast && (
        <button
          className="pagination-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          Last
        </button>
      )}
    </nav>
  );
}

