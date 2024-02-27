import { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState(10);

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <li key={page} className="page-items">
          <button className="page-link" onClick={() => handleClick(page)}>
            {page}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <div
      className="justify-content-center align-items-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        <li
          className={`className="page-item" ${
            currentPage === 1 ? " disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handleClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {renderPages()}
        <li
          className={`className="page-item" ${
            currentPage === totalPages ? " disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => handleClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
