import React from 'react'
import style from "./Header.module.sass"
export default function Header({ onFilterChange }) {
  return (
    <header className={style.header}>
      <div className={style.block}>
        <h1 className={style.name}>Emoji Finder</h1>
        <p className={style.title}>Find emoji by keywords</p>
      </div>
      <input className={style.input} type="text" placeholder="Search" onChange={onFilterChange} />
    </header>
  );
}
