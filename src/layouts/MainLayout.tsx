import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
