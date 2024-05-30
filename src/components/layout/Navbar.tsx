import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='container p-4 mx-auto flex justify-between items-center'>
        <div className='text-white text-lg font-bold'>Gold Kinen Posts</div>
        <div className='space-x-4'>
          <a href='#home' className='text-gray-300 hover:text-white'>
            Home
          </a>
          <a href='#about' className='text-gray-300 hover:text-white'>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
