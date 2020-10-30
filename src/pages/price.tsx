import MainLayout from '../components/MainLayout/MainLayout';
import Price from '../components/Price/Price';
export default function Index(){
  return (
    <MainLayout title={'Price'}> 
      <Price/>
    </MainLayout>
  )
}