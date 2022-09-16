import React, { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = ({ formData, setFormData }) => {
  return (
    <div className={styles.signUp}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        placeholder="Enter your Email"
      ></input>
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        placeholder="Enter your Password"
      ></input>
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        name="reEnterPassword"
        value={formData.reEnterPassword}
        onChange={(event) =>
          setFormData({ ...formData, reEnterPassword: event.target.value })
        }
        placeholder="Re-enter Your Password"
      ></input>
    </div>
  );
};

export default SignUpForm;
