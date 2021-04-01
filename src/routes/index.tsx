import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Layout from '../components/Layout';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />

      <Route path="/main" isPrivate component={Layout} />
    </Switch>
  );
};

export default Routes;
