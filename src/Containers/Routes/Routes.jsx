import React from "react";
import RecordWine from '../RecordWine/RecordWine';
import HotRightNow from '../HotRightNow/HotRightNow';
import MyWine from '../MyWine/MyWine';
import Home from '../Home/Home';

import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
    <Switch>
      <Route path='/'>
          <Home />
      </Route>

      <Route path='/recordwine'>
        <RecordWine/>
      </Route>

      <Route path='/mywine'>
        <MyWine />
      </Route>

      <Route path='/hotrightnow'>
        <HotRightNow />
      </Route>

    </Switch>
  </div>
  );
};

export default Routes;