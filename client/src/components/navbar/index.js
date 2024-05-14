import React from 'react'
import styles from "./index.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img className={styles.icon} src='/eci-logo.svg'></img>
        <div className={styles.links}>
          <a href="/voter">Voter</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;