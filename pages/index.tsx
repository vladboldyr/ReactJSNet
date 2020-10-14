import MainLayout from '../src/components/MainLayout/MainLayout';
import Home from '../src/components/Home/home';
export default function Index(){
  return (
    <MainLayout title={'Home'}>
      <Home/>
    </MainLayout>
  )
}