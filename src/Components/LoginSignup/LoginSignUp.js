import React, { useState } from "react";
import styles from "./LoginSignUp.module.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router";
import { useRef } from "react";
import axios from "axios";
import { message } from "antd";

function LoginSignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const navigate = useNavigate();
  const [action, setAction] = useState("Login");

  const onClickSignUpHandle = () => {
    if (action === "Sign up") {
      axios
        .post("http://localhost:8080/auth/register", {
          username: emailRef.current.value,
          password: passwordRef.current.value,
          name: nameRef.current.value,
          email: emailRef.current.value,
          phonenumber: "0919469733",
        })
        .then((res) => {
          if (res.data.user) {
            message.success(res.data.message);
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          message.error(err.message);
        });
    } else {
      setAction("Sign up");
    }
  };

  const onClickLoginHandle = () => {
    if (action === "Login") {
      axios
        .post("http://localhost:8080/auth/login", {
          username: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((response) => {
          if (response.data.userDTO) {
            const user = response.data;

            if (user.userDTO) {
              localStorage.removeItem("user");
              localStorage.setItem("user", JSON.stringify(user));
              let isAdmin = false;
              if (user.userDTO.type === "EMPLOYEE") {
                user.userDTO.authorities.map((el) => {
                  if (el.authority === "ADMIN") isAdmin = true;
                  return el;
                });
              }
              if (isAdmin) navigate("/admin");
              else navigate("/user");
            }
          } else {
            message.error(response.data.message);
          }
        });
    } else {
      setAction("Login");
    }
  };
  return (
    <div className={`${styles.container}`}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div
          className={
            action === "Login"
              ? `${styles.hidden} ${styles.input}`
              : `${styles.input}`
          }
        >
          <img src={user_icon} alt="" />
          <input ref={nameRef} type="text" placeholder="Name" />
        </div>
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input ref={emailRef} type="email" placeholder="Email" />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input ref={passwordRef} type="password" placeholder="Password" />
        </div>
      </div>
      <div className={styles.forgot__password}>Lost Password?</div>
      <div className={styles.submit__container}>
        <div
          className={
            action === "Login"
              ? `${styles.gray} ${styles.submit}`
              : `${styles.submit}`
          }
          onClick={onClickSignUpHandle}
        >
          Sign Up
        </div>
        <div
          className={
            action === "Login"
              ? `${styles.submit}`
              : `${styles.gray} ${styles.submit}`
          }
          onClick={onClickLoginHandle}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
