import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter  as Router } from 'react-router-dom';
import { useRoutes } from '../routes';

function Index() {
  const routes = useRoutes(true);
  return (
      <Router>
          {routes}
      </Router>
  );
}

export default Index;