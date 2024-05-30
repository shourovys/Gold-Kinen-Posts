import React from 'react';
import Navbar from './Navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <section className='min-h-screen bg-gray-100'>
      <Navbar />
      <main className='container mx-auto p-4'>{children}</main>
    </section>
  );
};

export default Layout;
