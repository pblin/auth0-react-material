import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Videos from './Videos';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/videos' component={Videos}/>
    </Switch>
  </div>
);

export default Main;