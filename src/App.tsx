import React, {Component, Fragment} from "react";
import 'materialize-css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
/*import { Formik } from 'formik';*/
import {Clients} from './components/Clietns/clients';
import {Main} from './components/Main/Main';


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
        </>
    );
}

export default App;

