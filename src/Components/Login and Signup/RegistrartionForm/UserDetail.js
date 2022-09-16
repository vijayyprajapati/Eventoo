import React from "react";
import { useState } from "react";
import styles from "./UserDetail.module.css";
const UserDetail = ({ formData, setFormData }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.userDetail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            placeholder="Enter your Name"
          ></input>
          <label>Contact No.</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={(event) =>
              setFormData({ ...formData, number: event.target.value })
            }
            placeholder="Enter your number"
          ></input>
          <label>Admission No.</label>
          <input
            type="text"
            name="admissionNum"
            value={formData.admissionNum}
            onChange={(event) =>
              setFormData({ ...formData, admissionNum: event.target.value })
            }
            placeholder="Enter your admission number"
          ></input>
          <div className={styles.selection}>
            <div className={styles.type}>
              <label>Gender</label>
              <select
                value={formData.gender}
                onChange={(event) =>
                  setFormData({ ...formData, gender: event.target.value })
                }
                name="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className={styles.type}>
              <label>Branch</label>

              <select
                value={formData.branch}
                onChange={(event) =>
                  setFormData({ ...formData, branch: event.target.value })
                }
                name="branch"
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
                value={formData.section}
                onChange={(event) =>
                  setFormData({ ...formData, section: event.target.value })
                }
                name="section"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
