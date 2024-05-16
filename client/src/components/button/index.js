import React from 'react';
import styles from "./index.module.css"

function Button({placeholder}) {
  return (
    <button className={styles.vote_button}>{placeholder}</button>
  )
}

export default Button;