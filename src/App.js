import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Schedule from './Containers/Schedule/Schedule';
import Layout from './hoc/Layout/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/schedule" render={() => <Schedule />} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default withRouter(App);
