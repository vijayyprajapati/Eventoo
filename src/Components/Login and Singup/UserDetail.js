import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../Login and Singup/UserDetail.module.css";
const UserDetail = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    admissionNum: "",
    gender: "",
    section: "",
    branch: "",
  });

  const handleChange = (e) => {
    console.log(user);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <div className={styles["page-content"]}>
          <div className={styles["left-content"]}>
            <span className={styles.word1}>Hello, </span>
            <br></br> <span className={styles.word2}> Comarade</span>
          </div>

          <div className={styles.userDetail}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your Name"
            ></input>
            <label>Contact No.</label>
            <input
              type="number"
              name="number"
              value={user.number}
              onChange={handleChange}
              placeholder="Enter your number"
            ></input>
            <label>Admission No.</label>
            <input
              type="text"
              name="admissionNum"
              value={user.admissionNum}
              placeholder="Enter your admission number"
              onChange={handleChange}
            ></input>
            <div className={styles.selection}>
              <div className={styles.type}>
                <label>Gender</label>
                <select
                  value={user.value}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className={styles.type}>
                <label>Branch</label>

                <select
                  value={user.value}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="EC">EC</option>
                  <option value="EEE">EEE</option>
                  <option value="ME">ME</option>
                  <option value="CE">CE</option>
                </select>
              </div>
              <div className={styles.type}>
                <label>Section</label>
                <select
                  value={user.value}
                  name="gender"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <button className={styles.button}>Next</button>
            <p>
              Already have an account? <span> Login </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
