import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Pagination.css';

function Pagination() {
  const { page, handlePageChange, totalPage } = useContext(AppContext);

  return (
    <div className="pagination-container">
      {page > 1 && (
        <button onClick={() => handlePageChange(page - 1)}>
          Previous
        </button>
      )}

      {page < totalPage && (
        <button onClick={() => handlePageChange(page + 1)}>
          Next
        </button>
      )}

      <button className="page-info" disabled>
        Page {page} of {totalPage}
      </button>
    </div>
  );
}

export default Pagination;
