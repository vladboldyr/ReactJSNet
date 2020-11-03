import React,{ createContext } from "react";

function noopLogin (token:string,id:string):void {}
function noop ():void {}


export const AuthContext = createContext({
  token: null, 
  userId: null,
  login: noopLogin,
  logout: noop,
  isAuthenticated: false
});