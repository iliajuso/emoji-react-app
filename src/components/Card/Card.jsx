import React from 'react'
import style from "./Card.module.sass"
export const Card = ({ data, firstIndex, lastIndex }) => {
    const removeDuplicateWords = (text) => {
    let words = text.split(' ');
    words = words.filter((word, index) => words.indexOf(word) === index);
    return words.join(' ');
    };
    return (
        <div className={style.container}>
      {data.slice(firstIndex, lastIndex).map((emoji) => (
          <div key={emoji.title} className={style.wrap}>
              <div className={style.emoji}>{emoji.symbol}</div>
          <h2 className={style.name}>{emoji.title}</h2>
          <p className={style.title}>{removeDuplicateWords(emoji.keywords)}</p>
        </div>
      ))}
    </div>
  );
}
export default Card