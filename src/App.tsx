import React, {Component, Fragment} from "react";
import 'materialize-css';
/*import { Formik } from 'formik';*/
import {Clients} from './components/Clietns/clients';


function App() {
    return (
        <Fragment>
            <div className="card-panel teal lighten-2" style={{marginTop: 0}}>
                <h2>Журнал клиентов</h2>
            </div>
            <Clients/>
        </Fragment>
    )
}

export default App

