import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Home from '../pages/homepage';
import Today from '../pages/todaypage';
import Profile from '../pages/profilepage';
import SinglePin from '../pages/singlePinPage';
import Modal from './modal/modal';
import { useState } from 'react';
import FusedImages from './fusedImages/fusedImages';
const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/profile"><Profile/></Route>
        <Route path="/today"><Today/></Route>
        <Route path="/single"><SinglePin/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
    {/* <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch> */}
  {/* <FusedImages/> */}
  </div>
  )
};

export default App;