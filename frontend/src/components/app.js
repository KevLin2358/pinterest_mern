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


const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/profile"><Profile/></Route>
        <Route exact path="/today"><Today/></Route>
        <Route exact path="/"><Home/></Route>
      </Switch>
    </Router>
    {/* <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch> */}
  </div>
);

export default App;