import React from 'react';
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import LoginContainer from "@/components/login";

function AdminPage() {
  return (
    <div className={styles.home_container}>
      <Navbar/>
      <LoginContainer isAdmin={true}/>
    </div>
  )
}

export default AdminPage