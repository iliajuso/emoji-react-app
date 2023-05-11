import React from 'react'
import style from "./Pagination.module.sass"

export const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const pageButtons = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(startPage + 4, pages);

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(i);
  }

  return (
      <div className={style.page}>
          <button className={`${style.buttonSide} ${style.first}`} onClick={() => setCurrentPage(currentPage -1)}>First</button>
      {pageButtons.map((el, ind) => (
        <button className={`${style.pages} ${currentPage == el ? style.active : null}`} onClick={() => setCurrentPage(el)} key={ind}>
          {el}
          </button>
      ))}
          
          {currentPage !== pages && ( 
  <button 
    className={`${style.buttonSide} ${style.last}`}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Last
  </button>
)}
  </div>
  );
};

