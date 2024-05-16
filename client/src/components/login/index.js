import React from "react";
import Button from "../button";
import styles from "./index.module.css";

function LoginContainer({isAdmin=false}) {
  return (
    <div className={styles.login_container}>
      <div className={styles.container}>
      {!isAdmin?(
        <>
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
        <Button placeholder={"Vote"}/>
        </>
      ):(
        <>
        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter ID
          </label>
          <input
            type="text"
            id="voter-id"
            className={styles.input_field}
            placeholder="ID"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter Password
          </label>
          <input
            type="text"
            id="voter-id"
            className={styles.input_field}
            placeholder="Password"
          />
        </div>
        <Button placeholder={"Login"}/>
        </>
      )}
      </div>
    </div>
  );
}

export default LoginContainer;
