import React from 'react'
import Link from 'next/link'
import styles from "./index.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img className={styles.icon} src='/eci-logo.svg'></img>
        <div className={styles.links}>
          <Link href="/">Voter</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;