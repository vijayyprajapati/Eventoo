import React from "react";
import axios from "axios";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserDetail from "./UserDetail";
import Navbar from "../../Navbar/Navbar";
import styles from "./Form.module.css";
import FinalSignup from "./FinalSignup";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
    name: "",
    number: "",
    collegeId: "",
    gender: "Male",
    section: "1",
    branch: "CSE",
  });

  // const FormTitles = ["Sign Up", "User Details", "Final Sign Up"];

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("Hello");
      console.log(formData);
      await axios.post("http://localhost:3008/api/user/", formData);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <UserDetail formData={formData} setFormData={setFormData} />;
    } else {
      return <FinalSignup formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["left-content"]}>
          <span className={styles.word1}>Hello, </span>
          <br></br> <span className={styles.word2}> Comarade</span>
        </div>
        <div className={styles["right-content"]}>
          <div className="body">{PageDisplay()}</div>

          {page === 0 && (
            <button
              className={styles.button}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          )}

          {page === 1 && (
            <button
              className={styles.button}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          )}

          {page === 2 && (
            <button className={styles.button} onClick={handleClick}>
              Submit
            </button>
          )}
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span> Login </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
