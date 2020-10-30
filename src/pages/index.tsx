import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/home';
export default function Index(){
  return (
    <MainLayout title={'Home'}>
      <Home/>
    </MainLayout>
  )
}