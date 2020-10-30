import $ from 'jquery';
import { useEffect } from 'react';


//import '../../node_modules/materialize-css/dist/js/materialize.min.js';



if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require( '../../node_modules/materialize-css/dist/css/materialize.min.css');
}

const AuthPage = () => {


  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>

            </div>
          </div>
          <div className="card-action">
           <button className="btn yellow darken-4" style={{marginRight:10}}>Войти</button>
           <button className="btn grey lighten-1 black-text">Регистрация</button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default AuthPage;