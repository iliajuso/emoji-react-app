import React from 'react'
import style from "./PerPage.module.sass"

// export function PerPage({ setPerPage, setCurrentPage }) {
//   return (
//     <div className={style.per}>
//   <span className={style.text}>Per page</span>
//     <select className={style.select} onChange={(event) => {
//       setPerPage(event.target.value)
//       setCurrentPage(event.target.value)
//     }
     
// }>
//       <option value={12}>12</option>
//        <option value={24}>24</option>
//         <option value={48}>48</option>
//       </select>
//       </div>
//   )
// }
export function PerPage({ setPerPage, currentPage }) {
  const handlePerPageChange = (event) => {
    const perPage = Number(event.target.value);
    const totalItems = perPage * (currentPage - 1) + 1;
    const newPage = Math.ceil(totalItems / perPage);
    setPerPage(perPage, newPage);
  };

  return (
    <div className={style.per}>
      <span className={style.text}>Per page</span>
      <select
        className={style.select}
        onChange={handlePerPageChange}
        value={currentPage}
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
      </select>
    </div>
  );
}


