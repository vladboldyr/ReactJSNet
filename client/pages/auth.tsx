import React,{ useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { useHistory } from "react-router-dom";
import {  makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid, Paper, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height:'100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const AuthPage = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const message = useMessage();
  const {loading,error,request,clearError} = useHttp(); 
  const [form, setForm] = useState({email: '', password: ''});

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,[event.target.name] : event.target.value });
  }
  useEffect(()=>{
    //window.M.updateTextFields()
  },[]);

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
        history.push("/");
      } catch (e) {

      }
    }
  return (
    <div className={classes.root}>
      <Grid container
            direction="row"
            justify="center"
            spacing={3}
            alignItems="flex-start" 
            style={{width:"100%",height:"100%"}}>
        <Grid item xs={12}>
          <Paper elevation={5} style={{width:"100%",height:"100%"}}>
            <form  noValidate autoComplete="off">
              <TextField id="standard-basic" label="Login" />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
    /* <div className="row">
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
    </div> */


export default AuthPage;