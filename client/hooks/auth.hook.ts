import { useCallback, useEffect, useState } from "react"

const storageName:string = 'userData'; 

export const useAuth = () => {
  const [token, setToken] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const login = useCallback((jwtToken:string,id:string)=>{
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}));
  },[]);

  const logout = useCallback(()=>{
    setToken("");
    setUserId("");
    localStorage.removeItem(storageName);
  },[]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storageName) || 'null');
    if (data && data.token) {
      login(data.token, data.userId);
    }
  },[]);

  return {login, logout, token, userId };
}