import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

//TODO найти нормальное решение...
if (typeof window !== 'undefined') {
  require( '../../node_modules/materialize-css/dist/css/materialize.min.css');
  require('../../node_modules/materialize-css/dist/js/materialize.min.js');
}

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const {loading,error,request,clearError} = useHttp(); 
  const [form, setForm] = useState({email: '', password: ''});

  const changeHandler = event => {
    setForm({...form,[event.target.name] : event.target.value });
  }

  useEffect(()=> {
    message(error);
    clearError();
  },[error,message,clearError]);

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register','POST', {...form});
      message(data.message);
    } catch (e) {

    }
  }

  const loginHandler = async () => {
      try {

        const data = await request('/api/auth/login','POST', {...form});
        auth.login(data.token, data.userId);
        //message(data.message);
      } catch (e) {

      }
    }
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input 
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}/>
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input 
                  placeholder="Введите пароль"
                  id="pass"
                  type="password"
                  name="password"
                  onChange={changeHandler}/>
                <label htmlFor="pass">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
           <button className="btn yellow darken-4" style={{marginRight:10}} onClick={loginHandler} disabled={loading}>Войти</button>
           <button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading}>Регистрация</button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default AuthPage;