import React  from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home/home';
import Price from './pages/price';
import Comments from './pages/comments';
import Works from './pages/works';
import Contacts from './pages/contacts';
import Auth from './pages/auth';
import MainLayout from './components/MainLayout/MainLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <>
        
        <Switch>
          <AppRoute path={'/'} exact layout={MainLayout} component={Home}/>
          <AppRoute path={'/price'} exact layout={MainLayout} component={Price}/>
          <AppRoute path={'/commetns'} layout={MainLayout} component={Comments}/>
          <AppRoute path={'/works'}  layout={MainLayout} component={Works}/>
          <AppRoute path={'/contacts'}  layout={MainLayout} component={Contacts}/>
          <Redirect to='/'/>
        </Switch>
      </>
    )
  }
  return (
      <Switch>
        <Route path={'/auth'}  component={Auth}/>
        <Redirect to='/'/>
      </Switch>
  );
}