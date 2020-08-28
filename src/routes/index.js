import React from 'react';
import { Switch } from 'react-router-dom';

import Route from 'routes/Route';

import SignIn from 'pages/SignIn';
import DragonList from 'pages/DragonList';
import DragonAdd from 'pages/DragonAdd';
import DragonDetails from 'pages/DragonDetails';
import DragonEdit from 'pages/DragonEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/list" component={DragonList} isPrivate />
      <Route path="/new" component={DragonAdd} isPrivate />
      <Route
        path="/details/:id"
        component={(props) => <DragonDetails {...props} />}
        isPrivate
      />
      <Route
        path="/edit/:id"
        component={(props) => <DragonEdit {...props} />}
        isPrivate
      />
      <Route path="/" component={SignIn} />
    </Switch>
  );
}
