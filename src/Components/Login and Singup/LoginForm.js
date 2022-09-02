import React, { useState } from "react";
import styles from "../Login and Singup/LoginForm.module.css";
import Navbar from "../Navbar/Navbar";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
          <span className={styles.word1}>Welcome back, </span>
          <br></br> <span className={styles.word2}> Comarade</span>
        </div>

        <div className={styles.login}>
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
          <button className={styles.button}>Login</button>
          <p>
            Do not have an account? <span> Sign Up </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
