import React, { useContext } from 'react'
import UserContext from '../../Context/UserProvider/UserProvider';
import styles from "./Home.module.scss";

const Home = () => {
  const userContext = useContext(UserContext);

  return (
    <div className={styles.homepage}>
      <h1>Hello </h1>
      <h3>Record wine</h3>
      <h3>My wine</h3>
      <h3>Hot right now</h3>
    </div>
  );
};

export default Home;
