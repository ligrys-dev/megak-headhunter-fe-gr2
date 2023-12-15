import { useState, useEffect, FC, ChangeEvent } from 'react';
import './Pagination.css';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number, pageSize: number) => void;
  totalPages: number;
}

export const Pagination: FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const [pageSize, setPageSize] = useState(itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page, pageSize);
    }
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    onPageChange(1, newSize);
  };

  useEffect(() => {
    setPageSize(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <div className="pagination">
      <span>
        <p>Ilość elementów</p>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </span>
      <span>
        <p>
        {currentPage * itemsPerPage < totalItems
          ? currentPage * itemsPerPage
          : totalItems} / {totalItems}</p>
      </span>
      <span>
        <button
          onClick={() => handlePageChange(--currentPage)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <button
          onClick={() => handlePageChange(++currentPage)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </span>
    </div>
  );
};
