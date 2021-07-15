import './App.module.scss';
import styles from './App.module.scss';
import wine from './Assets/Images/wine.jpg';

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <img className={styles.wine} src={wine}></img>
      <div className={styles.heading}>
        <h1>Welcome</h1>
        <h4>Login</h4>
      </div>
    </>
  );
}

export default App;
