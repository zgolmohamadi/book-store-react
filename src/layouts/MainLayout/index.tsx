import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className='min-h-screen pt-1 pb-5 overflow-hidden'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
