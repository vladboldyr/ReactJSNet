import React, {Component, Fragment} from "react";
import 'materialize-css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
/*import { Formik } from 'formik';*/
import {Clients} from './components/Clietns/clients';
import {Main} from './components/Main/Main';
import {Home} from './components/Home/home';
import {Price} from './components/Price/price';
import {Works} from './components/MyWorks/works';
import {Contacts} from './components/Contacts/contacts';

 /* <Fragment>
            <div className="card-panel teal lighten-2" style={{marginTop: 0}}>
                <h2>Журнал клиентов</h2>
            </div>
            <Clients/>
        </Fragment> */
const App = () => {
    return (
        <>
          <Main/>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/price'} component={Price} />
            <Route path={'/works'} component={Works} />
            <Route path={'/contacts'} component={Contacts} />
            <Redirect from='/' to='/'/>
          </Switch>
        </>
    );
}

export default withRouter(App);

