'use client'

import React,{useState,useEffect} from 'react'
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Button from '@/components/button';
import Alert from '@mui/material/Alert';
import { castVote, getParties } from '@/service';

function VoterDashboard() {
  // const parties = [
  //   { id:1,symbol: '🦅', name: 'BJP' },
  //   { id:2,symbol: '🌹', name: 'Congress' },
  //   { id:3,symbol: '🌿', name: 'AAP' },
  //   { id:4,symbol: '🐘', name: 'TMC' }
  // ];
  const partiesSymbol={
    'BJP':'🦅',
    'Congress':'🌹',
    'AAP':'🌿',
    'TMC':'🐘',
    'JDU':'🐘'
  }
  const [selectedParty, setSelectedParty] = useState(null);
  const [parties, setParties] = useState([]);
  const [selectedPartyToVote, setSelectedPartyToVote] = useState();
  const [successFullVoteCast, setSuccessFullVoteCast] = useState(false);
  const [errorVoteCast, setErrorVoteCast] = useState(false);
  const onClickVote=async()=>{
    try {
      let payload={
        id:selectedPartyToVote
      }
      const res = await castVote(payload);
      setSuccessFullVoteCast(true)
    } catch (error) {
      console.log("Error while casting vote: ",error);
      setErrorVoteCast(true)
    }
  }
  const getPartiesList = async ()=>{
    try {
      const res = await getParties();
      const data = res.data;
      let parties = data?.map(party=>({
        ...party,
        name:party?.partyName,
        symbol:partiesSymbol[party?.partyName]
      }))
      setParties(parties);
    } catch (error) {
      console.log("Error while fetching parties: ",error);
    }
  }
  useEffect(()=>{
    getPartiesList()
  },[])

  return (
    <div className={styles.home_container}>
      <Navbar/>
      <h2>Area: Vikas Puri Constituency, New Delhi</h2>
      <div className={styles.table_container}>
      <table className={styles.party_table}>
      <thead>
        <tr>
          <th></th>
          <th>Party Symbol</th>
          <th>Party Name</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((party, index) => (
          <tr key={index}>
            <td>
              <input
                type="radio"
                name="party"
                checked={selectedParty === index}
                onChange={() => {
                  setSelectedParty(index)
                  setSelectedPartyToVote(party.id)
                }}
              />
            </td>
            <td>{party.symbol}</td>
            <td>{party.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
        <Button placeholder={"Vote"} onClick={onClickVote}/>
      </div>
      {successFullVoteCast && <Alert severity="success">Casted Vote Successfully. You can close the tab</Alert>}
      {errorVoteCast && <Alert severity="error">Error while casting vote</Alert>}
    </div>
  )
}

export default VoterDashboard