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
import { Routes } from 'react-router-dom'
import Modal from './modal/modal';
import { useState } from 'react';
import FusedImages from './fusedImages/fusedImages';
import SplashPage from '../pages/splashpage';
import CreatePage from '../pages/createPage';
import UserPage from '../pages/userPage';
import boardPage from '../pages/boardPage';
import { userID } from '../actions/session_actions';
import { useDispatch } from 'react-redux';


const App = () => {
// const dispatch = useDispatch()

  return (
    <div>
    <Router>
      <Switch>
        {/* <AuthRoute exact path="/" component={Home} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route path="/splash"><SplashPage/></Route>
        <Route path="/pins/:pinId" component={SinglePin} />
        <Route path="/boards/:boardId" component={boardPage} />
        <Route path="/profile"><UserPage/></Route>
        <Route path="/create"><CreatePage/></Route>
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