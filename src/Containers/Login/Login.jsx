import React, { useContext } from "react";
import styles from "./Login.module.scss";
import wine from '../../Assets/Images/wine.jpg';
import { UserContext } from '../../Context/UserProvider/UserProvider';

const Login = () => {
  const user = useContext(UserContext)

  return (

    <div className={styles.loginpage}>
      <img className={styles.wine} src={wine}></img>
      <div className={styles.heading}>
        <h1>Welcome</h1>
        <button onClick={user.signIn}>Login</button>
      </div>
    </div>
  );
};

export default Login;
