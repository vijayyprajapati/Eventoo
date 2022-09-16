import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./UserDashboard.module.css";
import image2 from "../../Images/image2.png";
import image3 from "../../Images/image3.png";

const UserDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard-content"]}>
        <Navbar />
        <div className={styles["dashboard-img"]}>
          <img className={styles.img1} src={image2} alt="" />
          <img className={styles.img2} src={image3} alt="" />
        </div>
        <div className={styles["events-section"]}>
          <h1>Events</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
