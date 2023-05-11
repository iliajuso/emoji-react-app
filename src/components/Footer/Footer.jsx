import React from 'react'
import style from "./Footer.module.sass"
import { PerPage } from '../perPage/PerPage'
import { Pagination } from '../pagination/Pagination'
export const Footer = ({setPerPage, pages, setCurrentPage, currentPage}) => {
  return (
    <footer className={style.footer}>
      <hr className={style.hr} />
      <div className={style.info}>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <p className={style.p}>2023 © Made with love by me</p>
         <div className={style.perPage}><PerPage setPerPage={setPerPage} setCurrentPage={setCurrentPage}/></div>
        </div>
    </footer>
  )
}
