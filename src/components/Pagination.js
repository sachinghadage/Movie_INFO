import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
    </div>
  );
}

export default Pagination;
