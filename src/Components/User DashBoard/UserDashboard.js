import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../User DashBoard/UserDashboard.module.css";

const UserDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-content"]}>
        <Navbar />
      </div>
    </div>
  );
};

export default UserDashboard;
