import React from "react";
import styles from "../LoginPage/LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>EventO</div>
        </div>
        <div className={styles["page-content"]}>
          <div className={styles["right-content"]}>
            <span className={styles.word1}>Welcome, </span>
            <br></br> <span className={styles.word2}> Comarade</span>
          </div>
          <div className={styles["left-content"]}>
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

export default LoginPage;
