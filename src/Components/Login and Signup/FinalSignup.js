import React from "react";
import styles from "./FinalSignUp.module.css";
import Navbar from "../Navbar/Navbar";
import image1 from "../../Images/image1.png";

const FinalSignup = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["left-content"]}>
          <span className={styles.word1}>Hello, </span>
          <br></br> <span className={styles.word2}> Comarade</span>
        </div>
        <div className={styles.profile}>
          <img src={image1} height="200px" width="200px" alt="abc" />
          <h2>Udbhav Patel</h2>
          <p className={styles.gmail}>udbhavpatel@gmail.com</p>
          <button>Sign Up</button>
          <p>
            Already have an account? <span> Login </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalSignup;
