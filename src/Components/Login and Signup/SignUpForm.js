import React, { useState } from "react";
import styles from "./SignUpForm.module.css";

import Navbar from "../Navbar/Navbar";

const SingUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["left-content"]}>
          <span className={styles.word1}>Hello, </span>
          <br></br> <span className={styles.word2}> Comarade</span>
        </div>

        <div className={styles.signUp}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          ></input>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          ></input>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Your Password"
            onChange={handleChange}
          ></input>
          <button className={styles.button}>Next</button>
          <p>
            Already have an account? <span> Login </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
