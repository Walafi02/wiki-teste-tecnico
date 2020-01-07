import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Posts from '../pages/Posts';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/new" exact component={SignUp} />
      <Route path="/Posts" exact component={Posts} isPrivate />
    </Switch>
  );
}
