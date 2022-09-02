import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <div className={styles["page-content"]}>
          <div className={styles["left-content"]}>
            <span className={styles.word1}>Welcome, </span>
            <br></br> <span className={styles.word2}> Comarade</span>
          </div>
          <div className={styles["right-content"]}>
            <div className={styles.buttons}>
              <button className={styles.loginBtn}>Login</button>
              <button>Sing Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
