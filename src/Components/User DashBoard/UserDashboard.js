import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./UserDashboard.module.css";
import { Link } from "react-router-dom";

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
          <div className={styles["events-head"]}>
            <h1>Events</h1>
            <span>Learn with us</span>
          </div>
          <div className={styles["show-events"]}>
            <div className={styles["events-text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              facilis? Ratione natus soluta unde, officiis hic perspiciatis.
              Explicabo hic, suscipit quaerat corporis fugiat labore aliquam
              asperiores ab beatae in voluptatem.
            </div>
            <div className={styles.events}>1</div>
            <div className={styles.events}>2</div>
            <div className={styles.events}>3</div>
          </div>
          <div className={styles["my-event-head"]}>
            <h1>My Events</h1>
          </div>
          <div className={styles["my-events"]}>
            <div className={styles.events}>1</div>
            <div className={styles.events}>2</div>
          </div>
        </div>
        <div className={styles["bottom-content"]}>
          <p>Want to know more about us and our work?</p>

          <button>Contact Us</button>
        </div>
        <div className={styles["footer"]}>
          <div>@2022 GDSC JSSATE, Noida</div>
          <div className={styles.address}>
            Jss Academy of Technical Education, Sector-62, Noida, U.P. , India -
            201301
          </div>
          <div className={styles.link}>
            <div>Link</div>
            <div>Link</div>
            <div>Link</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
