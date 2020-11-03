import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/home';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'

export default function Index(){
 /*  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;
  const router = useRouter();

  useEffect(()=>{
    router.prefetch('/home');
  },[]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth')
    }
    //else router.prefetch('/home');
  }, [isAuthenticated]); */

  return (
    // <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
      <MainLayout title={'Home'}>
        <Home/>
      </MainLayout>
    // </AuthContext.Provider>
  )
}