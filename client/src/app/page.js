import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import LoginContainer from "@/components/login";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Navbar/>
      <LoginContainer/>
    </div>
  );
}
