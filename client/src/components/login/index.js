import React from "react";
import Button from "../button";
import styles from "./index.module.css";

function LoginContainer() {
  return (
    <div className={styles.login_container}>
      <div className={styles.container}>

        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter voter ID
          </label>
          <input
            type="text"
            id="voter-id"
            className={styles.input_field}
            placeholder="Voter ID"
          />
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default LoginContainer;
