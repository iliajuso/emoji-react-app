import React from 'react'
import style from "./Main.module.sass"
export const Main = ({children}) => {
  return (
    <main className={style.main}>{children}</main>
  )
}
export default Main
