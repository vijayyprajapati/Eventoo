import React from "react";
import styles from "./FinalSignUp.module.css";
import image1 from "../../../Images/image1.png";

const FinalSignup = ({ formData, setFormData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={image1} height="200px" width="200px" alt="abc" />
        <h2>{formData.name}</h2>
        <p className={styles.gmail}>{formData.email}</p>
      </div>
    </div>
  );
};

export default FinalSignup;
