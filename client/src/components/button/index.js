import React from 'react';
import styles from "./index.module.css"

function Button({placeholder,onClick=()=>{}}) {
  return (
    <button className={styles.vote_button} onClick={onClick}>{placeholder}</button>
  )
}

export default Button;