import '../styles/main.css';
import '../styles/index.css';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'

export default function MyApp({ Component, pageProps }){
  const {token, login, logout, userId, isAuthenticated} = useAuth();
  //const isAuthenticated = !!token;
  const router = useRouter();


  useEffect(() => {
    
    if (!isAuthenticated) {
      router.replace('/auth');
    }
   
    
  }, []);

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated: !!token}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}