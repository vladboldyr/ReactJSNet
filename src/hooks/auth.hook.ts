import { useCallback, useEffect, useState } from "react"

const storageName = 'userData'; 

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthenticated,setAuthenticated] = useState(false);

  const login = useCallback((jwtToken:string,id:string)=>{
    //debugger;
    setToken(jwtToken);
    setUserId(id);
    setAuthenticated(true);
    localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}));
  },[]);

  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    setAuthenticated(false);
    localStorage.removeItem(storageName);
  },[]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userId);
    }

  },[]);

  return {login, logout, token, userId, isAuthenticated};
}