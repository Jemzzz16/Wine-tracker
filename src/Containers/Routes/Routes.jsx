import React, { useContext } from "react";
import RecordWine from '../RecordWine/RecordWine';
import HotRightNow from '../HotRightNow/HotRightNow';
import MyWine from '../MyWine/MyWine';
import Home from '../Home/Home';
import Login from '../Login/Login';

import { UserContext } from '../../Context/UserProvider/UserProvider';
import { Switch, Route, Redirect } from "react-router-dom";

export const Routes = () => {
  const userContext = useContext(UserContext);

  let privateRoutes = '';
  if (!userContext.user) {
    privateRoutes = <Redirect to='/'/>;
  }

  return (
    <div>
    <Switch>
      <Route path='/home'>
      {/* {privateRoutes} */}
          <Home />
      </Route>

      <Route path='/recordwine'>
      {/* {privateRoutes} */}
        <RecordWine/>
      </Route>

      <Route path='/mywine'>
      {/* {privateRoutes} */}
        <MyWine />
      </Route>

      <Route path='/hotrightnow'>
      {/* {privateRoutes} */}
        <HotRightNow />
      </Route>

      <Route path='/'>
          <Login/>
        </Route>

    </Switch>
  </div>
  );
};

export default Routes;