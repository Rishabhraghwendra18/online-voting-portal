'use client'

import React,{useState} from 'react'
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Button from '@/components/button';

function VoterDashboard() {
  const parties = [
    { symbol: '🦅', name: 'BJP' },
    { symbol: '🌹', name: 'Congress' },
    { symbol: '🌿', name: 'AAP' },
    { symbol: '🐘', name: 'TMC' }
  ];
  const [selectedParty, setSelectedParty] = useState(null);

  return (
    <div className={styles.home_container}>
      <Navbar/>
      <span>Area: Vikas Puri Consitutency</span>
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
                onChange={() => setSelectedParty(index)}
              />
            </td>
            <td>{party.symbol}</td>
            <td>{party.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
        <Button placeholder={"Vote"}/>
      </div>
    </div>
  )
}

export default VoterDashboard