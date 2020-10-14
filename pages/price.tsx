import MainLayout from '../src/components/MainLayout/MainLayout';
import Price from '../src/components/Price/Price';
export default function Index(){
  return (
    <MainLayout title={'Price'}> 
      <Price/>
    </MainLayout>
  )
}