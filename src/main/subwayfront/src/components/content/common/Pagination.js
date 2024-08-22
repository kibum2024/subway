import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageLimit = 5; // 한 번에 표시할 페이지 번호 수
  const totalBlocks = Math.ceil(totalPages / pageLimit);

  // 현재 페이지가 포함된 블록의 첫 페이지 번호 계산
  const currentBlock = Math.ceil(currentPage / pageLimit);
  const startPage = (currentBlock - 1) * pageLimit + 1;
  const endPage = Math.min(startPage + pageLimit - 1, totalPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination">
      {/* 이전 페이지로 이동 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'◀'}
      </button>

      {/* 페이지 번호 */}
      {pages.map(page => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 다음 페이지로 이동 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'▶'}
      </button>
    </div>
  );
};

export default Pagination;
