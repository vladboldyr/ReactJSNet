import React, {Component, Fragment} from "react";
import 'materialize-css';
/*import { Formik } from 'formik';*/
import {Clients} from './components/Clients';


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
/*class App extends Component{
    render(){
        return(
            <div className="App">
                <h1> Hello, World!!!!! </h1>
                <button>Enter</button>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}*/
