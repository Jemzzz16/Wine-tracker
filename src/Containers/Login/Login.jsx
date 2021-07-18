import React from "react";
import styles from "./Login.module.scss";
import wine from '../../Assets/Images/wine.jpg';

const Login = () => {
  return (
    <div className={styles.loginpage}>
      <img className={styles.wine} src={wine}></img>
      <div className={styles.heading}>
        <h1>Welcome</h1>
        <h4>Login</h4>
      </div>
    </div>
  );
};

export default Login;
