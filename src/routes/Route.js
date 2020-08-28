import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from 'store';

export default function RouteValidator({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/list" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
