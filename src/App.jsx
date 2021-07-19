import './App.module.scss';
import Routes from './Containers/Routes/Routes';
import Login from './Containers/Login/Login';
import UserProvider from './Context/UserProvider/UserProvider';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Login />
          <Routes />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
