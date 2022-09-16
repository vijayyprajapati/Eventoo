import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = async (e) => {
    console.log("Hello");
    e.preventDefault();
    try {
      console.log(user);
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        user
      );
      setUser(res.data.user);
      navigate("/userdashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    console.log(user);
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
          <button className={styles.button} onClick={login}>
            Login
          </button>
          <p>
            Do not have an account?{" "}
            <Link to="/signup">
              <span> Sign Up </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
