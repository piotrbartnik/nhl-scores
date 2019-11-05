import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Schedule from './Containers/Schedule/Schedule';
import Standings from './Containers/Standings/Standings';
import Stats from './Containers/Stats/Stats';
import Layout from './hoc/Layout/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/schedule" render={() => <Schedule />} />
      <Route path="/standings" render={() => <Standings />} />
      <Route path="/stats" render={() => <Stats />} />
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
