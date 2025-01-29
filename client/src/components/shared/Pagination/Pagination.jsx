import React, { useState } from 'react';
import './Pagination.css'


const Pagination = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(4);
  const [currentPage, setPage] = useState(1);

  const handleNext = () => {
    if (end < 20) {
      const newStart = end + 1;
      const newEnd = Math.min(newStart + 3, 20);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const handlePrevious = () => {
    if (start > 1) {
      const newEnd = start - 1;
      const newStart = Math.max(newEnd - 3, 1);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
        <div className="buttons">
        <button className="Previous-button" onClick={handlePrevious} disabled={start === 1}>
          Prev
        </button>

        {pageNumbers.map((page) => (
          <button key={page} style={{ margin: '5px' }} onClick={()=>setPage(page)} className={(currentPage===page) ? "currentPage" : "Page-button"}>
            {page}
          </button>
        ))}
        
        <button className="Next-button" onClick={handleNext} disabled={end === 20}>
          Next
        </button>
        </div>
      </div>
  );
};

export default Pagination;

