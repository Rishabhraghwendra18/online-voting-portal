'use client'
import React,{useState,useEffect} from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import { getParties } from '@/service';

function Dashboard() {
  // const parties = [
  //   { symbol: "🦅", name: "BJP", votes: 1200 },
  //   { symbol: "🌹", name: "Congress", votes: 900 },
  //   { symbol: "🌿", name: "AAP", votes: 1500 },
  //   { symbol: "🐘", name: "TMC", votes: 2000 },
  // ];
  const partiesSymbol={
    'BJP':'🦅',
    'Congress':'🌹',
    'AAP':'🌿',
    'TMC':'🐘',
    'JDU':'🐘'
  }
  const [parties, setParties] = useState([]);
  
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
      <Navbar />
      <h2>Area: Vikas Puri Constituency, New Delhi</h2>
      <div className={styles.table_container}>
      <table className={styles.party_table}>
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Party Symbol</th>
          <th>Party Name</th>
          <th>Vote Counts</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((party, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{party.symbol}</td>
            <td>{party.name}</td>
            <td>{party.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
}

export default Dashboard;
