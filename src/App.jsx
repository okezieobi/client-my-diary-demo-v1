/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/containers/Home';
import Signup from './components/containers/Signup';
import Signin from './components/containers/Signin';
import HomeDash from './components/containers/HomeDash';
import ContentDash from './components/containers/ContentDash';
import ComposeForm from './components/containers/Compose';
import EditForm from './components/containers/Edit';
import Profile from './components/containers/Profile';

import authServices from './services/Auth';

export default function App() {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/home/entry/edit">
        <EditForm />
      </Route>
      <Route path="/home/entry/compose">
        <ComposeForm />
      </Route>
      <Route path="/home/entry">
        <ContentDash />
      </Route>
      <authServices.PrivateRoute path="/home">
        <HomeDash />
      </authServices.PrivateRoute>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
