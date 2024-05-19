'use client'

import React,{useState} from "react";
import Button from "../button";
import styles from "./index.module.css";
import Alert from '@mui/material/Alert';
import { checkVoter,addVoter } from "@/service";
import { useRouter } from 'next/navigation';

function LoginContainer({isAdmin=false}) {
  const { push } = useRouter();
  const [voterId, setVoterId] = useState();
  const [adminId, setAdminId] = useState();
  const [adminPassword, setAdminPassword] = useState();
  const [openErrorAlert, setOpenErrorAlert] = useState(false);

  const voterIdCheck = async ()=>{
    try {
      let payload={
        voterId
      }
      const res = await checkVoter(payload);
      console.log("res: ",res.data)
      if(res.data?.voterVotedAlready){
        throw "Voter Already Exists!"
      }
      else{
        const res = await addVoter(payload);
        push('/voterDashboard')
      }
    } catch (error) {
      console.log("Some error occurred while checking voter: ",error)
      setOpenErrorAlert(true)
    }
  }
  const onAdminLogin = ()=>{
    if(adminPassword[adminPassword?.length-1]=='0'){
      push('/dashboard')
    }
    else{
      setOpenErrorAlert(true)
    }
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.container}>
      {!isAdmin?(
        <>
        {openErrorAlert && <Alert severity="error">Voter Already Voted!</Alert>}
        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter voter ID
          </label>
          <input
            type="text"
            id="voter-id"
            className={styles.input_field}
            placeholder="Voter ID"
            onChange={e=>setVoterId(e.target.value)}
          />
        </div>
        <Button placeholder={"Vote"} onClick={voterIdCheck}/>
        </>
      ):(
        <>
        {openErrorAlert && <Alert severity="error">Wrong Password!</Alert>}
        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter ID
          </label>
          <input
            type="text"
            id="voter-id"
            className={styles.input_field}
            placeholder="ID"
            onChange={e=>setAdminId(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="voter-id" className={styles.input_label}>
            Enter Password
          </label>
          <input
            type="password"
            id="voter-id"
            className={styles.input_field}
            placeholder="Password"
            onChange={e=>setAdminPassword(e.target.value)}
          />
        </div>
        <Button placeholder={"Login"} onClick={onAdminLogin}/>
        </>
      )}
      </div>
    </div>
  );
}

export default LoginContainer;
